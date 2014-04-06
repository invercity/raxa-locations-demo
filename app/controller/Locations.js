Ext.define("LocationsDemo.controller.Locations", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            mapButton: 'locationslistcontainer [name=mapButton]',
            menuButton: 'locationslistcontainer [name=menuButton]',
            list: 'locationslistcontainer [name=list]'
        },
        control: {
            mapButton: {
                tap: 'onMapButtonTap'
            },
            menuButton: {
                tap: 'onMenuTap'
            },
            list: {
                disclose: 'onLocationsListDisclose'
            }
        }
    },

    onMenuTap: function() {
        Ext.Viewport.child('mainmenu').toggle();
    },

    onMapButtonTap: function () {
        this.goToPlaceOnMap(new google.maps.LatLng(37.381592, -122.135672), 2);
        this.showMap();
    },

    showMap : function() {
        Ext.Viewport.animateActiveItem(Ext.Viewport.currentUi ,{ type: 'slide', direction: 'right' });
        Ext.Viewport.setActiveItem('mapcontainer');
    },

    goToPlaceOnMap : function(pos, zoom) {
        // get mapView
        var el = Ext.Viewport.child('mapcontainer');
        // get map link
        var map = el.items.getAt(1).getMap();
        // set center and zoom values
        map.setCenter(pos);
        map.setZoom(zoom);
    },

    onLocationsListDisclose: function (list, record, target, index, evt, options) {
        // check location coordinates
        if (record.data.latitude) {
            // create new place
            var position = new google.maps.LatLng(record.data.latitude, record.data.longitude);
            // focus map on this place
            this.goToPlaceOnMap(position, 14);
            // open map view
            this.showMap();
        }
        // show error message
        else Ext.Msg.alert('Error', 'Missing location coordinates', Ext.emptyFn);
    }
});