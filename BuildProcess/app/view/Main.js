Ext.define('myApp.view.Main', {
    extend : 'Ext.Container',
    xtype : 'main',
    config : {
        fullscreen : true,
        items : {
            docked : 'top',
            xtype : 'toolbar',
            title : 'Contacts1'
        }
    },
    setTitle : function(title) {
        this.down('toolbar').setTitle(title);
    },
    initialize: function(){
    console.log('dddd');
}
});