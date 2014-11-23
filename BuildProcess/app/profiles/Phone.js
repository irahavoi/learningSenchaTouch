Ext.define('myApp.profile.Phone', {
	extend: 'Ext.app.Profile',
	config: {
		controllers:[
		'Main'
		],
		views : [
		'Main'
		]
	},

	//this method should test user's device for compatibiliity with this profile
	isActive: function() {
		return true; // remove when testing on devices
		//return Ext.os.is('Phone');
	},
	launch: function() {
		Ext.create('App.view.phone.Main');
	}
});