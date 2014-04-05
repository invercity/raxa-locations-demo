/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.view.MapContainer", {
    extend: "Ext.Container",
    alias: "widget.mapcontainer",

    initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'Locations Map',
            docked: "top",
            items: [
                {
                    xtype: "button",
                    text: 'Back',
                    ui: 'back',
                    name: 'backButton'
                }
            ]
        };

        var mapdemo = Ext.create('Ext.Map', {
            name: 'map',
            mapOptions : {
                zoom : 2,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            }
        });
        this.add([topToolbar, mapdemo]);
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
