
/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {
	 	var handleAddButton = function () { 
		 var dockedItems = myPanel.getDockedItems();
			 myPanel.add({
				 xtype : 'container', 
				 docked : 'top',
				 style : 'border-bottom: 1px solid; background-color: #F99;',
				 height : 30,
				 html : 'Top dock: ' + dockedItems.length
			});
		};
		var handleRemoveButton = function () { 
			 var dockedItems = myPanel.getDockedItems(),
			 	 totalItems = dockedItems.length,
			 	 dockedItem;
			 
			 if (totalItems > 0) {
			 	dockedItem = myPanel.getDockedComponent(totalItems - 1);
			 	myPanel.remove(dockedItem, true); 
		 	}
		};

		var myPanel = Ext.create('Ext.Panel', { 
		 fullscreen : true,
		 bodyStyle : 'padding: 10px;',
		 layout : { 
		 type : 'vbox', 
		 pack : 'center' 
		 },
		 items : [
		 {
			 xtype : 'button',
		 	 text : 'Add top',
			 handler : handleAddButton
			 },
			 {
			 xtype : 'button',
			 text : 'Remove top',
			 handler : handleRemoveButton
			 }
			 ]
		});	
	 }

});