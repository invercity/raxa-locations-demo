Ext.define("LocationsDemo.view.LocationsListContainer", {
    extend: "Ext.Container",
    alias: "widget.locationslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'OpenMRS Locations',
            docked: "top",
            items: [
                {
                    iconCls: 'more',
                    name: 'menuButton'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: "button",
                    text: 'GoToMap',
                    ui: 'action',
                    name: 'mapButton'
                }
            ]
        };

        var locationsList = {
            xtype: "locationslist",
            store: Ext.getStore("Locations"),
            name: 'list'
        };
        this.add([topToolbar, locationsList]);
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