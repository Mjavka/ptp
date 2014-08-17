(function(A){A.fn.checkbox=function(){A(this).css({position:"absolute",left:"-9999px"}).each(function(){var B=A(this);
if(B.next("span.checkbox").length<1){var C=A('<span class="checkbox" style="display:inline-block"></span>');
B.after(C);
if(B.is(":checked")){C.addClass("checked")
}if(B.is(":disabled")){C.addClass("disabled")
}C.click(function(){if(!C.is(".disabled")){if(B.is(":checked")){B.removeAttr("checked");
C.removeClass("checked")
}else{B.attr("checked",true);
C.addClass("checked")
}B.change();
return false
}});
B.parent("label").add('label[for="'+B.attr("id")+'"]').click(function(){C.click();
return false
});
B.change(function(){if(B.is(":checked")){C.addClass("checked")
}else{C.removeClass("checked")
}}).keydown(function(D){if(B.parent("label").length&&(D.which==13||D.which==32)){C.click()
}}).focus(function(){if(!C.is(".disabled")){C.addClass("focused")
}}).blur(function(){C.removeClass("focused")
});
B.live("refresh",function(){if(B.is(":checked")){C.addClass("checked")
}else{C.removeClass("checked")
}if(B.is(":disabled")){C.addClass("disabled")
}else{C.removeClass("disabled")
}})
}})
}
})(jQuery);