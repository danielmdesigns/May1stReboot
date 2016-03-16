// JavaScript Document
$(document).ready(function(){
"use strict";

$("#js-rm").on("click", function(e){
    e.preventDefault();
    $("article").slideToggle();
    $(this).text( $(this).text() === "Read Less" ? "Read More" : "Read Less");
});
	
});