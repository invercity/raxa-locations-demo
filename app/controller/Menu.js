/**
 * Created by invercity on 05.04.14.
 */
Ext.define("LocationsDemo.controller.Menu", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            menu: 'menucontainer',
            logoutButton: 'menucontainer [name=logoutButton]'
        },
        control: {
            logoutButton: {
                tap: 'onLogoutTap'
            }
        }
    },

    onLogoutTap: function() {
        // load user from model
        Ext.ModelMgr.getModel('LocationsDemo.model.CurrentUser').load(1, {
                // if OK
                success: function(user) {
                    var login = user.name;
                    // toogle menu
                    Ext.Viewport.child('mainmenu').toggle();
                    // show dialog
                    Ext.Msg.confirm('Confirm', 'Are you sure you want to log out?', function(confirmed) {
                        // if confirmed
                        if (confirmed == 'yes') {
                            // delete user from model
                            user.erase({
                                success: function() {
                                    // clear data from store
                                    Ext.getStore("Locations").data.clear();
                                    // logout app
                                    LocationsDemo.app.logOut({
                                        username: login
                                    });
                                }
                            });

                        }
                    }, this);
                },
                scope: this
            }
        );
    }
});
