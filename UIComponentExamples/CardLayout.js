/** global Ext */
Ext.require([ 
 'Ext.Container',
 'Ext.Toolbar'
]);

Ext.application({ 
	 launch : function() {

	 		var handleNavigation = function(btn) { 
	 	 		console.log('nav');
				 var currentContainer = myContainer.getActiveItem(), 
				 innerItems = myContainer.getInnerItems(),
				 totalItems = innerItems.length,
				 currentIndex = innerItems.indexOf(currentContainer),
				 direction,
				 newIndex;

				 if (btn.getText() == 'Back') { 
					 direction = 'right';
					 newIndex = currentIndex > 0 
					 ? (currentIndex - 1) : (totalItems - 1);
				 }
				 else {
					 direction = 'left';
					 newIndex = currentIndex < (totalItems - 1) 
					 ? (currentIndex + 1) : 0;
				 }
				 myContainer.animateActiveItem(newIndex, {
				 type : 'slide',
				 direction : direction
				 });
			};


	 	 	var myContainer = Ext.create('Ext.Container', {
				 fullscreen : true, 
				 layout : {
					 type : 'card', 
					 animation : 'slide'
				 },
				 defaults : {
				 style : 'border: 1px solid blue;' 
				 },
				 items : [
					 {
						 xtype : 'toolbar',
						 docked : 'top',
						 title : 'Card Layout',
						 items : [
							 {
								 text : 'Back',
								 ui : 'back',
								 handler : handleNavigation 
							 },
							 { xtype : 'spacer' },
							 {
								 text : 'Forward',
								 ui : 'forward',
								 handler : handleNavigation
							 }
						 ]
					 },
					 {
						 html : 'Card 1',
						 style : 'background-color: #99F;'
					 },
					 {
						 html : 'Card 2',
						 style : 'background-color: #F99;'
					 },
					 {
						 html : 'Card 3',
						 style : 'background-color: #9F9;'
					 }
				 ]
				});
	 }

});