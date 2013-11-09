//Lovely Javascript goes in here
$(document).ready(function(){
	$("#indexMenu").click(function(){
		$(this).removeClass("nonActiveLink").addClass("activeLink");
		$("#aboutMenu, #locationMenu, #contactMenu").removeClass("activeLink").addClass("NonActiveLink");
		$("#index").removeClass("hide").addClass("show");
		$("#about, #location, #contact").removeClass("show").addClass("hide");
	});
	$("#aboutMenu").click(function(){
		$(this).removeClass("nonActiveLink").addClass("activeLink");
		$("#indexMenu, #locationMenu, #contactMenu").removeClass("activeLink").addClass("NonActiveLink");
		$("#about").removeClass("hide").addClass("show");
		$("#index, #location, #contact").removeClass("show").addClass("hide");
	});
	$("#locationMenu").click(function(){
		$(this).removeClass("nonActiveLink").addClass("activeLink");
		$("#indexMenu, #aboutMenu, #contactMenu").removeClass("activeLink").addClass("NonActiveLink");
		$("#location").removeClass("hide").addClass("show");
		$("#index, #about, #contact").removeClass("show").addClass("hide");
	});
	$("#contactMenu").click(function(){
		$(this).removeClass("nonActiveLink").addClass("activeLink");
		$("#indexMenu, #aboutMenu, #locationMenu").removeClass("activeLink").addClass("NonActiveLink");
		$("#contact").removeClass("hide").addClass("show");
		$("#index, #about, #location").removeClass("show").addClass("hide");
	});
});