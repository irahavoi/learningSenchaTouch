Ext.define('myApp.view.Main', {
    extend : 'Ext.Container',
    xtype : 'main',
    config : {
        fullscreen : true,
        items : {
            docked : 'top',
            xtype : 'toolbar',
            title : 'My Contacts'
        }
    },
    setTitle : function(title) {
        this.down('toolbar').setTitle(title);
    }
});