webpackJsonp([93594745931204],{141:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(2),c=a(u),i=r(3),s=a(i),f=r(4),d=a(f);r(6);var p=r(5),m=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPouvoir,t=e.nomPouvoir,r=e.description;return c.default.createElement("div",null,c.default.createElement(p.Breadcrumb,{className:"mb-0"},c.default.createElement(p.BreadcrumbItem,null,c.default.createElement(d.default,{to:"/"},"Accueil")),c.default.createElement(p.BreadcrumbItem,null,c.default.createElement(d.default,{to:"/pouvoirs"},"Abilités des personnages")),c.default.createElement(p.BreadcrumbItem,{active:!0},t)),c.default.createElement(p.Container,{fluid:!0,className:"py-5"},c.default.createElement(p.Row,{className:"pb-5"},c.default.createElement(p.Col,{lg:{size:8,offset:2},md:"12"},c.default.createElement("h1",{className:"display-4 page-header text-center"},t),c.default.createElement("div",{className:"text-justify",dangerouslySetInnerHTML:{__html:r.childMarkdownRemark.html}})))))},t}(u.Component);m.propTypes={data:s.default.object.isRequired},t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-pouvoir-js-200b38dcd54a7181d47d.js.map