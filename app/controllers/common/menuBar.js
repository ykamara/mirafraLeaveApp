var headerView =  Ti.UI.createView({
	height: 44,
	width: "auto"
});

var headerLabel = Ti.UI.createLabel({
	text: "Employee Request",
	color: "ffffff"
});
headerView.add(headerLabel);
$.menu.headerView = headerView;

