Ext.define('Contacts.PersonDetail', { 
 extend : 'Ext.form.Panel',
 xtype : 'persondetail', 
 config : { 
 items: [
 {
 xtype : 'fieldset', 
 defaults : { labelWidth : 100,  xtype : 'textfield' },
 items : [
 {
 xtype : 'textfield',
 label : 'First',
 name : 'firstname'
 },
 {
 label : 'Last',
 name : 'lastname'
 },
 {
 label : 'Street',
 name : 'street'
 },
 {
 label : 'City',
 name : 'city'
 },
 {
 label : 'State',
 name : 'state'
 },
 {
 label : 'Zip',
 name : 'zip',
 }
 ]
 },
 {
 xtype : 'toolbar',
 title : 'Person Details',
 docked : 'top'
 }
 ]
 }
});