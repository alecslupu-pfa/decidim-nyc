(function(){var __webpack_modules__={52471:function(e,t,r){var n={"./decidim/assemblies/decidim_assemblies.svg":92138};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=52471},32438:function(e,t,r){"use strict";r(99755),r(75981);r(52471)},99755:function(){$((function(){$(".show-more").on("click",(function(){$(this).hide(),$(".show-more-panel").removeClass("hide"),$(".hide-more").show()})),$(".hide-more").on("click",(function(){$(this).hide(),$(".show-more-panel").addClass("hide"),$(".show-more").show()}))}))},75981:function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70350),src_decidim_vizzs_renders__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44638),renderOrgCharts=function renderOrgCharts(){var $orgChartContainer=$(".js-orgchart"),$btnReset=$(".js-reset-orgchart"),dataDepicted=null,fake=!1,orgchart={},renderChartCollapsibleNetwork=function renderChartCollapsibleNetwork(params){var attrs={id:"id".concat(Math.floor(1e6*Math.random())),svgWidth:960,svgHeight:600,marginTop:0,marginBottom:5,marginRight:0,marginLeft:30,container:"body",distance:150,hiddenChildLevel:1,hoverOpacity:.2,maxTextDisplayZoomLevel:1,lineStrokeWidth:1.5,fakeRoot:!1,nodeGutter:{x:16,y:8},childrenIndicatorRadius:15,fakeBorderWidth:32,data:null},attrKeys=Object.keys(attrs),updateData,_collapse,_expand,filter;attrKeys.forEach((function(e){params&&params[e]&&(attrs[e]=params[e])}));var hierarchy={},main=function main(selection){selection.each((function scope(){var calc={};calc.chartLeftMargin=attrs.marginLeft,calc.chartTopMargin=attrs.marginTop,calc.chartWidth=attrs.svgWidth-attrs.marginRight-calc.chartLeftMargin,calc.chartHeight=attrs.svgHeight-attrs.marginBottom-calc.chartTopMargin,hierarchy.root=d3__WEBPACK_IMPORTED_MODULE_0__.bT9(attrs.data.root);var behaviors={};behaviors.drag=d3__WEBPACK_IMPORTED_MODULE_0__.ohM().on("start",dragstarted).on("drag",dragged).on("end",dragended);var layouts={};layouts.radial=radial();var force={};force.link=d3__WEBPACK_IMPORTED_MODULE_0__.Fsl().id((function(e){return e.id})),force.charge=d3__WEBPACK_IMPORTED_MODULE_0__.q5i().strength(-240),force.center=d3__WEBPACK_IMPORTED_MODULE_0__.wqt(calc.chartWidth/2,calc.chartHeight/2),force.collide=d3__WEBPACK_IMPORTED_MODULE_0__.Hh().radius((function(e){var t=(e.bbox||{}).width+2*attrs.nodeGutter.x,r=(e.bbox||{}).height+2*attrs.nodeGutter.y;return 1.5*(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2)})),force.x=d3__WEBPACK_IMPORTED_MODULE_0__.RUJ().strength(.5).x((function(e){return!e.children&&e.depth>2&&e.parent&&(e=e.parent),projectCircle(e.proportion,(e.depth-1)*attrs.distance)[0]})),force.y=d3__WEBPACK_IMPORTED_MODULE_0__.Mrm().strength(.5).y((function(e){return!e.children&&e.depth>2&&e.parent&&(e=e.parent),projectCircle(e.proportion,(e.depth-1)*attrs.distance)[1]})),force.simulation=d3__WEBPACK_IMPORTED_MODULE_0__.A4v().force("link",force.link).force("charge",force.charge).force("center",force.center).force("collide",force.collide).force("x",force.x).force("y",force.y);var arr=flatten(hierarchy.root);arr.forEach((function(e){attrs.fakeRoot&&1===e.depth&&(e.hidden=!0),e.depth>attrs.hiddenChildLevel&&(e._children=e.children,e.children=null)}));var container=d3__WEBPACK_IMPORTED_MODULE_0__.Ys(this),svg=container.patternify({tag:"svg",selector:"svg-chart-container"}).attr("width",attrs.svgWidth).attr("height",attrs.svgHeight),chart=svg.patternify({tag:"g",selector:"chart"}).attr("transform","translate(".concat(calc.chartLeftMargin,",").concat(calc.chartTopMargin,")")),linksWrapper=chart.patternify({tag:"g",selector:"links-wrapper"}),nodesWrapper=chart.patternify({tag:"g",selector:"nodes-wrapper"}),links,nodes;function update(e){e?$btnReset.removeClass("invisible"):$btnReset.addClass("invisible"),layouts.radial(hierarchy.root);var t=flatten(hierarchy.root,!0).orderBy((function(e){return e.depth})).filter((function(e){return!e.hidden})),r=hierarchy.root.links().filter((function(e){return!e.source.hidden})).filter((function(e){return!e.target.hidden}));t.forEach((function(t){e&&e.id===(t.parent&&t.parent.id)&&(t.x=t.parent.x,t.y=t.parent.y)})),(links=linksWrapper.selectAll(".link").data(r,(function(e){return e.target.id}))).exit().remove(),links=links.enter().append("line").attr("class","link").merge(links),(nodes=nodesWrapper.selectAll(".node").data(t,(function(e){return e.id}))).exit().remove();var n=nodes.enter().append("g").attr("class","node");n.on("click",nodeClick).on("mouseenter",nodeMouseEnter).on("mouseleave",nodeMouseLeave).call(behaviors.drag),n.append("rect").attr("class","as-card").attr("rx",4).attr("ry",4),n.append("text").attr("class","as-text").text((function(e){return e.data.name})),n.selectAll("text").each((function(e){e.bbox=this.getBBox()})),n.selectAll("rect").attr("x",(function(e){return e.bbox.x-attrs.nodeGutter.x})).attr("y",(function(e){return e.bbox.y-attrs.nodeGutter.y})).attr("width",(function(e){return e.bbox.width+2*attrs.nodeGutter.x})).attr("height",(function(e){return e.bbox.height+2*attrs.nodeGutter.y})),n.append("circle").filter((function(e){return Boolean(e.children)||Boolean(e._children)})).attr("class","as-circle").attr("r",attrs.childrenIndicatorRadius).attr("cx",(function(e){return e.bbox.x+e.bbox.width+attrs.nodeGutter.x})).attr("cy",(function(e){return e.bbox.y+e.bbox.height+attrs.nodeGutter.y})),n.append("text").filter((function(e){return Boolean(e.children)||Boolean(e._children)})).attr("class","as-text").attr("dx",(function(e){return e.bbox.x+e.bbox.width+attrs.nodeGutter.x})).attr("dy",attrs.childrenIndicatorRadius+3).text((function(e){return d3__WEBPACK_IMPORTED_MODULE_0__.Fp7([(e.children||{}).length,(e._children||{}).length])})),nodes=n.merge(nodes),force.simulation.nodes(t).on("tick",ticked),force.simulation.force("link").links(links).id((function(e){return e.id})).distance(2*attrs.distance).strength(2)}function ticked(){var e=attrs.fakeBorderWidth,t=function(t){return Math.max(Math.min(calc.chartWidth-e,t),e)},r=function(t){return Math.max(Math.min(calc.chartHeight-e,t),e)};links.attr("x1",(function(e){return t(e.source.x)})).attr("y1",(function(e){return r(e.source.y)})).attr("x2",(function(e){return t(e.target.x)})).attr("y2",(function(e){return r(e.target.y)})),svg.selectAll(".node").attr("transform",(function(e){return"translate(".concat(t(e.x),",").concat(r(e.y),")")}))}function dragstarted(){nodes.each((function(e){e.fx=null,e.fy=null}))}function dragged(e){e.fx=d3__WEBPACK_IMPORTED_MODULE_0__.Ba6.x,e.fy=d3__WEBPACK_IMPORTED_MODULE_0__.Ba6.y}function dragended(){}function nodeMouseEnter(e){var t=hierarchy.root.links().filter((function(t){return t.source.id===e.id||t.target.id===e.id})),r=t.map((function(e){return e.source.id})).concat(t.map((function(e){return e.target.id})));nodesWrapper.selectAll(".node").filter((function(e){return-1===r.indexOf(e.id)})).attr("opacity",attrs.hoverOpacity),linksWrapper.selectAll(".link").attr("opacity",attrs.hoverOpacity),linksWrapper.selectAll(".link").filter((function(t){return t.source.id===e.id||t.target.id===e.id})).attr("opacity",1)}function nodeMouseLeave(){nodesWrapper.selectAll(".node").attr("opacity",1),linksWrapper.selectAll(".link").attr("opacity",1)}function nodeClick(e){nodes.each((function(e){e.fx=null,e.fy=null})),e.children?_collapse(e):e._children&&_expand(e),freeNodes()}function freeNodes(){d3__WEBPACK_IMPORTED_MODULE_0__.td_(".node").each((function(e){e.fx=null,e.fy=null}))}function projectCircle(e,t){var r=t||0,n=2*e*Math.PI;return[Math.sin(n)*r,-Math.cos(n)*r]}function flatten(e,t){var r=[],n=0;return function e(a,i){a.children&&a.children.forEach((function(t){e(t,i+1)})),a.id?++n:a.id=++n,a.depth=i,t&&(a.cluster||(a.cluster={x:a.x,y:a.y})),r.push(a)}(e,1),r}function debug(){if(attrs.isDebug){var stringified=String(scope),groupVariables=stringified.match(/var\s+([\w])+\s*=\s*{\s*}/gi).map((function(e){return e.match(/\s+\w*/gi).filter((function(e){return e.trim()}))})).map((function(e){return e[0].trim()}));groupVariables.forEach((function(v){main["P_".concat(v)]=eval(v)}))}}update(),updateData=function(){main.run()},_collapse=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.children&&(t&&e.children.forEach((function(e){return _collapse(e,!0)})),e._children=e.children,e.children=null),update(e),force.simulation.restart(),force.simulation.alphaTarget(.15)},_expand=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e._children&&(t&&e._children.forEach((function(e){return _expand(e,!0)})),e.children=e._children,e._children=null),update(e),force.simulation.restart(),force.simulation.alphaTarget(.15)},debug()}))};function radial(){return function(e){!function e(t,r,n){t.proportion=(n+r)/2,t.x||(t.parent?t.x=t.parent.x:t.x=0);t.y||(t.parent?t.y=t.parent.y:t.y=0);if(t.children){var a=(n-r)/t.children.length;t.children.forEach((function(t,n){var i=r+a*n;e(t,i,i+a)}))}}(e,0,1)}}return d3__WEBPACK_IMPORTED_MODULE_0__.DuZ.prototype.patternify=function(e){var t=e.selector,r=e.tag,n=e.data||[t],a=this.selectAll(".".concat(t)).data(n);return a.exit().remove(),(a=a.enter().append(r).merge(a)).attr("class",t),a},Array.prototype.orderBy=function(e){return this.sort((function(t,r){var n=e(t),a=e(r);return"string"===typeof n||n instanceof String?n.localeCompare(a):n-a})),this},Object.keys(attrs).forEach((function(key){return main[key]=function(_){var string="attrs['".concat(key,"'] = _");return arguments.length?(eval(string),main):eval(" attrs['".concat(key,"'];"))}})),main.attrs=attrs,main.debug=function(e){return attrs.isDebug=e,e&&(window.charts||(window.charts=[]),window.charts.push(main)),main},main.data=function(e){return arguments.length?(attrs.data=e,"function"===typeof updateData&&updateData(),main):attrs.data},main.run=function(){return d3__WEBPACK_IMPORTED_MODULE_0__.td_(attrs.container).call(main),main},main.filter=function(e){return arguments.length?(attrs.filterParams=e,"function"===typeof filter&&filter(),main):attrs.filterParams},main.reset=function(){return hierarchy.root.children.forEach((function(e){return _collapse(e,!0)})),main.run(),main},main};$orgChartContainer.each((function(e,t){var r=$(t),n=r.width(),a=n/(16/9);d3__WEBPACK_IMPORTED_MODULE_0__.AVB(r.data("url")).then((function(e){e instanceof Array?(fake=!0,dataDepicted={name:null,children:e}):dataDepicted=e,orgchart=renderChartCollapsibleNetwork().svgHeight(a).svgWidth(n).fakeRoot(fake).container("#".concat(t.id)).data({root:dataDepicted}).debug(!0).run()}))})),$btnReset.click((function(){orgchart.reset()}))};$((function(){(0,src_decidim_vizzs_renders__WEBPACK_IMPORTED_MODULE_1__.Z)(renderOrgCharts)}))},44638:function(e,t,r){"use strict";function n(e){e(),$(document).on("change.zf.tabs",(function(){e()}))}r.d(t,{Z:function(){return n}})},92138:function(e,t,r){"use strict";e.exports=r.p+"media/images/decidim_assemblies-d9571d0b2d158eb891c8.svg"}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,t,r,n){if(!t){var a=1/0;for(_=0;_<deferred.length;_++){t=deferred[_][0],r=deferred[_][1],n=deferred[_][2];for(var i=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[c])}))?t.splice(c--,1):(i=!1,n<a&&(a=n));if(i){deferred.splice(_--,1);var o=r();void 0!==o&&(e=o)}}return e}n=n||0;for(var _=deferred.length;_>0&&deferred[_-1][2]>n;_--)deferred[_]=deferred[_-1];deferred[_]=[t,r,n]},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/decidim-packs/",function(){var e={9141:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],c=r[1],o=r[2],_=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)__webpack_require__.o(c,n)&&(__webpack_require__.m[n]=c[n]);if(o)var d=o(__webpack_require__)}for(t&&t(r);_<i.length;_++)a=i[_],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(d)},r=self.webpackChunkapp=self.webpackChunkapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var __webpack_exports__=__webpack_require__.O(void 0,[166,350],(function(){return __webpack_require__(32438)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=decidim_assemblies-2fd0258af710db5f8673.js.map