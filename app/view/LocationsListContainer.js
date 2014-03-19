Ext.define("LocationsDemo.view.LocationsListContainer", {
    extend: "Ext.Container",
    alias: "widget.locationslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var mapButton = {
            xtype: "button",
            text: 'GoToMap',
            ui: 'action',
            handler: this.onMapButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'OpenMRS Locations',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                mapButton
            ]
        };

        var locationsList = {
            xtype: "locationslist",
            store: Ext.getStore("Locations"),
            listeners: {
                disclose: { fn: this.onLocationsListDisclose, scope: this }
            }
        };
        this.add([topToolbar, locationsList]);
    },
    onMapButtonTap: function () {
        Ext.Viewport.setActiveItem(2);
        //this.fireEvent("goToMapCommand", this);
    },
    onLocationsListDisclose: function (list, record, target, index, evt, options) {
        this.fireEvent('showItemOnMapCommand', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }
});