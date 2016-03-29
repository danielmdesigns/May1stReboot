// JavaScript Document
$(document).ready(function(){
"use strict";

$("#js-rm").on("click", function(e){
    e.preventDefault();
    $("article").slideToggle();
    $(this).text( $(this).text() === "Read Less" ? "Read More" : "Read Less");
});

$(".grid li > a > img").hover(function() {
	$(this).stop().animate({"opacity": "1"}, "slow");
},function() {
	$(this).stop().animate({"opacity": "0.7"}, "slow");
});

//$("img").on("click", function(){
//	alert("jQuery working");
//	$("main").load("project_temp.html");
//});
	
});