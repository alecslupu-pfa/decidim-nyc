"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2307],{60453:function(e,t,n){var r=n(94377);n(78153),n(97046),n(75990),n(2299),n(96083),n(7480),n(14243),n(6856);function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=window.DecidimAwesome||{},l=["bold","italic","link","underline","header","list","video","image","alt","break","width","style","code","blockquote","indent"];function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var u=["value","userData"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}window.fbControls||(window.fbControls=[]),window.fbControls.push((function(e,t){var n=t.textarea,o=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var t,n,o,c=y(s);function s(){return h(this,s),c.apply(this,arguments)}return t=s,o=[{key:"definition",get:function(){return{icon:"\ud83d\udcdd",i18n:{default:"Rich Text Editor"}}}}],(n=[{key:"configure",value:function(){window.fbEditors.richtext={}}},{key:"build",value:function(){var e=this.config,t=e.value,n=e.userData,r=p(e,u);this.inputId="".concat(this.id,"-input"),this.input=this.markup("input",null,{name:name,id:this.inputId,type:"hidden",value:n&&n[0]||t||""});var i=this.markup("style","\n        #".concat(r.id," { height: auto; min-height: 6rem; padding-left: 0; padding-right: 0; }\n        #").concat(r.id," div.ql-container { height: ").concat(r.rows||1,"rem; }\n        #").concat(r.id," p.help-text { margin-top: .5rem; }\n        "),{type:"text/css"}),o=d(d({},r),{},{"data-toolbar":"full"});return this.wrapper=this.markup("div",null,o),this.markup("div",[i,this.input,this.wrapper],r)}},{key:"onRender",value:function(e){return window.fbEditors.richtext[this.id],window.fbEditors.quill[this.id]={},window.fbEditors.quill[this.id].instance=function(e){var t=$(e).data("toolbar"),n=$(e).data("disabled"),o=[["bold","italic","underline","linebreak"],[{list:"ordered"},{list:"bullet"}],["link","clean"],["code","blockquote"],[{indent:"-1"},{indent:"+1"}]],c=!1;"full"===t?(o=[[{header:[2,3,4,5,6,!1]}]].concat(i(o)),a.allow_images_in_full_editor?(o.push(["video","image"]),c=!0):o.push(["video"])):"basic"===t?a.allow_images_in_small_editor?(o.push(["video","image"]),c=!0):o.push(["video"]):a.allow_images_in_small_editor&&(o.push(["image"]),c=!0);var u={linebreak:{},toolbar:{container:o,handlers:{linebreak:r.Z}}},s=$(e).siblings('input[type="hidden"]');e.innerHTML=s.val()||"";var d=$('meta[name="csrf-token"]').attr("content");c&&(u.imageResize={modules:["Resize","DisplaySize"]},u.imageUpload={url:$(e).data("uploadImagesPath")||a.editor_uploader_path,method:"POST",name:"image",withCredentials:!1,headers:{"X-CSRF-Token":d},callbackOK:function(e,t){$("div.ql-toolbar").last().removeClass("editor-loading"),t(e.url)},callbackKO:function(e){$("div.ql-toolbar").last().removeClass("editor-loading"),console.error("Image upload error: ".concat(e.message))},checkBeforeSend:function(e,t){$("div.ql-toolbar").last().addClass("editor-loading"),t(e)}});var f=new Quill(e,{modules:u,formats:l,theme:"snow"});if(n&&f.disable(),f.on("text-change",(function(){var t=f.getText(),n=new CustomEvent("quill-position",{detail:f.getSelection()});e.dispatchEvent(n),"\n"===t||"\n\n"===t?s.val(""):s.val(f.root.innerHTML)})),f.emitter.emit("editor-ready"),c){var p=$(e).data("dragAndDropHelpText")||a.texts.drag_and_drop_image;$(e).after('<p class="help-text" style="margin-top:-1.5rem;">'.concat(p,"</p>"))}return f.emitter.emit("editor-ready"),f}(this.wrapper),e}}])&&m(t.prototype,n),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(n);n.register("richtext",o,"textarea")}))},72307:function(e,t,n){n(60453);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(81049);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container_selector=t||".proposal_custom_field:last",this.lang=this.getLang($("html").attr("lang"))}var t,n,i;return t=e,(n=[{key:"getLang",value:function(e){var t={ar:"ar-TN",ca:"ca-ES",cs:"cs-CZ",da:"da-DK",de:"de-DE",el:"el-GR",en:"en-US",es:"es-ES",fa:"fa-IR",fi:"fi-FI",fr:"fr-FR",he:"he-IL",hu:"hu-HU",it:"it-IT",ja:"ja-JP",my:"my-MM",nb:"nb-NO",nl:"nl-NL",pl:"pl-PL",pt:"pt-BR",qz:"qz-MM",ro:"ro-RO",ru:"ru-RU",sl:"sl-SI",th:"th-TH",tr:"tr-TR",uk:"uk-UA",vi:"vi-VN","zh-TW":"zh-TW",zh:"zh-CN"};return t[e]?t[e]:t[e.substr(0,2)]?t[e.substr(0,2)]:"en-US"}},{key:"dataToXML",value:function(e){var t,n,r,i,o,a,l,c,u=$("<dl/>");for(i in u.attr("class","decidim_awesome-custom_fields"),u.attr("data-generator","decidim_awesome"),u.attr("data-version",window.DecidimAwesome.version),e)if("textarea"==e[i].type&&"richtext"==e[i].subtype&&(e[i].userData=[$("#".concat(e[i].name,"-input")).val()]),e[i].userData&&e[i].userData.length){for(c in(r=$("<dt/>")).text(e[i].label),r.attr("name",e[i].name),t=$("<dd/>"),e[i].userData)n=$("<div/>"),a=e[i].userData[c],l=null,e[i].values?(o=e[i].values.find((function(e){return e.value==a})))&&(l=a,a=o.label):"date"==e[i].type&&a&&(o=new Date(a).toLocaleDateString())&&(l=a,a=o),"textarea"==e[i].type&&"richtext"==e[i].subtype?n.html(a):n.text(a),l&&n.attr("alt",l),t.append(n);t.attr("id",e[i].name),t.attr("name",e[i].type),u.append(r),u.append(t)}return"<xml>".concat(u[0].outerHTML,"</xml>")}},{key:"fixBuggyFields",value:function(){var e=this;if(!this.$container)return!1;this.$container.find(".formbuilder-checkbox-group").each((function(t,n){var r=$(".formbuilder-checkbox input",n),i=e.spec.find((function(e){return"checkbox-group"==e.type})),o=i.userData;if(r.length&&i&&o){r.each((function(e,t){var n=o.indexOf(t.value);n>=0?(o.splice(n,1),t.checked||$(t).click()):t.checked&&$(t).click()}));var a=$(".other-option",r.parent())[0],l=$(".other-val",r.parent())[0],c=o.join(" ");a&&(c?(a.checked=!0,a.value=c,l.value=c):(a.checked=!1,a.value="",l.value=""))}})),this.$container.find(".formbuilder-radio input.other-val").on("input",(function(e){$(e.currentTarget).closest(".formbuilder-radio-group").find("input").each((function(e,t){var n=$(t).attr("name");n&&n.endsWith("[]")&&$(t).attr("name",n.slice(0,-2))}))}))}},{key:"storeData",value:function(){if(!this.$container)return!1;var e=this.$container.closest("form").find('input[name="'.concat(this.$element.data("name"),'"]'));e.length&&this.instance&&(this.spec=this.instance.userData,e.val(this.dataToXML(this.spec)),this.$element.data("spec",this.spec))}},{key:"init",value:function(e){this.$element=e,this.spec=e.data("spec"),this.$container||(this.$container=$(this.container_selector)),this.instance=this.$container.formRender({i18n:{locale:this.lang,location:"https://cdn.jsdelivr.net/npm/formbuilder-languages@1.1.0/"},formData:this.spec,render:!0}),this.fixBuggyFields()}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.DecidimAwesome.CustomFieldsRenderer=window.DecidimAwesome.CustomFieldsRenderer||new i,$((function(){var e=$("proposal_custom_field:first",".tabs-title.is-active");e=e.length?e:$(".proposal_custom_field:first"),window.DecidimAwesome.CustomFieldsRenderer.init(e),window.DecidimAwesome.CustomFieldsRenderer.$container.closest("form").on("submit",(function(e){e.target.checkValidity()?window.DecidimAwesome.CustomFieldsRenderer.storeData():(e.preventDefault(),e.target.reportValidity())}))}))}}]);
//# sourceMappingURL=2307-82f483e850d86a6f5b14.js.map