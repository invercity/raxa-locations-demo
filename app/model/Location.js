/**
 * Created by invercity on 3/19/14.
 */
Ext.define("LocationsDemo.model.Location", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'uuid', type : 'string'},
            { name: 'display', type : 'string'},
            { name: 'name', type : 'string'},
            { name: 'description', type : 'string'},
            { name: 'address1', type : 'string'},
            { name: 'address2', type : 'string'},
            { name: 'cityVillage', type : 'string'},
            { name: 'stateProvince', type : 'string'},
            { name: 'country', type : 'string'},
            { name: 'postalCode', type : 'string'},
            { name: 'latitude', type : 'double'},
            { name: 'longitude', type : 'double'},
            { name: 'countyDistrict', type : 'string'},
            { name: 'address3', type : 'string'},
            { name: 'address4', type : 'string'},
            { name: 'address5', type : 'string'},
            { name: 'address6', type : 'string'}
        ],
        validations: []
    }
});