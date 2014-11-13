
/** global Ext */
Ext.require([ 
 'Ext.data.Model',
 'Ext.data.Store',
 'Ext.List',
 'Ext.MessageBox'
]);

Ext.application({ 
	 launch : function() {
	 	var myForm = Ext.create('Ext.form.FormPanel', { 
		 fullscreen : true,
		 items : [
			{ 
				xtype : 'textfield',
				label : 'First',
	 			name : 'firstName',
 				placeHolder : 'Enter First Name Here'
 			},
 			{
 				xtype : 'textfield',
				label : 'Last',
				name : 'lastName',
				placeHolder : 'Enter Last Name Here'
 			},
 			{
 				xtype : 'selectfield',
				label : 'Status',
				name : 'inviteStatus',
				placeholder : 'nothing',
				options : [
				 {
				 	text : 'Undecided',
				 	value : 'undecided'
				 },
				 {
				 	text : 'Accepted',
				 	value : 'accept'
				 },
				 {
				 	text : 'Declined',
				 	value : 'decline'
				 }
				]
 			}
 		]	
	});
} 
});