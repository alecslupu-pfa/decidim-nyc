!function(){var t={45130:function(){$((function(){var t=function(){return $(".table-list .js-check-all-proposal:checked").length},e=function(){return $(".table-list [data-published-state=false] .js-check-all-proposal:checked").length},o=function(){var o=t(),n=e();0===o?$("#js-selected-proposals-count").text(""):$("#js-selected-proposals-count").text(o),o>=2?$('button[data-action="merge-proposals"]').parent().show():$('button[data-action="merge-proposals"]').parent().hide(),n>0?($('button[data-action="publish-answers"]').parent().show(),$("#js-form-publish-answers-number").text(n)):$('button[data-action="publish-answers"]').parent().hide()},n=function(){t()>0&&$("#js-bulk-actions-button").removeClass("hide")},a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];0!==t()&&!0!==e||($("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown").removeClass("is-open"))},c=function(){$("#js-other-actions-wrapper").removeClass("hide")},l=function(){$("#js-other-actions-wrapper").addClass("hide")},s=function(){$(".js-bulk-action-form").addClass("hide")};window.selectedProposalsCount=t,window.selectedProposalsNotPublishedAnswerCount=e,window.selectedProposalsCountUpdate=o,window.showBulkActionsButton=n,window.hideBulkActionsButton=a,window.showOtherActionsButtons=c,window.hideOtherActionsButtons=l,window.hideBulkActionForms=s,$(".js-bulk-action-form").length&&(s(),$("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown ul li button").click((function(t){t.preventDefault();var e=$(t.target).data("action");e&&($("#js-form-".concat(e)).submit((function(){$(".layout-content > .callout-wrapper").html("")})),$("#js-".concat(e,"-actions")).removeClass("hide"),a(!0),l())})),$(".js-check-all").change((function(){$(".js-check-all-proposal").prop("checked",$(this).prop("checked")),$(this).prop("checked")?($(".js-check-all-proposal").closest("tr").addClass("selected"),n()):($(".js-check-all-proposal").closest("tr").removeClass("selected"),a()),o()})),$(".table-list").on("change",".js-check-all-proposal",(function(t){var e=$(this).val(),c=$(this).prop("checked");!1===$(this).prop("checked")&&$(".js-check-all").prop("checked",!1),$(".js-check-all-proposal:checked").length===$(".js-check-all-proposal").length&&($(".js-check-all").prop("checked",!0),n()),$(this).prop("checked")?(n(),$(this).closest("tr").addClass("selected")):(a(),$(this).closest("tr").removeClass("selected")),0===$(".js-check-all-proposal:checked").length&&a(),$(".js-bulk-action-form").find(".js-proposal-id-".concat(e)).prop("checked",c),o()})),$(".js-cancel-bulk-action").on("click",(function(t){s(),n(),c()})))}))},18372:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}$((function(){var e=$(".picker-content"),o=e.data("picker-more"),n=e.data("picker-path"),a=function(){var t=0===$("#proposals_list li:visible").length;$("#no_proposals").toggle(t)},c=null,l="";a(),$(".data_picker-modal-content").on("change keyup","#proposals_filter",(function(s){var i=s.target.value.toLowerCase();if(o){if(i.length<3)return;if(i===l)return;null!==c&&c.abort(),e.html("<div class='loading-spinner'></div>"),c=$.get("".concat(n,"?q=").concat(i),(function(o){l=i,e.html(o),c=null,a(),"object"===t(window.theDataPicker)&&null!==window.theDataPicker.current&&(window.theDataPicker._handleCheckboxes(e),window.theDataPicker._handleLinks(e))}))}else $("#proposals_list li").each((function(t,e){$(e).toggle(e.textContent.toLowerCase().indexOf(i)>-1)})),a()}))}))}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,o),c.exports}!function(){"use strict";o(45130);function t(t,e,o){var n="".concat(t,"Name");if(o[n])return o[n];var a=e.attr("name"),c=/\[[^\]]+\]$/;return a.match(c)?a.replace(c,"[".concat(t,"]")):t}function e(e,o,n){var a=$.extend({},o),c=e.attr("id").split("_");c.pop();var l="".concat(c.join("_")),s="latitude",i="longitude";e.length>0&&(s=t("latitude",e,a),i=t("longitude",e,a));var r=$.extend({latitudeId:"".concat(l,"_latitude"),longitudeId:"".concat(l,"_longitude"),latitudeName:s,longitudeName:i},o),d=!1,u=function(t){!function(){var t=$("#".concat(r.latitudeId));t.length<1&&(t=$('<input type="hidden" name="'.concat(r.latitudeName,'" id="').concat(r.latitudeId,'" />')),e.after(t));var o=$("#".concat(r.longitudeId));o.length<1&&(o=$('<input type="hidden" name="'.concat(r.longitudeName,'" id="').concat(r.longitudeId,'" />')),e.after(o))}(),$("#".concat(r.latitudeId)).val(t[0]).attr("value",t[0]),$("#".concat(r.longitudeId)).val(t[1]).attr("value",t[1])};e.on("change.decidim",(function(){d||($("#".concat(r.latitudeId)).val("").removeAttr("value"),$("#".concat(r.longitudeId)).val("").removeAttr("value"))})),e.on("geocoder-suggest-coordinates.decidim",(function(t,e){u(e),d=!0,n(e)}));var p="".concat(e.data("coordinates")).split(",").map(parseFloat);Array.isArray(p)&&2===p.length&&u(p)}$((function(){var t=$(".proposal_form_admin");if(t.length>0){var o=t.find("#proposal_created_in_meeting"),n=t.find("#proposal_meeting"),a=function(){var t=o.prop("checked");n.find("select").attr("disabled","disabled"),n.hide(),t&&(n.find("select").attr("disabled",!t),n.show())};o.on("change",a),a();var c=t.find("#proposal_address");0!==c.length&&e(c)}}));o(18372)}()}();
//# sourceMappingURL=decidim_proposals_admin-4f0ed0e4e253f9fe5250.js.map