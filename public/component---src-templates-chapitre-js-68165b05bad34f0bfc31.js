webpackJsonp([0x923310cdd759],{132:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=a(2),o=l(c),f=a(3),d=l(f),s=a(4),i=l(s);a(6);var m=a(5),p=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.contentfulChapitre,t=e.titreChapitre,a=e.texte,l=e.chapitreAvant,r=e.chapitreApres,n=e.nomRoman;return o.default.createElement("div",null,o.default.createElement(m.Breadcrumb,{className:"mb-0"},o.default.createElement(m.BreadcrumbItem,null,o.default.createElement(i.default,{to:"/"},"Accueil")),o.default.createElement(m.BreadcrumbItem,null,o.default.createElement(i.default,{to:"/histoires"},"Nos Histoires de l'Univers...")),o.default.createElement(m.BreadcrumbItem,null,o.default.createElement(i.default,{to:n},"Roman")),o.default.createElement(m.BreadcrumbItem,{active:!0},t)),o.default.createElement("div",null,o.default.createElement(m.Container,null,o.default.createElement(m.Row,null,o.default.createElement(m.Col,{lg:{size:10,offset:1},md:"12"},o.default.createElement("h1",{className:"page-header display-4 text-center my-5"},t),o.default.createElement("div",{className:"text-justify lecture-texte",dangerouslySetInnerHTML:{__html:a.childMarkdownRemark.html}}))))),o.default.createElement("div",{className:"py-5"},o.default.createElement(m.Container,null,o.default.createElement(m.Row,null,o.default.createElement(m.Col,{lg:{size:10,offset:1},md:"12"},o.default.createElement(m.Row,null,o.default.createElement(m.Col,{xs:"4",className:"text-left pl-0"},l?o.default.createElement(i.default,{className:"btn btn-primary",to:l},"Chapitre précédent"):""),o.default.createElement(m.Col,{xs:"4",className:"text-center"},o.default.createElement(i.default,{className:"btn btn-primary",to:n},"Retourner au roman")),o.default.createElement(m.Col,{xs:"4",className:"text-right pr-0"},r?o.default.createElement(i.default,{className:"btn btn-primary",to:r},"Chapitre suivant"):"")))))))},t}(c.Component);p.propTypes={data:d.default.object.isRequired},t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-chapitre-js-68165b05bad34f0bfc31.js.map