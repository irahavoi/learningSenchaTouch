
/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {
	 	var buttonHandler = function() {
				Ext.Viewport.add({
				xtype : 'sheet',
				height : 130,
				hideOnMaskTap : true,
				hidden : true,
				enter : 'top',
				style : 'color:white; ',
				html : 'Place your additional information right here.'
				+ '<br />It can be multi line and everything!',
				items : {
				docked : 'bottom',
				xtype : 'button',
				text : 'Close',
				handler : function(button) {
						button.up('sheet').hide();
						}
					}
				}).show();
				};
		
		Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'center',
				pack : 'middle'
			},
			items : {
				xtype : 'button',
				text : 'Open the overlay',
				handler : buttonHandler
			}
		});
	 		
	 }

});