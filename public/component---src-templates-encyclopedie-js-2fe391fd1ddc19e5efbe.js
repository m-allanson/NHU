webpackJsonp([0xa6c8855c7451],{174:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=a(2),o=l(c),d=a(5),s=l(d),i=a(3),m=l(i);a(6);var f=a(4),p=a(9),E=l(p),y=a(8),h=l(y),b=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data;return o.default.createElement("div",{id:"page-wrapper"},o.default.createElement(E.default,null),o.default.createElement("div",null,o.default.createElement(f.Breadcrumb,{className:"mb-0"},o.default.createElement(f.BreadcrumbItem,null,o.default.createElement(m.default,{to:"/"},"Accueil")),o.default.createElement(f.BreadcrumbItem,{active:!0},"L'encyclopédie universelle"))),o.default.createElement("div",{className:"equiv"},o.default.createElement(m.default,{className:"text-white",to:"/en/encyclopedia"},o.default.createElement(f.Button,{className:"float-right",color:"primary"},"En"))),o.default.createElement("div",{className:"py-5"},o.default.createElement(f.Container,{fluid:!0},o.default.createElement("h1",{className:"display-4"},"L'encyclopédie universelle"),o.default.createElement("p",{className:"lead"},"Voici toutes les théories au sujet de l'Univers des Nouveaux Humains."),o.default.createElement("p",{className:"lead"},"Attention au spoil!"))),o.default.createElement(f.Container,{fluid:!0,className:"p-0"},o.default.createElement(f.Row,{className:"pb-5"},o.default.createElement(f.Col,{sm:"12",lg:"9"},e.allContentfulTheorie.edges.map(function(e){return o.default.createElement("div",{className:"clearfix border-bottom mb-2",key:e.node.id},o.default.createElement("div",{className:""},o.default.createElement(f.Row,{className:"no-gutters"},o.default.createElement(f.Col,{md:"9",sm:"12"},o.default.createElement(m.default,{to:"encyclopedie/"+e.node.slug},o.default.createElement("h2",null,o.default.createElement("small",null,e.node.titre)))))),o.default.createElement("div",null,o.default.createElement(f.Row,{className:"no-gutters"},o.default.createElement(f.Col,{md:"9",sm:"12"},o.default.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})),o.default.createElement(f.Col,{md:"3",sm:"12",className:"d-flex justify-content-end align-items-end"},o.default.createElement(m.default,{className:"float-right mb-2",to:"encyclopedie/"+e.node.slug},"Voir les détails")))))})))),o.default.createElement(h.default,null))},t}(c.Component);b.propTypes={data:s.default.object.isRequired},t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-encyclopedie-js-2fe391fd1ddc19e5efbe.js.map