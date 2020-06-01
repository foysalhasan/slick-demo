$(document).ready(function () {
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    fade: true,
    asNavFor: ".slider-nav",
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
  });

  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplay: true,
    asNavFor: ".main-slider",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // SideBar

  $("#sideBarNavOpen").click(function () {
    $("#sideBarNav").addClass("active");
    $("#sideBarNavClose").show();
    $(this).hide();
  });
  $("#sideBarNavClose").click(function () {
    $("#sideBarNav").removeClass("active");
    $("#sideBarNavOpen").show();
    $(this).hide();
  });
});
