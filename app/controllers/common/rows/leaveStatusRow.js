var params = arguments[0] || {};

console.log(JSON.stringify(params.data));
if(params.rowType === 'header'){
	$.row.height = 35;
	$.rowDetails.backgroundColor = "#D96009";
	$.addClass($.leaveType, "headerRowFont");
	$.addClass($.total, "headerRowFont");
	$.addClass($.available, "headerRowFont");
	$.addClass($.unapproved, "headerRowFont");

}else{
	$.row.height = 28;
}
$.leaveType.text = " "+params.data.leaveType;
$.total.text = params.data.totalLeaves;
$.available.text = params.data.available;
$.unapproved.text = params.data.unapproved;