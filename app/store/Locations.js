Ext.define("LocationsDemo.store.Locations", {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.Rest'
    ],
    config: {
        model: "LocationsDemo.model.Location",
        proxy: {
            type: 'ajax',
            url: 'https://api.raxa.io/ws/rest/v1/location?v=full&limit=100',
            reader:{
                type: 'json',
                root: 'results'
            }
        },
        autoLoad: false
    }
});