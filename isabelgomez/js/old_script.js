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
		initialize();
	});
	$("#contactMenu").click(function(){
		$(this).removeClass("nonActiveLink").addClass("activeLink");
		$("#indexMenu, #aboutMenu, #locationMenu").removeClass("activeLink").addClass("NonActiveLink");
		$("#contact").removeClass("hide").addClass("show");
		$("#index, #about, #location").removeClass("show").addClass("hide");
	});
});

//Code from google API documentation and-> http://jsfiddle.net/aCx6L/
   function initialize() {
        var myLatLng = new google.maps.LatLng(42.2377, -8.7148336);
        var mapCanvas = document.getElementById('mapCanvas');
        var mapOptions = {
        center: new google.maps.LatLng(42.2377, -8.7148336),
        zoom: 15,
	        mapTypeControl: false,
	        panControl: false,
	        zoomControlOptions: {
	                    position: google.maps.ControlPosition.LEFT_CENTER
			},
	        streetViewControl: false,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
        var contentString =
            '<b>Isabel Gómez, psicóloga</b>' +
            '<p>52 Rosalía de Castro, Vigo</p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
        });

        google.maps.event.trigger(map, 'resize');

        google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map,marker);
        });
    }
