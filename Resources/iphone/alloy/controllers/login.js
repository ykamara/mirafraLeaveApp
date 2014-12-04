function Controller() {
    function resetFields() {
        $.Username.value = "";
        $.Password.value = "";
    }
    function doLogin() {
        function loginSuccess(resp) {
            var response = JSON.parse(resp);
            if (response.status) {
                Ti.App.Properties.setInt("loginUserID", params.username);
                Ti.App.Properties.setInt("leaveID", response.data[0].EmpId);
                Ti.App.Properties.setBool("isManager", response.manager);
                Alloy.createController("index").getView().open();
            }
        }
        function loginError(resp) {
            var response = JSON.parse(resp);
            alert(response);
        }
        $.Username.value;
        $.Password.value;
        var params = {
            username: $.Username.value,
            password: $.Password.value,
            page: "Athu"
        };
        httpClient.sendHttpRequest("POST", url, params, loginSuccess, loginError);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.parentView = Ti.UI.createView({
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        id: "parentView"
    });
    $.__views.login.add($.__views.parentView);
    $.__views.mirafra_logo = Ti.UI.createImageView({
        image: "common/mirafra-logo.png",
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "mirafra_logo"
    });
    $.__views.parentView.add($.__views.mirafra_logo);
    $.__views.loginView = Ti.UI.createView({
        left: 40,
        right: 40,
        layout: "vertical",
        borderColor: "#D96009",
        borderRadius: 6,
        borderWidth: 1,
        height: "40%",
        backgroundColor: "#eda888",
        id: "loginView"
    });
    $.__views.parentView.add($.__views.loginView);
    $.__views.loginLabel = Ti.UI.createLabel({
        backgroundColor: "#D96009",
        color: "white",
        height: 20,
        top: 0,
        left: 20,
        right: 20,
        textAlign: "center",
        text: "Enter Your Login Details",
        id: "loginLabel"
    });
    $.__views.loginView.add($.__views.loginLabel);
    $.__views.Username = Ti.UI.createTextField({
        hintText: "Username",
        left: 10,
        right: 10,
        top: 20,
        height: 30,
        backgroundColor: "white",
        id: "Username"
    });
    $.__views.loginView.add($.__views.Username);
    $.__views.Password = Ti.UI.createTextField({
        hintText: "Password",
        left: 10,
        right: 10,
        top: 20,
        height: 30,
        backgroundColor: "white",
        id: "Password",
        passwordMask: "true"
    });
    $.__views.loginView.add($.__views.Password);
    $.__views.buttonView = Ti.UI.createView({
        left: 10,
        right: 10,
        top: 10,
        id: "buttonView"
    });
    $.__views.loginView.add($.__views.buttonView);
    $.__views.clear = Ti.UI.createButton({
        left: 0,
        backgroundColor: "#D96009",
        color: "white",
        width: 80,
        borderRadius: 6,
        title: "Clear",
        id: "clear"
    });
    $.__views.buttonView.add($.__views.clear);
    resetFields ? $.__views.clear.addEventListener("click", resetFields) : __defers["$.__views.clear!click!resetFields"] = true;
    $.__views.loginBtn = Ti.UI.createButton({
        right: 0,
        backgroundColor: "#D96009",
        color: "white",
        width: 80,
        borderRadius: 6,
        title: "Login",
        id: "loginBtn"
    });
    $.__views.buttonView.add($.__views.loginBtn);
    doLogin ? $.__views.loginBtn.addEventListener("click", doLogin) : __defers["$.__views.loginBtn!click!doLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var httpClient = require("http");
    var url = "http://192.168.1.77:1500/password.njs";
    __defers["$.__views.clear!click!resetFields"] && $.__views.clear.addEventListener("click", resetFields);
    __defers["$.__views.loginBtn!click!doLogin"] && $.__views.loginBtn.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;