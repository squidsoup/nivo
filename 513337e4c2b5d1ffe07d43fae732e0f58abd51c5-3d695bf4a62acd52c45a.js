"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[5436],{10536:function(e,i,t){t.d(i,{UH:function(){return T},ju:function(){return B},n6:function(){return G},W$:function(){return I},ap:function(){return w},A5:function(){return M}});var n=t(27378),o=t(99993),r=t(44365),a=t(18091),d=t(1520),l=t(30964),c=t(94942),s=t(79234),u=t(89193),v=t(46448),p=t(9841),h=t(770),f=t(24246),g=t(58493);function y(){return y=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y.apply(this,arguments)}function x(e,i){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}var b=function(e){return(0,n.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},m=function(e){var i,t=e.width,r=e.height,c=e.data,u=e.interpolation,p=e.xPadding,f=e.xOuterPadding,g=e.yOuterPadding,x=e.lineWidth,m=e.activeLineWidth,W=e.inactiveLineWidth,M=e.colors,S=e.opacity,O=e.activeOpacity,C=e.inactiveOpacity,P=e.pointSize,L=e.activePointSize,B=e.inactivePointSize,I=e.pointColor,k=e.pointBorderWidth,j=e.activePointBorderWidth,E=e.inactivePointBorderWidth,A=e.pointBorderColor,w=e.isInteractive,F=e.defaultActiveSerieIds,z=(0,n.useState)(F),T=z[0],G=z[1],H=(0,n.useMemo)((function(){return function(e){var i=e.width,t=e.height,n=e.data,o=e.xPadding,r=e.xOuterPadding,a=e.yOuterPadding,d=new Set,l=new Set;n.forEach((function(e){e.data.forEach((function(e){d.add(e.x),null!==e.y&&l.add(e.y)}))}));var c=Array.from(d),s=(0,h.eW)((0,v.x)().domain(c).range([0,i]).padding(r)),u=Array.from(l).sort((function(e,i){return e-i})),p=(0,h.eW)((0,v.x)().domain(u).range([0,t]).padding(a)),f=s.step()*Math.min(.5*o,.5);return{series:n.map((function(e){var t={id:e.id,data:e,points:[],linePoints:[]};return e.data.forEach((function(n,o){var r=null,a=null;null!==n.y&&(r=s(n.x),a=p(n.y));var d={id:e.id+"."+o,serie:e,data:n,x:r,y:a};t.points.push(d),null!==d.x&&(0===o?t.linePoints.push([0,d.y]):t.linePoints.push([d.x-f,d.y])),t.linePoints.push([d.x,d.y]),null!==r&&(o===e.data.length-1&&r?t.linePoints.push([i,d.y]):t.linePoints.push([d.x+f,d.y])),t.points=t.points.filter((function(e){return null!==e.x}))})),t})),xScale:s,yScale:p}}({width:t,height:r,data:c,xPadding:p,xOuterPadding:f,yOuterPadding:g})}),[t,r,c,p,f,g]),Z=H.series,X=H.xScale,_=H.yScale,q=(i=u,(0,n.useMemo)((function(){return(0,a.Z)().curve("smooth"===i?d.ZP:l.Z).defined((function(e){return null!==e[0]&&null!==e[1]}))}),[i])),U=(0,s.U)(M,"id"),Y=function(e){var i=e.activeLineWidth,t=e.inactiveLineWidth,o=e.opacity,r=e.activeOpacity,a=e.inactiveOpacity,d=e.isInteractive,l=e.activeSerieIds,c=b(e.lineWidth),s=b(i),u=b(t),v=b(o),p=b(r),h=b(a),f=(0,n.useCallback)((function(e){return{opacity:v(e),lineWidth:c(e)}}),[c,v]),g=(0,n.useCallback)((function(e){return{opacity:p(e),lineWidth:s(e)}}),[s,p]),y=(0,n.useCallback)((function(e){return{opacity:h(e),lineWidth:u(e)}}),[u,h]);return(0,n.useCallback)((function(e){return d&&0!==l.length?l.includes(e.id)?g(e):y(e):f(e)}),[f,g,y,d,l])}({lineWidth:x,activeLineWidth:m,inactiveLineWidth:W,opacity:S,activeOpacity:O,inactiveOpacity:C,isInteractive:w,activeSerieIds:T}),N=(0,n.useMemo)((function(){return Z.map((function(e){return y({},e,{color:U(e.data)},Y(e))}))}),[Z,U,Y]),K=(0,o.Fg)(),R=(0,s.Bf)(I,K),$=(0,s.Bf)(A,K),D=function(e){var i=e.activePointSize,t=e.inactivePointSize,o=e.pointBorderWidth,r=e.activePointBorderWidth,a=e.inactivePointBorderWidth,d=e.isInteractive,l=e.activeSerieIds,c=b(e.pointSize),s=b(i),u=b(t),v=b(o),p=b(r),h=b(a),f=(0,n.useCallback)((function(e){return{size:c(e),borderWidth:v(e)}}),[c,v]),g=(0,n.useCallback)((function(e){return{size:s(e),borderWidth:p(e)}}),[s,p]),y=(0,n.useCallback)((function(e){return{size:u(e),borderWidth:h(e)}}),[u,h]);return(0,n.useCallback)((function(e){return d&&0!==l.length?l.includes(e.serie.id)?g(e):y(e):f(e)}),[f,g,y,d,l])}({pointSize:P,activePointSize:L,inactivePointSize:B,pointBorderWidth:k,activePointBorderWidth:j,inactivePointBorderWidth:E,isInteractive:w,activeSerieIds:T}),J=(0,n.useMemo)((function(){var e=[];return N.forEach((function(i){i.points.forEach((function(t){var n=y({},t,{serie:i,isActive:T.includes(i.id),isInactive:T.length>0&&!T.includes(i.id)});n.color=R(n),n.borderColor=$(n),e.push(y({},n,D(n)))}))})),e}),[N,R,$,D,T]);return{xScale:X,yScale:_,series:N,points:J,lineGenerator:q,activeSerieIds:T,setActiveSerieIds:G}},W={pointerEvents:"none"},M=y({},{layers:["grid","axes","labels","lines","points"],interpolation:"smooth",xPadding:.6,xOuterPadding:.5,yOuterPadding:.5,colors:{scheme:"nivo"},lineWidth:2,activeLineWidth:4,inactiveLineWidth:1,opacity:1,activeOpacity:1,inactiveOpacity:.3,startLabel:!1,startLabelPadding:16,startLabelTextColor:{from:"color"},endLabel:!0,endLabelPadding:16,endLabelTextColor:{from:"color"},pointSize:6,activePointSize:8,inactivePointSize:4,pointColor:{from:"serie.color"},pointBorderWidth:0,activePointBorderWidth:0,inactivePointBorderWidth:0,pointBorderColor:{from:"serie.color",modifiers:[["darker",1.4]]},enableGridX:!0,enableGridY:!0,axisTop:{},axisBottom:{},axisLeft:{},isInteractive:!0,defaultActiveSerieIds:[],tooltip:function(e){var i=e.serie;return(0,f.jsx)(u._5,{"data-testid":"tooltip."+i.data.id,id:i.data.id,enableChip:!0,color:i.color})},role:"img"},{pointComponent:function(e){var i=e.point,t=(0,o.tf)(),n=t.animate,r=t.config,a=(0,g.useSpring)({x:i.x,y:i.y,radius:i.size/2,color:i.color,borderWidth:i.borderWidth,config:r,immediate:!n});return(0,f.jsx)(g.q.circle,{"data-testid":"point."+i.serie.id+"."+i.data.x,cx:a.x,cy:a.y,r:(0,g.to)(a.radius,(function(e){return Math.max(e,0)})),fill:a.color,strokeWidth:a.borderWidth,stroke:i.borderColor,style:W})},animate:!0,motionConfig:"gentle"}),S=function(e){var i=e.serie,t=e.lineGenerator,r=e.yStep,a=e.isInteractive,d=function(e){var i=e.serie,t=e.isInteractive,o=e.onMouseEnter,r=e.onMouseMove,a=e.onMouseLeave,d=e.onClick,l=e.setActiveSerieIds,c=e.tooltip,s=(0,u.lL)(),v=s.showTooltipFromEvent,p=s.hideTooltip,h=(0,n.useCallback)((function(e){v((0,n.createElement)(c,{serie:i}),e),l([i.id]),o&&o(i,e)}),[i,o,v,l,c]),f=(0,n.useCallback)((function(e){v((0,n.createElement)(c,{serie:i}),e),r&&r(i,e)}),[i,r,v,c]),g=(0,n.useCallback)((function(e){p(),l([]),a&&a(i,e)}),[i,a,p,l]),y=(0,n.useCallback)((function(e){d&&d(i,e)}),[i,d]);return(0,n.useMemo)((function(){return{onMouseEnter:t?h:void 0,onMouseMove:t?f:void 0,onMouseLeave:t?g:void 0,onClick:t?y:void 0}}),[t,h,f,g,y])}({serie:i,isInteractive:a,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,setActiveSerieIds:e.setActiveSerieIds,tooltip:e.tooltip}),l=(0,o.tf)(),c=l.animate,s=l.config,v=t(i.linePoints)||"",p=(0,o.NS)(v),h=(0,g.useSpring)({color:i.color,opacity:i.opacity,lineWidth:i.lineWidth,config:s,immediate:!c});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g.q.path,{"data-testid":"line."+i.id,fill:"none",d:p,stroke:h.color,strokeWidth:h.lineWidth,strokeLinecap:"round",strokeOpacity:h.opacity,style:{pointerEvents:"none"}}),a&&(0,f.jsx)("path",{"data-testid":"line."+i.id+".interactive",fill:"none",stroke:"red",strokeOpacity:0,strokeWidth:r,d:v,strokeLinecap:"butt",onMouseEnter:d.onMouseEnter,onMouseMove:d.onMouseMove,onMouseLeave:d.onMouseLeave,onClick:d.onClick})]})},O=function(e){var i=e.series,t=e.getLabel,r=e.position,a=e.padding,d=e.color,l=(0,o.Fg)(),c=(0,o.tf)(),u=c.animate,v=c.config,p=function(e){var i=e.series,t=e.position,r=e.padding,a=e.color,d=e.getLabel,l=(0,o.Fg)(),c=(0,s.Bf)(a,l);return(0,n.useMemo)((function(){var e,n;"start"===t?(e="end",n=-1*r):(e="start",n=r);var o=[];return i.forEach((function(i){var r=i.id;"function"==typeof d&&(r=d(i.data));var a="start"===t?i.linePoints[0]:i.linePoints[i.linePoints.length-1];null!==a[0]&&null!==a[1]&&o.push({id:i.id,label:r,x:a[0]+n,y:a[1],color:c(i),opacity:i.opacity,serie:i,textAnchor:e})})),o}),[i,t,r,c,d])}({series:i,getLabel:t,position:r,padding:a,color:d}),h=(0,g.useSprings)(p.length,p.map((function(e){return{x:e.x,y:e.y,opacity:e.opacity,config:v,immediate:!u}})));return(0,f.jsx)(f.Fragment,{children:h.map((function(e,i){var t=p[i];return(0,f.jsx)(g.q.text,{"data-testid":"label."+r+"."+t.serie.id,x:e.x,y:e.y,textAnchor:t.textAnchor,dominantBaseline:"central",opacity:e.opacity,style:y({},l.labels.text,{fill:t.color}),children:t.label},t.id)}))})},C=function(e){var i=e.points,t=e.pointComponent;return(0,f.jsx)(f.Fragment,{children:i.map((function(e){return(0,n.createElement)(t,{key:e.id,point:e})}))})},P=["isInteractive","animate","motionConfig","theme","renderWrapper"],L=function(e){var i=e.data,t=e.width,a=e.height,d=e.margin,l=e.layers,c=void 0===l?M.layers:l,s=e.interpolation,u=void 0===s?M.interpolation:s,v=e.xPadding,p=void 0===v?M.xPadding:v,h=e.xOuterPadding,g=void 0===h?M.xOuterPadding:h,y=e.yOuterPadding,x=void 0===y?M.yOuterPadding:y,b=e.colors,W=void 0===b?M.colors:b,P=e.lineWidth,L=void 0===P?M.lineWidth:P,B=e.activeLineWidth,I=void 0===B?M.activeLineWidth:B,k=e.inactiveLineWidth,j=void 0===k?M.inactiveLineWidth:k,E=e.opacity,A=void 0===E?M.opacity:E,w=e.activeOpacity,F=void 0===w?M.activeOpacity:w,z=e.inactiveOpacity,T=void 0===z?M.inactiveOpacity:z,G=e.startLabel,H=void 0===G?M.startLabel:G,Z=e.startLabelPadding,X=void 0===Z?M.startLabelPadding:Z,_=e.startLabelTextColor,q=void 0===_?M.startLabelTextColor:_,U=e.endLabel,Y=void 0===U?M.endLabel:U,N=e.endLabelPadding,K=void 0===N?M.endLabelPadding:N,R=e.endLabelTextColor,$=void 0===R?M.endLabelTextColor:R,D=e.pointComponent,J=void 0===D?M.pointComponent:D,Q=e.pointSize,V=void 0===Q?M.pointSize:Q,ee=e.activePointSize,ie=void 0===ee?M.activePointSize:ee,te=e.inactivePointSize,ne=void 0===te?M.inactivePointSize:te,oe=e.pointColor,re=void 0===oe?M.pointColor:oe,ae=e.pointBorderWidth,de=void 0===ae?M.pointBorderWidth:ae,le=e.activePointBorderWidth,ce=void 0===le?M.activePointBorderWidth:le,se=e.inactivePointBorderWidth,ue=void 0===se?M.inactivePointBorderWidth:se,ve=e.pointBorderColor,pe=void 0===ve?M.pointBorderColor:ve,he=e.enableGridX,fe=void 0===he?M.enableGridX:he,ge=e.enableGridY,ye=void 0===ge?M.enableGridY:ge,xe=e.axisTop,be=void 0===xe?M.axisTop:xe,me=e.axisRight,We=e.axisBottom,Me=void 0===We?M.axisBottom:We,Se=e.axisLeft,Oe=void 0===Se?M.axisLeft:Se,Ce=e.isInteractive,Pe=void 0===Ce?M.isInteractive:Ce,Le=e.defaultActiveSerieIds,Be=void 0===Le?M.defaultActiveSerieIds:Le,Ie=e.onMouseEnter,ke=e.onMouseMove,je=e.onMouseLeave,Ee=e.onClick,Ae=e.tooltip,we=void 0===Ae?M.tooltip:Ae,Fe=e.role,ze=void 0===Fe?M.role:Fe,Te=(0,o.Bs)(t,a,d),Ge=Te.margin,He=Te.innerWidth,Ze=Te.innerHeight,Xe=Te.outerWidth,_e=Te.outerHeight,qe=m({width:He,height:Ze,data:i,interpolation:u,xPadding:p,xOuterPadding:g,yOuterPadding:x,lineWidth:L,activeLineWidth:I,inactiveLineWidth:j,colors:W,opacity:A,activeOpacity:F,inactiveOpacity:T,pointSize:V,activePointSize:ie,inactivePointSize:ne,pointColor:re,pointBorderWidth:de,activePointBorderWidth:ce,inactivePointBorderWidth:ue,pointBorderColor:pe,isInteractive:Pe,defaultActiveSerieIds:Be}),Ue=qe.series,Ye=qe.points,Ne=qe.xScale,Ke=qe.yScale,Re=qe.lineGenerator,$e=qe.activeSerieIds,De=qe.setActiveSerieIds,Je={grid:null,axes:null,labels:null,lines:null,points:null};c.includes("grid")&&(Je.grid=(0,f.jsx)(r.rj,{width:He,height:Ze,xScale:fe?Ne:null,yScale:ye?Ke:null},"grid")),c.includes("axes")&&(Je.axes=(0,f.jsx)(r.dk,{xScale:Ne,yScale:Ke,width:He,height:Ze,top:be,right:me,bottom:Me,left:Oe},"axes")),c.includes("lines")&&(Je.lines=(0,f.jsx)(n.Fragment,{children:Ue.map((function(e){return(0,f.jsx)(S,{serie:e,setActiveSerieIds:De,lineGenerator:Re,yStep:Ke.step(),isInteractive:Pe,onMouseEnter:Ie,onMouseMove:ke,onMouseLeave:je,onClick:Ee,tooltip:we},e.id)}))},"lines")),c.includes("points")&&(Je.points=(0,f.jsx)(C,{pointComponent:J,points:Ye},"points")),c.includes("labels")&&(Je.labels=(0,f.jsxs)(n.Fragment,{children:[!1!==H&&(0,f.jsx)(O,{series:Ue,getLabel:H,position:"start",padding:X,color:q}),!1!==Y&&(0,f.jsx)(O,{series:Ue,getLabel:Y,position:"end",padding:K,color:$})]},"legends"));var Qe=(0,n.useMemo)((function(){return{innerHeight:Ze,innerWidth:He,lineGenerator:Re,points:Ye,series:Ue,xScale:Ne,yScale:Ke,activeSerieIds:$e,setActiveSerieIds:De}}),[$e,De,Ze,He,Re,Ye,Ue,Ne,Ke]);return(0,f.jsx)(o.tM,{width:Xe,height:_e,margin:Ge,role:ze,children:c.map((function(e,i){var t;return"function"==typeof e?(0,f.jsx)(n.Fragment,{children:(0,n.createElement)(e,Qe)},i):null!=(t=null==Je?void 0:Je[e])?t:null}))})},B=function(e){var i=e.isInteractive,t=void 0===i?M.isInteractive:i,n=e.animate,r=void 0===n?M.animate:n,a=e.motionConfig,d=void 0===a?M.motionConfig:a,l=e.theme,c=e.renderWrapper,s=x(e,P);return(0,f.jsx)(o.W2,{animate:r,isInteractive:t,motionConfig:d,renderWrapper:c,theme:l,children:(0,f.jsx)(L,y({isInteractive:t},s))})},I=function(e){return(0,f.jsx)(o.d,{children:function(i){var t=i.width,n=i.height;return(0,f.jsx)(B,y({width:t,height:n},e))}})},k=function(e){return(0,n.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},j=function(e){var i,t=e.data,r=e.width,a=e.height,u=e.align,f=e.spacing,g=e.xPadding,x=e.interpolation,b=e.colors,m=e.fillOpacity,W=e.activeFillOpacity,M=e.inactiveFillOpacity,S=e.borderWidth,O=e.activeBorderWidth,C=e.inactiveBorderWidth,P=e.borderColor,L=e.borderOpacity,B=e.activeBorderOpacity,I=e.inactiveBorderOpacity,j=e.isInteractive,E=e.defaultActiveSerieIds,A=(0,n.useState)(E),w=A[0],F=A[1],z=function(e){var i=e.data,t=e.width,o=e.height,r=e.align,a=e.spacing,d=e.xPadding;return(0,n.useMemo)((function(){return function(e){var i,t,n=e.data,o=e.width,r=e.height,a=e.align,d=e.spacing,l=e.xPadding,c=new Map;n.forEach((function(e){e.data.forEach((function(n){c.has(n.x)||c.set(n.x,{id:n.x,total:0,values:new Map,x:0});var o=c.get(n.x),r=o.total+n.y;o.total=r,o.values.set(e.id,{serieId:e.id,value:n.y,position:0,height:0,beforeHeight:0}),(void 0===i||r>i)&&(i=r),(void 0===t||o.values.size>t)&&(t=o.values.size)}))}));var s=(0,h.eW)((0,v.x)().domain(Array.from(c.keys())).range([0,o])),u=(0,h.__)((0,p.Z)().domain([0,i]).range([0,r-t*d]));c.forEach((function(e,i){e.x=s(i);var t=u(e.total)+e.values.size*d,n=0;"middle"===a?n=(r-t)/2:"end"===a&&(n=r-t),Array.from(e.values.values()).sort((function(e,i){return i.value-e.value})).forEach((function(i,t,o){var r=o.filter((function(e,i){return i<t})),a=r.reduce((function(e,i){return e+i.value}),0),l=e.values.get(i.serieId);l.position=t,l.height=u(i.value),l.beforeHeight=u(a)+n+d*(r.length+.5)}))}));var f=s.step()*Math.min(.5*l,.5),g=n.map((function(e){var i={id:e.id,data:e,points:[],areaPoints:[]};return e.data.forEach((function(t,n){var o=c.get(t.x),r=o.values.get(e.id),a=o.x,d=r.beforeHeight,l=r.height,s=d+l/2,u=d,v=d+l;i.points.push({x:a,y:s,height:l,data:y({},t)}),n>0&&i.areaPoints.push({x:a-f,y0:u,y1:v}),i.areaPoints.push({x:a,y0:u,y1:v}),n<e.data.length-1&&i.areaPoints.push({x:a+f,y0:u,y1:v})})),i}));return{series:g,xScale:s,heightScale:u}}({data:i,width:t,height:o,align:r,spacing:a,xPadding:d})}),[i,t,o,r,a,d])}({data:t,width:r,height:a,align:u,spacing:f,xPadding:g}),T=z.series,G=z.xScale,H=z.heightScale,Z=(i=x,(0,n.useMemo)((function(){return(0,c.Z)().x((function(e){return e.x})).y0((function(e){return e.y0})).y1((function(e){return e.y1})).curve("smooth"===i?d.ZP:l.Z)}),[i])),X=(0,s.U)(b,"id"),_=function(e){var i=e.activeFillOpacity,t=e.inactiveFillOpacity,r=e.borderWidth,a=e.activeBorderWidth,d=e.inactiveBorderWidth,l=e.borderColor,c=e.borderOpacity,u=e.activeBorderOpacity,v=e.inactiveBorderOpacity,p=e.isInteractive,h=e.activeSerieIds,f=k(e.fillOpacity),g=k(i),y=k(t),x=k(r),b=k(a),m=k(d),W=(0,o.Fg)(),M=(0,s.Bf)(l,W),S=k(c),O=k(u),C=k(v),P=(0,n.useCallback)((function(e){return{fillOpacity:f(e),borderWidth:x(e),borderColor:M(e),borderOpacity:S(e)}}),[f,x,M,S]),L=(0,n.useCallback)((function(e){return{fillOpacity:g(e),borderWidth:b(e),borderColor:M(e),borderOpacity:O(e)}}),[g,b,M,O]),B=(0,n.useCallback)((function(e){return{fillOpacity:y(e),borderWidth:m(e),borderColor:M(e),borderOpacity:C(e)}}),[y,m,M,C]);return(0,n.useCallback)((function(e){return p&&0!==h.length?h.includes(e.id)?L(e):B(e):P(e)}),[P,L,B,p,h])}({fillOpacity:m,activeFillOpacity:W,inactiveFillOpacity:M,borderWidth:S,activeBorderWidth:O,inactiveBorderWidth:C,borderColor:P,borderOpacity:L,activeBorderOpacity:B,inactiveBorderOpacity:I,isInteractive:j,activeSerieIds:w});return{series:(0,n.useMemo)((function(){return T.map((function(e){var i=y({},e,{color:X(e.data)});return y({},i,_(i))}))}),[T,X,_]),xScale:G,heightScale:H,areaGenerator:Z,activeSerieIds:w,setActiveSerieIds:F}},E=function(e){var i=e.serie,t=e.areaGenerator,r=e.blendMode,a=function(e){var i=e.serie,t=e.isInteractive,o=e.onMouseEnter,r=e.onMouseMove,a=e.onMouseLeave,d=e.onClick,l=e.setActiveSerieIds,c=e.tooltip,s=(0,u.lL)(),v=s.showTooltipFromEvent,p=s.hideTooltip,h=(0,n.useCallback)((function(e){v((0,n.createElement)(c,{serie:i}),e),l([i.id]),o&&o(i,e)}),[i,o,v,l,c]),f=(0,n.useCallback)((function(e){v((0,n.createElement)(c,{serie:i}),e),r&&r(i,e)}),[i,r,v,c]),g=(0,n.useCallback)((function(e){p(),l([]),a&&a(i,e)}),[i,a,p,l]),y=(0,n.useCallback)((function(e){d&&d(i,e)}),[i,d]);return(0,n.useMemo)((function(){return{onMouseEnter:t?h:void 0,onMouseMove:t?f:void 0,onMouseLeave:t?g:void 0,onClick:t?y:void 0}}),[t,h,f,g,y])}({serie:i,isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,setActiveSerieIds:e.setActiveSerieIds,tooltip:e.tooltip}),d=(0,o.tf)(),l=d.animate,c=d.config,s=(0,o.NS)(t(i.areaPoints)||""),v=(0,g.useSpring)({color:i.color,fillOpacity:i.fillOpacity,stroke:i.borderColor,strokeOpacity:i.borderOpacity,config:c,immediate:!l});return(0,f.jsx)(g.q.path,{"data-testid":"area."+i.id,d:s,fill:i.fill?i.fill:v.color,fillOpacity:v.fillOpacity,stroke:v.stroke,strokeWidth:i.borderWidth,strokeOpacity:v.strokeOpacity,style:{mixBlendMode:r},onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseLeave:a.onMouseLeave,onClick:a.onClick})},A=function(e){var i=e.getLabel,t=e.series,r=e.position,a=e.padding,d=e.color,l=(0,o.Fg)(),c=(0,o.tf)(),u=c.animate,v=c.config,p=function(e){var i=e.series,t=e.position,r=e.padding,a=e.color,d=e.getLabel,l=(0,o.Fg)(),c=(0,s.Bf)(a,l);return(0,n.useMemo)((function(){var e,n;return"start"===t?(e="end",n=-1*r):(e="start",n=r),i.map((function(i){var o=i.id;"function"==typeof d&&(o=d(i.data));var r="start"===t?i.points[0]:i.points[i.points.length-1];return{id:i.id,label:o,x:r.x+n,y:r.y,color:c(i),opacity:i.fillOpacity,serie:i,textAnchor:e}}))}),[d,i,t,r,c])}({getLabel:i,series:t,position:r,padding:a,color:d}),h=(0,g.useSprings)(p.length,p.map((function(e){return{x:e.x,y:e.y,opacity:e.opacity,config:v,immediate:!u}})));return(0,f.jsx)(f.Fragment,{children:h.map((function(e,i){var t=p[i];return(0,f.jsx)(g.q.text,{"data-testid":"label."+r+"."+t.serie.id,x:e.x,y:e.y,textAnchor:t.textAnchor,dominantBaseline:"central",opacity:e.opacity,style:y({},l.labels.text,{fill:t.color}),children:t.label},t.id)}))})},w=y({},{align:"middle",layers:["grid","axes","labels","areas"],interpolation:"smooth",spacing:0,xPadding:.6,colors:{scheme:"nivo"},blendMode:"normal",fillOpacity:.8,activeFillOpacity:1,inactiveFillOpacity:.15,borderWidth:1,activeBorderWidth:1,inactiveBorderWidth:0,borderColor:{from:"color",modifiers:[["darker",.4]]},borderOpacity:1,activeBorderOpacity:1,inactiveBorderOpacity:0,startLabel:!1,startLabelPadding:12,startLabelTextColor:{from:"color",modifiers:[["darker",1]]},endLabel:!0,endLabelPadding:12,endLabelTextColor:{from:"color",modifiers:[["darker",1]]},enableGridX:!0,axisTop:{},axisBottom:{},isInteractive:!0,defaultActiveSerieIds:[],tooltip:function(e){var i=e.serie;return(0,f.jsx)(u._5,{id:i.id,enableChip:!0,color:i.color})},role:"img"},{defs:[],fill:[],animate:!0,motionConfig:"gentle"}),F=["isInteractive","animate","motionConfig","theme","renderWrapper"],z=function(e){var i=e.data,t=e.align,a=void 0===t?w.align:t,d=e.width,l=e.height,c=e.margin,s=e.layers,u=void 0===s?w.layers:s,v=e.interpolation,p=void 0===v?w.interpolation:v,h=e.spacing,g=void 0===h?w.spacing:h,y=e.xPadding,x=void 0===y?w.xPadding:y,b=e.colors,m=void 0===b?w.colors:b,W=e.blendMode,M=void 0===W?w.blendMode:W,S=e.fillOpacity,O=void 0===S?w.fillOpacity:S,C=e.activeFillOpacity,P=void 0===C?w.activeFillOpacity:C,L=e.inactiveFillOpacity,B=void 0===L?w.inactiveFillOpacity:L,I=e.defs,k=void 0===I?w.defs:I,F=e.fill,z=void 0===F?w.fill:F,T=e.borderWidth,G=void 0===T?w.borderWidth:T,H=e.activeBorderWidth,Z=void 0===H?w.activeBorderWidth:H,X=e.inactiveBorderWidth,_=void 0===X?w.inactiveBorderWidth:X,q=e.borderColor,U=void 0===q?w.borderColor:q,Y=e.borderOpacity,N=void 0===Y?w.borderOpacity:Y,K=e.activeBorderOpacity,R=void 0===K?w.activeBorderOpacity:K,$=e.inactiveBorderOpacity,D=void 0===$?w.inactiveBorderOpacity:$,J=e.startLabel,Q=void 0===J?w.startLabel:J,V=e.startLabelPadding,ee=void 0===V?w.startLabelPadding:V,ie=e.startLabelTextColor,te=void 0===ie?w.startLabelTextColor:ie,ne=e.endLabel,oe=void 0===ne?w.endLabel:ne,re=e.endLabelPadding,ae=void 0===re?w.endLabelPadding:re,de=e.endLabelTextColor,le=void 0===de?w.endLabelTextColor:de,ce=e.enableGridX,se=void 0===ce?w.enableGridX:ce,ue=e.axisTop,ve=void 0===ue?w.axisTop:ue,pe=e.axisBottom,he=void 0===pe?w.axisBottom:pe,fe=e.isInteractive,ge=void 0===fe?w.isInteractive:fe,ye=e.defaultActiveSerieIds,xe=void 0===ye?w.defaultActiveSerieIds:ye,be=e.onMouseEnter,me=e.onMouseMove,We=e.onMouseLeave,Me=e.onClick,Se=e.tooltip,Oe=void 0===Se?w.tooltip:Se,Ce=e.role,Pe=void 0===Ce?w.role:Ce,Le=(0,o.Bs)(d,l,c),Be=Le.margin,Ie=Le.innerWidth,ke=Le.innerHeight,je=Le.outerWidth,Ee=Le.outerHeight,Ae=j({data:i,width:Ie,height:ke,align:a,spacing:g,xPadding:x,interpolation:p,colors:m,fillOpacity:O,activeFillOpacity:P,inactiveFillOpacity:B,borderWidth:G,activeBorderWidth:Z,inactiveBorderWidth:_,borderColor:U,borderOpacity:N,activeBorderOpacity:R,inactiveBorderOpacity:D,isInteractive:ge,defaultActiveSerieIds:xe}),we=Ae.series,Fe=Ae.xScale,ze=Ae.heightScale,Te=Ae.areaGenerator,Ge=Ae.setActiveSerieIds,He=(0,n.useMemo)((function(){return(0,o.yU)(k,we,z,{targetKey:"fill"})}),[k,we,z]),Ze={grid:null,axes:null,labels:null,areas:null};u.includes("grid")&&se&&(Ze.grid=(0,f.jsx)(r.rj,{width:Ie,height:ke,xScale:Fe},"grid")),u.includes("axes")&&(Ze.axes=(0,f.jsx)(r.dk,{xScale:Fe,yScale:ze,width:Ie,height:ke,top:ve,bottom:he},"axes")),u.includes("areas")&&(Ze.areas=(0,f.jsx)(n.Fragment,{children:we.map((function(e){return(0,f.jsx)(E,{areaGenerator:Te,serie:e,blendMode:M,isInteractive:ge,setActiveSerieIds:Ge,onMouseEnter:be,onMouseMove:me,onMouseLeave:We,onClick:Me,tooltip:Oe},e.id)}))},"areas")),u.includes("labels")&&(Ze.labels=(0,f.jsxs)(n.Fragment,{children:[!1!==Q&&(0,f.jsx)(A,{getLabel:Q,series:we,position:"start",padding:ee,color:te}),!1!==oe&&(0,f.jsx)(A,{getLabel:oe,series:we,position:"end",padding:ae,color:le})]},"labels"));var Xe=(0,n.useMemo)((function(){return{innerWidth:Ie,innerHeight:ke,outerWidth:je,outerHeight:Ee,series:we,xScale:Fe,areaGenerator:Te}}),[Ie,ke,je,Ee,we,Fe,Te]);return(0,f.jsx)(o.tM,{defs:He,width:je,height:Ee,margin:Be,role:Pe,children:u.map((function(e,i){var t;return"function"==typeof e?(0,f.jsx)(n.Fragment,{children:(0,n.createElement)(e,Xe)},i):null!=(t=null==Ze?void 0:Ze[e])?t:null}))})},T=function(e){var i=e.isInteractive,t=void 0===i?w.isInteractive:i,n=e.animate,r=void 0===n?w.animate:n,a=e.motionConfig,d=void 0===a?w.motionConfig:a,l=e.theme,c=e.renderWrapper,s=x(e,F);return(0,f.jsx)(o.W2,{animate:r,isInteractive:t,motionConfig:d,renderWrapper:c,theme:l,children:(0,f.jsx)(z,y({isInteractive:t},s))})},G=function(e){return(0,f.jsx)(o.d,{children:function(i){var t=i.width,n=i.height;return(0,f.jsx)(T,y({width:t,height:n},e))}})}}}]);
//# sourceMappingURL=513337e4c2b5d1ffe07d43fae732e0f58abd51c5-3d695bf4a62acd52c45a.js.map