Ext.define('myApp.store.Contacts', {
	extend : 'Ext.data.Store',
	alias : 'store.contacts',
	requires : ['myApp.model.Contact'],
	config : {
		model : 'myApp.model.Contact',
		data : [
		{
			id : 1,
			firstname : 'Illia',
			lastname : 'Rahavoi',
			phone : '204-869-1790'
		},
		{
			id : 2,
			firstname : 'Nadzeya',
			lastname : 'Rahavaya',
			phone : '204-869-1890'
		}
// More data in the downloadable example
]
}
});