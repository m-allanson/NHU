webpackJsonp([0xa6c8855c7451],{133:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(2),c=l(u),d=a(3),s=l(d),i=a(4),m=l(i);a(6);var f=a(5),p=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data;return c.default.createElement("div",null,c.default.createElement(f.Breadcrumb,{className:"mb-0"},c.default.createElement(f.BreadcrumbItem,null,c.default.createElement(m.default,{to:"/"},"Accueil")),c.default.createElement(f.BreadcrumbItem,{active:!0},"L'encyclopédie universelle")),c.default.createElement("div",{className:"py-5"},c.default.createElement(f.Container,{fluid:!0},c.default.createElement("h1",{className:"display-4"},"L'encyclopédie universelle"),c.default.createElement("p",{className:"lead"},"Voici toutes les théories au sujet de l'Univers des Nouveaux Humains."),c.default.createElement("p",{className:"lead"},"Attention au spoil!"))),c.default.createElement(f.Container,{fluid:!0,className:"p-0"},c.default.createElement(f.Row,{className:"pb-5"},c.default.createElement(f.Col,{sm:"12",lg:"9"},e.allContentfulTheorie.edges.map(function(e){return c.default.createElement("div",{className:"clearfix border-bottom mb-2",key:e.node.id},c.default.createElement("div",{className:""},c.default.createElement(f.Row,{className:"no-gutters"},c.default.createElement(f.Col,{md:"9",sm:"12"},c.default.createElement(m.default,{to:"encyclopedie/"+e.node.slug},c.default.createElement("h2",null,c.default.createElement("small",null,e.node.titre)))))),c.default.createElement("div",null,c.default.createElement(f.Row,{className:"no-gutters"},c.default.createElement(f.Col,{md:"9",sm:"12"},c.default.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})),c.default.createElement(f.Col,{md:"3",sm:"12",className:"d-flex justify-content-end align-items-end"},c.default.createElement(m.default,{className:"float-right mb-2",to:"encyclopedie/"+e.node.slug},"Voir les détails")))))})))))},t}(u.Component);p.propTypes={data:s.default.object.isRequired},t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-encyclopedie-js-f8e702c34d8ef0ed35fa.js.map