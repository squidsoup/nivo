(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"1cK3":function(e,o,t){"use strict";t.r(o);var n=t("mXGw"),l=t.n(n),r=t("Bje6"),i=t("ZS2m"),a=t("leNB"),c=t.n(a),p=t("LUrY"),u=t("e5j0"),s=function(){return[{id:"men",label:"men",value:33*Math.random(),color:"#468df3"},{id:"women",label:"women",value:33*Math.random(),color:"#ba72ff"},{id:"children",label:"children",value:33*Math.random(),color:"#a1cfff"}]},d={total:100,rows:18,columns:14,fillDirection:"bottom",padding:1,margin:{top:10,right:10,bottom:10,left:10},cellComponent:"default",emptyColor:"#cccccc",emptyOpacity:1,colors:{scheme:"set2"},borderWidth:0,borderColor:{from:"color",gamma:[["darker",.3]]},animate:!0,motionStiffness:90,motionDamping:11,isInteractive:!0,"custom tooltip example":!1,tooltip:null};o.default=function(){return l.a.createElement(i.a,{name:"WaffleHtml",meta:c.a.WaffleHtml,icon:"waffle",flavors:c.a.flavors,currentFlavor:"html",properties:p.a,propertiesMapper:u.a,initialProperties:d,defaultProperties:r.e,codePropertiesMapper:function(e){return Object.assign({},e,{cellComponent:e.cellComponent?"CustomCell(props) => (…)":void 0,tooltip:e.tooltip?"CustomTooltip(props) => (…)":void 0})},generateData:s},(function(e,o,t,n){return l.a.createElement(r.c,Object.assign({data:o},e,{theme:t,onClick:function(e){var o;o=void 0!==e.data.value?e.data.label+": "+e.data.value+" (position: "+e.position+")":"empty at position: "+e.position,n({type:"click",label:"[cell] "+o,color:e.color,data:e})}}))}))}},LUrY:function(e,o,t){"use strict";t.d(o,"a",(function(){return c}));var n=t("Eo5u"),l=t("Bje6"),r=t("RQLE"),i=l.e,a=[{key:"total",group:"Base",type:"number",help:"Max value.",description:"Max value, ratio will be computed against this value for each datum.",required:!0},{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:    string | number\n                value: number\n                label: string | number\n            }>\n            ```\n        ",type:"object[]",required:!0},{key:"rows",type:"number",help:"Number of rows.",required:!0,controlType:"range",group:"Base",controlOptions:{min:1,max:100}},{key:"columns",type:"number",help:"Number of columns.",required:!0,controlType:"range",group:"Base",controlOptions:{min:1,max:100}},{key:"fillDirection",help:"How to fill the waffle.",type:"string",required:!1,defaultValue:i.fillDirection,controlType:"choices",group:"Base",controlOptions:{choices:[{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"left",value:"left"}]}},{key:"padding",type:"number",help:"Padding between each cell.",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:10}},{key:"width",group:"Base",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using responsive alternative\n            of the component\n            `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"height",group:"Base",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using responsive alternative\n            of the component\n            `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},r.f,{key:"cellComponent",flavors:["svg","html"],help:"Override default cell component.",type:"Function",required:!1,controlType:"choices",group:"Style",controlOptions:{choices:["default","Custom(props) => (…)"].map((function(e){return{label:e,value:e}}))}},{key:"colors",help:"Defines how to compute node color.",type:"string | Function | string[]",required:!1,defaultValue:i.colors,controlType:"ordinalColors",group:"Style"},{key:"emptyColor",help:"Defines empty cells color.",type:"string",required:!1,defaultValue:i.emptyColor,controlType:"colorPicker",group:"Style"},{key:"emptyOpacity",help:"Empty cells opacity.",required:!1,defaultValue:i.emptyOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Control cell border width.",type:"number",required:!1,defaultValue:i.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute cell border color.",type:"string | object | Function",required:!1,defaultValue:i.borderColor,controlType:"inheritedColor",group:"Style"}].concat(Object(n.a)(Object(r.b)("Style",["svg"])),[{key:"isInteractive",help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:i.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onClick",group:"Interactivity",help:"onClick handler, it receives clicked node data and style plus mouse event.",type:"Function",required:!1},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will\n            receive the following data:\n            ```\n            {\n                id:         {string|number},\n                value:      number,\n                label:      {string|number},\n                color:      string,\n                position:   number,\n                row:        number,\n                column:     number,\n                groupIndex: number,\n                startAt:    number,\n                endAt:      number,\n            }\n            ```\n            You can customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",help:"Showcase custom tooltip.",type:"boolean",controlType:"switch",group:"Interactivity"},{key:"legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(r.c)(["svg","canvas"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,defaults:{anchor:"left",direction:"column",justify:!1,translateX:-100,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:4,symbolSize:20,itemDirection:"left-to-right",itemTextColor:"#777",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#f7fafb"}}]}}}],Object(n.a)(Object(r.e)(["svg","html"],i))),c=Object(r.d)(a)},e5j0:function(e,o,t){"use strict";var n=t("mXGw"),l=t.n(n),r=t("nLLr"),i=t("UutA"),a=i.d.div.withConfig({displayName:"CustomTooltip__TooltipWrapper",componentId:"d9sxf5-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;"]),c=i.d.span.withConfig({displayName:"CustomTooltip__TooltipKey",componentId:"d9sxf5-1"})(["font-weight:600;"]),p=i.d.span.withConfig({displayName:"CustomTooltip__TooltipValue",componentId:"d9sxf5-2"})([""]),u=function(e){return l.a.createElement(a,{style:{color:e.color}},l.a.createElement(c,null,"label"),l.a.createElement(p,null,e.label),l.a.createElement(c,null,"id"),l.a.createElement(p,null,e.id),l.a.createElement(c,null,"value"),l.a.createElement(p,null,e.value),l.a.createElement(c,null,"position"),l.a.createElement(p,null,e.position),l.a.createElement(c,null,"groupIndex"),l.a.createElement(p,null,e.groupIndex),l.a.createElement(c,null,"row"),l.a.createElement(p,null,e.row),l.a.createElement(c,null,"column"),l.a.createElement(p,null,e.column),l.a.createElement(c,null,"color"),l.a.createElement(p,null,e.color))},s=function(e){var o=e.position,t=e.size,n=e.x,r=e.y,i=e.color,a=e.fill,c=e.opacity,p=e.borderWidth,u=e.borderColor,s=e.data,d=e.onHover,m=e.onLeave,y=e.onClick;return l.a.createElement("circle",{r:t/2,cx:n+t/2,cy:r+t/2,fill:a||i,strokeWidth:p,stroke:u,opacity:c,onMouseEnter:d,onMouseMove:d,onMouseLeave:m,onClick:function(e){y({position:o,color:i,x:n,y:r,data:s},e)}})},d=function(e){var o=e.position,t=e.size,n=e.x,r=e.y,i=e.color,a=e.opacity,c=e.borderWidth,p=e.borderColor,u=e.data,s=e.onHover,d=e.onLeave,m=e.onClick;return l.a.createElement("div",{style:{borderRadius:t/2+"px 0 "+t/2+"px 0",position:"absolute",top:r,left:n,width:t,height:t,background:i,opacity:a,boxSizing:"content-box",borderStyle:"solid",borderWidth:c+"px",borderColor:p},onMouseEnter:s,onMouseMove:s,onMouseLeave:d,onClick:function(e){m({position:o,color:i,x:n,y:r,data:u},e)}})};o.a=Object(r.c)({cellComponent:function(e,o,t){if("Custom(props) => (…)"===e)return"Waffle"===t.component?s:d},tooltip:function(e,o){return o["custom tooltip example"]?u:null}},{exclude:["custom tooltip example"]})}}]);
//# sourceMappingURL=component---src-pages-waffle-html-js-38b3ed661abfc194942c.js.map