namespace :heroku do
  desc "Deploy a test version on heroku"
  task setup: :environment do
    if ENV["SECRET_KEY_BASE"].nil?
      puts "No SECRET_KEY_BASE found !"
      puts "export SECRET_KEY_BASE first : "
      puts "export SECRET_KEY_BASE=#{`bundle exe rake secret`}"
      exit 1
    end

    if ENV["AWS_ACCESS_KEY_ID"].nil?
      puts "No AWS_ACCESS_KEY_ID found !"
      puts "export SECRET_KEY_BASE first"
      exit 1
    end

    if ENV["AWS_SECRET_ACCESS_KEY"].nil?
      puts "No SECRET_KEY_BASE found !"
      puts "export SECRET_KEY_BASE first"
      exit 1
    end

    skip_first_login_authorization = ENV["SKIP_FIRST_LOGIN_AUTHORIZATION"].nil? ? false : ENV["SKIP_FIRST_LOGIN_AUTHORIZATION"]

    app_name_raw = `git rev-parse --abbrev-ref HEAD`
    digit        = /\d.\d.-/.match(app_name_raw)
    if digit.nil?
      app_name = app_name_raw.gsub("_", "-")[0..29].chomp
    else
      app_name = app_name_raw.gsub(digit[0], "").gsub("_", "-")[0..29].chomp
    end

    if system("heroku create #{app_name} --region eu")
      system("heroku addons:create newrelic:wayne -a #{app_name}")
      system("heroku addons:create heroku-redis:hobby-dev -a #{app_name}")
      system("heroku addons:create memcachedcloud:30 -a #{app_name}")
      system("heroku addons:create sentry:f1 -a #{app_name}")
      system("heroku addons:create sendgrid:starter -a #{app_name}")
      system("heroku labs:enable runtime-dyno-metadata -a #{app_name}")
      system("heroku config:set SEED=true -a #{app_name}")
      system("heroku config:set SKIP_FIRST_LOGIN_AUTHORIZATION=#{skip_first_login_authorization} -a #{app_name}")
      system("heroku config:set SECRET_KEY_BASE=$SECRET_KEY_BASE -a #{app_name}")
      system("heroku config:set AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID")
      system("heroku config:set AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY")
      system("heroku git:remote -a #{app_name}")
      if system("git push heroku $(git rev-parse --abbrev-ref HEAD):master")
        if system("heroku run bundle exec rake db:schema:load db:seed")
          puts "Deploy is over, visit your app : #{`heroku apps:info -s  | grep web_url | cut -d= -f2`}"
        end
      end
    end
  end

  task push: :environment do
    system("git push heroku $(git rev-parse --abbrev-ref HEAD):master")
  end

end
