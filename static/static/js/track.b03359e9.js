(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["track"],{d879:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{staticClass:"is-size-1"},[t._v("\n    Track\n  ")]),e("form",{on:{submit:function(n){return n.preventDefault(),t.submit(n)}}},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.value,expression:"form.value"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.value},on:{input:function(n){n.target.composing||t.$set(t.form,"value",n.target.value)}}})])]),e("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("\n      Create\n    ")])])])},i=[],s=e("5a50"),o=e("c0dc"),r={name:"Track.Create",data:function(){return{loading:!1,form:{value:""}}},created:function(){return this.getToken()},methods:{getToken:function(){return o["a"].get(s["d"].API.TOKEN)},submit:function(){var t=this;if(!this.loading&&s["d"].isValid(this.form.value))return this.loading=!0,o["a"].post(s["d"].API.POST,this.form).then((function(t){})).catch((function(t){})).finally((function(){return t.loading=!1}))}}},u=r,l=e("2877"),c=Object(l["a"])(u,a,i,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=track.b03359e9.js.map