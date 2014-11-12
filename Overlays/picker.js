
/** global Ext */
Ext.require([ 
 'Ext.Picker'
]);

Ext.application({ 
	 launch : function() {
	 	var myPicker = Ext.create('Ext.Picker', {
	 		useTitles : true,
			hidden : true,	
			slots : [
				{
					name : 'agegroup',
					title : 'Age group (years old)',
					data : [
						{ text: '1 - 10', value: 1 },
						{ text: '11 - 14', value: 2 },
						{ text: '15 - 18', value: 3 },
						{ text: '19 - 24', value: 4 },
						{ text: '25 - 31', value: 5 },
						{ text: '32 - 40', value: 6 },
						{ text: '41 - 50', value: 7 },
						{ text: '51 - 75', value: 8 },
						{ text: '75 - 100+', value: 9 }
					]
				}
			]	
	 });

	 Ext.Viewport.add(myPicker).show();	
	} 
});