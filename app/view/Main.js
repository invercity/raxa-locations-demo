var points = [];

Ext.define('LocationsDemo.view.Main', {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Search'],

    config: {
        ui: 'searchbar',
        layout: 'hbox',
        cls: 'big',
        items: [
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Search locations'
                    },
                    {
                        xtype: 'searchfield',
                        docked: 'top',
                        placeHolder: 'Search...'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'fit',
                style: 'width: 100%; height: 100%',
                items: [
                    {
                        xtype: 'map',
                        id : 'map',
                        useCurrentLocation : false,
                        initialize: function() {
                            var gMap = this.getMap();
                            $.ajax({
                                url : 'http://localhost:8080/openmrs/ws/rest/v1/location?limit=100&v=full',
                                datatype : 'JSON',
                                type: 'GET',
                                beforeSend: function(xhr){
                                    xhr.setRequestHeader('Authorization', "Basic " + window.btoa('piyushdane' + ":" + 'Hello123'));
                                },
                                success: function (res) {
                                    for (var i=0;i<res.results.length;i++) {
                                        var item = res.results[i];
                                        if ((item.longitude) && (item.latitude)) {
                                            console.log('!')
                                            var marker = new google.maps.Marker({
                                                position: new google.maps.LatLng(item.latitude, item.longitude),
                                                map: gMap
                                            });
                                            points.push(marker);
                                        }
                                    }
                                }
                            });
                            //}}]
                                /*alert(res);

                            })
                           /* Ext.Ajax.request({
                                url: 'http://localhost:8080/openmrs/ws/rest/v1/location',
                                method: 'GET',
                                callback: function(opt, suc, res) {
                                    console.log(res);
                                    var m = new google.maps.Marker({
                                        position: new google.maps.LatLng(0, 0),
                                        map: gMap
                                    });
                                    /*alert(res);
                                    for (var i=0;i<res.length;i++) {
                                        var item = res[i];
                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(item.latitude, item.longitude),
                                            map: gMap
                                        });
                                        points.push(marker);
                                    }
                                }
                            }); */
                        }
                    }
                ]
            }
        ]
    }
});
