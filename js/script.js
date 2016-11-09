/* Hamburger icon */
var hbMenuIcon = $('#menuIcon');
var dropDownMenu = $("#myDropdown");
var menuItem = $('.hbmenuitem');

hbMenuIcon.on('click', function(){
  $(this).toggleClass("change");
  dropDownMenu.toggleClass('show');

  
  $('.link-a').toggleClass('showItem');
  $('.link-b').toggleClass('showItem', 75);
  $('.link-c').delay(150).toggleClass('showItem', 150);
  $('.link-d').delay(225).toggleClass('showItem', 225);
  
  
});


/* Mobile portfolio imfo */
$('.print').on('click', function(){
  
  if($(this).children('.img_hover').hasClass('open')) {
    $(this).children('.img_hover').animate({
    'opacity': 0
    }, 500).removeClass('open');
  } else {
    $(this).children('.img_hover').animate({
    'opacity': 1
    }, 500).addClass('open');
  }
  
});