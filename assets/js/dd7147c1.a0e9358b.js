"use strict";(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[211],{7298:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(300);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(345),i=(t(300),t(7298));const a={sidebar_position:1,description:"All the files that can appear in an RPKG, and what they correspond to."},o="File Formats",l={unversionedId:"glacier2/fileformats",id:"glacier2/fileformats",title:"File Formats",description:"All the files that can appear in an RPKG, and what they correspond to.",source:"@site/docs/glacier2/fileformats.md",sourceDirName:"glacier2",slug:"/glacier2/fileformats",permalink:"/glacier2/fileformats",draft:!1,editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/glacier2/fileformats.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"All the files that can appear in an RPKG, and what they correspond to."},sidebar:"tutorialSidebar",previous:{title:"NPC Swap guide",permalink:"/npc-swap-tutorial"},next:{title:"RPKG",permalink:"/glacier2/rpkg"}},c={},p=[{value:"Glacier 2 Engine file formats",id:"glacier-2-engine-file-formats",level:3}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-formats"},"File Formats"),(0,i.kt)("h3",{id:"glacier-2-engine-file-formats"},"Glacier 2 Engine file formats"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AIBB: BehaviorTreeEntityBlueprint\nAIBX: BehaviorTreeEntityType\nAIBZ: CompiledBehaviorTreeResource\nAIRG: ReasoningGridResource\nALOC: Physics\nASEB: AspectEntityBlueprint\nASET: AspectEntityType\nASVA: AnimationSetVariation\nATMD: AnimationTakeMetaData\nBLOB: ResourceBlob\nBMSK: BoneMask\nBORG: AnimationBoneData\nBOXC: RenderBoxReflectionCache\nCBLU: CppEntityBlueprint\nCLNG: DialogCascadingLanguageDependencies\nCPPT: CppEntityType\nCRMD: CrowdMapDataResource\nDITL: DialogSoundTemplateList\nDLGE: DialogEvent\nDSWB: SAudioSwitchBlueprintData\nECPB: ExtendedCppEntityBlueprint\nECPT: ExtendedCppEntityType\nENUM: EnumType\nERES: EntityResource\nFXAC: FaceFX Actor\nFXAS: FaceFX AnimSet\nGFXF: ScaleformGFx\nGFXI: ScaleformGFx Images\nGFXV: ScaleformGfx Video\nGIDX: GlobalResourceIndex\nHIKC: HIKCharacter\nIMAP: IDMap\nJSON: JsonResource\nLINE: TextLine\nLOCR: LocalizationResource\nMATB: RenderMaterialEntityBlueprint\nMATE: RenderMaterialEffect\nMATI: RenderMaterialInstance\nMATT: RenderMaterialEntityType\nMJBA: MorphemeJointBoneAnimationData\nMRTN: MorphemeRuntimeNetwork\nMRTR: MorphemeRuntimeRig\nNAVP: NavpowerNavmesh\nORES: OnlineResource\nPREL: Preload\nPRIM: RenderPrimitive\nREPO: Repository\nRTLV: RuntimeLocalizedVideo\nSCDA: ScatterData\nSDEF: SoundDefinitions\nSLMX: SelectMatrix\nTBLU: TemplateEntityBlueprint\nTELI: TextList\nTEMP: TemplateEntity\nTEXD: RenderTextureData\nTEXT: RenderTexture\nUICB: UIControl Blueprint\nUICT: UIControl Template\nVIDB: VideoDatabaseResource\nVTXD: VertexData\nWBNK: WwiseBank\nWSGB: AudioStateBlueprint\nWSGT: AudioStateType\nWSWB: AudioSwitchBlueprint\nWSWT: AudioSwitchType\nWWEM: Wwise Encoded Media\nWWES: Wwise Encoded Media (HITMAN 3 specific, contains dialogue)\nWWEV: Wwise Event\nYSHP: PhysicsSystem\n")),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);