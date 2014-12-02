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
        height: 44,
        backgroundColor: "#D96009",
        top: 0,
        left: 0,
        id: "navbar"
    });
    $.__views.navbar && $.addTopLevelView($.__views.navbar);
    $.__views.leftNavBtn = Ti.UI.createView({
        left: 0,
        width: 44,
        height: 44,
        id: "leftNavBtn"
    });
    $.__views.navbar.add($.__views.leftNavBtn);
    $.__views.left = Ti.UI.createImageView({
        image: "/common/menu.png",
        width: 36,
        height: 36,
        id: "left"
    });
    $.__views.leftNavBtn.add($.__views.left);
    $.__views.middleText = Ti.UI.createView({
        left: 10,
        id: "middleText"
    });
    $.__views.navbar.add($.__views.middleText);
    $.__views.midText = Ti.UI.createLabel({
        width: "100%",
        color: "white",
        textAlign: "center",
        text: "Employee Leave Status",
        id: "midText"
    });
    $.__views.middleText.add($.__views.midText);
    $.__views.rightNavBtn = Ti.UI.createView({
        right: 0,
        width: 44,
        height: 44,
        id: "rightNavBtn"
    });
    $.__views.navbar.add($.__views.rightNavBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;