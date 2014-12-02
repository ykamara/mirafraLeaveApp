function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        fullscreen: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menubar = Alloy.createController("common/menuBar", {
        id: "menubar",
        __parentSymbol: $.__views.index
    });
    $.__views.menubar.setParent($.__views.index);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "white"
    });
    $.__views.index.add($.__views.mainView);
    $.__views.topbar = Alloy.createController("common/navbar", {
        id: "topbar",
        __parentSymbol: $.__views.mainView
    });
    $.__views.topbar.setParent($.__views.mainView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isNavBtnActive = false;
    $.topbar.leftNavBtn.addEventListener("click", function() {
        isNavBtnActive = !isNavBtnActive;
        $.mainView.animate(Ti.UI.createAnimation({
            left: isNavBtnActive ? 240 : 0,
            duration: 500
        }));
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;