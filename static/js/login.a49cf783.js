(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{dd7b:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-5-tablet is-4-desktop is-3-widescreen login"},[i("form",{staticClass:"box",on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[i("div",{staticClass:"field"},[i("label",{staticClass:"label",attrs:{for:"id-email"}},[t._v("\n        Email\n      ")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{id:"id-email",type:"email",placeholder:"e.g. bobsmith@gmail.com",required:""},domProps:{value:t.form.email},on:{input:[function(s){s.target.composing||t.$set(t.form,"email",s.target.value)},function(s){return t.$store.dispatch("api/getCSRF")}]}})])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label",attrs:{for:"id-password"}},[t._v("\n        Password\n      ")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{id:"id-password",type:"password",placeholder:"*******",required:""},domProps:{value:t.form.password},on:{input:[function(s){s.target.composing||t.$set(t.form,"password",s.target.value)},function(s){return t.$store.dispatch("api/getCSRF")}]}})])]),i("router-link",{attrs:{to:{name:"register"}}},[t._v("\n      Dont have an account?\n    ")]),i("div",{staticClass:"field mt-5"},[i("button",{staticClass:"button is-success"},[t._v("\n        "+t._s(t.loading?"...":"Login")+"\n      ")])])],1)])},e=[],o=(i("7f7f"),i("5a50")),r=i("8fbf"),n={name:"login",mixins:[r["a"]],data:function(){return{loading:!1,form:{email:"",password:""}}},methods:{resetForm:function(){this.form.email="flynny85@gmail.com",this.form.password="password"},submit:function(){var t=this;if(!this.loading&&o["b"].isValid(this.form))return this.loading=!0,this.$store.dispatch("api/getCSRF").then((function(){return t.$store.dispatch("user/login",{email:t.form.email,password:t.form.password})})).then((function(){t.resetForm(),t.$router.push({name:o["f"].route.name})})).catch((function(s){return t.handleError(s)})).finally((function(){return t.loading=!1}))}}},l=n,d=i("2877"),m=Object(d["a"])(l,a,e,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=login.a49cf783.js.map