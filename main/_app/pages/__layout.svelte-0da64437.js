var e=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(n,a,i)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,s=(e,n)=>{for(var a in n||(n={}))t.call(n,a)&&o(e,a,n[a]);if(i)for(var a of i(n))d.call(n,a)&&o(e,a,n[a]);return e},y=(e,i)=>n(e,a(i));import{D as r,E as p,F as m,G as L,H as N,S as A,i as k,s as f,I as T,J as O,j as g,k as c,m as _,n as l,o as C,f as S,K as U,x as u,u as R,v as h,d as B,L as E,M as v,N as J,O as V,P as I,e as M,t as $,c as b,a as G,g as w,b as x,Q as P,r as j,w as D,h as q,R as z,_ as K,T as F,U as Y,V as Q,W as H,X as W,Y as X,Z,$ as ee,a0 as ne,a1 as ae,a2 as ie}from"../chunks/vendor-9ef56761.js";import{l as te,p as de,g as oe}from"../chunks/stores-c359c575.js";import{A as se}from"../chunks/api-82c76902.js";import{u as ye,a as re}from"../chunks/user-f1838cad.js";import{b as pe}from"../chunks/paths-6758d194.js";import{D as me}from"../chunks/Dialog-fc65cda9.js";import{G as Le,O as Ne,a as Ae,b as ke,c as fe}from"../chunks/graphql-7c12eb8b.js";import{g as Te}from"../chunks/navigation-51f4a605.js";import{T as Oe}from"../chunks/Toast-70852bff.js";import"../chunks/singletons-12a22614.js";var ge={__schema:{queryType:{name:"Query"},mutationType:{name:"Mutation"},subscriptionType:null,types:[{kind:"OBJECT",name:"BootstrapVersion",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"satisfactory_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"date",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"CreateVersionResponse",fields:[{name:"auto_approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetBootstrapVersions",fields:[{name:"bootstrap_versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"BootstrapVersion"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetGuides",fields:[{name:"guides",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMods",fields:[{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMyMods",fields:[{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMyVersions",fields:[{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetSMLVersions",fields:[{name:"sml_versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"SMLVersion"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetVersions",fields:[{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Group",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Guide",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"short_description",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"views",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"LatestVersions",fields:[{name:"alpha",type:{kind:"OBJECT",name:"Version"},args:[]},{name:"beta",type:{kind:"OBJECT",name:"Version"},args:[]},{name:"release",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Mod",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"short_description",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"full_description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"logo",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"source_url",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"creator_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"views",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"downloads",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"hotness",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"popularity",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"last_version_date",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"mod_reference",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"hidden",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"authors",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserMod"}}}},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"latestVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"LatestVersions"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Mutation",fields:[{name:"discourseSSO",type:{kind:"SCALAR",name:"Any"},args:[{name:"sso",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"sig",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createBootstrapVersion",type:{kind:"OBJECT",name:"BootstrapVersion"},args:[{name:"bootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateBootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"BootstrapVersion"}},args:[{name:"bootstrapVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"bootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteBootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"bootstrapVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createGuide",type:{kind:"OBJECT",name:"Guide"},args:[{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateGuide",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteGuide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createMod",type:{kind:"OBJECT",name:"Mod"},args:[{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateMod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"approveMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"denyMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createSMLVersion",type:{kind:"OBJECT",name:"SMLVersion"},args:[{name:"smlVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateSMLVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"SMLVersion"}},args:[{name:"smlVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"smlVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteSMLVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"smlVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateUser",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[{name:"userId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"input",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"logout",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"oAuthGithub",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"oAuthGoogle",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"oAuthFacebook",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"uploadVersionPart",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"part",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"file",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"finalizeCreateVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"approveVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"denyVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]}],interfaces:[]},{kind:"OBJECT",name:"OAuthOptions",fields:[{name:"github",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"google",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"facebook",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Query",fields:[{name:"getOAuthOptions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"OAuthOptions"}},args:[{name:"callback_url",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getBootstrapVersion",type:{kind:"OBJECT",name:"BootstrapVersion"},args:[{name:"bootstrapVersionID",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getBootstrapVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetBootstrapVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getGuide",type:{kind:"OBJECT",name:"Guide"},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getGuides",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetGuides"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMod",type:{kind:"OBJECT",name:"Mod"},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getModByReference",type:{kind:"OBJECT",name:"Mod"},args:[{name:"modReference",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getUnapprovedMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyUnapprovedMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getSMLVersion",type:{kind:"OBJECT",name:"SMLVersion"},args:[{name:"smlVersionID",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getSMLVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetSMLVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMe",type:{kind:"OBJECT",name:"User"},args:[]},{name:"getUser",type:{kind:"OBJECT",name:"User"},args:[{name:"userId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getUsers",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"OBJECT",name:"User"}}},args:[{name:"userIds",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}}}]},{name:"getVersion",type:{kind:"OBJECT",name:"Version"},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getUnapprovedVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"checkVersionUploadState",type:{kind:"OBJECT",name:"CreateVersionResponse"},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getMyVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyUnapprovedVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]}],interfaces:[]},{kind:"OBJECT",name:"SMLVersion",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"satisfactory_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"date",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"bootstrap_version",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"User",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"email",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"username",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"avatar",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"github_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"google_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"facebook_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"roles",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserRoles"}},args:[]},{name:"groups",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Group"}}}},args:[]},{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserMod"}}}},args:[]},{name:"guides",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserMod",fields:[{name:"user_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"role",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[]},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserRoles",fields:[{name:"approveMods",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approveVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deleteContent",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editContent",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editUsers",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editSMLVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editBootstrapVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserSession",fields:[{name:"token",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Version",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"sml_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"downloads",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"metadata",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"size",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"hash",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[]},{name:"dependencies",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"VersionDependency"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"VersionDependency",fields:[{name:"version_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"condition",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"optional",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod",type:{kind:"OBJECT",name:"Mod"},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Schema",fields:[{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"types",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}}},args:[]},{name:"queryType",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"mutationType",type:{kind:"OBJECT",name:"__Type"},args:[]},{name:"subscriptionType",type:{kind:"OBJECT",name:"__Type"},args:[]},{name:"directives",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Directive"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Type",fields:[{name:"kind",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"specifiedByUrl",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"fields",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Field"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"interfaces",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}},args:[]},{name:"possibleTypes",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}},args:[]},{name:"enumValues",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__EnumValue"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"inputFields",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"ofType",type:{kind:"OBJECT",name:"__Type"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Field",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"args",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"type",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__InputValue",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"type",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"defaultValue",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__EnumValue",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Directive",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isRepeatable",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"locations",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}},args:[]},{name:"args",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}}},args:[]}],interfaces:[]},{kind:"SCALAR",name:"Any"}],directives:[]}};function ce(e){let n,a,i,t,d,o,s,y,r,p,m,L,N,A,k,f,T,O,U,E;return a=new z({props:{icon:K,inline:!0,class:"inline-block mr-2"}}),y=new z({props:{icon:F,inline:!0,class:"inline-block mr-2"}}),A=new z({props:{icon:Y,inline:!0,class:"inline-block mr-2"}}),{c(){n=M("button"),g(a.$$.fragment),i=c(),t=M("span"),d=$("Sign in with Github"),o=c(),s=M("button"),g(y.$$.fragment),r=c(),p=M("span"),m=$("Sign in with Google"),L=c(),N=M("button"),g(A.$$.fragment),k=c(),f=M("span"),T=$("Sign in with Facebook"),this.h()},l(e){n=b(e,"BUTTON",{class:!0});var O=G(n);_(a.$$.fragment,O),i=l(O),t=b(O,"SPAN",{});var g=G(t);d=w(g,"Sign in with Github"),g.forEach(B),O.forEach(B),o=l(e),s=b(e,"BUTTON",{class:!0});var c=G(s);_(y.$$.fragment,c),r=l(c),p=b(c,"SPAN",{});var C=G(p);m=w(C,"Sign in with Google"),C.forEach(B),c.forEach(B),L=l(e),N=b(e,"BUTTON",{class:!0});var S=G(N);_(A.$$.fragment,S),k=l(S),f=b(S,"SPAN",{});var U=G(f);T=w(U,"Sign in with Facebook"),U.forEach(B),S.forEach(B),this.h()},h(){x(n,"class","login-button svelte-1yaaurg"),x(s,"class","login-button svelte-1yaaurg"),x(N,"class","login-button svelte-1yaaurg")},m(g,c){S(g,n,c),C(a,n,null),P(n,i),P(n,t),P(t,d),S(g,o,c),S(g,s,c),C(y,s,null),P(s,r),P(s,p),P(p,m),S(g,L,c),S(g,N,c),C(A,N,null),P(N,k),P(N,f),P(f,T),O=!0,U||(E=[Q(n,"click",e[6]),Q(s,"click",e[7]),Q(N,"click",e[8])],U=!0)},p:H,i(e){O||(u(a.$$.fragment,e),u(y.$$.fragment,e),u(A.$$.fragment,e),O=!0)},o(e){R(a.$$.fragment,e),R(y.$$.fragment,e),R(A.$$.fragment,e),O=!1},d(e){e&&B(n),h(a),e&&B(o),e&&B(s),h(y),e&&B(L),e&&B(N),h(A),U=!1,W(E)}}}function _e(e){let n,a,i,t=e[4].error.message+"";return{c(){n=M("p"),a=$("Oh no... "),i=$(t)},l(e){n=b(e,"P",{});var d=G(n);a=w(d,"Oh no... "),i=w(d,t),d.forEach(B)},m(e,t){S(e,n,t),P(n,a),P(n,i)},p(e,n){16&n&&t!==(t=e[4].error.message+"")&&q(i,t)},i:H,o:H,d(e){e&&B(n)}}}function le(e){let n,a;return{c(){n=M("p"),a=$("Loading...")},l(e){n=b(e,"P",{});var i=G(n);a=w(i,"Loading..."),i.forEach(B)},m(e,i){S(e,n,i),P(n,a)},p:H,i:H,o:H,d(e){e&&B(n)}}}function Ce(e){let n,a,i,t,d,o,s;const y=[le,_e,ce],r=[];function p(e,n){return e[4].fetching?0:e[4].error?1:2}return d=p(e),o=r[d]=y[d](e),{c(){n=M("div"),a=M("h3"),i=$("Login / Sign Up"),t=c(),o.c(),this.h()},l(e){n=b(e,"DIV",{class:!0});var d=G(n);a=b(d,"H3",{class:!0});var s=G(a);i=w(s,"Login / Sign Up"),s.forEach(B),t=l(d),o.l(d),d.forEach(B),this.h()},h(){x(a,"class","text-2xl font-bold"),x(n,"class","grid grid-flow-row gap-4")},m(e,o){S(e,n,o),P(n,a),P(a,i),P(n,t),r[d].m(n,null),s=!0},p(e,a){let i=d;d=p(e),d===i?r[d].p(e,a):(j(),R(r[i],1,1,(()=>{r[i]=null})),D(),o=r[d],o?o.p(e,a):(o=r[d]=y[d](e),o.c()),u(o,1),o.m(n,null))},i(e){s||(u(o),s=!0)},o(e){R(o),s=!1},d(e){e&&B(n),r[d].d()}}}function Se(e){let n,a;return{c(){n=M("span"),a=$(e[2])},l(i){n=b(i,"SPAN",{});var t=G(n);a=w(t,e[2]),t.forEach(B)},m(e,i){S(e,n,i),P(n,a)},p(e,n){4&n&&q(a,e[2])},d(e){e&&B(n)}}}function Ue(e){let n,a,i,t,d,o;function s(n){e[9](n)}let y={$$slots:{default:[Ce]},$$scope:{ctx:e}};function r(n){e[10](n)}void 0!==e[1]&&(y.open=e[1]),n=new me({props:y}),T.push((()=>O(n,"open",s)));let p={$$slots:{default:[Se]},$$scope:{ctx:e}};return void 0!==e[3]&&(p.running=e[3]),t=new Oe({props:p}),T.push((()=>O(t,"running",r))),{c(){g(n.$$.fragment),i=c(),g(t.$$.fragment)},l(e){_(n.$$.fragment,e),i=l(e),_(t.$$.fragment,e)},m(e,a){C(n,e,a),S(e,i,a),C(t,e,a),o=!0},p(e,[i]){const o={};8208&i&&(o.$$scope={dirty:i,ctx:e}),!a&&2&i&&(a=!0,o.open=e[1],U((()=>a=!1))),n.$set(o);const s={};8196&i&&(s.$$scope={dirty:i,ctx:e}),!d&&8&i&&(d=!0,s.running=e[3],U((()=>d=!1))),t.$set(s)},i(e){o||(u(n.$$.fragment,e),u(t.$$.fragment,e),o=!0)},o(e){R(n.$$.fragment,e),R(t.$$.fragment,e),o=!1},d(e){h(n,e),e&&B(i),h(t,e)}}}function ue(e,n,a){let i,t,d;E(e,te,(e=>a(1,i=e))),E(e,de,(e=>a(11,t=e)));{const e=v(Le,void 0,{pause:!0});J(e);let n=!0;ye.subscribe((a=>{if(a){const e=new Date((new Date).getTime()+2592e6);V.set("token",a,{domain:window.location.hostname,expires:e})}else n||V.remove("token");if(n=!1,a){e.reexecute({requestPolicy:"network-only"});const n=e.subscribe((e=>{e.fetching||(e.error?(console.error(e.error.message),n()):e.data&&(re.set(e.data.getMe),n()))}))}else re.set(null)}))}const o={github:I({query:Ne}),google:I({query:Ae}),facebook:I({query:ke})};let s="",y=!1;{const e=localStorage.getItem("sign.in.method");localStorage.removeItem("sign.in.method");let n=Object.fromEntries(t.query.entries());0===Object.keys(n).length&&(n=Object.fromEntries(new URLSearchParams(window.location.search)));const i=n.code,d=n.state;e&&i&&d&&o[e]({code:i,state:d}).then((e=>{e.error?(console.error(e.error.message),a(2,s="Error logging in: "+e.error.message),a(3,y=!0)):ye.set(e.data.session.token)}))}const r=v(fe,{callback_url:""},{requestPolicy:"network-only"});E(e,r,(e=>a(4,d=e)));const p=(e,n)=>{localStorage.setItem("sign.in.method",e),Te(n)};return e.$$.update=()=>{3&e.$$.dirty&&i&&(a(0,r.variables.callback_url=encodeURIComponent(window.location.origin+window.location.pathname),r),J(r))},[r,i,s,y,d,p,()=>p("github",d.data.getOAuthOptions.github),()=>p("google",d.data.getOAuthOptions.google),()=>p("facebook",d.data.getOAuthOptions.facebook),function(e){i=e,te.set(i)},function(e){y=e,a(3,y)}]}class Re extends A{constructor(e){super(),k(this,e,ue,Ue,f,{})}}function he(e){let n,a,i,t,d,o,s,y,r,p,m,L,N,A,k,f;const T=e[1].default,O=X(T,e,e[0],null);return k=new Re({}),{c(){n=M("link"),a=M("link"),i=M("link"),t=M("link"),d=M("link"),o=M("link"),s=M("link"),y=M("meta"),r=M("meta"),p=M("meta"),m=M("link"),L=c(),N=M("main"),O&&O.c(),A=c(),g(k.$$.fragment),this.h()},l(e){const f=Z('[data-svelte="svelte-1ir36j2"]',document.head);n=b(f,"LINK",{rel:!0,type:!0,href:!0}),a=b(f,"LINK",{rel:!0,sizes:!0,href:!0}),i=b(f,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),t=b(f,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),d=b(f,"LINK",{rel:!0,href:!0}),o=b(f,"LINK",{rel:!0,href:!0,color:!0}),s=b(f,"LINK",{rel:!0,href:!0}),y=b(f,"META",{name:!0,content:!0}),r=b(f,"META",{name:!0,content:!0}),p=b(f,"META",{name:!0,content:!0}),m=b(f,"LINK",{rel:!0,href:!0,as:!0,type:!0}),f.forEach(B),L=l(e),N=b(e,"MAIN",{});var T=G(N);O&&O.l(T),A=l(T),_(k.$$.fragment,T),T.forEach(B),this.h()},h(){x(n,"rel","icon"),x(n,"type","image/x-icon"),x(n,"href",pe+"/assets/favicon.ico"),x(a,"rel","apple-touch-icon"),x(a,"sizes","180x180"),x(a,"href",pe+"/assets/apple-touch-icon.png?v=69P26YMB35"),x(i,"rel","icon"),x(i,"type","image/png"),x(i,"sizes","32x32"),x(i,"href",pe+"/assets/favicon-32x32.png?v=69P26YMB35"),x(t,"rel","icon"),x(t,"type","image/png"),x(t,"sizes","16x16"),x(t,"href",pe+"/assets/favicon-16x16.png?v=69P26YMB35"),x(d,"rel","manifest"),x(d,"href",pe+"/manifest.json?v=69P26YMB35"),x(o,"rel","mask-icon"),x(o,"href",pe+"/assets/safari-pinned-tab.svg?v=69P26YMB35"),x(o,"color","#da8517"),x(s,"rel","shortcut icon"),x(s,"href",pe+"/assets/favicon.ico?v=69P26YMB35"),x(y,"name","msapplication-TileColor"),x(y,"content","#da8517"),x(r,"name","msapplication-config"),x(r,"content",pe+"/static/assets/browserconfig.xml?v=69P26YMB35"),x(p,"name","theme-color"),x(p,"content","#da8517"),x(m,"rel","preload"),x(m,"href",pe+"/assets/fonts/flow-rounded.woff"),x(m,"as","font"),x(m,"type","font/woff")},m(e,T){P(document.head,n),P(document.head,a),P(document.head,i),P(document.head,t),P(document.head,d),P(document.head,o),P(document.head,s),P(document.head,y),P(document.head,r),P(document.head,p),P(document.head,m),S(e,L,T),S(e,N,T),O&&O.m(N,null),P(N,A),C(k,N,null),f=!0},p(e,[n]){O&&O.p&&(!f||1&n)&&ee(O,T,e,e[0],f?ae(T,e[0],n,null):ne(e[0]),null)},i(e){f||(u(O,e),u(k.$$.fragment,e),f=!0)},o(e){R(O,e),R(k.$$.fragment,e),f=!1},d(e){B(n),B(a),B(i),B(t),B(d),B(o),B(s),B(y),B(r),B(p),B(m),e&&B(L),e&&B(N),O&&O.d(e),h(k)}}}var Be=function(e,n,a,i){return new(a||(a=Promise))((function(t,d){function o(e){try{y(i.next(e))}catch(n){d(n)}}function s(e){try{y(i.throw(e))}catch(n){d(n)}}function y(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}y((i=i.apply(e,n||[])).next())}))};let Ee;const ve=({fetch:e})=>Be(void 0,void 0,void 0,(function*(){return Ee=(e=>r({url:se,fetch:e,exchanges:[p({schema:ge,keys:{GetMods:()=>null,LatestVersions:()=>null,UserMod:()=>null,GetGuides:()=>null,OAuthOptions:()=>null,UserRoles:()=>null},updates:{Mutation:{deleteGuide(e,n,a){a.invalidate({__typename:"Guide",id:n.guideId})},deleteMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},approveMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},denyMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},approveVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},denyVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},deleteSMLVersion(e,n,a){a.invalidate({__typename:"SMLVersion",id:n.smlVersionId})},deleteVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},updateVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})}}}}),m({addAuthToOperation(e){if(!e.authState||!e.authState.token)return e.operation;const n="function"==typeof e.operation.context.fetchOptions?e.operation.context.fetchOptions():e.operation.context.fetchOptions||{};return y(s({},e.operation),{context:y(s({},e.operation.context),{fetchOptions:y(s({},n),{headers:y(s({},n.headers),{Authorization:e.authState.token})})})})},getAuth:()=>new Promise((e=>ye.subscribe((n=>e(n)))())).then((e=>({token:e})))}),L({preferGetForPersistedQueries:!0}),N]}))(e),oe.set(Ee),{}}));function Je(e,n,a){let{$$slots:i={},$$scope:t}=n;return ie(Ee),e.$$set=e=>{"$$scope"in e&&a(0,t=e.$$scope)},[t,i]}class Ve extends A{constructor(e){super(),k(this,e,Je,he,f,{})}}export{Ve as default,ve as load};
//# sourceMappingURL=__layout.svelte-0da64437.js.map
