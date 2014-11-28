Ext.define('myApp.view.tablet.Main', {
	extend : 'myApp.view.Main',
	requires : [
	'Ext.layout.HBox'
	],
	config : {
		layout : {
			type : 'hbox',
			align : 'stretch'
		}
	},
	initialize : function() {
		var me = this;
		me.add([
		{
			xtype : 'contacts',
			flex : 1
		},
		{
			xtype : 'contactdetails',
			flex : 3
		}
		]);
		me.callParent();
		me.down('contactdetails').add({
			xtype : 'button',
			text : 'Save',
			ui : 'confirm',
			itemId : 'saveDetails',
			style : 'float: right; margin-right: 10px;',
			width : 100
		});
	}
});