
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
				text : 'delete',
				iconCls : 'delete',
				iconAlign : 'left',
				ui : 'back'
			},
			{
				text : 'organize',
				iconCls : 'organize',
				iconAlign : 'right',
				ui : 'decline'
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
				iconCls : 'refresh',
				iconAlign : 'top',
				ui : 'plain'
			},
			{
				text : 'search',
				iconCls : 'search',
				ui : 'drastic',
				iconAlign : 'bottom'
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
			defaultType : 'button',
			defaults : {
				iconMask : true
			},
			layout : {
				type : 'hbox',
				pack : 'center',
				align: 'center'
			},
			items : [
				toolbarTop, 
				toolbarBottom,
				{ 
				 text : 'generic',
				 width : 150
				},{
				 text : 'compose', 
				 iconCls : 'compose',
				 iconAlign : 'right',
				 ui : 'action',
				 width : 150
				},{
				 text : 'star',
				 iconCls : 'star',
				 ui : 'confirm',
				 width : 150
				}
			]
		});	 	
	 		
	 }

});