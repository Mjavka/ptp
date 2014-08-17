/* jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(B,F){var A=0,E=/^ui-id-\d+$/;
B.ui=B.ui||{};
B.extend(B.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
B.fn.extend({focus:(function(G){return function(H,I){return typeof H==="number"?this.each(function(){var J=this;
setTimeout(function(){B(J).focus();
if(I){I.call(J)
}},H)
}):G.apply(this,arguments)
}
})(B.fn.focus),scrollParent:function(){var G;
if((B.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){G=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(B.css(this,"position"))&&(/(auto|scroll)/).test(B.css(this,"overflow")+B.css(this,"overflow-y")+B.css(this,"overflow-x"))
}).eq(0)
}else{G=this.parents().filter(function(){return(/(auto|scroll)/).test(B.css(this,"overflow")+B.css(this,"overflow-y")+B.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!G.length?B(document):G
},zIndex:function(J){if(J!==F){return this.css("zIndex",J)
}if(this.length){var H=B(this[0]),G,I;
while(H.length&&H[0]!==document){G=H.css("position");
if(G==="absolute"||G==="relative"||G==="fixed"){I=parseInt(H.css("zIndex"),10);
if(!isNaN(I)&&I!==0){return I
}}H=H.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++A)
}})
},removeUniqueId:function(){return this.each(function(){if(E.test(this.id)){B(this).removeAttr("id")
}})
}});
function D(I,G){var K,J,H,L=I.nodeName.toLowerCase();
if("area"===L){K=I.parentNode;
J=K.name;
if(!I.href||!J||K.nodeName.toLowerCase()!=="map"){return false
}H=B("img[usemap=#"+J+"]")[0];
return !!H&&C(H)
}return(/input|select|textarea|button|object/.test(L)?!I.disabled:"a"===L?I.href||G:G)&&C(I)
}function C(G){return B.expr.filters.visible(G)&&!B(G).parents().addBack().filter(function(){return B.css(this,"visibility")==="hidden"
}).length
}B.extend(B.expr[":"],{data:B.expr.createPseudo?B.expr.createPseudo(function(G){return function(H){return !!B.data(H,G)
}
}):function(I,H,G){return !!B.data(I,G[3])
},focusable:function(G){return D(G,!isNaN(B.attr(G,"tabindex")))
},tabbable:function(I){var G=B.attr(I,"tabindex"),H=isNaN(G);
return(H||G>=0)&&D(I,!H)
}});
if(!B("<a>").outerWidth(1).jquery){B.each(["Width","Height"],function(I,G){var H=G==="Width"?["Left","Right"]:["Top","Bottom"],J=G.toLowerCase(),L={innerWidth:B.fn.innerWidth,innerHeight:B.fn.innerHeight,outerWidth:B.fn.outerWidth,outerHeight:B.fn.outerHeight};
function K(O,N,M,P){B.each(H,function(){N-=parseFloat(B.css(O,"padding"+this))||0;
if(M){N-=parseFloat(B.css(O,"border"+this+"Width"))||0
}if(P){N-=parseFloat(B.css(O,"margin"+this))||0
}});
return N
}B.fn["inner"+G]=function(M){if(M===F){return L["inner"+G].call(this)
}return this.each(function(){B(this).css(J,K(this,M)+"px")
})
};
B.fn["outer"+G]=function(M,N){if(typeof M!=="number"){return L["outer"+G].call(this,M)
}return this.each(function(){B(this).css(J,K(this,M,true,N)+"px")
})
}
})
}if(!B.fn.addBack){B.fn.addBack=function(G){return this.add(G==null?this.prevObject:this.prevObject.filter(G))
}
}if(B("<a>").data("a-b","a").removeData("a-b").data("a-b")){B.fn.removeData=(function(G){return function(H){if(arguments.length){return G.call(this,B.camelCase(H))
}else{return G.call(this)
}}
})(B.fn.removeData)
}B.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
B.support.selectstart="onselectstart" in document.createElement("div");
B.fn.extend({disableSelection:function(){return this.bind((B.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(G){G.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
B.extend(B.ui,{plugin:{add:function(H,I,K){var G,J=B.ui[H].prototype;
for(G in K){J.plugins[G]=J.plugins[G]||[];
J.plugins[G].push([I,K[G]])
}},call:function(G,I,H){var J,K=G.plugins[I];
if(!K||!G.element[0].parentNode||G.element[0].parentNode.nodeType===11){return 
}for(J=0;
J<K.length;
J++){if(G.options[K[J][0]]){K[J][1].apply(G.element,H)
}}}},hasScroll:function(J,H){if(B(J).css("overflow")==="hidden"){return false
}var G=(H&&H==="left")?"scrollLeft":"scrollTop",I=false;
if(J[G]>0){return true
}J[G]=1;
I=(J[G]>0);
J[G]=0;
return I
}})
})(jQuery);
(function(B,E){var A=0,D=Array.prototype.slice,C=B.cleanData;
B.cleanData=function(F){for(var G=0,H;
(H=F[G])!=null;
G++){try{B(H).triggerHandler("remove")
}catch(I){}}C(F)
};
B.widget=function(F,G,N){var K,L,I,M,H={},J=F.split(".")[0];
F=F.split(".")[1];
K=J+"-"+F;
if(!N){N=G;
G=B.Widget
}B.expr[":"][K.toLowerCase()]=function(O){return !!B.data(O,K)
};
B[J]=B[J]||{};
L=B[J][F];
I=B[J][F]=function(O,P){if(!this._createWidget){return new I(O,P)
}if(arguments.length){this._createWidget(O,P)
}};
B.extend(I,L,{version:N.version,_proto:B.extend({},N),_childConstructors:[]});
M=new G();
M.options=B.widget.extend({},M.options);
B.each(N,function(P,O){if(!B.isFunction(O)){H[P]=O;
return 
}H[P]=(function(){var Q=function(){return G.prototype[P].apply(this,arguments)
},R=function(S){return G.prototype[P].apply(this,S)
};
return function(){var U=this._super,S=this._superApply,T;
this._super=Q;
this._superApply=R;
T=O.apply(this,arguments);
this._super=U;
this._superApply=S;
return T
}
})()
});
I.prototype=B.widget.extend(M,{widgetEventPrefix:L?M.widgetEventPrefix:F},H,{constructor:I,namespace:J,widgetName:F,widgetFullName:K});
if(L){B.each(L._childConstructors,function(P,Q){var O=Q.prototype;
B.widget(O.namespace+"."+O.widgetName,I,Q._proto)
});
delete L._childConstructors
}else{G._childConstructors.push(I)
}B.widget.bridge(F,I)
};
B.widget.extend=function(K){var G=D.call(arguments,1),J=0,F=G.length,H,I;
for(;
J<F;
J++){for(H in G[J]){I=G[J][H];
if(G[J].hasOwnProperty(H)&&I!==E){if(B.isPlainObject(I)){K[H]=B.isPlainObject(K[H])?B.widget.extend({},K[H],I):B.widget.extend({},I)
}else{K[H]=I
}}}}return K
};
B.widget.bridge=function(G,F){var H=F.prototype.widgetFullName||G;
B.fn[G]=function(K){var I=typeof K==="string",J=D.call(arguments,1),L=this;
K=!I&&J.length?B.widget.extend.apply(null,[K].concat(J)):K;
if(I){this.each(function(){var N,M=B.data(this,H);
if(!M){return B.error("cannot call methods on "+G+" prior to initialization; attempted to call method '"+K+"'")
}if(!B.isFunction(M[K])||K.charAt(0)==="_"){return B.error("no such method '"+K+"' for "+G+" widget instance")
}N=M[K].apply(M,J);
if(N!==M&&N!==E){L=N&&N.jquery?L.pushStack(N.get()):N;
return false
}})
}else{this.each(function(){var M=B.data(this,H);
if(M){M.option(K||{})._init()
}else{B.data(this,H,new F(K,this))
}})
}return L
}
};
B.Widget=function(){};
B.Widget._childConstructors=[];
B.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(F,G){G=B(G||this.defaultElement||this)[0];
this.element=B(G);
this.uuid=A++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=B.widget.extend({},this.options,this._getCreateOptions(),F);
this.bindings=B();
this.hoverable=B();
this.focusable=B();
if(G!==this){B.data(G,this.widgetFullName,this);
this._on(true,this.element,{remove:function(H){if(H.target===G){this.destroy()
}}});
this.document=B(G.style?G.ownerDocument:G.document||G);
this.window=B(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:B.noop,_getCreateEventData:B.noop,_create:B.noop,_init:B.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(B.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:B.noop,widget:function(){return this.element
},option:function(I,J){var F=I,K,H,G;
if(arguments.length===0){return B.widget.extend({},this.options)
}if(typeof I==="string"){F={};
K=I.split(".");
I=K.shift();
if(K.length){H=F[I]=B.widget.extend({},this.options[I]);
for(G=0;
G<K.length-1;
G++){H[K[G]]=H[K[G]]||{};
H=H[K[G]]
}I=K.pop();
if(J===E){return H[I]===E?null:H[I]
}H[I]=J
}else{if(J===E){return this.options[I]===E?null:this.options[I]
}F[I]=J
}}this._setOptions(F);
return this
},_setOptions:function(F){var G;
for(G in F){this._setOption(G,F[G])
}return this
},_setOption:function(F,G){this.options[F]=G;
if(F==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!G).attr("aria-disabled",G);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(I,H,G){var J,F=this;
if(typeof I!=="boolean"){G=H;
H=I;
I=false
}if(!G){G=H;
H=this.element;
J=this.widget()
}else{H=J=B(H);
this.bindings=this.bindings.add(H)
}B.each(G,function(P,O){function M(){if(!I&&(F.options.disabled===true||B(this).hasClass("ui-state-disabled"))){return 
}return(typeof O==="string"?F[O]:O).apply(F,arguments)
}if(typeof O!=="string"){M.guid=O.guid=O.guid||M.guid||B.guid++
}var N=P.match(/^(\w+)\s*(.*)$/),L=N[1]+F.eventNamespace,K=N[2];
if(K){J.delegate(K,L,M)
}else{H.bind(L,M)
}})
},_off:function(G,F){F=(F||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
G.unbind(F).undelegate(F)
},_delay:function(I,H){function G(){return(typeof I==="string"?F[I]:I).apply(F,arguments)
}var F=this;
return setTimeout(G,H||0)
},_hoverable:function(F){this.hoverable=this.hoverable.add(F);
this._on(F,{mouseenter:function(G){B(G.currentTarget).addClass("ui-state-hover")
},mouseleave:function(G){B(G.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(F){this.focusable=this.focusable.add(F);
this._on(F,{focusin:function(G){B(G.currentTarget).addClass("ui-state-focus")
},focusout:function(G){B(G.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(F,G,H){var K,J,I=this.options[F];
H=H||{};
G=B.Event(G);
G.type=(F===this.widgetEventPrefix?F:this.widgetEventPrefix+F).toLowerCase();
G.target=this.element[0];
J=G.originalEvent;
if(J){for(K in J){if(!(K in G)){G[K]=J[K]
}}}this.element.trigger(G,H);
return !(B.isFunction(I)&&I.apply(this.element[0],[G].concat(H))===false||G.isDefaultPrevented())
}};
B.each({show:"fadeIn",hide:"fadeOut"},function(G,F){B.Widget.prototype["_"+G]=function(J,I,L){if(typeof I==="string"){I={effect:I}
}var K,H=!I?G:I===true||typeof I==="number"?F:I.effect||F;
I=I||{};
if(typeof I==="number"){I={duration:I}
}K=!B.isEmptyObject(I);
I.complete=L;
if(I.delay){J.delay(I.delay)
}if(K&&B.effects&&B.effects.effect[H]){J[G](I)
}else{if(H!==G&&J[H]){J[H](I.duration,I.easing,L)
}else{J.queue(function(M){B(this)[G]();
if(L){L.call(J[0])
}M()
})
}}}
})
})(jQuery);
(function(B,C){var A=false;
B(document).mouseup(function(){A=false
});
B.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var D=this;
this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)
}).bind("click."+this.widgetName,function(E){if(true===B.data(E.target,D.widgetName+".preventClickEvent")){B.removeData(E.target,D.widgetName+".preventClickEvent");
E.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(F){if(A){return 
}(this._mouseStarted&&this._mouseUp(F));
this._mouseDownEvent=F;
var E=this,G=(F.which===1),D=(typeof this.options.cancel==="string"&&F.target.nodeName?B(F.target).closest(this.options.cancel).length:false);
if(!G||D||!this._mouseCapture(F)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){E.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=(this._mouseStart(F)!==false);
if(!this._mouseStarted){F.preventDefault();
return true
}}if(true===B.data(F.target,this.widgetName+".preventClickEvent")){B.removeData(F.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(H){return E._mouseMove(H)
};
this._mouseUpDelegate=function(H){return E._mouseUp(H)
};
B(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
F.preventDefault();
A=true;
return true
},_mouseMove:function(D){if(B.ui.ie&&(!document.documentMode||document.documentMode<9)&&!D.button){return this._mouseUp(D)
}if(this._mouseStarted){this._mouseDrag(D);
return D.preventDefault()
}if(this._mouseDistanceMet(D)&&this._mouseDelayMet(D)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,D)!==false);
(this._mouseStarted?this._mouseDrag(D):this._mouseUp(D))
}return !this._mouseStarted
},_mouseUp:function(D){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(D.target===this._mouseDownEvent.target){B.data(D.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(D)
}return false
},_mouseDistanceMet:function(D){return(Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(A,B){A.widget("ui.draggable",A.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(C){var D=this.options;
if(this.helper||D.disabled||A(C.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(C);
if(!this.handle){return false
}A(D.iframeFix===true?"iframe":D.iframeFix).each(function(){A("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(C){var D=this.options;
this.helper=this._createHelper(C);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(A.ui.ddmanager){A.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
A.extend(this.offset,{click:{left:C.pageX-this.offset.left,top:C.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(C);
this.originalPageX=C.pageX;
this.originalPageY=C.pageY;
(D.cursorAt&&this._adjustOffsetFromHelper(D.cursorAt));
this._setContainment();
if(this._trigger("start",C)===false){this._clear();
return false
}this._cacheHelperProportions();
if(A.ui.ddmanager&&!D.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,C)
}this._mouseDrag(C,true);
if(A.ui.ddmanager){A.ui.ddmanager.dragStart(this,C)
}return true
},_mouseDrag:function(C,E){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(C);
this.positionAbs=this._convertPositionTo("absolute");
if(!E){var D=this._uiHash();
if(this._trigger("drag",C,D)===false){this._mouseUp({});
return false
}this.position=D.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,C)
}return false
},_mouseStop:function(D){var C=this,E=false;
if(A.ui.ddmanager&&!this.options.dropBehaviour){E=A.ui.ddmanager.drop(this,D)
}if(this.dropped){E=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!A.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!E)||(this.options.revert==="valid"&&E)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,E))){A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(C._trigger("stop",D)!==false){C._clear()
}})
}else{if(this._trigger("stop",D)!==false){this._clear()
}}return false
},_mouseUp:function(C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(A.ui.ddmanager){A.ui.ddmanager.dragStop(this,C)
}return A.ui.mouse.prototype._mouseUp.call(this,C)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(C){return this.options.handle?!!A(C.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(D){var E=this.options,C=A.isFunction(E.helper)?A(E.helper.apply(this.element[0],[D])):(E.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!C.parents("body").length){C.appendTo((E.appendTo==="parent"?this.element[0].parentNode:E.appendTo))
}if(C[0]!==this.element[0]&&!(/(fixed|absolute)/).test(C.css("position"))){C.css("position","absolute")
}return C
},_adjustOffsetFromHelper:function(C){if(typeof C==="string"){C=C.split(" ")
}if(A.isArray(C)){C={left:+C[0],top:+C[1]||0}
}if("left" in C){this.offset.click.left=C.left+this.margins.left
}if("right" in C){this.offset.click.left=this.helperProportions.width-C.right+this.margins.left
}if("top" in C){this.offset.click.top=C.top+this.margins.top
}if("bottom" in C){this.offset.click.top=this.helperProportions.height-C.bottom+this.margins.top
}},_getParentOffset:function(){var C=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0])){C.left+=this.scrollParent.scrollLeft();
C.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&A.ui.ie)){C={top:0,left:0}
}return{top:C.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:C.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var C=this.element.position();
return{top:C.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:C.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var D,F,C,E=this.options;
if(!E.containment){this.containment=null;
return 
}if(E.containment==="window"){this.containment=[A(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,A(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,A(window).scrollLeft()+A(window).width()-this.helperProportions.width-this.margins.left,A(window).scrollTop()+(A(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return 
}if(E.containment==="document"){this.containment=[0,0,A(document).width()-this.helperProportions.width-this.margins.left,(A(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return 
}if(E.containment.constructor===Array){this.containment=E.containment;
return 
}if(E.containment==="parent"){E.containment=this.helper[0].parentNode
}F=A(E.containment);
C=F[0];
if(!C){return 
}D=F.css("overflow")!=="hidden";
this.containment=[(parseInt(F.css("borderLeftWidth"),10)||0)+(parseInt(F.css("paddingLeft"),10)||0),(parseInt(F.css("borderTopWidth"),10)||0)+(parseInt(F.css("paddingTop"),10)||0),(D?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(F.css("borderRightWidth"),10)||0)-(parseInt(F.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(D?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(F.css("borderBottomWidth"),10)||0)-(parseInt(F.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=F
},_convertPositionTo:function(E,F){if(!F){F=this.position
}var D=E==="absolute"?1:-1,C=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:C.scrollTop(),left:C.scrollLeft()}
}return{top:(F.top+this.offset.relative.top*D+this.offset.parent.top*D-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*D)),left:(F.left+this.offset.relative.left*D+this.offset.parent.left*D-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*D))}
},_generatePosition:function(D){var C,I,J,F,E=this.options,K=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&A.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,H=D.pageX,G=D.pageY;
if(!this.offset.scroll){this.offset.scroll={top:K.scrollTop(),left:K.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){I=this.relative_container.offset();
C=[this.containment[0]+I.left,this.containment[1]+I.top,this.containment[2]+I.left,this.containment[3]+I.top]
}else{C=this.containment
}if(D.pageX-this.offset.click.left<C[0]){H=C[0]+this.offset.click.left
}if(D.pageY-this.offset.click.top<C[1]){G=C[1]+this.offset.click.top
}if(D.pageX-this.offset.click.left>C[2]){H=C[2]+this.offset.click.left
}if(D.pageY-this.offset.click.top>C[3]){G=C[3]+this.offset.click.top
}}if(E.grid){J=E.grid[1]?this.originalPageY+Math.round((G-this.originalPageY)/E.grid[1])*E.grid[1]:this.originalPageY;
G=C?((J-this.offset.click.top>=C[1]||J-this.offset.click.top>C[3])?J:((J-this.offset.click.top>=C[1])?J-E.grid[1]:J+E.grid[1])):J;
F=E.grid[0]?this.originalPageX+Math.round((H-this.originalPageX)/E.grid[0])*E.grid[0]:this.originalPageX;
H=C?((F-this.offset.click.left>=C[0]||F-this.offset.click.left>C[2])?F:((F-this.offset.click.left>=C[0])?F-E.grid[0]:F+E.grid[0])):F
}}return{top:(G-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(H-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(C,D,E){E=E||this._uiHash();
A.ui.plugin.call(this,C,[D,E]);
if(C==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return A.Widget.prototype._trigger.call(this,C,D,E)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
A.ui.plugin.add("draggable","connectToSortable",{start:function(D,F){var E=A(this).data("ui-draggable"),G=E.options,C=A.extend({},F,{item:E.element});
E.sortables=[];
A(G.connectToSortable).each(function(){var H=A.data(this,"ui-sortable");
if(H&&!H.options.disabled){E.sortables.push({instance:H,shouldRevert:H.options.revert});
H.refreshPositions();
H._trigger("activate",D,C)
}})
},stop:function(D,F){var E=A(this).data("ui-draggable"),C=A.extend({},F,{item:E.element});
A.each(E.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
E.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(D);
this.instance.options.helper=this.instance.options._helper;
if(E.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",D,C)
}})
},drag:function(D,F){var E=A(this).data("ui-draggable"),C=this;
A.each(E.sortables,function(){var G=false,H=this;
this.instance.positionAbs=E.positionAbs;
this.instance.helperProportions=E.helperProportions;
this.instance.offset.click=E.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){G=true;
A.each(E.sortables,function(){this.instance.positionAbs=E.positionAbs;
this.instance.helperProportions=E.helperProportions;
this.instance.offset.click=E.offset.click;
if(this!==H&&this.instance._intersectsWith(this.instance.containerCache)&&A.contains(H.instance.element[0],this.instance.element[0])){G=false
}return G
})
}if(G){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=A(C).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return F.helper[0]
};
D.target=this.instance.currentItem[0];
this.instance._mouseCapture(D,true);
this.instance._mouseStart(D,true,true);
this.instance.offset.click.top=E.offset.click.top;
this.instance.offset.click.left=E.offset.click.left;
this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;
E._trigger("toSortable",D);
E.dropped=this.instance.element;
E.currentItem=E.element;
this.instance.fromOutside=E
}if(this.instance.currentItem){this.instance._mouseDrag(D)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",D,this.instance._uiHash(this.instance));
this.instance._mouseStop(D,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}E._trigger("fromSortable",D);
E.dropped=false
}}})
}});
A.ui.plugin.add("draggable","cursor",{start:function(){var C=A("body"),D=A(this).data("ui-draggable").options;
if(C.css("cursor")){D._cursor=C.css("cursor")
}C.css("cursor",D.cursor)
},stop:function(){var C=A(this).data("ui-draggable").options;
if(C._cursor){A("body").css("cursor",C._cursor)
}}});
A.ui.plugin.add("draggable","opacity",{start:function(D,E){var C=A(E.helper),F=A(this).data("ui-draggable").options;
if(C.css("opacity")){F._opacity=C.css("opacity")
}C.css("opacity",F.opacity)
},stop:function(C,D){var E=A(this).data("ui-draggable").options;
if(E._opacity){A(D.helper).css("opacity",E._opacity)
}}});
A.ui.plugin.add("draggable","scroll",{start:function(){var C=A(this).data("ui-draggable");
if(C.scrollParent[0]!==document&&C.scrollParent[0].tagName!=="HTML"){C.overflowOffset=C.scrollParent.offset()
}},drag:function(E){var D=A(this).data("ui-draggable"),F=D.options,C=false;
if(D.scrollParent[0]!==document&&D.scrollParent[0].tagName!=="HTML"){if(!F.axis||F.axis!=="x"){if((D.overflowOffset.top+D.scrollParent[0].offsetHeight)-E.pageY<F.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop+F.scrollSpeed
}else{if(E.pageY-D.overflowOffset.top<F.scrollSensitivity){D.scrollParent[0].scrollTop=C=D.scrollParent[0].scrollTop-F.scrollSpeed
}}}if(!F.axis||F.axis!=="y"){if((D.overflowOffset.left+D.scrollParent[0].offsetWidth)-E.pageX<F.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft+F.scrollSpeed
}else{if(E.pageX-D.overflowOffset.left<F.scrollSensitivity){D.scrollParent[0].scrollLeft=C=D.scrollParent[0].scrollLeft-F.scrollSpeed
}}}}else{if(!F.axis||F.axis!=="x"){if(E.pageY-A(document).scrollTop()<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)
}else{if(A(window).height()-(E.pageY-A(document).scrollTop())<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)
}}}if(!F.axis||F.axis!=="y"){if(E.pageX-A(document).scrollLeft()<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)
}else{if(A(window).width()-(E.pageX-A(document).scrollLeft())<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)
}}}}if(C!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(D,E)
}}});
A.ui.plugin.add("draggable","snap",{start:function(){var C=A(this).data("ui-draggable"),D=C.options;
C.snapElements=[];
A(D.snap.constructor!==String?(D.snap.items||":data(ui-draggable)"):D.snap).each(function(){var F=A(this),E=F.offset();
if(this!==C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})
}})
},drag:function(O,L){var C,T,H,I,N,K,J,U,P,G,F=A(this).data("ui-draggable"),M=F.options,S=M.snapTolerance,R=L.offset.left,Q=R+F.helperProportions.width,E=L.offset.top,D=E+F.helperProportions.height;
for(P=F.snapElements.length-1;
P>=0;
P--){N=F.snapElements[P].left;
K=N+F.snapElements[P].width;
J=F.snapElements[P].top;
U=J+F.snapElements[P].height;
if(Q<N-S||R>K+S||D<J-S||E>U+S||!A.contains(F.snapElements[P].item.ownerDocument,F.snapElements[P].item)){if(F.snapElements[P].snapping){(F.options.snap.release&&F.options.snap.release.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))
}F.snapElements[P].snapping=false;
continue
}if(M.snapMode!=="inner"){C=Math.abs(J-D)<=S;
T=Math.abs(U-E)<=S;
H=Math.abs(N-Q)<=S;
I=Math.abs(K-R)<=S;
if(C){L.position.top=F._convertPositionTo("relative",{top:J-F.helperProportions.height,left:0}).top-F.margins.top
}if(T){L.position.top=F._convertPositionTo("relative",{top:U,left:0}).top-F.margins.top
}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N-F.helperProportions.width}).left-F.margins.left
}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K}).left-F.margins.left
}}G=(C||T||H||I);
if(M.snapMode!=="outer"){C=Math.abs(J-E)<=S;
T=Math.abs(U-D)<=S;
H=Math.abs(N-R)<=S;
I=Math.abs(K-Q)<=S;
if(C){L.position.top=F._convertPositionTo("relative",{top:J,left:0}).top-F.margins.top
}if(T){L.position.top=F._convertPositionTo("relative",{top:U-F.helperProportions.height,left:0}).top-F.margins.top
}if(H){L.position.left=F._convertPositionTo("relative",{top:0,left:N}).left-F.margins.left
}if(I){L.position.left=F._convertPositionTo("relative",{top:0,left:K-F.helperProportions.width}).left-F.margins.left
}}if(!F.snapElements[P].snapping&&(C||T||H||I||G)){(F.options.snap.snap&&F.options.snap.snap.call(F.element,O,A.extend(F._uiHash(),{snapItem:F.snapElements[P].item})))
}F.snapElements[P].snapping=(C||T||H||I||G)
}}});
A.ui.plugin.add("draggable","stack",{start:function(){var C,E=this.data("ui-draggable").options,D=A.makeArray(A(E.stack)).sort(function(G,F){return(parseInt(A(G).css("zIndex"),10)||0)-(parseInt(A(F).css("zIndex"),10)||0)
});
if(!D.length){return 
}C=parseInt(A(D[0]).css("zIndex"),10)||0;
A(D).each(function(F){A(this).css("zIndex",C+F)
});
this.css("zIndex",(C+D.length))
}});
A.ui.plugin.add("draggable","zIndex",{start:function(D,E){var C=A(E.helper),F=A(this).data("ui-draggable").options;
if(C.css("zIndex")){F._zIndex=C.css("zIndex")
}C.css("zIndex",F.zIndex)
},stop:function(C,D){var E=A(this).data("ui-draggable").options;
if(E._zIndex){A(D.helper).css("zIndex",E._zIndex)
}}})
})(jQuery);
(function(B,C){function A(E,D,F){return(E>D)&&(E<(D+F))
}B.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var E=this.options,D=E.accept;
this.isover=false;
this.isout=true;
this.accept=B.isFunction(D)?D:function(F){return F.is(D)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
B.ui.ddmanager.droppables[E.scope]=B.ui.ddmanager.droppables[E.scope]||[];
B.ui.ddmanager.droppables[E.scope].push(this);
(E.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var E=0,D=B.ui.ddmanager.droppables[this.options.scope];
for(;
E<D.length;
E++){if(D[E]===this){D.splice(E,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(D,E){if(D==="accept"){this.accept=B.isFunction(E)?E:function(F){return F.is(E)
}
}B.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(E){var D=B.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(D){this._trigger("activate",E,this.ui(D))
}},_deactivate:function(E){var D=B.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(D){this._trigger("deactivate",E,this.ui(D))
}},_over:function(E){var D=B.ui.ddmanager.current;
if(!D||(D.currentItem||D.element)[0]===this.element[0]){return 
}if(this.accept.call(this.element[0],(D.currentItem||D.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",E,this.ui(D))
}},_out:function(E){var D=B.ui.ddmanager.current;
if(!D||(D.currentItem||D.element)[0]===this.element[0]){return 
}if(this.accept.call(this.element[0],(D.currentItem||D.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",E,this.ui(D))
}},_drop:function(E,F){var D=F||B.ui.ddmanager.current,G=false;
if(!D||(D.currentItem||D.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var H=B.data(this,"ui-droppable");
if(H.options.greedy&&!H.options.disabled&&H.options.scope===D.options.scope&&H.accept.call(H.element[0],(D.currentItem||D.element))&&B.ui.intersect(D,B.extend(H,{offset:H.element.offset()}),H.options.tolerance)){G=true;
return false
}});
if(G){return false
}if(this.accept.call(this.element[0],(D.currentItem||D.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",E,this.ui(D));
return this.element
}return false
},ui:function(D){return{draggable:(D.currentItem||D.element),helper:D.helper,position:D.position,offset:D.positionAbs}
}});
B.ui.intersect=function(P,J,N){if(!J.offset){return false
}var H,I,F=(P.positionAbs||P.position.absolute).left,E=F+P.helperProportions.width,M=(P.positionAbs||P.position.absolute).top,L=M+P.helperProportions.height,G=J.offset.left,D=G+J.proportions.width,O=J.offset.top,K=O+J.proportions.height;
switch(N){case"fit":return(G<=F&&E<=D&&O<=M&&L<=K);
case"intersect":return(G<F+(P.helperProportions.width/2)&&E-(P.helperProportions.width/2)<D&&O<M+(P.helperProportions.height/2)&&L-(P.helperProportions.height/2)<K);
case"pointer":H=((P.positionAbs||P.position.absolute).left+(P.clickOffset||P.offset.click).left);
I=((P.positionAbs||P.position.absolute).top+(P.clickOffset||P.offset.click).top);
return A(I,O,J.proportions.height)&&A(H,G,J.proportions.width);
case"touch":return((M>=O&&M<=K)||(L>=O&&L<=K)||(M<O&&L>K))&&((F>=G&&F<=D)||(E>=G&&E<=D)||(F<G&&E>D));
default:return false
}};
B.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(G,I){var F,E,D=B.ui.ddmanager.droppables[G.options.scope]||[],H=I?I.type:null,J=(G.currentItem||G.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(F=0;
F<D.length;
F++){if(D[F].options.disabled||(G&&!D[F].accept.call(D[F].element[0],(G.currentItem||G.element)))){continue
}for(E=0;
E<J.length;
E++){if(J[E]===D[F].element[0]){D[F].proportions.height=0;
continue droppablesLoop
}}D[F].visible=D[F].element.css("display")!=="none";
if(!D[F].visible){continue
}if(H==="mousedown"){D[F]._activate.call(D[F],I)
}D[F].offset=D[F].element.offset();
D[F].proportions={width:D[F].element[0].offsetWidth,height:D[F].element[0].offsetHeight}
}},drop:function(D,E){var F=false;
B.each((B.ui.ddmanager.droppables[D.options.scope]||[]).slice(),function(){if(!this.options){return 
}if(!this.options.disabled&&this.visible&&B.ui.intersect(D,this,this.options.tolerance)){F=this._drop.call(this,E)||F
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(D.currentItem||D.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,E)
}});
return F
},dragStart:function(D,E){D.element.parentsUntil("body").bind("scroll.droppable",function(){if(!D.options.refreshPositions){B.ui.ddmanager.prepareOffsets(D,E)
}})
},drag:function(D,E){if(D.options.refreshPositions){B.ui.ddmanager.prepareOffsets(D,E)
}B.each(B.ui.ddmanager.droppables[D.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return 
}var I,G,F,H=B.ui.intersect(D,this,this.options.tolerance),J=!H&&this.isover?"isout":(H&&!this.isover?"isover":null);
if(!J){return 
}if(this.options.greedy){G=this.options.scope;
F=this.element.parents(":data(ui-droppable)").filter(function(){return B.data(this,"ui-droppable").options.scope===G
});
if(F.length){I=B.data(F[0],"ui-droppable");
I.greedyChild=(J==="isover")
}}if(I&&J==="isover"){I.isover=false;
I.isout=true;
I._out.call(I,E)
}this[J]=true;
this[J==="isout"?"isover":"isout"]=false;
this[J==="isover"?"_over":"_out"].call(this,E);
if(I&&J==="isout"){I.isout=false;
I.isover=true;
I._over.call(I,E)
}})
},dragStop:function(D,E){D.element.parentsUntil("body").unbind("scroll.droppable");
if(!D.options.refreshPositions){B.ui.ddmanager.prepareOffsets(D,E)
}}}
})(jQuery);
(function(C,D){function B(E){return parseInt(E,10)||0
}function A(E){return !isNaN(parseInt(E,10))
}C.widget("ui.resizable",C.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var K,F,I,G,E,H=this,J=this.options;
this.element.addClass("ui-resizable");
C.extend(this,{_aspectRatio:!!(J.aspectRatio),aspectRatio:J.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:J.helper||J.ghost||J.animate?J.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(C("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=J.handles||(!C(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}K=this.handles.split(",");
this.handles={};
for(F=0;
F<K.length;
F++){I=C.trim(K[F]);
E="ui-resizable-"+I;
G=C("<div class='ui-resizable-handle "+E+"'></div>");
G.css({zIndex:J.zIndex});
if("se"===I){G.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[I]=".ui-resizable-"+I;
this.element.append(G)
}}this._renderAxis=function(P){var M,N,L,O;
P=P||this.element;
for(M in this.handles){if(this.handles[M].constructor===String){this.handles[M]=C(this.handles[M],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){N=C(this.handles[M],this.element);
O=/sw|ne|nw|se|n|s/.test(M)?N.outerHeight():N.outerWidth();
L=["padding",/ne|nw|n/.test(M)?"Top":/se|sw|s/.test(M)?"Bottom":/^e$/.test(M)?"Right":"Left"].join("");
P.css(L,O);
this._proportionallyResize()
}if(!C(this.handles[M]).length){continue
}}};
this._renderAxis(this.element);
this._handles=C(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!H.resizing){if(this.className){G=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}H.axis=G&&G[1]?G[1]:"se"
}});
if(J.autoHide){this._handles.hide();
C(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(J.disabled){return 
}C(this).removeClass("ui-resizable-autohide");
H._handles.show()
}).mouseleave(function(){if(J.disabled){return 
}if(!H.resizing){C(this).addClass("ui-resizable-autohide");
H._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var F,E=function(G){C(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){E(this.element);
F=this.element;
this.originalElement.css({position:F.css("position"),width:F.outerWidth(),height:F.outerHeight(),top:F.css("top"),left:F.css("left")}).insertAfter(F);
F.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
E(this.originalElement);
return this
},_mouseCapture:function(G){var F,H,E=false;
for(F in this.handles){H=C(this.handles[F])[0];
if(H===G.target||C.contains(H,G.target)){E=true
}}return !this.options.disabled&&E
},_mouseStart:function(G){var K,H,J,I=this.options,F=this.element.position(),E=this.element;
this.resizing=true;
if((/absolute/).test(E.css("position"))){E.css({position:"absolute",top:E.css("top"),left:E.css("left")})
}else{if(E.is(".ui-draggable")){E.css({position:"absolute",top:F.top,left:F.left})
}}this._renderProxy();
K=B(this.helper.css("left"));
H=B(this.helper.css("top"));
if(I.containment){K+=C(I.containment).scrollLeft()||0;
H+=C(I.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:K,top:H};
this.size=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};
this.originalSize=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};
this.originalPosition={left:K,top:H};
this.sizeDiff={width:E.outerWidth()-E.width(),height:E.outerHeight()-E.height()};
this.originalMousePosition={left:G.pageX,top:G.pageY};
this.aspectRatio=(typeof I.aspectRatio==="number")?I.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
J=C(".ui-resizable-"+this.axis).css("cursor");
C("body").css("cursor",J==="auto"?this.axis+"-resize":J);
E.addClass("ui-resizable-resizing");
this._propagate("start",G);
return true
},_mouseDrag:function(E){var K,G=this.helper,L={},I=this.originalMousePosition,M=this.axis,O=this.position.top,F=this.position.left,N=this.size.width,J=this.size.height,Q=(E.pageX-I.left)||0,P=(E.pageY-I.top)||0,H=this._change[M];
if(!H){return false
}K=H.apply(this,[E,Q,P]);
this._updateVirtualBoundaries(E.shiftKey);
if(this._aspectRatio||E.shiftKey){K=this._updateRatio(K,E)
}K=this._respectSize(K,E);
this._updateCache(K);
this._propagate("resize",E);
if(this.position.top!==O){L.top=this.position.top+"px"
}if(this.position.left!==F){L.left=this.position.left+"px"
}if(this.size.width!==N){L.width=this.size.width+"px"
}if(this.size.height!==J){L.height=this.size.height+"px"
}G.css(L);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!C.isEmptyObject(L)){this._trigger("resize",E,this.ui())
}return false
},_mouseStop:function(H){this.resizing=false;
var G,E,F,K,N,J,M,I=this.options,L=this;
if(this._helper){G=this._proportionallyResizeElements;
E=G.length&&(/textarea/i).test(G[0].nodeName);
F=E&&C.ui.hasScroll(G[0],"left")?0:L.sizeDiff.height;
K=E?0:L.sizeDiff.width;
N={width:(L.helper.width()-K),height:(L.helper.height()-F)};
J=(parseInt(L.element.css("left"),10)+(L.position.left-L.originalPosition.left))||null;
M=(parseInt(L.element.css("top"),10)+(L.position.top-L.originalPosition.top))||null;
if(!I.animate){this.element.css(C.extend(N,{top:M,left:J}))
}L.helper.height(L.size.height);
L.helper.width(L.size.width);
if(this._helper&&!I.animate){this._proportionallyResize()
}}C("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",H);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(G){var I,H,F,K,E,J=this.options;
E={minWidth:A(J.minWidth)?J.minWidth:0,maxWidth:A(J.maxWidth)?J.maxWidth:Infinity,minHeight:A(J.minHeight)?J.minHeight:0,maxHeight:A(J.maxHeight)?J.maxHeight:Infinity};
if(this._aspectRatio||G){I=E.minHeight*this.aspectRatio;
F=E.minWidth/this.aspectRatio;
H=E.maxHeight*this.aspectRatio;
K=E.maxWidth/this.aspectRatio;
if(I>E.minWidth){E.minWidth=I
}if(F>E.minHeight){E.minHeight=F
}if(H<E.maxWidth){E.maxWidth=H
}if(K<E.maxHeight){E.maxHeight=K
}}this._vBoundaries=E
},_updateCache:function(E){this.offset=this.helper.offset();
if(A(E.left)){this.position.left=E.left
}if(A(E.top)){this.position.top=E.top
}if(A(E.height)){this.size.height=E.height
}if(A(E.width)){this.size.width=E.width
}},_updateRatio:function(G){var H=this.position,F=this.size,E=this.axis;
if(A(G.height)){G.width=(G.height*this.aspectRatio)
}else{if(A(G.width)){G.height=(G.width/this.aspectRatio)
}}if(E==="sw"){G.left=H.left+(F.width-G.width);
G.top=null
}if(E==="nw"){G.top=H.top+(F.height-G.height);
G.left=H.left+(F.width-G.width)
}return G
},_respectSize:function(J){var G=this._vBoundaries,M=this.axis,O=A(J.width)&&G.maxWidth&&(G.maxWidth<J.width),K=A(J.height)&&G.maxHeight&&(G.maxHeight<J.height),H=A(J.width)&&G.minWidth&&(G.minWidth>J.width),N=A(J.height)&&G.minHeight&&(G.minHeight>J.height),F=this.originalPosition.left+this.originalSize.width,L=this.position.top+this.size.height,I=/sw|nw|w/.test(M),E=/nw|ne|n/.test(M);
if(H){J.width=G.minWidth
}if(N){J.height=G.minHeight
}if(O){J.width=G.maxWidth
}if(K){J.height=G.maxHeight
}if(H&&I){J.left=F-G.minWidth
}if(O&&I){J.left=F-G.maxWidth
}if(N&&E){J.top=L-G.minHeight
}if(K&&E){J.top=L-G.maxHeight
}if(!J.width&&!J.height&&!J.left&&J.top){J.top=null
}else{if(!J.width&&!J.height&&!J.top&&J.left){J.left=null
}}return J
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return 
}var H,F,J,E,I,G=this.helper||this.element;
for(H=0;
H<this._proportionallyResizeElements.length;
H++){I=this._proportionallyResizeElements[H];
if(!this.borderDif){this.borderDif=[];
J=[I.css("borderTopWidth"),I.css("borderRightWidth"),I.css("borderBottomWidth"),I.css("borderLeftWidth")];
E=[I.css("paddingTop"),I.css("paddingRight"),I.css("paddingBottom"),I.css("paddingLeft")];
for(F=0;
F<J.length;
F++){this.borderDif[F]=(parseInt(J[F],10)||0)+(parseInt(E[F],10)||0)
}}I.css({height:(G.height()-this.borderDif[0]-this.borderDif[2])||0,width:(G.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var E=this.element,F=this.options;
this.elementOffset=E.offset();
if(this._helper){this.helper=this.helper||C("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++F.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(F,E){return{width:this.originalSize.width+E}
},w:function(G,E){var F=this.originalSize,H=this.originalPosition;
return{left:H.left+E,width:F.width-E}
},n:function(H,F,E){var G=this.originalSize,I=this.originalPosition;
return{top:I.top+E,height:G.height-E}
},s:function(G,F,E){return{height:this.originalSize.height+E}
},se:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[G,F,E]))
},sw:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[G,F,E]))
},ne:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[G,F,E]))
},nw:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[G,F,E]))
}},_propagate:function(F,E){C.ui.plugin.call(this,F,[E,this.ui()]);
(F!=="resize"&&this._trigger(F,E,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
C.ui.plugin.add("resizable","animate",{stop:function(H){var M=C(this).data("ui-resizable"),J=M.options,G=M._proportionallyResizeElements,E=G.length&&(/textarea/i).test(G[0].nodeName),F=E&&C.ui.hasScroll(G[0],"left")?0:M.sizeDiff.height,L=E?0:M.sizeDiff.width,I={width:(M.size.width-L),height:(M.size.height-F)},K=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,N=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;
M.element.animate(C.extend(I,N&&K?{top:N,left:K}:{}),{duration:J.animateDuration,easing:J.animateEasing,step:function(){var O={width:parseInt(M.element.css("width"),10),height:parseInt(M.element.css("height"),10),top:parseInt(M.element.css("top"),10),left:parseInt(M.element.css("left"),10)};
if(G&&G.length){C(G[0]).css({width:O.width,height:O.height})
}M._updateCache(O);
M._propagate("resize",H)
}})
}});
C.ui.plugin.add("resizable","containment",{start:function(){var M,G,O,E,L,H,P,N=C(this).data("ui-resizable"),K=N.options,J=N.element,F=K.containment,I=(F instanceof C)?F.get(0):(/parent/.test(F))?J.parent().get(0):F;
if(!I){return 
}N.containerElement=C(I);
if(/document/.test(F)||F===document){N.containerOffset={left:0,top:0};
N.containerPosition={left:0,top:0};
N.parentData={element:C(document),left:0,top:0,width:C(document).width(),height:C(document).height()||document.body.parentNode.scrollHeight}
}else{M=C(I);
G=[];
C(["Top","Right","Left","Bottom"]).each(function(R,Q){G[R]=B(M.css("padding"+Q))
});
N.containerOffset=M.offset();
N.containerPosition=M.position();
N.containerSize={height:(M.innerHeight()-G[3]),width:(M.innerWidth()-G[1])};
O=N.containerOffset;
E=N.containerSize.height;
L=N.containerSize.width;
H=(C.ui.hasScroll(I,"left")?I.scrollWidth:L);
P=(C.ui.hasScroll(I)?I.scrollHeight:E);
N.parentData={element:I,left:O.left,top:O.top,width:H,height:P}
}},resize:function(F){var K,P,J,I,L=C(this).data("ui-resizable"),H=L.options,N=L.containerOffset,M=L.position,O=L._aspectRatio||F.shiftKey,E={top:0,left:0},G=L.containerElement;
if(G[0]!==document&&(/static/).test(G.css("position"))){E=N
}if(M.left<(L._helper?N.left:0)){L.size.width=L.size.width+(L._helper?(L.position.left-N.left):(L.position.left-E.left));
if(O){L.size.height=L.size.width/L.aspectRatio
}L.position.left=H.helper?N.left:0
}if(M.top<(L._helper?N.top:0)){L.size.height=L.size.height+(L._helper?(L.position.top-N.top):L.position.top);
if(O){L.size.width=L.size.height*L.aspectRatio
}L.position.top=L._helper?N.top:0
}L.offset.left=L.parentData.left+L.position.left;
L.offset.top=L.parentData.top+L.position.top;
K=Math.abs((L._helper?L.offset.left-E.left:(L.offset.left-E.left))+L.sizeDiff.width);
P=Math.abs((L._helper?L.offset.top-E.top:(L.offset.top-N.top))+L.sizeDiff.height);
J=L.containerElement.get(0)===L.element.parent().get(0);
I=/relative|absolute/.test(L.containerElement.css("position"));
if(J&&I){K-=L.parentData.left
}if(K+L.size.width>=L.parentData.width){L.size.width=L.parentData.width-K;
if(O){L.size.height=L.size.width/L.aspectRatio
}}if(P+L.size.height>=L.parentData.height){L.size.height=L.parentData.height-P;
if(O){L.size.width=L.size.height*L.aspectRatio
}}},stop:function(){var J=C(this).data("ui-resizable"),F=J.options,K=J.containerOffset,E=J.containerPosition,G=J.containerElement,H=C(J.helper),M=H.offset(),L=H.outerWidth()-J.sizeDiff.width,I=H.outerHeight()-J.sizeDiff.height;
if(J._helper&&!F.animate&&(/relative/).test(G.css("position"))){C(this).css({left:M.left-E.left-K.left,width:L,height:I})
}if(J._helper&&!F.animate&&(/static/).test(G.css("position"))){C(this).css({left:M.left-E.left-K.left,width:L,height:I})
}}});
C.ui.plugin.add("resizable","alsoResize",{start:function(){var E=C(this).data("ui-resizable"),G=E.options,F=function(H){C(H).each(function(){var I=C(this);
I.data("ui-resizable-alsoresize",{width:parseInt(I.width(),10),height:parseInt(I.height(),10),left:parseInt(I.css("left"),10),top:parseInt(I.css("top"),10)})
})
};
if(typeof (G.alsoResize)==="object"&&!G.alsoResize.parentNode){if(G.alsoResize.length){G.alsoResize=G.alsoResize[0];
F(G.alsoResize)
}else{C.each(G.alsoResize,function(H){F(H)
})
}}else{F(G.alsoResize)
}},resize:function(G,I){var F=C(this).data("ui-resizable"),J=F.options,H=F.originalSize,L=F.originalPosition,K={height:(F.size.height-H.height)||0,width:(F.size.width-H.width)||0,top:(F.position.top-L.top)||0,left:(F.position.left-L.left)||0},E=function(M,N){C(M).each(function(){var Q=C(this),R=C(this).data("ui-resizable-alsoresize"),P={},O=N&&N.length?N:Q.parents(I.originalElement[0]).length?["width","height"]:["width","height","top","left"];
C.each(O,function(S,U){var T=(R[U]||0)+(K[U]||0);
if(T&&T>=0){P[U]=T||null
}});
Q.css(P)
})
};
if(typeof (J.alsoResize)==="object"&&!J.alsoResize.nodeType){C.each(J.alsoResize,function(M,N){E(M,N)
})
}else{E(J.alsoResize)
}},stop:function(){C(this).removeData("resizable-alsoresize")
}});
C.ui.plugin.add("resizable","ghost",{start:function(){var F=C(this).data("ui-resizable"),G=F.options,E=F.size;
F.ghost=F.originalElement.clone();
F.ghost.css({opacity:0.25,display:"block",position:"relative",height:E.height,width:E.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof G.ghost==="string"?G.ghost:"");
F.ghost.appendTo(F.helper)
},resize:function(){var E=C(this).data("ui-resizable");
if(E.ghost){E.ghost.css({position:"relative",height:E.size.height,width:E.size.width})
}},stop:function(){var E=C(this).data("ui-resizable");
if(E.ghost&&E.helper){E.helper.get(0).removeChild(E.ghost.get(0))
}}});
C.ui.plugin.add("resizable","grid",{resize:function(){var Q=C(this).data("ui-resizable"),I=Q.options,R=Q.size,K=Q.originalSize,N=Q.originalPosition,S=Q.axis,F=typeof I.grid==="number"?[I.grid,I.grid]:I.grid,O=(F[0]||1),M=(F[1]||1),H=Math.round((R.width-K.width)/O)*O,G=Math.round((R.height-K.height)/M)*M,L=K.width+H,E=K.height+G,J=I.maxWidth&&(I.maxWidth<L),T=I.maxHeight&&(I.maxHeight<E),P=I.minWidth&&(I.minWidth>L),U=I.minHeight&&(I.minHeight>E);
I.grid=F;
if(P){L=L+O
}if(U){E=E+M
}if(J){L=L-O
}if(T){E=E-M
}if(/^(se|s|e)$/.test(S)){Q.size.width=L;
Q.size.height=E
}else{if(/^(ne)$/.test(S)){Q.size.width=L;
Q.size.height=E;
Q.position.top=N.top-G
}else{if(/^(sw)$/.test(S)){Q.size.width=L;
Q.size.height=E;
Q.position.left=N.left-H
}else{Q.size.width=L;
Q.size.height=E;
Q.position.top=N.top-G;
Q.position.left=N.left-H
}}}}})
})(jQuery);
(function(A,B){A.widget("ui.selectable",A.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var D,C=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){D=A(C.options.filter,C.element[0]);
D.addClass("ui-selectee");
D.each(function(){var E=A(this),F=E.offset();
A.data(this,"selectable-item",{element:this,$element:E,left:F.left,top:F.top,right:F.left+E.outerWidth(),bottom:F.top+E.outerHeight(),startselected:false,selected:E.hasClass("ui-selected"),selecting:E.hasClass("ui-selecting"),unselecting:E.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=D.addClass("ui-selectee");
this._mouseInit();
this.helper=A("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(E){var D=this,C=this.options;
this.opos=[E.pageX,E.pageY];
if(this.options.disabled){return 
}this.selectees=A(C.filter,this.element[0]);
this._trigger("start",E);
A(C.appendTo).append(this.helper);
this.helper.css({left:E.pageX,top:E.pageY,width:0,height:0});
if(C.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var F=A.data(this,"selectable-item");
F.startselected=true;
if(!E.metaKey&&!E.ctrlKey){F.$element.removeClass("ui-selected");
F.selected=false;
F.$element.addClass("ui-unselecting");
F.unselecting=true;
D._trigger("unselecting",E,{unselecting:F.element})
}});
A(E.target).parents().addBack().each(function(){var F,G=A.data(this,"selectable-item");
if(G){F=(!E.metaKey&&!E.ctrlKey)||!G.$element.hasClass("ui-selected");
G.$element.removeClass(F?"ui-unselecting":"ui-selected").addClass(F?"ui-selecting":"ui-unselecting");
G.unselecting=!F;
G.selecting=F;
G.selected=F;
if(F){D._trigger("selecting",E,{selecting:G.element})
}else{D._trigger("unselecting",E,{unselecting:G.element})
}return false
}})
},_mouseDrag:function(J){this.dragged=true;
if(this.options.disabled){return 
}var G,I=this,E=this.options,D=this.opos[0],H=this.opos[1],C=J.pageX,F=J.pageY;
if(D>C){G=C;
C=D;
D=G
}if(H>F){G=F;
F=H;
H=G
}this.helper.css({left:D,top:H,width:C-D,height:F-H});
this.selectees.each(function(){var K=A.data(this,"selectable-item"),L=false;
if(!K||K.element===I.element[0]){return 
}if(E.tolerance==="touch"){L=(!(K.left>C||K.right<D||K.top>F||K.bottom<H))
}else{if(E.tolerance==="fit"){L=(K.left>D&&K.right<C&&K.top>H&&K.bottom<F)
}}if(L){if(K.selected){K.$element.removeClass("ui-selected");
K.selected=false
}if(K.unselecting){K.$element.removeClass("ui-unselecting");
K.unselecting=false
}if(!K.selecting){K.$element.addClass("ui-selecting");
K.selecting=true;
I._trigger("selecting",J,{selecting:K.element})
}}else{if(K.selecting){if((J.metaKey||J.ctrlKey)&&K.startselected){K.$element.removeClass("ui-selecting");
K.selecting=false;
K.$element.addClass("ui-selected");
K.selected=true
}else{K.$element.removeClass("ui-selecting");
K.selecting=false;
if(K.startselected){K.$element.addClass("ui-unselecting");
K.unselecting=true
}I._trigger("unselecting",J,{unselecting:K.element})
}}if(K.selected){if(!J.metaKey&&!J.ctrlKey&&!K.startselected){K.$element.removeClass("ui-selected");
K.selected=false;
K.$element.addClass("ui-unselecting");
K.unselecting=true;
I._trigger("unselecting",J,{unselecting:K.element})
}}}});
return false
},_mouseStop:function(D){var C=this;
this.dragged=false;
A(".ui-unselecting",this.element[0]).each(function(){var E=A.data(this,"selectable-item");
E.$element.removeClass("ui-unselecting");
E.unselecting=false;
E.startselected=false;
C._trigger("unselected",D,{unselected:E.element})
});
A(".ui-selecting",this.element[0]).each(function(){var E=A.data(this,"selectable-item");
E.$element.removeClass("ui-selecting").addClass("ui-selected");
E.selecting=false;
E.selected=true;
E.startselected=true;
C._trigger("selected",D,{selected:E.element})
});
this._trigger("stop",D);
this.helper.remove();
return false
}})
})(jQuery);
(function(B,D){function A(F,E,G){return(F>E)&&(F<(E+G))
}function C(E){return(/left|right/).test(E.css("float"))||(/inline|table-cell/).test(E.css("display"))
}B.widget("ui.sortable",B.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var E=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?E.axis==="x"||C(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var E=this.items.length-1;
E>=0;
E--){this.items[E].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(E,F){if(E==="disabled"){this.options[E]=F;
this.widget().toggleClass("ui-sortable-disabled",!!F)
}else{B.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(G,H){var E=null,I=false,F=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(G);
B(G.target).parents().each(function(){if(B.data(this,F.widgetName+"-item")===F){E=B(this);
return false
}});
if(B.data(G.target,F.widgetName+"-item")===F){E=B(G.target)
}if(!E){return false
}if(this.options.handle&&!H){B(this.options.handle,E).find("*").addBack().each(function(){if(this===G.target){I=true
}});
if(!I){return false
}}this.currentItem=E;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(H,I,F){var G,E,J=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(H);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
B.extend(this.offset,{click:{left:H.pageX-this.offset.left,top:H.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(H);
this.originalPageX=H.pageX;
this.originalPageY=H.pageY;
(J.cursorAt&&this._adjustOffsetFromHelper(J.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(J.containment){this._setContainment()
}if(J.cursor&&J.cursor!=="auto"){E=this.document.find("body");
this.storedCursor=E.css("cursor");
E.css("cursor",J.cursor);
this.storedStylesheet=B("<style>*{ cursor: "+J.cursor+" !important; }</style>").appendTo(E)
}if(J.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",J.opacity)
}if(J.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",J.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",H,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!F){for(G=this.containers.length-1;
G>=0;
G--){this.containers[G]._trigger("activate",H,this._uiHash(this))
}}if(B.ui.ddmanager){B.ui.ddmanager.current=this
}if(B.ui.ddmanager&&!J.dropBehaviour){B.ui.ddmanager.prepareOffsets(this,H)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(H);
return true
},_mouseDrag:function(I){var G,H,F,K,J=this.options,E=false;
this.position=this._generatePosition(I);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-I.pageY<J.scrollSensitivity){this.scrollParent[0].scrollTop=E=this.scrollParent[0].scrollTop+J.scrollSpeed
}else{if(I.pageY-this.overflowOffset.top<J.scrollSensitivity){this.scrollParent[0].scrollTop=E=this.scrollParent[0].scrollTop-J.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-I.pageX<J.scrollSensitivity){this.scrollParent[0].scrollLeft=E=this.scrollParent[0].scrollLeft+J.scrollSpeed
}else{if(I.pageX-this.overflowOffset.left<J.scrollSensitivity){this.scrollParent[0].scrollLeft=E=this.scrollParent[0].scrollLeft-J.scrollSpeed
}}}else{if(I.pageY-B(document).scrollTop()<J.scrollSensitivity){E=B(document).scrollTop(B(document).scrollTop()-J.scrollSpeed)
}else{if(B(window).height()-(I.pageY-B(document).scrollTop())<J.scrollSensitivity){E=B(document).scrollTop(B(document).scrollTop()+J.scrollSpeed)
}}if(I.pageX-B(document).scrollLeft()<J.scrollSensitivity){E=B(document).scrollLeft(B(document).scrollLeft()-J.scrollSpeed)
}else{if(B(window).width()-(I.pageX-B(document).scrollLeft())<J.scrollSensitivity){E=B(document).scrollLeft(B(document).scrollLeft()+J.scrollSpeed)
}}}if(E!==false&&B.ui.ddmanager&&!J.dropBehaviour){B.ui.ddmanager.prepareOffsets(this,I)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(G=this.items.length-1;
G>=0;
G--){H=this.items[G];
F=H.item[0];
K=this._intersectsWithPointer(H);
if(!K){continue
}if(H.instance!==this.currentContainer){continue
}if(F!==this.currentItem[0]&&this.placeholder[K===1?"next":"prev"]()[0]!==F&&!B.contains(this.placeholder[0],F)&&(this.options.type==="semi-dynamic"?!B.contains(this.element[0],F):true)){this.direction=K===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(H)){this._rearrange(I,H)
}else{break
}this._trigger("change",I,this._uiHash());
break
}}this._contactContainers(I);
if(B.ui.ddmanager){B.ui.ddmanager.drag(this,I)
}this._trigger("sort",I,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(G,I){if(!G){return 
}if(B.ui.ddmanager&&!this.options.dropBehaviour){B.ui.ddmanager.drop(this,G)
}if(this.options.revert){var F=this,J=this.placeholder.offset(),E=this.options.axis,H={};
if(!E||E==="x"){H.left=J.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!E||E==="y"){H.top=J.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
B(this.helper).animate(H,parseInt(this.options.revert,10)||500,function(){F._clear(G)
})
}else{this._clear(G,I)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var E=this.containers.length-1;
E>=0;
E--){this.containers[E]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[E].containerCache.over){this.containers[E]._trigger("out",null,this._uiHash(this));
this.containers[E].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}B.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){B(this.domPosition.prev).after(this.currentItem)
}else{B(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(G){var E=this._getItemsAsjQuery(G&&G.connected),F=[];
G=G||{};
B(E).each(function(){var H=(B(G.item||this).attr(G.attribute||"id")||"").match(G.expression||(/(.+)[\-=_](.+)/));
if(H){F.push((G.key||H[1]+"[]")+"="+(G.key&&G.expression?H[1]:H[2]))
}});
if(!F.length&&G.key){F.push(G.key+"=")
}return F.join("&")
},toArray:function(G){var E=this._getItemsAsjQuery(G&&G.connected),F=[];
G=G||{};
E.each(function(){F.push(B(G.item||this).attr(G.attribute||"id")||"")
});
return F
},_intersectsWith:function(P){var G=this.positionAbs.left,F=G+this.helperProportions.width,N=this.positionAbs.top,M=N+this.helperProportions.height,H=P.left,E=H+P.width,Q=P.top,L=Q+P.height,R=this.offset.click.top,K=this.offset.click.left,J=(this.options.axis==="x")||((N+R)>Q&&(N+R)<L),O=(this.options.axis==="y")||((G+K)>H&&(G+K)<E),I=J&&O;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>P[this.floating?"width":"height"])){return I
}else{return(H<G+(this.helperProportions.width/2)&&F-(this.helperProportions.width/2)<E&&Q<N+(this.helperProportions.height/2)&&M-(this.helperProportions.height/2)<L)
}},_intersectsWithPointer:function(G){var H=(this.options.axis==="x")||A(this.positionAbs.top+this.offset.click.top,G.top,G.height),F=(this.options.axis==="y")||A(this.positionAbs.left+this.offset.click.left,G.left,G.width),J=H&&F,E=this._getDragVerticalDirection(),I=this._getDragHorizontalDirection();
if(!J){return false
}return this.floating?(((I&&I==="right")||E==="down")?2:1):(E&&(E==="down"?2:1))
},_intersectsWithSides:function(H){var F=A(this.positionAbs.top+this.offset.click.top,H.top+(H.height/2),H.height),G=A(this.positionAbs.left+this.offset.click.left,H.left+(H.width/2),H.width),E=this._getDragVerticalDirection(),I=this._getDragHorizontalDirection();
if(this.floating&&I){return((I==="right"&&G)||(I==="left"&&!G))
}else{return E&&((E==="down"&&F)||(E==="up"&&!F))
}},_getDragVerticalDirection:function(){var E=this.positionAbs.top-this.lastPositionAbs.top;
return E!==0&&(E>0?"down":"up")
},_getDragHorizontalDirection:function(){var E=this.positionAbs.left-this.lastPositionAbs.left;
return E!==0&&(E>0?"right":"left")
},refresh:function(E){this._refreshItems(E);
this.refreshPositions();
return this
},_connectWith:function(){var E=this.options;
return E.connectWith.constructor===String?[E.connectWith]:E.connectWith
},_getItemsAsjQuery:function(J){var H,G,L,K,E=[],F=[],I=this._connectWith();
if(I&&J){for(H=I.length-1;
H>=0;
H--){L=B(I[H]);
for(G=L.length-1;
G>=0;
G--){K=B.data(L[G],this.widgetFullName);
if(K&&K!==this&&!K.options.disabled){F.push([B.isFunction(K.options.items)?K.options.items.call(K.element):B(K.options.items,K.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),K])
}}}}F.push([B.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):B(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(H=F.length-1;
H>=0;
H--){F[H][0].each(function(){E.push(this)
})
}return B(E)
},_removeCurrentsFromItems:function(){var E=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=B.grep(this.items,function(G){for(var F=0;
F<E.length;
F++){if(E[F]===G.item[0]){return false
}}return true
})
},_refreshItems:function(E){this.items=[];
this.containers=[this];
var I,G,N,J,M,F,P,O,K=this.items,H=[[B.isFunction(this.options.items)?this.options.items.call(this.element[0],E,{item:this.currentItem}):B(this.options.items,this.element),this]],L=this._connectWith();
if(L&&this.ready){for(I=L.length-1;
I>=0;
I--){N=B(L[I]);
for(G=N.length-1;
G>=0;
G--){J=B.data(N[G],this.widgetFullName);
if(J&&J!==this&&!J.options.disabled){H.push([B.isFunction(J.options.items)?J.options.items.call(J.element[0],E,{item:this.currentItem}):B(J.options.items,J.element),J]);
this.containers.push(J)
}}}}for(I=H.length-1;
I>=0;
I--){M=H[I][1];
F=H[I][0];
for(G=0,O=F.length;
G<O;
G++){P=B(F[G]);
P.data(this.widgetName+"-item",M);
K.push({item:P,instance:M,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(E){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var G,H,F,I;
for(G=this.items.length-1;
G>=0;
G--){H=this.items[G];
if(H.instance!==this.currentContainer&&this.currentContainer&&H.item[0]!==this.currentItem[0]){continue
}F=this.options.toleranceElement?B(this.options.toleranceElement,H.item):H.item;
if(!E){H.width=F.outerWidth();
H.height=F.outerHeight()
}I=F.offset();
H.left=I.left;
H.top=I.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(G=this.containers.length-1;
G>=0;
G--){I=this.containers[G].element.offset();
this.containers[G].containerCache.left=I.left;
this.containers[G].containerCache.top=I.top;
this.containers[G].containerCache.width=this.containers[G].element.outerWidth();
this.containers[G].containerCache.height=this.containers[G].element.outerHeight()
}}return this
},_createPlaceholder:function(F){F=F||this;
var E,G=F.options;
if(!G.placeholder||G.placeholder.constructor===String){E=G.placeholder;
G.placeholder={element:function(){var I=F.currentItem[0].nodeName.toLowerCase(),H=B("<"+I+">",F.document[0]).addClass(E||F.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(I==="tr"){F.currentItem.children().each(function(){B("<td>&#160;</td>",F.document[0]).attr("colspan",B(this).attr("colspan")||1).appendTo(H)
})
}else{if(I==="img"){H.attr("src",F.currentItem.attr("src"))
}}if(!E){H.css("visibility","hidden")
}return H
},update:function(H,I){if(E&&!G.forcePlaceholderSize){return 
}if(!I.height()){I.height(F.currentItem.innerHeight()-parseInt(F.currentItem.css("paddingTop")||0,10)-parseInt(F.currentItem.css("paddingBottom")||0,10))
}if(!I.width()){I.width(F.currentItem.innerWidth()-parseInt(F.currentItem.css("paddingLeft")||0,10)-parseInt(F.currentItem.css("paddingRight")||0,10))
}}}
}F.placeholder=B(G.placeholder.element.call(F.element,F.currentItem));
F.currentItem.after(F.placeholder);
G.placeholder.update(F,F.placeholder)
},_contactContainers:function(E){var J,H,N,K,L,P,F,Q,I,M,G=null,O=null;
for(J=this.containers.length-1;
J>=0;
J--){if(B.contains(this.currentItem[0],this.containers[J].element[0])){continue
}if(this._intersectsWith(this.containers[J].containerCache)){if(G&&B.contains(this.containers[J].element[0],G.element[0])){continue
}G=this.containers[J];
O=J
}else{if(this.containers[J].containerCache.over){this.containers[J]._trigger("out",E,this._uiHash(this));
this.containers[J].containerCache.over=0
}}}if(!G){return 
}if(this.containers.length===1){if(!this.containers[O].containerCache.over){this.containers[O]._trigger("over",E,this._uiHash(this));
this.containers[O].containerCache.over=1
}}else{N=10000;
K=null;
M=G.floating||C(this.currentItem);
L=M?"left":"top";
P=M?"width":"height";
F=this.positionAbs[L]+this.offset.click[L];
for(H=this.items.length-1;
H>=0;
H--){if(!B.contains(this.containers[O].element[0],this.items[H].item[0])){continue
}if(this.items[H].item[0]===this.currentItem[0]){continue
}if(M&&!A(this.positionAbs.top+this.offset.click.top,this.items[H].top,this.items[H].height)){continue
}Q=this.items[H].item.offset()[L];
I=false;
if(Math.abs(Q-F)>Math.abs(Q+this.items[H][P]-F)){I=true;
Q+=this.items[H][P]
}if(Math.abs(Q-F)<N){N=Math.abs(Q-F);
K=this.items[H];
this.direction=I?"up":"down"
}}if(!K&&!this.options.dropOnEmpty){return 
}if(this.currentContainer===this.containers[O]){return 
}K?this._rearrange(E,K,null,true):this._rearrange(E,null,this.containers[O].element,true);
this._trigger("change",E,this._uiHash());
this.containers[O]._trigger("change",E,this._uiHash(this));
this.currentContainer=this.containers[O];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[O]._trigger("over",E,this._uiHash(this));
this.containers[O].containerCache.over=1
}},_createHelper:function(F){var G=this.options,E=B.isFunction(G.helper)?B(G.helper.apply(this.element[0],[F,this.currentItem])):(G.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!E.parents("body").length){B(G.appendTo!=="parent"?G.appendTo:this.currentItem[0].parentNode)[0].appendChild(E[0])
}if(E[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!E[0].style.width||G.forceHelperSize){E.width(this.currentItem.width())
}if(!E[0].style.height||G.forceHelperSize){E.height(this.currentItem.height())
}return E
},_adjustOffsetFromHelper:function(E){if(typeof E==="string"){E=E.split(" ")
}if(B.isArray(E)){E={left:+E[0],top:+E[1]||0}
}if("left" in E){this.offset.click.left=E.left+this.margins.left
}if("right" in E){this.offset.click.left=this.helperProportions.width-E.right+this.margins.left
}if("top" in E){this.offset.click.top=E.top+this.margins.top
}if("bottom" in E){this.offset.click.top=this.helperProportions.height-E.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var E=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&B.contains(this.scrollParent[0],this.offsetParent[0])){E.left+=this.scrollParent.scrollLeft();
E.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&B.ui.ie)){E={top:0,left:0}
}return{top:E.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:E.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var E=this.currentItem.position();
return{top:E.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:E.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var F,H,E,G=this.options;
if(G.containment==="parent"){G.containment=this.helper[0].parentNode
}if(G.containment==="document"||G.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,B(G.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(B(G.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(G.containment)){F=B(G.containment)[0];
H=B(G.containment).offset();
E=(B(F).css("overflow")!=="hidden");
this.containment=[H.left+(parseInt(B(F).css("borderLeftWidth"),10)||0)+(parseInt(B(F).css("paddingLeft"),10)||0)-this.margins.left,H.top+(parseInt(B(F).css("borderTopWidth"),10)||0)+(parseInt(B(F).css("paddingTop"),10)||0)-this.margins.top,H.left+(E?Math.max(F.scrollWidth,F.offsetWidth):F.offsetWidth)-(parseInt(B(F).css("borderLeftWidth"),10)||0)-(parseInt(B(F).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,H.top+(E?Math.max(F.scrollHeight,F.offsetHeight):F.offsetHeight)-(parseInt(B(F).css("borderTopWidth"),10)||0)-(parseInt(B(F).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(G,I){if(!I){I=this.position
}var F=G==="absolute"?1:-1,E=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&B.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,H=(/(html|body)/i).test(E[0].tagName);
return{top:(I.top+this.offset.relative.top*F+this.offset.parent.top*F-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(H?0:E.scrollTop()))*F)),left:(I.left+this.offset.relative.left*F+this.offset.parent.left*F-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():H?0:E.scrollLeft())*F))}
},_generatePosition:function(H){var J,I,K=this.options,G=H.pageX,F=H.pageY,E=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&B.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,L=(/(html|body)/i).test(E[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(H.pageX-this.offset.click.left<this.containment[0]){G=this.containment[0]+this.offset.click.left
}if(H.pageY-this.offset.click.top<this.containment[1]){F=this.containment[1]+this.offset.click.top
}if(H.pageX-this.offset.click.left>this.containment[2]){G=this.containment[2]+this.offset.click.left
}if(H.pageY-this.offset.click.top>this.containment[3]){F=this.containment[3]+this.offset.click.top
}}if(K.grid){J=this.originalPageY+Math.round((F-this.originalPageY)/K.grid[1])*K.grid[1];
F=this.containment?((J-this.offset.click.top>=this.containment[1]&&J-this.offset.click.top<=this.containment[3])?J:((J-this.offset.click.top>=this.containment[1])?J-K.grid[1]:J+K.grid[1])):J;
I=this.originalPageX+Math.round((G-this.originalPageX)/K.grid[0])*K.grid[0];
G=this.containment?((I-this.offset.click.left>=this.containment[0]&&I-this.offset.click.left<=this.containment[2])?I:((I-this.offset.click.left>=this.containment[0])?I-K.grid[0]:I+K.grid[0])):I
}}return{top:(F-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(L?0:E.scrollTop())))),left:(G-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():L?0:E.scrollLeft())))}
},_rearrange:function(I,H,F,G){F?F[0].appendChild(this.placeholder[0]):H.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?H.item[0]:H.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var E=this.counter;
this._delay(function(){if(E===this.counter){this.refreshPositions(!G)
}})
},_clear:function(F,G){this.reverting=false;
var E,H=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(E in this._storedCSS){if(this._storedCSS[E]==="auto"||this._storedCSS[E]==="static"){this._storedCSS[E]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!G){H.push(function(I){this._trigger("receive",I,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!G){H.push(function(I){this._trigger("update",I,this._uiHash())
})
}if(this!==this.currentContainer){if(!G){H.push(function(I){this._trigger("remove",I,this._uiHash())
});
H.push((function(I){return function(J){I._trigger("receive",J,this._uiHash(this))
}
}).call(this,this.currentContainer));
H.push((function(I){return function(J){I._trigger("update",J,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(E=this.containers.length-1;
E>=0;
E--){if(!G){H.push((function(I){return function(J){I._trigger("deactivate",J,this._uiHash(this))
}
}).call(this,this.containers[E]))
}if(this.containers[E].containerCache.over){H.push((function(I){return function(J){I._trigger("out",J,this._uiHash(this))
}
}).call(this,this.containers[E]));
this.containers[E].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!G){this._trigger("beforeStop",F,this._uiHash());
for(E=0;
E<H.length;
E++){H[E].call(this,F)
}this._trigger("stop",F,this._uiHash())
}this.fromOutside=false;
return false
}if(!G){this._trigger("beforeStop",F,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!G){for(E=0;
E<H.length;
E++){H[E].call(this,F)
}this._trigger("stop",F,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(B.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(E){var F=E||this;
return{helper:F.helper,placeholder:F.placeholder||B([]),position:F.position,originalPosition:F.originalPosition,offset:F.positionAbs,item:F.currentItem,sender:E?E.element:null}
}})
})(jQuery);
(function($,undefined){var dataSpace="ui-effects-";
$.effects={effect:{}};
/*
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]
}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)
},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";
support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;
each(spaces,function(spaceName,space){space.cache="_"+spaceName;
space.props.alpha={idx:3,type:"percent",def:1}
});
function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};
if(value==null){return(allowEmpty||!prop.def)?null:prop.def
}value=type.floor?~~value:parseFloat(value);
if(isNaN(value)){return prop.def
}if(type.mod){return(value+type.mod)%type.mod
}return 0>value?0:type.max<value?type.max:value
}function stringParse(string){var inst=color(),rgba=inst._rgba=[];
string=string.toLowerCase();
each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";
if(values){parsed=inst[spaceName](values);
inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];
rgba=inst._rgba=parsed._rgba;
return false
}});
if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent)
}return inst
}return colors[string]
}color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];
return this
}if(red.jquery||red.nodeType){red=jQuery(red).css(green);
green=undefined
}var inst=this,type=jQuery.type(red),rgba=this._rgba=[];
if(green!==undefined){red=[red,green,blue,alpha];
type="array"
}if(type==="string"){return this.parse(stringParse(red)||colors._default)
}if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)
});
return this
}if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice()
}})
}else{each(spaces,function(spaceName,space){var cache=space.cache;
each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return 
}inst[cache]=space.to(inst._rgba)
}inst[cache][prop.idx]=clamp(red[key],prop,true)
});
if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;
if(space.from){inst._rgba=space.from(inst[cache])
}}})
}return this
}},is:function(compare){var is=color(compare),same=true,inst=this;
each(spaces,function(_,space){var localCache,isCache=is[space.cache];
if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];
each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);
return same
}})
}return same
});
return same
},_space:function(){var used=[],inst=this;
each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName)
}});
return used.pop()
},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();
end=end[space.cache];
each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};
if(endValue===null){return 
}if(startValue===null){result[index]=endValue
}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod
}else{if(startValue-endValue>type.mod/2){startValue-=type.mod
}}}result[index]=clamp((endValue-startValue)*distance+startValue,prop)
}});
return this[spaceName](result)
},blend:function(opaque){if(this._rgba[3]===1){return this
}var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;
return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v
}))
},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v
});
if(rgba[3]===1){rgba.pop();
prefix="rgb("
}return prefix+rgba.join()+")"
},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0
}if(i&&i<3){v=Math.round(v*100)+"%"
}return v
});
if(hsla[3]===1){hsla.pop();
prefix="hsl("
}return prefix+hsla.join()+")"
},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();
if(includeAlpha){rgba.push(~~(alpha*255))
}return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);
return v.length===1?"0"+v:v
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
color.fn.parse.prototype=color.fn;
function hue2rgb(p,q,h){h=(h+1)%1;
if(h*6<1){return p+(q-p)*h*6
}if(h*2<1){return q
}if(h*3<2){return p+(q-p)*((2/3)-h)*6
}return p
}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]]
}var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;
if(min===max){h=0
}else{if(r===max){h=(60*(g-b)/diff)+360
}else{if(g===max){h=(60*(b-r)/diff)+120
}else{h=(60*(r-g)/diff)+240
}}}if(diff===0){s=0
}else{if(l<=0.5){s=diff/add
}else{s=diff/(2-add)
}}return[Math.round(h)%360,s,l,a==null?1:a]
};
spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]]
}var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;
return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a]
};
each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;
color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba)
}if(value===undefined){return this[cache].slice()
}var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();
each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];
if(val==null){val=local[prop.idx]
}local[prop.idx]=clamp(val,prop)
});
if(from){ret=color(from(local));
ret[cache]=local;
return ret
}else{return color(local)
}};
each(props,function(key,prop){if(color.fn[key]){return 
}color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;
if(vtype==="undefined"){return cur
}if(vtype==="function"){value=value.call(this,cur);
vtype=jQuery.type(value)
}if(value==null&&prop.empty){return this
}if(vtype==="string"){match=rplusequals.exec(value);
if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)
}}local[prop.idx]=value;
return this[fn](local)
}
})
});
color.hook=function(hook){var hooks=hook.split(" ");
each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";
if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);
if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;
while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");
curElem=curElem.parentNode
}catch(e){}}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")
}value=value.toRgbaString()
}try{elem.style[hook]=value
}catch(e){}}};
jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);
fx.end=color(fx.end);
fx.colorInit=true
}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))
}
})
};
color.hook(stepHooks);
jQuery.cssHooks.borderColor={expand:function(value){var expanded={};
each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value
});
return expanded
}};
colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);
fx.setAttr=true
}}
});
function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};
if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;
while(len--){key=style[len];
if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key]
}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key]
}}}return styles
}function styleDifference(oldStyle,newStyle){var diff={},name,value;
for(name in newStyle){value=newStyle[name];
if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value
}}}}return diff
}if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))
}
}$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);
return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;
allAnimations=allAnimations.map(function(){var el=$(this);
return{el:el,start:getElementStyles(this)}
});
applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action])
}})
};
applyClassChange();
allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);
this.diff=styleDifference(this.start,this.end);
return this
});
animated.attr("class",baseClass);
allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo)
}});
this.el.animate(this.diff,opts);
return dfd.promise()
});
$.when.apply($,allAnimations.get()).done(function(){applyClassChange();
$.each(arguments,function(){var el=this.el;
$.each(this.diff,function(key){el.css(key,"")
})
});
o.complete.call(animated[0])
})
})
};
$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)
}
})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)
}
})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments)
}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback)
}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)
}}
})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)
}})
})();
(function(){$.extend($.effects,{version:"1.10.3",save:function(element,set){for(var i=0;
i<set.length;
i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]])
}}},restore:function(element,set){var val,i;
for(i=0;
i<set.length;
i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);
if(val===undefined){val=""
}element.css(set[i],val)
}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide"
}return mode
},getBaseline:function(origin,original){var y,x;
switch(origin[0]){case"top":y=0;
break;
case"middle":y=0.5;
break;
case"bottom":y=1;
break;
default:y=origin[0]/original.height
}switch(origin[1]){case"left":x=0;
break;
case"center":x=0.5;
break;
case"right":x=1;
break;
default:x=origin[1]/original.width
}return{x:x,y:y}
},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent()
}var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;
try{active.id
}catch(e){active=document.body
}element.wrap(wrapper);
if(element[0]===active||$.contains(element[0],active)){$(active).focus()
}wrapper=element.parent();
if(element.css("position")==="static"){wrapper.css({position:"relative"});
element.css({position:"relative"})
}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});
$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);
if(isNaN(parseInt(props[pos],10))){props[pos]="auto"
}});
element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}element.css(size);
return wrapper.css(props).show()
},removeWrapper:function(element){var active=document.activeElement;
if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);
if(element[0]===active||$.contains(element[0],active)){$(active).focus()
}}return element
},setTransition:function(element,list,factor,value){value=value||{};
$.each(list,function(i,x){var unit=element.cssUnit(x);
if(unit[0]>0){value[x]=unit[0]*factor+unit[1]
}});
return value
}});
function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;
effect=effect.effect
}effect={effect:effect};
if(options==null){options={}
}if($.isFunction(options)){callback=options;
speed=null;
options={}
}if(typeof options==="number"||$.fx.speeds[options]){callback=speed;
speed=options;
options={}
}if($.isFunction(speed)){callback=speed;
speed=null
}if(options){$.extend(effect,options)
}speed=speed||options.duration;
effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;
effect.complete=callback||options.complete;
return effect
}function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return true
}if(typeof option==="string"&&!$.effects.effect[option]){return true
}if($.isFunction(option)){return true
}if(typeof option==="object"&&!option.effect){return true
}return false
}$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];
if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,args.complete)
}else{return this.each(function(){if(args.complete){args.complete.call(this)
}})
}}function run(next){var elem=$(this),complete=args.complete,mode=args.mode;
function done(){if($.isFunction(complete)){complete.call(elem[0])
}if($.isFunction(next)){next()
}}if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();
done()
}else{effectMethod.call(elem[0],args,done)
}}return queue===false?this.each(run):this.queue(queue||"fx",run)
},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)
}else{var args=_normalizeArguments.apply(this,arguments);
args.mode="show";
return this.effect.call(this,args)
}}
})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)
}else{var args=_normalizeArguments.apply(this,arguments);
args.mode="hide";
return this.effect.call(this,args)
}}
})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments)
}else{var args=_normalizeArguments.apply(this,arguments);
args.mode="toggle";
return this.effect.call(this,args)
}}
})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];
$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit]
}});
return val
}})
})();
(function(){var baseEasings={};
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)
}
});
$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)
},Circ:function(p){return 1-Math.sqrt(1-p*p)
},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)
},Back:function(p){return p*p*(3*p-2)
},Bounce:function(p){var pow2,bounce=4;
while(p<((pow2=Math.pow(2,--bounce))-1)/11){}return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2)
}});
$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;
$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)
};
$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2
}
})
})()
})(jQuery);
(function(D,E){var B=0,C={},A={};
C.height=C.paddingTop=C.paddingBottom=C.borderTopWidth=C.borderBottomWidth="hide";
A.height=A.paddingTop=A.paddingBottom=A.borderTopWidth=A.borderBottomWidth="show";
D.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var F=this.options;
this.prevShow=this.prevHide=D();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!F.collapsible&&(F.active===false||F.active==null)){F.active=0
}this._processPanels();
if(F.active<0){F.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?D():this.active.next(),content:!this.active.length?D():this.active.next()}
},_createIcons:function(){var F=this.options.icons;
if(F){D("<span>").addClass("ui-accordion-header-icon ui-icon "+F.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(F.header).addClass(F.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var F;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
F=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){F.css("height","")
}},_setOption:function(F,G){if(F==="active"){this._activate(G);
return 
}if(F==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(G)
}this._super(F,G);
if(F==="collapsible"&&!G&&this.options.active===false){this._activate(0)
}if(F==="icons"){this._destroyIcons();
if(G){this._createIcons()
}}if(F==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!G)
}},_keydown:function(I){if(I.altKey||I.ctrlKey){return 
}var J=D.ui.keyCode,H=this.headers.length,F=this.headers.index(I.target),G=false;
switch(I.keyCode){case J.RIGHT:case J.DOWN:G=this.headers[(F+1)%H];
break;
case J.LEFT:case J.UP:G=this.headers[(F-1+H)%H];
break;
case J.SPACE:case J.ENTER:this._eventHandler(I);
break;
case J.HOME:G=this.headers[0];
break;
case J.END:G=this.headers[H-1];
break
}if(G){D(I.target).attr("tabIndex",-1);
D(G).attr("tabIndex",0);
G.focus();
I.preventDefault()
}},_panelKeyDown:function(F){if(F.keyCode===D.ui.keyCode.UP&&F.ctrlKey){D(F.currentTarget).prev().focus()
}},refresh:function(){var F=this.options;
this._processPanels();
if((F.active===false&&F.collapsible===true)||!this.headers.length){F.active=false;
this.active=D()
}else{if(F.active===false){this._activate(0)
}else{if(this.active.length&&!D.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){F.active=false;
this.active=D()
}else{this._activate(Math.max(0,F.active-1))
}}else{F.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var J,H=this.options,G=H.heightStyle,I=this.element.parent(),F=this.accordionId="ui-accordion-"+(this.element.attr("id")||++B);
this.active=this._findActive(H.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(N){var O=D(this),M=O.attr("id"),K=O.next(),L=K.attr("id");
if(!M){M=F+"-header-"+N;
O.attr("id",M)
}if(!L){L=F+"-panel-"+N;
K.attr("id",L)
}O.attr("aria-controls",L);
K.attr("aria-labelledby",M)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._createIcons();
this._setupEvents(H.event);
if(G==="fill"){J=I.height();
this.element.siblings(":visible").each(function(){var L=D(this),K=L.css("position");
if(K==="absolute"||K==="fixed"){return 
}J-=L.outerHeight(true)
});
this.headers.each(function(){J-=D(this).outerHeight(true)
});
this.headers.next().each(function(){D(this).height(Math.max(0,J-D(this).innerHeight()+D(this).height()))
}).css("overflow","auto")
}else{if(G==="auto"){J=0;
this.headers.next().each(function(){J=Math.max(J,D(this).css("height","").height())
}).height(J)
}}},_activate:function(F){var G=this._findActive(F)[0];
if(G===this.active[0]){return 
}G=G||this.active[0];
this._eventHandler({target:G,currentTarget:G,preventDefault:D.noop})
},_findActive:function(F){return typeof F==="number"?this.headers.eq(F):D()
},_setupEvents:function(G){var F={keydown:"_keydown"};
if(G){D.each(G.split(" "),function(I,H){F[H]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,F);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(F){var N=this.options,I=this.active,J=D(F.currentTarget),L=J[0]===I[0],G=L&&N.collapsible,H=G?D():J.next(),K=I.next(),M={oldHeader:I,oldPanel:K,newHeader:G?D():J,newPanel:H};
F.preventDefault();
if((L&&!N.collapsible)||(this._trigger("beforeActivate",F,M)===false)){return 
}N.active=G?false:this.headers.index(J);
this.active=L?D():J;
this._toggle(M);
I.removeClass("ui-accordion-header-active ui-state-active");
if(N.icons){I.children(".ui-accordion-header-icon").removeClass(N.icons.activeHeader).addClass(N.icons.header)
}if(!L){J.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(N.icons){J.children(".ui-accordion-header-icon").removeClass(N.icons.header).addClass(N.icons.activeHeader)
}J.next().addClass("ui-accordion-content-active")
}},_toggle:function(H){var F=H.newPanel,G=this.prevShow.length?this.prevShow:H.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=F;
this.prevHide=G;
if(this.options.animate){this._animate(F,G,H)
}else{G.hide();
F.show();
this._toggleComplete(H)
}G.attr({"aria-expanded":"false","aria-hidden":"true"});
G.prev().attr("aria-selected","false");
if(F.length&&G.length){G.prev().attr("tabIndex",-1)
}else{if(F.length){this.headers.filter(function(){return D(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}F.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(F,N,J){var M,L,I,K=this,O=0,P=F.length&&(!N.length||(F.index()<N.index())),H=this.options.animate||{},Q=P&&H.down||H,G=function(){K._toggleComplete(J)
};
if(typeof Q==="number"){I=Q
}if(typeof Q==="string"){L=Q
}L=L||Q.easing||H.easing;
I=I||Q.duration||H.duration;
if(!N.length){return F.animate(A,I,L,G)
}if(!F.length){return N.animate(C,I,L,G)
}M=F.show().outerHeight();
N.animate(C,{duration:I,easing:L,step:function(R,S){S.now=Math.round(R)
}});
F.hide().animate(A,{duration:I,easing:L,complete:G,step:function(R,S){S.now=Math.round(R);
if(S.prop!=="height"){O+=S.now
}else{if(K.options.heightStyle!=="content"){S.now=Math.round(M-N.outerHeight()-O);
O=0
}}}})
},_toggleComplete:function(G){var F=G.oldPanel;
F.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(F.length){F.parent()[0].className=F.parent()[0].className
}this._trigger("activate",null,G)
}})
})(jQuery);
(function(A,B){var C=0;
A.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var F,D,G,I=this.element[0].nodeName.toLowerCase(),H=I==="textarea",E=I==="input";
this.isMultiLine=H?true:E?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[H||E?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(J){if(this.element.prop("readOnly")){F=true;
G=true;
D=true;
return 
}F=false;
G=false;
D=false;
var K=A.ui.keyCode;
switch(J.keyCode){case K.PAGE_UP:F=true;
this._move("previousPage",J);
break;
case K.PAGE_DOWN:F=true;
this._move("nextPage",J);
break;
case K.UP:F=true;
this._keyEvent("previous",J);
break;
case K.DOWN:F=true;
this._keyEvent("next",J);
break;
case K.ENTER:case K.NUMPAD_ENTER:if(this.menu.active){F=true;
J.preventDefault();
this.menu.select(J)
}break;
case K.TAB:if(this.menu.active){this.menu.select(J)
}break;
case K.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(J);
J.preventDefault()
}break;
default:D=true;
this._searchTimeout(J);
break
}},keypress:function(J){if(F){F=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){J.preventDefault()
}return 
}if(D){return 
}var K=A.ui.keyCode;
switch(J.keyCode){case K.PAGE_UP:this._move("previousPage",J);
break;
case K.PAGE_DOWN:this._move("nextPage",J);
break;
case K.UP:this._keyEvent("previous",J);
break;
case K.DOWN:this._keyEvent("next",J);
break
}},input:function(J){if(G){G=false;
J.preventDefault();
return 
}this._searchTimeout(J)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(J){if(this.cancelBlur){delete this.cancelBlur;
return 
}clearTimeout(this.searching);
this.close(J);
this._change(J)
}});
this._initSource();
this.menu=A("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(J){J.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var K=this.menu.element[0];
if(!A(J.target).closest(".ui-menu-item").length){this._delay(function(){var L=this;
this.document.one("mousedown",function(M){if(M.target!==L.element[0]&&M.target!==K&&!A.contains(K,M.target)){L.close()
}})
})
}},menufocus:function(K,L){if(this.isNewMenu){this.isNewMenu=false;
if(K.originalEvent&&/^mouse/.test(K.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){A(K.target).trigger(K.originalEvent)
});
return 
}}var J=L.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",K,{item:J})){if(K.originalEvent&&/^key/.test(K.originalEvent.type)){this._value(J.value)
}}else{this.liveRegion.text(J.value)
}},menuselect:function(L,M){var K=M.item.data("ui-autocomplete-item"),J=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=J;
this._delay(function(){this.previous=J;
this.selectedItem=K
})
}if(false!==this._trigger("select",L,{item:K})){this._value(K.value)
}this.term=this._value();
this.close(L);
this.selectedItem=K
}});
this.liveRegion=A("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(D,E){this._super(D,E);
if(D==="source"){this._initSource()
}if(D==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(D==="disabled"&&E&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var D=this.options.appendTo;
if(D){D=D.jquery||D.nodeType?A(D):this.document.find(D).eq(0)
}if(!D){D=this.element.closest(".ui-front")
}if(!D.length){D=this.document[0].body
}return D
},_initSource:function(){var F,D,E=this;
if(A.isArray(this.options.source)){F=this.options.source;
this.source=function(H,G){G(A.ui.autocomplete.filter(F,H.term))
}
}else{if(typeof this.options.source==="string"){D=this.options.source;
this.source=function(H,G){if(E.xhr){E.xhr.abort()
}E.xhr=A.ajax({url:D,data:H,dataType:"json",success:function(I){G(I)
},error:function(){G([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(D){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,D)
}},this.options.delay)
},search:function(E,D){E=E!=null?E:this._value();
this.term=this._value();
if(E.length<this.options.minLength){return this.close(D)
}if(this._trigger("search",D)===false){return 
}return this._search(E)
},_search:function(D){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:D},this._response())
},_response:function(){var E=this,D=++C;
return function(F){if(D===C){E.__response(F)
}E.pending--;
if(!E.pending){E.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(D){if(D){D=this._normalize(D)
}this._trigger("response",null,{content:D});
if(!this.options.disabled&&D&&D.length&&!this.cancelSearch){this._suggest(D);
this._trigger("open")
}else{this._close()
}},close:function(D){this.cancelSearch=true;
this._close(D)
},_close:function(D){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",D)
}},_change:function(D){if(this.previous!==this._value()){this._trigger("change",D,{item:this.selectedItem})
}},_normalize:function(D){if(D.length&&D[0].label&&D[0].value){return D
}return A.map(D,function(E){if(typeof E==="string"){return{label:E,value:E}
}return A.extend({label:E.label||E.value,value:E.value||E.label},E)
})
},_suggest:function(D){var E=this.menu.element.empty();
this._renderMenu(E,D);
this.isNewMenu=true;
this.menu.refresh();
E.show();
this._resizeMenu();
E.position(A.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var D=this.menu.element;
D.outerWidth(Math.max(D.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(E,D){var F=this;
A.each(D,function(G,H){F._renderItemData(E,H)
})
},_renderItemData:function(D,E){return this._renderItem(D,E).data("ui-autocomplete-item",E)
},_renderItem:function(D,E){return A("<li>").append(A("<a>").text(E.label)).appendTo(D)
},_move:function(E,D){if(!this.menu.element.is(":visible")){this.search(null,D);
return 
}if(this.menu.isFirstItem()&&/^previous/.test(E)||this.menu.isLastItem()&&/^next/.test(E)){this._value(this.term);
this.menu.blur();
return 
}this.menu[E](D)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(E,D){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(E,D);
D.preventDefault()
}}});
A.extend(A.ui.autocomplete,{escapeRegex:function(D){return D.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(F,D){var E=new RegExp(A.ui.autocomplete.escapeRegex(D),"i");
return A.grep(F,function(G){return E.test(G.label||G.value||G)
})
}});
A.widget("ui.autocomplete",A.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(D){return D+(D>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(E){var D;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return 
}if(E&&E.length){D=this.options.messages.results(E.length)
}else{D=this.options.messages.noResults
}this.liveRegion.text(D)
}})
}(jQuery));
(function(F,B){var K,E,A,H,I="ui-button ui-widget ui-state-default ui-corner-all",C="ui-state-hover ui-state-active ",G="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",J=function(){var L=F(this);
setTimeout(function(){L.find(":ui-button").button("refresh")
},1)
},D=function(M){var L=M.name,N=M.form,O=F([]);
if(L){L=L.replace(/'/g,"\\'");
if(N){O=F(N).find("[name='"+L+"']")
}else{O=F("[name='"+L+"']",M.ownerDocument).filter(function(){return !this.form
})
}}return O
};
F.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,J);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var O=this,M=this.options,P=this.type==="checkbox"||this.type==="radio",N=!P?"ui-state-active":"",L="ui-state-focus";
if(M.label===null){M.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(I).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(M.disabled){return 
}if(this===K){F(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(M.disabled){return 
}F(this).removeClass(N)
}).bind("click"+this.eventNamespace,function(Q){if(M.disabled){Q.preventDefault();
Q.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){O.buttonElement.addClass(L)
}).bind("blur"+this.eventNamespace,function(){O.buttonElement.removeClass(L)
});
if(P){this.element.bind("change"+this.eventNamespace,function(){if(H){return 
}O.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(Q){if(M.disabled){return 
}H=false;
E=Q.pageX;
A=Q.pageY
}).bind("mouseup"+this.eventNamespace,function(Q){if(M.disabled){return 
}if(E!==Q.pageX||A!==Q.pageY){H=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(M.disabled||H){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(M.disabled||H){return false
}F(this).addClass("ui-state-active");
O.buttonElement.attr("aria-pressed","true");
var Q=O.element[0];
D(Q).not(Q).map(function(){return F(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(M.disabled){return false
}F(this).addClass("ui-state-active");
K=this;
O.document.one("mouseup",function(){K=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(M.disabled){return false
}F(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(Q){if(M.disabled){return false
}if(Q.keyCode===F.ui.keyCode.SPACE||Q.keyCode===F.ui.keyCode.ENTER){F(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){F(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(Q){if(Q.keyCode===F.ui.keyCode.SPACE){F(this).click()
}})
}}}this._setOption("disabled",M.disabled);
this._resetButton()
},_determineButtonType:function(){var L,N,M;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){L=this.element.parents().last();
N="label[for='"+this.element.attr("id")+"']";
this.buttonElement=L.find(N);
if(!this.buttonElement.length){L=L.length?L.siblings():this.element.siblings();
this.buttonElement=L.filter(N);
if(!this.buttonElement.length){this.buttonElement=L.find(N)
}}this.element.addClass("ui-helper-hidden-accessible");
M=this.element.is(":checked");
if(M){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",M)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(I+" "+C+" "+G).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(L,M){this._super(L,M);
if(L==="disabled"){if(M){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return 
}this._resetButton()
},refresh:function(){var L=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(L!==this.options.disabled){this._setOption("disabled",L)
}if(this.type==="radio"){D(this.element[0]).each(function(){if(F(this).is(":checked")){F(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{F(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return 
}var P=this.buttonElement.removeClass(G),N=F("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),M=this.options.icons,L=M.primary&&M.secondary,O=[];
if(M.primary||M.secondary){if(this.options.text){O.push("ui-button-text-icon"+(L?"s":(M.primary?"-primary":"-secondary")))
}if(M.primary){P.prepend("<span class='ui-button-icon-primary ui-icon "+M.primary+"'></span>")
}if(M.secondary){P.append("<span class='ui-button-icon-secondary ui-icon "+M.secondary+"'></span>")
}if(!this.options.text){O.push(L?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){P.attr("title",F.trim(N))
}}}else{O.push("ui-button-text-only")
}P.addClass(O.join(" "))
}});
F.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(L,M){if(L==="disabled"){this.buttons.button("option",L,M)
}this._super(L,M)
},refresh:function(){var L=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return F(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(L?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return F(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(E,G){E.extend(E.ui,{datepicker:{version:"1.10.3"}});
var F="datepicker",C;
function B(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
E.extend(this._defaults,this.regional[""]);
this.dpDiv=D(E("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}E.extend(B.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(H){A(this._defaults,H||{});
return this
},_attachDatepicker:function(K,H){var L,J,I;
L=K.nodeName.toLowerCase();
J=(L==="div"||L==="span");
if(!K.id){this.uuid+=1;
K.id="dp"+this.uuid
}I=this._newInst(E(K),J);
I.settings=E.extend({},H||{});
if(L==="input"){this._connectDatepicker(K,I)
}else{if(J){this._inlineDatepicker(K,I)
}}},_newInst:function(I,H){var J=I[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:J,input:I,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:H,dpDiv:(!H?this.dpDiv:D(E("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(J,I){var H=E(J);
I.append=E([]);
I.trigger=E([]);
if(H.hasClass(this.markerClassName)){return 
}this._attachments(H,I);
H.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(I);
E.data(J,F,I);
if(I.settings.disabled){this._disableDatepicker(J)
}},_attachments:function(J,M){var I,L,H,N=this._get(M,"appendText"),K=this._get(M,"isRTL");
if(M.append){M.append.remove()
}if(N){M.append=E("<span class='"+this._appendClass+"'>"+N+"</span>");
J[K?"before":"after"](M.append)
}J.unbind("focus",this._showDatepicker);
if(M.trigger){M.trigger.remove()
}I=this._get(M,"showOn");
if(I==="focus"||I==="both"){J.focus(this._showDatepicker)
}if(I==="button"||I==="both"){L=this._get(M,"buttonText");
H=this._get(M,"buttonImage");
M.trigger=E(this._get(M,"buttonImageOnly")?E("<img/>").addClass(this._triggerClass).attr({src:H,alt:L,title:L}):E("<button type='button'></button>").addClass(this._triggerClass).html(!H?L:E("<img/>").attr({src:H,alt:L,title:L})));
J[K?"before":"after"](M.trigger);
M.trigger.click(function(){if(E.datepicker._datepickerShowing&&E.datepicker._lastInput===J[0]){E.datepicker._hideDatepicker()
}else{if(E.datepicker._datepickerShowing&&E.datepicker._lastInput!==J[0]){E.datepicker._hideDatepicker();
E.datepicker._showDatepicker(J[0])
}else{E.datepicker._showDatepicker(J[0])
}}return false
})
}},_autoSize:function(N){if(this._get(N,"autoSize")&&!N.inline){var K,I,J,M,L=new Date(2009,12-1,20),H=this._get(N,"dateFormat");
if(H.match(/[DM]/)){K=function(O){I=0;
J=0;
for(M=0;
M<O.length;
M++){if(O[M].length>I){I=O[M].length;
J=M
}}return J
};
L.setMonth(K(this._get(N,(H.match(/MM/)?"monthNames":"monthNamesShort"))));
L.setDate(K(this._get(N,(H.match(/DD/)?"dayNames":"dayNamesShort")))+20-L.getDay())
}N.input.attr("size",this._formatDate(N,L).length)
}},_inlineDatepicker:function(I,H){var J=E(I);
if(J.hasClass(this.markerClassName)){return 
}J.addClass(this.markerClassName).append(H.dpDiv);
E.data(I,F,H);
this._setDate(H,this._getDefaultDate(H),true);
this._updateDatepicker(H);
this._updateAlternate(H);
if(H.settings.disabled){this._disableDatepicker(I)
}H.dpDiv.css("display","block")
},_dialogDatepicker:function(O,I,M,J,N){var H,R,L,Q,P,K=this._dialogInst;
if(!K){this.uuid+=1;
H="dp"+this.uuid;
this._dialogInput=E("<input type='text' id='"+H+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
E("body").append(this._dialogInput);
K=this._dialogInst=this._newInst(this._dialogInput,false);
K.settings={};
E.data(this._dialogInput[0],F,K)
}A(K.settings,J||{});
I=(I&&I.constructor===Date?this._formatDate(K,I):I);
this._dialogInput.val(I);
this._pos=(N?(N.length?N:[N.pageX,N.pageY]):null);
if(!this._pos){R=document.documentElement.clientWidth;
L=document.documentElement.clientHeight;
Q=document.documentElement.scrollLeft||document.body.scrollLeft;
P=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(R/2)-100+Q,(L/2)-150+P]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
K.settings.onSelect=M;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(E.blockUI){E.blockUI(this.dpDiv)
}E.data(this._dialogInput[0],F,K);
return this
},_destroyDatepicker:function(J){var K,H=E(J),I=E.data(J,F);
if(!H.hasClass(this.markerClassName)){return 
}K=J.nodeName.toLowerCase();
E.removeData(J,F);
if(K==="input"){I.append.remove();
I.trigger.remove();
H.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(K==="div"||K==="span"){H.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(K){var L,J,H=E(K),I=E.data(K,F);
if(!H.hasClass(this.markerClassName)){return 
}L=K.nodeName.toLowerCase();
if(L==="input"){K.disabled=false;
I.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(L==="div"||L==="span"){J=H.children("."+this._inlineClass);
J.children().removeClass("ui-state-disabled");
J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=E.map(this._disabledInputs,function(M){return(M===K?null:M)
})
},_disableDatepicker:function(K){var L,J,H=E(K),I=E.data(K,F);
if(!H.hasClass(this.markerClassName)){return 
}L=K.nodeName.toLowerCase();
if(L==="input"){K.disabled=true;
I.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(L==="div"||L==="span"){J=H.children("."+this._inlineClass);
J.children().addClass("ui-state-disabled");
J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=E.map(this._disabledInputs,function(M){return(M===K?null:M)
});
this._disabledInputs[this._disabledInputs.length]=K
},_isDisabledDatepicker:function(I){if(!I){return false
}for(var H=0;
H<this._disabledInputs.length;
H++){if(this._disabledInputs[H]===I){return true
}}return false
},_getInst:function(I){try{return E.data(I,F)
}catch(H){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(N,I,M){var J,H,L,O,K=this._getInst(N);
if(arguments.length===2&&typeof I==="string"){return(I==="defaults"?E.extend({},E.datepicker._defaults):(K?(I==="all"?E.extend({},K.settings):this._get(K,I)):null))
}J=I||{};
if(typeof I==="string"){J={};
J[I]=M
}if(K){if(this._curInst===K){this._hideDatepicker()
}H=this._getDateDatepicker(N,true);
L=this._getMinMaxDate(K,"min");
O=this._getMinMaxDate(K,"max");
A(K.settings,J);
if(L!==null&&J.dateFormat!==G&&J.minDate===G){K.settings.minDate=this._formatDate(K,L)
}if(O!==null&&J.dateFormat!==G&&J.maxDate===G){K.settings.maxDate=this._formatDate(K,O)
}if("disabled" in J){if(J.disabled){this._disableDatepicker(N)
}else{this._enableDatepicker(N)
}}this._attachments(E(N),K);
this._autoSize(K);
this._setDate(K,H);
this._updateAlternate(K);
this._updateDatepicker(K)
}},_changeDatepicker:function(J,H,I){this._optionDatepicker(J,H,I)
},_refreshDatepicker:function(I){var H=this._getInst(I);
if(H){this._updateDatepicker(H)
}},_setDateDatepicker:function(J,H){var I=this._getInst(J);
if(I){this._setDate(I,H);
this._updateDatepicker(I);
this._updateAlternate(I)
}},_getDateDatepicker:function(J,H){var I=this._getInst(J);
if(I&&!I.inline){this._setDateFromField(I,H)
}return(I?this._getDate(I):null)
},_doKeyDown:function(K){var I,H,M,L=E.datepicker._getInst(K.target),N=true,J=L.dpDiv.is(".ui-datepicker-rtl");
L._keyEvent=true;
if(E.datepicker._datepickerShowing){switch(K.keyCode){case 9:E.datepicker._hideDatepicker();
N=false;
break;
case 13:M=E("td."+E.datepicker._dayOverClass+":not(."+E.datepicker._currentClass+")",L.dpDiv);
if(M[0]){E.datepicker._selectDay(K.target,L.selectedMonth,L.selectedYear,M[0])
}I=E.datepicker._get(L,"onSelect");
if(I){H=E.datepicker._formatDate(L);
I.apply((L.input?L.input[0]:null),[H,L])
}else{E.datepicker._hideDatepicker()
}return false;
case 27:E.datepicker._hideDatepicker();
break;
case 33:E.datepicker._adjustDate(K.target,(K.ctrlKey?-E.datepicker._get(L,"stepBigMonths"):-E.datepicker._get(L,"stepMonths")),"M");
break;
case 34:E.datepicker._adjustDate(K.target,(K.ctrlKey?+E.datepicker._get(L,"stepBigMonths"):+E.datepicker._get(L,"stepMonths")),"M");
break;
case 35:if(K.ctrlKey||K.metaKey){E.datepicker._clearDate(K.target)
}N=K.ctrlKey||K.metaKey;
break;
case 36:if(K.ctrlKey||K.metaKey){E.datepicker._gotoToday(K.target)
}N=K.ctrlKey||K.metaKey;
break;
case 37:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,(J?+1:-1),"D")
}N=K.ctrlKey||K.metaKey;
if(K.originalEvent.altKey){E.datepicker._adjustDate(K.target,(K.ctrlKey?-E.datepicker._get(L,"stepBigMonths"):-E.datepicker._get(L,"stepMonths")),"M")
}break;
case 38:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,-7,"D")
}N=K.ctrlKey||K.metaKey;
break;
case 39:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,(J?-1:+1),"D")
}N=K.ctrlKey||K.metaKey;
if(K.originalEvent.altKey){E.datepicker._adjustDate(K.target,(K.ctrlKey?+E.datepicker._get(L,"stepBigMonths"):+E.datepicker._get(L,"stepMonths")),"M")
}break;
case 40:if(K.ctrlKey||K.metaKey){E.datepicker._adjustDate(K.target,+7,"D")
}N=K.ctrlKey||K.metaKey;
break;
default:N=false
}}else{if(K.keyCode===36&&K.ctrlKey){E.datepicker._showDatepicker(this)
}else{N=false
}}if(N){K.preventDefault();
K.stopPropagation()
}},_doKeyPress:function(J){var I,H,K=E.datepicker._getInst(J.target);
if(E.datepicker._get(K,"constrainInput")){I=E.datepicker._possibleChars(E.datepicker._get(K,"dateFormat"));
H=String.fromCharCode(J.charCode==null?J.keyCode:J.charCode);
return J.ctrlKey||J.metaKey||(H<" "||!I||I.indexOf(H)>-1)
}},_doKeyUp:function(J){var H,K=E.datepicker._getInst(J.target);
if(K.input.val()!==K.lastVal){try{H=E.datepicker.parseDate(E.datepicker._get(K,"dateFormat"),(K.input?K.input.val():null),E.datepicker._getFormatConfig(K));
if(H){E.datepicker._setDateFromField(K);
E.datepicker._updateAlternate(K);
E.datepicker._updateDatepicker(K)
}}catch(I){}}return true
},_showDatepicker:function(I){I=I.target||I;
if(I.nodeName.toLowerCase()!=="input"){I=E("input",I.parentNode)[0]
}if(E.datepicker._isDisabledDatepicker(I)||E.datepicker._lastInput===I){return 
}var K,O,J,M,N,H,L;
K=E.datepicker._getInst(I);
if(E.datepicker._curInst&&E.datepicker._curInst!==K){E.datepicker._curInst.dpDiv.stop(true,true);
if(K&&E.datepicker._datepickerShowing){E.datepicker._hideDatepicker(E.datepicker._curInst.input[0])
}}O=E.datepicker._get(K,"beforeShow");
J=O?O.apply(I,[I,K]):{};
if(J===false){return 
}A(K.settings,J);
K.lastVal=null;
E.datepicker._lastInput=I;
E.datepicker._setDateFromField(K);
if(E.datepicker._inDialog){I.value=""
}if(!E.datepicker._pos){E.datepicker._pos=E.datepicker._findPos(I);
E.datepicker._pos[1]+=I.offsetHeight
}M=false;
E(I).parents().each(function(){M|=E(this).css("position")==="fixed";
return !M
});
N={left:E.datepicker._pos[0],top:E.datepicker._pos[1]};
E.datepicker._pos=null;
K.dpDiv.empty();
K.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
E.datepicker._updateDatepicker(K);
N=E.datepicker._checkOffset(K,N,M);
K.dpDiv.css({position:(E.datepicker._inDialog&&E.blockUI?"static":(M?"fixed":"absolute")),display:"none",left:N.left+"px",top:N.top+"px"});
if(!K.inline){H=E.datepicker._get(K,"showAnim");
L=E.datepicker._get(K,"duration");
K.dpDiv.zIndex(E(I).zIndex()+1);
E.datepicker._datepickerShowing=true;
if(E.effects&&E.effects.effect[H]){K.dpDiv.show(H,E.datepicker._get(K,"showOptions"),L)
}else{K.dpDiv[H||"show"](H?L:null)
}if(E.datepicker._shouldFocusInput(K)){K.input.focus()
}E.datepicker._curInst=K
}},_updateDatepicker:function(J){this.maxRows=4;
C=J;
J.dpDiv.empty().append(this._generateHTML(J));
this._attachHandlers(J);
J.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var L,H=this._getNumberOfMonths(J),K=H[1],I=17;
J.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(K>1){J.dpDiv.addClass("ui-datepicker-multi-"+K).css("width",(I*K)+"em")
}J.dpDiv[(H[0]!==1||H[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
J.dpDiv[(this._get(J,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(J===E.datepicker._curInst&&E.datepicker._datepickerShowing&&E.datepicker._shouldFocusInput(J)){J.input.focus()
}if(J.yearshtml){L=J.yearshtml;
setTimeout(function(){if(L===J.yearshtml&&J.yearshtml){J.dpDiv.find("select.ui-datepicker-year:first").replaceWith(J.yearshtml)
}L=J.yearshtml=null
},0)
}},_shouldFocusInput:function(H){return H.input&&H.input.is(":visible")&&!H.input.is(":disabled")&&!H.input.is(":focus")
},_checkOffset:function(M,K,J){var L=M.dpDiv.outerWidth(),P=M.dpDiv.outerHeight(),O=M.input?M.input.outerWidth():0,H=M.input?M.input.outerHeight():0,N=document.documentElement.clientWidth+(J?0:E(document).scrollLeft()),I=document.documentElement.clientHeight+(J?0:E(document).scrollTop());
K.left-=(this._get(M,"isRTL")?(L-O):0);
K.left-=(J&&K.left===M.input.offset().left)?E(document).scrollLeft():0;
K.top-=(J&&K.top===(M.input.offset().top+H))?E(document).scrollTop():0;
K.left-=Math.min(K.left,(K.left+L>N&&N>L)?Math.abs(K.left+L-N):0);
K.top-=Math.min(K.top,(K.top+P>I&&I>P)?Math.abs(P+H):0);
return K
},_findPos:function(K){var H,J=this._getInst(K),I=this._get(J,"isRTL");
while(K&&(K.type==="hidden"||K.nodeType!==1||E.expr.filters.hidden(K))){K=K[I?"previousSibling":"nextSibling"]
}H=E(K).offset();
return[H.left,H.top]
},_hideDatepicker:function(J){var I,M,L,H,K=this._curInst;
if(!K||(J&&K!==E.data(J,F))){return 
}if(this._datepickerShowing){I=this._get(K,"showAnim");
M=this._get(K,"duration");
L=function(){E.datepicker._tidyDialog(K)
};
if(E.effects&&(E.effects.effect[I]||E.effects[I])){K.dpDiv.hide(I,E.datepicker._get(K,"showOptions"),M,L)
}else{K.dpDiv[(I==="slideDown"?"slideUp":(I==="fadeIn"?"fadeOut":"hide"))]((I?M:null),L)
}if(!I){L()
}this._datepickerShowing=false;
H=this._get(K,"onClose");
if(H){H.apply((K.input?K.input[0]:null),[(K.input?K.input.val():""),K])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(E.blockUI){E.unblockUI();
E("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(H){H.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(I){if(!E.datepicker._curInst){return 
}var H=E(I.target),J=E.datepicker._getInst(H[0]);
if(((H[0].id!==E.datepicker._mainDivId&&H.parents("#"+E.datepicker._mainDivId).length===0&&!H.hasClass(E.datepicker.markerClassName)&&!H.closest("."+E.datepicker._triggerClass).length&&E.datepicker._datepickerShowing&&!(E.datepicker._inDialog&&E.blockUI)))||(H.hasClass(E.datepicker.markerClassName)&&E.datepicker._curInst!==J)){E.datepicker._hideDatepicker()
}},_adjustDate:function(L,K,J){var I=E(L),H=this._getInst(I[0]);
if(this._isDisabledDatepicker(I[0])){return 
}this._adjustInstDate(H,K+(J==="M"?this._get(H,"showCurrentAtPos"):0),J);
this._updateDatepicker(H)
},_gotoToday:function(K){var H,J=E(K),I=this._getInst(J[0]);
if(this._get(I,"gotoCurrent")&&I.currentDay){I.selectedDay=I.currentDay;
I.drawMonth=I.selectedMonth=I.currentMonth;
I.drawYear=I.selectedYear=I.currentYear
}else{H=new Date();
I.selectedDay=H.getDate();
I.drawMonth=I.selectedMonth=H.getMonth();
I.drawYear=I.selectedYear=H.getFullYear()
}this._notifyChange(I);
this._adjustDate(J)
},_selectMonthYear:function(L,H,K){var J=E(L),I=this._getInst(J[0]);
I["selected"+(K==="M"?"Month":"Year")]=I["draw"+(K==="M"?"Month":"Year")]=parseInt(H.options[H.selectedIndex].value,10);
this._notifyChange(I);
this._adjustDate(J)
},_selectDay:function(M,K,H,L){var I,J=E(M);
if(E(L).hasClass(this._unselectableClass)||this._isDisabledDatepicker(J[0])){return 
}I=this._getInst(J[0]);
I.selectedDay=I.currentDay=E("a",L).html();
I.selectedMonth=I.currentMonth=K;
I.selectedYear=I.currentYear=H;
this._selectDate(M,this._formatDate(I,I.currentDay,I.currentMonth,I.currentYear))
},_clearDate:function(I){var H=E(I);
this._selectDate(H,"")
},_selectDate:function(L,H){var I,K=E(L),J=this._getInst(K[0]);
H=(H!=null?H:this._formatDate(J));
if(J.input){J.input.val(H)
}this._updateAlternate(J);
I=this._get(J,"onSelect");
if(I){I.apply((J.input?J.input[0]:null),[H,J])
}else{if(J.input){J.input.trigger("change")
}}if(J.inline){this._updateDatepicker(J)
}else{this._hideDatepicker();
this._lastInput=J.input[0];
if(typeof (J.input[0])!=="object"){J.input.focus()
}this._lastInput=null
}},_updateAlternate:function(L){var K,J,H,I=this._get(L,"altField");
if(I){K=this._get(L,"altFormat")||this._get(L,"dateFormat");
J=this._getDate(L);
H=this.formatDate(K,J,this._getFormatConfig(L));
E(I).each(function(){E(this).val(H)
})
}},noWeekends:function(I){var H=I.getDay();
return[(H>0&&H<6),""]
},iso8601Week:function(H){var I,J=new Date(H.getTime());
J.setDate(J.getDate()+4-(J.getDay()||7));
I=J.getTime();
J.setMonth(0);
J.setDate(1);
return Math.floor(Math.round((I-J)/86400000)/7)+1
},parseDate:function(X,S,Z){if(X==null||S==null){throw"Invalid arguments"
}S=(typeof S==="object"?S.toString():S+"");
if(S===""){return null
}var K,U,I,Y=0,N=(Z?Z.shortYearCutoff:null)||this._defaults.shortYearCutoff,J=(typeof N!=="string"?N:new Date().getFullYear()%100+parseInt(N,10)),Q=(Z?Z.dayNamesShort:null)||this._defaults.dayNamesShort,b=(Z?Z.dayNames:null)||this._defaults.dayNames,H=(Z?Z.monthNamesShort:null)||this._defaults.monthNamesShort,L=(Z?Z.monthNames:null)||this._defaults.monthNames,M=-1,c=-1,W=-1,P=-1,V=false,a,R=function(e){var f=(K+1<X.length&&X.charAt(K+1)===e);
if(f){K++
}return f
},d=function(g){var e=R(g),h=(g==="@"?14:(g==="!"?20:(g==="y"&&e?4:(g==="o"?3:2)))),i=new RegExp("^\\d{1,"+h+"}"),f=S.substring(Y).match(i);
if(!f){throw"Missing number at position "+Y
}Y+=f[0].length;
return parseInt(f[0],10)
},O=function(f,g,i){var e=-1,h=E.map(R(f)?i:g,function(l,j){return[[j,l]]
}).sort(function(k,j){return -(k[1].length-j[1].length)
});
E.each(h,function(k,l){var j=l[1];
if(S.substr(Y,j.length).toLowerCase()===j.toLowerCase()){e=l[0];
Y+=j.length;
return false
}});
if(e!==-1){return e+1
}else{throw"Unknown name at position "+Y
}},T=function(){if(S.charAt(Y)!==X.charAt(K)){throw"Unexpected literal at position "+Y
}Y++
};
for(K=0;
K<X.length;
K++){if(V){if(X.charAt(K)==="'"&&!R("'")){V=false
}else{T()
}}else{switch(X.charAt(K)){case"d":W=d("d");
break;
case"D":O("D",Q,b);
break;
case"o":P=d("o");
break;
case"m":c=d("m");
break;
case"M":c=O("M",H,L);
break;
case"y":M=d("y");
break;
case"@":a=new Date(d("@"));
M=a.getFullYear();
c=a.getMonth()+1;
W=a.getDate();
break;
case"!":a=new Date((d("!")-this._ticksTo1970)/10000);
M=a.getFullYear();
c=a.getMonth()+1;
W=a.getDate();
break;
case"'":if(R("'")){T()
}else{V=true
}break;
default:T()
}}}if(Y<S.length){I=S.substr(Y);
if(!/^\s+/.test(I)){throw"Extra/unparsed characters found in date: "+I
}}if(M===-1){M=new Date().getFullYear()
}else{if(M<100){M+=new Date().getFullYear()-new Date().getFullYear()%100+(M<=J?0:-100)
}}if(P>-1){c=1;
W=P;
do{U=this._getDaysInMonth(M,c-1);
if(W<=U){break
}c++;
W-=U
}while(true)
}a=this._daylightSavingAdjust(new Date(M,c-1,W));
if(a.getFullYear()!==M||a.getMonth()+1!==c||a.getDate()!==W){throw"Invalid date"
}return a
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(Q,K,L){if(!K){return""
}var S,T=(L?L.dayNamesShort:null)||this._defaults.dayNamesShort,I=(L?L.dayNames:null)||this._defaults.dayNames,O=(L?L.monthNamesShort:null)||this._defaults.monthNamesShort,M=(L?L.monthNames:null)||this._defaults.monthNames,R=function(U){var V=(S+1<Q.length&&Q.charAt(S+1)===U);
if(V){S++
}return V
},H=function(W,X,U){var V=""+X;
if(R(W)){while(V.length<U){V="0"+V
}}return V
},N=function(U,W,V,X){return(R(U)?X[W]:V[W])
},J="",P=false;
if(K){for(S=0;
S<Q.length;
S++){if(P){if(Q.charAt(S)==="'"&&!R("'")){P=false
}else{J+=Q.charAt(S)
}}else{switch(Q.charAt(S)){case"d":J+=H("d",K.getDate(),2);
break;
case"D":J+=N("D",K.getDay(),T,I);
break;
case"o":J+=H("o",Math.round((new Date(K.getFullYear(),K.getMonth(),K.getDate()).getTime()-new Date(K.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":J+=H("m",K.getMonth()+1,2);
break;
case"M":J+=N("M",K.getMonth(),O,M);
break;
case"y":J+=(R("y")?K.getFullYear():(K.getYear()%100<10?"0":"")+K.getYear()%100);
break;
case"@":J+=K.getTime();
break;
case"!":J+=K.getTime()*10000+this._ticksTo1970;
break;
case"'":if(R("'")){J+="'"
}else{P=true
}break;
default:J+=Q.charAt(S)
}}}}return J
},_possibleChars:function(L){var K,J="",I=false,H=function(M){var N=(K+1<L.length&&L.charAt(K+1)===M);
if(N){K++
}return N
};
for(K=0;
K<L.length;
K++){if(I){if(L.charAt(K)==="'"&&!H("'")){I=false
}else{J+=L.charAt(K)
}}else{switch(L.charAt(K)){case"d":case"m":case"y":case"@":J+="0123456789";
break;
case"D":case"M":return null;
case"'":if(H("'")){J+="'"
}else{I=true
}break;
default:J+=L.charAt(K)
}}}return J
},_get:function(I,H){return I.settings[H]!==G?I.settings[H]:this._defaults[H]
},_setDateFromField:function(M,J){if(M.input.val()===M.lastVal){return 
}var H=this._get(M,"dateFormat"),O=M.lastVal=M.input?M.input.val():null,N=this._getDefaultDate(M),I=N,K=this._getFormatConfig(M);
try{I=this.parseDate(H,O,K)||N
}catch(L){O=(J?"":O)
}M.selectedDay=I.getDate();
M.drawMonth=M.selectedMonth=I.getMonth();
M.drawYear=M.selectedYear=I.getFullYear();
M.currentDay=(O?I.getDate():0);
M.currentMonth=(O?I.getMonth():0);
M.currentYear=(O?I.getFullYear():0);
this._adjustInstDate(M)
},_getDefaultDate:function(H){return this._restrictMinMax(H,this._determineDate(H,this._get(H,"defaultDate"),new Date()))
},_determineDate:function(L,I,M){var K=function(O){var N=new Date();
N.setDate(N.getDate()+O);
return N
},J=function(U){try{return E.datepicker.parseDate(E.datepicker._get(L,"dateFormat"),U,E.datepicker._getFormatConfig(L))
}catch(T){}var O=(U.toLowerCase().match(/^c/)?E.datepicker._getDate(L):null)||new Date(),P=O.getFullYear(),S=O.getMonth(),N=O.getDate(),R=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,Q=R.exec(U);
while(Q){switch(Q[2]||"d"){case"d":case"D":N+=parseInt(Q[1],10);
break;
case"w":case"W":N+=parseInt(Q[1],10)*7;
break;
case"m":case"M":S+=parseInt(Q[1],10);
N=Math.min(N,E.datepicker._getDaysInMonth(P,S));
break;
case"y":case"Y":P+=parseInt(Q[1],10);
N=Math.min(N,E.datepicker._getDaysInMonth(P,S));
break
}Q=R.exec(U)
}return new Date(P,S,N)
},H=(I==null||I===""?M:(typeof I==="string"?J(I):(typeof I==="number"?(isNaN(I)?M:K(I)):new Date(I.getTime()))));
H=(H&&H.toString()==="Invalid Date"?M:H);
if(H){H.setHours(0);
H.setMinutes(0);
H.setSeconds(0);
H.setMilliseconds(0)
}return this._daylightSavingAdjust(H)
},_daylightSavingAdjust:function(H){if(!H){return null
}H.setHours(H.getHours()>12?H.getHours()+2:0);
return H
},_setDate:function(N,K,M){var H=!K,J=N.selectedMonth,L=N.selectedYear,I=this._restrictMinMax(N,this._determineDate(N,K,new Date()));
N.selectedDay=N.currentDay=I.getDate();
N.drawMonth=N.selectedMonth=N.currentMonth=I.getMonth();
N.drawYear=N.selectedYear=N.currentYear=I.getFullYear();
if((J!==N.selectedMonth||L!==N.selectedYear)&&!M){this._notifyChange(N)
}this._adjustInstDate(N);
if(N.input){N.input.val(H?"":this._formatDate(N))
}},_getDate:function(I){var H=(!I.currentYear||(I.input&&I.input.val()==="")?null:this._daylightSavingAdjust(new Date(I.currentYear,I.currentMonth,I.currentDay)));
return H
},_attachHandlers:function(I){var H=this._get(I,"stepMonths"),J="#"+I.id.replace(/\\\\/g,"\\");
I.dpDiv.find("[data-handler]").map(function(){var K={prev:function(){E.datepicker._adjustDate(J,-H,"M")
},next:function(){E.datepicker._adjustDate(J,+H,"M")
},hide:function(){E.datepicker._hideDatepicker()
},today:function(){E.datepicker._gotoToday(J)
},selectDay:function(){E.datepicker._selectDay(J,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){E.datepicker._selectMonthYear(J,this,"M");
return false
},selectYear:function(){E.datepicker._selectMonthYear(J,this,"Y");
return false
}};
E(this).bind(this.getAttribute("data-event"),K[this.getAttribute("data-handler")])
})
},_generateHTML:function(x){var a,Z,s,k,L,AB,v,o,AE,i,AI,S,U,T,I,AA,Q,d,AD,q,AJ,c,h,R,M,t,m,p,n,P,f,V,w,z,K,AC,AG,l,W,y=new Date(),b=this._daylightSavingAdjust(new Date(y.getFullYear(),y.getMonth(),y.getDate())),AF=this._get(x,"isRTL"),AH=this._get(x,"showButtonPanel"),r=this._get(x,"hideIfNoPrevNext"),g=this._get(x,"navigationAsDateFormat"),X=this._getNumberOfMonths(x),O=this._get(x,"showCurrentAtPos"),j=this._get(x,"stepMonths"),e=(X[0]!==1||X[1]!==1),J=this._daylightSavingAdjust((!x.currentDay?new Date(9999,9,9):new Date(x.currentYear,x.currentMonth,x.currentDay))),N=this._getMinMaxDate(x,"min"),Y=this._getMinMaxDate(x,"max"),H=x.drawMonth-O,u=x.drawYear;
if(H<0){H+=12;
u--
}if(Y){a=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-(X[0]*X[1])+1,Y.getDate()));
a=(N&&a<N?N:a);
while(this._daylightSavingAdjust(new Date(u,H,1))>a){H--;
if(H<0){H=11;
u--
}}}x.drawMonth=H;
x.drawYear=u;
Z=this._get(x,"prevText");
Z=(!g?Z:this.formatDate(Z,this._daylightSavingAdjust(new Date(u,H-j,1)),this._getFormatConfig(x)));
s=(this._canAdjustMonth(x,-1,u,H)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+Z+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"e":"w")+"'>"+Z+"</span></a>":(r?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+Z+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"e":"w")+"'>"+Z+"</span></a>"));
k=this._get(x,"nextText");
k=(!g?k:this.formatDate(k,this._daylightSavingAdjust(new Date(u,H+j,1)),this._getFormatConfig(x)));
L=(this._canAdjustMonth(x,+1,u,H)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+k+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"w":"e")+"'>"+k+"</span></a>":(r?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+k+"'><span class='ui-icon ui-icon-circle-triangle-"+(AF?"w":"e")+"'>"+k+"</span></a>"));
AB=this._get(x,"currentText");
v=(this._get(x,"gotoCurrent")&&x.currentDay?J:b);
AB=(!g?AB:this.formatDate(AB,v,this._getFormatConfig(x)));
o=(!x.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(x,"closeText")+"</button>":"");
AE=(AH)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(AF?o:"")+(this._isInRange(x,v)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+AB+"</button>":"")+(AF?"":o)+"</div>":"";
i=parseInt(this._get(x,"firstDay"),10);
i=(isNaN(i)?0:i);
AI=this._get(x,"showWeek");
S=this._get(x,"dayNames");
U=this._get(x,"dayNamesMin");
T=this._get(x,"monthNames");
I=this._get(x,"monthNamesShort");
AA=this._get(x,"beforeShowDay");
Q=this._get(x,"showOtherMonths");
d=this._get(x,"selectOtherMonths");
AD=this._getDefaultDate(x);
q="";
AJ;
for(c=0;
c<X[0];
c++){h="";
this.maxRows=4;
for(R=0;
R<X[1];
R++){M=this._daylightSavingAdjust(new Date(u,H,x.selectedDay));
t=" ui-corner-all";
m="";
if(e){m+="<div class='ui-datepicker-group";
if(X[1]>1){switch(R){case 0:m+=" ui-datepicker-group-first";
t=" ui-corner-"+(AF?"right":"left");
break;
case X[1]-1:m+=" ui-datepicker-group-last";
t=" ui-corner-"+(AF?"left":"right");
break;
default:m+=" ui-datepicker-group-middle";
t="";
break
}}m+="'>"
}m+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+t+"'>"+(/all|left/.test(t)&&c===0?(AF?L:s):"")+(/all|right/.test(t)&&c===0?(AF?s:L):"")+this._generateMonthYearHeader(x,H,u,N,Y,c>0||R>0,T,I)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
p=(AI?"<th class='ui-datepicker-week-col'>"+this._get(x,"weekHeader")+"</th>":"");
for(AJ=0;
AJ<7;
AJ++){n=(AJ+i)%7;
p+="<th"+((AJ+i+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+S[n]+"'>"+U[n]+"</span></th>"
}m+=p+"</tr></thead><tbody>";
P=this._getDaysInMonth(u,H);
if(u===x.selectedYear&&H===x.selectedMonth){x.selectedDay=Math.min(x.selectedDay,P)
}f=(this._getFirstDayOfMonth(u,H)-i+7)%7;
V=Math.ceil((f+P)/7);
w=(e?this.maxRows>V?this.maxRows:V:V);
this.maxRows=w;
z=this._daylightSavingAdjust(new Date(u,H,1-f));
for(K=0;
K<w;
K++){m+="<tr>";
AC=(!AI?"":"<td class='ui-datepicker-week-col'>"+this._get(x,"calculateWeek")(z)+"</td>");
for(AJ=0;
AJ<7;
AJ++){AG=(AA?AA.apply((x.input?x.input[0]:null),[z]):[true,""]);
l=(z.getMonth()!==H);
W=(l&&!d)||!AG[0]||(N&&z<N)||(Y&&z>Y);
AC+="<td class='"+((AJ+i+6)%7>=5?" ui-datepicker-week-end":"")+(l?" ui-datepicker-other-month":"")+((z.getTime()===M.getTime()&&H===x.selectedMonth&&x._keyEvent)||(AD.getTime()===z.getTime()&&AD.getTime()===M.getTime())?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(l&&!Q?"":" "+AG[1]+(z.getTime()===J.getTime()?" "+this._currentClass:"")+(z.getTime()===b.getTime()?" ui-datepicker-today":""))+"'"+((!l||Q)&&AG[2]?" title='"+AG[2].replace(/'/g,"&#39;")+"'":"")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(l&&!Q?"&#xa0;":(W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===b.getTime()?" ui-state-highlight":"")+(z.getTime()===J.getTime()?" ui-state-active":"")+(l?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>"))+"</td>";
z.setDate(z.getDate()+1);
z=this._daylightSavingAdjust(z)
}m+=AC+"</tr>"
}H++;
if(H>11){H=0;
u++
}m+="</tbody></table>"+(e?"</div>"+((X[0]>0&&R===X[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
h+=m
}q+=h
}q+=AE;
x._keyEvent=false;
return q
},_generateMonthYearHeader:function(L,J,T,N,R,U,P,H){var Y,I,Z,W,M,V,S,O,K=this._get(L,"changeMonth"),a=this._get(L,"changeYear"),b=this._get(L,"showMonthAfterYear"),Q="<div class='ui-datepicker-title'>",X="";
if(U||!K){X+="<span class='ui-datepicker-month'>"+P[J]+"</span>"
}else{Y=(N&&N.getFullYear()===T);
I=(R&&R.getFullYear()===T);
X+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(Z=0;
Z<12;
Z++){if((!Y||Z>=N.getMonth())&&(!I||Z<=R.getMonth())){X+="<option value='"+Z+"'"+(Z===J?" selected='selected'":"")+">"+H[Z]+"</option>"
}}X+="</select>"
}if(!b){Q+=X+(U||!(K&&a)?"&#xa0;":"")
}if(!L.yearshtml){L.yearshtml="";
if(U||!a){Q+="<span class='ui-datepicker-year'>"+T+"</span>"
}else{W=this._get(L,"yearRange").split(":");
M=new Date().getFullYear();
V=function(d){var c=(d.match(/c[+\-].*/)?T+parseInt(d.substring(1),10):(d.match(/[+\-].*/)?M+parseInt(d,10):parseInt(d,10)));
return(isNaN(c)?M:c)
};
S=V(W[0]);
O=Math.max(S,V(W[1]||""));
S=(N?Math.max(S,N.getFullYear()):S);
O=(R?Math.min(O,R.getFullYear()):O);
L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
S<=O;
S++){L.yearshtml+="<option value='"+S+"'"+(S===T?" selected='selected'":"")+">"+S+"</option>"
}L.yearshtml+="</select>";
Q+=L.yearshtml;
L.yearshtml=null
}}Q+=this._get(L,"yearSuffix");
if(b){Q+=(U||!(K&&a)?"&#xa0;":"")+X
}Q+="</div>";
return Q
},_adjustInstDate:function(K,N,M){var J=K.drawYear+(M==="Y"?N:0),L=K.drawMonth+(M==="M"?N:0),H=Math.min(K.selectedDay,this._getDaysInMonth(J,L))+(M==="D"?N:0),I=this._restrictMinMax(K,this._daylightSavingAdjust(new Date(J,L,H)));
K.selectedDay=I.getDate();
K.drawMonth=K.selectedMonth=I.getMonth();
K.drawYear=K.selectedYear=I.getFullYear();
if(M==="M"||M==="Y"){this._notifyChange(K)
}},_restrictMinMax:function(K,I){var J=this._getMinMaxDate(K,"min"),L=this._getMinMaxDate(K,"max"),H=(J&&I<J?J:I);
return(L&&H>L?L:H)
},_notifyChange:function(I){var H=this._get(I,"onChangeMonthYear");
if(H){H.apply((I.input?I.input[0]:null),[I.selectedYear,I.selectedMonth+1,I])
}},_getNumberOfMonths:function(I){var H=this._get(I,"numberOfMonths");
return(H==null?[1,1]:(typeof H==="number"?[1,H]:H))
},_getMinMaxDate:function(I,H){return this._determineDate(I,this._get(I,H+"Date"),null)
},_getDaysInMonth:function(H,I){return 32-this._daylightSavingAdjust(new Date(H,I,32)).getDate()
},_getFirstDayOfMonth:function(H,I){return new Date(H,I,1).getDay()
},_canAdjustMonth:function(K,M,J,L){var H=this._getNumberOfMonths(K),I=this._daylightSavingAdjust(new Date(J,L+(M<0?M:H[0]*H[1]),1));
if(M<0){I.setDate(this._getDaysInMonth(I.getFullYear(),I.getMonth()))
}return this._isInRange(K,I)
},_isInRange:function(L,J){var I,O,K=this._getMinMaxDate(L,"min"),H=this._getMinMaxDate(L,"max"),P=null,M=null,N=this._get(L,"yearRange");
if(N){I=N.split(":");
O=new Date().getFullYear();
P=parseInt(I[0],10);
M=parseInt(I[1],10);
if(I[0].match(/[+\-].*/)){P+=O
}if(I[1].match(/[+\-].*/)){M+=O
}}return((!K||J.getTime()>=K.getTime())&&(!H||J.getTime()<=H.getTime())&&(!P||J.getFullYear()>=P)&&(!M||J.getFullYear()<=M))
},_getFormatConfig:function(H){var I=this._get(H,"shortYearCutoff");
I=(typeof I!=="string"?I:new Date().getFullYear()%100+parseInt(I,10));
return{shortYearCutoff:I,dayNamesShort:this._get(H,"dayNamesShort"),dayNames:this._get(H,"dayNames"),monthNamesShort:this._get(H,"monthNamesShort"),monthNames:this._get(H,"monthNames")}
},_formatDate:function(K,H,L,J){if(!H){K.currentDay=K.selectedDay;
K.currentMonth=K.selectedMonth;
K.currentYear=K.selectedYear
}var I=(H?(typeof H==="object"?H:this._daylightSavingAdjust(new Date(J,L,H))):this._daylightSavingAdjust(new Date(K.currentYear,K.currentMonth,K.currentDay)));
return this.formatDate(this._get(K,"dateFormat"),I,this._getFormatConfig(K))
}});
function D(I){var H="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return I.delegate(H,"mouseout",function(){E(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){E(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){E(this).removeClass("ui-datepicker-next-hover")
}}).delegate(H,"mouseover",function(){if(!E.datepicker._isDisabledDatepicker(C.inline?I.parent()[0]:C.input[0])){E(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
E(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){E(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){E(this).addClass("ui-datepicker-next-hover")
}}})
}function A(J,I){E.extend(J,I);
for(var H in I){if(I[H]==null){J[H]=I[H]
}}return J
}E.fn.datepicker=function(I){if(!this.length){return this
}if(!E.datepicker.initialized){E(document).mousedown(E.datepicker._checkExternalClick);
E.datepicker.initialized=true
}if(E("#"+E.datepicker._mainDivId).length===0){E("body").append(E.datepicker.dpDiv)
}var H=Array.prototype.slice.call(arguments,1);
if(typeof I==="string"&&(I==="isDisabled"||I==="getDate"||I==="widget")){return E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this[0]].concat(H))
}if(I==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this[0]].concat(H))
}return this.each(function(){typeof I==="string"?E.datepicker["_"+I+"Datepicker"].apply(E.datepicker,[this].concat(H)):E.datepicker._attachDatepicker(this,I)
})
};
E.datepicker=new B();
E.datepicker.initialized=false;
E.datepicker.uuid=new Date().getTime();
E.datepicker.version="1.10.3"
})(jQuery);
(function(C,D){var A={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},B={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
C.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(F){var E=C(this).css(F).offset().top;
if(E<0){C(this).css("top",F.top-E)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&C.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&C.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var E=this.options.appendTo;
if(E&&(E.jquery||E.nodeType)){return C(E)
}return this.document.find(E||"body").eq(0)
},_destroy:function(){var F,E=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}F=E.parent.children().eq(E.index);
if(F.length&&F[0]!==this.element[0]){F.before(this.element)
}else{E.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:C.noop,enable:C.noop,close:function(F){var E=this;
if(!this._isOpen||this._trigger("beforeClose",F)===false){return 
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){C(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){E._trigger("close",F)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(G,E){var F=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(F&&!E){this._trigger("focus",G)
}return F
},open:function(){var E=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return 
}this._isOpen=true;
this.opener=C(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){E._focusTabbable();
E._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var E=this.element.find("[autofocus]");
if(!E.length){E=this.element.find(":tabbable")
}if(!E.length){E=this.uiDialogButtonPane.find(":tabbable")
}if(!E.length){E=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!E.length){E=this.uiDialog
}E.eq(0).focus()
},_keepFocus:function(E){function F(){var H=this.document[0].activeElement,G=this.uiDialog[0]===H||C.contains(this.uiDialog[0],H);
if(!G){this._focusTabbable()
}}E.preventDefault();
F.call(this);
this._delay(F)
},_createWrapper:function(){this.uiDialog=C("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(G){if(this.options.closeOnEscape&&!G.isDefaultPrevented()&&G.keyCode&&G.keyCode===C.ui.keyCode.ESCAPE){G.preventDefault();
this.close(G);
return 
}if(G.keyCode!==C.ui.keyCode.TAB){return 
}var F=this.uiDialog.find(":tabbable"),H=F.filter(":first"),E=F.filter(":last");
if((G.target===E[0]||G.target===this.uiDialog[0])&&!G.shiftKey){H.focus(1);
G.preventDefault()
}else{if((G.target===H[0]||G.target===this.uiDialog[0])&&G.shiftKey){E.focus(1);
G.preventDefault()
}}},mousedown:function(E){if(this._moveToTop(E)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var E;
this.uiDialogTitlebar=C("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(F){if(!C(F.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=C("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(F){F.preventDefault();
this.close(F)
}});
E=C("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(E);
this.uiDialog.attr({"aria-labelledby":E.attr("id")})
},_title:function(E){if(!this.options.title){E.html("&#160;")
}E.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=C("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=C("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var F=this,E=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(C.isEmptyObject(E)||(C.isArray(E)&&!E.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return 
}C.each(E,function(G,H){var I,J;
H=C.isFunction(H)?{click:H,text:G}:H;
H=C.extend({type:"button"},H);
I=H.click;
H.click=function(){I.apply(F.element[0],arguments)
};
J={icons:H.icons,text:H.showText};
delete H.icons;
delete H.showText;
C("<button></button>",H).button(J).appendTo(F.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var G=this,F=this.options;
function E(H){return{position:H.position,offset:H.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(H,I){C(this).addClass("ui-dialog-dragging");
G._blockFrames();
G._trigger("dragStart",H,E(I))
},drag:function(H,I){G._trigger("drag",H,E(I))
},stop:function(H,I){F.position=[I.position.left-G.document.scrollLeft(),I.position.top-G.document.scrollTop()];
C(this).removeClass("ui-dialog-dragging");
G._unblockFrames();
G._trigger("dragStop",H,E(I))
}})
},_makeResizable:function(){var J=this,H=this.options,I=H.resizable,E=this.uiDialog.css("position"),G=typeof I==="string"?I:"n,e,s,w,se,sw,ne,nw";
function F(K){return{originalPosition:K.originalPosition,originalSize:K.originalSize,position:K.position,size:K.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:H.maxWidth,maxHeight:H.maxHeight,minWidth:H.minWidth,minHeight:this._minHeight(),handles:G,start:function(K,L){C(this).addClass("ui-dialog-resizing");
J._blockFrames();
J._trigger("resizeStart",K,F(L))
},resize:function(K,L){J._trigger("resize",K,F(L))
},stop:function(K,L){H.height=C(this).height();
H.width=C(this).width();
C(this).removeClass("ui-dialog-resizing");
J._unblockFrames();
J._trigger("resizeStop",K,F(L))
}}).css("position",E)
},_minHeight:function(){var E=this.options;
return E.height==="auto"?E.minHeight:Math.min(E.minHeight,E.height)
},_position:function(){var E=this.uiDialog.is(":visible");
if(!E){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!E){this.uiDialog.hide()
}},_setOptions:function(G){var H=this,F=false,E={};
C.each(G,function(I,J){H._setOption(I,J);
if(I in A){F=true
}if(I in B){E[I]=J
}});
if(F){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",E)
}},_setOption:function(G,H){var F,I,E=this.uiDialog;
if(G==="dialogClass"){E.removeClass(this.options.dialogClass).addClass(H)
}if(G==="disabled"){return 
}this._super(G,H);
if(G==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(G==="buttons"){this._createButtons()
}if(G==="closeText"){this.uiDialogTitlebarClose.button({label:""+H})
}if(G==="draggable"){F=E.is(":data(ui-draggable)");
if(F&&!H){E.draggable("destroy")
}if(!F&&H){this._makeDraggable()
}}if(G==="position"){this._position()
}if(G==="resizable"){I=E.is(":data(ui-resizable)");
if(I&&!H){E.resizable("destroy")
}if(I&&typeof H==="string"){E.resizable("option","handles",H)
}if(!I&&H!==false){this._makeResizable()
}}if(G==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var E,G,H,F=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(F.minWidth>F.width){F.width=F.minWidth
}E=this.uiDialog.css({height:"auto",width:F.width}).outerHeight();
G=Math.max(0,F.minHeight-E);
H=typeof F.maxHeight==="number"?Math.max(0,F.maxHeight-E):"none";
if(F.height==="auto"){this.element.css({minHeight:G,maxHeight:H,height:"auto"})
}else{this.element.height(Math.max(0,F.height-E))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var E=C(this);
return C("<div>").css({position:"absolute",width:E.outerWidth(),height:E.outerHeight()}).appendTo(E.parent()).offset(E.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(E){if(C(E.target).closest(".ui-dialog").length){return true
}return !!C(E.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return 
}var F=this,E=this.widgetFullName;
if(!C.ui.dialog.overlayInstances){this._delay(function(){if(C.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(G){if(!F._allowInteraction(G)){G.preventDefault();
C(".ui-dialog:visible:last .ui-dialog-content").data(E)._focusTabbable()
}})
}})
}this.overlay=C("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
C.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return 
}if(this.overlay){C.ui.dialog.overlayInstances--;
if(!C.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
C.ui.dialog.overlayInstances=0;
if(C.uiBackCompat!==false){C.widget("ui.dialog",C.ui.dialog,{_position:function(){var F=this.options.position,G=[],H=[0,0],E;
if(F){if(typeof F==="string"||(typeof F==="object"&&"0" in F)){G=F.split?F.split(" "):[F[0],F[1]];
if(G.length===1){G[1]=G[0]
}C.each(["left","top"],function(J,I){if(+G[J]===G[J]){H[J]=G[J];
G[J]=I
}});
F={my:G[0]+(H[0]<0?H[0]:"+"+H[0])+" "+G[1]+(H[1]<0?H[1]:"+"+H[1]),at:G.join(" ")}
}F=C.extend({},C.ui.dialog.prototype.options.position,F)
}else{F=C.ui.dialog.prototype.options.position
}E=this.uiDialog.is(":visible");
if(!E){this.uiDialog.show()
}this.uiDialog.position(F);
if(!E){this.uiDialog.hide()
}}})
}}(jQuery));
(function(B,D){var A=/up|down|vertical/,C=/up|left|vertical|horizontal/;
B.effects.effect.blind=function(G,M){var H=B(this),P=["position","top","bottom","left","right","height","width"],N=B.effects.setMode(H,G.mode||"hide"),Q=G.direction||"up",J=A.test(Q),I=J?"height":"width",O=J?"top":"left",S=C.test(Q),L={},R=N==="show",F,E,K;
if(H.parent().is(".ui-effects-wrapper")){B.effects.save(H.parent(),P)
}else{B.effects.save(H,P)
}H.show();
F=B.effects.createWrapper(H).css({overflow:"hidden"});
E=F[I]();
K=parseFloat(F.css(O))||0;
L[I]=R?E:0;
if(!S){H.css(J?"bottom":"right",0).css(J?"top":"left","auto").css({position:"absolute"});
L[O]=R?K:E+K
}if(R){F.css(I,0);
if(!S){F.css(O,K+E)
}}F.animate(L,{duration:G.duration,easing:G.easing,queue:false,complete:function(){if(N==="hide"){H.hide()
}B.effects.restore(H,P);
B.effects.removeWrapper(H);
M()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.bounce=function(L,K){var C=A(this),D=["position","top","bottom","left","right","height","width"],J=A.effects.setMode(C,L.mode||"effect"),I=J==="hide",T=J==="show",U=L.direction||"up",E=L.distance,H=L.times||5,V=H*2+(T||I?1:0),S=L.duration/V,N=L.easing,F=(U==="up"||U==="down")?"top":"left",M=(U==="up"||U==="left"),R,G,Q,O=C.queue(),P=O.length;
if(T||I){D.push("opacity")
}A.effects.save(C,D);
C.show();
A.effects.createWrapper(C);
if(!E){E=C[F==="top"?"outerHeight":"outerWidth"]()/3
}if(T){Q={opacity:1};
Q[F]=0;
C.css("opacity",0).css(F,M?-E*2:E*2).animate(Q,S,N)
}if(I){E=E/Math.pow(2,H-1)
}Q={};
Q[F]=0;
for(R=0;
R<H;
R++){G={};
G[F]=(M?"-=":"+=")+E;
C.animate(G,S,N).animate(Q,S,N);
E=I?E*2:E/2
}if(I){G={opacity:0};
G[F]=(M?"-=":"+=")+E;
C.animate(G,S,N)
}C.queue(function(){if(I){C.hide()
}A.effects.restore(C,D);
A.effects.removeWrapper(C);
K()
});
if(P>1){O.splice.apply(O,[1,0].concat(O.splice(P,V+1)))
}C.dequeue()
}
})(jQuery);
(function(A,B){A.effects.effect.clip=function(F,I){var G=A(this),M=["position","top","bottom","left","right","height","width"],L=A.effects.setMode(G,F.mode||"hide"),O=L==="show",N=F.direction||"vertical",K=N==="vertical",P=K?"height":"width",J=K?"top":"left",H={},D,E,C;
A.effects.save(G,M);
G.show();
D=A.effects.createWrapper(G).css({overflow:"hidden"});
E=(G[0].tagName==="IMG")?D:G;
C=E[P]();
if(O){E.css(P,0);
E.css(J,C/2)
}H[P]=O?C:0;
H[J]=O?0:C/2;
E.animate(H,{queue:false,duration:F.duration,easing:F.easing,complete:function(){if(!O){G.hide()
}A.effects.restore(G,M);
A.effects.removeWrapper(G);
I()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.drop=function(D,H){var E=A(this),J=["position","top","bottom","left","right","opacity","height","width"],I=A.effects.setMode(E,D.mode||"hide"),L=I==="show",K=D.direction||"left",F=(K==="up"||K==="down")?"top":"left",M=(K==="up"||K==="left")?"pos":"neg",G={opacity:L?1:0},C;
A.effects.save(E,J);
E.show();
A.effects.createWrapper(E);
C=D.distance||E[F==="top"?"outerHeight":"outerWidth"](true)/2;
if(L){E.css("opacity",0).css(F,M==="pos"?-C:C)
}G[F]=(L?(M==="pos"?"+=":"-="):(M==="pos"?"-=":"+="))+C;
E.animate(G,{queue:false,duration:D.duration,easing:D.easing,complete:function(){if(I==="hide"){E.hide()
}A.effects.restore(E,J);
A.effects.removeWrapper(E);
H()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.explode=function(P,O){var I=P.pieces?Math.round(Math.sqrt(P.pieces)):3,D=I,C=A(this),K=A.effects.setMode(C,P.mode||"hide"),T=K==="show",G=C.show().css("visibility","hidden").offset(),Q=Math.ceil(C.outerWidth()/D),N=Math.ceil(C.outerHeight()/I),H=[],S,R,E,M,L,J;
function U(){H.push(this);
if(H.length===I*D){F()
}}for(S=0;
S<I;
S++){M=G.top+S*N;
J=S-(I-1)/2;
for(R=0;
R<D;
R++){E=G.left+R*Q;
L=R-(D-1)/2;
C.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-R*Q,top:-S*N}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:Q,height:N,left:E+(T?L*Q:0),top:M+(T?J*N:0),opacity:T?0:1}).animate({left:E+(T?0:L*Q),top:M+(T?0:J*N),opacity:T?1:0},P.duration||500,P.easing,U)
}}function F(){C.css({visibility:"visible"});
A(H).remove();
if(!T){C.hide()
}O()
}}
})(jQuery);
(function(A,B){A.effects.effect.fade=function(F,C){var D=A(this),E=A.effects.setMode(D,F.mode||"toggle");
D.animate({opacity:E},{queue:false,duration:F.duration,easing:F.easing,complete:C})
}
})(jQuery);
(function(A,B){A.effects.effect.fold=function(E,I){var F=A(this),N=["position","top","bottom","left","right","height","width"],K=A.effects.setMode(F,E.mode||"hide"),Q=K==="show",L=K==="hide",S=E.size||15,M=/([0-9]+)%/.exec(S),R=!!E.horizFirst,J=Q!==R,G=J?["width","height"]:["height","width"],H=E.duration/2,D,C,P={},O={};
A.effects.save(F,N);
F.show();
D=A.effects.createWrapper(F).css({overflow:"hidden"});
C=J?[D.width(),D.height()]:[D.height(),D.width()];
if(M){S=parseInt(M[1],10)/100*C[L?0:1]
}if(Q){D.css(R?{height:0,width:S}:{height:S,width:0})
}P[G[0]]=Q?C[0]:S;
O[G[1]]=Q?C[1]:0;
D.animate(P,H,E.easing).animate(O,H,E.easing,function(){if(L){F.hide()
}A.effects.restore(F,N);
A.effects.removeWrapper(F);
I()
})
}
})(jQuery);
(function(A,B){A.effects.effect.highlight=function(H,C){var E=A(this),D=["backgroundImage","backgroundColor","opacity"],G=A.effects.setMode(E,H.mode||"show"),F={backgroundColor:E.css("backgroundColor")};
if(G==="hide"){F.opacity=0
}A.effects.save(E,D);
E.show().css({backgroundImage:"none",backgroundColor:H.color||"#ffff99"}).animate(F,{queue:false,duration:H.duration,easing:H.easing,complete:function(){if(G==="hide"){E.hide()
}A.effects.restore(E,D);
C()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.pulsate=function(C,G){var E=A(this),J=A.effects.setMode(E,C.mode||"show"),N=J==="show",K=J==="hide",O=(N||J==="hide"),L=((C.times||5)*2)+(O?1:0),F=C.duration/L,M=0,I=E.queue(),D=I.length,H;
if(N||!E.is(":visible")){E.css("opacity",0).show();
M=1
}for(H=1;
H<L;
H++){E.animate({opacity:M},F,C.easing);
M=1-M
}E.animate({opacity:M},F,C.easing);
E.queue(function(){if(K){E.hide()
}G()
});
if(D>1){I.splice.apply(I,[1,0].concat(I.splice(D,L+1)))
}E.dequeue()
}
})(jQuery);
(function(A,B){A.effects.effect.puff=function(J,C){var H=A(this),I=A.effects.setMode(H,J.mode||"hide"),F=I==="hide",G=parseInt(J.percent,10)||150,E=G/100,D={height:H.height(),width:H.width(),outerHeight:H.outerHeight(),outerWidth:H.outerWidth()};
A.extend(J,{effect:"scale",queue:false,fade:true,mode:I,complete:C,percent:F?G:100,from:F?D:{height:D.height*E,width:D.width*E,outerHeight:D.outerHeight*E,outerWidth:D.outerWidth*E}});
H.effect(J)
};
A.effects.effect.scale=function(C,F){var D=A(this),L=A.extend(true,{},C),G=A.effects.setMode(D,C.mode||"effect"),H=parseInt(C.percent,10)||(parseInt(C.percent,10)===0?0:(G==="hide"?0:100)),J=C.direction||"both",K=C.origin,E={height:D.height(),width:D.width(),outerHeight:D.outerHeight(),outerWidth:D.outerWidth()},I={y:J!=="horizontal"?(H/100):1,x:J!=="vertical"?(H/100):1};
L.effect="size";
L.queue=false;
L.complete=F;
if(G!=="effect"){L.origin=K||["middle","center"];
L.restore=true
}L.from=C.from||(G==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:E);
L.to={height:E.height*I.y,width:E.width*I.x,outerHeight:E.outerHeight*I.y,outerWidth:E.outerWidth*I.x};
if(L.fade){if(G==="show"){L.from.opacity=0;
L.to.opacity=1
}if(G==="hide"){L.from.opacity=1;
L.to.opacity=0
}}D.effect(L)
};
A.effects.effect.size=function(L,K){var P,I,J,C=A(this),O=["position","top","bottom","left","right","width","height","overflow","opacity"],N=["position","top","bottom","left","right","overflow","opacity"],M=["width","height","overflow"],G=["fontSize"],R=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],D=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],H=A.effects.setMode(C,L.mode||"effect"),Q=L.restore||H!=="effect",U=L.scale||"both",S=L.origin||["middle","center"],T=C.css("position"),E=Q?O:N,F={height:0,width:0,outerHeight:0,outerWidth:0};
if(H==="show"){C.show()
}P={height:C.height(),width:C.width(),outerHeight:C.outerHeight(),outerWidth:C.outerWidth()};
if(L.mode==="toggle"&&H==="show"){C.from=L.to||F;
C.to=L.from||P
}else{C.from=L.from||(H==="show"?F:P);
C.to=L.to||(H==="hide"?F:P)
}J={from:{y:C.from.height/P.height,x:C.from.width/P.width},to:{y:C.to.height/P.height,x:C.to.width/P.width}};
if(U==="box"||U==="both"){if(J.from.y!==J.to.y){E=E.concat(R);
C.from=A.effects.setTransition(C,R,J.from.y,C.from);
C.to=A.effects.setTransition(C,R,J.to.y,C.to)
}if(J.from.x!==J.to.x){E=E.concat(D);
C.from=A.effects.setTransition(C,D,J.from.x,C.from);
C.to=A.effects.setTransition(C,D,J.to.x,C.to)
}}if(U==="content"||U==="both"){if(J.from.y!==J.to.y){E=E.concat(G).concat(M);
C.from=A.effects.setTransition(C,G,J.from.y,C.from);
C.to=A.effects.setTransition(C,G,J.to.y,C.to)
}}A.effects.save(C,E);
C.show();
A.effects.createWrapper(C);
C.css("overflow","hidden").css(C.from);
if(S){I=A.effects.getBaseline(S,P);
C.from.top=(P.outerHeight-C.outerHeight())*I.y;
C.from.left=(P.outerWidth-C.outerWidth())*I.x;
C.to.top=(P.outerHeight-C.to.outerHeight)*I.y;
C.to.left=(P.outerWidth-C.to.outerWidth)*I.x
}C.css(C.from);
if(U==="content"||U==="both"){R=R.concat(["marginTop","marginBottom"]).concat(G);
D=D.concat(["marginLeft","marginRight"]);
M=O.concat(R).concat(D);
C.find("*[width]").each(function(){var W=A(this),V={height:W.height(),width:W.width(),outerHeight:W.outerHeight(),outerWidth:W.outerWidth()};
if(Q){A.effects.save(W,M)
}W.from={height:V.height*J.from.y,width:V.width*J.from.x,outerHeight:V.outerHeight*J.from.y,outerWidth:V.outerWidth*J.from.x};
W.to={height:V.height*J.to.y,width:V.width*J.to.x,outerHeight:V.height*J.to.y,outerWidth:V.width*J.to.x};
if(J.from.y!==J.to.y){W.from=A.effects.setTransition(W,R,J.from.y,W.from);
W.to=A.effects.setTransition(W,R,J.to.y,W.to)
}if(J.from.x!==J.to.x){W.from=A.effects.setTransition(W,D,J.from.x,W.from);
W.to=A.effects.setTransition(W,D,J.to.x,W.to)
}W.css(W.from);
W.animate(W.to,L.duration,L.easing,function(){if(Q){A.effects.restore(W,M)
}})
})
}C.animate(C.to,{queue:false,duration:L.duration,easing:L.easing,complete:function(){if(C.to.opacity===0){C.css("opacity",C.from.opacity)
}if(H==="hide"){C.hide()
}A.effects.restore(C,E);
if(!Q){if(T==="static"){C.css({position:"relative",top:C.to.top,left:C.to.left})
}else{A.each(["top","left"],function(V,W){C.css(W,function(Y,a){var Z=parseInt(a,10),X=V?C.to.left:C.to.top;
if(a==="auto"){return X+"px"
}return Z+X+"px"
})
})
}}A.effects.removeWrapper(C);
K()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.shake=function(K,J){var C=A(this),D=["position","top","bottom","left","right","height","width"],I=A.effects.setMode(C,K.mode||"effect"),S=K.direction||"left",E=K.distance||20,H=K.times||3,T=H*2+1,O=Math.round(K.duration/T),G=(S==="up"||S==="down")?"top":"left",F=(S==="up"||S==="left"),R={},Q={},P={},N,L=C.queue(),M=L.length;
A.effects.save(C,D);
C.show();
A.effects.createWrapper(C);
R[G]=(F?"-=":"+=")+E;
Q[G]=(F?"+=":"-=")+E*2;
P[G]=(F?"-=":"+=")+E*2;
C.animate(R,O,K.easing);
for(N=1;
N<H;
N++){C.animate(Q,O,K.easing).animate(P,O,K.easing)
}C.animate(Q,O,K.easing).animate(R,O/2,K.easing).queue(function(){if(I==="hide"){C.hide()
}A.effects.restore(C,D);
A.effects.removeWrapper(C);
J()
});
if(M>1){L.splice.apply(L,[1,0].concat(L.splice(M,T+1)))
}C.dequeue()
}
})(jQuery);
(function(A,B){A.effects.effect.slide=function(E,I){var F=A(this),K=["position","top","bottom","left","right","width","height"],J=A.effects.setMode(F,E.mode||"show"),M=J==="show",L=E.direction||"left",G=(L==="up"||L==="down")?"top":"left",D=(L==="up"||L==="left"),C,H={};
A.effects.save(F,K);
F.show();
C=E.distance||F[G==="top"?"outerHeight":"outerWidth"](true);
A.effects.createWrapper(F).css({overflow:"hidden"});
if(M){F.css(G,D?(isNaN(C)?"-"+C:-C):C)
}H[G]=(M?(D?"+=":"-="):(D?"-=":"+="))+C;
F.animate(H,{queue:false,duration:E.duration,easing:E.easing,complete:function(){if(J==="hide"){F.hide()
}A.effects.restore(F,K);
A.effects.removeWrapper(F);
I()
}})
}
})(jQuery);
(function(A,B){A.effects.effect.transfer=function(D,H){var F=A(this),K=A(D.to),N=K.css("position")==="fixed",J=A("body"),L=N?J.scrollTop():0,M=N?J.scrollLeft():0,C=K.offset(),G={top:C.top-L,left:C.left-M,height:K.innerHeight(),width:K.innerWidth()},I=F.offset(),E=A("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(D.className).css({top:I.top-L,left:I.left-M,height:F.innerHeight(),width:F.innerWidth(),position:N?"fixed":"absolute"}).animate(G,D.duration,D.easing,function(){E.remove();
H()
})
}
})(jQuery);
(function(A,B){A.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,A.proxy(function(C){if(this.options.disabled){C.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(C){C.preventDefault()
},"click .ui-state-disabled > a":function(C){C.preventDefault()
},"click .ui-menu-item:has(a)":function(C){var D=A(C.target).closest(".ui-menu-item");
if(!this.mouseHandled&&D.not(".ui-state-disabled").length){this.mouseHandled=true;
this.select(C);
if(D.has(".ui-menu").length){this.expand(C)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(C){var D=A(C.currentTarget);
D.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(C,D)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(E,C){var D=this.active||this.element.children(".ui-menu-item").eq(0);
if(!C){this.focus(E,D)
}},blur:function(C){this._delay(function(){if(!A.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(C)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(C){if(!A(C.target).closest(".ui-menu").length){this.collapseAll(C)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var C=A(this);
if(C.data("ui-menu-submenu-carat")){C.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(I){var D,H,J,G,F,C=true;
function E(K){return K.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(I.keyCode){case A.ui.keyCode.PAGE_UP:this.previousPage(I);
break;
case A.ui.keyCode.PAGE_DOWN:this.nextPage(I);
break;
case A.ui.keyCode.HOME:this._move("first","first",I);
break;
case A.ui.keyCode.END:this._move("last","last",I);
break;
case A.ui.keyCode.UP:this.previous(I);
break;
case A.ui.keyCode.DOWN:this.next(I);
break;
case A.ui.keyCode.LEFT:this.collapse(I);
break;
case A.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(I)
}break;
case A.ui.keyCode.ENTER:case A.ui.keyCode.SPACE:this._activate(I);
break;
case A.ui.keyCode.ESCAPE:this.collapse(I);
break;
default:C=false;
H=this.previousFilter||"";
J=String.fromCharCode(I.keyCode);
G=false;
clearTimeout(this.filterTimer);
if(J===H){G=true
}else{J=H+J
}F=new RegExp("^"+E(J),"i");
D=this.activeMenu.children(".ui-menu-item").filter(function(){return F.test(A(this).children("a").text())
});
D=G&&D.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):D;
if(!D.length){J=String.fromCharCode(I.keyCode);
F=new RegExp("^"+E(J),"i");
D=this.activeMenu.children(".ui-menu-item").filter(function(){return F.test(A(this).children("a").text())
})
}if(D.length){this.focus(I,D);
if(D.length>1){this.previousFilter=J;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(C){I.preventDefault()
}},_activate:function(C){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(C)
}else{this.select(C)
}}},refresh:function(){var E,D=this.options.icons.submenu,C=this.element.find(this.options.menus);
C.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var H=A(this),G=H.prev("a"),F=A("<span>").addClass("ui-menu-icon ui-icon "+D).data("ui-menu-submenu-carat",true);
G.attr("aria-haspopup","true").prepend(F);
H.attr("aria-labelledby",G.attr("id"))
});
E=C.add(this.element);
E.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
E.children(":not(.ui-menu-item)").each(function(){var F=A(this);
if(!/[^\-\u2014\u2013\s]/.test(F.text())){F.addClass("ui-widget-content ui-menu-divider")
}});
E.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!A.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(C,D){if(C==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(D.submenu)
}this._super(C,D)
},focus:function(D,C){var F,E;
this.blur(D,D&&D.type==="focus");
this._scrollIntoView(C);
this.active=C.first();
E=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",E.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(D&&D.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}F=C.children(".ui-menu");
if(F.length&&(/^mouse/.test(D.type))){this._startOpening(F)
}this.activeMenu=C.parent();
this._trigger("focus",D,{item:C})
},_scrollIntoView:function(F){var I,E,G,C,D,H;
if(this._hasScroll()){I=parseFloat(A.css(this.activeMenu[0],"borderTopWidth"))||0;
E=parseFloat(A.css(this.activeMenu[0],"paddingTop"))||0;
G=F.offset().top-this.activeMenu.offset().top-I-E;
C=this.activeMenu.scrollTop();
D=this.activeMenu.height();
H=F.height();
if(G<0){this.activeMenu.scrollTop(C+G)
}else{if(G+H>D){this.activeMenu.scrollTop(C+G-D+H)
}}}},blur:function(D,C){if(!C){clearTimeout(this.timer)
}if(!this.active){return 
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",D,{item:this.active})
},_startOpening:function(C){clearTimeout(this.timer);
if(C.attr("aria-hidden")!=="true"){return 
}this.timer=this._delay(function(){this._close();
this._open(C)
},this.delay)
},_open:function(D){var C=A.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(D.parents(".ui-menu")).hide().attr("aria-hidden","true");
D.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(C)
},collapseAll:function(D,C){clearTimeout(this.timer);
this.timer=this._delay(function(){var E=C?this.element:A(D&&D.target).closest(this.element.find(".ui-menu"));
if(!E.length){E=this.element
}this._close(E);
this.blur(D);
this.activeMenu=E
},this.delay)
},_close:function(C){if(!C){C=this.active?this.active.parent():this.element
}C.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(D){var C=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(C&&C.length){this._close();
this.focus(D,C)
}},expand:function(D){var C=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(C&&C.length){this._open(C.parent());
this._delay(function(){this.focus(D,C)
})
}},next:function(C){this._move("next","first",C)
},previous:function(C){this._move("prev","last",C)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(F,D,E){var C;
if(this.active){if(F==="first"||F==="last"){C=this.active[F==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{C=this.active[F+"All"](".ui-menu-item").eq(0)
}}if(!C||!C.length||!this.active){C=this.activeMenu.children(".ui-menu-item")[D]()
}this.focus(E,C)
},nextPage:function(E){var D,F,C;
if(!this.active){this.next(E);
return 
}if(this.isLastItem()){return 
}if(this._hasScroll()){F=this.active.offset().top;
C=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){D=A(this);
return D.offset().top-F-C<0
});
this.focus(E,D)
}else{this.focus(E,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(E){var D,F,C;
if(!this.active){this.next(E);
return 
}if(this.isFirstItem()){return 
}if(this._hasScroll()){F=this.active.offset().top;
C=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){D=A(this);
return D.offset().top-F+C>0
});
this.focus(E,D)
}else{this.focus(E,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(C){this.active=this.active||A(C.target).closest(".ui-menu-item");
var D={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(C,true)
}this._trigger("select",C,D)
}})
}(jQuery));
(function(E,C){E.ui=E.ui||{};
var J,K=Math.max,O=Math.abs,M=Math.round,D=/left|center|right/,H=/top|center|bottom/,A=/[\+\-]\d+(\.[\d]+)?%?/,L=/^\w+/,B=/%$/,G=E.fn.position;
function N(R,Q,P){return[parseFloat(R[0])*(B.test(R[0])?Q/100:1),parseFloat(R[1])*(B.test(R[1])?P/100:1)]
}function I(P,Q){return parseInt(E.css(P,Q),10)||0
}function F(Q){var P=Q[0];
if(P.nodeType===9){return{width:Q.width(),height:Q.height(),offset:{top:0,left:0}}
}if(E.isWindow(P)){return{width:Q.width(),height:Q.height(),offset:{top:Q.scrollTop(),left:Q.scrollLeft()}}
}if(P.preventDefault){return{width:0,height:0,offset:{top:P.pageY,left:P.pageX}}
}return{width:Q.outerWidth(),height:Q.outerHeight(),offset:Q.offset()}
}E.position={scrollbarWidth:function(){if(J!==C){return J
}var Q,P,S=E("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),R=S.children()[0];
E("body").append(S);
Q=R.offsetWidth;
S.css("overflow","scroll");
P=R.offsetWidth;
if(Q===P){P=S[0].clientWidth
}S.remove();
return(J=Q-P)
},getScrollInfo:function(T){var S=T.isWindow?"":T.element.css("overflow-x"),R=T.isWindow?"":T.element.css("overflow-y"),Q=S==="scroll"||(S==="auto"&&T.width<T.element[0].scrollWidth),P=R==="scroll"||(R==="auto"&&T.height<T.element[0].scrollHeight);
return{width:P?E.position.scrollbarWidth():0,height:Q?E.position.scrollbarWidth():0}
},getWithinInfo:function(Q){var R=E(Q||window),P=E.isWindow(R[0]);
return{element:R,isWindow:P,offset:R.offset()||{left:0,top:0},scrollLeft:R.scrollLeft(),scrollTop:R.scrollTop(),width:P?R.width():R.outerWidth(),height:P?R.height():R.outerHeight()}
}};
E.fn.position=function(Z){if(!Z||!Z.of){return G.apply(this,arguments)
}Z=E.extend({},Z);
var a,W,U,Y,T,P,V=E(Z.of),S=E.position.getWithinInfo(Z.within),Q=E.position.getScrollInfo(S),X=(Z.collision||"flip").split(" "),R={};
P=F(V);
if(V[0].preventDefault){Z.at="left top"
}W=P.width;
U=P.height;
Y=P.offset;
T=E.extend({},Y);
E.each(["my","at"],function(){var d=(Z[this]||"").split(" "),c,b;
if(d.length===1){d=D.test(d[0])?d.concat(["center"]):H.test(d[0])?["center"].concat(d):["center","center"]
}d[0]=D.test(d[0])?d[0]:"center";
d[1]=H.test(d[1])?d[1]:"center";
c=A.exec(d[0]);
b=A.exec(d[1]);
R[this]=[c?c[0]:0,b?b[0]:0];
Z[this]=[L.exec(d[0])[0],L.exec(d[1])[0]]
});
if(X.length===1){X[1]=X[0]
}if(Z.at[0]==="right"){T.left+=W
}else{if(Z.at[0]==="center"){T.left+=W/2
}}if(Z.at[1]==="bottom"){T.top+=U
}else{if(Z.at[1]==="center"){T.top+=U/2
}}a=N(R.at,W,U);
T.left+=a[0];
T.top+=a[1];
return this.each(function(){var c,l,e=E(this),g=e.outerWidth(),d=e.outerHeight(),f=I(this,"marginLeft"),b=I(this,"marginTop"),k=g+f+I(this,"marginRight")+Q.width,j=d+b+I(this,"marginBottom")+Q.height,h=E.extend({},T),i=N(R.my,e.outerWidth(),e.outerHeight());
if(Z.my[0]==="right"){h.left-=g
}else{if(Z.my[0]==="center"){h.left-=g/2
}}if(Z.my[1]==="bottom"){h.top-=d
}else{if(Z.my[1]==="center"){h.top-=d/2
}}h.left+=i[0];
h.top+=i[1];
if(!E.support.offsetFractions){h.left=M(h.left);
h.top=M(h.top)
}c={marginLeft:f,marginTop:b};
E.each(["left","top"],function(n,m){if(E.ui.position[X[n]]){E.ui.position[X[n]][m](h,{targetWidth:W,targetHeight:U,elemWidth:g,elemHeight:d,collisionPosition:c,collisionWidth:k,collisionHeight:j,offset:[a[0]+i[0],a[1]+i[1]],my:Z.my,at:Z.at,within:S,elem:e})
}});
if(Z.using){l=function(p){var r=Y.left-h.left,o=r+W-g,q=Y.top-h.top,n=q+U-d,m={target:{element:V,left:Y.left,top:Y.top,width:W,height:U},element:{element:e,left:h.left,top:h.top,width:g,height:d},horizontal:o<0?"left":r>0?"right":"center",vertical:n<0?"top":q>0?"bottom":"middle"};
if(W<g&&O(r+o)<W){m.horizontal="center"
}if(U<d&&O(q+n)<U){m.vertical="middle"
}if(K(O(r),O(o))>K(O(q),O(n))){m.important="horizontal"
}else{m.important="vertical"
}Z.using.call(this,p,m)
}
}e.offset(E.extend(h,{using:l}))
})
};
E.ui.position={fit:{left:function(T,S){var R=S.within,V=R.isWindow?R.scrollLeft:R.offset.left,X=R.width,U=T.left-S.collisionPosition.marginLeft,W=V-U,Q=U+S.collisionWidth-X-V,P;
if(S.collisionWidth>X){if(W>0&&Q<=0){P=T.left+W+S.collisionWidth-X-V;
T.left+=W-P
}else{if(Q>0&&W<=0){T.left=V
}else{if(W>Q){T.left=V+X-S.collisionWidth
}else{T.left=V
}}}}else{if(W>0){T.left+=W
}else{if(Q>0){T.left-=Q
}else{T.left=K(T.left-U,T.left)
}}}},top:function(S,R){var Q=R.within,W=Q.isWindow?Q.scrollTop:Q.offset.top,X=R.within.height,U=S.top-R.collisionPosition.marginTop,V=W-U,T=U+R.collisionHeight-X-W,P;
if(R.collisionHeight>X){if(V>0&&T<=0){P=S.top+V+R.collisionHeight-X-W;
S.top+=V-P
}else{if(T>0&&V<=0){S.top=W
}else{if(V>T){S.top=W+X-R.collisionHeight
}else{S.top=W
}}}}else{if(V>0){S.top+=V
}else{if(T>0){S.top-=T
}else{S.top=K(S.top-U,S.top)
}}}}},flip:{left:function(V,U){var T=U.within,Z=T.offset.left+T.scrollLeft,c=T.width,R=T.isWindow?T.scrollLeft:T.offset.left,W=V.left-U.collisionPosition.marginLeft,a=W-R,Q=W+U.collisionWidth-c-R,Y=U.my[0]==="left"?-U.elemWidth:U.my[0]==="right"?U.elemWidth:0,b=U.at[0]==="left"?U.targetWidth:U.at[0]==="right"?-U.targetWidth:0,S=-2*U.offset[0],P,X;
if(a<0){P=V.left+Y+b+S+U.collisionWidth-c-Z;
if(P<0||P<O(a)){V.left+=Y+b+S
}}else{if(Q>0){X=V.left-U.collisionPosition.marginLeft+Y+b+S-R;
if(X>0||O(X)<Q){V.left+=Y+b+S
}}}},top:function(U,T){var S=T.within,b=S.offset.top+S.scrollTop,c=S.height,P=S.isWindow?S.scrollTop:S.offset.top,W=U.top-T.collisionPosition.marginTop,Y=W-P,V=W+T.collisionHeight-c-P,Z=T.my[1]==="top",X=Z?-T.elemHeight:T.my[1]==="bottom"?T.elemHeight:0,d=T.at[1]==="top"?T.targetHeight:T.at[1]==="bottom"?-T.targetHeight:0,R=-2*T.offset[1],a,Q;
if(Y<0){Q=U.top+X+d+R+T.collisionHeight-c-b;
if((U.top+X+d+R)>Y&&(Q<0||Q<O(Y))){U.top+=X+d+R
}}else{if(V>0){a=U.top-T.collisionPosition.marginTop+X+d+R-P;
if((U.top+X+d+R)>V&&(a>0||O(a)<V)){U.top+=X+d+R
}}}}},flipfit:{left:function(){E.ui.position.flip.left.apply(this,arguments);
E.ui.position.fit.left.apply(this,arguments)
},top:function(){E.ui.position.flip.top.apply(this,arguments);
E.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var T,V,Q,S,R,P=document.getElementsByTagName("body")[0],U=document.createElement("div");
T=document.createElement(P?"div":"body");
Q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(P){E.extend(Q,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(R in Q){T.style[R]=Q[R]
}T.appendChild(U);
V=P||document.documentElement;
V.insertBefore(T,V.firstChild);
U.style.cssText="position: absolute; left: 10.7432222px;";
S=E(U).offset().left;
E.support.offsetFractions=S>10&&S<11;
T.innerHTML="";
V.removeChild(T)
})()
}(jQuery));
(function(A,B){A.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(C){if(C===B){return this.options.value
}this.options.value=this._constrainedValue(C);
this._refreshValue()
},_constrainedValue:function(C){if(C===B){C=this.options.value
}this.indeterminate=C===false;
if(typeof C!=="number"){C=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,C))
},_setOptions:function(C){var D=C.value;
delete C.value;
this._super(C);
this.options.value=this._constrainedValue(D);
this._refreshValue()
},_setOption:function(C,D){if(C==="max"){D=Math.max(this.min,D)
}this._super(C,D)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var D=this.options.value,C=this._percentage();
this.valueDiv.toggle(this.indeterminate||D>this.min).toggleClass("ui-corner-right",D===this.options.max).width(C.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=A("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":D});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==D){this.oldValue=D;
this._trigger("change")
}if(D===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(B,C){var A=5;
B.widget("ui.slider",B.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var G,D,E=this.options,I=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),H="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",F=[];
D=(E.values&&E.values.length)||1;
if(I.length>D){I.slice(D).remove();
I=I.slice(0,D)
}for(G=I.length;
G<D;
G++){F.push(H)
}this.handles=I.add(B(F.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(J){B(this).data("ui-slider-handle-index",J)
})
},_createRange:function(){var D=this.options,E="";
if(D.range){if(D.range===true){if(!D.values){D.values=[this._valueMin(),this._valueMin()]
}else{if(D.values.length&&D.values.length!==2){D.values=[D.values[0],D.values[0]]
}else{if(B.isArray(D.values)){D.values=D.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=B("<div></div>").appendTo(this.element);
E="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(E+((D.range==="min"||D.range==="max")?" ui-slider-range-"+D.range:""))
}else{this.range=B([])
}},_setupEvents:function(){var D=this.handles.add(this.range).filter("a");
this._off(D);
this._on(D,this._handleEvents);
this._hoverable(D);
this._focusable(D)
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(F){var J,M,E,H,L,N,I,D,K=this,G=this.options;
if(G.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
J={x:F.pageX,y:F.pageY};
M=this._normValueFromMouse(J);
E=this._valueMax()-this._valueMin()+1;
this.handles.each(function(O){var P=Math.abs(M-K.values(O));
if((E>P)||(E===P&&(O===K._lastChangedValue||K.values(O)===G.min))){E=P;
H=B(this);
L=O
}});
N=this._start(F,L);
if(N===false){return false
}this._mouseSliding=true;
this._handleIndex=L;
H.addClass("ui-state-active").focus();
I=H.offset();
D=!B(F.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=D?{left:0,top:0}:{left:F.pageX-I.left-(H.width()/2),top:F.pageY-I.top-(H.height()/2)-(parseInt(H.css("borderTopWidth"),10)||0)-(parseInt(H.css("borderBottomWidth"),10)||0)+(parseInt(H.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(F,L,M)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(F){var D={x:F.pageX,y:F.pageY},E=this._normValueFromMouse(D);
this._slide(F,this._handleIndex,E);
return false
},_mouseStop:function(D){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(D,this._handleIndex);
this._change(D,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(E){var D,H,G,F,I;
if(this.orientation==="horizontal"){D=this.elementSize.width;
H=E.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{D=this.elementSize.height;
H=E.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}G=(H/D);
if(G>1){G=1
}if(G<0){G=0
}if(this.orientation==="vertical"){G=1-G
}F=this._valueMax()-this._valueMin();
I=this._valueMin()+G*F;
return this._trimAlignValue(I)
},_start:function(F,E){var D={handle:this.handles[E],value:this.value()};
if(this.options.values&&this.options.values.length){D.value=this.values(E);
D.values=this.values()
}return this._trigger("start",F,D)
},_slide:function(H,G,F){var D,E,I;
if(this.options.values&&this.options.values.length){D=this.values(G?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((G===0&&F>D)||(G===1&&F<D))){F=D
}if(F!==this.values(G)){E=this.values();
E[G]=F;
I=this._trigger("slide",H,{handle:this.handles[G],value:F,values:E});
D=this.values(G?0:1);
if(I!==false){this.values(G,F,true)
}}}else{if(F!==this.value()){I=this._trigger("slide",H,{handle:this.handles[G],value:F});
if(I!==false){this.value(F)
}}}},_stop:function(F,E){var D={handle:this.handles[E],value:this.value()};
if(this.options.values&&this.options.values.length){D.value=this.values(E);
D.values=this.values()
}this._trigger("stop",F,D)
},_change:function(F,E){if(!this._keySliding&&!this._mouseSliding){var D={handle:this.handles[E],value:this.value()};
if(this.options.values&&this.options.values.length){D.value=this.values(E);
D.values=this.values()
}this._lastChangedValue=E;
this._trigger("change",F,D)
}},value:function(D){if(arguments.length){this.options.value=this._trimAlignValue(D);
this._refreshValue();
this._change(null,0);
return 
}return this._value()
},values:function(E,H){var G,D,F;
if(arguments.length>1){this.options.values[E]=this._trimAlignValue(H);
this._refreshValue();
this._change(null,E);
return 
}if(arguments.length){if(B.isArray(arguments[0])){G=this.options.values;
D=arguments[0];
for(F=0;
F<G.length;
F+=1){G[F]=this._trimAlignValue(D[F]);
this._change(null,F)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(E)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(E,F){var D,G=0;
if(E==="range"&&this.options.range===true){if(F==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(F==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(B.isArray(this.options.values)){G=this.options.values.length
}B.Widget.prototype._setOption.apply(this,arguments);
switch(E){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(D=0;
D<G;
D+=1){this._change(null,D)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var D=this.options.value;
D=this._trimAlignValue(D);
return D
},_values:function(D){var G,F,E;
if(arguments.length){G=this.options.values[D];
G=this._trimAlignValue(G);
return G
}else{if(this.options.values&&this.options.values.length){F=this.options.values.slice();
for(E=0;
E<F.length;
E+=1){F[E]=this._trimAlignValue(F[E])
}return F
}else{return[]
}}},_trimAlignValue:function(G){if(G<=this._valueMin()){return this._valueMin()
}if(G>=this._valueMax()){return this._valueMax()
}var D=(this.options.step>0)?this.options.step:1,F=(G-this._valueMin())%D,E=G-F;
if(Math.abs(F)*2>=D){E+=(F>0)?D:(-D)
}return parseFloat(E.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var I,H,L,J,M,G=this.options.range,F=this.options,K=this,E=(!this._animateOff)?F.animate:false,D={};
if(this.options.values&&this.options.values.length){this.handles.each(function(N){H=(K.values(N)-K._valueMin())/(K._valueMax()-K._valueMin())*100;
D[K.orientation==="horizontal"?"left":"bottom"]=H+"%";
B(this).stop(1,1)[E?"animate":"css"](D,F.animate);
if(K.options.range===true){if(K.orientation==="horizontal"){if(N===0){K.range.stop(1,1)[E?"animate":"css"]({left:H+"%"},F.animate)
}if(N===1){K.range[E?"animate":"css"]({width:(H-I)+"%"},{queue:false,duration:F.animate})
}}else{if(N===0){K.range.stop(1,1)[E?"animate":"css"]({bottom:(H)+"%"},F.animate)
}if(N===1){K.range[E?"animate":"css"]({height:(H-I)+"%"},{queue:false,duration:F.animate})
}}}I=H
})
}else{L=this.value();
J=this._valueMin();
M=this._valueMax();
H=(M!==J)?(L-J)/(M-J)*100:0;
D[this.orientation==="horizontal"?"left":"bottom"]=H+"%";
this.handle.stop(1,1)[E?"animate":"css"](D,F.animate);
if(G==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[E?"animate":"css"]({width:H+"%"},F.animate)
}if(G==="max"&&this.orientation==="horizontal"){this.range[E?"animate":"css"]({width:(100-H)+"%"},{queue:false,duration:F.animate})
}if(G==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[E?"animate":"css"]({height:H+"%"},F.animate)
}if(G==="max"&&this.orientation==="vertical"){this.range[E?"animate":"css"]({height:(100-H)+"%"},{queue:false,duration:F.animate})
}}},_handleEvents:{keydown:function(H){var I,F,E,G,D=B(H.target).data("ui-slider-handle-index");
switch(H.keyCode){case B.ui.keyCode.HOME:case B.ui.keyCode.END:case B.ui.keyCode.PAGE_UP:case B.ui.keyCode.PAGE_DOWN:case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:H.preventDefault();
if(!this._keySliding){this._keySliding=true;
B(H.target).addClass("ui-state-active");
I=this._start(H,D);
if(I===false){return 
}}break
}G=this.options.step;
if(this.options.values&&this.options.values.length){F=E=this.values(D)
}else{F=E=this.value()
}switch(H.keyCode){case B.ui.keyCode.HOME:E=this._valueMin();
break;
case B.ui.keyCode.END:E=this._valueMax();
break;
case B.ui.keyCode.PAGE_UP:E=this._trimAlignValue(F+((this._valueMax()-this._valueMin())/A));
break;
case B.ui.keyCode.PAGE_DOWN:E=this._trimAlignValue(F-((this._valueMax()-this._valueMin())/A));
break;
case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:if(F===this._valueMax()){return 
}E=this._trimAlignValue(F+G);
break;
case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:if(F===this._valueMin()){return 
}E=this._trimAlignValue(F-G);
break
}this._slide(H,D,E)
},click:function(D){D.preventDefault()
},keyup:function(E){var D=B(E.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(E,D);
this._change(E,D);
B(E.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(B){function A(C){return function(){var D=this.element.val();
C.apply(this,arguments);
this._refresh();
if(D!==this.element.val()){this._trigger("change")
}}
}B.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var C={},D=this.element;
B.each(["min","max","step"],function(E,F){var G=D.attr(F);
if(G!==undefined&&G.length){C[F]=G
}});
return C
},_events:{keydown:function(C){if(this._start(C)&&this._keydown(C)){C.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(C){if(this.cancelBlur){delete this.cancelBlur;
return 
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",C)
}},mousewheel:function(C,D){if(!D){return 
}if(!this.spinning&&!this._start(C)){return false
}this._spin((D>0?1:-1)*this.options.step,C);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(C)
}},100);
C.preventDefault()
},"mousedown .ui-spinner-button":function(D){var C;
C=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function E(){var F=this.element[0]===this.document[0].activeElement;
if(!F){this.element.focus();
this.previous=C;
this._delay(function(){this.previous=C
})
}}D.preventDefault();
E.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
E.call(this)
});
if(this._start(D)===false){return 
}this._repeat(null,B(D.currentTarget).hasClass("ui-spinner-up")?1:-1,D)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(C){if(!B(C.currentTarget).hasClass("ui-state-active")){return 
}if(this._start(C)===false){return false
}this._repeat(null,B(C.currentTarget).hasClass("ui-spinner-up")?1:-1,C)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var C=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=C.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(C.height()*0.5)&&C.height()>0){C.height(C.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(D){var C=this.options,E=B.ui.keyCode;
switch(D.keyCode){case E.UP:this._repeat(null,1,D);
return true;
case E.DOWN:this._repeat(null,-1,D);
return true;
case E.PAGE_UP:this._repeat(null,C.page,D);
return true;
case E.PAGE_DOWN:this._repeat(null,-C.page,D);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(C){if(!this.spinning&&this._trigger("start",C)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(D,C,E){D=D||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,C,E)
},D);
this._spin(C*this.options.step,E)
},_spin:function(D,C){var E=this.value()||0;
if(!this.counter){this.counter=1
}E=this._adjustValue(E+D*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",C,{value:E})!==false){this._value(E);
this.counter++
}},_increment:function(C){var D=this.options.incremental;
if(D){return B.isFunction(D)?D(C):Math.floor(C*C*C/50000-C*C/500+17*C/200+1)
}return 1
},_precision:function(){var C=this._precisionOf(this.options.step);
if(this.options.min!==null){C=Math.max(C,this._precisionOf(this.options.min))
}return C
},_precisionOf:function(D){var E=D.toString(),C=E.indexOf(".");
return C===-1?0:E.length-C-1
},_adjustValue:function(E){var D,F,C=this.options;
D=C.min!==null?C.min:0;
F=E-D;
F=Math.round(F/C.step)*C.step;
E=D+F;
E=parseFloat(E.toFixed(this._precision()));
if(C.max!==null&&E>C.max){return C.max
}if(C.min!==null&&E<C.min){return C.min
}return E
},_stop:function(C){if(!this.spinning){return 
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",C)
},_setOption:function(C,D){if(C==="culture"||C==="numberFormat"){var E=this._parse(this.element.val());
this.options[C]=D;
this.element.val(this._format(E));
return 
}if(C==="max"||C==="min"||C==="step"){if(typeof D==="string"){D=this._parse(D)
}}if(C==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(D.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(D.down)
}this._super(C,D);
if(C==="disabled"){if(D){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:A(function(C){this._super(C);
this._value(this.element.val())
}),_parse:function(C){if(typeof C==="string"&&C!==""){C=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(C,10,this.options.culture):+C
}return C===""||isNaN(C)?null:C
},_format:function(C){if(C===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(C,this.options.numberFormat,this.options.culture):C
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(E,C){var D;
if(E!==""){D=this._parse(E);
if(D!==null){if(!C){D=this._adjustValue(D)
}E=this._format(D)
}}this.element.val(E);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:A(function(C){this._stepUp(C)
}),_stepUp:function(C){if(this._start()){this._spin((C||1)*this.options.step);
this._stop()
}},stepDown:A(function(C){this._stepDown(C)
}),_stepDown:function(C){if(this._start()){this._spin((C||1)*-this.options.step);
this._stop()
}},pageUp:A(function(C){this._stepUp((C||1)*this.options.page)
}),pageDown:A(function(C){this._stepDown((C||1)*this.options.page)
}),value:function(C){if(!arguments.length){return this._parse(this.element.val())
}A(this._value).call(this,C)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(C,E){var A=0,F=/#.*$/;
function D(){return ++A
}function B(G){return G.hash.length>1&&decodeURIComponent(G.href.replace(F,""))===decodeURIComponent(location.href.replace(F,""))
}C.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var H=this,G=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",G.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(I){if(C(this).is(".ui-state-disabled")){I.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(C(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
G.active=this._initialActive();
if(C.isArray(G.disabled)){G.disabled=C.unique(G.disabled.concat(C.map(this.tabs.filter(".ui-state-disabled"),function(I){return H.tabs.index(I)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(G.active)
}else{this.active=C()
}this._refresh();
if(this.active.length){this.load(G.active)
}},_initialActive:function(){var H=this.options.active,G=this.options.collapsible,I=location.hash.substring(1);
if(H===null){if(I){this.tabs.each(function(J,K){if(C(K).attr("aria-controls")===I){H=J;
return false
}})
}if(H===null){H=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(H===null||H===-1){H=this.tabs.length?0:false
}}if(H!==false){H=this.tabs.index(this.tabs.eq(H));
if(H===-1){H=G?false:0
}}if(!G&&H===false&&this.anchors.length){H=0
}return H
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?C():this._getPanelForTab(this.active)}
},_tabKeydown:function(I){var H=C(this.document[0].activeElement).closest("li"),G=this.tabs.index(H),J=true;
if(this._handlePageNav(I)){return 
}switch(I.keyCode){case C.ui.keyCode.RIGHT:case C.ui.keyCode.DOWN:G++;
break;
case C.ui.keyCode.UP:case C.ui.keyCode.LEFT:J=false;
G--;
break;
case C.ui.keyCode.END:G=this.anchors.length-1;
break;
case C.ui.keyCode.HOME:G=0;
break;
case C.ui.keyCode.SPACE:I.preventDefault();
clearTimeout(this.activating);
this._activate(G);
return ;
case C.ui.keyCode.ENTER:I.preventDefault();
clearTimeout(this.activating);
this._activate(G===this.options.active?false:G);
return ;
default:return 
}I.preventDefault();
clearTimeout(this.activating);
G=this._focusNextTab(G,J);
if(!I.ctrlKey){H.attr("aria-selected","false");
this.tabs.eq(G).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",G)
},this.delay)
}},_panelKeydown:function(G){if(this._handlePageNav(G)){return 
}if(G.ctrlKey&&G.keyCode===C.ui.keyCode.UP){G.preventDefault();
this.active.focus()
}},_handlePageNav:function(G){if(G.altKey&&G.keyCode===C.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(G.altKey&&G.keyCode===C.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(H,I){var G=this.tabs.length-1;
function J(){if(H>G){H=0
}if(H<0){H=G
}return H
}while(C.inArray(J(),this.options.disabled)!==-1){H=I?H+1:H-1
}return H
},_focusNextTab:function(G,H){G=this._findNextTab(G,H);
this.tabs.eq(G).focus();
return G
},_setOption:function(G,H){if(G==="active"){this._activate(H);
return 
}if(G==="disabled"){this._setupDisabled(H);
return 
}this._super(G,H);
if(G==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",H);
if(!H&&this.options.active===false){this._activate(0)
}}if(G==="event"){this._setupEvents(H)
}if(G==="heightStyle"){this._setupHeightStyle(H)
}},_tabId:function(G){return G.attr("aria-controls")||"ui-tabs-"+D()
},_sanitizeSelector:function(G){return G?G.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var H=this.options,G=this.tablist.children(":has(a[href])");
H.disabled=C.map(G.filter(".ui-state-disabled"),function(I){return G.index(I)
});
this._processTabs();
if(H.active===false||!this.anchors.length){H.active=false;
this.active=C()
}else{if(this.active.length&&!C.contains(this.tablist[0],this.active[0])){if(this.tabs.length===H.disabled.length){H.active=false;
this.active=C()
}else{this._activate(this._findNextTab(Math.max(0,H.active-1),false))
}}else{H.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var G=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return C("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=C();
this.anchors.each(function(M,K){var H,I,L,J=C(K).uniqueId().attr("id"),N=C(K).closest("li"),O=N.attr("aria-controls");
if(B(K)){H=K.hash;
I=G.element.find(G._sanitizeSelector(H))
}else{L=G._tabId(N);
H="#"+L;
I=G.element.find(H);
if(!I.length){I=G._createPanel(L);
I.insertAfter(G.panels[M-1]||G.tablist)
}I.attr("aria-live","polite")
}if(I.length){G.panels=G.panels.add(I)
}if(O){N.data("ui-tabs-aria-controls",O)
}N.attr({"aria-controls":H.substring(1),"aria-labelledby":J});
I.attr("aria-labelledby",J)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(G){return C("<div>").attr("id",G).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(I){if(C.isArray(I)){if(!I.length){I=false
}else{if(I.length===this.anchors.length){I=true
}}}for(var H=0,G;
(G=this.tabs[H]);
H++){if(I===true||C.inArray(H,I)!==-1){C(G).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{C(G).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=I
},_setupEvents:function(H){var G={click:function(I){I.preventDefault()
}};
if(H){C.each(H.split(" "),function(J,I){G[I]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,G);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(G){var I,H=this.element.parent();
if(G==="fill"){I=H.height();
I-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var K=C(this),J=K.css("position");
if(J==="absolute"||J==="fixed"){return 
}I-=K.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){I-=C(this).outerHeight(true)
});
this.panels.each(function(){C(this).height(Math.max(0,I-C(this).innerHeight()+C(this).height()))
}).css("overflow","auto")
}else{if(G==="auto"){I=0;
this.panels.each(function(){I=Math.max(I,C(this).height("").height())
}).height(I)
}}},_eventHandler:function(G){var P=this.options,K=this.active,L=C(G.currentTarget),J=L.closest("li"),N=J[0]===K[0],H=N&&P.collapsible,I=H?C():this._getPanelForTab(J),M=!K.length?C():this._getPanelForTab(K),O={oldTab:K,oldPanel:M,newTab:H?C():J,newPanel:I};
G.preventDefault();
if(J.hasClass("ui-state-disabled")||J.hasClass("ui-tabs-loading")||this.running||(N&&!P.collapsible)||(this._trigger("beforeActivate",G,O)===false)){return 
}P.active=H?false:this.tabs.index(J);
this.active=N?C():J;
if(this.xhr){this.xhr.abort()
}if(!M.length&&!I.length){C.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(I.length){this.load(this.tabs.index(J),G)
}this._toggle(G,O)
},_toggle:function(M,L){var K=this,G=L.newPanel,J=L.oldPanel;
this.running=true;
function I(){K.running=false;
K._trigger("activate",M,L)
}function H(){L.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(G.length&&K.options.show){K._show(G,K.options.show,I)
}else{G.show();
I()
}}if(J.length&&this.options.hide){this._hide(J,this.options.hide,function(){L.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
H()
})
}else{L.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
J.hide();
H()
}J.attr({"aria-expanded":"false","aria-hidden":"true"});
L.oldTab.attr("aria-selected","false");
if(G.length&&J.length){L.oldTab.attr("tabIndex",-1)
}else{if(G.length){this.tabs.filter(function(){return C(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}G.attr({"aria-expanded":"true","aria-hidden":"false"});
L.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(H){var G,I=this._findActive(H);
if(I[0]===this.active[0]){return 
}if(!I.length){I=this.active
}G=I.find(".ui-tabs-anchor")[0];
this._eventHandler({target:G,currentTarget:G,preventDefault:C.noop})
},_findActive:function(G){return G===false?C():this.tabs.eq(G)
},_getIndex:function(G){if(typeof G==="string"){G=this.anchors.index(this.anchors.filter("[href$='"+G+"']"))
}return G
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(C.data(this,"ui-tabs-destroy")){C(this).remove()
}else{C(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var G=C(this),H=G.data("ui-tabs-aria-controls");
if(H){G.attr("aria-controls",H).removeData("ui-tabs-aria-controls")
}else{G.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(G){var H=this.options.disabled;
if(H===false){return 
}if(G===E){H=false
}else{G=this._getIndex(G);
if(C.isArray(H)){H=C.map(H,function(I){return I!==G?I:null
})
}else{H=C.map(this.tabs,function(I,J){return J!==G?J:null
})
}}this._setupDisabled(H)
},disable:function(G){var H=this.options.disabled;
if(H===true){return 
}if(G===E){H=true
}else{G=this._getIndex(G);
if(C.inArray(G,H)!==-1){return 
}if(C.isArray(H)){H=C.merge([G],H).sort()
}else{H=[G]
}}this._setupDisabled(H)
},load:function(I,M){I=this._getIndex(I);
var L=this,J=this.tabs.eq(I),H=J.find(".ui-tabs-anchor"),G=this._getPanelForTab(J),K={tab:J,panel:G};
if(B(H[0])){return 
}this.xhr=C.ajax(this._ajaxSettings(H,M,K));
if(this.xhr&&this.xhr.statusText!=="canceled"){J.addClass("ui-tabs-loading");
G.attr("aria-busy","true");
this.xhr.success(function(N){setTimeout(function(){G.html(N);
L._trigger("load",M,K)
},1)
}).complete(function(O,N){setTimeout(function(){if(N==="abort"){L.panels.stop(false,true)
}J.removeClass("ui-tabs-loading");
G.removeAttr("aria-busy");
if(O===L.xhr){delete L.xhr
}},1)
})
}},_ajaxSettings:function(G,J,I){var H=this;
return{url:G.attr("href"),beforeSend:function(L,K){return H._trigger("beforeLoad",J,C.extend({jqXHR:L,ajaxSettings:K},I))
}}
},_getPanelForTab:function(G){var H=C(G).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+H))
}})
})(jQuery);
(function(D){var B=0;
function C(F,G){var E=(F.attr("aria-describedby")||"").split(/\s+/);
E.push(G);
F.data("ui-tooltip-id",G).attr("aria-describedby",D.trim(E.join(" ")))
}function A(G){var H=G.data("ui-tooltip-id"),F=(G.attr("aria-describedby")||"").split(/\s+/),E=D.inArray(H,F);
if(E!==-1){F.splice(E,1)
}G.removeData("ui-tooltip-id");
F=D.trim(F.join(" "));
if(F){G.attr("aria-describedby",F)
}else{G.removeAttr("aria-describedby")
}}D.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var E=D(this).attr("title")||"";
return D("<a>").text(E).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(E,G){var F=this;
if(E==="disabled"){this[G?"_disable":"_enable"]();
this.options[E]=G;
return 
}this._super(E,G);
if(E==="content"){D.each(this.tooltips,function(I,H){F._updateContent(H)
})
}},_disable:function(){var E=this;
D.each(this.tooltips,function(H,F){var G=D.Event("blur");
G.target=G.currentTarget=F[0];
E.close(G,true)
});
this.element.find(this.options.items).addBack().each(function(){var F=D(this);
if(F.is("[title]")){F.data("ui-tooltip-title",F.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var E=D(this);
if(E.data("ui-tooltip-title")){E.attr("title",E.data("ui-tooltip-title"))
}})
},open:function(F){var E=this,G=D(F?F.target:this.element).closest(this.options.items);
if(!G.length||G.data("ui-tooltip-id")){return 
}if(G.attr("title")){G.data("ui-tooltip-title",G.attr("title"))
}G.data("ui-tooltip-open",true);
if(F&&F.type==="mouseover"){G.parents().each(function(){var I=D(this),H;
if(I.data("ui-tooltip-open")){H=D.Event("blur");
H.target=H.currentTarget=this;
E.close(H,true)
}if(I.attr("title")){I.uniqueId();
E.parents[this.id]={element:this,title:I.attr("title")};
I.attr("title","")
}})
}this._updateContent(G,F)
},_updateContent:function(J,I){var H,E=this.options.content,G=this,F=I?I.type:null;
if(typeof E==="string"){return this._open(I,J,E)
}H=E.call(J[0],function(K){if(!J.data("ui-tooltip-open")){return 
}G._delay(function(){if(I){I.type=F
}this._open(I,J,K)
})
});
if(H){this._open(I,J,H)
}},_open:function(I,K,H){var J,G,F,L=D.extend({},this.options.position);
if(!H){return 
}J=this._find(K);
if(J.length){J.find(".ui-tooltip-content").html(H);
return 
}if(K.is("[title]")){if(I&&I.type==="mouseover"){K.attr("title","")
}else{K.removeAttr("title")
}}J=this._tooltip(K);
C(K,J.attr("id"));
J.find(".ui-tooltip-content").html(H);
function E(M){L.of=M;
if(J.is(":hidden")){return 
}J.position(L)
}if(this.options.track&&I&&/^mouse/.test(I.type)){this._on(this.document,{mousemove:E});
E(I)
}else{J.position(D.extend({of:K},this.options.position))
}J.hide();
this._show(J,this.options.show);
if(this.options.show&&this.options.show.delay){F=this.delayedShow=setInterval(function(){if(J.is(":visible")){E(L.of);
clearInterval(F)
}},D.fx.interval)
}this._trigger("open",I,{tooltip:J});
G={keyup:function(M){if(M.keyCode===D.ui.keyCode.ESCAPE){var N=D.Event(M);
N.currentTarget=K[0];
this.close(N,true)
}},remove:function(){this._removeTooltip(J)
}};
if(!I||I.type==="mouseover"){G.mouseleave="close"
}if(!I||I.type==="focusin"){G.focusout="close"
}this._on(true,K,G)
},close:function(F){var E=this,H=D(F?F.currentTarget:this.element),G=this._find(H);
if(this.closing){return 
}clearInterval(this.delayedShow);
if(H.data("ui-tooltip-title")){H.attr("title",H.data("ui-tooltip-title"))
}A(H);
G.stop(true);
this._hide(G,this.options.hide,function(){E._removeTooltip(D(this))
});
H.removeData("ui-tooltip-open");
this._off(H,"mouseleave focusout keyup");
if(H[0]!==this.element[0]){this._off(H,"remove")
}this._off(this.document,"mousemove");
if(F&&F.type==="mouseleave"){D.each(this.parents,function(J,I){D(I.element).attr("title",I.title);
delete E.parents[J]
})
}this.closing=true;
this._trigger("close",F,{tooltip:G});
this.closing=false
},_tooltip:function(E){var G="ui-tooltip-"+B++,F=D("<div>").attr({id:G,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
D("<div>").addClass("ui-tooltip-content").appendTo(F);
F.appendTo(this.document[0].body);
this.tooltips[G]=E;
return F
},_find:function(E){var F=E.data("ui-tooltip-id");
return F?D("#"+F):D()
},_removeTooltip:function(E){E.remove();
delete this.tooltips[E.attr("id")]
},_destroy:function(){var E=this;
D.each(this.tooltips,function(H,F){var G=D.Event("blur");
G.target=G.currentTarget=F[0];
E.close(G,true);
D("#"+H).remove();
if(F.data("ui-tooltip-title")){F.attr("title",F.data("ui-tooltip-title"));
F.removeData("ui-tooltip-title")
}})
}})
}(jQuery));