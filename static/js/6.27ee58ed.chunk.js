(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{81:function(e,t,a){e.exports=a.p+"static/media/003-fingerprint-2.2e6dfe5e.svg"},85:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(63);var r=function(e,t,a){var n=4e4/360,l=Math.cos(Math.PI*t.lat/180)*n,c=Math.abs(t.lng-e.lng)*l,r=Math.abs(t.lat-e.lat)*n;return Math.sqrt(c*c+r*r)<=a},o=a(73),i=a.n(o),s=a(79),m=function(e){return l.a.createElement("div",{className:"row",style:{marginBottom:10}},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"".concat(e.alert," alert-dismissible")},l.a.createElement("h5",null,"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19 !"),e.msg)))},d=(a(80),Object(s.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})((function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),o=a[0],s=a[1],d=Object(n.useState)(!0),u=Object(c.a)(d,2),g=(u[0],u[1]);return Object(n.useEffect)((function(){}),[e.show,e.msg]),"chkin"===e.msg||"chkout"===e.msg?e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},e.show?l.a.createElement(i.a,{delay:300,onError:function(e){console.error(e)},onScan:function(t){return function(t,a,n){if(null!==t&&void 0!==t){console.log(t[0].latitude);var l=JSON.parse(t);s(l),console.log(l),r({lat:a,lng:n},{lat:l.latitude,lng:l.longitude},.2)?e.confirm(e.msg,!1):g(!0)}}(t,e.coords.latitude.toFixed(4),e.coords.longitude.toFixed(4))},style:{width:"100%"}}):"")),l.a.createElement("div",{className:"row",style:{marginTop:10}},r({lat:e.coords.latitude.toFixed(4),lng:e.coords.longitude.toFixed(4)},{lat:void 0!==o?o.latitude:0,lng:void 0!==o?o.longitude:0},.2)?l.a.createElement("div",{className:"col-12"},e.show?l.a.createElement(m,{msg:"---  \u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e08\u0e38\u0e14\u0e2a\u0e41\u0e01\u0e19 \u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e19 200 \u0e40\u0e21\u0e15\u0e23 ---",alert:"alert alert-warning"}):l.a.createElement(m,{msg:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e40\u0e27\u0e25\u0e32\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",alert:"alert alert-success"})):l.a.createElement("div",{className:"col-12",style:{textAlign:"center"}},l.a.createElement(m,{msg:"---  \u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e08\u0e38\u0e14\u0e2a\u0e41\u0e01\u0e19 \u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e19 200 \u0e40\u0e21\u0e15\u0e23 ---",alert:"alert alert-warning"})))):l.a.createElement("div",null,"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 \u2026 "):l.a.createElement("div",null,l.a.createElement(m,{msg:"--- \u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e1b\u0e34\u0e14 GPS \u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19 ---",alert:"alert alert-warning"})):l.a.createElement(m,{msg:"--- \u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a \u0e41\u0e19\u0e30\u0e19\u0e33 Chome---",alert:"alert alert-warning"}):l.a.createElement("div",{className:"col-12",style:{textAlign:"center"}},l.a.createElement(m,{msg:"--- \u0e01\u0e14 \u0e2a\u0e41\u0e01\u0e19\u0e40\u0e02\u0e49\u0e32 - \u0e2d\u0e2d\u0e01 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e17\u0e33\u0e01\u0e32\u0e23\u0e2a\u0e41\u0e01\u0e19 ---",alert:"alert alert-info"}))}))),u=a(81),g=a.n(u);var E=function(e){return l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-12",style:{padding:2}},l.a.createElement("button",{type:"submit",className:"btn btn-default btn-lg btn-block",onClick:function(){return e.confirm("chkin",!0)}},l.a.createElement("img",{src:g.a,alt:"memberchk in",style:{width:50,marginRight:5,marginLeft:-7,paddingBottom:2}}),l.a.createElement("p",null,"\u0e2a\u0e41\u0e01\u0e19\u0e40\u0e02\u0e49\u0e32"))),l.a.createElement("div",{className:"col-md-6 col-12",style:{padding:2}},l.a.createElement("button",{type:"submit",className:"btn btn-default btn-lg btn-block",onClick:function(){return e.confirm("chkout",!0)}},l.a.createElement("img",{src:g.a,alt:"memberchk out",style:{width:50,marginRight:5,marginLeft:-7,paddingBottom:2}}),l.a.createElement("p",null,"\u0e2a\u0e41\u0e01\u0e19\u0e2d\u0e2d\u0e01")))))};var f=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),i=Object(c.a)(o,2),s=i[0],m=i[1],u=function(e,t){console.log(e,t),r(e),m(t)};return Object(n.useEffect)((function(){}),[]),l.a.createElement("section",{className:"content",style:{marginTop:-16}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card"},l.a.createElement(E,{confirm:u}),l.a.createElement("div",{className:"card-body"},l.a.createElement(d,{msg:a,show:s,confirm:u})))))};t.default=function(){return l.a.createElement("div",null,l.a.createElement(f,null))}}}]);
//# sourceMappingURL=6.27ee58ed.chunk.js.map