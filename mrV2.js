function callDashboardAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='marriageRegistrationDashboardAction';
	c_form.submit();
	
	return true;
}
function callBrideDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_brideDetailAction';
	c_form.submit();
	return true;
}
function callGroomDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_groomDetailAction';
	c_form.submit();
	return true;
}
function callVenueDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_venueDetailAction';
	c_form.submit();
	return true;
}
function callOfficeDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_officeDetailAction';
	c_form.submit();
	return true;
}
function callWitnessDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_witnessDetailAction';
	c_form.submit();
	return true;
}
function callDocumentUploadAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_documentUploadAction';
	c_form.submit();
	return true;
}
function callPreviewDetailAction(e)
{
	$("#spinner").show();
	var c_form = e.form;
	c_form.action='mr_previewDetailAction';
	c_form.submit();
	return true;
}