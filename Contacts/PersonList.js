Ext.define('Contacts.PersonList', { 
 extend : 'Ext.List',
 xtype : 'personlist', 
 requires : ['Contacts.PersonStore'], 
 config : {
 allowDeselect : false,
 itemTpl : '{lastname}, {firstname}',
 store : { 
 type : 'personstore'
 },
 items : [
 { 
 xtype : 'toolbar', 
 title : 'People',
 docked : 'top'
 }
 ]
 }
});