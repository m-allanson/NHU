webpackJsonp([0x8a1814c4d46b],{167:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(2),i=n(u),s=a(3),c=n(s),f=a(4),d=function(e){function t(a){return r(this,t),l(this,e.call(this,a))}return o(t,e),t.prototype.render=function(){var e=this;return i.default.createElement("div",null,this.props.allHistoires.edges.map(function(t){return i.default.createElement("div",{key:t.node.id},t.node.typeHistoire==e.props.typeHistoire?i.default.createElement(f.ListGroupItem,{className:"mb-4 border-top-0 border-right-0 border-left-0 pt-0 pr-0 pl-0"},i.default.createElement(f.ListGroupItemHeading,null,i.default.createElement(c.default,{to:"/en/stories/"+t.node.slug},t.node.titreRoman)),i.default.createElement("div",{className:"list-group-item-text"},i.default.createElement("div",{className:"text-justify",dangerouslySetInnerHTML:{__html:t.node.resume.childMarkdownRemark.html}}),i.default.createElement(c.default,{to:"/en/stories/"+t.node.slug},"Start reading"))):"")}))},t}(i.default.Component);t.default=d,e.exports=t.default},205:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(2),i=n(u),s=a(5),c=n(s),f=a(3),d=n(f);a(6);var m=a(4),p=a(16),b=n(p),h=a(12),E=n(h),v=a(11),y=n(v),g=a(167),N=n(g),w=function(e){function t(a){r(this,t);var n=l(this,e.call(this,a));return n.toggle=n.toggle.bind(n),n.state={activeTab:"1"},n}return o(t,e),t.prototype.toggle=function(e){this.state.activeTab!==e&&this.setState({activeTab:e})},t.prototype.render=function(){var e=this,t=this.props.data;return i.default.createElement("div",{id:"page-wrapper"},i.default.createElement(E.default,null),i.default.createElement("div",null,i.default.createElement(m.Breadcrumb,{className:"mb-0"},i.default.createElement(m.BreadcrumbItem,null,i.default.createElement(d.default,{to:"/en"},"Homepage")),i.default.createElement(m.BreadcrumbItem,{active:!0},"Our Univese stories..."))),i.default.createElement("div",{className:"equiv"},i.default.createElement(d.default,{className:"text-white",to:"/histoires"},i.default.createElement(m.Button,{className:"float-right",color:"primary"},"Fr"))),i.default.createElement("div",{className:"my-5"},i.default.createElement(m.Container,null,i.default.createElement("h1",{className:"display-4"},"Our Univese stories..."),i.default.createElement("p",{className:"lead"},"Here are all the novels and mini-stories that relate to the New Human Universe."))),i.default.createElement(m.Container,{className:"my-5"},i.default.createElement(m.Nav,{pills:!0},i.default.createElement(m.NavItem,{className:"cursor-update"},i.default.createElement(m.NavLink,{className:(0,b.default)({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"The stories")),i.default.createElement(m.NavItem,{className:"cursor-update"},i.default.createElement(m.NavLink,{className:(0,b.default)({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"The mini-stories"))),i.default.createElement("br",null),i.default.createElement(m.TabContent,{activeTab:this.state.activeTab},i.default.createElement(m.TabPane,{tabId:"1"},i.default.createElement(m.ListGroup,null,i.default.createElement(N.default,{allHistoires:t.allContentfulRoman,typeHistoire:"Roman"}))),i.default.createElement(m.TabPane,{tabId:"2"},i.default.createElement(m.ListGroup,null,i.default.createElement(N.default,{allHistoires:t.allContentfulRoman,typeHistoire:"Mini-histoire"}))))),i.default.createElement(y.default,null))},t}(u.Component);w.propTypes={data:c.default.object.isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-stories-en-js-25b241bf29ebbcdf3436.js.map