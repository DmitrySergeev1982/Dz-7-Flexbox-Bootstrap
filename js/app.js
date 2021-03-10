$(function() {

  var section = $("#section"),
      headerH = $("#header").innerHeight(),
      sectionH = $("#section").innerHeight(),
      carouselH = $("#carousel").innerHeight(),
      scrollOffset = $(window).scrollTop(),
      summa = headerH + sectionH + carouselH
    
  /*Header fixed*/
  checkScroll(scrollOffset)
  
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    
    checkScroll(scrollOffset)
  })

  function checkScroll(scrollOffset) {
    if ( scrollOffset >= summa ) {
      section.addClass("fixed")
    } else {
      section.removeClass("fixed")
    }
  }

  /*Smooth scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $(this).addClass("active")

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500)
  })

  /*Menu nav toggle*/
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active")
    $("#nav").toggleClass("active")
    $("#section").toggleClass("active")
  })



})