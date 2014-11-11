
/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {
	 	var topDock = { 
			 xtype : 'container',
			 docked : 'top', 
			 style : 'border-bottom: 1px solid; background-color: #F99;',
			 height : 100,
			 html : 'Top dock'
		 },
			 bottomDock = {
			 xtype : 'container',
			 docked : 'bottom',
			 style : 'border-top: 1px solid; background-color: #9F9;',
			 height : 100,
			 html : 'Bottom dock'
		 },
			 leftDock = {
			 xtype : 'container',
			 docked : 'left',
			 width : 100,
			 style : 'border-right: 1px solid; background-color: #99F;',
			 html : 'Left dock'
		 },
		 rightDock = {
			 xtype : 'container',
			 docked : 'right',
			 width : 100,
			 style : 'border-left: 1px solid; background-color: #FF9;',
			 html : 'Right dock'
		 };
		 
		var myPanel = Ext.create('Ext.Panel',{
		 fullscreen : true,
		 bodyStyle : 'padding: 10px;',
		 html : 'Panel content body',
		 items : [ 
			 leftDock,
			 rightDock,
			 topDock,
			 bottomDock
		 ]
		});
	 		
	 }

});