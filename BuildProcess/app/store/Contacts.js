Ext.define('myApp.store.Contacts', {
	extend : 'Ext.data.Store',
	alias : 'store.contacts',
	requires : ['App.model.Contact'],
	config : {
		model : 'App.model.Contact',
		data : [
		{
			id : 1,
			firstname : 'Illia',
			lastname : 'Rahavoi',
			phone : '394-953-4537'
		},
		{
			id : 2,
			firstname : 'Nadzeya',
			lastname : 'Rahavaya',
			phone : '357-642-3162'
		}
// More data in the downloadable example
]
}
});