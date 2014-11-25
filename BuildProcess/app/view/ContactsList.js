Ext.define('myApp.view.ContactsList', {
	extend : 'Ext.dataview.List',
	xtype : 'contacts',
	requires : [ 'myApp.store.Contacts' ],
	config : {
		itemTpl : '{firstname} {lastname}',
		store : {
			type : 'contacts'
		}
	}
});