function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "common/navbar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.navbar = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "44",
        backgroundColor: "#D96009",
        top: "0",
        left: "0",
        id: "navbar"
    });
    $.__views.navbar && $.addTopLevelView($.__views.navbar);
    $.__views.leftNavBtn = Ti.UI.createView({
        id: "leftNavBtn",
        left: "0",
        width: "44",
        height: "44"
    });
    $.__views.navbar.add($.__views.leftNavBtn);
    $.__views.left = Ti.UI.createImageView({
        id: "left",
        image: "/common/menu.png",
        width: "36",
        height: "36"
    });
    $.__views.leftNavBtn.add($.__views.left);
    $.__views.middleText = Ti.UI.createView({
        id: "middleText",
        left: "10"
    });
    $.__views.navbar.add($.__views.middleText);
    $.__views.midText = Ti.UI.createLabel({
        text: "Mirafra Employee Handbook",
        id: "midText",
        width: "100%",
        color: "white",
        textAlign: "left"
    });
    $.__views.middleText.add($.__views.midText);
    $.__views.rightNavBtn = Ti.UI.createView({
        id: "rightNavBtn",
        right: "0",
        width: "44",
        height: "44"
    });
    $.__views.navbar.add($.__views.rightNavBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;