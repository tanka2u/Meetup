"use strict";(()=>{var e={};e.id=958,e.ids=[958],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},8549:(e,t,n)=>{n.r(t),n.d(t,{config:()=>l,default:()=>s,routeModule:()=>P});var o={};n.r(o),n.d(o,{default:()=>d});var i=n(1802),r=n(7153),u=n(6249);let a=require("mongodb"),d=async function(e,t){if("POST"===e.method){let n=e.body,o=await a.MongoClient.connect("mongodb://localhost:27017/meetups"),i=o.db().collection("meetups");console.log(await i.insertOne(n)),o.close(),t.status(201).json({message:"Meetup inserted!"})}},s=(0,u.l)(o,"default"),l=(0,u.l)(o,"config"),P=new i.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/new-meetup",pathname:"/api/new-meetup",bundlePath:"",filename:""},userland:o})},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=8549);module.exports=n})();