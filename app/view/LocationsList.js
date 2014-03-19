Ext.define("LocationsDemo.view.LocationsList", {
    extend: "Ext.dataview.List",
    alias: "widget.locationslist",
    config: {
        loadingText: "Loading...",
        emptyText: "<div class=\"notes-list-empty-text\">No locations found.</div>",
        onItemDisclosure: true,
        itemTpl: "<div class=\"list-item-title\">{name}</div><div class=\"list-item-narrative\">{country}</div>"
    }
});