Ext.define('Contacts.PersonModel', { 
 extend : 'Ext.data.Model', 
 config : { 
 fields : [ 
	 'city',
	 'firstname',
	 'lastname',
	 'middle',
	 'state',
	 'street',
	 'zip'
	 ]
 }
});