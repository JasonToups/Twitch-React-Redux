(this["webpackJsonptwitch-react-redux"]=this["webpackJsonptwitch-react-redux"]||[]).push([[0],{16:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(10),a=n.n(s),r=n(11),o=n(7),u=(n(16),n(9)),l=n(2),d=n(18),h=n(19),j=n(22),g=n(21),b="SIGN_IN",O="SIGN_OUT",m=n(1),p=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"810176087993-ggor5bvp2005ulsjdkg9prcc16ruk6hp.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(m.jsxs)("button",{className:"ui red google button",onClick:this.onSignOutClick,children:[Object(m.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(m.jsxs)("button",{className:"ui red google button",onClick:this.onSignInClick,children:[Object(m.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.renderAuthButton()})}}]),n}(c.a.Component),x=Object(r.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:b,payload:e}},signOut:function(){return{type:O}}})(p),S=function(){return Object(m.jsxs)("div",{className:"header ui secondary pointing menu",children:[Object(m.jsx)(u.b,{to:"/",className:"site-name link item",children:"Streamy"}),Object(m.jsxs)("div",{className:"menu-right right menu",children:[Object(m.jsx)(u.b,{to:"/",className:"link item",children:"All Streams"}),Object(m.jsx)(x,{})]})]})},f=function(){return Object(m.jsx)("div",{className:"stream-create",children:"StreamCreate"})},I=function(){return Object(m.jsx)("div",{className:"stream-delete",children:"StreamDelete"})},v=function(){return Object(m.jsx)("div",{className:"stream-edit",children:"StreamEdit"})},N=function(){return Object(m.jsx)("div",{className:"stream-list",children:"Streamlist"})},w=function(){return Object(m.jsx)("div",{className:"stream-show",children:"StreamShow"})},k=function(){return Object(m.jsx)("div",{className:"app ui container",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(S,{}),Object(m.jsxs)("div",{className:"pages",children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(m.jsx)(l.a,{path:"/streams/new",exact:!0,component:f}),Object(m.jsx)(l.a,{path:"/streams/edit",exact:!0,component:v}),Object(m.jsx)(l.a,{path:"/streams/delete",exact:!0,component:I}),Object(m.jsx)(l.a,{path:"/streams/show",exact:!0,component:w})]})]})})},C=n(5),y={isSignedIn:null,userId:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(C.a)(Object(C.a)({},e),{},{isSignedIn:!0,userId:t.payload});case O:return Object(C.a)(Object(C.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},A=Object(o.b)({auth:_}),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))},D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,T=Object(o.d)(A,D(Object(o.a)()));a.a.render(Object(m.jsxs)(c.a.StrictMode,{children:[Object(m.jsx)(r.a,{store:T,children:Object(m.jsx)(k,{})}),","]}),document.getElementById("root")),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.36056a39.chunk.js.map