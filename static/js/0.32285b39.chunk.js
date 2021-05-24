(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(t,e,o){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.geoPropTypes=e.geolocated=void 0;var r,i=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=r?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=t[i]}o.default=t,e&&e.set(t,o);return o}(o(1)),u=(r=o(11))&&r.__esModule?r:{default:r};function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&s(t.prototype,e),o&&s(t,o),t}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=v(t);if(e){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return b(this,o)}}function b(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var g=function(t){return"Geolocated(".concat(t.displayName||t.name||"Component",")")};e.geolocated=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.positionOptions,o=void 0===e?{enableHighAccuracy:!0,maximumAge:0,timeout:1/0}:e,n=t.isOptimisticGeolocationEnabled,r=void 0===n||n,c=t.userDecisionTimeout,s=void 0===c?null:c,d=t.suppressLocationOnMount,b=void 0!==d&&d,v=t.watchPosition,O=void 0!==v&&v,w=t.geolocationProvider,P=void 0===w?"undefined"!==typeof navigator&&navigator.geolocation:w;return function(t){var e=function(e){p(u,e);var n=y(u);function u(){var t;l(this,u);for(var e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];return h(m(t=n.call.apply(n,[this].concat(i))),"isCurrentlyMounted",!1),h(m(t),"state",{coords:null,timestamp:null,isGeolocationAvailable:Boolean(P),isGeolocationEnabled:r,positionError:null}),h(m(t),"cancelUserDecisionTimeout",(function(){t.userDecisionTimeoutId&&clearTimeout(t.userDecisionTimeoutId)})),h(m(t),"onPositionError",(function(e){t.cancelUserDecisionTimeout(),t.isCurrentlyMounted&&t.setState({coords:null,isGeolocationEnabled:!1,positionError:e}),t.props.onError&&t.props.onError(e)})),h(m(t),"onPositionSuccess",(function(e){t.cancelUserDecisionTimeout(),t.isCurrentlyMounted&&t.setState({coords:e.coords,timestamp:e.timestamp,isGeolocationEnabled:!0,positionError:null}),t.props.onSuccess&&t.props.onSuccess(e)})),h(m(t),"getLocation",(function(){if(!P||!P.getCurrentPosition||!P.watchPosition)throw new Error("The provided geolocation provider is invalid");var e=(O?P.watchPosition:P.getCurrentPosition).bind(P);s&&(t.userDecisionTimeoutId=setTimeout((function(){t.onPositionError()}),s)),t.watchId=e(t.onPositionSuccess,t.onPositionError,o)})),t}return f(u,[{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,b||this.getLocation()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.cancelUserDecisionTimeout(),O&&P.clearWatch(this.watchId)}},{key:"render",value:function(){return i.default.createElement(t,a({},this.state,this.props))}}]),u}(i.Component);return e.displayName=g(t),e.propTypes={onError:u.default.func,onSuccess:u.default.func},e}};var O={coords:u.default.shape({latitude:u.default.number,longitude:u.default.number,altitude:u.default.number,accuracy:u.default.number,altitudeAccuracy:u.default.number,heading:u.default.number,speed:u.default.number}),timestamp:u.default.number,isGeolocationAvailable:u.default.bool,isGeolocationEnabled:u.default.bool,positionError:u.default.shape({code:u.default.oneOf([1,2,3]),message:u.default.string}),watchPosition:u.default.bool};e.geoPropTypes=O},116:function(t,e,o){},68:function(t,e,o){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var o=[],n=!0,r=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(o.push(u.value),!e||o.length!==e);n=!0);}catch(a){r=!0,i=a}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=0.32285b39.chunk.js.map