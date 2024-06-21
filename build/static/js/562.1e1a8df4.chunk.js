"use strict";(self.webpackChunkmy_redux_application=self.webpackChunkmy_redux_application||[]).push([[562],{4562:function(e,s,l){l.r(s),l.d(s,{default:function(){return z}});var a=l(1413),i=l(4165),r=l(5861),t=l(9439),n=l(1518),c=l(2187),d=l(3974),o=l(1909),x=l(7689),m=l(8777),p=l(5281),u=l(9453),h=l(629),g=l(4103),v=l(2791),f=l(7993),j=l(184),N={width:"100%",height:"100%"},y={lat:30.71312819645935,lng:76.6866264462313};function b(){var e=(0,v.useState)(!1),s=(0,t.Z)(e,2),l=s[0],a=s[1];return(0,j.jsx)(f.KJ,{googleMapsApiKey:"AIzaSyAKQHnip2EA2qYh6hSW3cW4q_ruWawMAhY",onLoad:function(){a(!0)},children:l?(0,j.jsx)(f.b6,{mapContainerStyle:N,center:y,zoom:12,onUnmount:function(){},options:{styles:[{featureType:"all",elementType:"all",stylers:[{saturation:-100}]}]},children:(0,j.jsx)(f.Jx,{position:y})}):(0,j.jsx)("h1",{children:"Loading....."})})}var w=v.memo(b),_=l(5494),S=l(8038),Z=l(8532),q=l(9642),T=["Success Fulfill","StartUp Business","Business Growth"],k=_.T2.object().shape({email:_.T2.string().email("Invalid email").required("Email is required"),name:_.T2.string().required("Name is required"),phone:_.T2.string().nullable(),message:_.T2.string().required("Message required"),service_type:_.T2.string().oneOf(T).required("Select service is required")}),C={email:"",name:"",phone:"",message:"",service_type:""},z=function(){(0,x.s0)();var e,s,l,f,N,y=(0,v.useState)(!1),b=(0,t.Z)(y,2),z=b[0],Y=b[1],A=(0,Z.TL)(),E=(0,Z.ix)((function(e){return e.Devronins})),F=E.devroninsDetails;E.error,E.devroninsDetailsLoading;(0,v.useEffect)((function(){A((0,q.YT)())}),[]);var I=(0,_.cI)({defaultValues:C,resolver:(0,_.Xp)(k)}),M=I.register,L=I.handleSubmit,W=I.setValue,B=I.watch,K=I.reset,D=I.formState.errors,O=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(s){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,(0,S.K)({from_name:s.name,message:s.message,service_type:s.service_type,contact_no:(null===s||void 0===s?void 0:s.phone)||"N/A",email:s.email});case 3:Y(!1),K();case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,j.jsx)("div",{className:"w-full h-full",children:(0,j.jsxs)("div",{className:" flex flex-col justify-center ",children:[(0,j.jsxs)("div",{className:" relative xl:w-[lg]  flex flex-col items-center h-auto lg:px-20  px-5 pt-20 mx-auto",children:[(0,j.jsxs)("div",{className:" flex flex-col gap-10",children:[(0,j.jsxs)("div",{className:" flex lg:flex-row flex-col lg:items-center lg:gap-10 gap-5",children:[(0,j.jsxs)("div",{className:" text-3xl font-bold  lg:text-4xl",children:["Grow Your Business With",(0,j.jsx)("span",{className:"text-primary-foreground",children:" Our Expertise "})]}),(0,j.jsx)("div",{className:" flex items-center text-secondary-foreground",children:(0,j.jsx)(n.C0,{title:"We understand the importance of approaching each work integrally and believe in the power of simple."})})]}),(0,j.jsxs)("div",{className:" flex lg:flex-row lg:items-center flex-col gap-5",children:[(0,j.jsxs)("div",{className:" grid grid-cols-1 gap-5 lg:w-[30%]",children:[(0,j.jsxs)("div",{className:" bg-accent lg:py-8 lg:px-10 px-5 py-5 flex gap-4",children:[(0,j.jsx)("div",{className:"flex",children:(0,j.jsx)(c.kXE,{size:50,className:"text-primary"})}),(0,j.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.Ct,{title:"Official address:",className:"text-black text-lg"})}),(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.C0,{title:null===F||void 0===F?void 0:F.address,className:"text-sm leading-normal opacity-70"})})]})]}),(0,j.jsxs)("div",{className:" bg-accent lg:py-8 lg:px-10 px-5 py-5 flex gap-4",children:[(0,j.jsx)("div",{className:"flex",children:(0,j.jsx)(d.tUt,{size:40,className:"text-primary"})}),(0,j.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.Ct,{title:"Telephone number:",className:"text-black text-lg"})}),(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.C0,{title:null===F||void 0===F?void 0:F.contact_no,className:"text-sm leading-normal opacity-70"})})]})]}),(0,j.jsxs)("div",{className:" bg-accent lg:py-8 lg:px-10 px-5 py-5 flex gap-4",children:[(0,j.jsx)("div",{className:"flex",children:(0,j.jsx)(o.LHg,{size:50,className:"text-primary"})}),(0,j.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.Ct,{title:"Mail address:",className:"text-black text-lg"})}),(0,j.jsx)("div",{className:" flex ",children:(0,j.jsx)(n.C0,{title:"devronins_offical@devronins.com",className:"text-sm leading-normal opacity-70"})})]})]})]}),(0,j.jsx)("div",{className:" lg:w-[70%] lg:py-20 lg:px-20 px-5 py-10 bg-accent",children:(0,j.jsxs)("form",{className:" grid grid-cols-1 lg:grid-cols-2 gap-5",onSubmit:L(O),children:[(0,j.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,j.jsx)("label",{htmlFor:"name",className:"text-sm",children:"Name (required)"}),(0,j.jsx)(m.I,(0,a.Z)((0,a.Z)({disabled:z,type:"text",id:"name",placeholder:"Your name*"},M("name")),{},{error:null===D||void 0===D||null===(e=D.name)||void 0===e?void 0:e.message}))]}),(0,j.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,j.jsx)("label",{htmlFor:"email",className:"text-sm",children:"Email adress (required)"}),(0,j.jsx)(m.I,(0,a.Z)((0,a.Z)({disabled:z,type:"email",id:"email",placeholder:"Mail*"},M("email")),{},{error:null===D||void 0===D||null===(s=D.email)||void 0===s?void 0:s.message}))]}),(0,j.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,j.jsx)("label",{htmlFor:"phone",className:"text-sm",children:"Phone (optional)"}),(0,j.jsx)(m.I,(0,a.Z)((0,a.Z)({disabled:z,type:"text",id:"phone",placeholder:"Your phone"},M("phone")),{},{error:null===D||void 0===D||null===(l=D.phone)||void 0===l?void 0:l.message}))]}),(0,j.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,j.jsx)("label",{htmlFor:"service_type",className:"text-sm",children:"Services (required)"}),(0,j.jsxs)(p.Ph,{onValueChange:function(e){return W("service_type",e)},value:B("service_type"),children:[(0,j.jsx)(p.i4,{disabled:z,className:"w-full",error:null===D||void 0===D||null===(f=D.service_type)||void 0===f?void 0:f.message,children:(0,j.jsx)(p.ki,{placeholder:"Select Service"})}),(0,j.jsx)(p.Bw,{children:null===T||void 0===T?void 0:T.map((function(e,s){return(0,j.jsx)(p.Ql,{value:e,children:e},s+1)}))})]})]}),(0,j.jsxs)("div",{className:"grid w-full items-center gap-1.5 lg:col-span-2",children:[(0,j.jsx)("label",{htmlFor:"message",className:"text-sm",children:"Your message"}),(0,j.jsx)(u.g,(0,a.Z)((0,a.Z)({disabled:z,id:"message",placeholder:"Type message*",className:"h-[140px]"},M("message")),{},{error:null===D||void 0===D||null===(N=D.message)||void 0===N?void 0:N.message}))]}),(0,j.jsxs)(h.z,{type:"submit",className:"w-40 h-[auto] rounded-none gradient8 text-sm text-white py-3",children:[z&&(0,j.jsx)(g.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Send Message"]})]})})]})]}),(0,j.jsx)("div",{className:" w-full h-auto absolute opacity-[0.1] z-[-10]"})]}),(0,j.jsx)("div",{className:" flex  lg:h-[450px] h-[300px] pt-20",children:(0,j.jsx)(w,{})})]})})}}}]);
//# sourceMappingURL=562.1e1a8df4.chunk.js.map