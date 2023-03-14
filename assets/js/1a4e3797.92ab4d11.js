"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7920],{42027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r=a(67294),n=a(52263),l=a(63929),s=a(35742),c=a(39960),o=a(95999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var g=a(86010),d=a(16550),f=a(10412);const y="q",E="ctx",S="version";const C=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get(y)||"",s=r?.get(E)||"",c=r?.get(S)||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set(y,e):a.delete(y),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set(E,a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var I=a(90022),v=a(98202),x=a(82539),w=a(10726),R=a(91073),P=a(80311),_=a(73926),b=a(61029);const F={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function k(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=C(),[h,i]=(0,r.useState)(a),[d,f]=(0,r.useState)(),[y,E]=(0,r.useState)(),S=`${e}${c}`,x=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{u(h),d&&(h?d(h,(e=>{E(e)})):E(void 0))}),[h,d]);const w=(0,r.useCallback)((e=>{i(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==h&&i(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,I.w)(S,l);f((()=>(0,v.v)(e,t,100)))}()}),[l,S]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,x)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,x),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,g.Z)("col",{[F.searchQueryColumn]:Array.isArray(b.Kc),"col--9":Array.isArray(b.Kc),"col--12":!Array.isArray(b.Kc)})},r.createElement("input",{type:"search",name:"q",className:F.searchQueryInput,"aria-label":"Search",onChange:w,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(b.Kc)?r.createElement("div",{className:(0,g.Z)("col","col--3","padding-left--none",F.searchContextColumn)},r.createElement("select",{name:"search-context",className:F.searchContextInput,id:"context-selector",value:l,onChange:e=>m(e.target.value)},r.createElement("option",{value:""},b.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),b.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!d&&h&&r.createElement("div",null,r.createElement(P.Z,null)),y&&(y.length>0?r.createElement("p",null,t(y.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:y.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,y&&y.map((e=>r.createElement($,{key:e.document.i,searchResult:e}))))))}function $(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(b.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:F.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,x.C)(h,l):(0,w.o)(h,(0,R.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:F.searchResultItemPath},(0,_.e)(m)),u&&r.createElement("p",{className:F.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,R.m)(s,"t"),l,100)}}))}const Z=function(){return r.createElement(l.Z,null,r.createElement(k,null))}}}]);