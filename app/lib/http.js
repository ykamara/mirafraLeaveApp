/**
 *
 * hitAjaxRequest : common file to hit Ajax from a single place.
 * @param {String} TYPE
 * @param {String} URL
 * @param {Object} params
 * @param {Function} successCallback
 * @param {Function} errorCallback
 */
function sendHttpRequest(TYPE,URL,params,successCallback,errorCallback){
	var client = Ti.Network.createHTTPClient();
	URL = ( URL == null || URL == "null" || typeof URL === undefined) ? "http://192.168.1.77:1500/password.njs" : URL;
	params = (typeof params === "undefined") ? null : params;
	client.open(TYPE,URL);
	client.send(params);
	successCallback = (typeof successCallback === "undefined") ? function(data){Ti.API.log('network lib'+data);} : successCallback;
	errorCallback = (errorCallback == null || errorCallback=="null" || typeof errorCallback === "undefined") ? function(){
					//if (!e.source.connected) {
						alert('Please check your network connection! You are not connected with.');
					} : errorCallback;
	client.onload = function(e){
		
		successCallback(this.responseText);
	};
	client.onerror = function(e){
		errorCallback(e);
	};
}
exports.sendHttpRequest = sendHttpRequest;