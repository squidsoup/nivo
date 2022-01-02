"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[295],{62370:function(e,t,n){n.d(t,{h8:function(){return s},h6:function(){return d},Ld:function(){return u}});var r=n(48159),i=n.n(r),a=n(76744),o=n.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=function(e,t){var n=(void 0===t?{}:t).exclude,r=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var a={};return Object.keys(t).forEach((function(r){e[r]&&(a[r]=e[r](t[r],t,n))})),l({},i()(t,r),a)}},d=function(e){return function(t,n){return n["axis"+o()(e)].enable?i()(t,["enable"]):null}},u=function(e){var t=e.format;return e.enabled?t:void 0}},35567:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});n(27378);var r=n(73855),i=n(22543),a=n(13195),o=n(48159),l=n.n(o),s=n(62370),d=function(e){return function(t,n){return n[e].enable?l()(t,["enable"]):null}},u=(0,s.h8)({valueFormat:s.Ld,radialAxisStart:d("radialAxisStart"),radialAxisEnd:d("radialAxisEnd"),circularAxisInner:d("circularAxisInner"),circularAxisOuter:d("circularAxisOuter")}),c=n(30042),g=n(80169),p=n(3759),f=["svg"],m=[{key:"data",group:"Base",type:"object[]",required:!0,help:"Chart data.",description:"\n            Here is what the data for a single chart with 2 bars would look like:\n            \n            ```\n            [\n                {\n                    id: 'Fruits',\n                    data: [{ x: 'Apples', y: 32 }]\n                },\n                {\n                    id: 'Vegetables',\n                    data: [{ x: 'Eggplants', y: 27 }]\n                }\n            ]\n            ```\n            \n            You can add several metrics per group:\n            \n            ```\n            [\n                {\n                    id: 'Fruits',\n                    data: [\n                        { x: 'Apples', y: 32 },\n                        { x: 'Mangoes', y: 15 }\n                    ]\n                },\n                {\n                    id: 'Vegetables',\n                    data: [\n                        { x: 'Eggplants', y: 27 },\n                        { x: 'Avocados', y: 34 }\n                    ]\n                }\n            ]\n            ```\n            \n            When a bar is computed, the `id` is going to be added\n            as the `groupId`, `x` as the `category` and `y`\n            as the value, for example the first bar for the number of Apples\n            in the Fruits group would be:\n            \n            ```\n            {\n                groupId: 'Fruits',\n                category: 'Apples',\n                value: 32\n            }\n            ```\n            \n            You might read those values when adding an `onClick` handler\n            for example, or when customizing the tooltip.\n        ",flavors:f},{key:"maxValue",group:"Base",type:"'auto' | number",required:!1,help:"If 'auto', the max value is derived from the data, otherwise use a static value.",flavors:f,defaultValue:r.XB.maxValue},{key:"valueFormat",group:"Base",type:"string | (value: number) => string",required:!1,help:"Optional formatter for values (`y`).",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",flavors:f,control:{type:"valueFormat"}}].concat((0,p.nk)(f),[{key:"startAngle",group:"Base",type:"number",required:!1,help:"Start angle (in degrees).",flavors:f,defaultValue:r.XB.startAngle,control:{type:"angle",min:-360,max:360,step:5}},{key:"endAngle",group:"Base",type:"number",required:!1,help:"End angle (in degrees).",flavors:f,defaultValue:r.XB.endAngle,control:{type:"angle",min:-360,max:360,step:5}},{key:"innerRadius",group:"Base",help:"Donut if greater than 0. Value should be between 0~1 as it's a ratio from outer radius.",type:"number",required:!1,flavors:f,defaultValue:r.XB.innerRadius,control:{type:"range",min:0,max:.95,step:.05}},{key:"padding",group:"Base",type:"number",required:!1,help:"Padding between each ring (ratio).",flavors:f,defaultValue:r.XB.padding,control:{type:"range",min:0,max:.9,step:.05}},{key:"padAngle",group:"Base",type:"number",required:!1,help:"Padding between each bar.",flavors:f,defaultValue:r.XB.padAngle,control:{type:"range",unit:"°",min:0,max:45,step:1}},{key:"cornerRadius",group:"Base",type:"number",required:!1,help:"Rounded corners.",flavors:f,defaultValue:r.XB.cornerRadius,control:{type:"range",unit:"px",min:0,max:45,step:1}},(0,g.JR)(["svg"]),(0,p.at)({flavors:f,defaultValue:r.XB.colors}),{key:"borderWidth",group:"Style",type:"number",required:!1,help:"Bars border width.",flavors:f,defaultValue:r.XB.borderWidth,control:{type:"lineWidth"}},{key:"borderColor",group:"Style",type:"InheritedColorConfig<ComputedBar>",required:!1,help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",flavors:f,defaultValue:r.XB.borderColor,control:{type:"inheritedColor"}},{key:"enableTracks",group:"Tracks",type:"boolean",required:!1,help:"Enable/disable tracks.",flavors:f,defaultValue:r.XB.enableTracks,control:{type:"switch"}},{key:"tracksColor",group:"Tracks",type:"string",required:!1,help:"Define tracks color.",flavors:f,defaultValue:r.XB.tracksColor,control:{type:"colorPicker"}},{key:"enableRadialGrid",group:"Grid & Axes",type:"boolean",required:!1,help:"Enable radial grid (rays)",flavors:f,defaultValue:r.XB.enableRadialGrid,control:{type:"switch"}},{key:"enableCircularGrid",group:"Grid & Axes",type:"boolean",required:!1,help:"Enable circular grid (rings)",flavors:f,defaultValue:r.XB.enableCircularGrid,control:{type:"switch"}},(0,g.WZ)({key:"radialAxisStart",flavors:f,tickComponent:"RadialAxisTickComponent"}),(0,g.WZ)({key:"radialAxisEnd",flavors:f,tickComponent:"RadialAxisTickComponent"}),(0,g.WZ)({key:"circularAxisInner",flavors:f,tickComponent:"CircularAxisTickComponent"}),(0,g.WZ)({key:"circularAxisOuter",flavors:f,tickComponent:"CircularAxisTickComponent"}),{key:"enableLabels",group:"Labels",type:"boolean",required:!1,help:"Enable/disable labels.",flavors:f,defaultValue:r.XB.enableLabels,control:{type:"switch"}},{key:"label",group:"Labels",type:"string | (bar: ComputedBar) => string",required:!1,help:"Defines how to get label text, can be a string (used to access current bar property) or a function which will receive the actual bar data.",flavors:f,defaultValue:r.XB.label,control:{type:"choices",choices:["category","groupId","value","formattedValue"].map((function(e){return{label:e,value:e}}))}},{key:"labelsSkipAngle",group:"Labels",type:"number",required:!1,help:"Skip label if corresponding arc's angle is lower than provided value.",flavors:f,defaultValue:r.XB.labelsSkipAngle,control:{type:"range",unit:"°",min:0,max:45,step:1}},{key:"labelsRadiusOffset",group:"Labels",type:"number",required:!1,help:"\n            Define the radius to use to determine the label position, starting from inner radius,\n            this is expressed as a ratio. Centered at 0.5 by default.\n        ",flavors:f,defaultValue:r.XB.labelsRadiusOffset,control:{type:"range",min:0,max:2,step:.05}},{key:"labelsTextColor",group:"Labels",help:"Defines how to compute label text color.",type:"string | object | Function",required:!1,flavors:f,defaultValue:r.XB.labelsTextColor,control:{type:"inheritedColor"}},{key:"layers",group:"Customization",type:"(RadialBarLayerId | RadialBarCustomLayer)[]",required:!1,help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer should be a component.\n            \n            The component will receive properties as defined in\n            the `RadialBarCustomLayerProps` interface\n            and must return a valid SVG element.\n        ",flavors:f,defaultValue:r.XB.layers},(0,p.y1)({flavors:f,defaultValue:r.XB.isInteractive}),{key:"tooltip",group:"Interactivity",type:"RadialBarTooltipComponent",required:!1,help:"Override default tooltip.",flavors:f},{key:"onClick",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onClick handler.",flavors:f},{key:"onMouseEnter",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseEnter handler.",flavors:f},{key:"onMouseMove",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseMove handler.",flavors:f},{key:"onMouseLeave",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseLeave handler.",flavors:f},{key:"legends",group:"Legends",type:"LegendProps[]",required:!1,help:"Optional chart's legends.",flavors:f,control:{type:"array",props:(0,g.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){console.log(JSON.stringify(e,null,"    "))}}}}],(0,p.MI)(f),(0,g.$j)(f,r.XB,"react-spring"),[{key:"transitionMode",flavors:f,help:"Define how transitions behave.",type:"string",required:!1,defaultValue:r.XB.transitionMode,group:"Motion",control:{type:"choices",choices:c.UV.map((function(e){return{label:e,value:e}}))}}]),h=(0,g.R2)(m),b=n(25414),y=n(24246);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var x={valueFormat:{format:">-.2f",enabled:!0},startAngle:r.XB.startAngle,endAngle:r.XB.endAngle,innerRadius:r.XB.innerRadius,padding:.4,padAngle:r.XB.padAngle,cornerRadius:2,margin:{top:40,right:120,bottom:40,left:40},colors:r.XB.colors,borderWidth:r.XB.borderWidth,borderColor:r.XB.borderColor,enableTracks:r.XB.enableTracks,tracksColor:r.XB.tracksColor,enableRadialGrid:r.XB.enableRadialGrid,enableCircularGrid:r.XB.enableCircularGrid,radialAxisStart:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0},radialAxisEnd:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0},circularAxisInner:{enable:!1,tickSize:5,tickPadding:12,tickRotation:0},circularAxisOuter:{enable:!0,tickSize:5,tickPadding:12,tickRotation:0},enableLabels:r.XB.enableLabels,label:r.XB.label,labelsSkipAngle:r.XB.labelsSkipAngle,labelsRadiusOffset:r.XB.labelsRadiusOffset,labelsTextColor:r.XB.labelsTextColor,animate:!0,motionConfig:"gentle",transitionMode:r.XB.transitionMode,isInteractive:r.XB.isInteractive,legends:[{anchor:"right",direction:"column",justify:!1,translateX:80,translateY:0,itemsSpacing:6,itemDirection:"left-to-right",itemWidth:100,itemHeight:18,itemTextColor:"#999",symbolSize:18,symbolShape:"square",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]},k=function(){var e=["Supermarket","Combini","Online"];Math.random()>.5&&e.push("Marché");var t=["Vegetables","Fruits","Meat"];return Math.random()<.5&&t.push("Fish"),e.map((function(e){return{id:e,data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},C=function(){var e=(0,b.useStaticQuery)("1878616227").image.childImageSharp.gatsbyImageData;return(0,y.jsx)(i.T,{name:"RadialBar",meta:a.G,icon:"radial-bar",flavors:a.K,currentFlavor:"svg",properties:h,initialProperties:x,defaultProperties:r.XB,propertiesMapper:u,generateData:k,image:e,children:function(e,t,n,i){return(0,y.jsx)(r.W_,v({data:t},e,{theme:n,onClick:function(e){i({type:"click",label:e.category+" - "+e.groupId+": "+e.value,color:e.color,data:e})}}))}})}},47425:function(e,t,n){n.d(t,{$6:function(){return h},iQ:function(){return x},Ae:function(){return f},as:function(){return y},_i:function(){return v}});var r=n(24246),i=n(27378),a=n(99993),o=n(23615),l=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var d={top:0,right:0,bottom:0,left:0},u=function(e){var t,n=e.direction,r=e.itemsSpacing,i=e.padding,a=e.itemCount,o=e.itemWidth,l=e.itemHeight;if("number"!=typeof i&&("object"!=typeof(t=i)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var u="number"==typeof i?{top:i,right:i,bottom:i,left:i}:s({},d,i),c=u.left+u.right,g=u.top+u.bottom,p=o+c,f=l+g,m=(a-1)*r;return"row"===n?p=o*a+m+c:"column"===n&&(f=l*a+m+g),{width:p,height:f,padding:u}},c=function(e){var t=e.anchor,n=e.translateX,r=e.translateY,i=e.containerWidth,a=e.containerHeight,o=e.width,l=e.height,s=n,d=r;switch(t){case"top":s+=(i-o)/2;break;case"top-right":s+=i-o;break;case"right":s+=i-o,d+=(a-l)/2;break;case"bottom-right":s+=i-o,d+=a-l;break;case"bottom":s+=(i-o)/2,d+=a-l;break;case"bottom-left":d+=a-l;break;case"left":d+=(a-l)/2;break;case"center":s+=(i-o)/2,d+=(a-l)/2}return{x:s,y:d}},g=function(e){var t,n,r,i,a,o,l=e.direction,s=e.justify,d=e.symbolSize,u=e.symbolSpacing,c=e.width,g=e.height;switch(l){case"left-to-right":t=0,n=(g-d)/2,i=g/2,o="central",!0===s?(r=c,a="end"):(r=d+u,a="start");break;case"right-to-left":t=c-d,n=(g-d)/2,i=g/2,o="central",!0===s?(r=0,a="start"):(r=c-d-u,a="end");break;case"top-to-bottom":t=(c-d)/2,n=0,r=c/2,a="middle",!0===s?(i=g,o="alphabetic"):(i=d+u,o="text-before-edge");break;case"bottom-to-top":t=(c-d)/2,n=g-d,r=c/2,a="middle",!0===s?(i=0,o="text-before-edge"):(i=g-d-u,o="alphabetic")}return{symbolX:t,symbolY:n,labelX:r,labelY:i,labelAnchor:a,labelAlignment:o}},p={circle:function(e){var t=e.x,n=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,r.jsx)("circle",{r:i/2,cx:t+i/2,cy:n+i/2,fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})},diamond:function(e){var t=e.x,n=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                    M"+i/2+" 0\n                    L"+.8*i+" "+i/2+"\n                    L"+i/2+" "+i+"\n                    L"+.2*i+" "+i/2+"\n                    L"+i/2+" 0\n                ",fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})})},square:function(e){var t=e.x,n=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,r.jsx)("rect",{x:t,y:n,fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,width:i,height:i,style:{pointerEvents:"none"}})},triangle:function(e){var t=e.x,n=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                M"+i/2+" 0\n                L"+i+" "+i+"\n                L0 "+i+"\n                L"+i/2+" 0\n            ",fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})})}},f=function(e){var t,n,o,l,d,u,c,f,m,h,b,y=e.x,v=e.y,x=e.width,k=e.height,C=e.data,A=e.direction,B=void 0===A?"left-to-right":A,S=e.justify,M=void 0!==S&&S,j=e.textColor,R=e.background,X=void 0===R?"transparent":R,w=e.opacity,W=void 0===w?1:w,O=e.symbolShape,E=void 0===O?"square":O,L=e.symbolSize,q=void 0===L?16:L,V=e.symbolSpacing,T=void 0===V?8:V,I=e.symbolBorderWidth,G=void 0===I?0:I,z=e.symbolBorderColor,F=void 0===z?"transparent":z,H=e.onClick,D=e.onMouseEnter,P=e.onMouseLeave,Y=e.toggleSerie,_=e.effects,Z=(0,i.useState)({}),J=Z[0],N=Z[1],U=(0,a.Fg)(),$=(0,i.useCallback)((function(e){if(_){var t=_.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return s({},e,t.style)}),{});N(t)}null==D||D(C,e)}),[D,C,_]),Q=(0,i.useCallback)((function(e){if(_){var t=_.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return s({},e,t.style)}),{});N(t)}null==P||P(C,e)}),[P,C,_]),K=g({direction:B,justify:M,symbolSize:null!=(t=J.symbolSize)?t:q,symbolSpacing:T,width:x,height:k}),ee=K.symbolX,te=K.symbolY,ne=K.labelX,re=K.labelY,ie=K.labelAnchor,ae=K.labelAlignment,oe=[H,D,P,Y].some((function(e){return void 0!==e})),le="function"==typeof E?E:p[E];return(0,r.jsxs)("g",{transform:"translate("+y+","+v+")",style:{opacity:null!=(n=J.itemOpacity)?n:W},children:[(0,r.jsx)("rect",{width:x,height:k,fill:null!=(o=J.itemBackground)?o:X,style:{cursor:oe?"pointer":"auto"},onClick:function(e){null==H||H(C,e),null==Y||Y(C.id)},onMouseEnter:$,onMouseLeave:Q}),i.createElement(le,s({id:C.id,x:ee,y:te,size:null!=(l=J.symbolSize)?l:q,fill:null!=(d=null!=(u=C.fill)?u:C.color)?d:"black",borderWidth:null!=(c=J.symbolBorderWidth)?c:G,borderColor:null!=(f=J.symbolBorderColor)?f:F},C.hidden?U.legends.hidden.symbol:void 0)),(0,r.jsx)("text",{textAnchor:ie,style:s({},U.legends.text,{fill:null!=(m=null!=(h=null!=(b=J.itemTextColor)?b:j)?h:U.legends.text.fill)?m:"black",dominantBaseline:ae,pointerEvents:"none",userSelect:"none"},C.hidden?U.legends.hidden.text:void 0),x:ne,y:re,children:C.label})]})},m=function(e){var t=e.data,n=e.x,i=e.y,a=e.direction,o=e.padding,l=void 0===o?0:o,s=e.justify,d=e.effects,c=e.itemWidth,g=e.itemHeight,p=e.itemDirection,m=void 0===p?"left-to-right":p,h=e.itemsSpacing,b=void 0===h?0:h,y=e.itemTextColor,v=e.itemBackground,x=void 0===v?"transparent":v,k=e.itemOpacity,C=void 0===k?1:k,A=e.symbolShape,B=e.symbolSize,S=e.symbolSpacing,M=e.symbolBorderWidth,j=e.symbolBorderColor,R=e.onClick,X=e.onMouseEnter,w=e.onMouseLeave,W=e.toggleSerie,O=u({itemCount:t.length,itemWidth:c,itemHeight:g,itemsSpacing:b,direction:a,padding:l}).padding,E="row"===a?c+b:0,L="column"===a?g+b:0;return(0,r.jsx)("g",{transform:"translate("+n+","+i+")",children:t.map((function(e,t){return(0,r.jsx)(f,{data:e,x:t*E+O.left,y:t*L+O.top,width:c,height:g,direction:m,justify:s,effects:d,textColor:y,background:x,opacity:C,symbolShape:A,symbolSize:B,symbolSpacing:S,symbolBorderWidth:M,symbolBorderColor:j,onClick:R,onMouseEnter:X,onMouseLeave:w,toggleSerie:W},t)}))})},h=function(e){var t=e.data,n=e.containerWidth,i=e.containerHeight,a=e.translateX,o=void 0===a?0:a,l=e.translateY,s=void 0===l?0:l,d=e.anchor,g=e.direction,p=e.padding,f=void 0===p?0:p,h=e.justify,b=e.itemsSpacing,y=void 0===b?0:b,v=e.itemWidth,x=e.itemHeight,k=e.itemDirection,C=e.itemTextColor,A=e.itemBackground,B=e.itemOpacity,S=e.symbolShape,M=e.symbolSize,j=e.symbolSpacing,R=e.symbolBorderWidth,X=e.symbolBorderColor,w=e.onClick,W=e.onMouseEnter,O=e.onMouseLeave,E=e.toggleSerie,L=e.effects,q=u({itemCount:t.length,itemsSpacing:y,itemWidth:v,itemHeight:x,direction:g,padding:f}),V=q.width,T=q.height,I=c({anchor:d,translateX:o,translateY:s,containerWidth:n,containerHeight:i,width:V,height:T}),G=I.x,z=I.y;return(0,r.jsx)(m,{data:t,x:G,y:z,direction:g,padding:f,justify:h,effects:L,itemsSpacing:y,itemWidth:v,itemHeight:x,itemDirection:k,itemTextColor:C,itemBackground:A,itemOpacity:B,symbolShape:S,symbolSize:M,symbolSpacing:j,symbolBorderWidth:R,symbolBorderColor:X,onClick:w,onMouseEnter:W,onMouseLeave:O,toggleSerie:"boolean"==typeof E?void 0:E})},b={start:"left",middle:"center",end:"right"},y=function(e,t){var n=t.data,r=t.containerWidth,i=t.containerHeight,a=t.translateX,o=void 0===a?0:a,l=t.translateY,s=void 0===l?0:l,d=t.anchor,p=t.direction,f=t.padding,m=void 0===f?0:f,h=t.justify,y=void 0!==h&&h,v=t.itemsSpacing,x=void 0===v?0:v,k=t.itemWidth,C=t.itemHeight,A=t.itemDirection,B=void 0===A?"left-to-right":A,S=t.itemTextColor,M=t.symbolSize,j=void 0===M?16:M,R=t.symbolSpacing,X=void 0===R?8:R,w=t.theme,W=u({itemCount:n.length,itemWidth:k,itemHeight:C,itemsSpacing:x,direction:p,padding:m}),O=W.width,E=W.height,L=W.padding,q=c({anchor:d,translateX:o,translateY:s,containerWidth:r,containerHeight:i,width:O,height:E}),V=q.x,T=q.y,I="row"===p?k+x:0,G="column"===p?C+x:0;e.save(),e.translate(V,T),e.font=w.legends.text.fontSize+"px "+(w.legends.text.fontFamily||"sans-serif"),n.forEach((function(t,n){var r,i,a=n*I+L.left,o=n*G+L.top,l=g({direction:B,justify:y,symbolSize:j,symbolSpacing:X,width:k,height:C}),s=l.symbolX,d=l.symbolY,u=l.labelX,c=l.labelY,p=l.labelAnchor,f=l.labelAlignment;e.fillStyle=null!=(r=t.color)?r:"black",e.fillRect(a+s,o+d,j,j),e.textAlign=b[p],"central"===f&&(e.textBaseline="middle"),e.fillStyle=null!=(i=null!=S?S:w.legends.text.fill)?i:"black",e.fillText(String(t.label),a+u,o+c)})),e.restore()},v=function(e){var t=e.scale,n=e.domain,r=e.reverse,a=void 0!==r&&r,o=e.valueFormat,l=void 0===o?function(e){return e}:o,s=e.separator,d=void 0===s?" - ":s;return(0,i.useMemo)((function(){var e=(null!=n?n:t.range()).map((function(e,n){var r=t.invertExtent(e),i=r[0],a=r[1];return{id:e,index:n,extent:[i,a],label:""+l(i)+d+l(a),value:t(i),color:e}}));return!0===a&&e.reverse(),e}),[n,t,a])},x={data:l().arrayOf(l().object),anchor:l().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:l().number,translateY:l().number,direction:l().oneOf(["row","column"]).isRequired,itemsSpacing:l().number,itemWidth:l().number.isRequired,itemHeight:l().number.isRequired,itemDirection:l().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolShape:l().oneOfType([l().oneOf(["circle","diamond","square","triangle"]),l().func]),symbolSize:l().number,symbolSpacing:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string,onClick:l().func,onMouseEnter:l().func,onMouseLeave:l().func,effects:l().arrayOf(l().shape({on:l().oneOfType([l().oneOf(["hover"])]).isRequired,style:l().shape({itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolSize:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string}).isRequired}))}},73855:function(e,t,n){n.d(t,{Gm:function(){return O},W_:function(){return E},XB:function(){return j}});var r=n(89193),i=n(24246),a=n(27378),o=n(99993),l=n(30042),s=n(47425),d=n(58493),u=n(770);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var g=function(e){var t=e.label,n=e.animated,r=(0,o.Fg)();return(0,i.jsxs)(d.q.g,{opacity:n.opacity,children:[(0,i.jsx)(d.q.line,{x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2,style:r.axis.ticks.line}),(0,i.jsx)(d.q.text,{dx:n.textX,dy:n.textY,dominantBaseline:"central",style:r.axis.ticks.text,textAnchor:"middle",children:t})]})},p=function(e,t,n){var r=(0,o.re)((0,o.Ht)(e),t),i=(0,o.re)((0,o.Ht)(e),n);return{x1:r.x,y1:r.y,x2:i.x,y2:i.y}},f=function(e,t){var n=(0,o.re)((0,o.Ht)(e),t);return{textX:n.x,textY:n.y}},m=function(e){var t=e.type,n=e.center,r=void 0===n?[0,0]:n,s=e.radius,m=e.startAngle,h=e.endAngle,b=e.scale,y=e.tickSize,v=void 0===y?5:y,x=e.tickPadding,k=void 0===x?12:x,C=e.tickComponent,A=void 0===C?g:C,B=m-90,S=h-90,M=(0,o.Fg)(),j=(0,o.tf)(),R=j.animate,X=j.config,w=(0,d.useSpring)({radius:s,startAngle:B,endAngle:S,opacity:1,immediate:!R,config:X}),W=(0,a.useMemo)((function(){return(0,u.xX)(b).map((function(e,t){return{key:t,label:e,angle:b(e)-90}}))}),[b]),O="inner"===t?s-v:s+v,E="inner"===t?O-k:O+k,L=(0,d.useTransition)(W,{keys:function(e){return e.key},initial:function(e){return c({},p(e.angle,s,O),f(e.angle,E),{opacity:1})},from:function(e){return c({},p(e.angle,s,O),f(e.angle,E),{opacity:0})},enter:function(e){return c({},p(e.angle,s,O),f(e.angle,E),{opacity:1})},update:function(e){return c({},p(e.angle,s,O),f(e.angle,E),{opacity:1})},leave:function(e){return c({},p(e.angle,s,O),f(e.angle,E),{opacity:0})},immediate:!R,config:X});return(0,i.jsxs)("g",{transform:"translate("+r[0]+", "+r[1]+")",children:[(0,i.jsx)(l.Ju,c({animated:w},M.axis.domain.line,{fill:"none"})),L((function(e,t){return(0,a.createElement)(A,{key:t.key,label:t.label,animated:e})}))]})},h=function(e){var t=e.scale,n=e.innerRadius,r=e.outerRadius,l=(0,o.Fg)(),s=(0,a.useMemo)((function(){return(0,u.xX)(t).map((function(e,n){return{id:n,angle:t(e)-90}}))}),[t]),g=(0,o.tf)(),p=g.animate,f=g.config,m=(0,d.useTransition)(s,{keys:function(e){return e.id},initial:function(e){return{angle:e.angle,opacity:1}},from:function(e){return{angle:e.angle,opacity:0}},enter:function(e){return{angle:e.angle,opacity:1}},update:function(e){return{angle:e.angle,opacity:1}},leave:function(e){return{angle:e.angle,opacity:0}},config:f,immediate:!p});return(0,i.jsx)(i.Fragment,{children:m((function(e,t){return(0,i.jsx)(d.q.g,{transform:e.angle.to((function(e){return"rotate("+e+")"})),opacity:e.opacity,children:(0,i.jsx)("line",c({x1:n,x2:r},l.grid.line))},t.id)}))})},b=function(e){var t=e.scale,n=e.startAngle,r=e.endAngle,s=(0,o.Fg)(),g=n-90,p=r-90,f=(0,a.useMemo)((function(){return(0,u.xX)(t).map((function(e,n){var r=t(e);return"bandwidth"in t&&(r+=t.bandwidth()/2),{id:n,radius:r}}))}),[t]),m=(0,o.tf)(),h=m.animate,b=m.config,y=(0,d.useTransition)(f,{keys:function(e){return e.id},initial:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},from:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:0}},enter:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},update:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},leave:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:0}},config:b,immediate:!h});return(0,i.jsx)(i.Fragment,{children:y((function(e,t){return(0,i.jsx)(l.Ju,c({animated:e},s.grid.line,{strokeOpacity:e.opacity,fill:"none"}),t.id)}))})},y=function(e){var t=e.center,n=e.enableRadialGrid,r=e.enableCircularGrid,a=e.angleScale,o=e.radiusScale,l=e.startAngle,s=e.endAngle,d=Math.min.apply(Math,o.range()),u=Math.max.apply(Math,o.range());return(0,i.jsxs)("g",{transform:"translate("+t[0]+","+t[1]+")",children:[n&&(0,i.jsx)(h,{scale:a,innerRadius:d,outerRadius:u}),r&&(0,i.jsx)(b,{scale:o,startAngle:l,endAngle:s})]})},v=function(e){var t=e.label,n=e.textAnchor,r=e.animated,a=(0,o.Fg)();return(0,i.jsxs)(d.q.g,{opacity:r.opacity,transform:(0,d.to)([r.y,r.rotation],(function(e,t){return"translate("+e+", 0) rotate("+t+")"})),children:[(0,i.jsx)(d.q.line,{x2:r.length,style:a.axis.ticks.line}),(0,i.jsx)(d.q.text,{dx:r.textX,textAnchor:n,dominantBaseline:"central",style:a.axis.ticks.text,children:t})]})},x=function(e){var t,n,r,l,s=e.type,c=e.center,g=e.angle,p=e.scale,f=e.tickSize,m=void 0===f?5:f,h=e.tickPadding,b=void 0===h?5:h,y=e.tickRotation,x=void 0===y?0:y,k=e.tickComponent,C=void 0===k?v:k,A=(0,o.LW)(g);"start"===s?(l=90+x,A<=90?(r=(n=-m)-b,t="end"):A<270?(r=(n=m)+b,t="start",l-=180):(r=(n=-m)-b,t="end")):(l=90+x,A<90?(r=(n=m)+b,t="start"):A<270?(r=(n=-m)-b,t="end",l-=180):(r=(n=m)+b,t="start"));var B=(0,a.useMemo)((function(){return(0,u.xX)(p).map((function(e,t){var n=p(e);return"bandwidth"in p&&(n+=p.bandwidth()/2),{key:t,label:e,position:n}}))}),[p]),S=(0,o.tf)(),M=S.animate,j=S.config,R=(0,d.useSpring)({rotation:g-90,immediate:!M,config:j}),X=(0,d.useTransition)(B,{keys:function(e){return e.key},initial:function(e){return{y:e.position,textX:r,rotation:l,length:n,opacity:1}},from:function(e){return{y:e.position,textX:r,rotation:l,length:n,opacity:0}},enter:function(e){return{y:e.position,textX:r,rotation:l,length:n,opacity:1}},update:function(e){return{y:e.position,textX:r,rotation:l,length:n,opacity:1}},leave:function(e){return{y:e.position,textX:r,rotation:l,length:n,opacity:0}},immediate:!M,config:j});return(0,i.jsx)("g",{transform:"translate("+c[0]+", "+c[1]+")",children:(0,i.jsx)(d.q.g,{transform:R.rotation.to((function(e){return"rotate("+e+")"})),children:X((function(e,i){return(0,a.createElement)(C,{key:i.key,label:i.label,y:i.position,textX:r,rotation:l,length:n,textAnchor:t,animated:e})}))})})},k=n(9841),C=n(46448),A=n(29140),B=n(79234);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var M={maxValue:"auto",layers:["grid","tracks","bars","labels","legends"],startAngle:0,endAngle:270,innerRadius:.3,padding:.2,padAngle:0,cornerRadius:0,enableTracks:!0,tracksColor:"rgba(0, 0, 0, .15)",enableRadialGrid:!0,enableCircularGrid:!0,radialAxisStart:{},radialAxisEnd:null,circularAxisInner:null,circularAxisOuter:{},colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableLabels:!1,label:"formattedValue",labelsSkipAngle:10,labelsRadiusOffset:.5,labelsTextColor:{theme:"labels.text.fill"},isInteractive:!0,tooltip:function(e){var t=e.bar;return(0,i.jsx)(r._5,{enableChip:!0,id:(0,i.jsxs)("span",{children:[t.category," - ",t.groupId]}),value:t.formattedValue,color:t.color})},legends:[],animate:!0,motionConfig:"gentle",transitionMode:"centerRadius",renderWrapper:!0},j=S({},M),R=function(e){var t=e.center,n=e.bars,o=e.borderWidth,s=e.borderColor,d=e.arcGenerator,u=e.isInteractive,c=e.tooltip,g=e.onClick,p=e.onMouseEnter,f=e.onMouseMove,m=e.onMouseLeave,h=e.transitionMode,b=(0,r.lL)(),y=b.showTooltipFromEvent,v=b.hideTooltip,x=(0,a.useCallback)((function(e,t){null==g||g(e,t)}),[g]),k=(0,a.useCallback)((function(e,t){y((0,a.createElement)(c,{bar:e}),t),null==p||p(e,t)}),[y,c,p]),C=(0,a.useCallback)((function(e,t){y((0,a.createElement)(c,{bar:e}),t),null==f||f(e,t)}),[y,c,f]),A=(0,a.useCallback)((function(e,t){v(),null==m||m(e,t)}),[v,m]);return(0,i.jsx)(l.Bs,{center:t,data:n,arcGenerator:d,borderWidth:o,borderColor:s,transitionMode:h,onClick:u?x:void 0,onMouseEnter:u?k:void 0,onMouseMove:u?C:void 0,onMouseLeave:u?A:void 0})},X=function(e){var t=e.center,n=e.tracks,r=e.arcGenerator,a=e.transitionMode;return(0,i.jsx)(l.Bs,{center:t,data:n,arcGenerator:r,borderWidth:0,borderColor:"none",transitionMode:a})},w=["isInteractive","animate","motionConfig","theme","renderWrapper"],W=function(e){var t=e.data,n=e.maxValue,r=void 0===n?j.maxValue:n,d=e.valueFormat,c=e.startAngle,g=void 0===c?j.startAngle:c,p=e.endAngle,f=void 0===p?j.endAngle:p,h=e.innerRadius,b=void 0===h?j.innerRadius:h,v=e.padding,w=void 0===v?j.padding:v,W=e.padAngle,O=void 0===W?j.padAngle:W,E=e.cornerRadius,L=void 0===E?j.cornerRadius:E,q=e.width,V=e.height,T=e.margin,I=e.layers,G=void 0===I?j.layers:I,z=e.enableTracks,F=void 0===z?j.enableTracks:z,H=e.tracksColor,D=void 0===H?j.tracksColor:H,P=e.enableRadialGrid,Y=void 0===P?j.enableRadialGrid:P,_=e.enableCircularGrid,Z=void 0===_?j.enableCircularGrid:_,J=e.radialAxisStart,N=void 0===J?j.radialAxisStart:J,U=e.radialAxisEnd,$=void 0===U?j.radialAxisEnd:U,Q=e.circularAxisInner,K=void 0===Q?j.circularAxisInner:Q,ee=e.circularAxisOuter,te=void 0===ee?j.circularAxisOuter:ee,ne=e.colors,re=void 0===ne?j.colors:ne,ie=e.borderWidth,ae=void 0===ie?j.borderWidth:ie,oe=e.borderColor,le=void 0===oe?j.borderColor:oe,se=e.enableLabels,de=void 0===se?j.enableLabels:se,ue=e.label,ce=void 0===ue?j.label:ue,ge=e.labelsSkipAngle,pe=void 0===ge?j.labelsSkipAngle:ge,fe=e.labelsRadiusOffset,me=void 0===fe?j.labelsRadiusOffset:fe,he=e.labelsTextColor,be=void 0===he?j.labelsTextColor:he,ye=e.isInteractive,ve=void 0===ye?j.isInteractive:ye,xe=e.tooltip,ke=void 0===xe?j.tooltip:xe,Ce=e.onClick,Ae=e.onMouseEnter,Be=e.onMouseMove,Se=e.onMouseLeave,Me=e.transitionMode,je=void 0===Me?j.transitionMode:Me,Re=e.legends,Xe=void 0===Re?j.legends:Re,we=e.role,We=e.ariaLabel,Oe=e.ariaLabelledBy,Ee=e.ariaDescribedBy,Le=(0,o.Bs)(q,V,T),qe=Le.margin,Ve=Le.innerWidth,Te=Le.innerHeight,Ie=Le.outerWidth,Ge=Le.outerHeight,ze=(0,o.zm)(g,f),Fe=ze[0],He=ze[1],De=function(e){var t=e.data,n=e.maxValue,r=void 0===n?j.maxValue:n,i=e.valueFormat,l=e.startAngle,s=void 0===l?M.startAngle:l,d=e.endAngle,c=void 0===d?M.endAngle:d,g=e.innerRadiusRatio,p=void 0===g?M.innerRadius:g,f=e.padding,m=void 0===f?M.padding:f,h=e.padAngle,b=void 0===h?M.padAngle:h,y=e.cornerRadius,v=void 0===y?M.cornerRadius:y,x=e.width,S=e.height,R=e.colors,X=void 0===R?M.colors:R,w=e.tracksColor,W=void 0===w?M.tracksColor:w,O=(0,a.useMemo)((function(){return[x/2,S/2]}),[x,S]),E=Math.min.apply(Math,O),L=E*Math.min(p,1),q=(0,B.U)(X,"category"),V=(0,a.useMemo)((function(){var e={serieIds:[],categories:[],groups:[],maxValue:0};return t.forEach((function(t){e.serieIds.push(t.id);var n=0;t.data.forEach((function(t){e.categories.includes(t.x)||e.categories.push(t.x),n+=t.y})),e.groups.push({id:t.id,total:n,data:t.data})})),e.maxValue="auto"===r?Math.max.apply(Math,e.groups.map((function(e){return e.total}))):r,e}),[t,r]),T=V.serieIds,I=V.categories,G=V.groups,z=V.maxValue,F=(0,a.useMemo)((function(){return(0,u.__)((0,k.Z)().domain([0,z]).range([s,c]))}),[z,s,c]),H=(0,a.useMemo)((function(){return(0,u.NB)((0,C.Z)().domain(T).range([L,E]).padding(m))}),[T,E,L,m]),D=(0,a.useMemo)((function(){return(0,A.Z)().startAngle((function(e){return e.startAngle})).endAngle((function(e){return e.endAngle})).innerRadius((function(e){return e.innerRadius})).outerRadius((function(e){return e.outerRadius})).cornerRadius(v).padAngle((0,o.Ht)(b))}),[v,b]),P=(0,o.O_)(i),Y=(0,a.useMemo)((function(){var e=[];return G.forEach((function(t){var n=0,r=H(t.id),i=r+H.bandwidth();t.data.forEach((function(a){var l=n+a.y,s={id:t.id+"."+a.x,data:a,groupId:t.id,category:a.x,value:a.y,formattedValue:P(a.y),color:"",stackedValue:l,arc:{startAngle:(0,o.Ht)(F(n)),endAngle:(0,o.Ht)(F(l)),innerRadius:r,outerRadius:i}};s.color=q(s),n+=a.y,e.push(s)}))})),e}),[G,H,F,q,P]),_=(0,o.Ht)(s),Z=(0,o.Ht)(c),J=(0,a.useMemo)((function(){return(0,u.xX)(H).map((function(e){var t=H(e);return{id:e,color:W,arc:{startAngle:_,endAngle:Z,innerRadius:t,outerRadius:t+H.bandwidth()}}}))}),[H,_,Z,W]),N=(0,a.useMemo)((function(){return I.map((function(e){var t=Y.find((function(t){return t.category===e})),n=t?t.color:void 0;return{id:e,label:e,color:n}}))}),[I,Y]),U=(0,a.useMemo)((function(){return{center:O,outerRadius:E,innerRadius:L,bars:Y,arcGenerator:D,radiusScale:H,valueScale:F}}),[O,E,L,Y,D,H,F]);return{center:O,outerRadius:E,innerRadius:L,bars:Y,arcGenerator:D,radiusScale:H,valueScale:F,tracks:J,legendData:N,customLayerProps:U}}({data:t,maxValue:r,valueFormat:d,startAngle:Fe,endAngle:He,innerRadiusRatio:b,padding:w,padAngle:O,cornerRadius:L,width:Ve,height:Te,colors:re,tracksColor:D}),Pe=De.center,Ye=De.innerRadius,_e=De.outerRadius,Ze=De.bars,Je=De.arcGenerator,Ne=De.radiusScale,Ue=De.valueScale,$e=De.tracks,Qe=De.legendData,Ke=De.customLayerProps,et={grid:null,tracks:null,bars:null,labels:null,legends:null};return G.includes("grid")&&(et.grid=(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(y,{center:Pe,enableRadialGrid:Y,enableCircularGrid:Z,angleScale:Ue,radiusScale:Ne,startAngle:Fe,endAngle:He}),N&&(0,i.jsx)(x,S({type:"start",center:Pe,angle:Math.min(Fe,He),scale:Ne},N)),$&&(0,i.jsx)(x,S({type:"end",center:Pe,angle:Math.max(Fe,He),scale:Ne},$)),K&&(0,i.jsx)(m,S({type:"inner",center:Pe,radius:Ye,startAngle:Fe,endAngle:He,scale:Ue},K)),te&&(0,i.jsx)(m,S({type:"outer",center:Pe,radius:_e,startAngle:Fe,endAngle:He,scale:Ue},te))]},"grid")),G.includes("tracks")&&F&&(et.tracks=(0,i.jsx)(X,{center:Pe,tracks:$e,arcGenerator:Je,transitionMode:je},"tracks")),G.includes("bars")&&(et.bars=(0,i.jsx)(R,{center:Pe,bars:Ze,borderWidth:ae,borderColor:le,arcGenerator:Je,isInteractive:ve,tooltip:ke,onClick:Ce,onMouseEnter:Ae,onMouseMove:Be,onMouseLeave:Se,transitionMode:je},"bars")),G.includes("labels")&&de&&(et.labels=(0,i.jsx)(l.Xr,{center:Pe,data:Ze,label:ce,radiusOffset:me,skipAngle:pe,textColor:be,transitionMode:je},"labels")),G.includes("legends")&&Xe.length>0&&(et.legends=(0,i.jsx)(a.Fragment,{children:Xe.map((function(e,t){return(0,i.jsx)(s.$6,S({},e,{containerWidth:Ve,containerHeight:Te,data:Qe}),t)}))},"legends")),(0,i.jsx)(o.tM,{width:Ie,height:Ge,margin:qe,role:we,ariaLabel:We,ariaLabelledBy:Oe,ariaDescribedBy:Ee,children:G.map((function(e,t){var n;return"function"==typeof e?(0,i.jsx)(a.Fragment,{children:(0,a.createElement)(e,Ke)},t):null!=(n=null==et?void 0:et[e])?n:null}))})},O=function(e){var t=e.isInteractive,n=void 0===t?j.isInteractive:t,r=e.animate,a=void 0===r?j.animate:r,l=e.motionConfig,s=void 0===l?j.motionConfig:l,d=e.theme,u=e.renderWrapper,c=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,w);return(0,i.jsx)(o.W2,{animate:a,isInteractive:n,motionConfig:s,renderWrapper:u,theme:d,children:(0,i.jsx)(W,S({isInteractive:n},c))})},E=function(e){return(0,i.jsx)(o.d,{children:function(t){var n=t.width,r=t.height;return(0,i.jsx)(O,S({width:n,height:r},e))}})}}}]);
//# sourceMappingURL=component---src-pages-radial-bar-index-tsx-0b45f5874f5f39527620.js.map