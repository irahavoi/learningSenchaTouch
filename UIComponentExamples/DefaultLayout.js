/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.field.Text',
 'Ext.field.Checkbox'
]);

Ext.application({ 
	 launch : function() { 
	 	var myContainer = Ext.create('Ext.Container', {
		 fullscreen : true, 
		 defaults : {
		 style : 'border: 1px solid blue;' 
		 },
		 items : [
		 {
		 docked : 'top',
		 xtype : 'toolbar',
		 title : 'Default Layout' 
		 },
		 {
		 docked : 'bottom',
		 xtype : 'toolbar', 
		 items : [
		 {
		 text : 'Add Child',
		 handler : function() {
		 myContainer.add({
		 xtype : 'container',
		 style : 'border: 1px solid blue;',
		 html : 'Child'
		 });
		 }
		 },
		 {
		 text : 'Add Fixed Width Child',
		 handler : function() {
		 myContainer.add({
		 xtype : 'container',
		 style : 'border: 1px solid blue;',
		 width : 100,
		 html : 'Fixed Child'
		 });
		 }
		 }
		 ]
		 },
		 {
		 html : 'First Child' 
		 },
		 {
		 html : 'Fixed Width Child',
		 width : 100
		 },
		 {
		 html : 'Child'
		 }
 ]
});


	}
});