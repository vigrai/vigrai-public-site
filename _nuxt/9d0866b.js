(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o={name:"SanityImage",functional:!0,props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},download:{type:[String,Boolean],default:!1}},render(t,{props:e,parent:n,scopedSlots:o}){const d=e.assetId.split("-").slice(1),l=d.pop();let r=`https://cdn.sanity.io/files/${e.projectId||n&&n.$sanity.config.projectId}/${e.dataset||n.$sanity&&n.$sanity.config.dataset||"production"}/${d.join("-")}.${l}`;return e.download&&(r=r+"?dl="+("string"==typeof e.download?e.download:"")),o.default({src:r})||t("span")}};e.SanityFile=o,e.default=o}}]);