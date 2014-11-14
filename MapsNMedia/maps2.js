
/** global Ext */
Ext.require([ 
	'Ext.Map'

	]);

Ext.application({ 
	launch : function() {
		var onMapRender = function (touchMap) {
			var maps = google.maps,
			map = touchMap.getMap (),
			geo = touchMap.getGeo(), 
			lat = geo.getLatitude(),
			lng = geo.getLongitude(),
			coords = new maps.LatLng(lat, lng), 
			marker = new maps.Marker({ 
				position : coords,
				map : map
			}),
			infowindow = new maps.InfoWindow({ 
				content : 'This is the current location'
			});
			maps.event.addListener(marker, 'click', function() { 
				infowindow.open(map, marker); 
			});
		};
		
		new Ext.Map({
			fullscreen : true,
			autoUpdate : false,
			useCurrentLocation : true,
			listeners : {
				maprender : onMapRender,
				single : true
			}
		});
	} 
});