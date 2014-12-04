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
        layout: "vertical",
        backgroundColor: "#eda888"
    });
    $.__views.applyLeave.add($.__views.applyLeaveView);
    $.__views.leaveTypeView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "leaveTypeView"
    });
    $.__views.applyLeaveView.add($.__views.leaveTypeView);
    $.__views.leaveTypeLabel = Ti.UI.createLabel({
        id: "leaveTypeLabel",
        text: "Leave Type",
        height: Ti.UI.SIZE
    });
    $.__views.leaveTypeView.add($.__views.leaveTypeLabel);
    $.__views.leaveTypeSelectTool = Ti.UI.createView({
        id: "leaveTypeSelectTool",
        height: "40",
        left: "30",
        width: Ti.UI.SIZE,
        backgroundColor: "ffffff"
    });
    $.__views.leaveTypeView.add($.__views.leaveTypeSelectTool);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Select Leave Type",
        height: "40",
        id: "__alloyId0"
    });
    $.__views.leaveTypeSelectTool.add($.__views.__alloyId0);
    $.__views.fromDateView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "fromDateView"
    });
    $.__views.applyLeaveView.add($.__views.fromDateView);
    $.__views.fromDate = Ti.UI.createLabel({
        id: "fromDate",
        text: "From Date",
        height: Ti.UI.SIZE
    });
    $.__views.fromDateView.add($.__views.fromDate);
    $.__views.fromDateVal = Ti.UI.createTextField({
        id: "fromDateVal",
        left: "20",
        hintText: "enter from date",
        backgroundColor: "white"
    });
    $.__views.fromDateView.add($.__views.fromDateVal);
    $.__views.fromDateCalendar = Ti.UI.createImageView({
        id: "fromDateCalendar",
        height: "30",
        left: "20",
        image: "common/calendar.png",
        backgroundColor: "white",
        width: "30"
    });
    $.__views.fromDateView.add($.__views.fromDateCalendar);
    $.__views.toDateView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "toDateView"
    });
    $.__views.applyLeaveView.add($.__views.toDateView);
    $.__views.toDate = Ti.UI.createLabel({
        id: "toDate",
        text: "To Date",
        height: Ti.UI.SIZE
    });
    $.__views.toDateView.add($.__views.toDate);
    $.__views.toDateVal = Ti.UI.createTextField({
        id: "toDateVal",
        left: "20",
        hintText: "enter to date",
        backgroundColor: "white"
    });
    $.__views.toDateView.add($.__views.toDateVal);
    $.__views.toDateCalendar = Ti.UI.createImageView({
        id: "toDateCalendar",
        height: "30",
        left: "20",
        image: "common/calendar.png",
        backgroundColor: "white",
        width: "30"
    });
    $.__views.toDateView.add($.__views.toDateCalendar);
    $.__views.isFullDayView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "isFullDayView"
    });
    $.__views.applyLeaveView.add($.__views.isFullDayView);
    $.__views.firstHalf = Ti.UI.createLabel({
        id: "firstHalf",
        text: "First Half",
        height: Ti.UI.SIZE
    });
    $.__views.isFullDayView.add($.__views.firstHalf);
    $.__views.firstHalfCheckbox = Ti.UI.createImageView({
        id: "firstHalfCheckbox",
        height: Ti.UI.SIZE,
        left: "10",
        image: "common/checkbox-checked.png",
        backgroundColor: "white"
    });
    $.__views.isFullDayView.add($.__views.firstHalfCheckbox);
    $.__views.secondHalf = Ti.UI.createLabel({
        id: "secondHalf",
        text: "Second Half",
        height: Ti.UI.SIZE,
        left: "20"
    });
    $.__views.isFullDayView.add($.__views.secondHalf);
    $.__views.secondHalfCheckbox = Ti.UI.createImageView({
        id: "secondHalfCheckbox",
        height: Ti.UI.SIZE,
        left: "10",
        image: "common/checkbox-unchecked.png",
        backgroundColor: "white"
    });
    $.__views.isFullDayView.add($.__views.secondHalfCheckbox);
    $.__views.noOfDaysView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "noOfDaysView"
    });
    $.__views.applyLeaveView.add($.__views.noOfDaysView);
    $.__views.noOfDaysLabel = Ti.UI.createLabel({
        id: "noOfDaysLabel",
        text: "Days",
        height: Ti.UI.SIZE
    });
    $.__views.noOfDaysView.add($.__views.noOfDaysLabel);
    $.__views.noOfDays = Ti.UI.createTextField({
        id: "noOfDays",
        width: "80",
        height: "60",
        left: "20",
        backgroundColor: "white"
    });
    $.__views.noOfDaysView.add($.__views.noOfDays);
    $.__views.reasonView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 20,
        id: "reasonView"
    });
    $.__views.applyLeaveView.add($.__views.reasonView);
    $.__views.reasonLabel = Ti.UI.createLabel({
        id: "reasonLabel",
        text: "Reason",
        height: Ti.UI.SIZE
    });
    $.__views.reasonView.add($.__views.reasonLabel);
    $.__views.reasonText = Ti.UI.createTextArea({
        id: "reasonText",
        height: "90",
        hintText: "enter your reason for leave",
        width: "100",
        backgroundColor: "white",
        maxLength: "255"
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