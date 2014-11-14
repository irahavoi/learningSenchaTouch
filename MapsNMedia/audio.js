
/** global Ext */
Ext.require([ 
	'Ext.Map'

	]);

Ext.application({ 
	launch : function() {
		Ext.create('Ext.Audio', {
			fullscreen : true,
			url : 'MapsNMedia/creep.mp3', 
			autoResume : true, 
			loop : true, 
			volume : 0.5 
		});
	} 
});