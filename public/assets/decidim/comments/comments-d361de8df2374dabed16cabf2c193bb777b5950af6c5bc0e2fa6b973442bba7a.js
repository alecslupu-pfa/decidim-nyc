function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}window.DecidimComments=window.DecidimComments||{},window.DecidimComments={assets:{"icons.svg":"/assets/decidim/icons-12032a129d2a2668259128b86df2c8829ea6cdaa07beb8538a61c4872aa66328.svg"}};var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e){var t=e.$,n=function(){function n(e,t){_classCallCheck(this,n),this.$element=e,this.commentableGid=t.commentableGid,this.commentsUrl=t.commentsUrl,this.rootDepth=t.rootDepth,this.order=t.order,this.lastCommentId=t.lastCommentId,this.pollingInterval=t.pollingInterval||15e3,this.id=this.$element.attr("id")||this._getUID(),this.mounted=!1}return _createClass(n,[{key:"mountComponent",value:function(){var e=this;this.$element.length>0&&!this.mounted&&(this.mounted=!0,this._initializeComments(this.$element),t(".order-by__dropdown .is-submenu-item a",this.$element).on("click.decidim-comments",function(){e._onInitOrder()}))}},{key:"unmountComponent",value:function(){this.mounted&&(this.mounted=!1,this._stopPolling(),t(".add-comment .opinion-toggle .button",this.$element).off("click.decidim-comments"),t(".add-comment textarea",this.$element).off("input.decidim-comments"),t(".order-by__dropdown .is-submenu-item a",this.$element).off("click.decidim-comments"),t(".add-comment form",this.$element).off("submit.decidim-comments"))}},{key:"addThread",value:function(e){var n=t(".comments:first",this.$element),o=t(e),i=t(".comment-threads",this.$element);this._addComment(i,o),this._finalizeCommentCreation(n)}},{key:"addReply",value:function(e,n){var o=t("#comment_"+e),i=t(n),m=t("#comment-"+e+"-replies");this._addComment(m,i),m.siblings(".comment__additionalreply").removeClass("hide"),this._finalizeCommentCreation(o)}},{key:"_getUID",value:function(){return"comments-"+(new Date).setUTCMilliseconds()+"-"+Math.floor(1e7*Math.random())}},{key:"_initializeComments",value:function(e){var n=this;t(".add-comment",e).each(function(e,o){var i=t(o),m=t("form",i),a=t(".opinion-toggle .button",i),s=t("textarea",m);a.on("click.decidim-comments",n._onToggleOpinion),s.on("input.decidim-comments",n._onTextInput),t(document).trigger("attach-mentions-element",[s.get(0)]),m.on("submit.decidim-comments",function(){t("button[type='submit']",m).attr("disabled","disabled"),n._stopPolling()})}),this._pollComments()}},{key:"_addComment",value:function(n,o){var i=t(".comment",o);i.length<1&&(i=o),this.lastCommentId=parseInt(i.data("comment-id"),10),n.append(o),o.foundation(),this._initializeComments(o),e.Decidim.createCharacterCounter&&e.Decidim.createCharacterCounter(t(".add-comment textarea",o))}},{key:"_finalizeCommentCreation",value:function(e){var n=t("> .add-comment",e),o=t("textarea",n),i=o.data("remaining-characters-counter");o.val(""),i&&i.updateStatus(),n.parent().is(".comments")||n.addClass("hide"),this._pollComments()}},{key:"_pollComments",value:function(){var e=this;this._stopPolling(),this.pollTimeout=setTimeout(function(){t.ajax({url:e.commentsUrl,method:"GET",contentType:"application/javascript",data:{commentable_gid:e.commentableGid,root_depth:e.rootDepth,order:e.order,after:e.lastCommentId}}).done(function(){e._pollComments()})},this.pollingInterval)}},{key:"_stopPolling",value:function(){this.pollTimeout&&clearTimeout(this.pollTimeout)}},{key:"_setLoading",value:function(){var e=t("> .comments-container",this.$element);t("> .comments",e).addClass("hide"),t("> .loading-comments",e).removeClass("hide")}},{key:"_onInitOrder",value:function(){this._stopPolling(),this._setLoading()}},{key:"_onToggleOpinion",value:function(e){var n=t(e.target);n.is(".button")||(n=n.parents(".button"));var o=n.closest(".add-comment"),i=t("form",o),m=t(".opinion-toggle .button",o),a=t(".alignment-input",i);m.removeClass("is-active"),n.addClass("is-active"),n.is(".opinion-toggle--ok")?a.val(1):n.is(".opinion-toggle--meh")?a.val(0):n.is(".opinion-toggle--ko")&&a.val(-1)}},{key:"_onTextInput",value:function(e){var n=t(e.target),o=n.closest(".add-comment"),i=t("form",o),m=t("button[type='submit']",i);n.val().length>0?m.removeAttr("disabled"):m.attr("disabled","disabled")}}]),n}();e.Decidim=e.Decidim||{},e.Decidim.CommentsComponent=n,t(function(){t("[data-decidim-comments]").each(function(e,o){var i=t(o),m=new n(i,i.data("decidim-comments"));m.mountComponent(),t(o).data("comments",m)})})}(window);