/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Panel'
]);

Ext.application({ 
	 launch : function() { 

      var button = Ext.create('Ext.Button', {
      text: 'Button',
      handler : function(){
	 var panel = Ext.ComponentQuery.query("#floatingPanel")[0];
         if(panel.isHidden()){
	   panel.show();
	 } else{
	   panel.hide();
	 }
      },
      id: 'rightButton'
 });

 Ext.create('Ext.Container', {
     fullscreen: true,
     items: [
         {
              docked: 'top',
              xtype: 'titlebar',
              items: [
                  button
              ]
          }
     ]
 });

Ext.create('Ext.Panel', {
     html: 'Floating Panel',
     id : 'floatingPanel', 
     left: 0,
     padding: 10
 }).showBy(button); 


	}
});