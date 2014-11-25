//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'App': 'app'
});
//</debug>
Ext.application({
    models: ["Contact"],
    name: 'myApp',
    requires: [
    'Ext.MessageBox'
    ],
    profiles :  [
    'Phone'
    ],

    icon: {
        // Icons go here
    },
    isIconPrecomposed: true,
    startupImage: {
        // startup images go here
    },
    launch: function() {
        console.log('launched!');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        // Initialize the main view
        Ext.Viewport.add({
            xtype : 'main'
        });
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
            );
    }
});