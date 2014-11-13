
/** global Ext */
Ext.require([ 
 'Ext.data.Model',
 'Ext.data.Store',
 'Ext.List',
 'Ext.MessageBox'
]);

Ext.application({ 
	 launch : function() {
	 	Ext.define('MyModel', { 
		 extend : 'Ext.data.Model',
		 config : {
			 fields : [ 
			 	'name',
			 	{ name : 'twitter', type : 'string' } 
			 ]
		 }
		});

		var localStore = Ext.create('Ext.data.Store', { 
			model : 'MyModel', 
		 	data : [ 
		 		{ name : 'Abraham Lincoln', twitter : 'lincoln' },
		 		{ name : 'Illia Rahavoi', twitter : 'elijahrium' },
		 		{ name : 'Indiana Jones', twitter : 'indie' },
		 		{ name : 'Nadzeya Rahavaya', twitter : 'egocenter' }
		 	],
		 	grouper : {
				groupFn : function(record) {
					return record.get('name')[0];
				}
			}
		});


		var list = Ext.create('Ext.dataview.List', {
			fullscreen : true,
			store : localStore,
			indexBar : true, 
			grouped : true, 
			onItemDisclosure : true, 
			itemTpl : [
		 		'{name} ',
		 		'<a href="http://www.twitter.com/{twitter}" target="_blank">',
		 			'{twitter}',
		 		'</a>'
		 	],
		 	listeners : {
		 		disclose : function(list, record) { 
		 			Ext.Msg.alert(
		 				'Author Tap',
		 				'You tapped on ' + record.get('name')
		 			);
		 	}
		 }
		});
	} 
});