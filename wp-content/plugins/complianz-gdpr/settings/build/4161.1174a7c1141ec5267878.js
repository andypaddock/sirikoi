"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[4161,9091,9758],{84161:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(86087),o=a(79758),i=a(9588),s=a(4219),l=a(52043),r=a(56427);const d=({label:e,field:t,disabled:a})=>{const{fetchFieldsData:d,showSavedSettingsNotice:c}=(0,s.default)(),{selectedSubMenuItem:m}=(0,l.default)(),[u,f]=(0,n.useState)(!1);let g=t.button_text?t.button_text:t.label;if(t.action){const e=async e=>{t.warn?f(!0):await p()},s=async()=>{f(!1),await p()},l=()=>{f(!1)},p=async e=>{await i.doAction(t.action,{}).then((e=>{e.success&&(d(m),c(e.message))}))};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.default,{text:g,style:"secondary",disabled:a,onClick:t=>e(t)}),(0,n.createElement)(r.__experimentalConfirmDialog,{isOpen:u,onConfirm:s,onCancel:l},t.warn))}return(0,n.createElement)(o.default,{style:"secondary",label:g,disabled:a,href:t.url})}},99091:(e,t,a)=>{a.r(t),a.d(t,{UseCookieScanData:()=>i});var n=a(81621),o=a(9588);const i=(0,n.vt)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),o.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},79758:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(86087),o=a(9588),i=a(4219),s=a(52043),l=a(56427),r=a(99091),d=a(32828);const c=(0,n.memo)((({type:e="action",style:t="tertiary",label:a,onClick:c,href:m="",target:u="",disabled:f,action:g,field:p,children:b})=>{if(!a&&!b)return null;const C=(p&&p.button_text?p.button_text:a)||b,{fetchFieldsData:h,showSavedSettingsNotice:w}=(0,i.default)(),{setInitialLoadCompleted:_,setProgress:k}=(0,r.UseCookieScanData)(),{setProgressLoaded:y}=(0,d.default)(),{selectedSubMenuItem:L}=(0,s.default)(),[x,v]=(0,n.useState)(!1),S=`button cmplz-button button--${t} button-${e}`,D=async e=>{await o.doAction(p.action,{}).then((e=>{e.success&&(h(L),"reset_settings"===e.id&&(_(!1),k(0),y(!1)),w(e.message))}))},E=p&&p.warn?p.warn:"";return"action"===e?(0,n.createElement)(n.Fragment,null,l.__experimentalConfirmDialog&&(0,n.createElement)(l.__experimentalConfirmDialog,{isOpen:x,onConfirm:async()=>{v(!1),await D()},onCancel:()=>{v(!1)}},E),(0,n.createElement)("button",{className:S,onClick:async t=>{if("action"!==e||!c)return"action"===e&&g?l.__experimentalConfirmDialog?void(p&&p.warn?v(!0):await D()):void await D():void(window.location.href=p.url);c(t)},disabled:f},C)):"link"===e?(0,n.createElement)("a",{className:S,href:m,target:u},C):void 0}))}}]);