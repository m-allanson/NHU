webpackJsonp([0xffe1a253b3a1],{73:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=a(s),u=n(3),c=(a(u),n(4)),p=n(7),d=a(p),f=n(8),h=a(f),m=function(e){function t(n){r(this,t);var a=i(this,e.call(this,n));return a.onEntering=a.onEntering.bind(a),a.onEntered=a.onEntered.bind(a),a.onExiting=a.onExiting.bind(a),a.onExited=a.onExited.bind(a),a.checkUpLikes=a.checkUpLikes.bind(a),a.toggleLike=a.toggleLike.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],nombreLike:0,likeStatus:!1,likeText:"Like",btn_class_like:"success",likeAutorise:!0,loaded:!1},a.handleSubmitLike=a.handleSubmitLike.bind(a),a}return o(t,e),t.prototype.onEntering=function(){},t.prototype.onEntered=function(){},t.prototype.onExiting=function(){},t.prototype.onExited=function(){},t.prototype.toggleLike=function(){var e=this;this.state.lecteur&&this.state.loaded&&(this.state.likeStatus?(this.setState({likeStatus:!1}),this.setState({likeText:"Like"}),this.setState({nombreLike:this.state.nombreLike-1}),this.setState({btn_class_like:"success"}),this.state.items.map(function(t){t.user==e.state.lecteur.email&&t.chapitre==e.props.contentChapitre.titreChapitre&&e.removeItem(t.id)})):(this.setState({likeStatus:!0}),this.setState({likeText:"Unlike"}),this.setState({nombreLike:this.state.nombreLike+1}),this.setState({btn_class_like:"danger"})))},t.prototype.componentWillMount=function(){this.state.lecteur=h.default.load("lecteur")},t.prototype.componentDidMount=function(){var e=this,t=d.default.database().ref("likes");t.on("value",function(t){var n=t.val(),a=[];for(var r in n)a.push({id:r,chapitre:n[r].chapitre,user:n[r].user});e.setState({items:a}),e.state.loaded||(e.checkUpLikes(),e.setState({loaded:!0}))})},t.prototype.checkUpLikes=function(){var e=this;this.setState({nombreLike:0}),this.state.lecteur&&this.state.items.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&(t.user==e.state.lecteur.email&&(e.setState({likeStatus:!0}),e.setState({likeText:"Unlike"}),e.setState({btn_class_like:"danger"})),e.setState({nombreLike:e.state.nombreLike+1}))})},t.prototype.handleSubmitLike=function(e){var t=this;e.preventDefault();var n=d.default.database().ref("likes");if(!this.state.likeStatus&&this.state.loaded&&(this.state.items.map(function(e){e.chapitre==t.props.contentChapitre.titreChapitre&&e.user==t.state.lecteur.email&&t.setState({likeAutorise:!1})}),this.state.likeAutorise)){var a={user:this.state.lecteur.email,chapitre:this.props.contentChapitre.titreChapitre,nomRoman:this.props.contentChapitre.nomRoman};n.push(a)}this.toggleLike()},t.prototype.login=function(){var e=this;p.auth.signInWithPopup(p.provider).then(function(t){var n=t.user;e.setState({user:n}),h.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.removeItem=function(e){if("Unlike"==this.state.likeText){var t=d.default.database().ref("/likes/"+e);t.remove()}},t.prototype.render=function(){return l.default.createElement("form",{onSubmit:this.handleSubmitLike,className:"float-left d-content"},l.default.createElement(c.Button,{color:this.state.btn_class_like},this.state.nombreLike+" | "+this.state.likeText),l.default.createElement(c.Collapse,{isOpen:this.state.likeStatus,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited,className:"float-left"}))},t}(l.default.Component);t.default=m,e.exports=t.default},74:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=a(s),u=n(3),c=(a(u),n(4)),p=n(7),d=a(p),f=n(8),h=a(f),m=function(e){function t(n){r(this,t);var a=i(this,e.call(this,n));return a.checkUpLikes=a.checkUpLikes.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],nombreLike:0,btn_class_like:"success",likeAutorise:!1,loaded:!1},a}return o(t,e),t.prototype.componentWillMount=function(){this.state.lecteur=h.default.load("lecteur")},t.prototype.componentDidMount=function(){var e=this,t=d.default.database().ref("likes");t.on("value",function(t){var n=t.val(),a=[];for(var r in n)a.push({id:r,chapitre:n[r].chapitre,user:n[r].user});e.setState({items:a}),e.state.loaded||(e.checkUpLikes(),e.setState({loaded:!0}))})},t.prototype.checkUpLikes=function(){var e=this;this.setState({nombreLike:0}),this.state.lecteur&&this.state.items.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&(t.user==e.state.lecteur.email&&(e.setState({likeStatus:!0}),e.setState({likeText:"Je n'aime plus"}),e.setState({btn_class_like:"danger"})),e.setState({nombreLike:e.state.nombreLike+1}))})},t.prototype.login=function(){var e=this;p.auth.signInWithPopup(p.provider).then(function(t){var n=t.user;e.setState({user:n}),h.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.render=function(){return l.default.createElement(c.Button,{color:this.state.btn_class_like,onClick:this.login},this.state.nombreLike+" | Login to give a like")},t}(l.default.Component);t.default=m,e.exports=t.default},75:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=a(s),u=n(3),c=(a(u),n(4)),p=n(7),d=a(p),f=n(8),h=a(f),m=function(e){function t(n){r(this,t);var a=i(this,e.call(this,n));return a.onEntering=a.onEntering.bind(a),a.onEntered=a.onEntered.bind(a),a.onExiting=a.onExiting.bind(a),a.onExited=a.onExited.bind(a),a.checkUpReads=a.checkUpReads.bind(a),a.toggleRead=a.toggleRead.bind(a),a.login=a.login.bind(a),a.state={user:null,lecteur:null,nomRoman:"",items:[],itemsLu:[],readStatus:!1,readText:"Mark read",btn_class_read:"success",likeAutorise:!0,loaded:!1},a.handleSubmitRead=a.handleSubmitRead.bind(a),a}return o(t,e),t.prototype.onEntering=function(){},t.prototype.onEntered=function(){},t.prototype.onExiting=function(){},t.prototype.onExited=function(){},t.prototype.toggleRead=function(){var e=this;this.state.lecteur&&this.state.loaded&&(this.state.readStatus?(this.setState({readStatus:!1}),this.setState({readText:"Mark read"}),this.setState({btn_class_read:"success"}),this.state.itemsLu.map(function(t){t.user==e.state.lecteur.email&&t.chapitre==e.props.contentChapitre.titreChapitre&&e.removeItem(t.id)})):(this.setState({readStatus:!0}),this.setState({readText:"Unmark read"}),this.setState({btn_class_read:"danger"})))},t.prototype.componentWillMount=function(){this.state.lecteur=h.default.load("lecteur")},t.prototype.componentDidMount=function(){var e=this,t=d.default.database().ref("reads");t.on("value",function(t){var n=t.val(),a=[];for(var r in n)a.push({id:r,chapitre:n[r].chapitre,chapitreSlug:n[r].slug,user:n[r].user,nomRoman:n[r].nomRoman});e.setState({itemsLu:a}),e.state.loaded||(e.checkUpReads(),e.setState({loaded:!0}))})},t.prototype.checkUpReads=function(){var e=this;this.state.lecteur&&this.state.itemsLu.map(function(t){t.chapitre==e.props.contentChapitre.titreChapitre&&t.user==e.state.lecteur.email&&(e.setState({readStatus:!0}),e.setState({readText:"Unmark read"}),e.setState({btn_class_read:"danger"}))})},t.prototype.handleSubmitRead=function(e){var t=this;e.preventDefault();var n=d.default.database().ref("reads");if(!this.state.readStatus&&this.state.loaded&&(this.state.items.map(function(e){e.chapitre==t.props.contentChapitre.titreChapitre&&e.user==t.state.lecteur.email&&t.setState({likeAutorise:!1})}),this.state.likeAutorise)){var a={user:this.state.lecteur.email,chapitre:this.props.contentChapitre.titreChapitre,chapitreSlug:this.props.contentChapitre.slug,nomRoman:this.props.contentChapitre.nomRoman,chapitreApres:this.props.contentChapitre.chapitreApres,codeChapitre:this.props.contentChapitre.codeChapitre};n.push(a)}this.toggleRead()},t.prototype.login=function(){var e=this;p.auth.signInWithPopup(p.provider).then(function(t){var n=t.user;e.setState({user:n}),h.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.removeItem=function(e){if("Unmark read"==this.state.readText){var t=d.default.database().ref("/reads/"+e);t.remove()}},t.prototype.render=function(){return l.default.createElement("form",{onSubmit:this.handleSubmitRead,className:"float-left d-content"},l.default.createElement(c.Button,{color:this.state.btn_class_read},this.state.readText),l.default.createElement(c.Collapse,{isOpen:this.state.readStatus,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited,className:"float-left"}))},t}(l.default.Component);t.default=m,e.exports=t.default},179:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(2),l=a(s),u=n(5),c=a(u),p=n(3),d=a(p);n(6);var f=n(4),h=n(12),m=a(h),b=n(11),E=a(b),k=n(73),y=a(k),v=n(75),g=a(v),S=n(74),C=(a(S),n(7)),x=n(8),_=a(x),w=function(e){function t(n){r(this,t);var a=i(this,e.call(this,n));return a.login=a.login.bind(a),a.state={user:null,lecteur:null},a}return o(t,e),t.prototype.componentWillMount=function(){this.state.lecteur=_.default.load("lecteur")},t.prototype.login=function(){var e=this;C.auth.signInWithPopup(C.provider).then(function(t){var n=t.user;e.setState({user:n}),_.default.save("lecteur",e.state.user,{path:"/"}),window.location.reload()})},t.prototype.render=function(){var e=this.props.data;return l.default.createElement("div",{id:"page-wrapper"},l.default.createElement(m.default,null),l.default.createElement("div",null,l.default.createElement(f.Breadcrumb,{className:"mb-0"},l.default.createElement(f.BreadcrumbItem,null,l.default.createElement(d.default,{to:"/en"},"Homepage")),l.default.createElement(f.BreadcrumbItem,null,l.default.createElement(d.default,{to:"/en/stories"},"Our Univese stories...")),l.default.createElement(f.BreadcrumbItem,null,l.default.createElement(d.default,{to:"/en/stories/"+e.contentfulChapitre.nomRoman},"Story")),l.default.createElement(f.BreadcrumbItem,{active:!0},e.contentfulChapitre.titreChapitre))),l.default.createElement("div",{className:"equiv"},l.default.createElement(d.default,{className:"text-white",to:e.contentfulChapitre.equivalentUrl},l.default.createElement(f.Button,{className:"float-right",color:"primary"},"Fr"))),l.default.createElement("div",null,l.default.createElement(f.Container,null,l.default.createElement(f.Row,null,l.default.createElement(f.Col,{lg:{size:10,offset:1},md:"12"},l.default.createElement("h1",{className:"page-header display-4 text-center my-5"},e.contentfulChapitre.titreChapitre),l.default.createElement("div",{className:"text-justify lecture-texte",dangerouslySetInnerHTML:{__html:e.contentfulChapitre.texte.childMarkdownRemark.html}}))))),l.default.createElement("div",{className:"py-5"},l.default.createElement(f.Container,null,l.default.createElement(f.Row,null,l.default.createElement(f.Col,{lg:{size:10,offset:1},md:"12"},"null"!=this.state.lecteur?l.default.createElement(f.Row,null,l.default.createElement(f.Col,{xs:"6",className:"text-center"},l.default.createElement(g.default,{contentChapitre:e.contentfulChapitre})),l.default.createElement(f.Col,{xs:"6",className:"text-center"},l.default.createElement(y.default,{contentChapitre:e.contentfulChapitre}))):l.default.createElement(f.Row,null,l.default.createElement(f.Col,{xs:"12",className:"text-center"})))))),l.default.createElement("div",{className:"py-5"},l.default.createElement(f.Container,null,l.default.createElement(f.Row,null,l.default.createElement(f.Col,{lg:{size:10,offset:1},md:"12"},l.default.createElement(f.Row,null,l.default.createElement(f.Col,{xs:"4",className:"text-left pl-0"},e.contentfulChapitre.chapitreAvant?l.default.createElement(d.default,{className:"btn btn-primary",to:"/en/stories/chapter/"+chapitreAvant},"Previous chapter"):""),l.default.createElement(f.Col,{xs:"4",className:"text-center"},l.default.createElement(d.default,{className:"btn btn-primary",to:"/en/stories/"+e.contentfulChapitre.nomRoman},"Go back to the story")),l.default.createElement(f.Col,{xs:"4",className:"text-right pr-0"},e.contentfulChapitre.chapitreApres?l.default.createElement(d.default,{className:"btn btn-primary",to:"/en/stories/chapter/"+chapitreApres},"Next chapter"):"")))))),l.default.createElement(E.default,null))},t}(s.Component);w.propTypes={data:c.default.object.isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-chapter-en-js-ce8e921d34588fe7cf44.js.map