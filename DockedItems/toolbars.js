
/** global Ext */
Ext.require([ 
 'Ext.Panel',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {
		var toolbarTop = {
			xtype : 'toolbar',
			docked : 'top',
			title : 'User admin',
			items : [
			{
				type : 'button',
				text : 'Submit'
			},
			{
				type : 'button',
				text : 'Goodies'
			}

			]
		};

		var toolbarBottom = {
			xtype : 'toolbar',
			docked : 'bottom',
			title : 'TODO: add some buttons'
		};

		Ext.create('Ext.Panel', {
			fullscreen : true,
			style : 'background: #CCF;',
			html : 'Full screen panel',
			items : [toolbarTop, toolbarBottom]
		});	 	
	 		
	 }

});