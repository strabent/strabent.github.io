(window.AMP = window.AMP || []).push(function(AMP) {var process={env:{NODE_ENV:"production"}};var f={scope:{},getGlobal:function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}};f.global=f.getGlobal(this);f.initSymbol=function(){f.global.Symbol||(f.global.Symbol=f.Symbol);f.initSymbol=function(){}};f.symbolCounter_=0;f.Symbol=function(a){return"jscomp_symbol_"+a+f.symbolCounter_++};f.initSymbolIterator=function(){f.initSymbol();f.global.Symbol.iterator||(f.global.Symbol.iterator=f.global.Symbol("iterator"));f.initSymbolIterator=function(){}};
f.makeIterator=function(a){f.initSymbolIterator();if(a[f.global.Symbol.iterator])return a[f.global.Symbol.iterator]();if(!(a instanceof Array||"string"==typeof a||a instanceof String))throw new TypeError(a+" is not iterable");var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}};f.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};f.arrayFromIterable=function(a){return a instanceof Array?a:f.arrayFromIterator(f.makeIterator(a))};
f.arrayFromArguments=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b};f.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(f.global.Object.defineProperties){var e=f.global.Object.getOwnPropertyDescriptor(b,d);void 0!==e&&f.global.Object.defineProperty(a,d,e)}else a[d]=b[d]};var h={};function k(a){return Error(a+"\u200b\u200b\u200b")}h.ASSERT_SENTINEL="\u200b\u200b\u200b";h.assert=function(a,b,c){var d=void 0;if(!a){var e=(b||"Assertion failed").split("%s"),g=e.shift(),u=g,B=[];""!=g&&B.push(g);for(g=2;g<arguments.length;g++){var p=arguments[g];p&&p.tagName&&(d=p);var I=e.shift();B.push(p);var J=I.trim();""!=J&&B.push(J);p=p instanceof Element?p.tagName.toLowerCase()+(p.id?"#"+p.id:""):p;u+=p+I}e=k(u);e.fromAssert=!0;e.associatedElement=d;e.messageArray=B;throw e;}return a};
h.assertEnumValue=function(a,b,c){for(var d in a)if(a[d]==b)return a[d];throw Error("Unknown "+(c||"enum")+' value: "'+b+'"');};h.userError=k;h.isAssertErrorMessage=function(a){return 0<=a.indexOf("\u200b\u200b\u200b")};var l={};function m(a){var b=a.services;b||(b=a.services={});return b}l.getService=function(a,b,c){var d=m(a),e=d[b];e||(e=d[b]={obj:null,promise:null,resolve:null});e.obj||(h.assert(c,"Factory not given and service missing %s",b),e.obj=c(a),e.promise||(e.promise=Promise.resolve(e.obj)),e.resolve&&e.resolve(e.obj));return e.obj};l.getServicePromise=function(a,b){var c=m(a),d=c[b];if(d)return d.promise;var e=void 0,d=new Promise(function(a){e=a});c[b]={obj:null,promise:d,resolve:e};return d};
l.getServicePromiseOrNull=function(a,b){var c=m(a);return c[b]?c[b].promise:null};l.resetServiceForTesting=function(a,b){a.services&&(a.services[b]=null)};var n={},q=Object.create(null),r="Webkit webkit Moz moz ms O o".split(" ");function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function v(a,b,c){var d=q[b];if(!d||c){d=b;if(void 0===a[b]){var e=t(b);a:{for(var g=0;g<r.length;g++){var u=r[g]+e;if(void 0!==a[u]){e=u;break a}}e=""}void 0!==a[e]&&(d=e)}c||(q[b]=d)}return d}function w(a,b,c,d,e){(b=v(a.style,b,e))&&(a.style[b]=d?c+d:c)}function x(a){return a+"px"}n.camelCaseToTitleCase=t;n.getVendorJsPropertyName=v;n.setStyle=w;
n.getStyle=function(a,b,c){return(b=v(a.style,b,c))?a.style[b]:void 0};n.setStyles=function(a,b){for(var c in b)w(a,c,b[c])};n.toggle=function(a,b){void 0===b&&(b="none"==a.style.display);a.style.display=b?"":"none"};n.px=x;n.translateX=function(a){return"string"==typeof a?"translateX("+a+")":"translateX("+x(a)+")"};n.translate=function(a,b){"number"==typeof a&&(a=x(a));if(void 0===b)return"translate("+a+")";"number"==typeof b&&(b=x(b));return"translate("+a+","+b+")"};
n.scale=function(a){return"scale("+a+")"};var y={vsyncFor:function(a){return l.getService(a,"vsync")}};function z(){this.handlers_=[]}z.prototype.add=function(a){var b=this;this.handlers_.push(a);return function(){b.remove(a)}};z.prototype.remove=function(a){for(var b=0;b<this.handlers_.length;b++)if(a==this.handlers_[b]){this.handlers_.splice(b,1);break}};z.prototype.fire=function(a){this.handlers_.forEach(function(b){b(a)})};z.prototype.getHandlerCount=function(){return this.handlers_.length};var A={};function C(a){this.win=a;this.resolved_=Promise.resolve();this.taskCount_=0;this.canceled_={};this.startTime_=this.now()}C.prototype.now=function(){return Number(new Date)};C.prototype.timeSinceStart=function(){return this.now()-this.startTime_};C.prototype.delay=function(a,b){if(!b){var c=this,d="p"+this.taskCount_++;this.resolved_.then(function(){c.canceled_[d]?delete c.canceled_[d]:a()});return d}return this.win.setTimeout(a,b)};
C.prototype.cancel=function(a){"string"==typeof a?this.canceled_[a]=!0:this.win.clearTimeout(a)};C.prototype.promise=function(a,b){var c=this,d=null;return(new Promise(function(e,g){d=c.delay(function(){d=-1;e(b)},a);-1==d&&g(Error("Failed to schedule timer."))})).catch(function(a){-1!=d&&c.cancel(d);throw a;})};
C.prototype.timeoutPromise=function(a,b,c){var d=this,e=null,g=(new Promise(function(b,g){e=d.delay(function(){e=-1;g(h.userError(c||"timeout"))},a);-1==e&&g(Error("Failed to schedule timer."))})).catch(function(a){-1!=e&&d.cancel(e);throw a;});return b?Promise.race([g,b]):g};var D=new C(window);A.Timer=C;A.timer=D;var E={},F={NODISPLAY:"nodisplay",FIXED:"fixed",FIXED_HEIGHT:"fixed-height",RESPONSIVE:"responsive",CONTAINER:"container",FILL:"fill"},G={"AMP-PIXEL":{width:"1px",height:"1px"},"AMP-ANALYTICS":{width:"1px",height:"1px"},"AMP-AUDIO":null},H={"AMP-ANIM":!0,"AMP-BRIGHTCOVE":!0,"AMP-EMBED":!0,"AMP-IFRAME":!0,"AMP-IMG":!0,"AMP-INSTAGRAM":!0,"AMP-LIST":!0,"AMP-PINTEREST":!0,"AMP-VIDEO":!0};function K(a){h.assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax)$/.test(a),"Invalid length value: %s",a);return a}
E.Layout=F;E.naturalDimensions_=G;E.LOADING_ELEMENTS_=H;E.parseLayout=function(a){for(var b in F)if(F[b]==a)return F[b]};E.getLayoutClass=function(a){return"-amp-layout-"+a};E.isLayoutSizeDefined=function(a){return a==F.FIXED||a==F.FIXED_HEIGHT||a==F.RESPONSIVE||a==F.FILL};E.isInternalElement=function(a){return(a="string"==typeof a?a:a.tagName)&&0==a.toLowerCase().indexOf("i-")};
E.parseLength=function(a){return"number"==typeof a?a+"px":a&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax)?$/.test(a)?/^\d+(\.\d+)?$/.test(a)?a+"px":a:void 0};E.assertLength=K;E.assertLengthOrPercent=function(a){h.assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(a),"Invalid length or percent value: %s",a);return a};E.getLengthUnits=function(a){K(a);return h.assert(a.match(/[a-z]+/i),"Failed to read units from %s",a)[0]};E.getLengthNumeral=function(a){return parseFloat(a)};
E.hasNaturalDimensions=function(a){a=a.toUpperCase();return void 0!==G[a]};E.getNaturalDimensions=function(a){a=a.toUpperCase();h.assert(void 0!==G[a]);if(!G[a]){var b=a.replace(/^AMP\-/,""),b=document.createElement(b);b.controls=!0;b.style.position="absolute";b.style.visibility="hidden";document.body.appendChild(b);G[a]={width:(b.offsetWidth||1)+"px",height:(b.offsetHeight||1)+"px"};document.body.removeChild(b)}return G[a]};E.isLoadingAllowed=function(a){return H[a.toUpperCase()]||!1};var L={};function M(){}var N=Math.round(-16.67/Math.log(.95));function O(a,b,c,d,e,g){var u=this;this.vsync_=g||y.vsyncFor(window);this.callback_=e;this.lastX_=a;this.lastY_=b;this.maxVelocityX_=c;this.maxVelocityY_=d;this.velocityY_=this.velocityX_=0;this.lastTime_=this.startTime_=A.timer.now();this.promise_=new Promise(function(a,b){u.resolve_=a;u.reject_=b})}
O.prototype.start_=function(){this.continuing_=!0;.02>=Math.abs(this.maxVelocityX_)&&.02>=Math.abs(this.maxVelocityY_)?(this.fireMove_(),this.completeContinue_(!0)):this.runContinuing_();return this};O.prototype.halt=function(){this.continuing_&&this.completeContinue_(!1)};O.prototype.then=function(a,b){return a||b?this.promise_.then(a,b):this.promise_};O.prototype.thenAlways=function(a){a=a||M;return this.then(a,a)};
O.prototype.runContinuing_=function(){this.velocityX_=this.maxVelocityX_;this.velocityY_=this.maxVelocityY_;var a=this.stepContinue_.bind(this),b=this.completeContinue_.bind(this,!0);return this.vsync_.runAnimMutateSeries(a,5E3).then(b,b)};
O.prototype.stepContinue_=function(a,b){if(!this.continuing_)return!1;this.lastTime_=A.timer.now();this.lastX_+=b*this.velocityX_;this.lastY_+=b*this.velocityY_;if(!this.fireMove_())return!1;var c=Math.exp(-a/N);this.velocityX_=this.maxVelocityX_*c;this.velocityY_=this.maxVelocityY_*c;return.02<Math.abs(this.velocityX_)||.02<Math.abs(this.velocityY_)};O.prototype.completeContinue_=function(a){this.continuing_&&(this.continuing_=!1,this.lastTime_=A.timer.now(),this.fireMove_(),a?this.resolve_():this.reject_())};
O.prototype.fireMove_=function(){return this.callback_(this.lastX_,this.lastY_)};L.calcVelocity=function(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)};L.continueMotion=function(a,b,c,d,e,g){return(new O(a,b,c,d,e,g)).start_()};function P(a,b){this.handler_=a;this.defaultDelay_=b||0;this.scheduled_=-1;this.nextTime_=0;this.running_=!1}P.prototype.isPending=function(){return-1!=this.scheduled_};
P.prototype.schedule=function(a){a=a||this.defaultDelay_;this.running_&&10>a&&(a=10);var b=A.timer.now()+a;if(-1==this.scheduled_||-10>b-this.nextTime_){var c=this;-1!=this.scheduled_&&A.timer.cancel(this.scheduled_);this.nextTime_=b;this.scheduled_=A.timer.delay(function(){c.scheduled_=-1;c.nextTime_=0;c.running_=!0;c.handler_();c.running_=!1},a);return!0}return!1};P.prototype.cancel=function(){-1!=this.scheduled_&&(A.timer.cancel(this.scheduled_),this.scheduled_=-1)};function Q(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function R(a){this.element_=a;this.recognizers_=[];this.tracking_=[];this.ready_=[];this.pending_=[];this.eventing_=null;this.wasEventing_=!1;this.pass_=new P(this.doPass_.bind(this));this.pointerDownObservable_=new z;this.overservers_=Object.create(null);this.boundOnTouchStart_=this.onTouchStart_.bind(this);this.boundOnTouchEnd_=this.onTouchEnd_.bind(this);this.boundOnTouchMove_=this.onTouchMove_.bind(this);this.boundOnTouchCancel_=this.onTouchCancel_.bind(this);this.element_.addEventListener("touchstart",
this.boundOnTouchStart_);this.element_.addEventListener("touchend",this.boundOnTouchEnd_);this.element_.addEventListener("touchmove",this.boundOnTouchMove_);this.element_.addEventListener("touchcancel",this.boundOnTouchCancel_)}R.get=function(a){var b=a.__AMP_Gestures;b||(b=new R(a),a.__AMP_Gestures=b);return b};
R.prototype.cleanup=function(){this.element_.removeEventListener("touchstart",this.boundOnTouchStart_);this.element_.removeEventListener("touchend",this.boundOnTouchEnd_);this.element_.removeEventListener("touchmove",this.boundOnTouchMove_);this.element_.removeEventListener("touchcancel",this.boundOnTouchCancel_);this.pass_.cancel()};R.prototype.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.overservers_[d];e||(this.recognizers_.push(c),e=new z,this.overservers_[d]=e);return e.add(b)};
R.prototype.onPointerDown=function(a){return this.pointerDownObservable_.add(a)};R.prototype.onTouchStart_=function(a){var b=A.timer.now();this.wasEventing_=!1;this.pointerDownObservable_.fire(a);for(var c=0;c<this.recognizers_.length;c++)this.ready_[c]||(this.pending_[c]&&this.pending_[c]<b&&this.stopTracking_(c),this.recognizers_[c].onTouchStart(a)&&this.startTracking_(c));this.afterEvent_(a)};
R.prototype.onTouchMove_=function(a){for(var b=A.timer.now(),c=0;c<this.recognizers_.length;c++)this.tracking_[c]&&(this.pending_[c]&&this.pending_[c]<b?this.stopTracking_(c):this.recognizers_[c].onTouchMove(a)||this.stopTracking_(c));this.afterEvent_(a)};
R.prototype.onTouchEnd_=function(a){for(var b=A.timer.now(),c=0;c<this.recognizers_.length;c++)this.tracking_[c]&&(this.pending_[c]&&this.pending_[c]<b?this.stopTracking_(c):(this.recognizers_[c].onTouchEnd(a),(!this.pending_[c]||this.pending_[c]<b)&&this.stopTracking_(c)));this.afterEvent_(a)};R.prototype.onTouchCancel_=function(a){for(var b=0;b<this.recognizers_.length;b++)this.cancelEventing_(b);this.afterEvent_(a)};
R.prototype.signalReady_=function(a,b){if(this.eventing_)a.acceptCancel();else{for(var c=A.timer.now(),d=0;d<this.recognizers_.length;d++)this.recognizers_[d]==a&&(this.ready_[d]=c+b,this.pending_[d]=0);this.passAfterEvent_=!0}};R.prototype.signalPending_=function(a,b){if(this.eventing_)a.acceptCancel();else for(var c=A.timer.now(),d=0;d<this.recognizers_.length;d++)this.recognizers_[d]==a&&(this.pending_[d]=c+b)};
R.prototype.signalEnd_=function(a){this.eventing_==a&&(this.eventing_=null,this.wasEventing_=!0)};R.prototype.signalEmit_=function(a,b,c){h.assert(this.eventing_==a,"Recognizer is not currently allowed: %s",a.getType());var d=this.overservers_[a.getType()];d&&d.fire(new Q(a.getType(),b,A.timer.now(),c))};
R.prototype.afterEvent_=function(a){var b=!!this.eventing_||this.wasEventing_;this.wasEventing_=!1;if(!b)for(var c=A.timer.now(),d=0;d<this.recognizers_.length;d++)if(this.ready_[d]||this.pending_[d]&&this.pending_[d]>=c){b=!0;break}b&&(a.stopPropagation(),a.preventDefault());this.passAfterEvent_&&(this.passAfterEvent_=!1,this.doPass_())};
R.prototype.doPass_=function(){for(var a=A.timer.now(),b=-1,c=0;c<this.recognizers_.length;c++)if(!this.ready_[c])this.pending_[c]&&this.pending_[c]<a&&this.stopTracking_(c);else if(-1==b||this.ready_[c]>this.ready_[b])b=c;if(-1!=b){for(var d=c=0;d<this.recognizers_.length;d++)!this.ready_[d]&&this.tracking_[d]&&(c=Math.max(c,this.pending_[d]-a));2>c?this.startEventing_(b):this.pass_.schedule(c)}};
R.prototype.startEventing_=function(a){for(var b=this.recognizers_[a],c=0;c<this.recognizers_.length;c++)c!=a&&this.cancelEventing_(c);this.ready_[a]=0;this.pending_[a]=0;this.eventing_=b;b.acceptStart()};R.prototype.startTracking_=function(a){this.tracking_[a]=!0;this.pending_[a]=0};R.prototype.stopTracking_=function(a){this.tracking_[a]=!1;this.pending_[a]=0;this.ready_[a]||this.recognizers_[a].acceptCancel()};R.prototype.cancelEventing_=function(a){this.ready_[a]=0;this.stopTracking_(a)};
function S(a,b){this.type_=a;this.manager_=b}S.prototype.getType=function(){return this.type_};S.prototype.signalReady=function(a){this.manager_.signalReady_(this,a)};S.prototype.signalPending=function(a){this.manager_.signalPending_(this,a)};S.prototype.signalEnd=function(){this.manager_.signalEnd_(this)};S.prototype.signalEmit=function(a,b){this.manager_.signalEmit_(this,a,b)};S.prototype.acceptStart=function(){};S.prototype.acceptCancel=function(){};S.prototype.onTouchStart=function(){return!1};
S.prototype.onTouchMove=function(){return!1};S.prototype.onTouchEnd=function(){};function T(a,b,c,d){S.call(this,a,b);this.horiz_=c;this.vert_=d;this.eventing_=!1;this.velocityY_=this.velocityX_=this.prevTime_=this.lastTime_=this.startTime_=this.prevY_=this.prevX_=this.lastY_=this.lastX_=this.startY_=this.startX_=0}f.inherits(T,S);T.prototype.onTouchStart=function(a){a=a.touches;if(!a||1!=a.length)return!1;this.startTime_=A.timer.now();this.startX_=a[0].clientX;this.startY_=a[0].clientY;return!0};
T.prototype.onTouchMove=function(a){var b=a.changedTouches||a.touches;if(b&&1==b.length){var c=b[0].clientX,b=b[0].clientY;this.lastX_=c;this.lastY_=b;if(this.eventing_)this.emit_(!1,!1,a);else if(a=Math.abs(c-this.startX_),c=Math.abs(b-this.startY_),this.horiz_&&this.vert_)(8<=a||8<=c)&&this.signalReady(-10);else if(this.horiz_)if(8<=a&&a>c)this.signalReady(-10);else{if(8<=c)return!1}else if(this.vert_)if(8<=c&&c>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1}return!0};
T.prototype.onTouchEnd=function(a){this.end_(a)};T.prototype.acceptStart=function(){this.eventing_=!0;this.prevX_=this.startX_;this.prevY_=this.startY_;this.prevTime_=this.startTime_;this.startX_=this.lastX_;this.startY_=this.lastY_;this.emit_(!0,!1,null)};T.prototype.acceptCancel=function(){this.eventing_=!1};
T.prototype.emit_=function(a,b,c){this.lastTime_=A.timer.now();var d=this.lastTime_-this.prevTime_;if(!b&&4<d||b&&16<d)this.velocityX_=L.calcVelocity(this.lastX_-this.prevX_,d,this.velocityX_),this.velocityY_=L.calcVelocity(this.lastY_-this.prevY_,d,this.velocityY_),this.velocityX_=1E-4<Math.abs(this.velocityX_)?this.velocityX_:0,this.velocityY_=1E-4<Math.abs(this.velocityY_)?this.velocityY_:0,this.prevX_=this.lastX_,this.prevY_=this.lastY_,this.prevTime_=this.lastTime_;this.signalEmit({first:a,last:b,
time:this.lastTime_,deltaX:this.horiz_?this.lastX_-this.startX_:0,deltaY:this.vert_?this.lastY_-this.startY_:0,velocityX:this.horiz_?this.velocityX_:0,velocityY:this.vert_?this.velocityY_:0},c)};T.prototype.end_=function(a){this.eventing_&&(this.eventing_=!1,this.emit_(!1,!0,a),this.signalEnd())};function U(a){T.call(this,"swipe-xy",a,!0,!0)}f.inherits(U,T);var V={historyFor:function(a){return l.getService(a,"history")}};function W(a){AMP.BaseElement.apply(this,arguments)}f.inherits(W,AMP.BaseElement);W.prototype.isLayoutSupported=function(a){return a==E.Layout.NODISPLAY};W.prototype.isReadyToBuild=function(){return!1};
W.prototype.buildCallback=function(){var a=this;n.setStyles(this.element,{position:"fixed",zIndex:1E3,top:0,left:0,bottom:0,right:0});var b=this.getRealChildren();this.container_=document.createElement("div");this.applyFillContent(this.container_);this.element.appendChild(this.container_);b.forEach(function(b){a.container_.appendChild(b)});this.registerAction("close",this.close.bind(this));R.get(this.element).onGesture(U,function(){});this.historyId_=-1};W.prototype.layoutCallback=function(){return Promise.resolve()};
W.prototype.activate=function(){var a=this;this.boundCloseOnEscape_=this.closeOnEscape_.bind(this);this.getWin().document.documentElement.addEventListener("keydown",this.boundCloseOnEscape_);this.requestFullOverlay();this.getViewport().resetTouchZoom();this.getViewport().hideFixedLayer();this.element.style.display="";this.element.style.opacity=0;this.element.style.transition="opacity 0.1s ease-in";requestAnimationFrame(function(){a.element.style.opacity=""});this.scheduleLayout(this.container_);this.updateInViewport(this.container_,
!0);this.getHistory_().push(this.close.bind(this)).then(function(b){a.historyId_=b})};W.prototype.closeOnEscape_=function(a){27==a.keyCode&&this.close()};W.prototype.close=function(){this.cancelFullOverlay();this.getViewport().showFixedLayer();this.element.style.display="none";-1!=this.historyId_&&this.getHistory_().pop(this.historyId_);this.getWin().document.documentElement.removeEventListener("keydown",this.boundCloseOnEscape_);this.boundCloseOnEscape_=null;this.schedulePause(this.container_)};
W.prototype.getHistory_=function(){return V.historyFor(this.element.ownerDocument.defaultView)};AMP.registerElement("amp-lightbox",W);
});
//# sourceMappingURL=amp-lightbox-0.1.js.map

