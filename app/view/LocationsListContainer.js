Ext.define("LocationsDemo.view.LocationsListContainer", {
    extend: "Ext.Container",
    alias: "widget.locationslistcontainer",

    initialize: function () {
        // call parent
        this.callParent(arguments);
        // create toolbar
        var topToolbar = {
            xtype: "toolbar",
            //title: 'OpenMRS Locations',
            docked: "top",
            items: [
                {
                    iconCls: 'more',
                    name: 'menuButton'
                },
                {
                    xtype: 'searchfield',
                    placeHolder: 'Search by keywords...',
                    flex: 1
                },
                {
                    xtype: "button",
                    text: 'GoToMap',
                    ui: 'action',
                    name: 'mapButton'
                }
            ]
        };
        // create locations list
        var locationsList = {
            xtype: "locationslist",
            store: Ext.getStore("Locations"),
            name: 'list'
        };
        // add components to view
        this.add([topToolbar, locationsList/*, bottomToolbar*/]);
        // get configuration
        var config = this.getInitialConfig();
        // check hash and load data
        if (config.hash) {
            // if hash is set - load data from server
            Ext.getStore("Locations").getProxy().setHeaders({Authorization: config.hash});
            Ext.getStore("Locations").load();
        }
    },
    config: {
        layout: {
            type: 'card'
        },
        animation: {
            type: 'slide',
            direction: 'left'
        }
    }
});