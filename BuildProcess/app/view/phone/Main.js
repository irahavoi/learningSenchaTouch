Ext.define('myApp.view.phone.Main', {
	extend : 'myApp.view.Main',
	requires : [
	'Ext.layout.Card',
         'myApp.view.ContactsList'
	],
	config : {
		layout : 'card',
		control : {
			'button[ui=back]' : {
				tap : 'onMainBackButtonTap'
			}
		}
	},
	initialize : function() {
		console.log('init phone view')
		var me = this;
		me.add({
			xtype : 'contacts'
		});
		me.down('toolbar').add({
			xtype : 'button',
			text : 'Back',
			ui : 'back',
			hidden : false
		});
		console.log(me.down('toolbar'));
		me.callParent();
	},
	onMainBackButtonTap : function(btn) {
		this.fireEvent('back', this, btn);
	}
});