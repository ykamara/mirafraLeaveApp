function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/menuBar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tableView = Ti.UI.createView({
        top: 0,
        left: 0,
        width: 240,
        id: "tableView"
    });
    $.__views.tableView && $.addTopLevelView($.__views.tableView);
    var __alloyId0 = [];
    $.__views.applyLeave = Ti.UI.createTableViewRow({
        color: "#ffffff",
        title: "Apply Leave",
        id: "applyLeave"
    });
    __alloyId0.push($.__views.applyLeave);
    $.__views.cancelLeave = Ti.UI.createTableViewRow({
        color: "#ffffff",
        title: "Cancel Leave",
        id: "cancelLeave"
    });
    __alloyId0.push($.__views.cancelLeave);
    $.__views.logout = Ti.UI.createTableViewRow({
        color: "#ffffff",
        title: "Logout",
        id: "logout"
    });
    __alloyId0.push($.__views.logout);
    $.__views.menu = Ti.UI.createTableView({
        separatorColor: "ffffff",
        backgroundColor: "#D96009",
        height: "100%",
        top: 0,
        data: __alloyId0,
        id: "menu"
    });
    $.__views.tableView.add($.__views.menu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var headerView = Ti.UI.createView({
        height: 44,
        width: "auto"
    });
    var headerLabel = Ti.UI.createLabel({
        text: "Employee Request",
        color: "ffffff"
    });
    headerView.add(headerLabel);
    $.menu.headerView = headerView;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;