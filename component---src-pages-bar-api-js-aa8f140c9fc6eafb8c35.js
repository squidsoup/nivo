(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{Fu6j:function(e,t,n){"use strict";n.r(t);var a=n("Eo5u"),r=n("mXGw"),o=n.n(r),i=n("vrFN"),l=n("vrO3"),s=n("Y0hK"),d=n("lt3g"),u=n.n(d),c=n("q8q8"),p=n("pfNj"),h=Object(p.b)(),m=h.data,g=h.keys;t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:"Bar HTTP API",keywords:[].concat(Object(a.a)(u.a.Bar.tags),["HTTP API"])}),o.a.createElement(l.a,{componentName:"Bar",chartClass:"bar",apiPath:"/charts/bar",flavors:u.a.flavors,dataProperty:"data",controlGroups:s.a,propsMapper:c.a,defaultProps:{width:1200,height:500,margin:{top:40,right:50,bottom:40,left:50},data:JSON.stringify(m,null,"  "),keys:g,indexBy:"country",colors:{scheme:"nivo"},colorBy:"id",borderRadius:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},padding:.2,innerPadding:0,minValue:"auto",maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},axisTop:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:36},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]}}}))}},Y0hK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("Eo5u"),r=n("PQXq"),o=n("RQLE"),i=[{key:"data",help:"Chart data.",type:"object[]",required:!0,group:"Base"},{key:"indexBy",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n\n            You can also provide a function which will\n            receive the data item and must return the desired index.\n        ",type:"string | (datum: RawDatum): string | number",required:!1,defaultValue:r.d.indexBy,group:"Base"},{key:"keys",help:"Keys to use to determine each serie.",type:"string[]",required:!1,defaultValue:r.d.keys,group:"Base"},{key:"groupMode",help:"How to group bars.",type:"grouped | stacked",required:!1,defaultValue:r.d.groupMode,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"stacked",value:"stacked"},{label:"grouped",value:"grouped"}]}},{key:"layout",help:"How to display bars.",type:"horizontal | vertical",required:!1,defaultValue:r.d.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"valueScale",type:"object",group:"Base",help:"value scale configuration.",defaultValue:r.d.valueScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["linear","symlog"].map((function(e){return{label:e,value:e}}))}}]}},{key:"indexScale",type:"object",group:"Base",help:"index scale configuration.",defaultValue:r.d.indexScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["band"].map((function(e){return{label:e,value:e}}))}},{key:"round",help:"Toggle index scale (for bar width) rounding.",type:"boolean",controlType:"switch"}]}},{key:"reverse",help:"Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",type:"boolean",required:!1,defaultValue:r.d.reverse,controlType:"switch",group:"Base"},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from the provided data.\n        ",required:!1,defaultValue:r.d.minValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:-1e3,min:-1e3,max:0}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from the provided data.\n        ",required:!1,defaultValue:r.d.maxValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:1e3,min:0,max:1e3}},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",controlType:"valueFormat"},{key:"padding",help:"Padding between each bar (ratio).",type:"number",required:!1,defaultValue:r.d.padding,controlType:"range",group:"Base",controlOptions:{min:0,max:.9,step:.05}},{key:"innerPadding",help:"Padding between grouped/stacked bars.",type:"number",required:!1,defaultValue:r.d.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:10}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},o.f,{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:r.d.colors,controlType:"ordinalColors",group:"Style"},{key:"colorBy",type:"'id' | 'indexValue'",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n        ",required:!1,defaultValue:r.d.colorBy,controlType:"choices",group:"Style",controlOptions:{choices:[{label:"id",value:"id"},{label:"indexValue",value:"indexValue"}]}},{key:"borderRadius",help:"Rectangle border radius.",type:"number",required:!1,defaultValue:r.d.borderRadius,controlType:"range",group:"Style",controlOptions:{unit:"px",min:0,max:36}},{key:"borderWidth",help:"Width of bar border.",type:"number",required:!1,defaultValue:r.d.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.d.borderColor,controlType:"inheritedColor",group:"Style"}].concat(Object(a.a)(Object(o.b)("Style",["svg"])),[{key:"layers",flavors:["svg","canvas"],help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `bars`, `markers`, `legends`,\n            `annotations`. The `markers` layer is not available\n            in the canvas flavor.\n\n            You can also use this to insert extra layers to the chart,\n            this extra layer must be a function which will receive\n            the chart computed data and must return a valid SVG\n            element.\n        ",type:"Array<string | Function>",required:!1,defaultValue:r.d.layers,group:"Customization"},{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:r.d.enableLabel,controlType:"switch",group:"Labels"},{key:"label",group:"Labels",help:"Define how bar labels are computed.",description:"\n            Define how bar labels are computed.\n\n            By default it will use the bar's value.\n            It accepts a string which will be used to access\n            a specific bar data property, such as\n            `'value'` or `'id'`.\n\n            You can also use a funtion if you want to\n            add more logic, this function will receive\n            the current bar's data and must return\n            the computed label which, depending on the context,\n            should return a string or an svg element (Bar) or\n            a string (BarCanvas). For example let's say you want\n            to use a label with both the id and the value,\n            you can achieve this with:\n            ```\n            label={d => `${d.id}: ${d.value}`}\n            ```\n        ",type:"string | Function",required:!1,defaultValue:r.d.label},{key:"labelSkipWidth",help:"Skip label if bar width is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:r.d.labelSkipWidth,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelSkipHeight",help:"Skip label if bar height is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:r.d.labelSkipHeight,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelTextColor",help:"Defines how to compute label text color.",type:"string | object | Function",required:!1,defaultValue:r.d.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"enableGridX",group:"Grid & Axes",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:r.d.enableGridX,controlType:"switch"},{key:"gridXValues",group:"Grid & Axes",help:"Specify values to use for vertical grid lines.",type:"Array<number | string>",required:!1},{key:"enableGridY",group:"Grid & Axes",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:r.d.enableGridY,controlType:"switch"},{key:"gridYValues",group:"Grid & Axes",help:"Specify values to use for horizontal grid lines.",type:"Array<number | string>",required:!1}],Object(a.a)(Object(o.a)()),[{key:"isInteractive",flavors:["svg","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:r.d.isInteractive,controlType:"switch",group:"Interactivity"},{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                bar: {\n                    id:             string | number,\n                    value:          number,\n                    formattedValue: string,\n                    index:          number,\n                    indexValue:     string | number,\n                    // datum associated to the current index (raw data)\n                    data:           object\n                },\n                color: string,\n                label: string\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],group:"Interactivity",help:"Showcase custom tooltip component.",type:"boolean",controlType:"switch"},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:             string | number,\n                value:          number,\n                formattedValue: string,\n                index:          number,\n                indexValue:     string | number,\n                color:          string,\n                // datum associated to the current index (raw data)\n                data:           object\n            }\n            ```\n        "},{key:"legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(o.c)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},svgDefaultProps:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){alert(JSON.stringify(e,null,"    "))}}}}],Object(a.a)(Object(o.e)(["svg"],r.d,"react-spring"))),l=Object(o.d)(i)},pfNj:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("6zZa"),r=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:Object(a.c)(r.slice(0,6),{size:7,max:200}),keys:r.slice(0,6)}},i=function(){return{data:Object(a.c)(r,{size:21,max:200}),keys:r}}},q8q8:function(e,t,n){"use strict";var a=n("oedh"),r=n("mXGw"),o=n.n(r),i=n("UutA"),l=n("nLLr"),s=i.d.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"ix4uwo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),d=i.d.span.withConfig({displayName:"mapper__TooltipKey",componentId:"ix4uwo-1"})(["font-weight:600;"]),u=i.d.span.withConfig({displayName:"mapper__TooltipValue",componentId:"ix4uwo-2"})([""]),c=function(e){var t=e.color,n=Object(a.a)(e,["color"]);return o.a.createElement(s,{style:{color:t}},o.a.createElement(d,null,"id"),o.a.createElement(u,null,n.id),o.a.createElement(d,null,"value"),o.a.createElement(u,null,n.value),o.a.createElement(d,null,"formattedValue"),o.a.createElement(u,null,n.formattedValue),o.a.createElement(d,null,"index"),o.a.createElement(u,null,n.index),o.a.createElement(d,null,"indexValue"),o.a.createElement(u,null,n.indexValue),o.a.createElement(d,null,"color"),o.a.createElement(u,null,t))};t.a=Object(l.c)({axisTop:Object(l.a)("top"),axisRight:Object(l.a)("right"),axisBottom:Object(l.a)("bottom"),axisLeft:Object(l.a)("left"),tooltip:function(e,t){if(t["custom tooltip example"])return c}},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft","custom tooltip example"]})},vrO3:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n("Z+yb"),r=n("hsa5"),o=n("mXGw"),i=n.n(o),l=n("UutA"),s=n("7oih"),d=n("UmRm"),u=n("QbkB"),c=n("1h20"),p=n("yHyT"),h=n("SBeK"),m=n("MF9i"),g=l.d.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),b=l.d.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),f=l.d.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),y=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?i.a.createElement(g,{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(b,{src:n,alt:"api result"})):i.a.createElement(f,null,"Click the generate button in order to generate the chart.",i.a.createElement("br",null),"You can customize settings by using dedicated controls.")},v=n("TurY"),x=n("DA+T");function w(){var e=Object(a.a)(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "]);return w=function(){return e},e}function k(){var e=Object(a.a)(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "]);return k=function(){return e},e}var T=["preview","body","data"],C=function(e){var t=e.chartClass,n=e.data,a=e.body,r=e.isLoading,l=e.responseStatus,s=e.chartUrl,d=Object(v.b)(),u=Object(o.useState)("preview"),c=u[0],p=u[1],h=Object(o.useState)(null),m=h[0],g=h[1];return i.a.createElement(E,{className:"chart-tabs--"+c},i.a.createElement(S,null,T.map((function(e){var n=e===c,a="preview"===e?t:"data",r=n||m===e?"colored":"neutral";return i.a.createElement(O,{key:e,className:"no-select",isCurrent:n,onClick:function(){return p(e)},onMouseEnter:function(){return g(e)},onMouseLeave:function(){return g(null)}},i.a.createElement(j,{className:"sprite-icons-"+a+"-"+d.id+"-"+r}),e)}))),i.a.createElement(V,null,"preview"===c&&i.a.createElement(y,{isLoading:r,responseStatus:l,chartUrl:s}),"body"===c&&i.a.createElement(x.a,null,JSON.stringify(a,null,"  ")),"data"===c&&i.a.createElement(x.a,null,n),i.a.createElement(A,{isLoading:r})))},E=l.d.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),d.a.tablet(k(),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),d.a.mobile(w(),(function(e){return e.theme.colors.border}))),S=l.d.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),O=l.d.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),j=l.d.span.withConfig({displayName:"ApiTabs__Icon",componentId:"wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),V=l.d.div.withConfig({displayName:"ApiTabs__Content",componentId:"wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),B=l.d.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),P=Object(l.e)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),q=l.d.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),P,(function(e){return 60*(e.index+1)})),A=function(e){var t=e.isLoading;return i.a.createElement(B,{isLoading:t},i.a.createElement("span",null,i.a.createElement(q,{index:0})),i.a.createElement("span",null,i.a.createElement(q,{index:1})),i.a.createElement("span",null,i.a.createElement(q,{index:2})),i.a.createElement("span",null,i.a.createElement(q,{index:3})),i.a.createElement("span",null,i.a.createElement(q,{index:4})))},_=l.d.span.withConfig({displayName:"ApiSubmit__Button",componentId:"y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),I=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return i.a.createElement(_,{onClick:n},t?"sending":"generate")},t}(o.Component);I.defaultProps={};var N=I,L=l.d.div.withConfig({displayName:"ApiResponse__Container",componentId:"usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),H=l.d.div.withConfig({displayName:"ApiResponse__Header",componentId:"usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),z=l.d.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),R=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,a="no response available";return n&&(a=JSON.stringify(n,null,"  ")),i.a.createElement(L,null,i.a.createElement(H,null,"Response ",t?i.a.createElement("strong",null,t):"n/a"),i.a.createElement(z,null,a))},t}(o.Component);R.defaultProps={};var F=R,W=n("S6qR");function G(){var e=Object(a.a)(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "]);return G=function(){return e},e}function M(){var e=Object(a.a)(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "]);return M=function(){return e},e}var D=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,a=n.props.dataProperty,r=n.state.props;n.setState({props:Object.assign({},r,(t={},t[a]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,a=e.propsMapper,r=n.state.props;n.setState({loading:!0}),fetch(""+W.a.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a(r))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return Object(r.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.componentName,a=t.chartClass,r=t.apiPath,o=t.controlGroups,l=t.dataProperty,d=t.propsMapper,g=t.flavors,b=this.state,f=b.props,y=b.loading,v=b.responseStatus,x=b.response,w=g.map((function(e){return e.flavor}));return i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(c.a,{chartClass:n+" HTTP API",tags:["POST "+r]}),g&&i.a.createElement(p.a,{flavors:g,current:"api"}),i.a.createElement(h.a,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),i.a.createElement(C,{chartClass:a,data:f[l],body:d(f),isLoading:y,responseStatus:v,chartUrl:x?x.url:null}),i.a.createElement(Y,null,i.a.createElement(U,null,i.a.createElement(N,{loading:y,onClick:this.handleSubmit})),i.a.createElement(F,{responseStatus:v,response:x})),i.a.createElement(m.a,{component:n,settings:f,flavors:w,currentFlavor:"api",groups:o,onChange:this.handleSettingsUpdate})))},t}(o.Component);D.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var Y=l.d.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),d.a.tablet(M(),(function(e){return e.theme.dimensions.headerHeight})),d.a.mobile(G())),U=l.d.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])}}]);
//# sourceMappingURL=component---src-pages-bar-api-js-aa8f140c9fc6eafb8c35.js.map