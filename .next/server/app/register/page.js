(()=>{var e={};e.id=11,e.ids=[11],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7807:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=a(7096),n=a(6132),t=a(7284),o=a.n(t),l=a(2564),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);a.d(r,i);let d=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6194)),"C:\\Final-test\\src\\app\\register\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,9113)),"C:\\Final-test\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Final-test\\src\\app\\register\\page.tsx"],m="/register/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4946:(e,r,a)=>{Promise.resolve().then(a.bind(a,9191))},9191:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(784),n=a(9885),t=a(7114);let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,t.useRouter)(),[r,a]=(0,n.useState)({dpi:"",nombre:"",apellido:"",edad:"",email:"",numeroTelefono:"",fechanacimiento:"",direccion:"",password:"",confirmPassword:""}),handleChange=e=>{let{name:s,value:n}=e.target;a({...r,[s]:n})},handleSubmit=async a=>{if(a.preventDefault(),!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(r.password)){alert("La contrase\xf1a no cumple con el formato requerido.\nRequisitos:Debe contener al menos un d\xedgito (0-9).\nDebe contener al menos una letra (may\xfascula o min\xfascula).\nDebe contener al menos uno de los caracteres especiales: @, #, $, %, ^, &, +, =, !, * o _.\nPuede contener letras may\xfasculas, letras min\xfasculas, d\xedgitos o cualquiera de los caracteres especiales mencionados.\nDebe tener al menos 8 caracteres de longitud.");return}if(r.password!==r.confirmPassword){alert("Las contrase\xf1as no coinciden. Por favor, int\xe9ntalo de nuevo.");return}try{let a=await fetch(`https://api-2-xgyd.onrender.com/api/registro/${r.dpi}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});a.ok?(console.log("Documento insertado con \xe9xito"),e.replace("../")):(console.error("Error al insertar documento"),alert("Error al registrar. Por favor, int\xe9ntalo de nuevo."))}catch(e){console.error("Error de red:",e)}};return s.jsx("div",{className:"min-h-screen flex items-center justify-center py-12 px-12 ",children:(0,s.jsxs)("div",{className:"w-1/2 w-full p-4 bg-white rounded-lg shadow-md",children:[s.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Formulario de Registro"}),(0,s.jsxs)("form",{onSubmit:handleSubmit,className:"grid grid-cols-2 gap-3",children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"nombre",className:"block text-gray-700 font-medium",children:"Nombre:"}),s.jsx("input",{type:"text",id:"nombre",name:"nombre",value:r.nombre,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"apellido",className:"block text-gray-700 font-medium",children:"Apellido:"}),s.jsx("input",{type:"text",id:"apellido",name:"apellido",value:r.apellido,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"edad",className:"block text-gray-700 font-medium",children:"Edad:"}),s.jsx("input",{type:"number",id:"edad",name:"edad",value:r.edad,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Correo:"}),s.jsx("input",{type:"email",id:"correo",name:"email",value:r.email,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"DPI:"}),s.jsx("input",{type:"text",id:"dpi",name:"dpi",value:r.dpi,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Correo:"}),s.jsx("input",{type:"email",id:"correo",name:"email",value:r.email,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Numero Telefono:"}),s.jsx("input",{type:"text",id:"numeroTelefono",name:"numeroTelefono",value:r.numeroTelefono,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Fecha de Nacimiento:"}),s.jsx("input",{type:"date",id:"fechanacimiento",name:"fechanacimiento",value:r.fechanacimiento,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Contrasena:"}),s.jsx("input",{type:"password",id:"password",name:"password",value:r.password,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"confirmPassword",className:"block text-gray-700 font-medium",children:"Confirmar Contrase\xf1a:"}),s.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:r.confirmPassword,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"correo",className:"block text-gray-700 font-medium",children:"Direccion:"}),s.jsx("input",{type:"text",id:"direccion",name:"direccion",value:r.direccion,onChange:handleChange,className:"w-full border border-gray-300 rounded-md p-2",required:!0})]}),s.jsx("div",{className:"mb-4 ",children:s.jsx("center",{children:s.jsx("button",{type:"submit",className:"w-1/4 bg-rose-500 text-white font-medium py-2 rounded-md hover:bg-rose-600",children:"Registrar"})})})]})]})})}},6194:(e,r,a)=>{"use strict";a.r(r),a.d(r,{$$typeof:()=>o,__esModule:()=>t,default:()=>i});var s=a(5153);let n=(0,s.createProxy)(String.raw`C:\Final-test\src\app\register\page.tsx`),{__esModule:t,$$typeof:o}=n,l=n.default,i=l},3881:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let r=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:r+""}]}}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[164,1,814],()=>__webpack_exec__(7807));module.exports=a})();