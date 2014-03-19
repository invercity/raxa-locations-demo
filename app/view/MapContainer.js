/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.view.MapContainer", {
    extend: "Ext.Container",
    alias: "widget.mapcontainer",

    initialize: function () {

        this.callParent(arguments);

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
                center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
                zoom : 12,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },
            mapListeners: {
                /*dragstart: function() {
                    var segmented = Ext.getCmp('segmented'),
                        pressedButtons = segmented.getPressedButtons().slice(),
                        trackingIndex = pressedButtons.indexOf(trackingButton);
                    if (trackingIndex != -1) {
                        pressedButtons.splice(trackingIndex, 1);
                        segmented.setPressedButtons(pressedButtons);
                    }
                }*/
            },

            listeners: {
                /*maprender: function(comp, map) {
                    var marker = new google.maps.Marker({
                        position: position,
                        title : 'Sencha HQ',
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                    setTimeout(function() {
                        map.panTo(position);
                    }, 1000);
                }
                */
            }
        });
        this.add([topToolbar, mapdemo]);
    },
    onBackTap: function () {
        Ext.Viewport.setActiveItem(0);
        //this.fireEvent("backToListCommand", this);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }
});
