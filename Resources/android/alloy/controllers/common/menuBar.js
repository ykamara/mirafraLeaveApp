function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/menuBar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tableView = Ti.UI.createView({
        id: "tableView",
        top: "0",
        left: "0",
        width: "240"
    });
    $.__views.tableView && $.addTopLevelView($.__views.tableView);
    $.__views.menu = Ti.UI.createTableView({
        id: "menu",
        separatorColor: "ffffff",
        backgroundColor: "#D96009",
        height: "100%",
        top: "0"
    });
    $.__views.tableView.add($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;