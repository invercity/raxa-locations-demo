Ext.define("LocationsDemo.store.Locations", {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.Rest'
    ],
    config: {
        model: "LocationsDemo.model.Location",
        remoteFilter: true,
        proxy: {
            type: 'ajax',
            extraParams: {
                v: 'full',
                limit: 100,
                q: ''
            },
            url: 'https://api.raxa.io/ws/rest/v1/location',
            reader:{
                type: 'json',
                rootProperty: 'results'
            }
        },
        autoLoad: false
    }
});