/**

var map;

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(36.964645, -122.01523),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.setTilt(45);
}

google.maps.event.addDomListener(window, 'load', initialize);

**/



(function() {
 	window.onload = function() {
 		//Mencari id=map
	 	var mapDiv = document.getElementById('map');
	 	//memanggil api google map dengan koordinat -7.795580, 110.369490
	 	var latlng = new google.maps.LatLng(-7.795580, 110.369490);
		var options = {
			zoom: 11,
			center: latlng,
			mapTypeId: google. maps. MapTypeId. ROADMAP,
		};
	 	//inisiasi peta
	 	var map = new google.maps.Map(mapDiv, options);
		// Defining different MarkerImages for different states
		var mosquee = new google.maps.MarkerImage(
			'img/mosquee.png',
			new google.maps.Size(30, 37),
			new google.maps.Point(0, 0),
			new google.maps.Point(16, 35)
		);
		var mosqueeHover = new google.maps.MarkerImage(
			'img/mosquee1.png',
			new google.maps.Size(32, 37),
			new google.maps.Point(3, 3),
			new google.maps.Point(16, 35)
		);

		 var mosqueeClick = new google.maps.MarkerImage(
			 'img/mosquee2.png',
			 new google.maps.Size(32, 37),
			 new google.maps.Point(3, 3),
			 new google.maps.Point(16, 35)
		 );
		 // Defining the shadow image for the marker
		 var shadow = new google.maps.MarkerImage(
			 'img/mosquee.png',
			 new google.maps.Size(51, 37),
			 new google.maps.Point(0, 0),
			 new google.maps.Point(16, 35)
		 );
	 	// Adding a marker to the map
		var marker = new google. maps. Marker({
			position: new google. maps. LatLng(-7.795580, 110.369490) ,
			map: map,
			title: 'Marker 1',
			icon: mosquee,
			shadow:shadow
		}) ;

		// Adding events that will alter the look of the marker
		// Hover
		google.maps.event.addListener(marker, 'mouseover', function() {
			this.setIcon(mosqueeHover);
		});
		google.maps.event.addListener(marker, 'mouseout', function() {
			this.setIcon(mosquee);
		});
		// Click
		google.maps.event.addListener(marker, 'mousedown', function() {
			this.setIcon(mosqueeClick);
		});
		google.maps.event.addListener(marker, 'mouseup', function() {
			this.setIcon(mosqueeHover);
		});

 	}
})();


