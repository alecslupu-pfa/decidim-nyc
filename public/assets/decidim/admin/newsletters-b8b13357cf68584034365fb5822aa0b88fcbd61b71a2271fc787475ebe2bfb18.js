"use strict";$(function(){var e,c,t,n,i,o,p=$(".form.newsletter_deliver");p.length>0&&(e=p.find("#send_newsletter_to_all_users"),c=p.find("#send_newsletter_to_followers"),t=p.find("#send_newsletter_to_participants"),n=p.find("#participatory_spaces_for_select"),i=c.find("input[type='checkbox']").prop("checked"),o=t.find("input[type='checkbox']").prop("checked"),e.on("change",function(e){var i=e.target.checked;i?(c.find("input[type='checkbox']").prop("checked",!i),t.find("input[type='checkbox']").prop("checked",!i),n.hide()):(c.find("input[type='checkbox']").prop("checked",!i),t.find("input[type='checkbox']").prop("checked",!i),n.show())}),c.on("change",function(c){var i=c.target.checked,o=t.find("input[type='checkbox']").prop("checked");i?(e.find("input[type='checkbox']").prop("checked",!i),n.show()):o||(e.find("input[type='checkbox']").prop("checked",!0),n.hide())}),t.on("change",function(t){var i=t.target.checked,o=c.find("input[type='checkbox']").prop("checked");i?(e.find("input[type='checkbox']").prop("checked",!i),n.show()):o||(e.find("input[type='checkbox']").prop("checked",!0),n.hide())}),i||o?n.show():n.hide(),$(".form .spaces-block-tag").each(function(e,c){var t=$(c).find(".chosen-select");t.change(function(){var e=t.find("option:selected").val();"all"===e?(t.find("option").not(":first").prop("selected",!0),t.find("option[value='all']").prop("selected",!1)):""===e&&t.find("option").not(":first").prop("selected",!1)})}),p.on("change",function(){var e=p.serializeJSON().newsletter,c=p.data("recipients-count-newsletter-path"),t=$("#recipients_count_spinner");t.removeClass("hide"),$.get(c,{data:e},function(e){$("#recipients_count").text(e)}).always(function(){t.addClass("hide")})}))});