"use strict";(self.webpackChunkfrontendpractice=self.webpackChunkfrontendpractice||[]).push([[450],{450:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var a=i(152),c=i(791),s="DoubleVerticalSlider_body__jZFvr",l="DoubleVerticalSlider_sliderContainer__ORJ3Y",r="DoubleVerticalSlider_actionButtons__63tCe",n="DoubleVerticalSlider_downButton__0cNBa",o="DoubleVerticalSlider_upButton__Km-uz",d="DoubleVerticalSlider_leftSlider__0eS3S",u="DoubleVerticalSlider_rightSlider__c6HT2",f=i(184),h=[{bgc:"#FD3555",title:"Nature flower",desc:"all in pink",img:"https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80"},{bgc:"#2A86BA",title:"Bluuue Sky",desc:"with it's mountains",img:"https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80"},{bgc:"#252E33",title:"Lonely castley",desc:"in the wilderness",img:"https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80"},{bgc:"#FFB866",title:"Flying eagle",desc:"in the sunset",img:"https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80"}],b=function(){var e=(0,c.useState)(0),t=(0,a.Z)(e,2),i=t[0],b=t[1],m=(0,c.useState)(0),p=(0,a.Z)(m,2),g=p[0],x=p[1],_=(0,c.useRef)(null),j=function(e){if(_.current){var t=_.current.clientHeight;switch(x(t),e){case"up":i===h.length-1?b(0):b(i+1);break;case"down":b(0===i?h.length-1:i-1)}}};return(0,f.jsx)("div",{className:s,children:(0,f.jsxs)("div",{className:l,ref:_,children:[(0,f.jsx)("div",{className:d,style:{top:"-".concat(100*(h.length-1),"vh"),transform:"translateY(".concat(i*g,"px)")},children:h.map((function(e,t){return(0,f.jsxs)("div",{style:{backgroundColor:"".concat(e.bgc)},children:[(0,f.jsx)("h1",{children:e.title}),(0,f.jsx)("p",{children:e.desc})]},t)}))}),(0,f.jsx)("div",{className:u,style:{transform:"translateY(-".concat(i*g,"px)")},children:h.map((function(e,t){return(0,f.jsx)("div",{style:{backgroundImage:"url(".concat(e.img,")")}},t)}))}),(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("button",{className:n,onClick:function(){return j("down")},children:(0,f.jsx)("i",{className:"fas fa-arrow-down"})}),(0,f.jsx)("button",{className:o,onClick:function(){j("up")},children:(0,f.jsx)("i",{className:"fas fa-arrow-up"})})]})]})})}}}]);
//# sourceMappingURL=450.89f3613b.chunk.js.map