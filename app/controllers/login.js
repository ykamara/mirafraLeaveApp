var httpClient = require('http');
var url = "http://192.168.1.77:1500/password.njs";

function resetFields() {
	$.Username.value = "";
	$.Password.value = "";
};

function doLogin() {
	var username = $.Username.value;
	var password = $.Password.value;
	var params = {
		username : $.Username.value,
		password : $.Password.value,
		page : 'Athu'
	};

	httpClient.sendHttpRequest('POST', url, params, loginSuccess, loginError);

	function loginSuccess(resp) {
		var response = JSON.parse(resp);
		
		if (response.status) {
			Ti.App.Properties.setInt("loginUserID", params.username);
			Ti.App.Properties.setInt("leaveID", response.data[0].EmpId);
			Ti.App.Properties.setBool("isManager", response.manager);
			Alloy.createController('index').getView().open();
		}
	};

	function loginError(resp) {
		var response = JSON.parse(resp);
		alert(response);
	};

};
