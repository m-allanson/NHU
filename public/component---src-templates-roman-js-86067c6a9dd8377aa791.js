webpackJsonp([0x66fab0bff6dc],{65:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=a(l),s=n(3),c=(a(s),n(4)),d=n(7),f=a(d),p=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.onEntering=a.onEntering.bind(a),a.onEntered=a.onEntered.bind(a),a.onExiting=a.onExiting.bind(a),a.onExited=a.onExited.bind(a),a.checkUpLikes=a.checkUpLikes.bind(a),a.toggleLike=a.toggleLike.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],nombreLike:0,likeStatus:!1,likeText:"J'aime",btn_class_like:"success",likeAutorise:!0,loaded:!1},a.handleSubmitLike=a.handleSubmitLike.bind(a),a}return i(t,e),t.prototype.onEntering=function(){},t.prototype.onEntered=function(){},t.prototype.onExiting=function(){},t.prototype.onExited=function(){},t.prototype.toggleLike=function(){var e=this;this.state.lecteur&&this.state.loaded&&(this.state.likeStatus?(this.setState({likeStatus:!1}),this.setState({likeText:"J'aime"}),this.setState({nombreLike:this.state.nombreLike-1}),this.setState({btn_class_like:"success"}),this.state.items.map(function(t){t.user==e.state.lecteur.email&&t.chapitre==e.props.contentChapitre.titreChapitre&&e.removeItem(t.id)})):(this.setState({likeStatus:!0}),this.setState({likeText:"Je n'aime plus"}),this.setState({nombreLike:this.state.nombreLike+1}),this.setState({btn_class_like:"danger"})))},t.prototype.componentWillMount=function(){this.state.lecteur=f.default.load("lecteur")},t.prototype.componentDidMount=function(){},t.prototype.checkUpLikes=function(){var e=this;this.setState({nombreLike:0}),this.state.lecteur&&this.state.items.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&(t.user==e.state.lecteur.email&&(e.setState({likeStatus:!0}),e.setState({likeText:"Je n'aime plus"}),e.setState({btn_class_like:"danger"})),e.setState({nombreLike:e.state.nombreLike+1}))})},t.prototype.handleSubmitLike=function(e){},t.prototype.login=function(){var e=this;auth.signInWithPopup(provider).then(function(t){var n=t.user;e.setState({user:n}),f.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.removeItem=function(e){if("Je n'aime plus"==this.state.likeText){var t=firebase.database().ref("/likes/"+e);t.remove()}},t.prototype.render=function(){return u.default.createElement("form",{onSubmit:this.handleSubmitLike,className:"float-left d-content"},u.default.createElement(c.Button,{color:this.state.btn_class_like},this.state.nombreLike+" | "+this.state.likeText),u.default.createElement(c.Collapse,{isOpen:this.state.likeStatus,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited,className:"float-left"}))},t}(u.default.Component);t.default=p,e.exports=t.default},66:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=a(l),s=n(3),c=(a(s),n(4)),d=n(7),f=a(d),p=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.checkUpLikes=a.checkUpLikes.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],nombreLike:0,btn_class_like:"success",likeAutorise:!1,loaded:!1},a}return i(t,e),t.prototype.componentWillMount=function(){this.state.lecteur=f.default.load("lecteur")},t.prototype.componentDidMount=function(){},t.prototype.checkUpLikes=function(){var e=this;this.setState({nombreLike:0}),this.state.lecteur&&this.state.items.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&(t.user==e.state.lecteur.email&&(e.setState({likeStatus:!0}),e.setState({likeText:"Unlike"}),e.setState({btn_class_like:"danger"})),e.setState({nombreLike:e.state.nombreLike+1}))})},t.prototype.login=function(){var e=this;auth.signInWithPopup(provider).then(function(t){var n=t.user;e.setState({user:n}),f.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.render=function(){return u.default.createElement(c.Button,{color:this.state.btn_class_like,onClick:this.login},this.state.nombreLike+" | Connectez-vous pour donner un like")},t}(u.default.Component);t.default=p,e.exports=t.default},67:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=a(l),s=n(3),c=(a(s),n(4)),d=n(7),f=a(d),p=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.onEntering=a.onEntering.bind(a),a.onEntered=a.onEntered.bind(a),a.onExiting=a.onExiting.bind(a),a.onExited=a.onExited.bind(a),a.checkUpReads=a.checkUpReads.bind(a),a.toggleRead=a.toggleRead.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],itemsLu:[],readStatus:!1,readText:"Lu",btn_class_read:"success",likeAutorise:!0,loaded:!1},a.handleSubmitRead=a.handleSubmitRead.bind(a),a}return i(t,e),t.prototype.onEntering=function(){},t.prototype.onEntered=function(){},t.prototype.onExiting=function(){},t.prototype.onExited=function(){},t.prototype.toggleRead=function(){var e=this;this.state.lecteur&&this.state.loaded&&(this.state.readStatus?(this.setState({readStatus:!1}),this.setState({readText:"Lu"}),this.setState({btn_class_read:"success"}),this.state.itemsLu.map(function(t){t.user==e.state.lecteur.email&&t.chapitre==e.props.contentChapitre.titreChapitre&&e.removeItem(t.id)})):(this.setState({readStatus:!0}),this.setState({readText:"Non lu"}),this.setState({btn_class_read:"danger"})))},t.prototype.componentWillMount=function(){this.state.lecteur=f.default.load("lecteur")},t.prototype.componentDidMount=function(){},t.prototype.checkUpReads=function(){var e=this;this.state.lecteur&&this.state.itemsLu.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&t.user==e.state.lecteur.email&&(e.setState({readStatus:!0}),e.setState({readText:"Non lu"}),e.setState({btn_class_read:"danger"}))})},t.prototype.handleSubmitRead=function(e){},t.prototype.login=function(){var e=this;auth.signInWithPopup(provider).then(function(t){var n=t.user;e.setState({user:n}),f.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.removeItem=function(e){},t.prototype.render=function(){return u.default.createElement("form",{onSubmit:this.handleSubmitRead,className:"float-left d-content"},u.default.createElement(c.Button,{color:this.state.btn_class_read},this.state.readText),u.default.createElement(c.Collapse,{isOpen:this.state.readStatus,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited,className:"float-left"}))},t}(u.default.Component);t.default=p,e.exports=t.default},196:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),u=a(l),s=n(5),c=a(s),d=n(3),f=a(d);n(6);var p=n(4),m=n(9),h=a(m),b=n(8),E=a(b),g=n(7),y=a(g),k=n(65),_=a(k),S=n(67),v=a(S),x=n(66),w=(a(x),function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.login=a.login.bind(a),a.state={user:null,lecteur:null},a}return i(t,e),t.prototype.componentWillMount=function(){this.state.lecteur=y.default.load("lecteur")},t.prototype.login=function(){var e=this;auth.signInWithPopup(provider).then(function(t){var n=t.user;e.setState({user:n}),y.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.render=function(){var e=this,t=this.props.data;return u.default.createElement("div",{id:"page-wrapper"},u.default.createElement(h.default,null),u.default.createElement("div",null,u.default.createElement(p.Breadcrumb,{className:"mb-0"},u.default.createElement(p.BreadcrumbItem,null,u.default.createElement(f.default,{to:"/"},"Accueil")),u.default.createElement(p.BreadcrumbItem,null,u.default.createElement(f.default,{to:"/histoires"},"Nos Histoires de l'Univers...")),u.default.createElement(p.BreadcrumbItem,{active:!0},t.contentfulRoman.titreRoman))),u.default.createElement("div",{className:"equiv"},u.default.createElement(f.default,{className:"text-white",to:"/en"+t.contentfulRoman.equivalentUrl},u.default.createElement(p.Button,{className:"float-right",color:"primary"},"En"))),u.default.createElement("div",{className:"my-5"},u.default.createElement(p.Container,null,u.default.createElement(p.Row,null,u.default.createElement(p.Col,{lg:"12"},u.default.createElement("h1",{className:"display-4 mb-5"},t.contentfulRoman.titreRoman))),t.contentfulRoman.imageCouverture?u.default.createElement(p.Row,null,u.default.createElement(p.Col,{lg:"4"},u.default.createElement("img",{className:"img-fluid mb-5",src:t.contentfulRoman.imageCouverture.file.url})),u.default.createElement(p.Col,{lg:"8"},u.default.createElement("div",{className:"lead",dangerouslySetInnerHTML:{__html:t.contentfulRoman.resume.childMarkdownRemark.html}}),u.default.createElement(p.Progress,{animated:!0,value:t.contentfulRoman.chapitreActuel/t.contentfulRoman.maximumChapitre*100},t.contentfulRoman.chapitreActuel+"/"+t.contentfulRoman.maximumChapitre),u.default.createElement(p.ListGroup,{className:"pt-5"},t.allContentfulChapitre.edges.map(function(t){return u.default.createElement(p.ListGroupItem,{className:"border-0 pl-0 pt-0",key:t.node.id},u.default.createElement(f.default,{to:"/histoires/chapitre/"+t.node.slug},t.node.titreChapitre),"null"!=e.state.lecteur?u.default.createElement(u.default.Fragment,null,u.default.createElement("span",null," ",u.default.createElement(v.default,{contentChapitre:t.node})),u.default.createElement("span",null," ",u.default.createElement(_.default,{contentChapitre:t.node}))):u.default.createElement("span",null))})))):u.default.createElement(p.Row,null,u.default.createElement(p.Col,{lg:"12"},u.default.createElement("div",{className:"lead",dangerouslySetInnerHTML:{__html:t.contentfulRoman.resume.childMarkdownRemark.html}}),u.default.createElement(p.Progress,{animated:!0,value:t.contentfulRoman.chapitreActuel/t.contentfulRoman.maximumChapitre*100},t.contentfulRoman.chapitreActuel+"/"+t.contentfulRoman.maximumChapitre),u.default.createElement(p.ListGroup,{className:"pt-5"},t.allContentfulChapitre.edges.map(function(t){return u.default.createElement(p.ListGroupItem,{className:"border-0 pl-0 pt-0",key:t.node.id},u.default.createElement(f.default,{to:"/histoires/chapitre/"+t.node.slug},t.node.titreChapitre),"null"!=e.state.lecteur?u.default.createElement(u.default.Fragment,null,u.default.createElement("span",null," ",u.default.createElement(v.default,{contentChapitre:t.node})),u.default.createElement("span",null," ",u.default.createElement(_.default,{contentChapitre:t.node}))):u.default.createElement("span",null))})))),u.default.createElement("br",null))),u.default.createElement(E.default,null))},t}(l.Component));w.propTypes={data:c.default.object.isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-roman-js-86067c6a9dd8377aa791.js.map