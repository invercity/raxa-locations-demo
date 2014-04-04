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
        this.goToPlaceOnMap(new google.maps.LatLng(37.381592, -122.135672), 2);
        this.showMap();
        //this.fireEvent("goToMapCommand", this);
    },
    showMap : function() {
        Ext.Viewport.animateActiveItem(Ext.Viewport.currentUi ,{ type: 'slide', direction: 'right' });
        Ext.Viewport.setActiveItem(2);
    },
    goToPlaceOnMap : function(pos, zoom) {
        // get map
        var el = Ext.Viewport.items.getAt(2);
        var map = el.items.getAt(1).getMap();
        map.setCenter(pos);
        map.setZoom(zoom);
    },
    onLocationsListDisclose: function (list, record, target, index, evt, options) {
        if (record.data.latitude) {
            var position = new google.maps.LatLng(record.data.latitude, record.data.longitude);
            this.goToPlaceOnMap(position, 14);
            this.showMap();
        }
        else Ext.Msg.alert('Error', 'Missing location coordinates', Ext.emptyFn);
        //this.fireEvent('showItemOnMapCommand', this, record);
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