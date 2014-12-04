function Controller() {
    function successCallback(resp) {
        var response = JSON.parse(resp);
        console.log("@@@@@@@@@@@ " + JSON.stringify(response));
    }
    function createHeaderRow(titles) {
        var headerRow = Alloy.createController("common/rows/leaveStatusRow", {
            data: titles,
            rowType: "header"
        });
        return headerRow.getView();
    }
    function hideShowMenu() {
        isNavBtnActive = !isNavBtnActive;
        $.mainView.animate(Ti.UI.createAnimation({
            left: isNavBtnActive ? 240 : 0,
            duration: 500
        }));
    }
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
        backgroundColor: "white",
        layout: "vertical"
    });
    $.__views.index.add($.__views.mainView);
    $.__views.topbar = Alloy.createController("common/navbar", {
        id: "topbar",
        __parentSymbol: $.__views.mainView
    });
    $.__views.topbar.setParent($.__views.mainView);
    $.__views.detailsView = Ti.UI.createTableView({
        id: "detailsView",
        top: "10",
        backgroundColor: "white",
        borderRadius: "6",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        separatorColor: "#eda888",
        borderColor: "#D96009",
        borderWidth: "1",
        scrollable: "false"
    });
    $.__views.mainView.add($.__views.detailsView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var httpClient = require("http");
    var url = "http://192.168.1.77:1500/password.njs";
    var params = {
        page: "Leave Status",
        username: Titanium.App.Properties.getInt("loginUserID")
    };
    httpClient.sendHttpRequest("POST", url, params, successCallback, null);
    var leaveStatusData = [ {
        leaveType: "Loss of Pay",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Compensatory Off",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Compensatory Work",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "On Official Duty",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Earned Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Casual Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Sick Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Work From Home",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Maternity Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Paternity Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    }, {
        leaveType: "Bereavement Leave",
        totalLeaves: "20",
        available: "7",
        unapproved: "0"
    } ];
    var isNavBtnActive = false;
    $.topbar.leftNavBtn.addEventListener("click", hideShowMenu);
    (function() {
        var tabledata = [];
        var headerRow = createHeaderRow({
            leaveType: "LeaveType",
            totalLeaves: "Total",
            available: "Available",
            unapproved: "Unapproved"
        });
        tabledata.push(headerRow);
        for (i = 0; leaveStatusData.length > i; i++) {
            var leaveStatusRow = Alloy.createController("common/rows/leaveStatusRow", {
                data: leaveStatusData[i],
                rowType: "detail"
            }).getView();
            tabledata.push(leaveStatusRow);
        }
        $.detailsView.setData(tabledata);
    })();
    Alloy.createController("login").getView().open();
    $.menubar.logout.addEventListener("click", function() {
        $.index.close();
    });
    $.menubar.applyLeave.addEventListener("click", function() {
        hideShowMenu();
        Alloy.createController("applyLeave").getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;