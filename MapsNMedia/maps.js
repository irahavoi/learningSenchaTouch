
/** global Ext */
Ext.require([ 
	'Ext.Map'

	]);

Ext.application({ 
	launch : function() {
		Ext.create('Ext.Map', {
			fullscreen : true,
			useCurrentLocation : true, 
			mapOptions : { 
				mapTypeControl : true
			}
		});
	} 
});