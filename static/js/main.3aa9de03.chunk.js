(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{37:function(e,t,c){},45:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(29),a=c.n(n),i=(c(37),c(17)),j=c(8),l=c(9),r=c(10),b=c(32),d=(c(41),c(42),c(43),b.a.initializeApp({apiKey:"AIzaSyDCKYTT-i64WJyTqWHa6cwR5rGFUC2fb2M",authDomain:"k-cart-578bd.firebaseapp.com",projectId:"k-cart-578bd",storageBucket:"k-cart-578bd.appspot.com",messagingSenderId:"398730349324",appId:"1:398730349324:web:8ef8220aebfb020fca1729",measurementId:"G-VSZE6P461X"})),h=c.p+"static/media/olx-logo.b3f099a2.png",o=c(2),O=Object(s.createContext)(null),u=Object(s.createContext)(null);function x(e){var t=e.children,c=Object(s.useState)(""),n=Object(l.a)(c,2),a=n[0],i=n[1];return Object(o.jsx)(u.Provider,{value:{user:a,setUser:i},children:t})}c(45);function m(){var e=Object(j.e)(),t=Object(r.useState)(""),c=Object(l.a)(t,2),s=c[0],n=c[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),b=i[0],u=i[1],x=Object(r.useState)(""),m=Object(l.a)(x,2),p=m[0],v=m[1],f=Object(r.useState)(""),g=Object(l.a)(f,2),N=g[0],C=g[1];Object(r.useContext)(O).firebase;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"signupParentDiv",children:[Object(o.jsx)("img",{width:"200px",height:"200px",src:h}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.auth().createUserWithEmailAndPassword(b,N).then((function(t){t.user.updateProfile({displayName:s}).then((function(){d.firestore().collection("users").add({id:t.user.uid,username:s,phone:p}).then((function(){e.push("/login")}))}))}))},children:[Object(o.jsx)("label",{htmlFor:"fname",children:"Username"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:s,onChange:function(e){return n(e.target.value)},type:"text",id:"fname",name:"name",defaultValue:"John"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:b,onChange:function(e){return u(e.target.value)},type:"email",id:"fname",name:"email",defaultValue:"John"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"lname",children:"Phone"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:p,onChange:function(e){return v(e.target.value)},type:"number",id:"lname",name:"phone",defaultValue:"Doe"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:N,onChange:function(e){return C(e.target.value)},type:"password",id:"lname",name:"password",defaultValue:"Doe"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{children:"Signup"})]}),Object(o.jsx)("a",{children:"Login"})]})})}var p=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{})})};c(53);var v=function(){var e=Object(j.e)(),t=Object(r.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(""),b=Object(l.a)(i,2),u=b[0],x=b[1];return Object(s.useContext)(O).firebase,Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"loginParentDiv",children:[Object(o.jsx)("img",{width:"200px",height:"200px",src:h}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.auth().signInWithEmailAndPassword(n,u).then((function(){e.push("/")})).catch((function(e){alert(e.message)}))},children:[Object(o.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:n,onChange:function(e){return a(e.target.value)},type:"email",id:"fname",name:"email",defaultValue:"John"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"password",value:u,onChange:function(e){return x(e.target.value)},id:"lname",name:"password",defaultValue:"Doe"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{children:"Login"})]}),Object(o.jsx)("a",{children:"Signup"})]})})};var f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(v,{})})};c(54);function g(){return Object(o.jsx)("svg",{width:"48px",height:"48px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(o.jsx)("path",{className:"rui-77aaa",d:"M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"})})}function N(e){return Object(o.jsx)("svg",{width:"25px",height:"25px",viewBox:"0 0 1024 1024","data-aut-id":"icon",color:e.color?e.color:"",className:!0,fillRule:"evenodd",children:Object(o.jsx)("path",{className:"rui-77aaa",d:"M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"})})}function C(){return Object(o.jsx)("svg",{width:104,height:48,viewBox:"0 0 1603 768",className:"_3V9PS",children:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{className:"all",d:"M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"}),Object(o.jsx)("path",{className:"left",d:"M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"}),Object(o.jsx)("path",{className:"top",d:"M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"}),Object(o.jsx)("path",{className:"right",d:"M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"})]})})}function w(e){return Object(o.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(o.jsx)("path",{className:"rui-367TP",d:"M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"})})}var S=function(){var e=Object(s.useContext)(u).user,t=Object(s.useContext)(O).firebase,c=Object(j.e)();return Object(o.jsx)("div",{className:"headerParentDiv",children:Object(o.jsxs)("div",{className:"headerChildDiv",children:[Object(o.jsx)("div",{className:"brandName",children:Object(o.jsx)(g,{})}),Object(o.jsxs)("div",{className:"productSearch",children:[Object(o.jsx)("div",{className:"input",children:Object(o.jsx)("input",{type:"text",placeholder:"Find car,mobile phone and more..."})}),Object(o.jsx)("div",{className:"searchAction",children:Object(o.jsx)(N,{color:"#ffffff"})})]}),Object(o.jsxs)("div",{className:"loginPage",children:[Object(o.jsx)("span",{onClick:function(){c.push("/login")},children:e?e.displayName:"Login"}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"loginPage",children:[e&&Object(o.jsx)("span",{onClick:function(){t.auth().signOut(),c.push("/login")},children:"Logout"}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"sellMenu",children:[Object(o.jsx)(C,{}),Object(o.jsxs)("div",{className:"sellMenuContent",onClick:function(){c.push("/create")},children:[Object(o.jsx)(w,{}),Object(o.jsx)("span",{children:"SELL"})]})]})]})})},P=(c(55),function(){var e=Object(j.e)(),t=Object(r.useContext)(O).firebase,c=Object(r.useContext)(u).user,n=Object(r.useState)(""),a=Object(l.a)(n,2),i=a[0],b=a[1],d=Object(r.useState)(""),h=Object(l.a)(d,2),x=h[0],m=h[1],p=Object(r.useState)(""),v=Object(l.a)(p,2),f=v[0],g=v[1],N=Object(r.useState)(null),C=Object(l.a)(N,2),w=C[0],P=C[1],D=new Date;return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(S,{}),Object(o.jsx)("card",{children:Object(o.jsxs)("div",{className:"centerDiv",children:[Object(o.jsx)("label",{htmlFor:"fname",children:"Name"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:i,onChange:function(e){b(e.target.value)},type:"text",id:"fname",name:"Name",defaultValue:"John"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"fname",children:"Category"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",value:x,onChange:function(e){m(e.target.value)},type:"text",id:"fname",name:"category",defaultValue:"John"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"fname",children:"Price"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"number",value:f,onChange:function(e){g(e.target.value)},id:"fname",name:"Price"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{alt:"Posts",width:"200px",height:"200px",src:w?URL.createObjectURL(w):""}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:function(e){P(e.target.files[0])},type:"file"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){t.storage().ref("/image/".concat(Date.now(),"/").concat(w.name)).put(w).then((function(s){s.ref.getDownloadURL().then((function(s){console.log(s),t.firestore().collection("products").add({name:i,catogory:x,price:f,url:s,userId:c.uid,createdAt:D.toDateString()}).then((function(){e.push("/")}))}))}))},className:"uploadBtn",children:"upload and Submit"})]})})]})}),D=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(S,{}),Object(o.jsx)(P,{})]})},y=Object(s.createContext)(null);var M=function(e){var t=e.children,c=Object(r.useState)(""),s=Object(l.a)(c,2),n=s[0],a=s[1];return Object(o.jsx)(y.Provider,{value:{postDetails:n,setPostDetails:a},children:t})};c(56);var k=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useContext)(y).postDetails,i=Object(s.useContext)(O).firebase;return Object(s.useEffect)((function(){i.firestore().collection("users").where("id","==",a.userId).get().then((function(e){e.forEach((function(e){n(e.data())}))}))}),[]),Object(o.jsxs)("div",{className:"viewParentDiv",children:[Object(o.jsx)("div",{className:"imageShowDiv",children:Object(o.jsx)("img",{src:a.url,alt:""})}),Object(o.jsxs)("div",{className:"rightSection",children:[Object(o.jsxs)("div",{className:"productDetails",children:[Object(o.jsxs)("p",{children:["\u20b9",a.price]}),Object(o.jsx)("span",{children:a.name}),Object(o.jsx)("p",{children:a.catogory}),Object(o.jsx)("span",{children:a.createdAt})]}),c&&Object(o.jsxs)("div",{className:"contactDetails",children:[Object(o.jsx)("p",{children:"Seller details"}),Object(o.jsx)("p",{children:c.username}),Object(o.jsx)("p",{children:c.phone})]})]})]})};var A=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(S,{}),Object(o.jsx)(k,{})]})};c(57);var L=function(){return Object(o.jsx)("div",{className:"bannerParentDiv",children:Object(o.jsxs)("div",{className:"bannerChildDiv",children:[Object(o.jsxs)("div",{class:"dropdown",children:[Object(o.jsxs)("button",{class:"btn btn-primary dropdown-toggle",type:"button","data-toggle":"dropdown",children:["All catogory",Object(o.jsx)("span",{class:"caret"})]}),Object(o.jsxs)("ul",{class:"dropdown-menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"mobile"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"car"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"bike"})})]})]}),Object(o.jsx)("div",{className:"banner",children:Object(o.jsx)("img",{src:"../../../Images/banner copy.png",alt:""})})]})})},z=c(24);function F(){return Object(o.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(o.jsx)("path",{className:"rui-77aaa",d:"M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"})})}c(58);var I=function(){var e=Object(s.useContext)(O).firebase,t=Object(r.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1],i=Object(j.e)(),b=Object(s.useContext)(y).setPostDetails;return Object(r.useEffect)((function(){e.firestore().collection("products").get().then((function(e){var t=e.docs.map((function(e){return Object(z.a)(Object(z.a)({},e.data()),{},{id:e.id})}));a(t)}))}),[]),Object(o.jsxs)("div",{className:"postParentDiv",children:[Object(o.jsxs)("div",{className:"moreView",children:[Object(o.jsxs)("div",{className:"heading",children:[Object(o.jsx)("span",{children:"Quick Menu"}),Object(o.jsx)("span",{children:"View more"})]}),Object(o.jsx)("div",{className:"cards",children:n.map((function(e){return Object(o.jsxs)("div",{className:"card",onClick:function(){b(e),i.push("/view")},children:[Object(o.jsx)("div",{className:"favorite",children:Object(o.jsx)(F,{})}),Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:e.url,alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("p",{className:"rate",children:["\u20b9 ",e.price]}),Object(o.jsx)("span",{className:"kilometer",children:e.catogory}),Object(o.jsx)("p",{className:"name",children:e.name})]}),Object(o.jsx)("div",{className:"date",children:Object(o.jsx)("span",{children:e.createdAt})})]})}))})]}),Object(o.jsxs)("div",{className:"recommendations",children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("span",{children:"Fresh recommendations"})}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"favorite",children:Object(o.jsx)(F,{})}),Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:"../../../Images/R15V3.jpg",alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{className:"rate",children:"\u20b9 250000"}),Object(o.jsx)("span",{className:"kilometer",children:"Two Wheeler"}),Object(o.jsx)("p",{className:"name",children:" YAMAHA R15V3"})]}),Object(o.jsx)("div",{className:"date",children:Object(o.jsx)("span",{children:"10/5/2021"})})]})})]})]})};c(59);var V=function(){return Object(o.jsxs)("div",{className:"footerParentDiv",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("p",{children:"POPULAR LOCATIONS"})}),Object(o.jsx)("div",{className:"list",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"kolkata"}),Object(o.jsx)("li",{children:"Mumbai"}),Object(o.jsx)("li",{children:"Chennai"}),Object(o.jsx)("li",{children:"Pune"})]})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("p",{children:"ABOUT US"})}),Object(o.jsx)("div",{className:"list",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"About OLX Group"}),Object(o.jsx)("li",{children:"Careers"}),Object(o.jsx)("li",{children:"Contact Us"}),Object(o.jsx)("li",{children:"OLXPeople"})]})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("p",{children:"OLX"})}),Object(o.jsx)("div",{className:"list",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Help"}),Object(o.jsx)("li",{children:"Sitemap"}),Object(o.jsx)("li",{children:"Legal & Privacy information"})]})})]})]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("p",{children:"Other Countries Pakistan - South Africa - Indonesia"}),Object(o.jsx)("p",{children:"Free Classifieds in India. \xa9 2006-2021 OLX"})]})]})};var U=function(e){return Object(o.jsxs)("div",{className:"homeParentDiv",children:[Object(o.jsx)(S,{}),Object(o.jsx)(L,{}),Object(o.jsx)(I,{}),Object(o.jsx)(V,{})]})};var E=function(){var e=Object(s.useContext)(u).setUser,t=Object(s.useContext)(O).firebase;return Object(s.useEffect)((function(){t.auth().onAuthStateChanged((function(t){e(t)}))})),Object(o.jsx)("div",{children:Object(o.jsx)(M,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(U,{})}),Object(o.jsx)(j.a,{path:"/signup",children:Object(o.jsx)(p,{})}),Object(o.jsx)(j.a,{path:"/login",children:Object(o.jsx)(f,{})}),Object(o.jsx)(j.a,{path:"/create",children:Object(o.jsx)(D,{})}),Object(o.jsx)(j.a,{path:"/view",children:Object(o.jsx)(A,{})})]})})})};a.a.render(Object(o.jsx)(O.Provider,{value:{firebase:d},children:Object(o.jsx)(x,{children:Object(o.jsx)(E,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.3aa9de03.chunk.js.map