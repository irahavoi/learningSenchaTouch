
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
				placeHolder : 'Enter First Name Here',
			},
			{
				xtype : 'textfield',
				label : 'Last',
				name : 'lastName',
				placeHolder : 'Enter Last Name Here'
			},
			{
				xtype : 'emailfield',
				label : 'Email',
				value : 'youremail@yourcompany.com'
			},
			{
				xtype : 'passwordfield',
				label : 'Password',
				value : 'abc'
			},
			{
				xtype : 'urlfield',
				label : 'Url',
				value : 'http://www.senchatouchinaction.com'
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
			},
			{
				xtype : 'textareafield',
				label : 'Text Area',
				maxRows : 5,
				value: "This is a larger text area.\n\nWe can even get multiple lines in here"
			},
			{
				xtype : 'datepickerfield',
				label : 'Pick a Date',
				value : {
					year : 2011,
					month : 2,
					day : 23
				}
			},
			{
				xtype : 'spinnerfield',
				label : 'Spinner',
				minValue : 1,
				maxValue : 10,
				increment : 2,
				cycle : true,
				value : 9
			},
			{
				xtype : 'sliderfield',
				label : 'Slide me',
				minValue : 20,
				maxValue : 100,
				value : 50,
				increment : 5
			},
			{
				xtype : 'togglefield',
				label : 'Toggle Me',
				value : 1
			}	
			]	
		});
} 
});