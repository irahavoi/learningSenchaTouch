Ext.define('myApp.profile.Tablet', {
	extend: 'Ext.app.Profile',
	config: {
		controllers:[
		'Main'
		],
		views : [
		'Main'
		]
	},
	isActive: function() {
return true; // remove before production build
return Ext.os.is('Tablet') || Ext.os.is('Desktop');
},
launch: function() {
	Ext.create('myApp.view.tablet.Main');
}
});