(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{35:function(e,r,a){e.exports=a(62)},62:function(e,r,a){"use strict";a.r(r);var t=a(1),c=a.n(t),n=a(13),u=a.n(n),l=a(20),o=a(3),s=c.a.lazy((function(){return Promise.all([a.e(10),a.e(5)]).then(a.bind(null,86))})),E=c.a.lazy((function(){return a.e(7).then(a.bind(null,89))}));function i(){return c.a.createElement(l.a,null,c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14...")},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/backoffice/login",name:"Login",render:function(e){return c.a.createElement(E,e)}}),c.a.createElement(o.b,{path:"/",name:"Dashboard",render:function(e){return c.a.createElement(s,e)}}))))}var O=a(34),d=a(10),p=a(32),b=a(33),j=a.n(b),y=a(0),D={currentUser:[],currentError:null,currentFailure:null};a(2);var S={currentDrugPoint:[],currentDrugPointFailure:null,currentDrugPointID:[],currentDrugPointFailureID:null};var I={patients:[],status:"idle",error:null};var A={currentDrugAddress:[],currentDrugAddressFailure:null,createAddress:[],createAddressFailure:null,updateAddress:[],updateAddressFailure:null};var R={currenDelivery:[],currenDeliveryFailure:null,msg:null,currentDeliveryId:[],currentDeliveryIdFailure:null,currentDeliveryPttype:[],currentDeliveryPttypeFailure:null,currentDeliveryOnline:[],currentDeliveryOnlineFailure:null,currentDeliveryVn:[],currentDeliveryVnFailure:null,currentDeliveryRemaindate:[],currentDeliveryRemaindateFailure:null,currentDeliveryDayRange:[],currentDeliveryDayRangeFailure:null,currentDeliverySearchTrack:[],currentDeliverySearchTrackFailure:null,currentDeliveryDepartmentPttype:[],currentDeliveryDepartmentPttypeFailure:null};var _={currentApppointment:[],currentApppointmentFailure:null,currentApppointmentVn:[],currentApppointmentVnFailure:null};var v={currentStatus:[],currentStatusFailure:null};var P={pttypes:[],status:"idle",error:null};var T={currentShipping:[],currentShippingFailure:null};var h={currentPharmacy:[],currentPharmacyFailure:null};var U={departs:[],status:"idle",error:null};var L={labs:[],status:"idle",error:null};var N={currentShop:[],currentShopFailure:null,updateShop:[],updateShopFailure:null,countShop:[],countShopFailure:null};var g={healths:[],health:[],status:"idle",error:null};var F=Object(d.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOGIN_USER":return Object(y.a)(Object(y.a)({},e),{},{currentUser:r.payload});case"LOGIN_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentFailure:"\u0e0a\u0e37\u0e48\u0e2d \u0e2b\u0e23\u0e37\u0e2d \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19 \u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14"});case"LOGIN_ERROR":return Object(y.a)(Object(y.a)({},e),{},{currentError:r.payload.error.message});case"LOGOUT_USER":case"LOGIN_LOGGEDIN":return Object(y.a)(Object(y.a)({},e),{},{currentUser:[]});case"LOGIN_PROFILE":return Object(y.a)(Object(y.a)({},e),{},{currentUser:r.payload});default:return e}},drugpoint:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"DRUGPOINT_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPoint:[]});case"DRUGPOINT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPoint:r.payload.payload});case"DRUGPOINT_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPointFailure:r.payload.error});case"DRUGPOINTID_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPointID:[]});case"DRUGPOINTID_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPointID:r.payload.payload});case"DRUGPOINTID_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDrugPointFailureID:r.payload.error});default:return e}},patients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"PATIENT_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"PATIENT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",patients:r.payload.payload});case"PATIENT_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"DRUGADDRESS_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDrugAddress:[]});case"DRUGADDRESS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDrugAddress:r.payload.payload});case"DRUGADDRESS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDrugAddressFailure:r.payload.error});case"CREATEADDRESS_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{createAddress:[]});case"CREATEADDRESS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{createAddress:r.payload.payload});case"CREATEADDRESS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{createAddressFailure:r.payload.error});case"UPDATEADDRESS_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{updateAddress:[]});case"UPDATEADDRESS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{updateAddress:r.payload.payload});case"UPDATEADDRESS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{updateAddress:r.payload.error});default:return e}},delivery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"DELIVERY_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:[]});case"DELIVERY_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:r.payload.payload});case"DELIVERY_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currenDeliveryFailure:r.payload.error});case"DELIVERY2_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:[]});case"DELIVERY2_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:r.payload.payload});case"DELIVERY2_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currenDeliveryFailure:r.payload.error});case"DELIVERYPUT_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{msg:[]});case"DELIVERYPUT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{msg:r.payload.payload});case"DELIVERYPUT_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{msg:r.payload.error});case"DELIVERYDAY_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:[]});case"DELIVERYDAY_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currenDelivery:r.payload.payload});case"DELIVERYDAY_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currenDeliveryFailure:r.payload.error});case"DELIVERYID_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryId:[]});case"DELIVERYID_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryId:r.payload.payload});case"DELIVERYID_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryIdFailure:r.payload.error});case"DELIVERYPTTYPE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryPttype:[]});case"DELIVERYPTTYPE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryPttype:r.payload.payload});case"DELIVERYPTTYPE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryPttypeFailure:r.payload.error});case"DELIVERYONLINE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryOnline:[]});case"DELIVERYONLINE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryOnline:r.payload.payload});case"DELIVERYONLINE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryOnlineFailure:r.payload.error});case"DELIVERY_VN_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryVn:[]});case"DELIVERY_VN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryVn:r.payload.payload});case"DELIVERY_VN_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryVnFailure:r.payload.error});case"DELIVERY_REMAINDATE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryRemaindate:[]});case"DELIVERY_REMAINDATE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryRemaindate:r.payload.payload});case"DELIVERY_REMAINDATE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryRemaindateFailure:r.payload.error});case"DELIVERYDATERANGE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDayRange:[]});case"DELIVERYDATERANGE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDayRange:r.payload.payload});case"DELIVERYDATERANGE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDayRangeFailure:r.payload.error});case"DELIVERY_SEARCHTRACK_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliverySearchTrack:[]});case"DELIVERY_SEARCHTRACK_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliverySearchTrack:r.payload.payload});case"DELIVERY_SEARCHTRACK_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliverySearchTrackFailure:r.payload.error});case"DELIVERY_DEPARTMENT_PTTYPE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDepartmentPttype:[]});case"DELIVERY_DEPARTMENT_PTTYPE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDepartmentPttype:r.payload.payload});case"DELIVERY_DEPARTMENT_PTTYPE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentDeliveryDepartmentPttypeFailure:r.payload.error});default:return e}},apppointment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"APPPOINTMENT_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentApppointment:[]});case"APPPOINTMENT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentApppointment:r.payload.payload});case"APPPOINTMENT_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentApppointmentFailure:r.payload.error});case"APPPOINTMENT_VN_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentApppointmentVn:[]});case"APPPOINTMENT_VN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentApppointmentVn:r.payload.payload});case"APPPOINTMENT_VN_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentApppointmentVnFailure:r.payload.error});default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"STATUS_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentStatus:[]});case"STATUS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentStatus:r.payload.payload});case"STATUS_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentStatusFailure:r.payload.error});default:return e}},pttypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"PTTYPE_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"PTTYPE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",pttypes:r.payload.payload});case"PTTYPE_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});default:return e}},shipping:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SHIPPING_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentShipping:[]});case"SHIPPING_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentShipping:r.payload.payload});case"SHIPPING_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentShippingFailure:r.payload.error});default:return e}},pharmacy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"PHARMACY_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentPharmacy:[]});case"PHARMACY_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentPharmacy:r.payload.payload});case"PHARMACY_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentPharmacyFailure:r.payload.error});default:return e}},departs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"DEPART_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"DEPART_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",departs:r.payload.payload});case"DEPART_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});default:return e}},labs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LAB_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"LAB_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",labs:r.payload.payload});case"LAB_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});default:return e}},shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SHOP_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{currentShop:[]});case"SHOP_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{currentShop:r.payload.payload});case"SHOP_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{currentShopFailure:r.payload.error});case"COUNTSHOP_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{countShop:[]});case"COUNTSHOP_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{countShop:r.payload.payload});case"COUNTSHOP_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{countShopFailure:r.payload.error});case"UPDATESHOP_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{updateShop:[]});case"UPDATESHOP_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{updateShop:r.payload.payload});case"UPDATESHOP_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{updateShop:r.payload.error});default:return e}},healths:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"HEALTHADD_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"HEALTHADD_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",healths:r.payload.payload});case"HEALTHADD_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});case"HEALTHFETCH_BEGIN":return Object(y.a)(Object(y.a)({},e),{},{status:"loading"});case"HEALTHFETCH_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{status:"succeeded",healths:r.payload.payload});case"HEALTHFETCH_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{status:"failed",error:r.payload.error.message});case"HEALTHGET_BEGIN":return Object(y.a)({},e);case"HEALTHGET_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{health:r.payload.payload});case"HEALTHGET_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{error:r.payload.error.message});default:return e}}}),C={store:Object(d.d)(F,Object(d.a)(j.a,p.a))}.store,G=function(){return c.a.createElement(O.a,{store:C},c.a.createElement(i,null))};u.a.render(c.a.createElement(G,null),document.getElementById("root")),function(){var e="".concat("/rehscan","/sw.js");"serviceWorker"in navigator&&navigator.serviceWorker.register(e,{scope:"."}).then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}()}},[[35,2,3]]]);
//# sourceMappingURL=main.ee03c565.chunk.js.map