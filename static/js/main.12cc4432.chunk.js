(this["webpackJsonptwitch-react-redux"]=this["webpackJsonptwitch-react-redux"]||[]).push([[0],{241:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(50),i=n.n(c),s=n(13),o=n(8),u=n(108),l=(n(74),n(7)),d=n(6),j=n(25),h=n(26),b=n(30),m=n(29),p=n(243),O=n(242),g=n(15),f=n.n(g),v=n(32),x=n(104),S=n.n(x).a.create({baseURL:"http://localhost:3001"}),I=n(10),y=Object(I.a)(),N="SIGN_IN",w="SIGN_OUT",E="CREATE_STREAM",k="FETCH_STREAMS",C="FETCH_STREAM",A="DELETE_STREAM",T="EDIT_STREAM",_=n(2),D=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var n=t.input,r=t.label,a=t.meta,c="field ".concat(a.error&&a.touched?"error":"");return Object(_.jsxs)("div",{className:c,children:[Object(_.jsx)("label",{children:r}),Object(_.jsx)("input",Object(d.a)(Object(d.a)({},n),{},{autoComplete:"off"})),e.renderError(a)]})},e.onSubmit=function(t){e.props.createStream(t)},e}return Object(h.a)(n,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return Object(_.jsx)("div",{className:"ui error message field-error",children:Object(_.jsx)("div",{className:"header",children:t})})}},{key:"render",value:function(){return Object(_.jsx)("div",{className:"stream-create",children:Object(_.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error stream-create--form",children:[Object(_.jsx)(p.a,{name:"title",component:this.renderInput,label:"Enter Title"}),Object(_.jsx)(p.a,{name:"description",component:this.renderInput,label:"Enter Description"}),Object(_.jsx)("button",{className:"ui button primary",children:"Submit"})]})})}}]),n}(a.a.Component),M=Object(O.a)({form:"streamCreate",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(D),R=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(v.a)(f.a.mark((function t(n,r){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,S.post("/streams",Object(d.a)(Object(d.a)({},e),{},{userId:a}));case 3:c=t.sent,n({type:E,payload:c.data}),y.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(M),L=function(){return Object(_.jsx)("div",{className:"stream-delete",children:"StreamDelete"})},F=function(e){return console.log(e),Object(_.jsx)("div",{className:"stream-edit",children:"StreamEdit"})},U=n(23),B=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return Object(_.jsxs)("div",{className:"right floated content",children:[Object(_.jsx)(U.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary",children:"Edit"}),Object(_.jsx)("button",{className:"ui button negative",children:"Delete"})]})}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return Object(_.jsxs)("div",{className:"item",children:[e.renderAdmin(t),Object(_.jsx)("i",{className:"large middle aligned icon camera"}),Object(_.jsxs)("div",{className:"content",children:[t.title,Object(_.jsx)("div",{className:"description",children:t.description})]})]},t.id)}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return Object(_.jsx)("div",{style:{textAlign:"right"},children:Object(_.jsx)(U.a,{to:"/streams/new",className:"ui button primary",children:"Create Stream"})})}},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Streams"}),Object(_.jsx)("div",{className:"ui celled list",children:this.renderList()}),this.renderCreate()]})}}]),n}(a.a.Component),G=Object(s.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/streams");case 2:n=e.sent,t({type:k,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(B),P=function(){return Object(_.jsx)("div",{className:"stream-show",children:"StreamShow"})},H=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"810176087993-ggor5bvp2005ulsjdkg9prcc16ruk6hp.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(_.jsxs)("button",{className:"ui red google button",onClick:this.onSignOutClick,children:[Object(_.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(_.jsxs)("button",{className:"ui red google button",onClick:this.onSignInClick,children:[Object(_.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(_.jsx)("div",{children:this.renderAuthButton()})}}]),n}(a.a.Component),J=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:N,payload:e}},signOut:function(){return{type:w}}})(H),X=function(){return Object(_.jsxs)("div",{className:"header ui secondary pointing menu",children:[Object(_.jsx)(U.a,{to:"/",className:"site-name link item",children:"Twitch React"}),Object(_.jsxs)("div",{className:"menu-right right menu",children:[Object(_.jsx)(U.a,{to:"/",className:"link item",children:"All Streams"}),Object(_.jsx)(J,{})]})]})},Y=function(){return Object(_.jsx)("div",{className:"app ui container",children:Object(_.jsxs)(l.b,{history:y,children:[Object(_.jsx)(X,{}),Object(_.jsxs)("div",{className:"pages",children:[Object(_.jsx)(l.a,{path:"/",exact:!0,component:G}),Object(_.jsx)(l.a,{path:"/streams/new",exact:!0,component:R}),Object(_.jsx)(l.a,{path:"/streams/edit/:id",exact:!0,component:F}),Object(_.jsx)(l.a,{path:"/streams/delete",exact:!0,component:L}),Object(_.jsx)(l.a,{path:"/streams/show",exact:!0,component:P})]})]})})},K=n(244),V={isSignedIn:null,userId:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!0,userId:t.payload});case w:return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},z=n(31),Q=n(73),W=n.n(Q),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(d.a)(Object(d.a)({},e),W.a.mapKeys(t.payload,"id"));case C:case E:case T:return Object(d.a)(Object(d.a)({},e),{},Object(z.a)({},t.payload.id,t.payload));case A:return W.a.omit(e,t.payload);default:return e}},$=Object(o.c)({auth:q,form:K.a,streams:Z}),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,ne=Object(o.e)($,te(Object(o.a)(u.a)));i.a.render(Object(_.jsxs)(a.a.StrictMode,{children:[Object(_.jsx)(s.a,{store:ne,children:Object(_.jsx)(Y,{})}),","]}),document.getElementById("root")),ee()},74:function(e,t,n){}},[[241,1,2]]]);
//# sourceMappingURL=main.12cc4432.chunk.js.map