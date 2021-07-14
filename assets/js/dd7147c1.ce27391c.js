(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[211],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6399:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:1,description:"All the files that can appear in an RPKG, and what they correspond to."},l="File Formats",p={unversionedId:"glacier2/fileformats",id:"glacier2/fileformats",isDocsHomePage:!1,title:"File Formats",description:"All the files that can appear in an RPKG, and what they correspond to.",source:"@site/docs/glacier2/fileformats.md",sourceDirName:"glacier2",slug:"/glacier2/fileformats",permalink:"/glacier2/fileformats",editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/glacier2/fileformats.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"All the files that can appear in an RPKG, and what they correspond to."},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/"},next:{title:"RPKG",permalink:"/glacier2/rpkg"}},s=[],u={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-formats"},"File Formats"),(0,o.kt)("p",null,"Glacier 2 Engine file formats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AIBB: BehaviorTreeEntityBlueprint\nAIBX: BehaviorTreeEntityType\nAIBZ: CompiledBehaviorTreeResource\nAIRG: ReasoningGridResource\nALOC: Physics\nASEB: AspectEntityBlueprint\nASET: AspectEntityType\nASVA: AnimSetVariation\nATMD: AMD\nBLOB: ResourceBlob\nBMSK: BoneMask\nBORG: AnimationBoneData\nCBLU: CppEntityBlueprint\nCLNG: DialogCascadingLanguageDependencies\nCPPT: CppEntityType\nCRMD: CrowdMapDataResource\nDITL: DialogSoundTemplateList\nDLGE: DialogEvent\nECPB: ExtendedCppEntityBlueprint\nECPT: ExtendedCppEntityType\nENUM: EnumType\nERES: EntityResource\nFXAC: Actor\nFXAS: AnimSet\nGFXF: ScaleformGFx\nGFXI: ScaleformGFx\nGFXV: ScaleformGfxVideo\nGIDX: GlobalResourceIndex\nHIKC: HIKCharacter\nIMAP: IDMap\nJSON: JsonResource\nLINE: TextLine\nLOCR: Localization\nMATB: RenderMaterialEntityBlueprint\nMATE: RenderMaterialEffect\nMATI: RenderMaterialInstance\nMATT: RenderMaterialEntityType\nMJBA: Animation\nMRTN: Network\nMRTR: Rig\nNAVP: NavpowerNavmesh\nORES: OnlineResource\nPREL: Preload\nPRIM: RenderPrimitive\nREPO: Repository\nRTLV: RuntimeLocalizedVideo\nSCDA: ScatterData\nSDEF: SDefs\nSLMX: SelectMatrix\nTBLU: TemplateBlueprint\nTELI: TextList\nTEMP: Template\nTEXD: RenderTextureData\nTEXT: RenderTexture\nUICB: UIControl\nUICT: UIControl\nVIDB: VideoDatabaseResource\nVTXD: VertexData\nWBNK: WwiseBank\nWSGB: AudioStateBlueprint\nWSGT: AudioStateType\nWSWB: AudioSwitchBlueprint\nWSWT: AudioSwitchType\nWWEM: Wem\nWWEV: WwiseEvent\nYSHP: PhysicsSystem\n")))}f.isMDXComponent=!0}}]);