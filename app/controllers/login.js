function resetFields() {
	$.Username.value = "";
	$.Password.value = "";
};

function doLogin() {
	var username = $.Username.value;
	var password = $.Password.value;
	if (username === 'mirafra' && password === 'test') {
		Alloy.createController('index').getView().open();
	}
};
