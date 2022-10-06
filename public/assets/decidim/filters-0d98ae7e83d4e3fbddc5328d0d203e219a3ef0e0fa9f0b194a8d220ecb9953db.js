"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function e(e,t){var n=[],i=!0,r=!1,a=undefined;try{for(var o,c=e[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(s){r=!0,a=s}finally{try{!i&&c["return"]&&c["return"]()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function t(n){_classCallCheck(this,t),this.$form=n,this.id=this.$form.attr("id")||this._getUID(),this.mounted=!1,this.changeEvents=!0,this._updateInitialState(),this._onFormChange=e.delayed(this,this._onFormChange.bind(this)),this._onPopState=this._onPopState.bind(this),window.Decidim.PopStateHandler?this.popStateSubmiter=!1:(this.popStateSubmiter=!0,window.Decidim.PopStateHandler=this.id)}return _createClass(t,[{key:"unmountComponent",value:function(){this.mounted&&(this.mounted=!1,this.$form.off("change","input, select",this._onFormChange),e.Decidim.History.unregisterCallback("filters-"+this.id))}},{key:"mountComponent",value:function(){var t=this;this.$form.length>0&&!this.mounted&&function(){t.mounted=!0;var n=0,i=$(t.$form.closest(".filters").parent().find(".skip").attr("href"));0===i.length&&(i=t.$form.data("remoteFill")),t.$form.on("change","input:not([data-disable-dynamic-change]), select:not([data-disable-dynamic-change])",t._onFormChange),t.currentFormRequest=null,t.$form.on("ajax:beforeSend",function(e){t.currentFormRequest&&t.currentFormRequest.abort(),t.currentFormRequest=e.originalEvent.detail[0],(n+=1)>0&&i.length>0&&!i.hasClass("spinner-container")&&i.addClass("spinner-container")}),t.$form.on("ajax:success",function(){(n-=1)<=0&&i.length>0&&i.removeClass("spinner-container")}),t.$form.on("ajax:error",function(){(n-=1)<=0&&i.length>0&&i.removeClass("spinner-container"),t.$form.find(".spinner-container").addClass("hide")}),e.theCheckBoxesTree.setContainerForm(t.$form),e.Decidim.History.registerCallback("filters-"+t.id,function(e){t._onPopState(e)})}()}},{key:"_updateInitialState",value:function(){var t=this._currentStateAndPath(),n=_slicedToArray(t,2),i=n[0],r=n[1];r._path=i,e.Decidim.History.replaceState(null,r)}},{key:"_getLocation",value:function(){var t=arguments.length<=0||arguments[0]===undefined||arguments[0],n=e.Decidim.History.state(),i="";return i=n&&n._path?n._path:e.location.pathname+e.location.search+e.location.hash,t?e.location.origin+i:i}},{key:"_parseLocationFilterValues",value:function(){var e=decodeURIComponent(this._getLocation()).match(/filter\[([^\]]*)\](?:\[\])?=([^&]*)/g);return e?e.reduce(function(e,t){var n=t.match(/filter\[([^\]]*)\](\[\])?=([^&]*)/),i=_slicedToArray(n,4),r=i[1],a=i[2],o=i[3];return a?(e[r]||(e[r]=[]),e[r].push(o)):e[r]=o,e},{}):null}},{key:"_parseLocationOrderValue",value:function(){var e=this._getLocation().match(/order=([^&]*)/),t=this.$form.find(".order-by .menu").find(".menu a:first").data("order");return e&&(t=e[1]),t}},{key:"_clearForm",value:function(){this.$form.find("input[type=checkbox]").each(function(e,t){t.checked=t.indeterminate=!1}),this.$form.find("input[type=radio]").attr("checked",!1),this.$form.find(".data-picker").each(function(t,n){e.theDataPicker.clear(n)}),this.$form.find("fieldset input[type=radio]:first").each(function(){$(this)[0].checked=!0})}},{key:"_onPopState",value:function(t){var n=this;this.changeEvents=!1,this._clearForm();var i=this._parseLocationFilterValues(),r=this._parseLocationOrderValue();(this.$form.find("input.order_filter").val(r),i)&&Object.keys(i).forEach(function(e){var t=i[e];if(Array.isArray(t)){var r=n.$form.find('input[type=checkbox][name="filter['+e+'][]"]');window.theCheckBoxesTree.updateChecked(r,t)}else n.$form.find('*[name="filter['+e+']"]').each(function(e,n){switch(n.type){case"hidden":break;case"radio":case"checkbox":n.checked=t===n.value;break;default:n.value=t}})});$(".data-picker",this.$form).each(function(n,i){var r=t[i.id];r&&e.theDataPicker.load(i,r)}),this.popStateSubmiter&&e.Rails.fire(this.$form[0],"submit"),this.changeEvents=!0}},{key:"_onFormChange",value:function(){if(this.changeEvents){var t=this._currentStateAndPath(),n=_slicedToArray(t,2),i=n[0],r=n[1];i!==this._getLocation(!1)&&(e.Rails.fire(this.$form[0],"submit"),e.Decidim.History.pushState(i,r))}}},{key:"_currentStateAndPath",value:function(){var t=this.$form.attr("action"),n=this.$form.find(":not(.ignore-filters)").find("select:not(.ignore-filter), input:not(.ignore-filter)").serialize(),i="",r={};return i=t.indexOf("?")<0?t+"?"+n:t+"&"+n,$(".data-picker",this.$form).each(function(t,n){r[n.id]=e.theDataPicker.save(n)}),[i,r]}},{key:"_getUID",value:function(){return"filter-form-"+(new Date).setUTCMilliseconds()+"-"+Math.floor(1e7*Math.random())}}]),t}();e.Decidim=e.Decidim||{},e.Decidim.FormFilterComponent=t}(window),function(){var e=window.Decidim.FormFilterComponent;$(function(){$("form.new_filter").each(function(){new e($(this)).mountComponent()})})}();