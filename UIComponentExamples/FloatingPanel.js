/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.field.Text',
 'Ext.field.Checkbox'
]);

Ext.application({ 
	 launch : function() { 

	 	var floatingPanel = Ext.create('Ext.Panel', { 
			 height : 200,
			 width : 200,
			 draggable : true, 
			 floating : true, 
			 html : 'Some help could go here.',
			 left : 50, 
			 top : 50,
			 items : [
			 {
			 xtype : 'toolbar',
			 docked : 'top',
			 title : 'Drag me!'
	 	}
 		]});

	 	var fsPanel = Ext.create('Ext.Panel', {
			 fullscreen : true,
			 style : 'background-color: #CCF;',
			 html : 'Full screen Panel'
		});	

		Ext.Viewport.add(floatingPanel); 


	}
});