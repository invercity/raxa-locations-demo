/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.controller.Map", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype
            map: "mapcontainer"
        },
        control: {
            map: {

            }
        }
    },

    // Commands.
    com: function () {

    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent(arguments);
    }
});