
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
			items : [
			{
				type : 'button',
				text : 'Goodies'
			},
			{
				xtype : 'spacer'
			},
			{ 
				xtype : 'textfield',
				width : 200
			},
			{
				xtype : 'button', 
				iconCls : 'search',
				ui : 'plain',
				iconMask : true
			},
			{
				xtype : 'button',
				iconCls : 'user',
				iconMask : true

			}

			]
		};

		var toolbarBottom = {
			xtype : 'toolbar',
			docked : 'bottom',
			items : [
			{
				type : 'button',
				text : '<< Left'
			},
			{ 
			 xtype : 'spacer'
			},
			{
			 xtype : 'segmentedbutton', 
			 items : [
				 {
				 	text : 'Yesterday'
				 },
				 {
				 	text : 'Today'
				 },
				 {
				 	text : 'Tomorrow'
				 }
			 ]
			 },
			 {
			 xtype : 'spacer' 
			 },
			{
				type : 'button',
				text : 'Right >>'
			}

			]
		};

		Ext.create('Ext.Panel', {
			fullscreen : true,
			style : 'background: #CCF;',
			html : 'Full screen panel',
			items : [toolbarTop, toolbarBottom]
		});	 	
	 		
	 }

});