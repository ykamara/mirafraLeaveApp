function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/rows/leaveStatusRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row",
        backgroundColor: "white",
        selectionStyle: "none"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.rowDetails = Ti.UI.createView({
        id: "rowDetails",
        layout: "horizontal",
        width: "100%",
        height: "100%"
    });
    $.__views.row.add($.__views.rowDetails);
    $.__views.leaveType = Ti.UI.createLabel({
        font: {
            fontSize: "8",
            fontWeight: "regular"
        },
        ellipsize: false,
        wordWrap: true,
        id: "leaveType",
        top: "10",
        bottom: "10",
        width: "30%",
        color: "black"
    });
    $.__views.rowDetails.add($.__views.leaveType);
    $.__views.total = Ti.UI.createLabel({
        font: {
            fontSize: "8",
            fontWeight: "regular"
        },
        ellipsize: false,
        wordWrap: true,
        id: "total",
        top: "10",
        bottom: "10",
        width: "20%",
        textAlign: "center"
    });
    $.__views.rowDetails.add($.__views.total);
    $.__views.available = Ti.UI.createLabel({
        font: {
            fontSize: "8",
            fontWeight: "regular"
        },
        ellipsize: false,
        wordWrap: true,
        id: "available",
        top: "10",
        bottom: "10",
        width: "20%",
        textAlign: "center"
    });
    $.__views.rowDetails.add($.__views.available);
    $.__views.unapproved = Ti.UI.createLabel({
        font: {
            fontSize: "8",
            fontWeight: "regular"
        },
        ellipsize: false,
        wordWrap: true,
        id: "unapproved",
        top: "10",
        bottom: "10",
        width: "30%",
        textAlign: "center"
    });
    $.__views.rowDetails.add($.__views.unapproved);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var params = arguments[0] || {};
    console.log(JSON.stringify(params.data));
    if ("header" === params.rowType) {
        $.row.height = 35;
        $.rowDetails.backgroundColor = "#D96009";
        $.addClass($.leaveType, "headerRowFont");
        $.addClass($.total, "headerRowFont");
        $.addClass($.available, "headerRowFont");
        $.addClass($.unapproved, "headerRowFont");
    } else $.row.height = 28;
    $.leaveType.text = " " + params.data.leaveType;
    $.total.text = params.data.totalLeaves;
    $.available.text = params.data.available;
    $.unapproved.text = params.data.unapproved;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;