webpackJsonp([19336683337463],{64:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=l(2),c=a(u),s=l(3),f=a(s),d=l(4),i=function(e){function t(l){return n(this,t),r(this,e.call(this,l))}return o(t,e),t.prototype.render=function(){return c.default.createElement("div",null,this.props.allNouvelles.edges.map(function(e){return c.default.createElement("div",{className:"clearfix border-bottom mb-2",key:e.node.id},c.default.createElement("div",{className:""},c.default.createElement(d.Row,{className:"no-gutters"},c.default.createElement(d.Col,{md:"9",sm:"12"},c.default.createElement(f.default,{to:"nouvelles/"+e.node.slug},c.default.createElement("h3",{className:"float-left"},c.default.createElement("small",null,e.node.titreNouvelle)))),c.default.createElement(d.Col,{md:"3",sm:"12"},c.default.createElement("span",{className:"float-right"},c.default.createElement("small",null,e.node.dateSpe," / ",e.node.date))))),c.default.createElement("div",null,c.default.createElement(d.Row,{className:"no-gutters"},c.default.createElement(d.Col,{md:"9",sm:"12"},c.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})),c.default.createElement(d.Col,{md:"3",sm:"12",className:"d-flex justify-content-end align-items-end"},c.default.createElement(f.default,{className:"float-right mb-2",to:"nouvelles/"+e.node.slug},"En savoir plus")))))}))},t}(c.default.Component);t.default=i,e.exports=t.default},186:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=l(2),c=a(u),s=l(5),f=a(s),d=l(3),i=a(d);l(6);var m=l(4),p=l(9),E=a(p),h=l(8),y=a(h),b=l(64),v=a(b),w=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data;return c.default.createElement("div",{id:"page-wrapper"},c.default.createElement(E.default,null),c.default.createElement("div",null,c.default.createElement(m.Breadcrumb,{className:"mb-0"},c.default.createElement(m.BreadcrumbItem,null,c.default.createElement(i.default,{to:"/"},"Accueil")),c.default.createElement(m.BreadcrumbItem,{active:!0},"Quoi de nouveau ?"))),c.default.createElement("div",{className:"equiv"},c.default.createElement(i.default,{className:"text-white",to:"/en/news"},c.default.createElement(m.Button,{className:"float-right",color:"primary"},"En"))),c.default.createElement("div",{className:"py-5"},c.default.createElement(m.Container,{fluid:!0},c.default.createElement("h1",{className:"display-4"},"Quoi de nouveau ?"),c.default.createElement("p",{className:"lead"},"Voici toutes les nouvelles par rapport au site et aux informations au sujet de l'Univers des Nouveaux Humains."))),c.default.createElement(m.Container,{fluid:!0,className:"p-0"},c.default.createElement(m.Row,{className:"pb-5"},c.default.createElement(m.Col,{sm:"12",lg:"9"},c.default.createElement(v.default,{allNouvelles:e.allContentfulNouvelle})),c.default.createElement(m.Col,{sm:"12",lg:"3"}))),c.default.createElement(y.default,null))},t}(u.Component);w.propTypes={data:f.default.object.isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-nouvelles-js-d7763a491d3a881b07a4.js.map