$(document).ready(function() {

	_map = initializeMap();
	_openWindow = null;
	loadData();
	test = [];
	_markers = [];

});


function initializeMap() {
	
	var berkeley = new google.maps.LatLng(37.5218, -122.1618);
	var mapOptions = {
	    center: berkeley,
	    zoom: 4,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    styles: [
				  {
				    "stylers": [
				      { "invert_lightness": true }
				    ]
				  }
				]
	};
	return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}


function loadData() {
	var script = document.createElement('script');
  	script.src = 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/2.5/week';
  	var s = document.getElementsByTagName('script')[0];
  	s.parentNode.insertBefore(script, s);

  	window.eqfeed_callback = function(results) {
	  processEarthquakes(results);
	}
}

function processEarthquakes(data) {
	console.log(data);
	for (var i = 0; i < data.features.length; i++) {
		createMarker(data.features[i]);

	}
	
}

function createMarker(quake) {

		
		var lat = quake.geometry.coordinates[0];
		var lon = quake.geometry.coordinates[1];
		var location = new google.maps.LatLng(lat, lon);
		var magnitude = quake.properties.mag;

		var color = getMarkerColor(magnitude);
		var circle = {
      		path: google.maps.SymbolPath.CIRCLE,
      		fillColor: color,
      		fillOpacity: 0.3,
      		strokeColor:color,
      		strokeOpacity:.9,
      		scale: magnitude * 2
    	};


		var markerOptions = {
			position: location,
			map: _map,
			title: magnitude+'',
			icon: circle
		};



		var marker = new google.maps.Marker(markerOptions);
		var infowindow = new google.maps.InfoWindow({
        content: '<div class="infocontent"><h4>' + quake.properties.place + '</h4>' +
        '<p>Magnitude: ' + quake.properties.mag + '</p>' + 
        '<p>Date/time: ' + (new Date(quake.properties.time*1000)) + '</p>' + 
        '</div>;'
    	});

	    google.maps.event.addListener(marker, 'click', function() {
	        if (_openWindow != null) {
	            _openWindow.close();
	        }

	        infowindow.open(_map, marker);
	        _openWindow = infowindow;
	    });

	    _markers.push(marker);
}

function getMarkerColor(magnitude) {
	if (magnitude > 6) {
		return "#fc3535" //red
	}
	if (magnitude > 4) {
		return "#fce135" //yellow
	}
	return "#3cfc35" //green
}