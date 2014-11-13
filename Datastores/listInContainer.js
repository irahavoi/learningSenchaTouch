
/** global Ext */
Ext.require([ 
 'Ext.data.Model',
 'Ext.data.Store',
 'Ext.List'
]);

Ext.application({ 
	 launch : function() {
	 	Ext.create('Ext.Container', { 
 			fullscreen : true,
 			scrollable : 'vertical', 
 			items : [
 				{
				 xtype : 'list',
				 scrollable : false,
				 height: 100, 
				 itemTpl : ''.concat(
 					'{name} ',
 					'<a href="http://www.twitter.com/{twitter}" target="_blank">',
 						'@{twitter}',
 					'</a>'),
	 			store : {
	 				fields : ['name', 'twitter'],
	 				data : [
					 { name : 'Illia', twitter : 'elijahrium' },
					 { name : 'Nadia', twitter : 'egocenter' },
					 { name : 'Someone else', twitter : 'unknown' }
	 				]
	 			}
 			},
 		    {
 				xtype : 'button', 
 				text : 'Load Next',
 				ui : 'confirm'
 			}]
});
	} 
});