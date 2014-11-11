
/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {

	 	Ext.create('Ext.TabPanel', { 
		 fullscreen : true,
		 ui : 'light',
		 tabBarPosition : 'bottom',
		 layout : {
 			pack : 'right',
 			animation: 'scroll',
 		},	 
		items : [
 {
 style : 'background-color: #FCC;',
 html : 'Panel 1',
 title : 'User',
 iconCls : 'user' 
 },
 {
 style : 'background-color: #CFC;',
 html : 'Panel 2',
 title : 'Groups',
 iconCls : 'team'
 },
 {
 style : 'background-color: #CCF;',
 html : 'Panel 3',
 title : 'Locations',
 iconCls : 'maps'
 },
 {
 style : 'background-color: #FFC;',
 html : 'Panel 4',
 title : 'Settings',
 iconCls : 'settings'
 }]		 
		 
	});	
	 		
	 }

});