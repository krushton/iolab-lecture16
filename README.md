<h1>Earthquake!</h1>
==============

<p>Practice with the Google Maps API<p>


<h3>Step 1</h3>
----------------------------------------
<p>Complete the initializeMap() function to initialize the map in the #map-canvas div. Where you center it is up to you - for example, New York City is 40.6700° N, 73.9400° W </p>

<p>Intermediate: Modify the map with custom styling.
See: http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html</p>

<h3>Step 2</h3>
----------------------------------------
<p>The processEarthquakes() function should have a list of recent earthquakes loaded from the USGS. Currently it just prints the data to the console.</p>

<p>For each earthquake, create a marker and put it on the map. Give each marker a title that contains the magnitude of the quake. See the following link for information about the structure of the data http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php</p>

<p>Intermediate: Use circles instead of markers, and make the radius of the circle correspond to the magnitude of the quake</p>

<p>Advanced: Create a heatmap instead
See: https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap</p>


<h3>Step 3</h3>
----------------------------------------
<p>Modify the code in processEarthquakes() so that clicking a marker displays an Info Window with details about the Earthquake.</p>
