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

