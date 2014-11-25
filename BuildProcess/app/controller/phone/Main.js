Ext.define('myApp.controller.phone.Main', {
	extend: 'myApp.controller.Main',
	config : {
		//set up reusable animations objects
		anims : {
			next : {
				type : 'slide',
				direction : 'left'
			},
			previous : {
				type : 'slide',
				direction : 'right'
			}
		}
	},
	showContactDetails: function(record) {}
});