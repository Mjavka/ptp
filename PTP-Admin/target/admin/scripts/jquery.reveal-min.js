(function(A){A("a[data-reveal-id]").live("click",function(C){C.preventDefault();
var B=A(this).attr("data-reveal-id");
A("#"+B).reveal(A(this).data())
});
A.fn.reveal=function(B){var C={animation:"fadeAndPop",animationspeed:300,closeonbackgroundclick:true,dismissmodalclass:"close-reveal-modal"};
var B=A.extend({},C,B);
return this.each(function(){var K=A(this),G=parseInt(K.css("top")),I=K.height()+G,F=false,H=A(".reveal-modal-bg");
if(H.length==0){H=A('<div class="reveal-modal-bg" />').insertAfter(K)
}K.bind("reveal:open",function(){H.unbind("click.modalEvent");
A("."+B.dismissmodalclass).unbind("click.modalEvent");
if(!F){J();
if(B.animation=="fadeAndPop"){K.css({top:A(document).scrollTop()-I,opacity:0,visibility:"visible"});
H.fadeIn(B.animationspeed/2);
K.delay(B.animationspeed/2).animate({top:A(document).scrollTop()+G+"px",opacity:1},B.animationspeed,D())
}if(B.animation=="fade"){K.css({opacity:0,visibility:"visible",top:A(document).scrollTop()+G});
H.fadeIn(B.animationspeed/2);
K.delay(B.animationspeed/2).animate({opacity:1},B.animationspeed,D())
}if(B.animation=="none"){K.css({visibility:"visible",top:A(document).scrollTop()+G});
H.css({display:"block"});
D()
}}K.unbind("reveal:open")
});
K.bind("reveal:close",function(){if(!F){J();
if(B.animation=="fadeAndPop"){H.delay(B.animationspeed).fadeOut(B.animationspeed);
K.animate({top:A(document).scrollTop()-I+"px",opacity:0},B.animationspeed/2,function(){K.css({top:G,opacity:1,visibility:"hidden"});
D()
})
}if(B.animation=="fade"){H.delay(B.animationspeed).fadeOut(B.animationspeed);
K.animate({opacity:0},B.animationspeed,function(){K.css({opacity:1,visibility:"hidden",top:G});
D()
})
}if(B.animation=="none"){K.css({visibility:"hidden",top:G});
H.css({display:"none"})
}}K.unbind("reveal:close")
});
K.trigger("reveal:open");
var E=A("."+B.dismissmodalclass).bind("click.modalEvent",function(){K.trigger("reveal:close")
});
if(B.closeonbackgroundclick){H.css({cursor:"pointer"});
H.bind("click.modalEvent",function(){K.trigger("reveal:close")
})
}A("body").keyup(function(L){if(L.which===27){K.trigger("reveal:close")
}});
function D(){F=false
}function J(){F=true
}})
}
})(jQuery);