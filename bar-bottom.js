$(document).ready(function() {
  
  // header
  $(window).scroll(function() {
    
    // distance from top
    console.log($(window).scrollTop());

    // 100 is the height of the header. Change to actual height
    if ($(window).scrollTop() > 100) {
      $(".stepper").addClass("fixed");
    } else {
      $(".stepper").removeClass("fixed");
    }
  });
  

  // footer
  $(document).scroll(function() {
    
    // distance from bottom
    var distanceFromBottom = Math.floor(
      $(document).height() - $(document).scrollTop() - $(window).height()
    );
    console.log("distance from bottom is " + distanceFromBottom);
    
    // 500 is the height of the footer. Change to actual height
    if (distanceFromBottom < 500) {
      $(".bottom-nav").removeClass("btm-fixed");
    } else {
      $(".bottom-nav").addClass("btm-fixed");
    }
    
  });
  
});