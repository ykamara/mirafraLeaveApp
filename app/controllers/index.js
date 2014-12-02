var leaveData = [{
	type : 'LOP',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'CO',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'CW',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'OOD',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'EL',
	opBal : 0.47,
	alotted : 1.00,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 1.47
}, {
	type : 'CL',
	opBal : 0.23,
	alotted : 0.50,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0.73
}, {
	type : 'SL',
	opBal : 0.86,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0.86
}, {
	type : 'WH',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'ML',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'PL',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}, {
	type : 'BL',
	opBal : 0,
	alotted : 0,
	availed : 0,
	lapsed : 0,
	encashed : 0,
	adjusted : 0,
	balance : 0
}];

var leaveStatusData = [{
	leaveType : 'Loss of Pay',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Compensatory Off',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Compensatory Work',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'On Official Duty',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Earned Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Casual Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Sick Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Work From Home',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Maternity Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Paternity Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}, {
	leaveType : 'Bereavement Leave',
	totalLeaves : '20',
	available : '7',
	unapproved : '0'
}];
var isNavBtnActive = false;

function createHeaderRow(titles) {
	var headerRow = Alloy.createController('common/rows/leaveStatusRow', {
		data : titles,
		rowType : 'header'
	});
	return headerRow.getView();
}

function hideShowMenu(e){
	isNavBtnActive = !isNavBtnActive;
	$.mainView.animate(Ti.UI.createAnimation({
		left : (isNavBtnActive) ? 240 : 0,
		duration : 500
	}));
};

$.topbar.leftNavBtn.addEventListener('click', hideShowMenu);

var addleaveStatusData = function() {
	var tabledata = [];
	var headerRow = createHeaderRow({
		leaveType : 'LeaveType',
		totalLeaves : 'Total',
		available : 'Available',
		unapproved : 'Unapproved'
	});
	tabledata.push(headerRow);
	for ( i = 0; i < leaveStatusData.length; i++) {
		var leaveStatusRow = Alloy.createController('common/rows/leaveStatusRow', {
			data : leaveStatusData[i],
			rowType : 'detail'
		}).getView();
		tabledata.push(leaveStatusRow);
	}
	$.detailsView.setData(tabledata);
}();

Alloy.createController('login').getView().open();

$.menubar.logout.addEventListener('click', function(e) {
	$.index.close();
});

$.menubar.applyLeave.addEventListener('click', function(e) {
	hideShowMenu();
	Alloy.createController('applyLeave').getView().open();
});
//$.index.open();
