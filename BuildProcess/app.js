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
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        Ext.Viewport.add(Ext.create('myApp.view.Main'));
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