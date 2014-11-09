/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.field.Text',
 'Ext.field.Checkbox'
]);

Ext.application({ 
	 launch : function() { 
	 	var loginContainer = Ext.create('Ext.Container', {
		 itemId : 'loginContainer',
		 fullscreen : true,
		 items : [
			 {
			 xtype : 'textfield',
			 label : 'Login',
			 placeHolder : 'Enter Username Here'
			 },
			 {
			 xtype : 'textfield',
			 label : 'Organization',
			 itemId : 'orgField',
			 placeHolder : 'Enter Your Organization Here'
			 },
			 {
			 xtype : 'textfield',
			 label : 'Password',
			 placeHolder : 'Enter Password Here'
			 }
		 ]
		});

	 	//Fetching the container by its' id:
		var container = Ext.ComponentQuery.query ('#loginContainer')[0];

		//Adding a new field dynamically at the end:
		container.add({
		 xtype : 'checkboxfield',
		 label : 'Remember'
		});

		//Inserting some html in the beginning:
		container.insert(0, {
		 html: '<h1>Please enter your credentials</h1>'
		});

		//Removing the organinzation field:
		container.remove(container.child('#orgField'));


	}
});