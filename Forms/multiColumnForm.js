
/** global Ext */
Ext.require([ 
	'Ext.data.Model',
	'Ext.data.Store',
	'Ext.List',
	'Ext.MessageBox'
	]);

Ext.application({ 
	launch : function() {
		var fieldset1 = {
			xtype : 'fieldset', 
			title : 'Personal Info', 
			instructions : 'Tell us who you are.' 
			+ '<br />The more detail the better', 
			items : [
			{
				xtype : 'textfield', 
				label : 'First',
				name : 'firstname',
				placeHolder : 'Enter your first name'
			},
			{
				xtype : 'textfield', 
				label : 'Last',
				name : 'lastname',
				placeHolder : 'Enter your last name'
			}
			]
		};

		var fieldset2 = { 
			xtype : 'fieldset',
			title : 'Party Info',
			instructions : 'Describe your party so people know what'
			+ ' they are attending',
			items : {
				xtype : 'textareafield',
				label : 'Description'
			}
		};	

		var fieldset3 = {
			xtype : 'fieldset', 
			title : 'Party Size',
			instructions : 'Tell us how many people you\'re bringing',
			items : [
			{

				xtype : 'radiofield',
				name : 'size',
				label : 'Just Me',
				value : 'small'
			},
			{
				xtype : 'radiofield',
				name : 'size',
				label : 'A few people', 
				value : 'medium'
			},
			{
				xtype : 'radiofield',
				name : 'size',
				label : 'What\'s my limit?',
				value : 'large'
			}
			]
		};

		var fieldset4 = { 
			xtype : 'fieldset',
			title : 'Dates',
			instructions : 'When is this happening?',
			items : {
				xtype : 'datepickerfield',
				label : 'Party Date',
				name : 'partydate'
			}
		};

		var myPanel = Ext.create('Ext.form.Panel', { 
			fullscreen : true,
			scrollable : 'vertical',
			layout : { 
				type : 'hbox',
				align : 'stretch'
			},
			defaults : { 
				flex : 1,
				style : 'padding: 5px;'
			},
			items : [
			{

				xtype : 'toolbar',
				title : 'Party Organizer 2000',
				docked : 'top'
			},
			{
				xtype : 'container', 
				items : [
				fieldset1, 
				fieldset2
				]
			},
			{
				xtype : 'container',
				items : [
				fieldset3,
				fieldset4
				]
			}
			]
		});
	} 
});