
// Smooth scrolling from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// If checked, write hide instead of show



// Change navigation links depending on page-position 
$(window).scroll(function (){
  if($("#home").offset().top - $(window).scrollTop()>0){
    $('nav') > $('a').removeClass("current");
  }
  else if($("#research").offset().top - $(window).scrollTop()>90){
    $('nav') > $('a').removeClass("current");
    $('nav') > $('a[href$="#home"]').addClass("current");
  }
  else if($("#cv").offset().top - $(window).scrollTop()>90){
    $('nav') > $('a').removeClass("current");
    $('nav') > $('a[href$="#research"]').addClass("current");  
  } else if($("#contact").offset().top - $(window).scrollTop()>90){
    $('nav') > $('a').removeClass("current");
    $('nav') > $('a[href$="#cv"]').addClass("current");
  } else{
    $('nav') > $('a').removeClass("current");
    $('nav') > $('a[href$="#contact"]').addClass("current");
  }
});
