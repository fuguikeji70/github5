$(window).scroll(function() {
    var st = Number($(this).scrollTop());
    if (st >= 60) {
        $('header').addClass('bg-fixed');
    } else {
        $('header').removeClass('bg-fixed');
    }
});

$(function() {
    $.fn.navToggle = function() {
        $('.navbar-toggle').click(function() {
            if ($('.head-nav ').hasClass('active')) {
                $('.head-nav').removeClass('active');
                $('html,body').removeClass('ovfHiden');
                $('main').removeClass('filter');
                $(this).removeClass('active');
            } else {
                $('.head-nav').addClass('active');
                $(this).addClass('active');
                $('html,body').addClass('ovfHiden');
                $('main').addClass('filter');
            }
        });
        $('.login-cover').mousedown(function() {
            $('.head-nav').removeClass('active');
            $('html,body').removeClass('ovfHiden');
        });
        return this;
    };
    $('.navbar-toggle').navToggle();
});
/*************左侧菜单内语言伸缩展开*************************/
$(function() {
    $.fn.toggleList = function() {
        var a = $(this),
            b = a.find(".question");
        var c = function() {
            a.removeClass("cur").children(".answer").slideDown(200);
        };
        b.click(function() {
            if ($(this).parent("li").hasClass("cur")) {
                c();
            } else {
                c();
                $(this).parent().addClass("cur").children(".answer").slideUp(200);
            }
        });
        b.first().click();
    };
    $(".head-nav ul li").toggleList();
});
/*********************************************************************/
$(function() {
    $('.footer-nav li').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.wrap-fluid').toggleClass('active');
        } else {
            $(this).addClass('active');
            $('.wrap-fluid').toggleClass('active');
        }
    });
});
/*********************************************************************/

$(function() {
    $('.casino-nav ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var liindex = $('.casino-nav ul li').index(this);
        $('.type-gameBox .type-gameList').eq(liindex).fadeIn(150).siblings('.type-gameBox .type-gameList').hide();
    });
});

// ricky scroll to element
function scrollToEl(el) {
    $('html, body').animate({
        scrollTop: $(el).offset().top - 60
    }, {
        duration: 500,
        easing: 'swing'
    });

    if ($('.head-nav').hasClass('active')) {
        $('.head-nav').removeClass('active');
    }
}