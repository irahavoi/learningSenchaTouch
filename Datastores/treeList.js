
/** global Ext */
Ext.require([ 
 'Ext.data.Model',
 'Ext.data.Store',
 'Ext.List',
 'Ext.MessageBox'
]);

Ext.application({ 
	 launch : function() {
	 	Ext.define('Author', { 
		 extend : 'Ext.data.Model',
		 config : {
		 fields : [
		 'text', 
		 'link' 
		 ]
		 }
		});

		var store = Ext.create('Ext.data.TreeStore', { 
		 model : 'Author',
		 autoLoad : true,
		 proxy : {
		 type : 'ajax',
		 url : 'authors-tree.json' 
		 }
		});

		var nestedlist = Ext.create('Ext.dataview.NestedList', { 
		 fullscreen : true,
		 store : store, 
		 title : 'Authors' 
		});
	} 
});