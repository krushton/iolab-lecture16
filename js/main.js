$(document).ready(function() {

	//global variable _map stores map object
	_map = initializeMap();
	loadData();

});


function initializeMap() {
	//return map object
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
	//add markers to _map
}
