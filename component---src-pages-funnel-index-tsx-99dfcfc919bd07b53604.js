(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[9236],{41584:function(t,e){"use strict";var n=Math.PI,r=2*n,o=1e-6,i=r-o;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,o,i){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(t,e,r,i,a){t=+t,e=+e,r=+r,i=+i,a=+a;var s=this._x1,l=this._y1,u=r-t,d=i-e,c=s-t,f=l-e,h=c*c+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(h>o)if(Math.abs(f*u-d*c)>o&&a){var p=r-s,y=i-l,v=u*u+d*d,g=p*p+y*y,x=Math.sqrt(v),b=Math.sqrt(h),m=a*Math.tan((n-Math.acos((v+h-g)/(2*x*b)))/2),S=m/b,k=m/x;Math.abs(S-1)>o&&(this._+="L"+(t+S*c)+","+(e+S*f)),this._+="A"+a+","+a+",0,0,"+ +(f*p>c*y)+","+(this._x1=t+k*u)+","+(this._y1=e+k*d)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,a,s,l,u){t=+t,e=+e,u=!!u;var d=(a=+a)*Math.cos(s),c=a*Math.sin(s),f=t+d,h=e+c,p=1^u,y=u?s-l:l-s;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>o||Math.abs(this._y1-h)>o)&&(this._+="L"+f+","+h),a&&(y<0&&(y=y%r+r),y>i?this._+="A"+a+","+a+",0,1,"+p+","+(t-d)+","+(e-c)+"A"+a+","+a+",0,1,"+p+","+(this._x1=f)+","+(this._y1=h):y>o&&(this._+="A"+a+","+a+",0,"+ +(y>=n)+","+p+","+(this._x1=t+a*Math.cos(l))+","+(this._y1=e+a*Math.sin(l))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}},e.Z=s},94942:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(41584),o=n(3583),i=n(30964),a=n(18091),s=n(92519);function l(){var t=s.x,e=null,n=(0,o.Z)(0),l=s.y,u=(0,o.Z)(!0),d=null,c=i.Z,f=null;function h(o){var i,a,s,h,p,y=o.length,v=!1,g=new Array(y),x=new Array(y);for(null==d&&(f=c(p=(0,r.Z)())),i=0;i<=y;++i){if(!(i<y&&u(h=o[i],i,o))===v)if(v=!v)a=i,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),s=i-1;s>=a;--s)f.point(g[s],x[s]);f.lineEnd(),f.areaEnd()}v&&(g[i]=+t(h,i,o),x[i]=+n(h,i,o),f.point(e?+e(h,i,o):g[i],l?+l(h,i,o):x[i]))}if(p)return f=null,p+""||null}function p(){return(0,a.Z)().defined(u).curve(c).context(d)}return h.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,o.Z)(+n),e=null,h):t},h.x0=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),h):t},h.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:(0,o.Z)(+t),h):e},h.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),l=null,h):n},h.y0=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),h):n},h.y1=function(t){return arguments.length?(l=null==t?null:"function"==typeof t?t:(0,o.Z)(+t),h):l},h.lineX0=h.lineY0=function(){return p().x(t).y(n)},h.lineY1=function(){return p().x(t).y(l)},h.lineX1=function(){return p().x(e).y(n)},h.defined=function(t){return arguments.length?(u="function"==typeof t?t:(0,o.Z)(!!t),h):u},h.curve=function(t){return arguments.length?(c=t,null!=d&&(f=c(d)),h):c},h.context=function(t){return arguments.length?(null==t?d=f=null:f=c(d=t),h):d},h}},3583:function(t,e,n){"use strict";function r(t){return function(){return t}}n.d(e,{Z:function(){return r}})},18091:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(41584),o=n(3583),i=n(30964),a=n(92519);function s(){var t=a.x,e=a.y,n=(0,o.Z)(!0),s=null,l=i.Z,u=null;function d(o){var i,a,d,c=o.length,f=!1;for(null==s&&(u=l(d=(0,r.Z)())),i=0;i<=c;++i)!(i<c&&n(a=o[i],i,o))===f&&((f=!f)?u.lineStart():u.lineEnd()),f&&u.point(+t(a,i,o),+e(a,i,o));if(d)return u=null,d+""||null}return d.x=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),d):t},d.y=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),d):e},d.defined=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(!!t),d):n},d.curve=function(t){return arguments.length?(l=t,null!=s&&(u=l(s)),d):l},d.context=function(t){return arguments.length?(null==t?s=u=null:u=l(s=t),d):s},d}},92519:function(t,e,n){"use strict";function r(t){return t[0]}function o(t){return t[1]}n.d(e,{x:function(){return r},y:function(){return o}})},62370:function(t,e,n){"use strict";n.d(e,{h8:function(){return l},h6:function(){return u},Ld:function(){return d}});var r=n(48159),o=n.n(r),i=n(76744),a=n.n(i);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}var l=function(t,e){var n=(void 0===e?{}:e).exclude,r=void 0===n?[]:n;return function(e,n){void 0===n&&(n={});var i={};return Object.keys(e).forEach((function(r){t[r]&&(i[r]=t[r](e[r],e,n))})),s({},o()(e,r),i)}},u=function(t){return function(e,n){return n["axis"+a()(t)].enable?o()(e,["enable"]):null}},d=function(t){var e=t.format;return t.enabled?e:void 0}},48176:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});n(27378);var r=n(48159),o=n.n(r),i=n(15409),a=n.n(i),s=n(27570),l=n(22543),u=n(40499),d=n(62370),c=(0,d.h8)({valueFormat:d.Ld}),f=n(80169),h=n(3759),p=["svg"],y=[{key:"data",group:"Base",type:"Datum[]",required:!0,help:"Chart data.",flavors:["svg"],description:"\n            Chart data, which must conform to this structure:\n\n            ```\n            {\n                id:    string | number\n                label: string\n                value: number\n            }[]\n            ```\n            \n            Datum is a generic and can be overriden, this can be useful\n            to attach a color to each datum for example, and then use\n            this for the `colors` property.            \n        "}].concat((0,h.nk)(p),[{key:"direction",group:"Base",help:"Direction of the chart.",type:"string",required:!1,defaultValue:s.XB.direction,flavors:["svg"],control:{type:"radio",choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"interpolation",group:"Base",type:"string",required:!1,help:"Part shape interpolation.",defaultValue:s.XB.interpolation,flavors:["svg"],control:{type:"radio",choices:[{label:"smooth",value:"smooth"},{label:"linear",value:"linear"}]}},{key:"spacing",group:"Base",help:"Spacing between parts",type:"number",required:!1,defaultValue:s.XB.spacing,flavors:["svg"],control:{type:"range",min:0,max:30,unit:"px"}},{key:"shapeBlending",group:"Base",help:"Blend shapes.",type:"number",required:!1,defaultValue:s.XB.shapeBlending,flavors:["svg"],control:{type:"range",min:0,max:1,step:.01}},{key:"valueFormat",group:"Base",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",type:"string | Function",required:!1,flavors:["svg"],control:{type:"valueFormat"}},(0,f.JR)(["svg"]),(0,h.at)({flavors:p,defaultValue:s.XB.colors}),{key:"fillOpacity",group:"Style",help:"Part background opacity.",required:!1,defaultValue:s.XB.fillOpacity,type:"number",flavors:["svg"],control:{type:"opacity"}},{key:"borderWidth",group:"Style",help:"Width of part border.",type:"number",required:!1,defaultValue:s.XB.borderWidth,flavors:["svg"],control:{type:"lineWidth"}},{key:"borderColor",group:"Style",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:s.XB.borderColor,flavors:["svg"],control:{type:"inheritedColor"}},{key:"borderOpacity",group:"Style",help:"Part border opacity.",required:!1,defaultValue:s.XB.borderOpacity,type:"number",flavors:["svg"],control:{type:"opacity"}},{key:"enableLabel",group:"Labels",help:"\n            Enable/disable labels. Use styles from\n            theme.labels.text.\n        ",type:"boolean",required:!1,defaultValue:s.XB.enableLabel,flavors:["svg"],control:{type:"switch"}},{key:"labelColor",group:"Labels",help:"Method to compute label color.",description:"\n            how to compute label color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:s.XB.labelColor,flavors:["svg"],control:{type:"inheritedColor"}},{key:"enableBeforeSeparators",group:"Separators",help:"\n            Enable/disable before separators.\n            Separators inherit styles from theme.grid.line.\n        ",type:"boolean",required:!1,defaultValue:s.XB.enableBeforeSeparators,flavors:["svg"],control:{type:"switch"}},{key:"beforeSeparatorLength",group:"Separators",help:"\n            Length of the before separator lines. You should add margin\n            for them to be visible if the value is greater than 0.\n        ",required:!1,defaultValue:s.XB.beforeSeparatorLength,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"beforeSeparatorOffset",group:"Separators",help:"\n            Offset from the parts for the before separator lines.\n            You should add margin for them to be visible\n            if the value is greater than 0.\n        ",required:!1,defaultValue:s.XB.beforeSeparatorOffset,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"enableAfterSeparators",group:"Separators",help:"\n            Enable/disable after separators.\n            Separators inherit styles from theme.grid.line.\n        ",type:"boolean",required:!1,defaultValue:s.XB.enableAfterSeparators,flavors:["svg"],control:{type:"switch"}},{key:"afterSeparatorLength",group:"Separators",help:"\n            Length of the after separator lines. You should add margin\n            for them to be visible if the value is greater than 0.\n        ",required:!1,defaultValue:s.XB.afterSeparatorLength,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"afterSeparatorOffset",group:"Separators",help:"\n            Offset from the parts for the after separator lines.\n            You should add margin for them to be visible\n            if the value is greater than 0.\n        ",required:!1,defaultValue:s.XB.afterSeparatorOffset,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer must be a function.\n            \n            The layer function which will receive the chart's\n            context & computed data and must return a valid SVG element.\n        ",required:!1,type:"Array<string | Function>",flavors:["svg"],defaultValue:s.XB.layers},(0,h.y1)({flavors:["svg"],defaultValue:s.XB.isInteractive}),{key:"currentPartSizeExtension",group:"Interactivity",help:"\n            Expand part size by this amount of pixels on each side\n            when it's active \n        ",required:!1,defaultValue:s.XB.currentPartSizeExtension,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"currentBorderWidth",group:"Interactivity",help:"Override default border width when a part is active.",required:!1,type:"number",flavors:["svg"],control:{type:"range",unit:"px",min:0,max:100}},{key:"onMouseEnter",group:"Interactivity",help:"onMouseEnter handler.",type:"(part, event) => void",required:!1,flavors:["svg"]},{key:"onMouseMove",group:"Interactivity",help:"onMouseMove handler.",type:"(part, event) => void",required:!1,flavors:["svg"]},{key:"onMouseLeave",group:"Interactivity",help:"onMouseLeave handler.",type:"(part, event) => void",required:!1,flavors:["svg"]},{key:"onClick",group:"Interactivity",help:"onClick handler.",type:"(part, event) => void",required:!1,flavors:["svg"]}],(0,f.$j)(["svg"],s.XB,"react-spring")),v=(0,f.R2)(y),g=n(34981),x=n.n(g),b=n(91311),m=n.n(b),S=function(){var t=1e5;return["sent","viewed","clicked","add_to_card","purchased"].map((function(e){return{id:"step_"+e,value:t=Math.round(t*m()(.6,.95)),label:x()(e)}}))},k=n(25414),M=n(24246);function w(){return w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},w.apply(this,arguments)}var P={margin:{top:20,right:20,bottom:20,left:20},direction:s.XB.direction,interpolation:s.XB.interpolation,shapeBlending:s.XB.shapeBlending,spacing:s.XB.spacing,valueFormat:{format:">-.4s",enabled:!0},colors:{scheme:"spectral"},fillOpacity:s.XB.fillOpacity,borderWidth:20,borderColor:s.XB.borderColor,borderOpacity:s.XB.borderOpacity,enableLabel:s.XB.enableLabel,labelColor:{from:"color",modifiers:[["darker",3]]},enableBeforeSeparators:s.XB.enableBeforeSeparators,beforeSeparatorLength:100,beforeSeparatorOffset:20,enableAfterSeparators:s.XB.enableAfterSeparators,afterSeparatorLength:100,afterSeparatorOffset:20,isInteractive:!0,currentPartSizeExtension:10,currentBorderWidth:40,animate:!0,motionConfig:"wobbly"},C=function(){var t=(0,k.useStaticQuery)("279910683").image.childImageSharp.gatsbyImageData;return(0,M.jsx)(l.T,{name:"Funnel",meta:u.o,icon:"funnel",flavors:u.K,currentFlavor:"svg",properties:v,initialProperties:P,defaultProperties:s.XB,propertiesMapper:c,generateData:S,image:t,children:function(t,e,n,r){return(0,M.jsx)(s.mj,w({data:e},t,{theme:a()({},n,{labels:{text:{fontSize:14}}}),onClick:function(t){r({type:"click",label:"[part] id: "+t.data.id+", value: "+t.formattedValue,color:t.color,data:o()(t,["points","areaPoints","borderPoints"])})}}))}})}},54358:function(t,e,n){"use strict";n.d(e,{q6:function(){return B},dS:function(){return j},O2:function(){return S},zs:function(){return k}});var r=n(27378),o=n(48159),i=n.n(o),a=n(78581),s=n.n(a),l=n(69238),u=n.n(l),d=n(99993),c=n(58493),f=n(24246);function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)}var p=4,y=120,v=8,g=function(t){return"circle"===t.type},x=function(t){return"dot"===t.type},b=function(t){return"rect"===t.type},m=function(t){var e,n,r=t.x,o=t.y,i=t.noteX,a=t.noteY,l=t.noteWidth,u=void 0===l?y:l,c=t.noteTextOffset,f=void 0===c?v:c;if(s()(i))e=r+i;else{if(void 0===i.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");e=i.abs}if(s()(a))n=o+a;else{if(void 0===a.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");n=a.abs}var h=r,p=o,x=function(t,e,n,r){var o=Math.atan2(r-e,n-t);return(0,d.bt)((0,d.vi)(o))}(r,o,e,n);if(g(t)){var m=(0,d.re)((0,d.Ht)(x),t.size/2);h+=m.x,p+=m.y}if(b(t)){var S=Math.round((x+90)/45)%8;0===S&&(p-=t.height/2),1===S&&(h+=t.width/2,p-=t.height/2),2===S&&(h+=t.width/2),3===S&&(h+=t.width/2,p+=t.height/2),4===S&&(p+=t.height/2),5===S&&(h-=t.width/2,p+=t.height/2),6===S&&(h-=t.width/2),7===S&&(h-=t.width/2,p-=t.height/2)}var k=e,M=e;return(x+90)%360>180?(k-=u,M-=u):M+=u,{points:[[h,p],[e,n],[M,n]],text:[k,n-f],angle:x+90}},S=function(t){var e=t.data,n=t.annotations,o=t.getPosition,a=t.getDimensions;return(0,r.useMemo)((function(){return function(t){var e=t.data,n=t.annotations,r=t.getPosition,o=t.getDimensions;return n.reduce((function(t,n){var a=n.offset||0;return[].concat(t,u()(e,n.match).map((function(t){var e=r(t),s=o(t);return(g(n)||b(n))&&(s.size=s.size+2*a,s.width=s.width+2*a,s.height=s.height+2*a),h({},i()(n,["match","offset"]),e,s,{size:n.size||s.size,datum:t})})))}),[])}({data:e,annotations:n,getPosition:o,getDimensions:a})}),[e,n,o,a])},k=function(t){var e=t.annotations;return(0,r.useMemo)((function(){return e.map((function(t){return h({},t,{computed:m(h({},t))})}))}),[e])},M=function(t){var e=t.datum,n=t.x,o=t.y,a=t.note,s=(0,d.Fg)(),l=(0,d.tf)(),u=l.animate,p=l.config,y=(0,c.useSpring)({x:n,y:o,config:p,immediate:!u});return"function"==typeof a?(0,r.createElement)(a,{x:n,y:o,datum:e}):(0,f.jsxs)(f.Fragment,{children:[s.annotations.text.outlineWidth>0&&(0,f.jsx)(c.q.text,{x:y.x,y:y.y,style:h({},s.annotations.text,{strokeLinejoin:"round",strokeWidth:2*s.annotations.text.outlineWidth,stroke:s.annotations.text.outlineColor}),children:a}),(0,f.jsx)(c.q.text,{x:y.x,y:y.y,style:i()(s.annotations.text,["outlineWidth","outlineColor"]),children:a})]})},w=function(t){var e=t.points,n=t.isOutline,o=void 0!==n&&n,i=(0,d.Fg)(),a=(0,r.useMemo)((function(){var t=e[0];return e.slice(1).reduce((function(t,e){return t+" L"+e[0]+","+e[1]}),"M"+t[0]+","+t[1])}),[e]),s=(0,d.NS)(a);if(o&&i.annotations.link.outlineWidth<=0)return null;var l=h({},i.annotations.link);return o&&(l.strokeLinecap="square",l.strokeWidth=i.annotations.link.strokeWidth+2*i.annotations.link.outlineWidth,l.stroke=i.annotations.link.outlineColor,l.opacity=i.annotations.link.outlineOpacity),(0,f.jsx)(c.q.path,{fill:"none",d:s,style:l})},P=function(t){var e=t.x,n=t.y,r=t.size,o=(0,d.Fg)(),i=(0,d.tf)(),a=i.animate,s=i.config,l=(0,c.useSpring)({x:e,y:n,radius:r/2,config:s,immediate:!a});return(0,f.jsxs)(f.Fragment,{children:[o.annotations.outline.outlineWidth>0&&(0,f.jsx)(c.q.circle,{cx:l.x,cy:l.y,r:l.radius,style:h({},o.annotations.outline,{fill:"none",strokeWidth:o.annotations.outline.strokeWidth+2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor,opacity:o.annotations.outline.outlineOpacity})}),(0,f.jsx)(c.q.circle,{cx:l.x,cy:l.y,r:l.radius,style:o.annotations.outline})]})},C=function(t){var e=t.x,n=t.y,r=t.size,o=void 0===r?p:r,i=(0,d.Fg)(),a=(0,d.tf)(),s=a.animate,l=a.config,u=(0,c.useSpring)({x:e,y:n,radius:o/2,config:l,immediate:!s});return(0,f.jsxs)(f.Fragment,{children:[i.annotations.outline.outlineWidth>0&&(0,f.jsx)(c.q.circle,{cx:u.x,cy:u.y,r:u.radius,style:h({},i.annotations.outline,{fill:"none",strokeWidth:2*i.annotations.outline.outlineWidth,stroke:i.annotations.outline.outlineColor,opacity:i.annotations.outline.outlineOpacity})}),(0,f.jsx)(c.q.circle,{cx:u.x,cy:u.y,r:u.radius,style:i.annotations.symbol})]})},O=function(t){var e=t.x,n=t.y,r=t.width,o=t.height,i=t.borderRadius,a=void 0===i?6:i,s=(0,d.Fg)(),l=(0,d.tf)(),u=l.animate,p=l.config,y=(0,c.useSpring)({x:e-r/2,y:n-o/2,width:r,height:o,config:p,immediate:!u});return(0,f.jsxs)(f.Fragment,{children:[s.annotations.outline.outlineWidth>0&&(0,f.jsx)(c.q.rect,{x:y.x,y:y.y,rx:a,ry:a,width:y.width,height:y.height,style:h({},s.annotations.outline,{fill:"none",strokeWidth:s.annotations.outline.strokeWidth+2*s.annotations.outline.outlineWidth,stroke:s.annotations.outline.outlineColor,opacity:s.annotations.outline.outlineOpacity})}),(0,f.jsx)(c.q.rect,{x:y.x,y:y.y,rx:a,ry:a,width:y.width,height:y.height,style:s.annotations.outline})]})},B=function(t){var e=t.datum,n=t.x,o=t.y,i=t.note,a=function(t){return(0,r.useMemo)((function(){return m(t)}),[t])}(t);if(!function(t){var e=typeof t;return(0,r.isValidElement)(t)||"string"===e||"function"===e||"object"===e}(i))throw new Error("note should be a valid react element");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(w,{points:a.points,isOutline:!0}),g(t)&&(0,f.jsx)(P,{x:n,y:o,size:t.size}),x(t)&&(0,f.jsx)(C,{x:n,y:o,size:t.size}),b(t)&&(0,f.jsx)(O,{x:n,y:o,width:t.width,height:t.height,borderRadius:t.borderRadius}),(0,f.jsx)(w,{points:a.points}),(0,f.jsx)(M,{datum:e,x:a.text[0],y:a.text[1],note:i})]})},W=function(t,e){e.forEach((function(e,n){var r=e[0],o=e[1];0===n?t.moveTo(r,o):t.lineTo(r,o)}))},j=function(t,e){var n=e.annotations,r=e.theme;0!==n.length&&(t.save(),n.forEach((function(e){if(!function(t){var e=typeof t;return"string"===e||"function"===e}(e.note))throw new Error("note is invalid for canvas implementation");r.annotations.link.outlineWidth>0&&(t.lineCap="square",t.strokeStyle=r.annotations.link.outlineColor,t.lineWidth=r.annotations.link.strokeWidth+2*r.annotations.link.outlineWidth,t.beginPath(),W(t,e.computed.points),t.stroke(),t.lineCap="butt"),g(e)&&r.annotations.outline.outlineWidth>0&&(t.strokeStyle=r.annotations.outline.outlineColor,t.lineWidth=r.annotations.outline.strokeWidth+2*r.annotations.outline.outlineWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),x(e)&&r.annotations.symbol.outlineWidth>0&&(t.strokeStyle=r.annotations.symbol.outlineColor,t.lineWidth=2*r.annotations.symbol.outlineWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),b(e)&&r.annotations.outline.outlineWidth>0&&(t.strokeStyle=r.annotations.outline.outlineColor,t.lineWidth=r.annotations.outline.strokeWidth+2*r.annotations.outline.outlineWidth,t.beginPath(),t.rect(e.x-e.width/2,e.y-e.height/2,e.width,e.height),t.stroke()),t.strokeStyle=r.annotations.link.stroke,t.lineWidth=r.annotations.link.strokeWidth,t.beginPath(),W(t,e.computed.points),t.stroke(),g(e)&&(t.strokeStyle=r.annotations.outline.stroke,t.lineWidth=r.annotations.outline.strokeWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),x(e)&&(t.fillStyle=r.annotations.symbol.fill,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.fill()),b(e)&&(t.strokeStyle=r.annotations.outline.stroke,t.lineWidth=r.annotations.outline.strokeWidth,t.beginPath(),t.rect(e.x-e.width/2,e.y-e.height/2,e.width,e.height),t.stroke()),"function"==typeof e.note?e.note(t,{datum:e.datum,x:e.computed.text[0],y:e.computed.text[1],theme:r}):(t.font=r.annotations.text.fontSize+"px "+r.annotations.text.fontFamily,t.fillStyle=r.annotations.text.fill,t.strokeStyle=r.annotations.text.outlineColor,t.lineWidth=2*r.annotations.text.outlineWidth,r.annotations.text.outlineWidth>0&&(t.lineJoin="round",t.strokeText(e.note,e.computed.text[0],e.computed.text[1]),t.lineJoin="miter"),t.fillText(e.note,e.computed.text[0],e.computed.text[1]))})),t.restore())}},27570:function(t,e,n){"use strict";n.d(e,{oe:function(){return W},mj:function(){return j},XB:function(){return v}});var r=n(27378),o=n(99993),i=n(94942),a=n(1520),s=n(30964),l=n(18091),u=n(9841),d=n(79234),c=n(54358),f=n(89193),h=n(24246),p=n(58493);function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}var v={layers:["separators","parts","labels","annotations"],direction:"vertical",interpolation:"smooth",spacing:0,shapeBlending:.66,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:6,borderColor:{from:"color"},borderOpacity:.66,enableLabel:!0,labelColor:{theme:"background"},enableBeforeSeparators:!0,beforeSeparatorLength:0,beforeSeparatorOffset:0,enableAfterSeparators:!0,afterSeparatorLength:0,afterSeparatorOffset:0,annotations:[],isInteractive:!0,currentPartSizeExtension:0,role:"img",animate:o.FJ.defaultProps.animate,motionConfig:o.FJ.defaultProps.config},g=function(t){var e=t.part;return(0,h.jsx)(f._5,{id:e.data.label,value:e.formattedValue,color:e.color,enableChip:!0})},x=function(t){var e=t.parts,n=t.setCurrentPartId,o=t.isInteractive,i=t.onMouseEnter,a=t.onMouseLeave,s=t.onMouseMove,l=t.onClick,u=t.showTooltipFromEvent,d=t.hideTooltip,c=t.tooltip,f=void 0===c?g:c;return o?e.map((function(t){return y({},t,{onMouseEnter:function(e){n(t.data.id),u((0,r.createElement)(f,{part:t}),e),void 0!==i&&i(t,e)},onMouseLeave:function(e){n(null),d(),void 0!==a&&a(t,e)},onMouseMove:function(e){u((0,r.createElement)(f,{part:t}),e),void 0!==s&&s(t,e)},onClick:void 0!==l?function(e){l(t,e)}:void 0})})):e},b=function(t){var e,n,c=t.data,h=t.width,p=t.height,g=t.direction,b=void 0===g?v.direction:g,m=t.interpolation,S=void 0===m?v.interpolation:m,k=t.spacing,M=void 0===k?v.spacing:k,w=t.shapeBlending,P=void 0===w?v.shapeBlending:w,C=t.valueFormat,O=t.colors,B=void 0===O?v.colors:O,W=t.fillOpacity,j=void 0===W?v.fillOpacity:W,_=t.borderWidth,L=void 0===_?v.borderWidth:_,E=t.borderColor,q=void 0===E?v.borderColor:E,I=t.borderOpacity,F=void 0===I?v.borderOpacity:I,X=t.labelColor,z=void 0===X?v.labelColor:X,Z=t.enableBeforeSeparators,V=void 0===Z?v.enableBeforeSeparators:Z,A=t.beforeSeparatorLength,T=void 0===A?v.beforeSeparatorLength:A,G=t.beforeSeparatorOffset,D=void 0===G?v.beforeSeparatorOffset:G,Y=t.enableAfterSeparators,J=void 0===Y?v.enableAfterSeparators:Y,R=t.afterSeparatorLength,H=void 0===R?v.afterSeparatorLength:R,N=t.afterSeparatorOffset,Q=void 0===N?v.afterSeparatorOffset:N,U=t.isInteractive,K=void 0===U?v.isInteractive:U,$=t.currentPartSizeExtension,tt=void 0===$?v.currentPartSizeExtension:$,et=t.currentBorderWidth,nt=t.onMouseEnter,rt=t.onMouseMove,ot=t.onMouseLeave,it=t.onClick,at=t.tooltip,st=(0,o.Fg)(),lt=(0,d.U)(B,"id"),ut=(0,d.Bf)(q,st),dt=(0,d.Bf)(z,st),ct=(0,o.O_)(C),ft=(0,r.useMemo)((function(){return function(t,e){var n=(0,i.Z)();return"vertical"===e?n.curve("smooth"===t?a.ZP:s.Z).x0((function(t){return t.x0})).x1((function(t){return t.x1})).y((function(t){return t.y})):n.curve("smooth"===t?a.ZP:s.Z).y0((function(t){return t.y0})).y1((function(t){return t.y1})).x((function(t){return t.x})),[n,(0,l.Z)().defined((function(t){return null!==t})).x((function(t){return t.x})).y((function(t){return t.y})).curve("smooth"===t?a.ZP:s.Z)]}(S,b)}),[S,b]),ht=ft[0],pt=ft[1],yt=V?T+D:0,vt=J?H+Q:0;"vertical"===b?(e=h-yt-vt,n=p):(e=h,n=p-yt-vt);var gt=(0,r.useMemo)((function(){return function(t){var e,n,r=t.data,o=t.direction,i=t.width,a=t.height,s=t.spacing;"vertical"===o?(e=a,n=i):(e=i,n=a);var l=(e-s*(r.length-1))/r.length,d=function(t){return s*t+l*t};d.bandwidth=l;var c=r.map((function(t){return t.value}));return[d,(0,u.Z)().domain([0,Math.max.apply(Math,c)]).range([0,n])]}({data:c,direction:b,width:e,height:n,spacing:M})}),[c,b,e,n,M]),xt=gt[0],bt=gt[1],mt=(0,r.useState)(null),St=mt[0],kt=mt[1],Mt=(0,r.useMemo)((function(){var t=c.map((function(t,r){var o,i,a,s,l=t.id===St;"vertical"===b?(o=bt(t.value),i=xt.bandwidth,s=yt+.5*(e-o),a=xt(r)):(o=xt.bandwidth,i=bt(t.value),s=xt(r),a=yt+.5*(n-i));var u=s+o,d=s+.5*o,c=a+i,f=a+.5*i,h={data:t,width:o,height:i,color:lt(t),fillOpacity:j,borderWidth:l&&void 0!==et?et:L,borderOpacity:F,formattedValue:ct(t.value),isCurrent:l,x:d,x0:s,x1:u,y:f,y0:a,y1:c,borderColor:"",labelColor:"",points:[],areaPoints:[],borderPoints:[]};return h.borderColor=ut(h),h.labelColor=dt(h),h})),r=P/2;return t.forEach((function(e,n){var o=t[n+1];if("vertical"===b){e.points.push({x:e.x0,y:e.y0}),e.points.push({x:e.x1,y:e.y0}),o?(e.points.push({x:o.x1,y:e.y1}),e.points.push({x:o.x0,y:e.y1})):(e.points.push({x:e.points[1].x,y:e.y1}),e.points.push({x:e.points[0].x,y:e.y1})),e.isCurrent&&(e.points[0].x-=tt,e.points[1].x+=tt,e.points[2].x+=tt,e.points[3].x-=tt),e.areaPoints=[{x:0,x0:e.points[0].x,x1:e.points[1].x,y:e.y0,y0:0,y1:0}],e.areaPoints.push(y({},e.areaPoints[0],{y:e.y0+e.height*r}));var i={x:0,x0:e.points[3].x,x1:e.points[2].x,y:e.y1,y0:0,y1:0};e.areaPoints.push(y({},i,{y:e.y1-e.height*r})),e.areaPoints.push(i),[0,1,2,3].map((function(t){e.borderPoints.push({x:e.areaPoints[t].x0,y:e.areaPoints[t].y})})),e.borderPoints.push(null),[3,2,1,0].map((function(t){e.borderPoints.push({x:e.areaPoints[t].x1,y:e.areaPoints[t].y})}))}else{e.points.push({x:e.x0,y:e.y0}),o?(e.points.push({x:e.x1,y:o.y0}),e.points.push({x:e.x1,y:o.y1})):(e.points.push({x:e.x1,y:e.y0}),e.points.push({x:e.x1,y:e.y1})),e.points.push({x:e.x0,y:e.y1}),e.isCurrent&&(e.points[0].y-=tt,e.points[1].y-=tt,e.points[2].y+=tt,e.points[3].y+=tt),e.areaPoints=[{x:e.x0,x0:0,x1:0,y:0,y0:e.points[0].y,y1:e.points[3].y}],e.areaPoints.push(y({},e.areaPoints[0],{x:e.x0+e.width*r}));var a={x:e.x1,x0:0,x1:0,y:0,y0:e.points[1].y,y1:e.points[2].y};e.areaPoints.push(y({},a,{x:e.x1-e.width*r})),e.areaPoints.push(a),[0,1,2,3].map((function(t){e.borderPoints.push({x:e.areaPoints[t].x,y:e.areaPoints[t].y0})})),e.borderPoints.push(null),[3,2,1,0].map((function(t){e.borderPoints.push({x:e.areaPoints[t].x,y:e.areaPoints[t].y1})}))}})),t}),[c,b,bt,xt,e,n,yt,vt,P,lt,ct,ut,dt,St]),wt=(0,f.lL)(),Pt=wt.showTooltipFromEvent,Ct=wt.hideTooltip,Ot=(0,r.useMemo)((function(){return x({parts:Mt,setCurrentPartId:kt,isInteractive:K,onMouseEnter:nt,onMouseLeave:ot,onMouseMove:rt,onClick:it,showTooltipFromEvent:Pt,hideTooltip:Ct,tooltip:at})}),[Mt,kt,K,nt,ot,rt,it,Pt,Ct,at]),Bt=(0,r.useMemo)((function(){return function(t){var e=t.parts,n=t.direction,r=t.width,o=t.height,i=t.spacing,a=t.enableBeforeSeparators,s=t.beforeSeparatorOffset,l=t.enableAfterSeparators,u=t.afterSeparatorOffset,d=[],c=[],f=e[e.length-1];if("vertical"===n){e.forEach((function(t){var e=t.y0-i/2;a&&d.push({partId:t.data.id,x0:0,x1:t.x0-s,y0:e,y1:e}),l&&c.push({partId:t.data.id,x0:t.x1+u,x1:r,y0:e,y1:e})}));var h=f.y1;a&&d.push(y({},d[d.length-1],{partId:"none",y0:h,y1:h})),l&&c.push(y({},c[c.length-1],{partId:"none",y0:h,y1:h}))}else if("horizontal"===n){e.forEach((function(t){var e=t.x0-i/2;d.push({partId:t.data.id,x0:e,x1:e,y0:0,y1:t.y0-s}),c.push({partId:t.data.id,x0:e,x1:e,y0:t.y1+u,y1:o})}));var p=f.x1;d.push(y({},d[d.length-1],{partId:"none",x0:p,x1:p})),c.push(y({},c[c.length-1],{partId:"none",x0:p,x1:p}))}return[d,c]}({parts:Mt,direction:b,width:h,height:p,spacing:M,enableBeforeSeparators:V,beforeSeparatorOffset:D,enableAfterSeparators:J,afterSeparatorOffset:Q})}),[Mt,b,h,p,M,V,D,J,Q]),Wt=Bt[0],jt=Bt[1],_t=(0,r.useMemo)((function(){return{width:h,height:p,parts:Ot,areaGenerator:ht,borderGenerator:pt,beforeSeparators:Wt,afterSeparators:jt,setCurrentPartId:kt}}),[h,p,Ot,ht,pt,Wt,jt,kt]);return{parts:Ot,areaGenerator:ht,borderGenerator:pt,beforeSeparators:Wt,afterSeparators:jt,setCurrentPartId:kt,currentPartId:St,customLayerProps:_t}},m=function(t){var e=t.part,n=t.areaGenerator,r=t.borderGenerator,i=(0,o.tf)(),a=i.animate,s=i.config,l=(0,o.NS)(n(e.areaPoints)),u=(0,o.NS)(r(e.borderPoints)),d=(0,p.useSpring)({areaColor:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,config:s,immediate:!a});return(0,h.jsxs)(h.Fragment,{children:[e.borderWidth>0&&(0,h.jsx)(p.q.path,{d:u,stroke:d.borderColor,strokeWidth:d.borderWidth,strokeOpacity:e.borderOpacity,fill:"none"}),(0,h.jsx)(p.q.path,{d:l,fill:d.areaColor,fillOpacity:e.fillOpacity,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onClick:e.onClick})]})},S=function(t){var e=t.parts,n=t.areaGenerator,r=t.borderGenerator;return(0,h.jsx)(h.Fragment,{children:e.map((function(t){return(0,h.jsx)(m,{part:t,areaGenerator:n,borderGenerator:r},t.data.id)}))})},k=function(t){var e=t.part,n=(0,o.Fg)(),r=(0,o.tf)(),i=r.animate,a=r.config,s=(0,p.useSpring)({transform:"translate("+e.x+", "+e.y+")",color:e.labelColor,config:a,immediate:!i});return(0,h.jsx)(p.q.g,{transform:s.transform,children:(0,h.jsx)(p.q.text,{textAnchor:"middle",dominantBaseline:"central",style:y({},n.labels.text,{fill:s.color,pointerEvents:"none"}),children:e.formattedValue})})},M=function(t){var e=t.parts;return(0,h.jsx)(h.Fragment,{children:e.map((function(t){return(0,h.jsx)(k,{part:t},t.data.id)}))})},w=function(t){var e=t.separator,n=(0,o.Fg)(),r=(0,o.tf)(),i=r.animate,a=r.config,s=(0,p.useSpring)({x1:e.x0,x2:e.x1,y1:e.y0,y2:e.y1,config:a,immediate:!i});return(0,h.jsx)(p.q.line,y({x1:s.x1,x2:s.x2,y1:s.y1,y2:s.y2,fill:"none"},n.grid.line))},P=function(t){var e=t.beforeSeparators,n=t.afterSeparators;return(0,h.jsxs)(h.Fragment,{children:[e.map((function(t){return(0,h.jsx)(w,{separator:t},t.partId)})),n.map((function(t){return(0,h.jsx)(w,{separator:t},t.partId)}))]})},C=function(t){var e=function(t,e){return(0,c.O2)({data:t,annotations:e,getPosition:function(t){return{x:t.x,y:t.y}},getDimensions:function(t){var e=t.width,n=t.height;return{size:Math.max(e,n),width:e,height:n}}})}(t.parts,t.annotations);return(0,h.jsx)(h.Fragment,{children:e.map((function(t,e){return(0,h.jsx)(c.q6,y({},t),e)}))})},O=["isInteractive","animate","motionConfig","theme","renderWrapper"],B=function(t){var e=t.data,n=t.width,i=t.height,a=t.margin,s=t.direction,l=void 0===s?v.direction:s,u=t.interpolation,d=void 0===u?v.interpolation:u,c=t.spacing,f=void 0===c?v.spacing:c,p=t.shapeBlending,y=void 0===p?v.shapeBlending:p,g=t.valueFormat,x=t.colors,m=void 0===x?v.colors:x,k=t.fillOpacity,w=void 0===k?v.fillOpacity:k,O=t.borderWidth,B=void 0===O?v.borderWidth:O,W=t.borderColor,j=void 0===W?v.borderColor:W,_=t.borderOpacity,L=void 0===_?v.borderOpacity:_,E=t.enableLabel,q=void 0===E?v.enableLabel:E,I=t.labelColor,F=void 0===I?v.labelColor:I,X=t.enableBeforeSeparators,z=void 0===X?v.enableBeforeSeparators:X,Z=t.beforeSeparatorLength,V=void 0===Z?v.beforeSeparatorLength:Z,A=t.beforeSeparatorOffset,T=void 0===A?v.beforeSeparatorOffset:A,G=t.enableAfterSeparators,D=void 0===G?v.enableAfterSeparators:G,Y=t.afterSeparatorLength,J=void 0===Y?v.afterSeparatorLength:Y,R=t.afterSeparatorOffset,H=void 0===R?v.afterSeparatorOffset:R,N=t.layers,Q=void 0===N?v.layers:N,U=t.annotations,K=void 0===U?v.annotations:U,$=t.isInteractive,tt=void 0===$?v.isInteractive:$,et=t.currentPartSizeExtension,nt=void 0===et?v.currentPartSizeExtension:et,rt=t.currentBorderWidth,ot=t.onMouseEnter,it=t.onMouseMove,at=t.onMouseLeave,st=t.onClick,lt=t.tooltip,ut=t.role,dt=void 0===ut?v.role:ut,ct=t.ariaLabel,ft=t.ariaLabelledBy,ht=t.ariaDescribedBy,pt=(0,o.Bs)(n,i,a),yt=pt.margin,vt=pt.innerWidth,gt=pt.innerHeight,xt=pt.outerWidth,bt=pt.outerHeight,mt=b({data:e,width:vt,height:gt,direction:l,interpolation:d,spacing:f,shapeBlending:y,valueFormat:g,colors:m,fillOpacity:w,borderWidth:B,borderColor:j,borderOpacity:L,labelColor:F,enableBeforeSeparators:z,beforeSeparatorLength:V,beforeSeparatorOffset:T,enableAfterSeparators:D,afterSeparatorLength:J,afterSeparatorOffset:H,isInteractive:tt,currentPartSizeExtension:nt,currentBorderWidth:rt,onMouseEnter:ot,onMouseMove:it,onMouseLeave:at,onClick:st,tooltip:lt}),St=mt.areaGenerator,kt=mt.borderGenerator,Mt=mt.parts,wt=mt.beforeSeparators,Pt=mt.afterSeparators,Ct=mt.customLayerProps,Ot={separators:null,parts:null,annotations:null,labels:null};return Q.includes("separators")&&(Ot.separators=(0,h.jsx)(P,{beforeSeparators:wt,afterSeparators:Pt},"separators")),Q.includes("parts")&&(Ot.parts=(0,h.jsx)(S,{parts:Mt,areaGenerator:St,borderGenerator:kt},"parts")),null!=Q&&Q.includes("annotations")&&(Ot.annotations=(0,h.jsx)(C,{parts:Mt,annotations:K},"annotations")),Q.includes("labels")&&q&&(Ot.labels=(0,h.jsx)(M,{parts:Mt},"labels")),(0,h.jsx)(o.tM,{width:xt,height:bt,margin:yt,role:dt,ariaLabel:ct,ariaLabelledBy:ft,ariaDescribedBy:ht,children:Q.map((function(t,e){var n;return"function"==typeof t?(0,h.jsx)(r.Fragment,{children:(0,r.createElement)(t,Ct)},e):null!=(n=null==Ot?void 0:Ot[t])?n:null}))})},W=function(t){var e=t.isInteractive,n=void 0===e?v.isInteractive:e,r=t.animate,i=void 0===r?v.animate:r,a=t.motionConfig,s=void 0===a?v.motionConfig:a,l=t.theme,u=t.renderWrapper,d=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,O);return(0,h.jsx)(o.W2,{animate:i,isInteractive:n,motionConfig:s,renderWrapper:u,theme:l,children:(0,h.jsx)(B,y({isInteractive:n},d))})},j=function(t){return(0,h.jsx)(o.d,{children:function(e){var n=e.width,r=e.height;return(0,h.jsx)(W,y({width:n,height:r},t))}})}},98129:function(t,e,n){var r=n(52033);t.exports=function(t,e){var n=[];return r(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}},76418:function(t){var e=Math.floor,n=Math.random;t.exports=function(t,r){return t+e(n()*(r-t+1))}},69238:function(t,e,n){var r=n(10263),o=n(98129),i=n(89278),a=n(19785);t.exports=function(t,e){return(a(t)?r:o)(t,i(e,3))}},91311:function(t,e,n){var r=n(76418),o=n(57535),i=n(94919),a=parseFloat,s=Math.min,l=Math.random;t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&o(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=i(t),void 0===e?(e=t,t=0):e=i(e)),t>e){var u=t;t=e,e=u}if(n||t%1||e%1){var d=l();return s(t+d*(e-t+a("1e-"+((d+"").length-1))),e)}return r(t,e)}}}]);
//# sourceMappingURL=component---src-pages-funnel-index-tsx-99dfcfc919bd07b53604.js.map