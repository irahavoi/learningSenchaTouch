Ext.define('myApp.controller.Main', {
	extend: 'Ext.app.Controller',
	config : {
		//static references to instances of views
		refs : {
			mainView   : 'main',
            contacts   : 'contacts',
            details    : 'contactdetails'
		},
		control : {
			contacts : {
                select : 'onContactSelect'
            },
            main : {
                back : 'onMainBackButton'
            }
		},
		views : [
			'ContactsList',
			'ContactDetails'
		]
	},

	onContactSelect: function(list, record) {
        this.showContactDetails(record);
    },

    /**
     * Override for each profile
     */
    showContactDetails  : Ext.emptyFn,
    onMainBackButton    : Ext.emptyFn
});