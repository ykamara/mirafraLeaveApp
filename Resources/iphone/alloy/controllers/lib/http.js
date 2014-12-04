function Controller() {
    function sendHttpRequest(TYPE, URL, params, successCallback, errorCallback) {
        var client = Ti.Network.createHTTPClient();
        URL = null == URL || "null" == URL || void 0 === typeof URL ? "http://192.168.1.77:1500/password.njs" : URL;
        params = "undefined" == typeof params ? null : params;
        client.open(TYPE, URL);
        client.send(params);
        successCallback = "undefined" == typeof successCallback ? function(data) {
            Ti.API.log("network lib" + data);
        } : successCallback;
        errorCallback = null == errorCallback || "null" == errorCallback || "undefined" == typeof errorCallback ? function() {
            alert("Please check your network connection! You are not connected with.");
        } : errorCallback;
        client.onload = function() {
            successCallback(this.responseText);
        };
        client.onerror = function(e) {
            errorCallback(e);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "lib/http";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.sendHttpRequest = sendHttpRequest;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;