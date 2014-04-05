/**
 * Created by invercity on 04.04.14.
 */
Ext.define('LocationsDemo.controller.Login', {
    extend : 'Ext.app.Controller',
    requires : ['Ext.form.FieldSet', 'Ext.field.Text', 'Ext.field.Password'],

    config : {

        loggedUserId: null,

        refs : {
            loginCt: 'logincontainer [name=login]',
            passwordCt: 'logincontainer [name=password]',
            loginButtonCt: 'logincontainer [name=loginButton]'
        },
        control : {
            'loginButtonCt' : {
                tap: 'onLoginTap'
            }
        }
    },
    onLoginTap: function() {
        Ext.Viewport.setActiveItem('locationslistcontainer');
    }
});