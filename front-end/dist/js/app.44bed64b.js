(function(t){function a(a){for(var n,c,i=a[0],r=a[1],l=a[2],d=0,f=[];d<i.length;d++)c=i[d],s[c]&&f.push(s[c][0]),s[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var r=e[i];0!==s[r]&&(n=!1)}n&&(o.splice(a--,1),t=c(c.s=e[0]))}return t}var n={},s={app:0},o=[];function c(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)c.d(e,n,function(a){return t[a]}.bind(null,n));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("ecfe"),s=e.n(n);s.a},"05d8":function(t,a,e){},"3f10":function(t,a,e){"use strict";var n=e("d97b"),s=e.n(n);s.a},"559e":function(t,a,e){t.exports=e.p+"img/saluLogo.a1ce655a.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var n=e("2b0e"),s=e("2f62"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.authenticated?e("Home"):e("Login")],1)},c=[],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"bg-gradient-light jumbotron-bg"},[t.loginScreen?n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"4",sm:"3",md:"2"}},[n("img",{staticClass:"img-fluid pt-4 pb-2",attrs:{alt:"Salu.pro logo",src:e("559e")}})])],1),n("center",{staticClass:"text-white"},[n("h1",{staticClass:"mb-1"},[t._v("Salu.pro")]),n("p",[t._v("Professional Contact Manager")])]),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{staticClass:"bg-light shadow-sm p-3 mb-5 rounded",attrs:{cols:"10",sm:"7",md:"5",lg:"4"}},[n("b-form",{on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[n("b-form-group",[n("label",{staticClass:"d-none",attrs:{for:"inputUsername2"}},[t._v("Username or Email")]),n("b-input",{attrs:{type:"text",id:"inputUsername2",placeholder:"Username or email",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),n("b-form-group",[n("label",{staticClass:"d-none",attrs:{for:"inputPassword2"}},[t._v("Password")]),n("b-input",{attrs:{type:"password",id:"inputPassword2",placeholder:"Password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),n("div",{staticClass:"d-flex justify-content-end"},[n("b-button",{staticClass:"mr-2",attrs:{variant:"info"},on:{click:function(a){t.loginScreen=!1}}},[n("i",{staticClass:"fas fa-pencil-alt"}),t._v(" Sign Up")]),n("b-button",{staticClass:"ml-1",attrs:{type:"submit",variant:"dark"}},[n("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" Login")])],1)],1)],1)],1)],1):t._e(),t.loginScreen?t._e():n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"force-full-height"},[n("b-col",{staticClass:"d-none d-sm-block",attrs:{sm:"6","align-self":"center"}},[n("center",{staticClass:"text-white"},[n("img",{staticStyle:{width:"70%","max-width":"300px"},attrs:{alt:"Salu.pro logo",src:e("559e")}}),n("h1",{staticClass:"mb-1"},[t._v("Salu.pro")]),n("p",[t._v("Professional Contact Manager")])])],1),n("b-col",[n("b-row",{staticClass:"justify-content-center h-100"},[n("b-col",{staticClass:"shadow-sm bg-light h-100"},[n("b-row",{staticClass:"pt-1 mb-2"},[n("b-col",[n("b-button",{attrs:{type:"button",variant:"light"},on:{click:function(a){t.loginScreen=!0}}},[n("span",{staticClass:"far fa-arrow-alt-circle-left"}),t._v("\n                    Return To Login\n                  ")])],1)],1),n("b-row",{staticClass:"d-sm-none",attrs:{"align-h":"center"}},[n("b-row",[n("img",{attrs:{alt:"Salu.pro logo",src:e("559e"),height:"80px"}})])],1),n("b-row",{attrs:{"align-h":"center"}},[n("h3",[t._v("Sign Up")])]),n("b-form",{staticClass:"d-flex flex-column align-items-stretch m-auto",staticStyle:{"max-width":"450px"},on:{submit:function(a){return a.preventDefault(),t.signup(a)}}},[n("b-form-group",[n("label",{attrs:{for:"inputEmail"}},[t._v("Email")]),n("b-input",{attrs:{type:"email",id:"inputEmail",placeholder:"email@example.com",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])],1),n("b-form-group",[n("label",{attrs:{for:"inputUsername"}},[t._v("Username")]),n("b-input",{attrs:{type:"text",id:"inputUsername",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),n("b-form-group",[n("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),n("b-input",{attrs:{type:"password",id:"inputPassword",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),n("b-form-group",[n("label",{attrs:{for:"inputPassword2"}},[t._v("Confirm Password")]),n("b-input",{attrs:{type:"password",id:"inputPassword2",required:""},model:{value:t.password2,callback:function(a){t.password2=a},expression:"password2"}})],1),n("b-form-group",[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"1"}}),n("b-button",{attrs:{type:"submit",variant:"info"}},[n("span",{staticClass:"fas fa-pencil-alt"}),t._v("\n                      Sign Up\n                    ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},r=[],l=e("bc3a"),u=e.n(l),d="https://salu.pro",f={name:"login",data:function(){return{loginScreen:!0,username:"",password:"",password2:"",email:""}},methods:{signup:function(){var t=this;this.password===this.password2?u.a.post(d+"/auth/create",{email:this.email,username:this.username,password:this.password},{withCredentials:!0}).then(function(a){var e=a.data;return t.$store.commit("login",e)}).catch(function(){return alert("Error creating account")}):alert("Passwords do not match")},login:function(){var t=this;u.a.post(d+"/auth/login",{username:this.username,password:this.password},{withCredentials:!0}).then(function(a){var e=a.data;return t.$store.commit("login",e)}).then(function(){return t.$store.dispatch("fetchContacts")}).catch(function(){return alert("Error logging in")})}},components:{}},p=f,h=e("0c7c"),m=Object(h["a"])(p,i,r,!1,null,null,null);m.options.__file="Login.vue";var b=m.exports,g=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"home"}},[n("b-navbar",{staticClass:"bg-gradient-light",attrs:{type:"light"}},[n("a",{staticClass:"navbar-brand text-white d-flex",attrs:{href:"#"}},[n("img",{staticClass:"mr-1",attrs:{alt:"Vue logo",src:e("559e"),width:"30px",height:"30px"}}),n("h4",{staticClass:"m-0"},[t._v("Salu.pro")])]),n("div",{staticClass:"d-flex flex-row align-items-center"},[t.user?n("span",{staticClass:"mr-4 d-none d-sm-block text-white"},[n("i",{staticClass:"fas fa-user"}),t._v(" "+t._s(t.user.username))]):t._e(),n("b-button",{attrs:{variant:"info",size:"sm"},on:{click:t.logOut}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Log out")])],1)]),n("div",{staticClass:"px-2"},[n("div",{staticClass:"d-flex flex-row"},[n("button",{staticClass:"ml-2",on:{click:t.newContact}},[t._m(0)]),n("div",{staticClass:"search flex-fill my-4 pl-1 pr-3"},[n("span",{staticClass:"fas fa-search fa-2x"}),n("b-form-input",{attrs:{size:"lg",type:"search",placeholder:"Search your contacts"},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)]),"compact"===t.layout?n("div",[n("b-tabs",{attrs:{pills:"",fill:"","nav-class":"mb-1"},model:{value:t.tabIndex,callback:function(a){t.tabIndex=a},expression:"tabIndex"}},[n("b-tab",{attrs:{active:"",title:"Contact List"}},[n("ContactList",{staticClass:"mt-3"})],1),n("b-tab",{attrs:{title:"Search Results"}},[t.noContacts?n("div",{staticClass:"d-flex justify-content-center align-items-center"},[n("h2",{staticClass:"my-4"},t._l(t.tags,function(a){return n("button",{key:a,on:{click:function(e){t.search=a}}},[n("Tag",{attrs:{tag:a}})],1)}),0)]):n("ContactCardCollection")],1)],1)],1):n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("ContactList")],1),n("div",{staticClass:"col-8"},[t.noContacts?n("div",{staticClass:"d-flex justify-content-center align-items-center"},[n("h2",{staticClass:"my-4"},t._l(t.tags,function(a){return n("button",{key:a,on:{click:function(e){t.search=a}}},[n("Tag",{attrs:{tag:a}})],1)}),0)]):n("ContactCardCollection")],1)])])]),n("ContactEditModal")],1)},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"fa-layers fa-fw fa-3x"},[e("i",{staticClass:"fas fa-circle text-primary"}),e("i",{staticClass:"fa-inverse fas fa-plus",attrs:{"data-fa-transform":"shrink-6"}})])}],C=(e("386d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"bind-to-height",rawName:"v-bind-to-height"}],attrs:{id:"contact-list"}},t._l(t.contacts,function(a){return e("div",{key:a._id,staticClass:"d-flex flex-row flex-wrap justify-content-between hover-row border-top px-3 py-1",on:{click:function(e){e.preventDefault(),t.selectContact(a)}}},[e("span",[t._v(t._s(a.first)+" "+t._s(a.last))]),e("div",{staticClass:"d-flex align-items-center"},t._l(a.tags,function(t){return e("Tag",{key:t,attrs:{tag:t}})}),1)])}),0)}),w=[],_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"badge badge-pill ml-1",class:{"pr-1":t.allowDelete},style:{backgroundColor:t.tagColor,color:t.textColor}},[t._v("\n "+t._s(t.tag)+"\n "),t.allowDelete?e("button",{staticClass:"ml-1",attrs:{title:"Remove Tag"},on:{click:function(a){t.$emit("remove",t.tag)}}},[e("i",{staticClass:"fas fa-times-circle"})]):t._e()])},x=[],y=e("004f"),T=e.n(y),k={props:{tag:String,allowDelete:Boolean},computed:Object(s["b"])({textColor:function(t){return T()(t.colorMap[this.tag]||"#d3d3d3")},tagColor:function(t){return t.colorMap[this.tag]||"lightgray"}})},$=k,S=Object(h["a"])($,_,x,!1,null,null,null);S.options.__file="Tag.vue";var M=S.exports,O={props:{},computed:Object(s["b"])({contacts:function(t){return t.contacts||[]}}),methods:{selectContact:function(t){this.$store.commit("search",null),this.$store.commit("search",t.first+" "+t.last)}},components:{Tag:M}},E=O,I=(e("fd79"),Object(h["a"])(E,C,w,!1,null,null,null));I.options.__file="ContactList.vue";var N=I.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"bind-to-height",rawName:"v-bind-to-height"}],staticClass:"d-flex flex-wrap",attrs:{id:"contact-collection"}},t._l(t.contacts,function(t){return e("ContactCard",{key:t._id,staticClass:"m-1",attrs:{"contact-id":t._id}})}),1)},P=[],L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"text-left"},[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[e("h5",{staticClass:"card-title mb-0"},[t._v(t._s(t.contact.first)+" "+t._s(t.contact.last))]),e("div",{staticClass:"ml-3"},[e("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(a){t.editContact(t.contact._id)}}},[e("i",{staticClass:"fas fa-edit"})]),e("b-button",{staticClass:"ml-1",attrs:{variant:"danger",size:"sm"},on:{click:function(a){t.deleteContact(t.contact._id)}}},[e("i",{staticClass:"fas fa-trash"})])],1)]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.contact.email,expression:"contact.email"}],staticClass:"mb-1"},[e("i",{staticClass:"fas fa-envelope mr-2"}),e("a",{attrs:{href:"mailto:"+t.contact.email}},[t._v(t._s(t.contact.email))])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.contact.phone,expression:"contact.phone"}],staticClass:"mb-1"},[e("i",{staticClass:"fas fa-phone mr-2"}),e("a",{attrs:{href:"tel:"+t.contact.phone}},[t._v(t._s(t.contact.phone))])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.address,expression:"address"}],staticClass:"mb-1"},[e("i",{staticClass:"fas fa-map-marker-alt mr-2"}),e("a",{attrs:{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(t.address)}},[t._v(t._s(t.address))])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.contact.tags&&t.contact.tags.length>0,expression:"contact.tags && contact.tags.length > 0"}],staticClass:"mb-1 d-flex align-items-center"},[e("i",{staticClass:"fas fa-tags"}),t._l(t.contact.tags,function(a){return e("button",{key:a,on:{click:function(e){t.search(a)}}},[e("Tag",{attrs:{tag:a}})],1)})],2),e("p",{directives:[{name:"show",rawName:"v-show",value:t.contact.notes,expression:"contact.notes"}],staticClass:"mb-1"},[e("i",{staticClass:"fas fa-comment mr-2"}),t._v(t._s(t.contact.notes))])])},z=[],A={props:{contactId:String},methods:{editContact:function(t){this.$store.commit("editContact",t)},deleteContact:function(t){this.$store.dispatch("deleteContact",t)},search:function(t){this.$store.commit("search",t)}},computed:Object(s["b"])({contact:function(t){var a=this;return t.searchContacts.filter(function(t){return t._id===a.contactId})[0]},address:function(){var t="";return this.contact.street&&(t+=this.contact.street),this.contact.city&&(t+=", "+this.contact.city),this.contact.state&&(t+=", "+this.contact.state),this.contact.zipcode&&(t+=" "+this.contact.zipcode),t.length?t:null}}),components:{Tag:M}},D=A,U=Object(h["a"])(D,L,z,!1,null,null,null);U.options.__file="ContactCard.vue";var H=U.exports,W={computed:Object(s["b"])({contacts:"searchContacts"}),components:{ContactCard:H}},R=W,q=(e("fa7f"),Object(h["a"])(R,j,P,!1,null,null,null));q.options.__file="ContactCardCollection.vue";var F=q.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.contact?e("b-modal",{attrs:{"ok-title":"Save",size:"lg","header-bg-variant":"primary","header-text-variant":"white","hide-header-close":"",title:t.cardTitle},on:{ok:t.saveContact,hidden:t.afterHidden},model:{value:t.showModal,callback:function(a){t.showModal=a},expression:"showModal"}},[e("b-form-group",[e("b-form-row",[e("b-col",[e("label",{attrs:{for:"inlineFormInputFirstName"}},[t._v("Name")]),e("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"text",placeholder:"First Name",id:"inlineFormInputFirstName"},model:{value:t.contact.first,callback:function(a){t.$set(t.contact,"first",a)},expression:"contact.first"}})],1),e("b-col",[e("label",{staticClass:"invisible"},[t._v("Name")]),e("b-form-input",{staticClass:"mr-sm-2",attrs:{id:"inlineFormInputLastName",placeholder:"Last Name"},model:{value:t.contact.last,callback:function(a){t.$set(t.contact,"last",a)},expression:"contact.last"}})],1)],1)],1),e("b-form-group",[e("label",{attrs:{for:"inputEmail"}},[t._v("Email")]),e("b-form-input",{attrs:{type:"email",id:"inputEmail",placeholder:"email@example.com"},model:{value:t.contact.email,callback:function(a){t.$set(t.contact,"email",a)},expression:"contact.email"}})],1),e("b-form-group",[e("label",{attrs:{for:"inputPhone"}},[t._v("Phone")]),e("b-input",{attrs:{type:"tel",id:"inputPhone",placeholder:"(123) 456-789"},model:{value:t.contact.phone,callback:function(a){t.$set(t.contact,"phone",a)},expression:"contact.phone"}})],1),e("b-form-group",[e("label",{attrs:{for:"inputAddress"}},[t._v("Address")]),e("b-form-input",{staticClass:"mb-1",attrs:{type:"text",id:"inputAddress",placeholder:"1234 Main St"},model:{value:t.contact.street,callback:function(a){t.$set(t.contact,"street",a)},expression:"contact.street"}})],1),e("b-form-row",{staticClass:"mb-3"},[e("b-col",{attrs:{cols:"12",sm:"6"}},[e("label",{attrs:{for:"inputCity"}},[t._v("City")]),e("b-form-input",{attrs:{type:"text",id:"inputCity"},model:{value:t.contact.city,callback:function(a){t.$set(t.contact,"city",a)},expression:"contact.city"}})],1),e("b-col",{attrs:{cols:"6",sm:"2"}},[e("label",{attrs:{for:"inputState"}},[t._v("State")]),e("b-form-select",{attrs:{size:"",options:t.states},model:{value:t.contact.state,callback:function(a){t.$set(t.contact,"state",a)},expression:"contact.state"}})],1),e("b-col",{attrs:{cols:"6",sm:"4"}},[e("label",{attrs:{for:"inputCity"}},[t._v("Zip Code")]),e("b-form-input",{attrs:{type:"text",id:"inputZip"},model:{value:t.contact.zipcode,callback:function(a){t.$set(t.contact,"zipcode",a)},expression:"contact.zipcode"}})],1)],1),e("b-form-group",[e("label",{attrs:{for:"inputMemo"}},[t._v("Notes")]),e("b-textarea",{attrs:{rows:"3",id:"inputMemo"},model:{value:t.contact.notes,callback:function(a){t.$set(t.contact,"notes",a)},expression:"contact.notes"}})],1),e("b-form-group",[e("label",{attrs:{for:"inputTags"}},[t._v("Tags")]),t.contact.tags.length>0?e("p",{staticStyle:{"font-size":"16pt"}},t._l(t.contact.tags,function(a){return e("Tag",{key:a,attrs:{tag:a,"allow-delete":""},on:{remove:t.deleteTag}})}),1):t._e(),e("b-input-group",[e("b-form-input",{attrs:{type:"text",id:"inputTag",list:"tag-list"},model:{value:t.newTag,callback:function(a){t.newTag=a},expression:"newTag"}}),e("b-input-group-append",[e("b-btn",{attrs:{variant:"info"},on:{click:t.addTag}},[t._v("Add tag")])],1)],1),e("datalist",{attrs:{id:"tag-list"}},t._l(t.$store.getters.allTags,function(t){return e("option",{domProps:{value:t}})}),0)],1)],1):t._e()},V=[],K=e("f499"),Y=e.n(K),Z=e("5176"),B=e.n(Z),G={data:function(){return{showModal:!1,contact:null,states:["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"],newTag:""}},methods:{saveContact:function(t){this.$store.dispatch("updateContact",this.contact),t.preventDefault()},afterHidden:function(){this.$store.commit("endEditing")},deleteTag:function(t){this.$delete(this.contact.tags,this.contact.tags.indexOf(t))},addTag:function(){this.tagColorMap.hasOwnProperty(this.newTag)||this.$store.commit("addTagToColorMap",this.newTag),this.contact.tags.push(this.newTag),this.newTag=""}},computed:Object(s["b"])({contactId:"editContactId",tagColorMap:"colorMap",name:function(){return this.contact.firstName+" "+this.contact.lastName},cardTitle:function(){return"new"===this.contactId?"New Contact":this.contact.first&&this.contact.first.length>0&&this.contact.last&&this.contact.last.length?this.contact.first+" "+this.contact.last:this.contact.first&&this.contact.first.length>0?this.contact.first:this.contact.last&&this.contact.first.last>0?this.contact.last:"Edit Contact"},address:function(t){return"street"==t?this.contact.street:"city"==t?this.contact.city:"state"==t?this.contact.state:"zipcode"==t?this.contact.zipcode:null}}),watch:{contactId:function(t){t?(this.contact="new"===t?{first:"",last:"",email:"",phone:null,street:null,city:null,state:null,zipcode:null,tags:[],notes:null}:B()({tags:[]},JSON.parse(Y()(this.$store.state.contacts.filter(function(a){return a._id===t})[0]))),this.showModal=!0):this.showModal=!1}},components:{Tag:M}},X=G,Q=(e("3f10"),Object(h["a"])(X,J,V,!1,null,null,null));Q.options.__file="ContactEditModal.vue";var tt=Q.exports,at={name:"home",data:function(){return{windowWidth:window.innerWidth,tabIndex:0,search:null}},computed:Object(s["b"])({searchText:"searchText",user:"user",layout:function(){return this.windowWidth<600?"compact":"wide"},tags:function(){return this.$store.getters.allTags},noContacts:function(t){return 0===t.searchContacts.length}}),watch:{searchText:function(){this.tabIndex=1,this.search=this.searchText},search:function(){this.search!==this.searchText&&this.$store.commit("search",this.search)}},methods:{logOut:function(){var t=this;u.a.post(d+"/auth/logout").then(function(){return t.$store.commit("logout")})},newContact:function(){this.$store.commit("newContact")}},mounted:function(){var t=this;this.$nextTick(function(){return window.addEventListener("resize",function(){t.windowWidth=window.innerWidth})})},components:{ContactList:N,ContactCardCollection:F,Tag:M,ContactEditModal:tt}},et=at,nt=(e("8b71"),Object(h["a"])(et,g,v,!1,null,null,null));nt.options.__file="Home.vue";var st=nt.exports,ot={name:"app",data:function(){return{}},computed:Object(s["b"])({authenticated:function(t){return t.authenticated}}),mounted:function(){var t=this;u.a.get(d+"/auth/autologin").then(function(a){var e=a.data;return t.$store.commit("login",e)}).then(function(){return t.$store.dispatch("fetchContacts")})},components:{Login:b,Home:st}},ct=ot,it=(e("034f"),e("5c64"),Object(h["a"])(ct,o,c,!1,null,null,null));it.options.__file="App.vue";var rt=it.exports,lt=e("9f7b"),ut=e("795b"),dt=e.n(ut),ft=(e("20d6"),e("b6d0")),pt=e.n(ft),ht=(e("ac6a"),e("774e")),mt=e.n(ht),bt=e("db0c"),gt=e.n(bt),vt=u.a.CancelToken,Ct=["#ff0000","#f58231","#ffe119","#bcf60c","#3cb44b","#46f0f0","#4363d8","#911eb4","#f032e9","#000075","#aaffc3","#e6beff","#8b0000","#ff0033","#4b0082","#5c4033","#ff69b4"],wt=JSON.parse(Y()(Ct));function _t(t,a){var e=a.response.data.error.errors;alert(t+": "+gt()(e).map(function(t){return t.message}).join(", "))}function xt(){0===wt.length&&(wt=JSON.parse(Y()(Ct)));var t=Math.floor(Math.random()*wt.length);return wt.splice(t,1)[0]}function yt(t){return mt()(t.filter(function(t){return t.tags&&t.tags.length}).reduce(function(t,a){return a.tags&&a.tags.forEach(function(a){return t.add(a)}),t},new pt.a))}var Tt={contacts:[],searchText:null,searchContacts:[],editContactId:null,authenticated:!1,user:null,searchCancelToken:null,colorMap:{}},kt=function(){return new s["a"].Store({state:n["a"].util.extend({},Tt),getters:{allTags:function(t){return yt(t.contacts)}},mutations:{setContacts:function(t,a){t.contacts=a,t.colorMap=yt(a).reduce(function(t,a){return t[a]=xt(),t},{})},addTagToColorMap:function(t,a){t.colorMap[a]=xt()},addContact:function(t,a){return t.contacts.push(a)},updateContact:function(t,a){var e=t.contacts.findIndex(function(t){return t._id===a._id});n["a"].set(t.contacts,e,a)},deleteContact:function(t,a){t.contacts.splice(t.contacts.findIndex(function(t){return t._id===a}),1),t.searchContacts.splice(t.contacts.findIndex(function(t){return t._id===a}),1)},search:function(t,a){a&&a.length?(t.searchText=a,t.searchCancelToken&&t.searchCancelToken.cancel("Search canceled"),t.searchCancelToken=vt.source(),u.a.get(d+"/contacts?search="+encodeURIComponent(a),{cancelToken:t.searchCancelToken.token}).then(function(a){var e=a.data;t.searchContacts=e})):t.searchContacts=[]},logout:function(t){for(var a in t)n["a"].set(t,a,Tt[a]);wt=JSON.parse(Y()(Ct))},login:function(t,a){t.authenticated=!0,t.user=function(t){var a=t.username,e=t.email;return{username:a,email:e}}(a)},editContact:function(t,a){t.editContactId=a},newContact:function(t){t.editContactId="new"},endEditing:function(t){t.editContactId=null}},actions:{fetchContacts:function(t){var a=t.commit;return new dt.a(function(t,e){u.a.get(d+"/contacts").then(function(e){var n=e.data;a("setContacts",n),t()}).catch(function(t){e(t)})})},updateContact:function(t,a){var e=t.commit,n=t.state;a._id?u.a.put(d+"/contacts/"+a._id,a).then(function(){e("updateContact",a),e("endEditing"),e("search",n.searchText)}).catch(function(t){_t("Error saving contact",t)}):u.a.post(d+"/contacts",a).then(function(t){var a=t.data;e("addContact",a),e("endEditing"),e("search",n.searchText)}).catch(function(t){_t("Error saving contact",t)})},deleteContact:function(t,a){var e=t.commit;u.a.delete(d+"/contacts/"+a).then(function(){e("deleteContact",a)}).catch(function(t){_t("Error deleting contact",t)})}}})};n["a"].use(lt["a"]),n["a"].use(s["a"]);var $t=kt();function St(t){var a=0,e=0;while(t)a+=t.offsetLeft-t.scrollLeft+t.clientLeft,e+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return{x:a,y:e}}n["a"].config.productionTip=!1,n["a"].directive("bind-to-height",{inserted:function(t){t.style["max-height"]=window.innerHeight-St(t).y+"px",t.style["overflow-y"]="auto",window.addEventListener("resize",function(){t.style["max-height"]=window.innerHeight-St(t).y+"px"})}}),new n["a"]({store:$t,render:function(t){return t(rt)}}).$mount("#app")},"5c64":function(t,a,e){"use strict";var n=e("c736"),s=e.n(n);s.a},"6bb5":function(t,a,e){},"8b71":function(t,a,e){"use strict";var n=e("05d8"),s=e.n(n);s.a},c736:function(t,a,e){},d97b:function(t,a,e){},ebd6:function(t,a,e){},ecfe:function(t,a,e){},fa7f:function(t,a,e){"use strict";var n=e("6bb5"),s=e.n(n);s.a},fd79:function(t,a,e){"use strict";var n=e("ebd6"),s=e.n(n);s.a}});
//# sourceMappingURL=app.44bed64b.js.map