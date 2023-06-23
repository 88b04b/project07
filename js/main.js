$(function () {

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                $('.main_slide .pagination li').eq(0).addClass('active').siblings().removeClass('active');
            },
            slideChangeTransitionStart: function () {
                let idx = this.realIndex;
                $('.main_slide .pagination li').eq(idx).addClass('active').siblings().removeClass('active');
            },
        },
    });

    $('.main_slide .pagination li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
    });

    let autoplayState = 1;

    $('.main_slide .pause').on('click', function () {
        if (autoplayState === 1) {
            $(this).addClass('active');
            mainSlide.autoplay.stop();
            autoplayState = 0;
        } else {
            $(this).removeClass('active');
            mainSlide.autoplay.start();
            mainSlide.slideNext();
            autoplayState = 1;
        }
    });

    const upgradeSlide = new Swiper(".upgrade_slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 120,
            }
        },
    });

    $('.upgrade_slide .arrow .left').on('click', function () {
        upgradeSlide.slidePrev();
    });
    $('.upgrade_slide .arrow .right').on('click', function () {
        upgradeSlide.slideNext();
    });

    $('.popular .recipe_list li').on('click', function () {
        let idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.popular .recipe_cont>li').eq(idx).addClass('active').siblings().removeClass('active');
    });

    $('.family_link').on('click', function () {
        $(this).toggleClass('active');
    });

    //외부 영역 클릭했을 때 닫기
    $(document).mouseup(function (e) {
        var familyLink = $('.family_link');
        if (familyLink.has(e.target).length === 0) {
            familyLink.removeClass('active');
        }
    });

    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('mobile_open');
        $('body').toggleClass('body_fixed');
    });

});