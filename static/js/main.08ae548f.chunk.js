(this["webpackJsonppomo-tracker-react"]=this["webpackJsonppomo-tracker-react"]||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=n(3),l=n(12),u=n(10),j=n(7),d=n(8),b=function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.name,t.value))},h=function(e){var t=e.stateToRegister,n=e.stateToStats,o=Object(a.useReducer)(b,{}),c=Object(i.a)(o,2),r=c[0],l=c[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),m=h[0],O=h[1];Object(a.useEffect)((function(){document.cookie&&n()}));var p=function(e){l({name:e.target.name,value:e.target.value})};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"mb-4",children:"Login"}),Object(s.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.text()})).then((function(e){"User logged in"===e?(n(),O("")):(console.log("\ud83d\ude80 ~ file: Login.js ~ line 35 ~ message",e),O(e))})).catch((function(e){O("Couldn't log in."),console.error(e)}))},children:[Object(s.jsxs)(j.a.Group,{controlId:"EmailUsername",children:[Object(s.jsx)(j.a.Label,{children:"Username/Email"}),Object(s.jsx)(j.a.Control,{onChange:p,value:r.username,name:"user_id",type:"text",placeholder:"Enter username or email"})]}),Object(s.jsxs)(j.a.Group,{controlId:"LoginPassword",children:[Object(s.jsx)(j.a.Label,{children:"Password"}),Object(s.jsx)(j.a.Control,{onChange:p,value:r.username,name:"password",type:"password",placeholder:"Enter password"})]}),Object(s.jsx)("p",{className:"text-danger font-weight-bold",children:m}),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)(d.a,{variant:"primary",type:"submit",style:{boxShadow:"none"},children:"Login"}),Object(s.jsx)(d.a,{variant:"link",onClick:t,style:{boxShadow:"none",position:"absolute",bottom:-10,right:0,color:"darkslategray"},children:"Register"})]})]})]})},m=function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.name,t.value))},O=function(e){var t=e.stateToStats,n=e.stateToLogin,o=Object(a.useReducer)(m,{}),c=Object(i.a)(o,2),r=c[0],l=c[1],u=Object(a.useState)(!1),b=Object(i.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),x=f[0],g=f[1];var v=function(e){l({name:e.target.name,value:e.target.value})};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"mb-4",children:"Register"}),Object(s.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),r.password&&r.username&&r.email?fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.text()})).then((function(e){"User registered."===e?(console.log("\ud83d\ude80 ~ file: Register.js ~ line 28 ~ message",e),O(!1),t()):(console.log("\ud83d\ude80 ~ file: Register.js ~ line 28 ~ message",e),e.search(/unique/)>-1?g("Username or email already exists."):g(e),O(!0))})).catch((function(e){console.error("\ud83d\ude80 ~ file: Register.js ~ line 35 ~ error",e),O(!0)})):(g("Missing field in register form."),O(!0))},children:[Object(s.jsxs)(j.a.Group,{controlId:"Username",children:[Object(s.jsx)(j.a.Label,{children:"Username"}),Object(s.jsx)(j.a.Control,{onChange:v,value:r.username,type:"text",name:"username",placeholder:"Type a username"})]}),Object(s.jsxs)(j.a.Group,{controlId:"Email",children:[Object(s.jsx)(j.a.Label,{children:"Email"}),Object(s.jsx)(j.a.Control,{onChange:v,value:r.email,type:"email",name:"email",placeholder:"Type your email"})]}),Object(s.jsxs)(j.a.Group,{controlId:"Password",children:[Object(s.jsx)(j.a.Label,{children:"Password"}),Object(s.jsx)(j.a.Control,{onChange:v,value:r.password,type:"password",name:"password",placeholder:"Type a password"})]}),h&&Object(s.jsx)("p",{className:"text-danger font-weight-bold",children:x}),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)(d.a,{variant:"primary",type:"submit",style:{boxShadow:"none"},children:"Register"}),Object(s.jsx)(d.a,{variant:"link",onClick:n,style:{boxShadow:"none",position:"absolute",bottom:-10,right:0,color:"darkslategray"},children:"Login"})]})]})]})},p=function(e){return e<10?"0"+e.toString():e.toString()},f=function(e){var t="";return e>0&&(t=e.toString()+":"),t},x=function(e){var t=e.stats,n=e.stateToLogin,o=e.setStats,c=Object(a.useState)(""),r=Object(i.a)(c,2),l=r[0],u=r[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),h=b[0],m=b[1];Object(a.useEffect)((function(){var e=!0;return fetch("/main-stats").then((function(e){return e.json()})).then((function(t){e&&o((function(){return t}))})).catch((function(e){u("Sorry. There was a problem getting the stats."),m(!0)})),function(){e=!1}}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"mb-1 mt-xl-5",children:"Stats"}),!h&&t.username?Object(s.jsxs)("h3",{className:"mb-5",children:["Hello, ",t.username,"."]}):null,Object(s.jsx)("p",{className:"text-danger font-weight-bold",children:h?l:""}),Object(s.jsx)("h4",{children:"Today."}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(s.jsx)("span",{children:t.pomoToday})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(s.jsxs)("span",{children:[f(Math.floor(t.secToday/3600)),p(Math.floor(t.secToday/60%60)),":",p(Math.floor(t.secToday%60))]})]}),Object(s.jsx)("h4",{className:"mt-3",children:"This week."}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(s.jsx)("span",{children:t.pomoWeek})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(s.jsxs)("span",{children:[f(Math.floor(t.secWeek/3600)),p(Math.floor(t.secWeek/60%60)),":",p(Math.floor(t.secWeek%60))]})]}),Object(s.jsx)("h4",{className:"mt-3",children:"This month."}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(s.jsx)("span",{children:t.pomoMonth})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(s.jsxs)("span",{children:[f(Math.floor(t.secMonth/3600)),p(Math.floor(t.secMonth/60%60)),":",p(Math.floor(t.secMonth%60))]})]}),Object(s.jsx)(d.a,{variant:"outline-secondary",className:"btn-sm mt-3 float-right",style:{boxShadow:"none"},onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){"Session finished."===e?(u(""),m(!1),n()):(m(!0),u("Sorry. Couldn't log out."))})).catch((function(e){m(!0),u("Sorry. Couldn't log out."),console.error("\ud83d\ude80 ~ file: Register.js ~ line 35 ~ error",e.message)}))},children:"Logout"})]})};var g=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},v=n.p+"static/media/alarm_sound.b2009aa7.mp3",S=function(e){var t=e.isRunning,n=e.resetTimer,o=e.resetValue,c=e.resetedFunc,r=e.sessionOver,i=e.setSessionOver,l=e.mode,u=e.minutes,j=e.seconds,d=e.setMinutes,b=e.setSeconds;g((function(){r?j<59?b(j+1):u<60&&(b(0),d(u+1)):j>0?b((function(e){return e-1})):u>0?(b(59),d((function(e){return e-1}))):(console.log("Setting extra state"),i(!0),h.play())}),t?1e3:null),Object(a.useEffect)((function(){var e="";if(r)e+="Extra - ";else switch(l){case"pomodoro":e+="Pomodoro - ";break;case"break":e+="Break - ";break;case"long-break":e+="Long Break - "}document.title=e+"".concat(m(u),":").concat(m(j))}),[u,j,l]),Object(a.useEffect)((function(){n&&(d(o),b(0),c())}),[n]);var h=new Audio(v);var m=function(e){return e<10?"0"+e.toString():e.toString()};return Object(s.jsxs)("div",{className:"display-2 font-weight-bold mb-2",children:[m(u),":",m(j)]})};var k=function(e){var t=e.updateState,n=e.sessionState,o=e.resetContinue,c=e.setResetContinue,r=Object(a.useState)("Stop"),l=Object(i.a)(r,2),u=l[0],j=l[1];Object(a.useEffect)((function(){o&&(j("Stop"),c(!1))}),[o]);var b=function(e){"wait"!==n&&(j(e),t("Continue"===e?"stop":"continue"))};return Object(s.jsxs)("div",{className:"ml-3",children:[Object(s.jsxs)(d.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return t("run")},children:[" ","Start"]}),Object(s.jsx)(d.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return b("Stop"===u?"Continue":"Stop")},children:u}),Object(s.jsx)(d.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return t("wait")},children:"End"})]})};var y=function(e){var t=e.changeMode,n=e.radioName,a=e.inputName,o=e.inputValue,c=e.setInputValue,r=e.inputChecked,i=e.invalidInput,l=e.setInvalidInput;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{style:{width:"110px",display:"inline-block"},children:[Object(s.jsx)("input",{type:"radio",className:"mr-1",id:n,name:"session-type",value:n,onClick:function(){return t(n)},checked:r}),Object(s.jsx)("label",{className:"input-label",children:a})]}),Object(s.jsx)("input",{className:"input-field",type:"text",value:o,onChange:function(e){return function(e){if(r){var t=Number(e.target.value);isNaN(t)?l(!0):t>0&&t<60&&Number.isInteger(t)?l(!1):l(!0),c(e.target.value)}}(e)},size:"5"}),Object(s.jsx)("span",{children:" min"}),i?Object(s.jsx)("span",{className:"ml-2 text-danger font-weight-bold",children:"Invalid Input"}):null]})};var T=function(e){var t=e.changeMode,n=e.mode,o=e.setNextTimer,c=e.setResetTimer,r=e.checkTextInput,l=e.setCheckTextInput,u=Object(a.useState)("25"),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(a.useState)("5"),m=Object(i.a)(h,2),O=m[0],p=m[1],f=Object(a.useState)("15"),x=Object(i.a)(f,2),g=x[0],v=x[1],S=Object(a.useState)({pomodoro:!0,break:!1,longBreak:!1}),k=Object(i.a)(S,2),T=k[0],w=k[1],N=Object(a.useState)(!1),C=Object(i.a)(N,2),I=C[0],M=C[1],L=Object(a.useState)(!1),E=Object(i.a)(L,2),R=E[0],P=E[1],B=Object(a.useState)(!1),V=Object(i.a)(B,2),W=V[0],U=V[1];return Object(a.useEffect)((function(){switch(n){case"pomodoro":w({pomodoro:!0,break:!1,longBreak:!1}),o(I?25:parseInt(d));break;case"break":w({pomodoro:!1,break:!0,longBreak:!1}),o(R?5:parseInt(O));break;case"long-break":w({pomodoro:!1,break:!1,longBreak:!0}),o(W?15:parseInt(g))}l(!1),r&&c(!0)}),[n,r]),Object(s.jsxs)("div",{className:"mt-5",children:[Object(s.jsx)(y,{changeMode:t,radioName:"pomodoro",inputName:"Pomodoro",inputValue:d,setInputValue:b,inputChecked:T.pomodoro,invalidInput:I,setInvalidInput:M}),Object(s.jsx)(y,{changeMode:t,radioName:"break",inputName:"Break",inputValue:O,setInputValue:p,inputChecked:T.break,invalidInput:R,setInvalidInput:P}),Object(s.jsx)(y,{changeMode:t,radioName:"long-break",inputName:"Long Break",inputValue:g,setInputValue:v,inputChecked:T.longBreak,invalidInput:W,setInvalidInput:U})]})},w=n(13),N=n(11),C=n(9),I=n.p+"static/media/click.07b2086f.mp3";var M=function(e){var t=e.userState,n=e.minutes,o=e.seconds,c=e.setMinutes,r=e.setSeconds,l=e.stats,j=e.setStats,d=Object(a.useState)(25),b=Object(i.a)(d,2),h=b[0],m=b[1],O=Object(a.useState)("pomodoro"),p=Object(i.a)(O,2),f=p[0],x=p[1],g=Object(a.useState)(!0),v=Object(i.a)(g,2),y=v[0],M=v[1],L=Object(a.useState)(!1),E=Object(i.a)(L,2),R=E[0],P=E[1],B=Object(a.useState)(!1),V=Object(i.a)(B,2),W=V[0],U=V[1],F=Object(a.useState)("wait"),G=Object(i.a)(F,2),J=G[0],D=G[1],A=Object(a.useState)(!1),_=Object(i.a)(A,2),q=_[0],z=_[1],H=Object(a.useState)(0),K=Object(i.a)(H,2),Q=K[0],X=K[1],Y=Object(a.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)("Pomodoro"),ne=Object(i.a)(te,2),se=ne[0],ae=ne[1],oe=new Audio(I),ce=function(){var e=0,t=0;q?(e=60*(h+n)+o,t=1):e=60*(h-n-1)+(60-o),j(Object(u.a)(Object(u.a)({},l),{},{secToday:l.secToday+e,pomoToday:l.pomoToday+t,secWeek:l.secWeek+e,pomoWeek:l.pomoWeek+t,secMonth:l.secMonth+e,pomoMonth:l.pomoMonth+t}));var s=t?"true":"false";fetch("/sendRecord",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:e,pomodoro:s})}).then((function(e){return e.text()})).then((function(e){})).catch((function(e){return console.log("error",e)}))},re=function(){"pomodoro"===f?Q<3?(x("break"),ie("break"),X((function(e){return e+1}))):(x("long-break"),ie("long-break"),X(0)):(x("pomodoro"),ie("pomodoro")),z(!1)},ie=function(e){switch(e){case"pomodoro":ae("Pomodoro");break;case"break":ae("Break");break;case"long-break":ae("Long Break")}};return Object(s.jsxs)(w.a,{fluid:!0,children:[Object(s.jsx)(N.a,{children:Object(s.jsx)(C.a,{md:{offset:2},children:Object(s.jsx)(S,{isRunning:W,resetTimer:y,resetValue:h,resetedFunc:function(){M(!1)},sessionOver:q,setSessionOver:z,mode:f,minutes:n,setMinutes:c,seconds:o,setSeconds:r})})}),Object(s.jsx)(N.a,{children:Object(s.jsx)(C.a,{md:{offset:1},children:q?Object(s.jsxs)("h3",{className:"text-danger",children:[se," session finished."]}):null})}),Object(s.jsx)(N.a,{children:Object(s.jsx)(C.a,{md:{offset:2},children:Object(s.jsx)(k,{updateState:function(e){switch(e){case"run":"wait"===J&&(P(!0),U(!0),D(e),oe.play());break;case"continue":"stop"===J&&(U(!0),D(e),oe.play());break;case"stop":"run"!==J&&"continue"!==J||(U(!1),D(e),oe.play());break;case"wait":"wait"!==J&&(U(!1),"stop"===J&&ee(!0),"stats"===t&&"pomodoro"===f&&ce(),(q||"pomodoro"!==f)&&re(),P(!0),oe.play(),D(e))}},sessionState:J,resetContinue:$,setResetContinue:ee})})}),Object(s.jsx)(N.a,{children:Object(s.jsx)(C.a,{md:{offset:2},children:Object(s.jsx)(T,{changeMode:function(e){"wait"===J&&(x(e),ie(e))},mode:f,setNextTimer:m,setResetTimer:M,checkTextInput:R,setCheckTextInput:P})})})]})};var L=function(){var e=Object(a.useState)("login"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),l=r[0],u=r[1],j=Object(a.useState)(0),d=Object(i.a)(j,2),b=d[0],m=d[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),g=f[0],v=f[1],S=Object(a.useState)({secToday:0,pomoToday:0,secWeek:0,pomoWeek:0,secMonth:0,pomoMonth:0}),k=Object(i.a)(S,2),y=k[0],T=k[1];return Object(s.jsx)(w.a,{fluid:!0,children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(C.a,{xl:4,md:3}),Object(s.jsx)(C.a,{xl:5,md:6,style:{marginTop:"25vh"},children:Object(s.jsx)(M,{userState:n,minutes:b,setMinutes:m,seconds:g,setSeconds:v,stats:y,setStats:T})}),Object(s.jsxs)(C.a,{xl:2,md:3,style:{marginTop:"10vh"},children:["login"===n&&Object(s.jsx)(h,{stateToRegister:function(){return o("register")},stateToStats:function(){return o("stats")},setUserName:u}),"register"===n&&Object(s.jsx)(O,{stateToStats:function(){return o("stats")},stateToLogin:function(){return o("login")}}),"stats"===n&&Object(s.jsx)(x,{userName:l,setUserName:u,stats:y,stateToLogin:function(){return o("login")},setStats:T})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),o(e),c(e)}))};n(27);r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.08ae548f.chunk.js.map