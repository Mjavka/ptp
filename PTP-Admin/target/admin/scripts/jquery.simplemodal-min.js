(function(E){var C=E.browser.msie&&parseInt(E.browser.version)===6&&typeof window.XMLHttpRequest!=="object",A=E.browser.msie&&parseInt(E.browser.version)===7,B=null,D=[];
E.modal=function(G,F){return E.modal.impl.init(G,F)
};
E.modal.close=function(){E.modal.impl.close()
};
E.modal.focus=function(F){E.modal.impl.focus(F)
};
E.modal.setContainerDimensions=function(){E.modal.impl.setContainerDimensions()
};
E.modal.setPosition=function(){E.modal.impl.setPosition()
};
E.modal.update=function(G,F){E.modal.impl.update(G,F)
};
E.fn.modal=function(F){return E.modal.impl.init(this,F)
};
E.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};
E.modal.impl={d:{},init:function(G,F){var H=this;
if(H.d.data){return false
}B=E.browser.msie&&!E.boxModel;
H.o=E.extend({},E.modal.defaults,F);
H.zIndex=H.o.zIndex;
H.occb=false;
if(typeof G==="object"){G=G instanceof jQuery?G:E(G);
H.d.placeholder=false;
if(G.parent().parent().size()>0){G.before(E("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));
H.d.placeholder=true;
H.display=G.css("display");
if(!H.o.persist){H.d.orig=G.clone(true)
}}}else{if(typeof G==="string"||typeof G==="number"){G=E("<div></div>").html(G)
}else{alert("SimpleModal Error: Unsupported data type: "+typeof G);
return H
}}H.create(G);
H.open();
E.isFunction(H.o.onShow)&&H.o.onShow.apply(H,[H.d]);
return H
},create:function(G){var F=this;
D=F.getDimensions();
if(F.o.modal&&C){F.d.iframe=E('<iframe src="javascript:false;"></iframe>').css(E.extend(F.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:D[0],width:D[1],zIndex:F.o.zIndex,top:0,left:0})).appendTo(F.o.appendTo)
}F.d.overlay=E("<div></div>").attr("id",F.o.overlayId).addClass("simplemodal-overlay").css(E.extend(F.o.overlayCss,{display:"none",opacity:F.o.opacity/100,height:F.o.modal?D[0]:0,width:F.o.modal?D[1]:0,position:"fixed",left:0,top:0,zIndex:F.o.zIndex+1})).appendTo(F.o.appendTo);
F.d.container=E("<div></div>").attr("id",F.o.containerId).addClass("simplemodal-container").css(E.extend(F.o.containerCss,{display:"none",position:"fixed",zIndex:F.o.zIndex+2})).append(F.o.close&&F.o.closeHTML?E(F.o.closeHTML).addClass(F.o.closeClass):"").appendTo(F.o.appendTo);
F.d.wrap=E("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(F.d.container);
F.d.data=G.attr("id",G.attr("id")||F.o.dataId).addClass("simplemodal-data").css(E.extend(F.o.dataCss,{display:"none"})).appendTo("body");
F.setContainerDimensions();
F.d.data.appendTo(F.d.wrap);
if(C||B){F.fixIE()
}},bindEvents:function(){var F=this;
E("."+F.o.closeClass).bind("click.simplemodal",function(G){G.preventDefault();
F.close()
});
F.o.modal&&F.o.close&&F.o.overlayClose&&F.d.overlay.bind("click.simplemodal",function(G){G.preventDefault();
F.close()
});
E(document).bind("keydown.simplemodal",function(G){if(F.o.modal&&G.keyCode===9){F.watchTab(G)
}else{if(F.o.close&&F.o.escClose&&G.keyCode===27){G.preventDefault();
F.close()
}}});
E(window).bind("resize.simplemodal",function(){D=F.getDimensions();
F.o.autoResize?F.setContainerDimensions():F.o.autoPosition&&F.setPosition();
if(C||B){F.fixIE()
}else{if(F.o.modal){F.d.iframe&&F.d.iframe.css({height:D[0],width:D[1]});
F.d.overlay.css({height:D[0],width:D[1]})
}}})
},unbindEvents:function(){E("."+this.o.closeClass).unbind("click.simplemodal");
E(document).unbind("keydown.simplemodal");
E(window).unbind("resize.simplemodal");
this.d.overlay.unbind("click.simplemodal")
},fixIE:function(){var G=this,F=G.o.position;
E.each([G.d.iframe||null,!G.o.modal?null:G.d.overlay,G.d.container],function(K,H){if(H){var I=H[0].style;
I.position="absolute";
if(K<2){I.removeExpression("height");
I.removeExpression("width");
I.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"');
I.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"')
}else{var J;
if(F&&F.constructor===Array){K=F[0]?typeof F[0]==="number"?F[0].toString():F[0].replace(/px/,""):H.css("top").replace(/px/,"");
K=K.indexOf("%")===-1?K+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(K.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"';
if(F[1]){J=typeof F[1]==="number"?F[1].toString():F[1].replace(/px/,"");
J=J.indexOf("%")===-1?J+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(J.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'
}}else{K='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"';
J='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'
}I.removeExpression("top");
I.removeExpression("left");
I.setExpression("top",K);
I.setExpression("left",J)
}}})
},focus:function(G){var F=this;
G=G&&E.inArray(G,["first","last"])!==-1?G:"first";
var H=E(":input:enabled:visible:"+G,F.d.wrap);
setTimeout(function(){H.length>0?H.focus():F.d.wrap.focus()
},10)
},getDimensions:function(){var F=E(window);
return[E.browser.opera&&E.browser.version>"9.5"&&E.fn.jquery<"1.3"||E.browser.opera&&E.browser.version<"9.5"&&E.fn.jquery>"1.2.6"?F[0].innerHeight:F.height(),F.width()]
},getVal:function(G,F){return G?typeof G==="number"?G:G==="auto"?0:G.indexOf("%")>0?parseInt(G.replace(/%/,""))/100*(F==="h"?D[0]:D[1]):parseInt(G.replace(/px/,"")):null
},update:function(G,F){var H=this;
if(!H.d.data){return false
}H.d.origHeight=H.getVal(G,"h");
H.d.origWidth=H.getVal(F,"w");
H.d.data.hide();
G&&H.d.container.css("height",G);
F&&H.d.container.css("width",F);
H.setContainerDimensions();
H.d.data.show();
H.o.focus&&H.focus();
H.unbindEvents();
H.bindEvents()
},setContainerDimensions:function(){var G=this,F=C||A,M=G.d.origHeight?G.d.origHeight:E.browser.opera?G.d.container.height():G.getVal(F?G.d.container[0].currentStyle.height:G.d.container.css("height"),"h");
F=G.d.origWidth?G.d.origWidth:E.browser.opera?G.d.container.width():G.getVal(F?G.d.container[0].currentStyle.width:G.d.container.css("width"),"w");
var J=G.d.data.outerHeight(true),K=G.d.data.outerWidth(true);
G.d.origHeight=G.d.origHeight||M;
G.d.origWidth=G.d.origWidth||F;
var L=G.o.maxHeight?G.getVal(G.o.maxHeight,"h"):null,I=G.o.maxWidth?G.getVal(G.o.maxWidth,"w"):null;
L=L&&L<D[0]?L:D[0];
I=I&&I<D[1]?I:D[1];
var H=G.o.minHeight?G.getVal(G.o.minHeight,"h"):"auto";
M=M?G.o.autoResize&&M>L?L:M<H?H:M:J?J>L?L:G.o.minHeight&&H!=="auto"&&J<H?H:J:H;
L=G.o.minWidth?G.getVal(G.o.minWidth,"w"):"auto";
F=F?G.o.autoResize&&F>I?I:F<L?L:F:K?K>I?I:G.o.minWidth&&L!=="auto"&&K<L?L:K:L;
G.d.container.css({height:M,width:F});
G.d.wrap.css({overflow:J>M||K>F?"auto":"visible"});
G.o.autoPosition&&G.setPosition()
},setPosition:function(){var G=this,F,H;
F=D[0]/2-G.d.container.outerHeight(true)/2;
H=D[1]/2-G.d.container.outerWidth(true)/2;
if(G.o.position&&Object.prototype.toString.call(G.o.position)==="[object Array]"){F=G.o.position[0]||F;
H=G.o.position[1]||H
}else{F=F;
H=H
}G.d.container.css({left:H,top:F})
},watchTab:function(G){var F=this;
if(E(G.target).parents(".simplemodal-container").length>0){F.inputs=E(":input:enabled:visible:first, :input:enabled:visible:last",F.d.data[0]);
if(!G.shiftKey&&G.target===F.inputs[F.inputs.length-1]||G.shiftKey&&G.target===F.inputs[0]||F.inputs.length===0){G.preventDefault();
F.focus(G.shiftKey?"last":"first")
}}else{G.preventDefault();
F.focus()
}},open:function(){var F=this;
F.d.iframe&&F.d.iframe.show();
if(E.isFunction(F.o.onOpen)){F.o.onOpen.apply(F,[F.d])
}else{F.d.overlay.show();
F.d.container.show();
F.d.data.show()
}F.o.focus&&F.focus();
F.bindEvents()
},close:function(){var G=this;
if(!G.d.data){return false
}G.unbindEvents();
if(E.isFunction(G.o.onClose)&&!G.occb){G.occb=true;
G.o.onClose.apply(G,[G.d])
}else{if(G.d.placeholder){var F=E("#simplemodal-placeholder");
if(G.o.persist){F.replaceWith(G.d.data.removeClass("simplemodal-data").css("display",G.display))
}else{G.d.data.hide().remove();
F.replaceWith(G.d.orig)
}}else{G.d.data.hide().remove()
}G.d.container.hide().remove();
G.d.overlay.hide();
G.d.iframe&&G.d.iframe.hide().remove();
setTimeout(function(){G.d.overlay.remove();
G.d={}
},10)
}}}
})(jQuery);