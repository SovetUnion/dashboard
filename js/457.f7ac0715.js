"use strict";(globalThis["webpackChunkgetpay"]=globalThis["webpackChunkgetpay"]||[]).push([[457],{3457:(e,a,t)=>{t.r(a),t.d(a,{default:()=>q});var l=t(9835),n=t(6970);const o=(0,l._)("div",{class:"col-2 q-table__title"},"Payment Channel",-1);function p(e,a,t,p,r,s){const d=(0,l.up)("q-img"),m=(0,l.up)("q-td"),i=(0,l.up)("q-chip"),u=(0,l.up)("q-toggle"),c=(0,l.up)("q-btn"),f=(0,l.up)("q-tr"),_=(0,l.up)("q-table"),w=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(w,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{rows:e.rows,columns:e.columns},{top:(0,l.w5)((()=>[o])),body:(0,l.w5)((a=>[(0,l.Wm)(f,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{key:"img",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{src:e.baseUrl+a.row.img},null,8,["src"])])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"name",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"primary","text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.row.name),1)])),_:2},1024)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"status",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e,"true-value":1,"false-value":0,color:"green","checked-icon":"check","unchecked-icon":"visibility_off","keep-color":"",disable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"unique_code",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{ripple:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.row.unique_code),1)])),_:2},1024)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"fee",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{ripple:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.row.fee),1)])),_:2},1024)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"fee_percent",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{ripple:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.row.fee_percent),1)])),_:2},1024)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"min_amount",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{ripple:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.row.min_amount),1)])),_:2},1024)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"date_created",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$formatDate(a.row.date_created)),1)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"date_updated",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$formatDate(a.row.date_updated)),1)])),_:2},1032,["props"]),(0,l.Wm)(m,{key:"actions",props:a,class:"q-gutter-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"Edit",outline:"",color:"primary",icon:"edit",onClick:t=>e.edit(a.row),size:"sm"},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})}var r=t(2502),s=t(6928),d=t(2276);const m=(0,l.aZ)({name:"PaymentChannel",preFetch({currentRoute:e}){const a=(0,s.t)(),t=(0,d.t)();return a.axios.get("/payment/channel/",{params:{pm_id:e.params.pm_id}}).then((e=>{t.setPaymentChannels(e.data.data)})).catch((e=>{console.log(e)}))},setup(){const{baseUrl:e}=(0,s.t)(),{paymentChannels:a}=(0,r.Jk)((0,d.t)());return{baseUrl:e,rows:a,columns:[{name:"img",label:"Image",field:"img",align:"left"},{name:"name",label:"Name",field:"name",align:"left"},{name:"status",label:"Status",field:"status",align:"left"},{name:"unique_code",label:"Unique Code",field:"unique_code",align:"left"},{name:"fee",label:"Fixed Fee",field:"fee",align:"left"},{name:"fee_percent",label:"Percent Fee",field:"fee_percent",align:"left"},{name:"min_amount",label:"Min Amount",field:"min_amount",align:"left"},{name:"date_created",label:"Date Created",field:"date_created",align:"left"},{name:"date_updated",label:"Date Updated",field:"date_updated",align:"left"},{name:"actions",field:"actions",label:"Actions",align:"left"}]}},methods:{edit(e){const a={pm_id:this.$route.params.pm_id,id:e.id};this.$router.push({name:"paymentChannelEdit",params:a})}}});var i=t(1639),u=t(9885),c=t(7580),f=t(9546),_=t(7220),w=t(335),g=t(7691),k=t(3175),b=t(4455),h=t(9984),y=t.n(h);const W=(0,i.Z)(m,[["render",p]]),q=W;y()(m,"components",{QPage:u.Z,QTable:c.Z,QTr:f.Z,QTd:_.Z,QImg:w.Z,QChip:g.Z,QToggle:k.Z,QBtn:b.Z})}}]);