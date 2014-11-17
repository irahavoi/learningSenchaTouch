
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

		Ext.define('MyApp.car.PremiumCar', {
			extend : 'MyApp.car.BaseCar',
			config : {
				turbo : true,
				wheels : 'premium',
				stereo : '5.1'
			},
			constructor : function() {
				this.callParent(arguments);
				this.setOctaneRequired(93);
			},
			applyEngine : function(engine) {
				return 'Turbo ' + engine;
			},
			drive : function() {

				console.log(this.getGear());
				if(this.getGear() == 'park'){
					console.log('Switch gears, dummy')
				} else{
					this.callParent();
					console.log('The turbo makes a big difference!');
				}
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


		var myFastCar = Ext.create('MyApp.car.PremiumCar');
		console.log('Initial state of the car:');
		console.log('Engine: ' + myFastCar.getEngine());
		console.log('Wheels: ' + myFastCar.getWheels());
		console.log('Octane Required: ' + myFastCar.getOctaneRequired());
		console.log('Stereo: ' + myFastCar.getStereo());
		console.log('Gear: ' + myFastCar.getGear());
		
		myFastCar.setGear('drive')
		myFastCar.drive();
		console.log(myFastCar.getEngine());
	} 
});