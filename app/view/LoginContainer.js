/**
 * Created by invercity on 04.04.14.
 */
Ext.define("LocationsDemo.view.LoginContainer", {
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
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'formpanel',
                scrollable: null,
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Login',
                                name: 'login',
                                id: 'loginField',
                                required: true,
                                cls: 'login'
                            },
                            {
                                xtype: 'passwordfield',
                                placeHolder: 'Password',
                                name: 'password',
                                required: true,
                                cls: 'password'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'loginButton',
                cls: 'login-btn',
                text: 'Log In'
            }
        ]
    },
    initialize: function() {
        this.callParent(arguments);
        var config = this.getInitialConfig();
        // check it in future
        if (config.username) {
            this.getById('loginField').setValue(config.username);
        }
    }
});
