
/** global Ext */
Ext.require([ 
 'Ext.Picker'
]);

Ext.application({ 
	 launch : function() {
	 	var myDatePicker = Ext.create('Ext.DatePicker', {
			yearFrom : 2010,
			yearTo : 2025,
			slotOrder : ['year', 'month', 'day'],
			value : {
			year : 2011,
			month : 7,
			day : 4
		}
	});
	Ext.Viewport.add(myDatePicker).show();	
	} 
});