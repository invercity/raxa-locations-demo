/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.controller.Map", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            map: "mapcontainer [name=map]",
            backButton: 'mapcontainer [name=backButton]'
        },
        control: {
            map: {
                maprender: 'onMapRender'
            },
            backButton: {
                tap: 'onBackTap'
            }
        }
    },
    onMapRender: function(comp, map) {
        var store = Ext.getStore("Locations");
        store.load({
            callback: function(records, operation, success) {
                store.each(function(element) {
                    if (element.data.latitude) {
                        var pos = new google.maps.LatLng(element.data.latitude, element.data.longitude);
                        var image = 'resources/icons/heart2.png';
                        var marker = new google.maps.Marker({
                            position: pos,
                            title : element.data.name,
                            icon: image,
                            map: map
                        });
                        google.maps.event.addListener(marker, 'click', function(event) {
                            Ext.Msg.alert('Info', 'Location name: ' + element.data.name, Ext.emptyFn);
                        });
                    }
                });
            }
        })
    },
    onBackTap: function () {
        Ext.Viewport.animateActiveItem(Ext.Viewport.currentUi,{ type: 'slide', direction: 'left' });
        Ext.Viewport.setActiveItem('locationslistcontainer');
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
    }
});