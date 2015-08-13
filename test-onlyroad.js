// ==UserScript==
// @name        test iRacing road only
// @namespace   drinkto.me
// @description test Userscript for iRacing that hides content unrelated to road racing.  This is opinionated, so YMMV.
// @include     http://members.iracing.com/jforum/forums/list.page
// @include     http://members.iracing.com/membersite/member/*
// @version     1
// @require     http://coffeescript.org/extras/coffee-script.js
// @resource    remote file:///Users/kross/Dropbox/racing/apps/userscripts/iracing-road-only/main.coffee
// @grant       GM_getResourceText
// ==/UserScript==

console.log("7 loading test ir min style...");
var remote_src = GM_getResourceText('remote');

var c = this.CoffeeScript.compile(remote_src);
var cs = c.split("\n");

//cs[1] = "debugger;" + cs[1];
result = eval(cs.join("\n"));

//console.log("...done loading test ir min style: \n" + remote_src);

//console.log("loading test ir min style");
//result = eval(CoffeeScript.compile(GM_getResourceText(remote_src)));
console.log("done loading test ir min style: " + result);