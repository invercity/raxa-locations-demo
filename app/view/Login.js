/**
 * Created by invercity on 04.04.14.
 */
Ext.define("LocationsDemo.view.Login", {
    extend: 'Ext.Container',
    alias: "widget.logincontainer",
    config: {
        cls: 'login-view',
        scrollable: 'vertical',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype: 'component',
                cls: 'logo'
            },
            {
                xtype: 'formpanel',
                scrollable: true,
                items: [
                    {
                        xtype: 'component',
                        cls: 'shadow'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Email',
                        name: 'email',
                        cls: 'email'
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        name: 'password',
                        cls: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'login-btn',
                text: 'Log In'
            }
        ]
    }
});
