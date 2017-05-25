$(document).ready(function() {
    function e(e) {
        $(e).block({
            message: '<img src="assets/images/reload.gif" width="20px" alt="">',
            css: {
                border: "none",
                padding: "0px",
                width: "20px",
                height: "20px",
                backgroundColor: "transparent"
            },
            overlayCSS: {
                backgroundColor: "#121212",
                opacity: .3,
                cursor: "wait"
            }
        })
    }

    function a(e) {
        $(e).unblock()
    }
    $(".show-search").click(function() {
        $(".search-form").css("margin-top", "0"), $(".search-input").focus()
    }), $(".close-search").click(function() {
        $(".search-form").css("margin-top", "-60px")
    });
    for (var s = document.getElementsByClassName("toggle-fullscreen"), n = 0; n < s.length; n++) s[n].addEventListener("click", function() {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
    });
    Waves.displayEffect(), $('[data-toggle~="tooltip"]').tooltip({
        container: "body"
    });
    var o = Array.prototype.slice.call(document.querySelectorAll(".js-switch"));
    o.forEach(function(e) {
        new Switchery(e, {
            color: "#23B7E5",
            secondaryColor: "#121212",
            jackColor: "#fff"
        })
    }), $(".panel-collapse").click(function() {
        $(this).closest(".panel").children(".panel-body").slideToggle("fast")
    }), $(".panel-reload").click(function() {
        var s = $(this).closest(".panel").children(".panel-body");
        e(s), window.setTimeout(function() {
            a(s)
        }, 1e3)
    }), $(".panel-remove").click(function() {
        $(this).closest(".panel").hide()
    }), $(".push-sidebar").click(function() {
        var e = $(".sidebar");
        e.hasClass("visible") ? (e.removeClass("visible"), $(".page-inner").removeClass("sidebar-visible")) : (e.addClass("visible"), $(".page-inner").addClass("sidebar-visible"))
    }), $(".sortable").sortable({
        connectWith: ".sortable",
        items: ".panel",
        helper: "original",
        revert: !0,
        placeholder: "panel-placeholder",
        forcePlaceholderSize: !0,
        opacity: .95,
        cursor: "move"
    });
    var t = $("input[type=checkbox]:not(.switchery), input[type=radio]:not(.no-uniform)");
    t.size() > 0 && t.each(function() {
        $(this).uniform()
    }), $.fn.toggleAttr = function(e, a) {
        var s = void 0 === a;
        return this.each(function() {
            s && !$(this).is("[" + e + "]") || !s && a ? $(this).attr(e, e) : $(this).removeAttr(e)
        })
    };
    $(".sidebar .accordion-menu li .sub-menu").slideUp(0), $(".sidebar .accordion-menu li.open > .sub-menu").slideDown(0), $(".small-sidebar .sidebar .accordion-menu li.open .sub-menu").hide(0), $(".sidebar .accordion-menu > li.droplink > a").click(function() {
        if (!$("body").hasClass("small-sidebar") && !$("body").hasClass("page-horizontal-bar") && !$("body").hasClass("hover-menu")) {
            var e = $(".sidebar .menu"),
                a = ($(".page-sidebar-inner"), $(".page-content"), $(this).next());
            $(this);
            return e.find("li").removeClass("open"), $(".sub-menu").slideUp(200, function() {
                c()
            }), c(), a.is(":visible") ? a.slideUp(200, function() {
                c()
            }) : ($(this).parent("li").addClass("open"), $(this).next(".sub-menu").slideDown(200, function() {
                c()
            })), !1
        }
        if ($("body").hasClass("small-sidebar") && $("body").hasClass("page-sidebar-fixed")) {
            var e = $(".sidebar .menu"),
                a = ($(".page-sidebar-inner"), $(".page-content"), $(this).next());
            $(this);
            return e.find("li").removeClass("open"), $(".sub-menu").slideUp(200, function() {
                c()
            }), c(), a.is(":visible") ? a.slideUp(200, function() {
                c()
            }) : ($(this).parent("li").addClass("open"), $(this).next(".sub-menu").slideDown(200, function() {
                c()
            })), !1
        }
    }), $(".sidebar .accordion-menu .sub-menu li.droplink > a").click(function() {
        var e = $(this).parent().parent(),
            a = ($(".page-sidebar-inner"), $(".page-content"), $(this).next());
        $(this);
        return e.find("li").removeClass("open"), c(), a.is(":visible") ? a.slideUp(200, function() {
            c()
        }) : ($(this).parent("li").addClass("open"), $(this).next(".sub-menu").slideDown(200, function() {
            c()
        })), !1
    });
    var c = function() {
        var e, a = $(".page-inner"),
            s = $(".page-sidebar"),
            n = $("body"),
            o = $(".page-footer").outerHeight();
        $(".page-content").height();
        a.attr("style", "min-height:" + s.height() + "px !important"), n.hasClass("page-sidebar-fixed") ? e = s.height() + o : (e = s.height() + o, e < $(window).height() && (e = $(window).height())), e >= a.height() && a.attr("style", "min-height:" + e + "px !important")
    };
    c(), window.onresize = c, $(".slimscroll").slimscroll({
        allowPageScroll: !0
    });
    var i = document.querySelector(".fixed-header-check"),
        l = document.querySelector(".fixed-sidebar-check"),
        d = document.querySelector(".horizontal-bar-check"),
        r = document.querySelector(".toggle-sidebar-check"),
        h = document.querySelector(".boxed-layout-check"),
        u = document.querySelector(".compact-menu-check"),
        b = document.querySelector(".hover-menu-check"),
        m = function() {
            $("body").hasClass("small-sidebar") && 1 == r.checked && r.click(), $("body").hasClass("page-header-fixed") || 0 != i.checked || i.click(), $("body").hasClass("page-sidebar-fixed") && 1 == l.checked && l.click(), $("body").hasClass("page-horizontal-bar") && 1 == d.checked && d.click(), $("body").hasClass("compact-menu") && 1 == u.checked && u.click(), $("body").hasClass("hover-menu") && 1 == b.checked && b.click(), $(".page-content").hasClass("container") && 1 == h.checked && h.click(), c()
        },
        p = $(".navbar .logo-box a span").text(),
        g = p.slice(0, 1),
        f = function() {
            $("body").toggleClass("small-sidebar"), $(".navbar .logo-box a span").html($(".navbar .logo-box a span").text() == g ? p : g), c()
        },
        k = function() {
            $("body").hasClass("page-horizontal-bar") && $("body").hasClass("page-sidebar-fixed") && $("body").hasClass("page-header-fixed") && (l.click(), alert("Static header isn't compatible with fixed horizontal nav mode. Modern will set static mode on horizontal nav.")), $("body").toggleClass("page-header-fixed"), c()
        },
        y = function() {
            !$("body").hasClass("page-horizontal-bar") || $("body").hasClass("page-sidebar-fixed") || $("body").hasClass("page-header-fixed") || (i.click(), alert("Fixed horizontal nav isn't compatible with static header mode. Modern will set fixed mode on header.")), $("body").hasClass("hover-menu") && !$("body").hasClass("page-sidebar-fixed") && (b.click(), alert("Fixed sidebar isn't compatible with hover menu mode. Modern will set accordion mode on menu.")), $("body").toggleClass("page-sidebar-fixed"), $("body").hasClass(".page-sidebar-fixed") && $(".page-sidebar-inner").slimScroll({
                destroy: !0
            }), $(".page-sidebar-inner").slimScroll(), c()
        },
        C = function() {
            $(".sidebar").toggleClass("horizontal-bar"), $(".sidebar").toggleClass("page-sidebar"), $("body").toggleClass("page-horizontal-bar"), $("body").hasClass("page-sidebar-fixed") && !$("body").hasClass("page-header-fixed") && (i.click(), alert("Static header isn't compatible with fixed horizontal nav mode. Modern will set static mode on horizontal nav.")), c()
        },
        x = function() {
            $(".page-content").toggleClass("container"), c()
        },
        v = function() {
            $("body").toggleClass("compact-menu"), c()
        },
        w = function() {
            !$("body").hasClass("hover-menu") && $("body").hasClass("page-sidebar-fixed") && (l.click(), alert("Fixed sidebar isn't compatible with hover menu mode. Modern will set static mode on sidebar.")), $("body").toggleClass("hover-menu"), c()
        };
    if ($(".small-sidebar .navbar .logo-box a span").html($(".navbar .logo-box a span").text() == g ? p : g), $(".theme-settings").length || $(".sidebar-toggle").click(function() {
            f()
        }), $(".theme-settings").length && (i.onchange = function() {
            k()
        }, l.onchange = function() {
            y()
        }, d.onchange = function() {
            C()
        }, r.onchange = function() {
            f()
        }, u.onchange = function() {
            v()
        }, b.onchange = function() {
            w()
        }, h.onchange = function() {
            x()
        }, $(".sidebar-toggle").click(function() {
            r.click()
        }), $(".reset-options").click(function() {
            m()
        }), $("body").hasClass("page-sidebar-fixed") || 1 != l.checked || $("body").addClass("page-sidebar-fixed"), $("body").hasClass("page-sidebar-fixed") && 0 == l.checked && $(".fixed-sidebar-check").prop("checked", !0), $("body").hasClass("page-header-fixed") || 1 != i.checked || $("body").addClass("page-header-fixed"), $("body").hasClass("page-header-fixed") && 0 == i.checked && $(".fixed-header-check").prop("checked", !0), $("body").hasClass("page-horizontal-bar") || 1 != d.checked || ($("body").addClass("page-horizontal-bar"), $(".sidebar").addClass("horizontal-bar"), $(".sidebar").removeClass("page-sidebar")), $("body").hasClass("page-horizontal-bar") && 0 == d.checked && $(".horizontal-bar-check").prop("checked", !0), $("body").hasClass("small-sidebar") || 1 != r.checked || $("body").addClass("small-sidebar"), $("body").hasClass("small-sidebar") && 0 == r.checked && $(".horizontal-bar-check").prop("checked", !0), $(".page-content").hasClass("container") || 1 != h.checked || $(".toggle-sidebar-check").addClass("container"), $(".page-content").hasClass("container") && 0 == h.checked && $(".boxed-layout-check").prop("checked", !0), $(".page-content").hasClass("container") || 1 != h.checked || $(".toggle-sidebar-check").addClass("container"), $(".page-content").hasClass("container") && 0 == h.checked && $(".boxed-layout-check").prop("checked", !0), $(".page-content").hasClass("container") || 1 != h.checked || $(".toggle-sidebar-check").addClass("container"), $(".page-content").hasClass("container") && 0 == h.checked && $(".boxed-layout-check").prop("checked", !0)), $(".chat").length) {
        var z = document.getElementById("cbp-spmenu-s1"),
            E = document.getElementById("showRight"),
            S = document.getElementById("closeRight"),
            F = document.getElementById("cbp-spmenu-s2"),
            q = document.getElementById("closeRight2");
        document.body;
        E.onclick = function() {
            classie.toggle(z, "cbp-spmenu-open")
        }, S.onclick = function() {
            classie.toggle(z, "cbp-spmenu-open")
        }, q.onclick = function() {
            classie.toggle(F, "cbp-spmenu-open")
        }, $(".showRight2").click(function() {
            classie.toggle(F, "cbp-spmenu-open")
        }), $(".chat-write form input").keypress(function(e) {
            if (13 == e.which && 0 == !$(this).val().length) $('<div class="chat-item chat-item-right"><div class="chat-message">' + $(this).val() + "</div></div>").insertAfter(".chat .chat-item:last-child"), $(this).val("");
            else if (13 == e.which) return;
            var a = $(".chat").prop("scrollHeight") + "px";
            $(".chat").slimscroll({
                allowPageScroll: !0,
                scrollTo: a
            })
        })
    }
});