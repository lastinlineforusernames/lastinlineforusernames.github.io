(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(1),c=o.n(a),s=o(4),i=o.n(s),r=(o(14),o(5)),h=o(6),u=o(2),l=o(8),d=o(7);o(15);var j=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).state={text:"This is a Quote",author:"Quotey McQuotenstein"},n.getQuote=n.getQuote.bind(Object(u.a)(n)),n}return Object(h.a)(o,[{key:"getQuote",value:function(){var t=b[Math.floor(Math.random()*b.length)];this.setState({text:t.text,author:t.author})}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"quote-box",children:[Object(n.jsx)("div",{id:"text",children:this.state.text}),Object(n.jsx)("div",{id:"author",children:this.state.author}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{id:"button-wrapper",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"column",children:Object(n.jsx)("a",{href:"https://twitter.com/intent/tweet?text=".concat(this.state.text," - ").concat(this.state.author),id:"tweet-quote",children:"Tweet"})}),Object(n.jsx)("div",{className:"column"}),Object(n.jsx)("div",{className:"column",children:Object(n.jsx)("button",{id:"new-quote",onClick:this.getQuote,children:"New Quote"})})]})})]})}}]),o}(c.a.Component),b=[{text:"It's awfully cold out, isn't it?",author:"Ted from Sales"},{text:"Oh, that sandwich looks good! Is it from the new place on the corner?",author:"The dude that sits next to me at lunch"},{text:"I like cheese.",author:"Me"},{text:"Meow. My food bowl is not empty, but I shall behave as such. Meow.",author:"Bob the Cat"},{text:"Does that come with mayonnaise on it? Well, in that case, please hold the mayo.",author:"Someone that does not like mayonnaise ordering a burger at a restaurant"}],x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;o(t),n(t),a(t),c(t),s(t)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.8c73c218.chunk.js.map