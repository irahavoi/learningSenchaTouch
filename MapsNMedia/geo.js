
/** global Ext */
Ext.require([ 
	'Ext.util.Geolocation'

	]);

Ext.application({ 
	launch : function() {
		var geo = new Ext.util.Geolocation({ 
			allowHighAccuracy : true, 
			listeners : {
				locationupdate : function(geo) { 
					console.log('New latitude: ' + geo.getLatitude());
					console.log('New longitude: ' + geo.getLongitude());
				},
				locationerror : function(geo, timeout) { 
					if (timeout){
						console.log('Timeout occurred.');
					} else {
						console.log('Error occurred.');
					}
				}
			}
		});
		geo.updateLocation(); 
	} 
});