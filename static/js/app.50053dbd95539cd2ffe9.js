webpackJsonp([1],{Lby1:function(t,a){},NA1l:function(t,a){},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("7+uW"),c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("div",{staticClass:"container container-header"},[a("h1",{staticClass:"logo"},[this._v("Cats shop")]),this._v(" "),a("cart")],1)]),this._v(" "),a("div",{staticClass:"container"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a(this.$store.state.component,{tag:"component"})],1)],1)])},staticRenderFns:[]};var e=i("VU/8")({name:"app"},c,!1,function(t){i("Lby1")},null,null).exports,n=i("mvHQ"),o=i.n(n),M=i("NYxO");s.a.use(M.a);var r=function(){return JSON.parse(localStorage.getItem("cats-1.0")||"[]")},u=function(t){localStorage.setItem("cats-1.0",o()(t))},l=new M.a.Store({state:{cats:[{id:1,name:"Tom",price:10.55,quantity:0,image:"https://lorempixel.com/300/200/cats/1"},{id:2,name:"Kitty",price:3.02,quantity:0,image:"https://lorempixel.com/300/200/cats/2"},{id:3,name:"Molly",price:5.24,quantity:0,image:"https://lorempixel.com/300/200/cats/3"},{id:4,name:"Tiger",price:6.26,quantity:0,image:"https://lorempixel.com/300/200/cats/4"},{id:5,name:"Simba",price:6.88,quantity:0,image:"https://lorempixel.com/300/200/cats/5"},{id:6,name:"Jack",price:7.56,quantity:0,image:"https://lorempixel.com/300/200/cats/6"},{id:7,name:"Angel",price:1.25,quantity:0,image:"https://lorempixel.com/300/200/cats/7"},{id:8,name:"Jasper",price:.72,quantity:0,image:"https://lorempixel.com/300/200/cats/8"},{id:8,name:"King",price:4.83,quantity:0,image:"https://lorempixel.com/300/200/cats/9"}],items:r(),showCart:!1,component:"catalog",cartAnim:!1},getters:{totalPrice:function(t){for(var a=0,i=0;i<t.items.length;i++)a+=t.items[i].details.price*t.items[i].quantity;return Math.round(100*a)/100},totalQty:function(t){var a=t.items.reduce(function(t,a){return t+a.quantity},0);return 1==a?a+" cat":a+" cats"}},mutations:{addQty:function(t,a){a.quantity++},decQty:function(t,a){a.quantity--},removeFromCart:function(t,a){t.items.splice(t.items.indexOf(a),1),0==t.items.length&&(t.component="catalog")},clearCart:function(t){t.component="catalog";for(var a=t.items,i=a.length;i>0;i--)a.pop();return a},toCatalog:function(t){t.component="catalog",t.showCart=!1},looksGood:function(){alert("Looks Good")},addToCart:function(t,a){t.cartAnim=!0;var i=t.items.findIndex(function(t){return t.details.id===a.id});-1===i?t.items.unshift({details:a,quantity:1}):t.items[i].quantity++}},actions:{decQty:function(t,a){t.commit("decQty",a),a.quantity<=0&&t.commit("removeFromCart",a)}}});l.watch(function(t){var a=t.items;u(a)});var m={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("ul",{staticClass:"cats"},t._l(t.cats,function(a){return i("li",{key:a.key,staticClass:"cat"},[i("img",{attrs:{src:a.image,alt:"cat"}}),t._v(" "),i("div",{staticClass:"cat__caption"},[i("strong",{staticClass:"cat__name"},[t._v(t._s(a.name))]),t._v(" "),i("span",{staticClass:"cat__price"},[t._v("$"+t._s(a.price))]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(i){t.addToCart(a)}}},[t._v("Add to cart")])])])}))])},staticRenderFns:[]};var j=i("VU/8")({name:"catalog",computed:{cats:function(){return this.$store.state.cats}},methods:{addToCart:function(t){this.$store.commit("addToCart",t)}}},m,!1,function(t){i("c/T0")},"data-v-a1425284",null).exports,y=i("Dd8w"),L=i.n(y),d={name:"checkout",computed:L()({items:function(){return this.$store.state.items}},Object(M.b)(["totalPrice","totalQty"]))},v={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"checkout"},[i("div",{staticClass:"checkout__content"},[i("div",{staticClass:"checkout__heading"},[i("h2",[t._v(" In your cart: "),i("span",[t._v(t._s(t.totalQty))]),t._v(" = "),i("span",[t._v(" $"+t._s(t.totalPrice))])]),t._v(" "),i("button",{staticClass:"btn btn-cart",on:{click:function(a){t.$store.commit("clearCart")}}},[t._v("x")])]),t._v(" "),i("transition-group",{staticClass:"cart__list",attrs:{name:"fade",tag:"ul"}},t._l(t.items,function(a){return i("li",{key:a.details.name,staticClass:"checkout__item"},[i("div",{staticClass:"item"},[i("img",{staticClass:"item__image",attrs:{src:a.details.image,alt:"cat"}}),t._v(" "),i("div",{staticClass:"item__text"},[i("p",[i("strong",[t._v(t._s(a.details.name))]),t._v(" x "),i("span",[t._v(t._s(a.quantity))]),t._v(" = "),i("span",[t._v("$"+t._s(Math.round(a.quantity*a.details.price*100)/100))])]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique velit, eum. Ex, qui! Voluptatibus vel quam natus nihil.")])])]),t._v(" "),i("div",{staticClass:"item__buttons"},[i("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.commit("addQty",a)}}},[t._v("+")]),t._v(" "),i("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.dispatch("decQty",a)}}},[t._v("-")]),t._v(" "),i("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.commit("removeFromCart",a)}}},[t._v("x")])])])}))],1),t._v(" "),i("div",{staticClass:"checkout__footer"},[i("div",{staticClass:"checkout__menu"},[i("button",{staticClass:"btn",on:{click:function(a){t.$store.commit("toCatalog")}}},[t._v("Back to catalog")]),t._v(" "),i("button",{staticClass:"btn",on:{click:function(a){t.$store.commit("looksGood")}}},[t._v("Looks Good")])])])])])},staticRenderFns:[]};var N=i("VU/8")(d,v,!1,function(t){i("T76Z")},"data-v-5a6cd290",null).exports,g={name:"cart",computed:L()({items:function(){return this.$store.state.items}},Object(M.b)(["totalPrice","totalQty"]))},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("transition",{attrs:{name:"fade-cart"}},["catalog"==t.$store.state.component?s("div",{staticClass:"cart-block"},[s("div",{staticClass:"cart-icon btn",class:{cartanim:t.$store.state.cartAnim},on:{animationend:function(a){t.$store.state.cartAnim=!1},click:function(a){t.$store.state.showCart=!t.$store.state.showCart}}},[s("div",{staticClass:"cart-img"},[s("img",{attrs:{src:i("daNO"),alt:""}})]),t._v(" "),s("transition",{attrs:{name:"fade"}},[0!=t.totalPrice?s("p",[t._v(t._s(t.totalQty)+" = $"+t._s(t.totalPrice))]):t._e()])],1),t._v(" "),s("transition",{attrs:{name:"fade-cart"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.showCart,expression:"$store.state.showCart"}],staticClass:"cart"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length > 0"}]},[s("transition-group",{staticClass:"cart__list",attrs:{name:"fade",tag:"ul"}},t._l(t.items,function(a){return s("li",{key:a.details.name,staticClass:"cart__item"},[s("p",[s("strong",{staticClass:"cat__name"},[t._v(t._s(a.details.name))]),t._v(" x "+t._s(a.quantity)+" = $"+t._s(Math.round(a.quantity*a.details.price*100)/100)+"\r\n                ")]),t._v(" "),s("div",{staticClass:"cart__buttons"},[s("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.commit("addQty",a)}}},[t._v("+")]),t._v(" "),s("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.dispatch("decQty",a)}}},[t._v("-")]),t._v(" "),s("button",{staticClass:"btn btn-cart",on:{click:function(i){t.$store.commit("removeFromCart",a)}}},[t._v("x")])])])})),t._v(" "),s("div",{staticClass:"cart__total"},[s("p",[s("strong",[t._v(t._s(t.totalQty))]),t._v(" = $"+t._s(t.totalPrice))]),t._v(" "),s("button",{staticClass:"btn btn-cart",on:{click:function(a){t.$store.commit("clearCart")}}},[t._v("x")])]),t._v(" "),s("div",{staticClass:"cart__checkout"},[s("button",{staticClass:"btn",on:{click:function(a){t.$store.state.component="checkout"}}},[t._v("Check out")])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.items.length,expression:"items.length === 0"}]},[s("p",{staticClass:"cart__empty"},[t._v("You have no cats!")])])])])],1):t._e()])],1)},staticRenderFns:[]};var T=i("VU/8")(g,C,!1,function(t){i("NA1l")},"data-v-18b7ff9d",null).exports;s.a.config.productionTip=!1,s.a.component("Catalog",j),s.a.component("Checkout",N),s.a.component("Cart",T),new s.a({el:"#app",store:l,template:"<App/>",components:{App:e}})},T76Z:function(t,a){},"c/T0":function(t,a){},daNO:function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI2MC4yOTMgMjYwLjI5MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYwLjI5MyAyNjAuMjkzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjU4LjcyNyw1Ny40NTljLTEuNDItMS44MzctMy42MTItMi45MTMtNS45MzQtMi45MTNINjIuMDA0bC04LjMzMy0zMi4wNTVjLTAuODU5LTMuMzA2LTMuODQzLTUuNjEzLTcuMjU5LTUuNjEzSDcuNSAgIGMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNWMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41aDMzLjExMmw4LjMzMywzMi4wNTVjMCwwLjAwMSwwLDAuMDAxLDAuMDAxLDAuMDAybDI5LjM4MSwxMTIuOTY5ICAgYzAuODU5LDMuMzA1LDMuODQzLDUuNjEyLDcuMjU4LDUuNjEyaDEzNy44MjJjMy40MTUsMCw2LjM5OS0yLjMwNyw3LjI1OC01LjYxMmwyOS4zODUtMTEyLjk3MSAgIEMyNjAuNjM2LDYxLjY4NywyNjAuMTQ3LDU5LjI5NSwyNTguNzI3LDU3LjQ1OXogTTExNy44NzcsMTY3LjUxN0g5MS4zODVsLTUuODkyLTIyLjY1MmgzMi4zODRWMTY3LjUxN3ogTTExNy44NzcsMTI5Ljg2NEg4MS41OTIgICBsLTUuODk1LTIyLjY2N2g0Mi4xOFYxMjkuODY0eiBNMTE3Ljg3Nyw5Mi4xOTdINzEuNzk1bC01Ljg5MS0yMi42NTFoNTEuOTczVjkyLjE5N3ogTTE3Ni4xMTksMTY3LjUxN2gtNDMuMjQydi0yMi42NTJoNDMuMjQyICAgVjE2Ny41MTd6IE0xNzYuMTE5LDEyOS44NjRoLTQzLjI0MnYtMjIuNjY3aDQzLjI0MlYxMjkuODY0eiBNMTc2LjExOSw5Mi4xOTdoLTQzLjI0MlY2OS41NDZoNDMuMjQyVjkyLjE5N3ogTTIxNy42MDksMTY3LjUxNyAgIGgtMjYuNDl2LTIyLjY1MmgzMi4zODJMMjE3LjYwOSwxNjcuNTE3eiBNMjI3LjQwMywxMjkuODY0aC0zNi4yODR2LTIyLjY2N2g0Mi4xOEwyMjcuNDAzLDEyOS44NjR6IE0yMzcuMjAxLDkyLjE5N2gtNDYuMDgxVjY5LjU0NiAgIGg1MS45NzRMMjM3LjIwMSw5Mi4xOTd6IiBmaWxsPSIjMmMzZTUwIi8+Cgk8cGF0aCBkPSJNMTA1LjQ4MiwxODguNjJjLTE1LjEwNiwwLTI3LjM5NiwxMi4yOS0yNy4zOTYsMjcuMzk1YzAsMTUuMTA4LDEyLjI5LDI3LjQsMjcuMzk2LDI3LjQgICBjMTUuMTA1LDAsMjcuMzk1LTEyLjI5MiwyNy4zOTUtMjcuNEMxMzIuODc3LDIwMC45MSwxMjAuNTg4LDE4OC42MiwxMDUuNDgyLDE4OC42MnogTTEwNS40ODIsMjI4LjQxNSAgIGMtNi44MzUsMC0xMi4zOTYtNS41NjMtMTIuMzk2LTEyLjRjMC02LjgzNSw1LjU2MS0xMi4zOTUsMTIuMzk2LTEyLjM5NWM2LjgzNCwwLDEyLjM5NSw1LjU2MSwxMi4zOTUsMTIuMzk1ICAgQzExNy44NzcsMjIyLjg1MywxMTIuMzE3LDIyOC40MTUsMTA1LjQ4MiwyMjguNDE1eiIgZmlsbD0iIzJjM2U1MCIvPgoJPHBhdGggZD0iTTIwMy41MTIsMTg4LjYyYy0xNS4xMDQsMC0yNy4zOTIsMTIuMjktMjcuMzkyLDI3LjM5NWMwLDE1LjEwOCwxMi4yODgsMjcuNCwyNy4zOTIsMjcuNCAgIGMxNS4xMDcsMCwyNy4zOTYtMTIuMjkyLDI3LjM5Ni0yNy40QzIzMC45MDgsMjAwLjkxLDIxOC42MTgsMTg4LjYyLDIwMy41MTIsMTg4LjYyeiBNMjAzLjUxMiwyMjguNDE1ICAgYy02LjgzMywwLTEyLjM5Mi01LjU2My0xMi4zOTItMTIuNGMwLTYuODM1LDUuNTU5LTEyLjM5NSwxMi4zOTItMTIuMzk1YzYuODM2LDAsMTIuMzk2LDUuNTYxLDEyLjM5NiwxMi4zOTUgICBDMjE1LjkwOCwyMjIuODUzLDIxMC4zNDcsMjI4LjQxNSwyMDMuNTEyLDIyOC40MTV6IiBmaWxsPSIjMmMzZTUwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="}},["NHnr"]);
//# sourceMappingURL=app.50053dbd95539cd2ffe9.js.map