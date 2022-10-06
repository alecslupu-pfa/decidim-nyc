"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.listSelector=t.listSelector,this.hideOnFirstSelector=t.hideOnFirstSelector,this.hideOnLastSelector=t.hideOnLastSelector,this.run()}return _createClass(e,[{key:"run",value:function(){var e=$(this.listSelector),t=this.hideOnFirstSelector,n=this.hideOnLastSelector;if(1===e.length){var i=e.first();i.find(t).hide(),i.find(n).hide()}else e.each(function(i,r){r.id===e.first().attr("id")?($(r).find(t).hide(),$(r).find(n).show()):r.id===e.last().attr("id")?($(r).find(n).hide(),$(r).find(t).show()):($(r).find(n).show(),$(r).find(t).show())})}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.AutoButtonsByPositionComponent=t}(window);_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()}return _createClass(e,[{key:"run",value:function(){var e=this;$(this.listSelector).each(function(t,n){var i=$(n).find(e.labelSelector),r=i.html();r.match(/#(\d+)/)?i.html(r.replace(/#(\d+)/,"#"+(t+1))):i.html(r+" #"+(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)})}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.AutoLabelByPositionComponent=t}(window);_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.addSeparatorButtonSelector=t.addSeparatorButtonSelector,this.fieldTemplateSelector=t.fieldTemplateSelector,this.separatorTemplateSelector=t.separatorTemplateSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.moveUpFieldButtonSelector=t.moveUpFieldButtonSelector,this.moveDownFieldButtonSelector=t.moveDownFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.onMoveUpField=t.onMoveUpField,this.onMoveDownField=t.onMoveDownField,this.placeholderId=t.placeholderId,this.elementCounter=0,this._enableInterpolation(),this._activateFields(),this._bindEvents()}return _createClass(e,[{key:"_enableInterpolation",value:function(){$.fn.replaceAttribute=function(e,t,n){return $(this).find("["+e+"*="+t+"]").addBack("["+e+"*="+t+"]").each(function(i,r){$(r).attr(e,$(r).attr(e).replace(t,n))}),this},$.fn.template=function(e,t){var n=$(this).find("template, .decidim-template");n.length>0&&n.html(function(n,i){return $(i).template(e,t)[0].outerHTML});var i=$(this).find("[data-template]");return i.length>0&&i.each(function(n,i){var r=$(i),o=$(r.data("template")),a=$(o[0].outerHTML),l=o.attr("id")+"-"+t,d="#"+l;a.attr("id",l),r.attr("data-template",d).data("template",d),o.after(a),a.html(function(n,i){return $(i).template(e,t)[0].outerHTML})}),$(this).replaceAttribute("id",e,t),$(this).replaceAttribute("name",e,t),$(this).replaceAttribute("data-tabs-content",e,t),$(this).replaceAttribute("for",e,t),$(this).replaceAttribute("tabs_id",e,t),$(this).replaceAttribute("href",e,t),this}}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(){return e._addField(e.fieldTemplateSelector)})}),this.addSeparatorButtonSelector&&$(this.wrapperSelector).on("click",this.addSeparatorButtonSelector,function(t){return e._bindSafeEvent(t,function(){return e._addField(e.separatorTemplateSelector)})}),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(t){return e._removeField(t)})}),this.moveUpFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveUpFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(t){return e._moveUpField(t)})}),this.moveDownFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveDownFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(t){return e._moveDownField(t)})})}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(n){return console.error(n),n}}},{key:"_addField",value:function(){var e=arguments.length<=0||arguments[0]===undefined?".decidim-template":arguments[0],t=$(this.wrapperSelector),n=t.find(this.containerSelector),i=t.data("template"),r=null;i&&(r=$(i)),(null===r||r.length<1)&&(r=t.children("template, "+e));var o=$(r.html()).template(this.placeholderId,this._getUID());o.find("ul.tabs").attr("data-tabs",!0);var a=n.find(this.fieldSelector).last();a.length>0?a.after(o):o.appendTo(n),o.foundation(),this.onAddField&&this.onAddField(o)}},{key:"_removeField",value:function(e){var t=$(e).parents(this.fieldSelector);if(t.find("input").filter(function(e,t){return t.name.match(/id/)}).length>0){var n=t.find("input").filter(function(e,t){return t.name.match(/delete/)});n.length>0&&$(n[0]).val(!0),t.addClass("hidden"),t.hide()}else t.remove();this.onRemoveField&&this.onRemoveField(t)}},{key:"_moveUpField",value:function(e){var t=$(e).parents(this.fieldSelector);t.prev().before(t),this.onMoveUpField&&this.onMoveUpField(t)}},{key:"_moveDownField",value:function(e){var t=$(e).parents(this.fieldSelector);t.next().after(t),this.onMoveDownField&&this.onMoveDownField(t)}},{key:"_activateFields",value:function(){var e=this,t=$(this.wrapperSelector).find(this.containerSelector);t.append(t.find("script")),$(this.fieldSelector).each(function(t,n){$(n).template(e.placeholderId,e._getUID()),$(n).find("ul.tabs").attr("data-tabs",!0)})}},{key:"_getUID",value:function(){return this.elementCounter+=1,(new Date).getTime()+this.elementCounter}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.DynamicFieldsComponent=t,e.DecidimAdmin.createDynamicFields=function(e){return new t(e)}}(window),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.sortable=t()}(this,function(){var e,t,n,i=[],r=[],o=function(e,t,n){if(n===undefined)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n},a=function(e){e.h5s&&delete e.h5s.data};switch(!0){case"matches"in window.Element.prototype:n="matches";break;case"mozMatchesSelector"in window.Element.prototype:n="mozMatchesSelector";break;case"msMatchesSelector"in window.Element.prototype:n="msMatchesSelector";break;case"webkitMatchesSelector"in window.Element.prototype:n="webkitMatchesSelector"}var l=function(e,t){if(!t)return Array.prototype.slice.call(e);for(var i=[],r=0;r<e.length;++r)"string"==typeof t&&e[r][n](t)&&i.push(e[r]),-1!==t.indexOf(e[r])&&i.push(e[r]);return i},d=function(e,t,n){if(e instanceof Array)for(var i=0;i<e.length;++i)d(e[i],t,n);else e.addEventListener(t,n),e.h5s=e.h5s||{},e.h5s.events=e.h5s.events||{},e.h5s.events[t]=n},s=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)s(e[n],t);else e.h5s&&e.h5s.events&&e.h5s.events[t]&&(e.removeEventListener(t,e.h5s.events[t]),delete e.h5s.events[t])},c=function(e,t,n){if(e instanceof Array)for(var i=0;i<e.length;++i)c(e[i],t,n);else e.setAttribute(t,n)},u=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)u(e[n],t);else e.removeAttribute(t)},f=function(e){var t=e.getClientRects()[0];return{left:t.left+window.scrollX,top:t.top+window.scrollY}},h=function(e){s(e,"dragstart"),s(e,"dragend"),s(e,"selectstart"),s(e,"dragover"),s(e,"dragenter"),s(e,"drop")},p=function(e){s(e,"dragover"),s(e,"dragenter"),s(e,"drop")},m=function(e,t){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text",""),e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(t.draggedItem,t.x,t.y)},v=function(e,t){return t.x||(t.x=parseInt(e.pageX-f(t.draggedItem).left)),t.y||(t.y=parseInt(e.pageY-f(t.draggedItem).top)),t},g=function(e){return{draggedItem:e}},S=function(e,t){var n=g(t);n=v(e,n),m(e,n)},b=function(e){a(e),u(e,"aria-dropeffect")},w=function(e){u(e,"aria-grabbed"),u(e,"draggable"),u(e,"role")},y=function(e,t){return e===t||o(e,"connectWith")!==undefined&&o(e,"connectWith")===o(t,"connectWith")},$=function(e,t){var n,i=[];if(!t)return e;for(var r=0;r<e.length;++r)n=e[r].querySelectorAll(t),i=i.concat(Array.prototype.slice.call(n));return i},F=function(e){var t=o(e,"opts")||{},n=l(e.children,t.items),i=$(n,t.handle);p(e),b(e),s(i,"mousedown"),h(n),w(n)},C=function(e){var t=o(e,"opts"),n=l(e.children,t.items),i=$(n,t.handle);c(e,"aria-dropeffect","move"),c(i,"draggable","true"),"function"!=typeof(document||window.document).createElement("span").dragDrop||t.disableIEFix||d(i,"mousedown",function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}})},E=function(e){var t=o(e,"opts"),n=l(e.children,t.items),i=$(n,t.handle);c(e,"aria-dropeffect","none"),c(i,"draggable","false"),s(i,"mousedown")},D=function(e){var t=o(e,"opts"),n=l(e.children,t.items),i=$(n,t.handle);h(n),s(i,"mousedown"),p(e)},A=function(e){return e.parentElement?Array.prototype.indexOf.call(e.parentElement.children,e):0},_=function(e){return!!e.parentNode},k=function(e){if("string"!=typeof e)return e;var t=document.createElement("div");return t.innerHTML=e,t.firstChild},B=function(e,t){e.parentElement.insertBefore(t,e)},I=function(e,t){e.parentElement.insertBefore(t,e.nextElementSibling)},x=function(e){e.parentNode&&e.parentNode.removeChild(e)},L=function(e,t){var n=document.createEvent("Event");return t&&(n.detail=t),n.initEvent(e,!1,!0),n},M=function(e,t){r.forEach(function(n){y(e,n)&&n.dispatchEvent(t)})},T=function(n,a){var s=String(a);return a=function(e){var t={connectWith:!1,placeholder:null,dragImage:null,disableIEFix:!1,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1};for(var n in e)t[n]=e[n];return t}(a),"string"==typeof n&&(n=document.querySelectorAll(n)),n instanceof window.Element&&(n=[n]),(n=Array.prototype.slice.call(n)).forEach(function(n){if(/enable|disable|destroy/.test(s))T[s](n);else{a=o(n,"opts")||a,o(n,"opts",a),D(n);var u,h,p=l(n.children,a.items),v=a.placeholder;if(v||(v=document.createElement(/^ul|ol$/i.test(n.tagName)?"li":"div")),(v=k(v)).classList.add.apply(v.classList,a.placeholderClass.split(" ")),!n.getAttribute("data-sortable-id")){var g=r.length;r[g]=n,c(n,"data-sortable-id",g),c(p,"data-item-sortable-id",g)}if(o(n,"items",a.items),i.push(v),a.connectWith&&o(n,"connectWith",a.connectWith),C(n),c(p,"role","option"),c(p,"aria-grabbed","false"),a.hoverClass){var b="sortable-over";"string"==typeof a.hoverClass&&(b=a.hoverClass),d(p,"mouseenter",function(){this.classList.add(b)}),d(p,"mouseleave",function(){this.classList.remove(b)})}d(p,"dragstart",function(i){i.stopImmediatePropagation(),a.dragImage?(m(i,{draggedItem:a.dragImage,x:0,y:0}),console.log("WARNING: dragImage option is deprecated and will be removed in the future!")):S(i,this),this.classList.add(a.draggingClass),c(e=this,"aria-grabbed","true"),u=A(e),t=parseInt(window.getComputedStyle(e).height),h=this.parentElement,M(n,L("sortstart",{item:e,placeholder:v,startparent:h}))}),d(p,"dragend",function(){var r;e&&(e.classList.remove(a.draggingClass),c(e,"aria-grabbed","false"),e.style.display=e.oldDisplay,delete e.oldDisplay,i.forEach(x),r=this.parentElement,M(n,L("sortstop",{item:e,startparent:h})),u===A(e)&&h===r||M(n,L("sortupdate",{item:e,index:l(r.children,o(r,"items")).indexOf(e),oldindex:p.indexOf(e),elementIndex:A(e),oldElementIndex:u,startparent:h,endparent:r})),e=null,t=null)}),d([n,v],"drop",function(t){var r;y(n,e.parentElement)&&(t.preventDefault(),t.stopPropagation(),r=i.filter(_)[0],I(r,e),e.dispatchEvent(L("dragend")))});var w=function(r){if(y(n,e.parentElement))if(r.preventDefault(),r.stopPropagation(),r.dataTransfer.dropEffect="move",-1!==p.indexOf(this)){var o=parseInt(window.getComputedStyle(this).height),d=A(v),s=A(this);if(a.forcePlaceholderSize&&(v.style.height=t+"px"),o>t){var c=o-t,u=f(this).top;if(d<s&&r.pageY<u+c)return;if(d>s&&r.pageY>u+o-c)return}e.oldDisplay===undefined&&(e.oldDisplay=e.style.display),e.style.display="none",d<s?I(this,v):B(this,v),i.filter(function(e){return e!==v}).forEach(x)}else-1!==i.indexOf(this)||l(this.children,a.items).length||(i.forEach(x),this.appendChild(v))};d(p.concat(n),"dragover",w),d(p.concat(n),"dragenter",w)}}),n};return T.destroy=function(e){F(e)},T.enable=function(e){C(e)},T.disable=function(e){E(e)},T}),function(e){var t=function n(t,i){_classCallCheck(this,n),$(t).length>0&&e.sortable(t,i)[0].addEventListener("sortupdate",function(e){var t=$(e.target).children();i.onSortUpdate&&i.onSortUpdate(t)})};e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.SortListComponent=t,e.DecidimAdmin.createSortList=function(e,n){return new t(e,n)}}(window),function(){var e=window.DecidimAdmin,t=e.AutoLabelByPositionComponent,n=e.AutoButtonsByPositionComponent,i=e.createDynamicFields,r=e.createSortList,o=function(e){var o="#"+e.attr("id"),a=e.data("placeholder-id"),l=".multifield-field",d=new t({listSelector:o+" .multifield-field:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input.position-input").val(t)}}),s=new n({listSelector:o+" .multifield-field:not(.hidden)",hideOnFirstSelector:".move-up-field",hideOnLastSelector:".move-down-field"}),c=function(){r(o+" .fields-list:not(.published)",{handle:".multifield-field-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){d.run()}})},u=function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide())};i({placeholderId:a,wrapperSelector:o,containerSelector:".multifield-fields-list",fieldSelector:l,addFieldButtonSelector:".add-field",removeFieldButtonSelector:".remove-field",moveUpFieldButtonSelector:".move-up-field",moveDownFieldButtonSelector:".move-down-field",onAddField:function(t){c(),d.run(),s.run(),e.trigger("add-field-section",t)},onRemoveField:function(){d.run(),s.run()},onMoveUpField:function(){d.run(),s.run()},onMoveDownField:function(){d.run(),s.run()}}),c(),$(l).each(function(e,t){var n=$(t);u(n)}),d.run(),s.run()};$.fn.multifield=function(){$(this).each(function(){var e=$(this),t=e.attr("id");(!t||t.length<1)&&(t="multifield-"+Math.random().toString(16).slice(2),e.attr("id",t)),o(e)})}}(),function(){var e=function(e){var t=$("select.constraint-subject-selector",e),n=$("select.constraint-subject-model-selector",e);t.on("change init",function(){var t=$(this).val();$("[data-manifest]",e).hide(),$('[data-manifest="'+t+'"]',e).show()}).trigger("init"),n.on("change init",function(){var e=$(this).parents(".manifest-container"),t=$(this).val();$("[data-components]",e).hide(),$('[data-components="'+t+'"]',e).show()}).trigger("init")};$.fn.constraintSection=function(){$(this).each(function(){var t=$(this);e(t)})}}(),$(function(){var e=$("form.translation-sets-form .multifield-fields");e.multifield(),e.on("add-field-section",function(e,t){$(t).constraintSection()}),$(".constraints-list .constraint-section",e).each(function(e,t){$(t).constraintSection()})});