
/** global Ext */
Ext.require([ 
 'Ext.MessageBox'
]);

Ext.application({ 
	 launch : function() {
	 	Ext.Msg.confirm(
			"Are you sure?",
			"Think twice!",
			function(btnId, value, opts ){
				var title,
					message;
				if(btnId === 'no'){
					title = 'Meh';
					message = 'You choose poorly.';
				} else {
					title = 'Hooray';
					message = 'You choose wisely.';
				}
				Ext.Msg.show({
				title: title,
				message: message
			});
			}
		);
	} 
});