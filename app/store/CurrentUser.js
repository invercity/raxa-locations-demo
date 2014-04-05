/**
 * Created by invercity on 05.04.14.
 */
Ext.define('LocationsDemo.store.CurrentUser', {
    extend: 'Ext.data.Store',

    config: {
        model: 'LocationsDemo.model.CurrentUser',
        autoLoad: false
    }
});