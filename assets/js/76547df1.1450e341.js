"use strict";(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[145],{7298:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(300);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(345),o=(r(300),r(7298));const i={sidebar_position:2},a="Mass extracting files",l={unversionedId:"rpkg/gui/mass_extract",id:"rpkg/gui/mass_extract",title:"Mass extracting files",description:"The Mass Extract allows you to extract all files in one or more RPKGs based on filetype. See File Formats to see what the content of file types are.",source:"@site/docs/rpkg/gui/mass_extract.md",sourceDirName:"rpkg/gui",slug:"/rpkg/gui/mass_extract",permalink:"/rpkg/gui/mass_extract",draft:!1,editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/rpkg/gui/mass_extract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Generate",permalink:"/rpkg/gui/generate"},next:{title:"Opening RPKGs",permalink:"/rpkg/gui/opening and finding files"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mass-extracting-files"},"Mass extracting files"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Mass Extract")," allows you to extract all files in one or more RPKGs based on filetype. See ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.notex.app/glacier2/fileformats"},"File Formats")," to see what the content of file types are."),(0,o.kt)("p",null,"In the menu bar press ",(0,o.kt)("inlineCode",{parentName:"p"},"Mass Extract"),". The first prompt will ask you to select a folder containing RPKGs. Keep in mind that all RPKGs in the folder will be extracted. Therefore, if you are only interested in only one RPKG you are adviced to copy this to a different folder and provide it as input. The second prompt will ask you for an output folder.\nSome options will not only export but also convert the file to a more edit friendly option."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"metas")," folder will be created together with the extracted files. This folder is needed when rebuilding the files back into the game."),(0,o.kt)("p",null,"The wiki is currently a work in progress at the moment, please feel free to contribute @ ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/glacier-modding/wiki.notex.app"},"https://github.com/glacier-modding/wiki.notex.app")))}u.isMDXComponent=!0}}]);