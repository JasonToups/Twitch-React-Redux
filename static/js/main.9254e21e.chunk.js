(this["webpackJsonptwitch-react-redux"]=this["webpackJsonptwitch-react-redux"]||[]).push([[0],{11:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(12),s=n.n(a),r=(n(11),n(6)),o=n(2),d=n(13),l=n(14),u=n(18),h=n(17),j=n(1),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isSignedIn:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"107125096536-gpo3gvliolhcs4hpu5f3kaam6oh7avdm.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),console.log(e.auth),console.log(e.auth.isSignedIn.get()),e.setState({isSignedIn:e.auth.isSignedIn.get()}),console.log(e.state.isSignedIn)}))}))}},{key:"renderAuthButton",value:function(){return null===this.state.isSignedIn?Object(j.jsx)("div",{children:"I don't know if we are signed in"}):this.state.isSignedIn?Object(j.jsx)("div",{children:"I am signed in! "}):Object(j.jsx)("div",{children:"I am not signed in!"})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.renderAuthButton()})}}]),n}(c.a.Component),b=m,g=function(){return Object(j.jsxs)("div",{className:"header ui secondary pointing menu",children:[Object(j.jsx)(r.b,{to:"/",className:"site-name link item",children:"Streamy"}),Object(j.jsxs)("div",{className:"menu-right right menu",children:[Object(j.jsx)(r.b,{to:"/",className:"link item",children:"All Streams"}),Object(j.jsx)(b,{})]})]})},x=function(){return Object(j.jsx)("div",{className:"stream-create",children:"StreamCreate"})},p=function(){return Object(j.jsx)("div",{className:"stream-delete",children:"StreamDelete"})},O=function(){return Object(j.jsx)("div",{className:"stream-edit",children:"StreamEdit"})},v=function(){return Object(j.jsx)("div",{className:"stream-list",children:"Streamlist"})},f=function(){return Object(j.jsx)("div",{className:"stream-show",children:"StreamShow"})},S=function(){return Object(j.jsx)("div",{className:"app ui container",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(g,{}),Object(j.jsxs)("div",{className:"pages",children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(j.jsx)(o.a,{path:"/streams/new",exact:!0,component:x}),Object(j.jsx)(o.a,{path:"/streams/edit",exact:!0,component:O}),Object(j.jsx)(o.a,{path:"/streams/delete",exact:!0,component:p}),Object(j.jsx)(o.a,{path:"/streams/show",exact:!0,component:f})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.9254e21e.chunk.js.map