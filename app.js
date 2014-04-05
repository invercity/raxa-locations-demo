Ext.application({
    // session timeout = 1 hour;
    sessionTimeout: 1000 * 60 * 60 * 1,
    name: "LocationsDemo",
    requires: [
        'Ext.MessageBox'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },
    isIconPrecomposed: true,
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    models: ["Location", "CurrentUser"],
    stores: ["Locations", "CurrentUser"],
    controllers: ["Locations", "Map", "Login", "Menu"],
    views: ["LocationsList", "MapContainer", "LocationsListContainer" ,"LoginContainer", "MenuContainer"],

    launch: function () {
        // enable loader config
        Ext.Loader.setConfig({enabled: true});
        // add additional css
        Ext.Viewport.innerElement.addCls('viewport-inner');
        // destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // check login form
        var loginContainer = Ext.Viewport.child('logincontainer');
        // if it is not created before
        if (!loginContainer) {
            // create it
            loginContainer = Ext.create('LocationsDemo.view.LoginContainer');
            // add to viewport
            Ext.Viewport.add(loginContainer);
        }
    },

    logIn: function(config) {
        // remove previous views
        Ext.Viewport.removeAll();
        // locations
        var locationsContainer;
        // check config
        if (config) locationsContainer = Ext.create('LocationsDemo.view.LocationsListContainer', config);
        // if there no config - create list without config
        else locationsContainer = Ext.create('LocationsDemo.view.LocationsListContainer');
        // create other views
        var mapContainer = Ext.create('LocationsDemo.view.MapContainer');
        var menuContainer = Ext.create('LocationsDemo.view.MenuContainer');
        // add created views
        Ext.Viewport.add(locationsContainer);
        Ext.Viewport.add(menuContainer);
        Ext.Viewport.add(mapContainer);
        // set locations as active item
        Ext.Viewport.setActiveItem(locationsContainer);
    },

    logOut:function(config) {
        // create login view
        var loginContainer = Ext.create('LocationsDemo.view.LoginContainer', config);
        // remove other views
        Ext.Viewport.removeAll();
        // add login view
        Ext.Viewport.add(loginContainer);
        // set login view as active item
        Ext.Viewport.setActiveItem(loginContainer);
    }
});