function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "applyLeave";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.applyLeave = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "white",
        navBarHidden: "true",
        fullscreen: "true",
        id: "applyLeave"
    });
    $.__views.applyLeave && $.addTopLevelView($.__views.applyLeave);
    $.__views.topbar = Alloy.createController("common/navbar", {
        id: "topbar",
        __parentSymbol: $.__views.applyLeave
    });
    $.__views.topbar.setParent($.__views.applyLeave);
    $.__views.applyLeaveView = Ti.UI.createView({
        id: "applyLeaveView",
        layout: "vertical"
    });
    $.__views.applyLeave.add($.__views.applyLeaveView);
    $.__views.leaveTypeView = Ti.UI.createView({
        layout: "horizontal",
        id: "leaveTypeView"
    });
    $.__views.applyLeaveView.add($.__views.leaveTypeView);
    $.__views.leaveTypeLabel = Ti.UI.createLabel({
        id: "leaveTypeLabel",
        text: "Leave Type"
    });
    $.__views.leaveTypeView.add($.__views.leaveTypeLabel);
    $.__views.leaveTypeSelectTool = Ti.UI.createLabel({
        id: "leaveTypeSelectTool",
        text: "Select Leave Type"
    });
    $.__views.leaveTypeView.add($.__views.leaveTypeSelectTool);
    $.__views.fromDateView = Ti.UI.createView({
        layout: "horizontal",
        id: "fromDateView"
    });
    $.__views.applyLeaveView.add($.__views.fromDateView);
    $.__views.fromDate = Ti.UI.createLabel({
        id: "fromDate",
        text: "From Date"
    });
    $.__views.fromDateView.add($.__views.fromDate);
    $.__views.dateCalendar = Ti.UI.createView({
        id: "dateCalendar"
    });
    $.__views.fromDateView.add($.__views.dateCalendar);
    $.__views.toDateView = Ti.UI.createView({
        layout: "horizontal",
        id: "toDateView"
    });
    $.__views.applyLeaveView.add($.__views.toDateView);
    $.__views.toDate = Ti.UI.createLabel({
        id: "toDate",
        text: "To Date"
    });
    $.__views.toDateView.add($.__views.toDate);
    $.__views.dateCalendar = Ti.UI.createView({
        id: "dateCalendar"
    });
    $.__views.toDateView.add($.__views.dateCalendar);
    $.__views.isFullDayView = Ti.UI.createView({
        layout: "horizontal",
        id: "isFullDayView"
    });
    $.__views.applyLeaveView.add($.__views.isFullDayView);
    $.__views.firstHalf = Ti.UI.createLabel({
        id: "firstHalf"
    });
    $.__views.isFullDayView.add($.__views.firstHalf);
    $.__views.firstHalfCheckbox = Ti.UI.createImageView({
        id: "firstHalfCheckbox"
    });
    $.__views.isFullDayView.add($.__views.firstHalfCheckbox);
    $.__views.secondHalf = Ti.UI.createLabel({
        id: "secondHalf"
    });
    $.__views.isFullDayView.add($.__views.secondHalf);
    $.__views.secondHalfCheckbox = Ti.UI.createImageView({
        id: "secondHalfCheckbox"
    });
    $.__views.isFullDayView.add($.__views.secondHalfCheckbox);
    $.__views.noOfDaysView = Ti.UI.createView({
        layout: "horizontal",
        id: "noOfDaysView"
    });
    $.__views.applyLeaveView.add($.__views.noOfDaysView);
    $.__views.noOfDaysLabel = Ti.UI.createLabel({
        id: "noOfDaysLabel"
    });
    $.__views.noOfDaysView.add($.__views.noOfDaysLabel);
    $.__views.noOfDays = Ti.UI.createTextField({
        id: "noOfDays"
    });
    $.__views.noOfDaysView.add($.__views.noOfDays);
    $.__views.reasonView = Ti.UI.createView({
        layout: "horizontal",
        id: "reasonView"
    });
    $.__views.applyLeaveView.add($.__views.reasonView);
    $.__views.reasonLabel = Ti.UI.createLabel({
        id: "reasonLabel"
    });
    $.__views.reasonView.add($.__views.reasonLabel);
    $.__views.reasonText = Ti.UI.createTextArea({
        id: "reasonText"
    });
    $.__views.reasonView.add($.__views.reasonText);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.topbar.left.image = "/common/arrow-left.png";
    $.topbar.midText.text = "Apply Leave";
    $.topbar.leftNavBtn.addEventListener("click", function() {
        $.applyLeave.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;