// JavaScript Document
$(document).ready(function(){
"use strict";

//READ MORE
$("#js-rm").on("click", function(e){
    e.preventDefault();
    $(".is-hidden").slideToggle(800);
    $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
});

//GALLERY MOUSE HOVER
$(".grid li > a > img").hover(function(){
	$(this).stop().animate({"opacity": "1"}, "slow");
},function(){
	$(this).stop().animate({"opacity": "0.7"}, "slow");
});

//BACK TO TOP
$("#js-top").on("click", function(){
  if($(window).scrollTop() > 0){
	$("html, body").animate({scrollTop: 0}, 1500);
	return false;
  }else{
	//alert("I'm already at the top bro!");
  }
});
	
});