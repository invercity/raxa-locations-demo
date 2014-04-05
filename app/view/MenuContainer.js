/**
 * Created by invercity on 05.04.14.
 */
Ext.define('LocationsDemo.view.MenuContainer',{
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    alias: "widget.menucontainer",
    config: {
        cls: 'mainmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 266,
        padding: '97 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: [{
            text: 'Item #1',
            ui: 'mainmenu',
            iconCls: 'ico'
        },{
            text: 'Item #2',
            ui: 'mainmenu',
            iconCls: 'ico'
        },{
            text: 'Options',
            ui: 'mainmenu',
            href: '#options',
            iconCls: 'ico-options'
        },
        {
            xtype: 'component',
            cls: 'divider'
        },{
            text: 'Logout',
            ui: 'mainmenu',
            name: 'logoutButton',
            iconCls: 'ico-logout'
        }]
    },
    setParent: function(parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype   : 'component',
            cls     : 'mainmenu-mask',
            top     : 0,
            zIndex  : 5000,
            hidden  : true,
            width   : 9999,
            left    : this.getWidth(),
            bottom  : 0
        });

        this.maskCmp.element.on({
            scope   : this,
            touchend: 'onMaskRelease'
        });
    },

    onMaskRelease: function() {
        this.setOpen(false);
    },

    onDestroy: function() {
        this.maskCmp.destroy();
        delete this.maskCmp;

        this.callParent(arguments);
    },

    toggle: function() {
        this.setOpen(!this.getOpen());
    },

    updateOpen: function(open) {
        var targetEl,
            parentCt = this.up();

        if (!parentCt) {
            return;
        }

        targetEl = parentCt.innerElement;

        if (open) {
            targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});
