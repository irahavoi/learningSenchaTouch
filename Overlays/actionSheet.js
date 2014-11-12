
/** global Ext */
Ext.require([ 
 'Ext.ActionSheet',
]);

Ext.application({ 
	 launch : function() {
	 	var myActions = Ext.create('Ext.ActionSheet', {
	 		items : [
	 			{
					xtype : 'component',
					height : 50,
					style : 'color: #FFF; text-align: center; font-size: 1.2em;',
					html : 'What do you want to do?'
				},
				{
					text : 'Add to home screen',
					ui : 'confirm'
				},
				{
					text : 'Add bookmark'
				},
				{
					text : 'Meh, never mind!',
					ui : 'decline'
				}
	 		],
	 		defaults : {
				handler : function() {
					this.ownerCt.hide();
				}
			}
	 	});

	 	Ext.Viewport.add(myActions).show();
	 		
	 }

});