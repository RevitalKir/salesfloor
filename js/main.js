$(document).ready(function (){
    "use strict";
console.log ("js is loaded")

/*fixt position on navigation when scrolling */
var $navBar = $('.top-navigation');
var navPos = $navBar.offset().top;
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > navPos) {
        $navBar.addClass('fixed-position');
    } else {
        $navBar.removeClass('fixed-position');
    }
});


/*shows the submenu of top navigation - on hover*/

if ($(window).width() >= 1025) {  

$( "li.top-navigation__list-item" ).hover(
     function() {
      $( this ).find( ".top-navigation__submenu" ).css('display', 'block');
    }, function(){
        $( this ).find( ".top-navigation__submenu" ).css('display', 'none');
    });
}


/* display serch form when clicking on search icon*/
$('.search-trigger-link').click(function(){
    $('.top-nav-block-search__form-wraper').css('display', 'block');
})  


/*search form function*/
  $('#search').keypress(function(e) {
  //Number 13 is the "Enter" key on the keyboard
    if(e.which == 13){
        var userQuery = $('#search').val();
        
        if(userQuery != ""){
        var url = "https://www.johnnywas.com/catalogsearch/result/?q="+userQuery
        //open url with the search query 
       window.location = url;
        }
    }
  });

  //click on close icon will close the serch form
  $('.top-nav-block-search__btn-search-close').click(function(){
    $('.top-nav-block-search__form-wraper').css('display', 'none');
  });



  $(".hamburger-menu-icon").click(function(){
    $(".page-wrapper").toggleClass("movebody");
    $('.collapse').toggleClass("move-left");
    $('.top-nav-block-search__form-wraper').toggleClass('hide');

});



});//end of use strict
  





 