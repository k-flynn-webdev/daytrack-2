(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{7803:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-5-tablet is-4-desktop is-3-widescreen register"},[e("form",{staticClass:"box",on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label",attrs:{for:"id-email"}},[t._v("\n        Email\n      ")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{id:"id-email",type:"email",placeholder:"e.g. bobsmith@gmail.com",required:""},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label",attrs:{for:"id-password"}},[t._v("\n        Password\n      ")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{id:"id-password",type:"password",placeholder:"*******",required:""},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})])]),e("router-link",{attrs:{to:{name:"login"}}},[t._v("\n      Have an account?\n    ")]),e("div",{staticClass:"field mt-5"},[e("button",{staticClass:"button is-success"},[t._v("\n        "+t._s(t.loading?"...":"Register")+"\n      ")])])],1)])},a=[],r=e("5a50"),o=e("c0dc"),n={name:"register",data:function(){return{loading:!1,form:{email:"",password:""}}},created:function(){var t=this;return this.getToken().then((function(){return t.resetForm()}))},methods:{getToken:function(){return o["a"].get(r["a"].API.GET)},resetForm:function(){this.form.email="flynny85@gmail.com",this.form.password="password"},submit:function(){var t=this;if(!this.loading&&r["d"].isValid(this.form))return this.loading=!0,this.$store.dispatch("user/register",{email:this.form.email,password:this.form.password}).then((function(s){t.resetForm(),t.$nextTick((function(){t.$router.push({name:"home"})}))})).catch((function(t){})).finally((function(){return t.loading=!1}))}}},l=n,m=e("2877"),d=Object(m["a"])(l,i,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=register.19cb0c0a.js.map