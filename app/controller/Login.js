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
            loginButtonCt: 'logincontainer [name=loginButton]',
            loginWaitCt: 'logincontainer [name=signInWait]',
            loginFailedCt: 'logincontainer [name=signInFailed]'
        },
        control : {
            loginButtonCt : {
                tap: 'onLoginTap'
            }
        }
    },

    checkCredentials: function(username, password, callback) {
        var _this = this;
        // check if all fields are set
        var checked = !Ext.isEmpty(password) && !Ext.isEmpty(username);
        // if check ok
        if (checked) {
            // make hash
            var hash = 'Basic '+ Base64.encode(username + ':' + password);
            // set headers, and try to load
            Ext.getStore("Locations").getProxy().setHeaders({Authorization: hash});
            Ext.getStore("Locations").load({callback: function(records, operation, success) {
                // hide wait indicator
                _this.getLoginWaitCt().setHidden(true);
                // change text
                // change text
                _this.getLoginButtonCt().setHidden(false);
                // if load success - login is OK
                if (!success) _this.handleLoginFailure();
                // if not - login failure
                else _this.handleLoginSuccess(username, hash);
            }});
        }
        // maybe replace it with Msg
        else {
            _this.getLoginWaitCt().setHidden(true);
            _this.handleLoginFailure();
        }
    },

    onLoginTap: function() {
        var _this = this;
        // get items
        var login = this.getLoginCt();
        var pass = this.getPasswordCt();
        // show wait
        this.getLoginWaitCt().setHidden(false);
        // change text
        this.getLoginButtonCt().setHidden(true);
        // check login & pass
        this.checkCredentials(login.getValue(), pass.getValue());
    },

    handleLoginSuccess: function(login, hash) {
        // create user
        var user = Ext.create('LocationsDemo.model.CurrentUser', {
            id: 1,
            auth: hash,
            name: login,
            loginTime: (new Date()).valueOf()
        });
        // save user
        user.save({
            success: function() {
                // login user
                this.logUserIn();
            }
        }, this);
    },

    handleLoginFailure : function() {
        // get password item
        var passwordCt = this.getPasswordCt();
        // clear it
        passwordCt.setValue('');
        // make alert message
        Ext.Msg.alert('Error', 'Incorrect authorization data', Ext.emptyFn);
    },

    logUserIn : function(savedCurrentUser) {
        // login app
        if (savedCurrentUser) LocationsDemo.app.logIn({
            hash: savedCurrentUser.get('auth')
        });
        else LocationsDemo.app.logIn();
    },
    launch: function() {
        var _this = this;
        // try to load saved user
        Ext.ModelMgr.getModel('LocationsDemo.model.CurrentUser').load(1, {
            scope : this,
            success : function(cachedLoggedInUser) {
                delete cachedLoggedInUser.phantom;
                // fill up the store.
                var store = Ext.getStore('CurrentUser');
                store.add(cachedLoggedInUser);

                var prevLoginTime = cachedLoggedInUser.get('loginTime'),
                    now = new Date(),
                    interval = now - prevLoginTime;

                if (interval <= LocationsDemo.app.sessionTimeout) _this.logUserIn(cachedLoggedInUser);
                // if timeout - logout user
                else LocationsDemo.app.logOut({
                    username: cachedLoggedInUser.get('name')
                });
            }
        });
    }
});