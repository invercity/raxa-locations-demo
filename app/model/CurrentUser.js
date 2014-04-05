/**
 * Created by invercity on 05.04.14.
 */
Ext.define('LocationsDemo.model.CurrentUser', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'},
            {name: 'loginTime', type: 'number'},
            {name: 'auth', type: 'string'}
        ],

        proxy: {
            type: 'localstorage',
            id: 'simple-login-data'
        }
    }
});