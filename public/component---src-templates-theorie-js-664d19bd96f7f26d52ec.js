webpackJsonp([31750728095319],{207:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=a(2),o=l(c),f=a(5),i=l(f),d=a(3),s=l(d);a(6);var m=a(4),p=a(10),y=l(p),E=a(9),h=l(E),b=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.contentfulTheorie,t=e.titre,a=e.texte,l=e.equivalentUrl;return o.default.createElement("div",{id:"page-wrapper"},o.default.createElement(y.default,null),o.default.createElement("div",null,o.default.createElement(m.Breadcrumb,{className:"mb-0"},o.default.createElement(m.BreadcrumbItem,null,o.default.createElement(s.default,{to:"/"},"Accueil")),o.default.createElement(m.BreadcrumbItem,null,o.default.createElement(s.default,{to:"/encyclopedie"},"L'encyclopédie universelle")),o.default.createElement(m.BreadcrumbItem,{active:!0},t))),o.default.createElement("div",{className:"equiv"},o.default.createElement(s.default,{className:"text-white",to:"/en"+l},o.default.createElement(m.Button,{className:"float-right",color:"primary"},"En"))),o.default.createElement(m.Container,{fluid:!0,className:"py-5"},o.default.createElement(m.Row,{className:"pb-5"},o.default.createElement(m.Col,{lg:{size:8,offset:2},md:"12"},o.default.createElement("h1",{className:"display-4 page-header text-center mb-5"},t),o.default.createElement("div",{className:"text-justify",dangerouslySetInnerHTML:{__html:a.childMarkdownRemark.html}})))),o.default.createElement(h.default,null))},t}(c.Component);b.propTypes={data:i.default.object.isRequired},t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-theorie-js-664d19bd96f7f26d52ec.js.map