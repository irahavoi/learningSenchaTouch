Ext.define('myApp.controller.tablet.Main', {
	extend: 'myApp.controller.Main',
	config : {
		control : {
			'button[itemId=saveDetails]' : {
				tap : 'onSaveButtonTap'
			}
		}
	},
	showContactDetails: function(record) {
		this.getDetails().setRecord(record);
	},
	onSaveButtonTap : function() {
		this.persistContact();
	}
});