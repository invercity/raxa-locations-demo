Ext.define("LocationsDemo.controller.Locations", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            locationsListContainer: "locationslistcontainer"
        },
        control: {
            locationsListContainer: {
                // The commands fired by the notes list container.
                goToMap: "goToMapCommand",
                showItem: "showItemOnMapCommand"
            }
        }
    },

    // Commands.
    goToMap: function () {
        console.log("onNewNoteCommand");        
    },
   showItem: function (list, record) {
        console.log("onEditNoteCommand");
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        Ext.getStore("Locations").getProxy().setHeaders({Authorization: 'Basic cGl5dXNoZGFuZTpIZWxsbzEyMw=='});
        Ext.getStore("Locations").load();
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});