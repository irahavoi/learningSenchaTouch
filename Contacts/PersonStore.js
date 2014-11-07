Ext.define('Contacts.PersonStore', { 
 extend : 'Ext.data.Store', 
 alias : 'store.personstore', 
 requires : [ 'Contacts.PersonModel' ], 
 config : { 
 autoLoad : true,
 model : 'Contacts.PersonModel', 
 proxy : {
 type : 'jsonp',
 url : 'http://extjsinaction.com/dataQuery.php', 
 extraParams: {
  limit: 20
 },
 reader : {
 type : 'json',
 rootProperty : 'records'
 }
 }
 }
});