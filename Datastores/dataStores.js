
/** global Ext */
Ext.require([ 
 'Ext.data.Model'
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
		 		{ name : 'Mitchell Simoens', twitter : 'SenchaMitch' },
		 		{ name : 'Jay Garcia', twitter : 'ModusJeasus' },
		 		{ name : 'Anthony De Moss', twitter : 'ademoss1' }
		 	]
		});

		var remoteStore = Ext.create('Ext.data.Store', { 
			model : 'MyModel',
			autoLoad : true,
			proxy : { 
				type : 'ajax', 
				url : 'authors.php', 
				reader : { 
					type : 'json', 
					rootProperty : 'authors', 
					totalProperty : 'totalNumber' 
			 	}
			} 
		});

		Ext.create("Ext.List", {
		    fullscreen: true,
		    store: remoteStore,
		    itemTpl: "{name}, ({twitter})"
		});
	} 
});