"use strict";(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[913],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7665:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2,description:"Documentation for the HitmanDB API."},s="API",p={unversionedId:"hitmandb/api",id:"hitmandb/api",isDocsHomePage:!1,title:"API",description:"Documentation for the HitmanDB API.",source:"@site/docs/hitmandb/api.md",sourceDirName:"hitmandb",slug:"/hitmandb/api",permalink:"/hitmandb/api",editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/hitmandb/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Documentation for the HitmanDB API."},sidebar:"tutorialSidebar",previous:{title:"Information",permalink:"/hitmandb/information"}},u=[{value:'<span class="badge badge--primary">POST</span> /search',id:"post-search",children:[{value:"Request Fields (all are required, case insensitive):",id:"request-fields-all-are-required-case-insensitive",children:[],level:4},{value:"Example Request:",id:"example-request",children:[],level:4},{value:"Response Fields:",id:"response-fields",children:[],level:4},{value:"Result Format:",id:"result-format",children:[],level:4},{value:"Example Response:",id:"example-response",children:[],level:4},{value:"List of Types:",id:"list-of-types",children:[],level:4}],level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api"},"API"),(0,l.kt)("h3",{id:"post-search"},(0,l.kt)("span",{class:"badge badge--primary"},"POST")," /search"),(0,l.kt)("p",null,"Searches the Hash DB with the specified parameters.",(0,l.kt)("br",{parentName:"p"}),"\n","You can use any HTTP request method, but it is recommended to use POST.  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," JSON",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Required Headers:")," Content-Length",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Note:")," Any status code other than 200 should be considered an error. The following JSON will be returned if an error has occurred:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "invalid request json"\n}\n')),(0,l.kt)("p",null,"This is currently the only error that can occur."),(0,l.kt)("h4",{id:"request-fields-all-are-required-case-insensitive"},"Request Fields (all are required, case insensitive):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"search_term"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Term to search for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number_of_results"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'How many results should be returned on one "page"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string (type)"),(0,l.kt)("td",{parentName:"tr",align:null},"What type to search for (",(0,l.kt)("a",{parentName:"td",href:"#list-of-types"},"see list of types"),") e.g. ANY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page_number"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"What page to return results from (starting from 0)")))),(0,l.kt)("h4",{id:"example-request"},"Example Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "search_term": "azalea",\n    "number_of_results": 3,\n    "resource_type": "any",\n    "page_number": 0\n}\n')),(0,l.kt)("h4",{id:"response-fields"},"Response Fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"results"),(0,l.kt)("td",{parentName:"tr",align:null},"array (result)"),(0,l.kt)("td",{parentName:"tr",align:null},"The results returned from the search (",(0,l.kt)("a",{parentName:"td",href:"#result-format"},"see an example format below"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number_of_results"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'How many results should be returned on one "page" (as specified by user)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page_number"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"What page to return results from (starting from 0) (as specified by user)")))),(0,l.kt)("h4",{id:"result-format"},"Result Format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "00C736630357B43C",\n    "string": "[assembly:/_pro/design/actor/profession.template?/prof_sapienza_civilian_nakedguy.entitytemplate].pc_entitytype",\n    "type": "TEMP"\n}\n')),(0,l.kt)("h4",{id:"example-response"},"Example Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "number_of_results": 3,\n    "page_number": 0,\n    "results": [\n        {\n            "hash": "00800A1DAA3DB1B2",\n            "string": "azalea_green_a",\n            "type": "TEMP"\n        },\n        {\n            "hash": "00A48D280A10793D",\n            "string": "azalea_green_a",\n            "type": "TBLU"\n        },\n        {\n            "hash": "00200F50F4F10A24",\n            "string": "azalea_green_b",\n            "type": "TEMP"\n        }\n    ]\n}\n')),(0,l.kt)("h4",{id:"list-of-types"},"List of Types:"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"/glacier2/fileformats"},"Glacier 2 File Formats")," but with an added ",(0,l.kt)("inlineCode",{parentName:"p"},"ANY")," type which will return all types."))}d.isMDXComponent=!0}}]);