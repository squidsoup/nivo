(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[1156],{18957:function(n,e,t){"use strict";t.d(e,{a:function(){return a}});var r=t(61904),o=t(15050),i=(0,r.Z)((function(n){n.setHours(0,0,0,0)}),(function(n,e){n.setDate(n.getDate()+e)}),(function(n,e){return(e-n-(e.getTimezoneOffset()-n.getTimezoneOffset())*o.yB)/o.UD}),(function(n){return n.getDate()-1}));e.Z=i;var a=i.range},40309:function(n,e,t){"use strict";t.d(e,{S:function(){return K}});var r,o,i=t(27378),a=t(91542),u=t(24632),s=t(51302),c=t(67231),d=t(79892),l=t(22795),p=t(91285),h=t(53806),f=t(37802),m=t(1914),v=t(24246),g=function(n){var e=n.responseStatus,t=n.chartUrl;return 201===e&&t?(0,v.jsx)(x,{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,v.jsx)(b,{src:t,alt:"api result"})}):(0,v.jsxs)(y,{children:["Click the generate button in order to generate the chart.",(0,v.jsx)("br",{}),"You can customize settings by using dedicated controls."]})},x=a.default.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1guf7rn-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),b=a.default.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1guf7rn-1"})(["max-width:100%;max-height:100%;"]),y=a.default.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1guf7rn-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(n){return n.theme.colors.textLight}));function C(n,e){return e||(e=n.slice(0)),n.raw=e,n}var k=["preview","body","data"];function M(n){var e=n.chartClass,t=n.data,r=n.body,o=n.isLoading,a=n.responseStatus,u=n.chartUrl,s=(0,f.F)(),c=(0,i.useState)("preview"),d=c[0],l=c[1],p=(0,i.useState)(null),h=p[0],x=p[1];return(0,v.jsxs)(S,{className:"chart-tabs--"+d,children:[(0,v.jsx)(j,{children:k.map((function(n){var t=n===d,r="preview"===n?e:"data",o=t||h===n?"colored":"neutral";return(0,v.jsxs)(N,{className:"no-select",isCurrent:t,onClick:function(){return l(n)},onMouseEnter:function(){return x(n)},onMouseLeave:function(){return x(null)},children:[(0,v.jsx)(T,{className:"sprite-icons-"+r+"-"+s.id+"-"+o}),n]},n)}))}),(0,v.jsxs)(B,{children:["preview"===d&&(0,v.jsx)(g,{responseStatus:a,chartUrl:u}),"body"===d&&(0,v.jsx)(m.d,{children:JSON.stringify(r,null,"  ")}),"data"===d&&(0,v.jsx)(m.d,{children:t}),(0,v.jsx)(I,{isLoading:o})]})]})}var w,A,S=a.default.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"sc-viozb4-0"})(["position:fixed;top:","px;right:0;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.55);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.dimensions.miniNavWidth}),(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.border}),s.Z.tablet(r||(r=C(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 55%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "])),(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.dimensions.headerHeight})),s.Z.mobile(o||(o=C(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "])),(function(n){return n.theme.colors.border}))),j=a.default.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"sc-viozb4-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(n){return n.theme.colors.background})),N=a.default.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"sc-viozb4-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(n){var e=n.isCurrent,t=n.theme;return e?t.colors.cardBackground:"transparent"}),(function(n){return n.theme.colors.text})),T=a.default.span.withConfig({displayName:"ApiTabs__Icon",componentId:"sc-viozb4-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),B=a.default.div.withConfig({displayName:"ApiTabs__Content",componentId:"sc-viozb4-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),I=function(n){var e=n.isLoading;return(0,v.jsxs)(L,{isLoading:e,children:[(0,v.jsx)("span",{children:(0,v.jsx)(E,{index:0})}),(0,v.jsx)("span",{children:(0,v.jsx)(E,{index:1})}),(0,v.jsx)("span",{children:(0,v.jsx)(E,{index:2})}),(0,v.jsx)("span",{children:(0,v.jsx)(E,{index:3})}),(0,v.jsx)("span",{children:(0,v.jsx)(E,{index:4})})]})},L=a.default.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"sc-viozb4-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.isLoading?1:0}),(function(n){return n.isLoading?0:"20px"})),_=(0,a.keyframes)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),E=a.default.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"sc-viozb4-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(n){return n.theme.colors.accent}),_,(function(n){return 60*(n.index+1)})),G=function(n){var e=n.loading,t=n.onClick;return(0,v.jsx)(H,{onClick:t,children:e?"sending":"generate"})},H=a.default.span.withConfig({displayName:"ApiSubmit__Button",componentId:"sc-17tty3i-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(n){return n.theme.colors.accent})),P=function(n){var e=n.responseStatus,t=n.response,r="no response available";return t&&(r=JSON.stringify(t,null,"  ")),(0,v.jsxs)(z,{children:[(0,v.jsxs)(O,{children:["Response ",e?(0,v.jsx)("strong",{children:e}):"n/a"]}),(0,v.jsx)(R,{children:r})]})},z=a.default.div.withConfig({displayName:"ApiResponse__Container",componentId:"sc-atvlk6-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.border})),O=a.default.div.withConfig({displayName:"ApiResponse__Header",componentId:"sc-atvlk6-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(n){return n.theme.colors.borderLight})),R=a.default.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"sc-atvlk6-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),U=t(76955);function D(n,e){return e||(e=n.slice(0)),n.raw=e,n}var K=function(n){var e,t=n.componentName,r=n.chartClass,o=n.apiPath,a=n.dataProperty,s=void 0===a?"data":a,f=n.propsMapper,m=void 0===f?function(n){return n}:f,g=n.defaultProps,x=n.flavors,b=n.controlGroups,y=(0,i.useState)(!1),C=y[0],k=y[1],w=(0,i.useState)(g),A=w[0],S=w[1],j=(0,i.useState)(null),N=j[0],T=j[1],B=(0,i.useState)(null),I=B[0],L=B[1],_=(0,i.useCallback)((function(n){S(n)}),[S]),E=(0,i.useCallback)((function(){k(!0),fetch(""+U.Z.nivoApiUrl+o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(m(A))}).then((function(n){return k(!1),T(n.status),n.json()})).then(L).catch((function(n){console.error(n)}))}),[o,m,A,k,k,T,L]),H=x.map((function(n){return n.flavor}));return(0,v.jsx)(u.Z,{children:(0,v.jsxs)(c.L,{children:[(0,v.jsx)(d.y,{chartClass:t+" HTTP API",tags:["POST "+o]}),x&&(0,v.jsx)(l.f,{flavors:x,current:"api"}),(0,v.jsx)(p.l,{description:(e=t,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),(0,v.jsx)(M,{chartClass:r,data:A[s],body:m(A),isLoading:C,responseStatus:N,chartUrl:I?I.url:null}),(0,v.jsxs)(W,{children:[(0,v.jsx)(Z,{children:(0,v.jsx)(G,{loading:C,onClick:E})}),(0,v.jsx)(P,{responseStatus:N,response:I})]}),(0,v.jsx)(h._,{settings:A,flavors:H,currentFlavor:"api",groups:b,onChange:_})]})})},W=a.default.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-zkbsq1-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.55);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(n){return n.theme.dimensions.miniNavWidth}),(function(n){return n.theme.colors.cardAltBackground}),(function(n){return n.theme.dimensions.headerHeight}),s.Z.tablet(w||(w=D(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 55%;\n        }\n    "])),(function(n){return n.theme.dimensions.headerHeight})),s.Z.mobile(A||(A=D(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "])))),Z=a.default.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-zkbsq1-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])},62370:function(n,e,t){"use strict";t.d(e,{h8:function(){return s},h6:function(){return c},Ld:function(){return d}});var r=t(48159),o=t.n(r),i=t(76744),a=t.n(i);function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}var s=function(n,e){var t=(void 0===e?{}:e).exclude,r=void 0===t?[]:t;return function(e,t){void 0===t&&(t={});var i={};return Object.keys(e).forEach((function(r){n[r]&&(i[r]=n[r](e[r],e,t))})),u({},o()(e,r),i)}},c=function(n){return function(e,t){return t["axis"+a()(n)].enable?o()(e,["enable"]):null}},d=function(n){var e=n.format;return n.enabled?e:void 0}},38681:function(n,e,t){"use strict";t.d(e,{j2:function(){return m},wQ:function(){return v},aw:function(){return H},x$:function(){return G},ak:function(){return _},UE:function(){return z},$j:function(){return g},BO:function(){return b},Tz:function(){return B},O$:function(){return M},B7:function(){return E},gq:function(){return j},zn:function(){return U},FQ:function(){return N}});var r=t(4215),o=t.n(r),i=t(91311),a=t.n(i),u=t(19193),s=t.n(u),c=t(18957),d=t(6164),l=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},p=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],f=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],m=(Object.freeze({__proto__:null,countryCodes:p,names:h,programmingLanguages:f}),function(n,e,t){var r=void 0===t?{}:t,i=r.title,u=r.subtitle,s=r.rangeCount,c=void 0===s?5:s,d=r.measureCount,l=void 0===d?1:d,p=r.markerCount,h=void 0===p?1:p,f=r.float,m=void 0!==f&&f;return{id:n,title:i,subtitle:u,ranges:o()(c-1).reduce((function(n){var t=e-n[0];return[a()(t,m)].concat(n)}),[e]),measures:o()(l).reduce((function(n){return 0===n.length?[a()(e,m)]:[a()(n[0],m)].concat(n)}),[]),markers:o()(h).map((function(){return.6*e+a()(.4*e)}))}}),v=function(n){var e=void 0===n?{}:n,t=e.keys,r=void 0===t?h:t,i=e.size,u=void 0===i?7:i,s=e.minValue,c=void 0===s?0:s,d=e.maxValue,l=void 0===d?2e3:d,p=Math.min(r.length,u),f=r.slice(0,p);return{matrix:o()(p).map((function(){return o()(p).map((function(){return Math.random()<.66?a()(c,l/4):a()(c,l)}))})),keys:f}},g=function(n){var e=void 0===n?{}:n,t=e.rootSize,r=void 0===t?32:t,o=e.midSize,i=void 0===o?24:o,u=e.leafSize,s=void 0===u?12:u,c=e.minMidNodes,d=void 0===c?5:c,l=e.maxMidNodes,p=void 0===l?11:l,h=e.minLeaves,f=void 0===h?3:h,m=e.maxLeaves,v=void 0===m?9:m,g={id:"Node 0",height:2,size:r,color:"rgb(244, 117, 96)"},x=Array.from({length:a()(d,p)},(function(n,e){return{id:"Node "+(e+1),height:1,size:i,color:"rgb(97, 205, 187)"}})),b=[],y=[];return x.forEach((function(n){b.push({source:"Node 0",target:n.id,distance:80}),x.forEach((function(e){Math.random()<.04&&b.push({source:n.id,target:e.id,distance:80})})),Array.from({length:a()(f,v)},(function(e,t){return y.push({id:n.id+"."+t,height:0,size:s,color:"rgb(232, 193, 160)"}),b.push({source:n.id,target:n.id+"."+t,distance:50}),null}))})),x.push(g),{nodes:x=x.concat(y),links:b}};function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},x.apply(this,arguments)}var b=function(n){var e=void 0===n?{}:n,t=e.size,r=void 0===t?26:t,i=e.keys,u=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return u.reduce((function(n,e){var t,r;return void 0!==e.random?r=a().apply(void 0,e.random):void 0!==e.shuffle&&(r=s()(e.shuffle)[0]),x({},n,((t={})[e.key]=r,t))}),{})}))},y=h.map((function(n){return{id:n}})),C=function n(e,t,r){var o=t.filter((function(n){return n.source===e})).map((function(n){var t=n.target;if(t===e)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+e+" —> "+e);if(null!=r&&r.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,i){return o.concat(n(i,t,r?[].concat(r,[i]):[e,i]))}),o)},k=function(n){return n.reduce((function(e,t){return e[t.source]||(e[t.source]=C(t.source,n)),e}),{})},M=function(n){var e=void 0===n?{}:n,t=e.nodeCount,r=e.maxIterations,i=void 0===r?3:r,u=y.slice(0,t).map((function(n){return Object.assign({},n,{nodeColor:l()})})),c=[];return s()(u).forEach((function(n){var e=n.id;o()(a()(1,i)).forEach((function(){var n=k(c),t=s()(u.filter((function(n){return n.id!==e})).map((function(n){return n.id})))[0];n[t]&&n[t].includes(e)||n[e]&&n[e].includes(t)||c.push({source:e,target:t,value:a()(5,200)})}))})),{nodes:u,links:c}},w=function(){return a()(0,500)},A=function(){return a()(4,20)},S=function(){return a()(3,17)},j=function(n,e){var t=e.min,r=void 0===t?60:t,i=e.max,u=void 0===i?100:i,s=e.categoryCount,c=void 0===s?0:s;return{groups:n,data:n.reduce((function(n,e,t){return[].concat(n,o()(a()(r,u)).map((function(){return w()})).map((function(n,r){var i={id:t+"."+r,group:e,price:n,volume:A()};return c>0&&(i.categories=o()(c).map(S)),i})))}),[])}},N=function(n){return{groups:n.groups,data:n.data.map((function(e){var t=x({},e,{group:s()(n.groups)[0],price:w(),volume:A()});return void 0!==e.categories&&(t.categories=o()(3).map(S)),t}))}},T=l,B=function(n,e){void 0===n&&(n=!0),void 0===e&&(e=-1);var t=f;return n&&(t=s()(t)),e<1&&(e=1+Math.round(Math.random()*(f.length-1))),t.slice(0,e).map((function(n){return{label:n,value:Math.round(600*Math.random()),color:T()}}))},I=function(n){var e=[];return function(){var t;do{t=n.apply(void 0,arguments)}while(e.includes(t));return e.push(t),t}},L=function(){return s()(p)[0]},_=function(n){void 0===n&&(n=16);var e=["whisky","rhum","gin","vodka","cognac"],t=I(L),r=e.map((function(n){return{id:n,color:T(),data:[]}}));return o()(n).forEach((function(){var n=t();e.forEach((function(e){var t;null==(t=r.find((function(n){return n.id===e})))||t.data.push({color:T(),x:n,y:a()(0,60)})}))})),r},E=function(n,e){return n.map((function(n){return{id:n,color:T(),data:e.map((function(n){return{x:n,y:Math.round(300*Math.random())}}))}}))},G=function(n,e,t){void 0===t&&(t=.9);var r=function(n,e){var t=(0,c.a)(n,e),r=(0,d.i$)("%Y-%m-%d");return t.map((function(n){return{value:Math.round(400*Math.random()),day:r(n)}}))}(n,e),o=Math.round(r.length*(.4*t))+Math.round(Math.random()*(r.length*(.6*t)));return s()(r).slice(0,o)},H=function(n,e){var t=void 0===e?{}:e,r=t.size,o=void 0===r?12:r,i=t.min,u=void 0===i?0:i,s=t.max,c=void 0===s?200:s,d=t.withColors,l=void 0===d||d;return p.slice(0,o).map((function(e){var t={country:e};return n.forEach((function(n){t[n]=a()(u,c),!0===l&&(t[n+"Color"]=T())})),t}))},P=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],z=function n(e,t,r){var i;void 0===e&&(e="nivo"),void 0===r&&(r=P),(t=t||r.length)>r.length&&(t=r.length);var a={name:e,color:T()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(t).map((function(e,t){var o,i=r[t];return n(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},O=["chardonay","carmenere","syrah"],R=["fruity","bitter","heavy","strong","sunny"],U=function(n){var e=void 0===n?{}:n,t=e.randMin,r=void 0===t?20:t,o=e.randMax,i=void 0===o?120:o;return{data:R.map((function(n){var e={taste:n};return O.forEach((function(n){e[n]=a()(r,i)})),e})),keys:O}}},91573:function(n,e,t){var r=t(37561),o=t(74305);n.exports=function(n){return o(r(n))}},76418:function(n){var e=Math.floor,t=Math.random;n.exports=function(n,r){return n+e(t()*(r-n+1))}},16326:function(n,e,t){var r=t(74305),o=t(58185);n.exports=function(n){return r(o(n))}},42231:function(n,e,t){var r=t(66070);n.exports=function(n,e){return r(e,(function(e){return n[e]}))}},74305:function(n,e,t){var r=t(76418);n.exports=function(n,e){var t=-1,o=n.length,i=o-1;for(e=void 0===e?o:e;++t<e;){var a=r(t,i),u=n[a];n[a]=n[t],n[t]=u}return n.length=e,n}},91311:function(n,e,t){var r=t(76418),o=t(57535),i=t(94919),a=parseFloat,u=Math.min,s=Math.random;n.exports=function(n,e,t){if(t&&"boolean"!=typeof t&&o(n,e,t)&&(e=t=void 0),void 0===t&&("boolean"==typeof e?(t=e,e=void 0):"boolean"==typeof n&&(t=n,n=void 0)),void 0===n&&void 0===e?(n=0,e=1):(n=i(n),void 0===e?(e=n,n=0):e=i(e)),n>e){var c=n;n=e,e=c}if(t||n%1||e%1){var d=s();return u(n+d*(e-n+a("1e-"+((d+"").length-1))),e)}return r(n,e)}},19193:function(n,e,t){var r=t(91573),o=t(16326),i=t(19785);n.exports=function(n){return(i(n)?r:o)(n)}},58185:function(n,e,t){var r=t(42231),o=t(50098);n.exports=function(n){return null==n?[]:r(n,o(n))}}}]);
//# sourceMappingURL=b6ed4adec5ee2cfb451fb2d4053e648fdcb81076-d2a07b41565751c0b2c1.js.map