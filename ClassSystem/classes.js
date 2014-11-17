
/** global Ext */
Ext.require([ 
	'Ext.Map'

	]);

Ext.application({ 
	launch : function() {
		Ext.define('MyApp.car.BaseCar',{
			extend : 'Ext.Component',
			requires : 'Ext.Component',
			config : {
				octaneRequired : null,
				gear : null,
				engine : 'I4',
				turbo : false,
				wheels : 'basic'
			},
			constructor : function() {
				this.callParent();
				this.setOctaneRequired(86);
				this.setGear('park');
			},
			drive : function() {
				console.log("Vrrrrooooooom - I'm driving!");
			}
		});

		var mySlowCar = Ext.create('MyApp.car.BaseCar');
		console.log('Initial state of the car:');
		console.log('Engine: ' + mySlowCar.getEngine());
		console.log('Wheels: ' + mySlowCar.getWheels());
		console.log('Octane Required: ' + mySlowCar.getOctaneRequired());
		console.log('Gear: ' + mySlowCar.getGear());
		
		mySlowCar.setGear('drive')
		mySlowCar.drive();
		console.log(mySlowCar.getEngine());
	} 
});