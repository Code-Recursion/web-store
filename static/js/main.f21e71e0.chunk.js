(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(19),r=c.n(n),i=(c(25),c(20)),d=c.p+"static/media/banner-top.345e4bb1.svg",l=c.p+"static/media/search-icon.bf639f15.svg",o=c.p+"static/media/arrow-right.a3d0d4f0.svg",j=c.p+"static/media/add-icon.56870965.svg",m=c(9),b=c.n(m),u=(c(59),c(6)),h=c.n(u),p="https://60deefccabbdd9001722d12d.mockapi.io/shop/products",x={getAllProduct:function(){return h.a.get(p).then((function(e){return e.data}))},addProduct:function(e){return h.a.post(p,e).then((function(e){return e.data}))},deleteProduct:function(e){return h.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},updateProduct:function(e,t){return h.a.put("".concat(p,"/").concat(e),t).then((function(e){return e.data}))}},O=(c(78),c(0)),g=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=c&&c.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(O.jsx)("div",{className:"item","data-value":t++,children:Object(O.jsx)("div",{className:"row m-2",children:Object(O.jsx)("div",{className:"m-4",children:Object(O.jsxs)("div",{className:"card border-0 product-card text-left p-2",children:[Object(O.jsx)("img",{className:"",alt:"product image",src:e.image}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("p",{className:"text-title",children:e.name}),Object(O.jsx)("p",{className:"text-description",children:e.description}),Object(O.jsxs)("p",{className:"text-yellow text-description",children:[Object(O.jsx)("strong",{children:"Shop Now "}),Object(O.jsx)("img",{className:"arrow-right",src:o})]})]})]})})})})})),r=c.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(O.jsx)("div",{className:"item m-3","data-value":t++,children:Object(O.jsx)("div",{className:"my-4",children:Object(O.jsx)("div",{className:"card product-card-bg border-0 p-4",children:Object(O.jsxs)("div",{className:"card-block",children:[Object(O.jsx)("img",{className:"img-fluid",src:e.image}),Object(O.jsx)("h6",{className:"card-subtitle text-muted mt-2",children:e.name}),Object(O.jsx)("p",{className:"card-text p-y-1",children:"Designer"}),Object(O.jsxs)("a",{href:"#",className:"card-link",children:["$",e.price]}),Object(O.jsx)("a",{href:"#",className:"card-link",children:Object(O.jsx)("img",{className:"arrow-right",src:j})})]})})})})}));return Object(s.useEffect)((function(){x.getAllProduct().then((function(e){a(e)}))}),[]),console.log("products :",c),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("section",{className:"section-home-1",children:[Object(O.jsxs)("div",{className:"row m-0 top-container d-flex",children:[Object(O.jsx)("div",{className:"col-12 p-0",children:Object(O.jsx)("img",{src:d,className:"img-fluid banner",alt:"banner"})}),Object(O.jsxs)("div",{className:"input-group search-container m-4 rounded border",children:[Object(O.jsx)("span",{className:"input-group-text border-0",children:Object(O.jsx)("img",{src:l,className:"img-fluid",alt:"search"})}),Object(O.jsx)("input",{type:"text",className:"form-control border-0",placeholder:"Search Product"})]})]}),Object(O.jsxs)("div",{className:"store-wrapper",children:[Object(O.jsx)("div",{children:Object(O.jsx)(b.a,{mouseTracking:!0,items:n,responsive:{0:{items:1},568:{items:2},1024:{items:3}},controlsStrategy:"alternate"})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"m-4 p-0",children:Object(O.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(O.jsx)("div",{className:"display-4",children:Object(O.jsx)("h4",{children:Object(O.jsx)("strong",{children:"featured Products"})})}),Object(O.jsx)("div",{className:"",children:Object(O.jsx)("h6",{children:"See All"})})]})})}),Object(O.jsx)(b.a,{mouseTracking:!0,items:r,responsive:{0:{items:2},568:{items:3},1024:{items:5}},controlsStrategy:"alternate"})]}),Object(O.jsx)("div",{className:"container parent p-0 m-0",children:Object(O.jsx)("div",{className:"row bottom-container child"})})]})})};c(80);var f=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(81);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),v()}},[[82,1,2]]]);
//# sourceMappingURL=main.f21e71e0.chunk.js.map