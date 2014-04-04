/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.view.MapContainer", {
    extend: "Ext.Container",
    alias: "widget.mapcontainer",

    initialize: function () {

        var backButton = {
            xtype: "button",
            text: 'Back',
            ui: 'back',
            handler: this.onBackTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'Locations Map',
            docked: "top",
            items: [
                backButton
            ]
        };

        var mapdemo = Ext.create('Ext.Map', {
            mapOptions : {
                //center : new google.maps.LatLng(37.381592, -122.135672),
                zoom : 2,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },

            listeners: {
                maprender: function(comp, map) {
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
                        },
                        scope: this
                    })
                }

            }
        });
        this.add([topToolbar, mapdemo]);
    },
    onBackTap: function () {
        Ext.Viewport.animateActiveItem(Ext.Viewport.currentUi,{ type: 'slide', direction: 'left' });
        Ext.Viewport.setActiveItem(1);
    },
    config: {
        layout: {
            type: 'card'
        },
        animation: {
            type: 'slide',
            direction: 'right'
        }
    }
});
