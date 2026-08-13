
$(document).ready(function(){
	
		
	function sortSelect(selElem, order) {
	    var tmpAry = new Array();
	    for (var i=0;i<selElem.options.length;i++) {
	        tmpAry[i] = new Array();
	        tmpAry[i][0] = selElem.options[i].text;
	        tmpAry[i][1] = selElem.options[i].value;
	    }
	    tmpAry.sort();
	    if(order == 'desc')
	    	tmpAry.reverse();
	    while (selElem.options.length > 0) {
	        selElem.options[0] = null;
	    }
	    for (var i=0;i<tmpAry.length;i++) {
	        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
	        selElem.options[i] = op;
	    }
	    return;
	}
		
	
	
   //sortSelect(document.getElementById('initial_gm_e'), 'desc');
   //sortSelect(document.getElementById('initial_gm_h'), 'asc');
   //sortSelect(document.getElementById('initial_gf_e'), 'desc');
  // sortSelect(document.getElementById('initial_gf_h'), 'asc');
   //sortSelect(document.getElementById('initial_gg_e'), 'desc');
   //sortSelect(document.getElementById('initial_gg_h'), 'asc');
    
    $("#btn_get_groomOTP").click(function(){
		
		try{
			if(validateAdhaar()){
				$("#spinner").show();
				$("#groomAdhaarForm").attr('action', 'generateOTPGroom');
				$("#groomAdhaarForm").submit();
				return true;
			}else
				return false;
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
    
    $("#btn_verify_groomOTP").click(function(){
		
		try{
			if(validateOTP()){
				$("#spinner").show();
				$("#groomAdhaarOTPVerify").attr('action', 'EKYCDetailsGroom');
				$("#groomAdhaarOTPVerify").submit();
				return true;
			}else
				return false;
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
    
    $("#btn_groom_detailA").click(function(){
		
		try{
			if(validateGroomDetailA()){
				$("#spinner").show();
				$("#groomDetailForm").attr('action', 'saveGroomDetailA');
				$("#groomDetailForm").submit();
				return true;
			}else
				return false;
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
    
    
	$("#btn_groom_detail").click(function(){
		
		try{
			if(validateGroomDetail()){
				//$("#spinner").show();
				document.getElementById('spinner').style.display='block';
				$("#groomDetailForm").attr('action', 'mr_saveGroomDetail');
				$("#groomDetailForm").submit();
				
				return true;
			}else
				return false;
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
	
	$("#btn_groom_office_detail_complete").click(function(){
		
		try{
			if(validateGroomOfficeDetailComplete()){
				//$("#spinner").show();
				document.getElementById('spinner').style.display='block';
				
				$("#groomDetailForm").attr('action', 'mr_updateGroom_OfficeDetailComplete');
				$("#groomDetailForm").submit();
				;
				return true;
			}else
				return false;
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
	
	
	$("input[type=checkbox][name=groom_guardian_flag]").change(function(){
		
		try{
			
			//alert(document.querySelector("#"+this.id).checked);
			//alert(this.value+"--"+$("#"+this.id).val());
			//setGuardianDetail(this.value,0,1);
			setGuardianDetail(document.querySelector("#"+this.id).checked,0,1);
			
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});	
	
	
	$("input[type=radio][name=groom_curr_add_flag]").change(function(){
		
		try{
			
			//alert(this.id+"--"+$("#"+this.id).val());
			showHideDiv(this.value,$("#groom_residence_inUp").val(),$("#groom_residence_outUp").val(),$("#groom_residence_outIndia").val());
			//*****alternative****//
			//$("#groomResidenceInUp_div").toggle();

			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});
	

	$("#currentGroomDistrictCode").change(function(){
		
		try{
			
			getTehsilListJson(this.id);
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
		
	});


$("input[type=radio][name=groom_nationality_flag]").change(function(){
		
		try{
			
			//alert(this.id+"--"+$("#"+this.id).val());
			showHideGroomNationalityDetail(this.value,$("#nationality_indian").val(),$("#nationality_other").val());
			
			//*****alternative****//
			//$("#groom_nationality_other_div").toggle();

			
		}catch (e) {
			alert(e +"Please Try Again");
			return false;
		}
		
	});	
//======11/march/2024========================	
$("input[type=radio][name=groomAdhaarOtpVerify]").change(function()
{
   try{
   //if(saveGroomAdhaarConsentJson(this.value))
   //{
     alert('consent '+this.value);
      showHideGroomAdhaarDiv(this.value,'YES','NO');
    //}
   }
   catch(e)
   {
      alert("Please Try Again");
	  return false;
   }
});

let eGroomname = document.getElementById('groomNameEng').value;
let isOtp = document.getElementById('groomAdhaarOtpVerify').value;
if(isOtp=='YES' || (eGroomname!=null && eGroomname!=""))
{
  $("#groomNameEng").attr('readonly','true');
}

});

//==============================================

function validateGroomDetailA(){
	return true;
}

function validateOTP(){
	var OTP = document.getElementById("groomOTP").value;
	document.getElementById("groomOTPMsg").style.display = "none";
	var flag=0;
	
	if(OTP == "" || OTP.length !=8)
	{
		flag=1;
		document.getElementById("groomOTPMsg").style.display = "inline";
	}
	if(flag==1)
		return false;
	else	
		return true;
}

function validateAdhaar(){
	var adhaarno = document.getElementById("aadhaarnoGroom").value;
	document.getElementById("groomAdhaarNoMsg").style.display = "none";
	var flag=0;
	
	if(adhaarno == "" || adhaarno.length !=12)
	{
		flag=1;
		document.getElementById("groomAdhaarNoMsg").style.display = "inline";
	}
	if(flag==1)
		return false;
	else
		return true;
}

function getTehsilListJson(district_code_id){
	
	try{
			
	    var districtCode = document.getElementById(district_code_id).value;
	    var dropdown = document.getElementById('currentGroomTehsilCode');
	    
		dropdown.length = 1;		
		dropdown.length = 0;
	    var xmlHTTP;
	    
	    
		showSpinner();

	    if (window.XMLHttpRequest) {
	        xmlHTTP = new XMLHttpRequest();
	    }
	    else {
	        xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    
	    xmlHTTP.onreadystatechange = function () {
		
	        if (xmlHTTP.status == 200 && xmlHTTP.readyState == 4) {
		
		
				var data=xmlHTTP.responseText;
				var jsonResponse = JSON.parse(data);
				
				var i=0;
				
				$.each(jsonResponse, function (key,value) {
					
					var theOption = new Option;
	                
					theOption.value = key.trim();
					theOption.text = value.trim();
	                dropdown.options[i] = theOption;
					i++;
		            	
		        });
				
				hideSpinner();
	        }
	    }
	    
	    xmlHTTP.open("POST", "getTehsilListJson.action?userDistrictCode=" + districtCode, true);
	    xmlHTTP.send();
			
			
		}catch (e) {
			hideSpinner();
			alert("Please Try Again");			
		}
	
}


function validateGroomDetail(){
	var name_h=document.querySelector("#groomNameHindi").value.trim();
	var name_e=document.querySelector("#groomNameEng").value.trim();
	
	var gcheck = document.querySelector("#groom_guardian_flag").checked;
	var gname_h = document.querySelector("#groomGaurdianNameEng").value.trim();
	var gnamei_h = document.querySelector("#initial_gg_h").value;
	var gaddr_h = document.querySelector("#groomGaurdianAddressHindi").value.trim();
	var gname_e = document.querySelector("#groomGaurdianNameHindi").value.trim();
	var gnamei_e = document.querySelector("#initial_gg_e").value;
	var gaddr_e = document.querySelector("#groomGaurdianAddressEng").value.trim();
	
	var mname_h=document.querySelector("#groomMotherNameHindi").value.trim();
	var fname_h=document.querySelector("#groomFatherNameHindi").value.trim();
	var mnamei_h = document.getElementById("initial_gm_h").value;
	var fnamei_h=document.getElementById("initial_gf_h").value;
	
	var mname_e=document.querySelector("#groomMotherNameEng").value.trim();
	var fname_e=document.querySelector("#groomFatherNameEng").value.trim();
	var mnamei_e = document.getElementById("initial_gm_e").value;
	var fnamei_e=document.getElementById("initial_gf_e").value;
	
	
	var dob=document.querySelector("#dobg_date").value;
	var age=document.querySelector("#agegroom").value;
	var status=document.querySelector("#groomMaritalStatusCode").value;
	var email=document.querySelector("#groomEmail").value.trim();
	var mob=document.querySelector("#groomMobile").value.trim();
	
	var riu=document.querySelector("#groom_residence_inUp").checked;
	var rou=document.querySelector("#groom_residence_outUp").checked;
	var roi=document.querySelector("#groom_residence_outIndia").checked;
	
	var district=document.querySelector("#currentGroomDistrictCode").value;
	var tehsil=document.querySelector("#currentGroomTehsilCode").value;
	var addr_e=document.querySelector("#currentGroomHouseNoEng").value.trim();
	var addr_h=document.querySelector("#currentGroomHouseNoHindi").value.trim();
	var pin=document.querySelector("#currentGroomPinCode").value.trim();
	
	var state_e=document.querySelector("#currentGroomStateNameEng").value.trim();
	var districtout_e=document.querySelector("#currentGroomDistrictNameOutSideUpEng").value.trim();
	var tehsilout_e=document.querySelector("#currentGroomTehsilNameOutSideUpEng").value.trim();
	var state_h=document.querySelector("#currentGroomStateNameHindi").value.trim();
	var districtout_h=document.querySelector("#currentGroomDistrictNameOutSideUpHindi").value.trim();
	var tehsilout_h=document.querySelector("#currentGroomTehsilNameOutSideUpHindi").value.trim();
	var addrout_e=document.querySelector("#currentGroomHouseNoOutSideUpEng").value.trim();
	var addrout_h=document.querySelector("#currentGroomHouseNoOutSideUpHindi").value.trim();
	var pinout=document.querySelector("#currentGroomPinCodeOutSideUp").value.trim();
	
	var addrforeign_e=document.querySelector("#currentGroomHouseNoOutSideIndiaEng").value.trim();
	var addrforeign_h=document.querySelector("#currentGroomHouseNoOutSideIndiaHindi").value.trim();
	
	var groomreligion =  document.querySelector("#groomReligionCode").value;
	
	var groomNationalityFlag_ind = document.querySelector("#nationality_indian").checked;
	var groomNationalityFlag_other = document.querySelector("#nationality_other").checked;
	
	var groomNationality_e = document.getElementById('groom_nationalityEng').value.trim();
	var groomNationality_h = document.getElementById('groom_nationalityHindi').value.trim();
	
	var flag=0;
	
	if(!groomNationalityFlag_other && !groomNationalityFlag_ind)
	{ 
	   flag=1;
	}
	
	if(groomNationalityFlag_other)
	{
	  if(groomNationality_e == null || groomNationality_e=='')
	  {
	    document.getElementById('groom_nationalityEngMsg').style.display = "inline";
		document.querySelector("#groom_nationalityEng").focus();
		flag=1;
	   }
	  else{
	    document.getElementById('groom_nationalityEngMsg').style.display = "none";
	  }
	  
	  if(groomNationality_h == null || groomNationality_h=='')
	  {
	    document.getElementById('groom_nationalityHindiMsg').style.display = "inline";
		document.querySelector("#groom_nationalityHindi").focus();
		flag=1;
	   }
	  else{
	  document.getElementById('groom_nationalityHindiMsg').style.display = "none";
	  }
	}
	else
	{
	   document.getElementById('groom_nationalityEngMsg').style.display = "none";
	   document.getElementById('groom_nationalityHindiMsg').style.display = "none";
	}
	
	if(groomreligion == -1 || groomreligion==0)
	{
	   document.getElementById('groomReligionCodeMsg').style.display = "inline";
		document.querySelector("#groomReligionCode").focus();
		flag=1;
	}
	else{
	  document.getElementById('groomReligionCodeMsg').style.display = "none";
	}
	
	if(name_h=="" || name_h==null)
	{
		document.getElementById('groomNameMsg').style.display = "inline";
		document.querySelector("#groomNameHindi").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomNameMsg').style.display = "none";
	}
	if(name_e=="" || name_e==null)
	{
		document.getElementById('groomNameEngMsg').style.display = "inline";
		document.querySelector("#groomNameEng").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomNameEngMsg').style.display = "none";
	}
	if(gcheck)
	{
		if(gname_h==""||gname_h==null)
		{
			document.getElementById('groomGaurdianNameHindiMsg').style.display = "inline";
			document.querySelector("#groomGaurdianNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianNameHindiMsg').style.display = "none";
		}
		if(gname_e==""||gname_e==null)
		{
			document.getElementById('groomGaurdianNameEngMsg').style.display = "inline";
			document.querySelector("#groomGaurdianNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianNameEngMsg').style.display = "none";
		}
		
		
		if(gnamei_h==-1)
		{
			document.getElementById('initial_gg_hMsg').style.display = "inline";
			document.querySelector("#initial_gg_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gg_hMsg').style.display = "none";
		}
		if(gnamei_e==-1)
		{
			document.getElementById('initial_gg_eMsg').style.display = "inline";
			document.querySelector("#initial_gg_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gg_eMsg').style.display = "none";
		}
		
		
		if(gaddr_h==""||gaddr_h==null)
		{
			document.getElementById('groomGaurdianAddressHindiMsg').style.display = "inline";
			document.querySelector("#groomGaurdianAddressHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianAddressHindiMsg').style.display = "none";
		}
		if(gaddr_e==""||gaddr_e==null)
		{
			document.getElementById('groomGaurdianAddressEngMsg').style.display = "inline";
			document.querySelector("#groomGaurdianAddressEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianAddressEngMsg').style.display = "none";
		}
		
	}
	else
	{
		if(mname_h==""||mname_h==null)
		{
			document.getElementById('groomMotherNameHindiMsg').style.display = "inline";
			document.querySelector("#groomMotherNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomMotherNameHindiMsg').style.display = "none";
		}
		if(mname_e==""||mname_e==null)
		{
			document.getElementById('groomMotherNameEngMsg').style.display = "inline";
			document.querySelector("#groomMotherNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomMotherNameEngMsg').style.display = "none";
		}
		if(fname_h==""||fname_h==null)
		{
			document.getElementById('groomFatherNameHindiMsg').style.display = "inline";
			document.querySelector("#groomFatherNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomFatherNameHindiMsg').style.display = "none";
		}
		if(fname_e==""||fname_e==null)
		{
			document.getElementById('groomFatherNameEngMsg').style.display = "inline";
			document.querySelector("#groomFatherNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomFatherNameEngMsg').style.display = "none";
		}
		if(mnamei_h==-1)
		{
			document.getElementById('initial_gm_hMsg').style.display = "inline";
			document.querySelector("#initial_gm_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gm_hMsg').style.display = "none";
		}
		if(mnamei_e==-1)
		{
			document.getElementById('initial_gm_eMsg').style.display = "inline";
			document.querySelector("#initial_gm_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gm_eMsg').style.display = "none";
		}
		if(fnamei_h==-1)
		{
			document.getElementById('initial_gf_hMsg').style.display = "inline";
			document.querySelector("#initial_gf_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gf_hMsg').style.display = "none";
		}
		if(fnamei_e==-1)
		{
			document.getElementById('initial_gf_eMsg').style.display = "inline";
			document.querySelector("#initial_gf_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gf_eMsg').style.display = "none";
		}
	}
	
	if(dob=""||dob==null)
	{
		document.getElementById('dobg_dateMsg').style.display = "inline";
		document.querySelector("#dobg_dateMsg").focus();
		flag=1;
	}
	else
	{
		document.getElementById('dobg_dateMsg').style.display = "none";
	}
	if(age==0)
	{
		document.getElementById('dobg_dateMsg').style.display = "inline";
		document.querySelector("#dobg_dateMsg").focus();
		flag=1;
	}
	else
	{
		document.getElementById('dobg_dateMsg').style.display = "none";
	}
	if(status==-1)
	{
		document.getElementById('groomMaritalStatusCodeMsg').style.display = "inline";
		document.querySelector("#groomMaritalStatusCode").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomMaritalStatusCodeMsg').style.display = "none";
	}
	
	
	if(email==""||email==null)
	{
		//document.getElementById('groomEmailMsg').style.display = "inline";
		//document.querySelector("#groomEmail").focus();
		//flag=1;
	}
	else {
	     if(checkForValidEmail(email))
	     {
	        document.getElementById('groomEmailMsg').style.display = "none";
	     }
	     else{
	        flag=1;
	        document.getElementById('groomEmailMsg').innerHTML = 'कृपया ईमेल आई.डी. सही भरें';
	     }
	}
	
	
	/* if(document.getElementById('groomEmailCharMsg').innerHTML == 'कृपया ईमेल आई.डी. सही भरें')
	{
	    //document.getElementById('groomEmailMsg').style.display = "inline";
		document.querySelector("#groomEmail").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomEmailMsg').style.display = "none";
	}
	*/
	
	if(mob==""||mob==null|| mob.length<10 )
	{
		document.getElementById('groomMobileMsg').style.display = "inline";
		document.querySelector("#groomMobile").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomMobileMsg').style.display = "none";
	}
	
	if(!riu && !rou&& !roi)
	{
		document.getElementById('groomResidenceMsg').style.display = "inline";
		document.querySelector("#groomResidenceMsg").focus();
		flag=1;
	}
	
	else if(riu)
	{
		document.getElementById('groomResidenceMsg').style.display = "none";
		if(district==-1)
		{
			document.getElementById('currentGroomDistrictCodeMsg').style.display = "inline";
			document.querySelector("#currentGroomDistrictCode").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomDistrictCodeMsg').style.display = "none";
		}
		if(tehsil==""||tehsil==-1)
		{
			document.getElementById('currentGroomTehsilCodeMsg').style.display = "inline";
			document.querySelector("#currentGroomTehsilCode").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomTehsilCodeMsg').style.display = "none";
		}
		if(addr_e==""||addr_e==null)
		{
			document.getElementById('currentGroomHouseNoEngMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoEng").focus();
			flag=1;
		}
		
		else
		{
			document.getElementById('currentGroomHouseNoEngMsg').style.display = "none";
		}
		if(addr_h==""||addr_h==null)
		{
			document.getElementById('currentGroomHouseNoHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomHouseNoHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomHouseNoHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomHouseNoHindiMsg').style.display = "none";
		}
		if(pin=""||pin==null || !pin)
		{
			document.getElementById('currentGroomPinCodeMsg').style.display = "inline";
			document.querySelector("#currentGroomPinCode").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomPinCodeMsg').style.display = "none";
		}
	}
	else if(rou)
	{
		document.getElementById('groomResidenceMsg').style.display = "none";
		if(state_e=""||state_e==null || !state_e)
		{
			document.getElementById('currentGroomStateNameEngMsg').style.display = "inline";
			document.querySelector("#currentGroomStateNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomStateNameEngMsg').style.display = "none";
		}
		if(state_h=""||state_h==null || !state_h)
		{
			document.getElementById('currentGroomStateNameHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomStateNameHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomStateNameHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomStateNameHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomStateNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomStateNameHindiMsg').style.display = "none";
		}
		if(districtout_e==-1||districtout_e==null || districtout_e=="")
		
		{
			document.getElementById('currentGroomDistrictNameOutSideUpEngMsg').style.display = "inline";
			document.querySelector("#currentGroomDistrictNameOutSideUpEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomDistrictNameOutSideUpEngMsg').style.display = "none";
		}
		if(districtout_h==-1||districtout_h==null || districtout_h=="")
		
		{
			document.getElementById('currentGroomDistrictNameOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomDistrictNameOutSideUpHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomDistrictNameOutSideUpHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomDistrictNameOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomDistrictNameOutSideUpHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomDistrictNameOutSideUpHindiMsg').style.display = "none";
		}
		if(tehsilout_e==-1||tehsilout_e==null || tehsilout_e=="")
		{
			document.getElementById('currentGroomTehsilNameOutSideUpEngMsg').style.display = "inline";
			document.querySelector("#currentGroomTehsilNameOutSideUpEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomTehsilNameOutSideUpEngMsg').style.display = "none";
		}
		if(tehsilout_h==-1||tehsilout_h==null || tehsilout_h=="")
		{
			document.getElementById('currentGroomTehsilNameOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomTehsilNameOutSideUpHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomTehsilNameOutSideUpHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomTehsilNameOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomTehsilNameOutSideUpHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomTehsilNameOutSideUpHindiMsg').style.display = "none";
		}
		if(addrout_e==""||addrout_e==null || !addrout_e)
		{
			document.getElementById('currentGroomHouseNoOutSideUpEngMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideUpEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomHouseNoOutSideUpEngMsg').style.display = "none";
		}
		if(addrout_h==""||addrout_h==null || !addrout_h)
		{
			document.getElementById('currentGroomHouseNoOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideUpHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomHouseNoOutSideUpHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomHouseNoOutSideUpHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideUpHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomHouseNoOutSideUpHindiMsg').style.display = "none";
		}
		if(pinout==""||pinout==null || !pinout)
		{
			document.getElementById('currentGroomPinCodeOutSideUpMsg').style.display = "inline";
			document.querySelector("#currentGroomPinCodeOutSideUp").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomPinCodeOutSideUpMsg').style.display = "none";
		}
	}
	else
	{
		if(addrforeign_e==""||addrforeign_e==null || !addrforeign_e)
		{
			document.getElementById('currentGroomHouseNoOutSideIndiaEngMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideIndiaEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomHouseNoOutSideIndiaEngMsg').style.display = "none";
		}
		if(addrforeign_h==""||addrforeign_h==null || !addrforeign_h)
		{
			document.getElementById('currentGroomHouseNoOutSideIndiaHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideIndiaHindi").focus();
			flag=1;
		}
		else if(!checkHindiAddressCharacters('currentGroomHouseNoOutSideIndiaHindi')) //added for special character ***30Apr2025**
		{
		    document.getElementById('currentGroomHouseNoOutSideIndiaHindiMsg').style.display = "inline";
			document.querySelector("#currentGroomHouseNoOutSideIndiaHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('currentGroomHouseNoOutSideIndiaHindiMsg').style.display = "none";
		}
	}
	if(flag!=0)
	{
		document.getElementById('submitValidateAll').style.display = "inline";
		return false;
	}else{
		document.getElementById('submitValidateAll').style.display = "none";
		return true;
	}
}
   function checkForValidEmail(appEmail){
    	
    	var filter =/^([A-Za-z0-9_\-\.]+)\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(appEmail.trim()==''){
    		return true;
    	}
    	else if(!filter.test(appEmail)){
        		return false;
        	}
    	return true;
    }

//====================05/10/2023===============================

function validateGroomOfficeDetailComplete()
{
     var name_h=document.querySelector("#groomNameHindi").value;
	 var name_e=document.querySelector("#groomNameEng").value;
	
	var gcheck = document.querySelector("#groom_guardian_flag").checked;
	var gname_h = document.querySelector("#groomGaurdianNameEng").value;
	var gnamei_h = document.querySelector("#initial_gg_h").value;
	var gaddr_h = document.querySelector("#groomGaurdianAddressHindi").value;
	var gname_e = document.querySelector("#groomGaurdianNameHindi").value;
	var gnamei_e = document.querySelector("#initial_gg_e").value;
	var gaddr_e = document.querySelector("#groomGaurdianAddressEng").value;
	
	var mname_h=document.querySelector("#groomMotherNameHindi").value;
	var fname_h=document.querySelector("#groomFatherNameHindi").value;
	var mnamei_h = document.getElementById("initial_gm_h").value;
	var fnamei_h=document.getElementById("initial_gf_h").value;
	
	var mname_e=document.querySelector("#groomMotherNameEng").value;
	var fname_e=document.querySelector("#groomFatherNameEng").value;
	var mnamei_e = document.getElementById("initial_gm_e").value;
	var fnamei_e=document.getElementById("initial_gf_e").value;
	
	
	var dob=document.querySelector("#dobg_date").value;
	var age=document.querySelector("#agegroom").value;
	var status=document.querySelector("#groomMaritalStatusCode").value;
	var email=document.querySelector("#groomEmail").value;
	var mob=document.querySelector("#groomMobile").value;
	var flag = 0;
	
	var groomreligion =  document.querySelector("#groomReligionCode").value;
	
	if(groomreligion == -1 || groomreligion==0)
	{
	   document.getElementById('groomReligionCodeMsg').style.display = "inline";
		document.querySelector("#groomReligionCode").focus();
		flag=1;
	}
	else{
	  document.getElementById('groomReligionCodeMsg').style.display = "none";
	}
	
	if(name_h=="" || name_h==null)
	{
		document.getElementById('groomNameMsg').style.display = "inline";
		document.querySelector("#groomName").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomNameMsg').style.display = "none";
	}
	if(name_e=="" || name_e==null)
	{
		document.getElementById('groomNameEngMsg').style.display = "inline";
		document.querySelector("#groomNameEng").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomNameEngMsg').style.display = "none";
	}
	if(gcheck)
	{
		if(gname_h==""||gname_h==null)
		{
			document.getElementById('groomGaurdianNameHindiMsg').style.display = "inline";
			document.querySelector("#groomGaurdianNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianNameHindiMsg').style.display = "none";
		}
		if(gname_e==""||gname_e==null)
		{
			document.getElementById('groomGaurdianNameEngMsg').style.display = "inline";
			document.querySelector("#groomGaurdianNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianNameEngMsg').style.display = "none";
		}
		
		
		if(gnamei_h==-1)
		{
			document.getElementById('initial_gg_hMsg').style.display = "inline";
			document.querySelector("#initial_gg_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gg_hMsg').style.display = "none";
		}
		if(gnamei_e==-1)
		{
			document.getElementById('initial_gg_eMsg').style.display = "inline";
			document.querySelector("#initial_gg_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gg_eMsg').style.display = "none";
		}
		
		
		if(gaddr_h==""||gaddr_h==null)
		{
			document.getElementById('groomGaurdianAddressHindiMsg').style.display = "inline";
			document.querySelector("#groomGaurdianAddressHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianAddressHindiMsg').style.display = "none";
		}
		if(gaddr_e==""||gaddr_e==null)
		{
			document.getElementById('groomGaurdianAddressEngMsg').style.display = "inline";
			document.querySelector("#groomGaurdianAddressEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomGaurdianAddressEngMsg').style.display = "none";
		}
		
	}
	else
	{
		if(mname_h==""||mname_h==null)
		{
			document.getElementById('groomMotherNameHindiMsg').style.display = "inline";
			document.querySelector("#groomMotherNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomMotherNameHindiMsg').style.display = "none";
		}
		if(mname_e==""||mname_e==null)
		{
			document.getElementById('groomMotherNameEngMsg').style.display = "inline";
			document.querySelector("#groomMotherNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomMotherNameEngMsg').style.display = "none";
		}
		if(fname_h==""||fname_h==null)
		{
			document.getElementById('groomFatherNameHindiMsg').style.display = "inline";
			document.querySelector("#groomFatherNameHindi").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomFatherNameHindiMsg').style.display = "none";
		}
		if(fname_e==""||fname_e==null)
		{
			document.getElementById('groomFatherNameEngMsg').style.display = "inline";
			document.querySelector("#groomFatherNameEng").focus();
			flag=1;
		}
		else
		{
			document.getElementById('groomFatherNameEngMsg').style.display = "none";
		}
		if(mnamei_h==-1)
		{
			document.getElementById('initial_gm_hMsg').style.display = "inline";
			document.querySelector("#initial_gm_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gm_hMsg').style.display = "none";
		}
		if(mnamei_e==-1)
		{
			document.getElementById('initial_gm_eMsg').style.display = "inline";
			document.querySelector("#initial_gm_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gm_eMsg').style.display = "none";
		}
		if(fnamei_h==-1)
		{
			document.getElementById('initial_gf_hMsg').style.display = "inline";
			document.querySelector("#initial_gf_h").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gf_hMsg').style.display = "none";
		}
		if(fnamei_e==-1)
		{
			document.getElementById('initial_gf_eMsg').style.display = "inline";
			document.querySelector("#initial_gf_e").focus();
			flag=1;
		}
		else
		{
			document.getElementById('initial_gf_eMsg').style.display = "none";
		}
	}
	
	if(dob=""||dob==null)
	{
		document.getElementById('dobg_dateMsg').style.display = "inline";
		document.querySelector("#dobg_dateMsg").focus();
		flag=1;
	}
	else
	{
		document.getElementById('dobg_dateMsg').style.display = "none";
	}
	if(age==0)
	{
		document.getElementById('dobg_dateMsg').style.display = "inline";
		document.querySelector("#dobg_dateMsg").focus();
		flag=1;
	}
	else
	{
		document.getElementById('dobg_dateMsg').style.display = "none";
	}
	if(status==-1)
	{
		document.getElementById('groomMaritalStatusCodeMsg').style.display = "inline";
		document.querySelector("#groomMaritalStatusCode").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomMaritalStatusCodeMsg').style.display = "none";
	}
	
	if(email==""||email==null)
	{
		//document.getElementById('groomEmailMsg').style.display = "inline";
		//document.querySelector("#groomEmail").focus();
		//flag=1;
	}
	else {
	     if(checkForValidEmail(email))
	     {
	        document.getElementById('groomEmailMsg').style.display = "none";
	     }
	     else{
	        flag=1;
	        document.getElementById('groomEmailMsg').innerHTML = 'कृपया ईमेल आई.डी. सही भरें';
	     }
	}
	
	/*
	if(email==""||email==null)
	{
		document.getElementById('groomEmailMsg').style.display = "inline";
		document.querySelector("#groomEmail").focus();
		flag=1;
	}
	else if(document.getElementById('groomEmailCharMsg').innerHTML == 'कृपया ईमेल आई.डी. सही भरें')
	{
	    //document.getElementById('groomEmailMsg').style.display = "inline";
		document.querySelector("#groomEmail").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomEmailMsg').style.display = "none";
	}
	*/
	
	if(mob==""||mob==null)
	{
		document.getElementById('groomMobileMsg').style.display = "inline";
		document.querySelector("#groomMobile").focus();
		flag=1;
	}
	else
	{
		document.getElementById('groomMobileMsg').style.display = "none";
	}
	
	if(flag!=0)
	{
		document.getElementById('submitValidateAllOfficeDetailComplete').style.display = "inline";
		return false;
	}else{
		document.getElementById('submitValidateAllOfficeDetailComplete').style.display = "none";
		return true;
	}
	
	
}

function setGuardianDetail(is_guardian_flag_check,guardian_flag_parent,guardian_flag_other){
	
	if( is_guardian_flag_check )	//if guardianflag true
		$('#groom_guardian_flag').prop('value', guardian_flag_other);		
		//showHideGuardianDetail(guardian_flag_other,guardian_flag_parent,guardian_flag_other);
	else
		$('#groom_guardian_flag').prop('value', guardian_flag_parent);
		//showHideGuardianDetail(guardian_flag_parent,guardian_flag_parent,guardian_flag_other);		
		
	$("#groomParents_div").slideToggle(500);
	$("#groomSanrakshak_div").slideToggle(500);
	
}

function showHideGuardianDetail(guardian_flag_value,guardian_flag_parent,guardian_flag_other){
	
	
	if( guardian_flag_value==guardian_flag_parent ){
		
		$('#groom_guardian_flag').prop('checked', false);
		addRemoveClass(document.getElementById("groomParents_div"), "collapse", "collapse-in");
		addRemoveClass(document.getElementById("groomSanrakshak_div"), "collapse-in", "collapse");		
		
		
	}if( guardian_flag_value==guardian_flag_other ){
		
		$('#groom_guardian_flag').prop('checked', true);
		addRemoveClass(document.getElementById("groomParents_div"), "collapse-in", "collapse");
		addRemoveClass(document.getElementById("groomSanrakshak_div"), "collapse", "collapse-in");
		
		
	}
	
	
}


//=================31/oct/2023====================================
function showHideGroomNationalityDetail(nationality_flag_value,groom_nationality_indian,groom_nationality_other){
	
	 let isVerified = document.getElementById('isGroomOtpVerified').value;
	 let groomConsent = document.getElementById('groomAdhaarOtpVerify').value;
	if( nationality_flag_value==groom_nationality_indian ){
	
		$('#nationality_other').prop('checked', false);
		$('#nationality_indian').prop('checked', true);
		
		//document.getElementById('groom_nationalityEng').value=groom_nationality_indian;
		//document.getElementById('groom_nationalityHindi').value = '\u092D\u093E\u0930\u0924\u0940\u092F';
		
		addRemoveClass(document.getElementById("groom_nationality_other_div"), "collapse-in", "collapse");
		addRemoveClass(document.getElementById("groom_nationality_indian_div"), "collapse", "collapse-in");
		
		if(groomConsent=='YES')
		{
		  $('#groomAdhaarOtpVerify0').prop('checked', false);
		  $('#groomAdhaarOtpVerify1').prop('checked', true);
		  if(isVerified=='true')
		      document.getElementById('groomDetailDiv').style.display='block';
		  else
		      document.getElementById('groomDetailDiv').style.display='none'; 
		}
		else
		{
		   $('#groomAdhaarOtpVerify0').prop('checked', true);
		   $('#groomAdhaarOtpVerify1').prop('checked', false);
		   document.getElementById('groomDetailDiv').style.display='block'; 
		   document.getElementById('groomAdharNOentryForm').style.display='none';
		}
		
		
	}
	else{
	
	   if(isVerified=='true')
		{
		  $('#nationality_other').prop('checked', false);
		  $('#nationality_indian').prop('checked', true);
		  alert('आधार का ओटीपी द्वारा सफलतापूर्वक सत्यापन किया जा चुका है!!'); 
		}
		else
		{
		   $('#nationality_indian').prop('checked', false);
		   $('#nationality_other').prop('checked', true);
		   addRemoveClass(document.getElementById("groom_nationality_other_div"), "collapse", "collapse-in");
		   addRemoveClass(document.getElementById("groom_nationality_indian_div"), "collapse-in", "collapse");
		   document.getElementById('groomDetailDiv').style.display='block';
		}
		//document.getElementById('groom_nationalityEng').value='';
		//document.getElementById('groom_nationalityHindi').value ='';
		
		
		
	
	}
/**
	if( nationality_flag_value==groom_nationality_other ){
		$('#nationality_indian').prop('checked', false);
		$('#nationality_other').prop('checked', true);
		
		document.getElementById('groom_nationalityEng').value='';
		document.getElementById('groom_nationalityHindi').value ='';
		
		addRemoveClass(document.getElementById("groom_nationality_other_div"), "collapse", "collapse-in");
		
	}
*/	
	//collapse = hide, collapse-in = show
	
}


function addRemoveClass(element,removedCssClass,addedCssClass){
	
	$(element).removeClass(removedCssClass).addClass(addedCssClass);

	
}

function showHideGroomResidence(residenceValue,residence_inUp,residence_outUp,residence_outIndia){
	
	
	if( residenceValue==residence_inUp )
		$('#groom_residence_inUp').prop('checked', true);
	if( residenceValue==residence_outUp )
		$('#groom_residence_outUp').prop('checked', true);
	if( residenceValue==residence_outIndia )
		$('#groom_residence_outIndia').prop('checked', true);
	
	
	showHideDiv(residenceValue,residence_inUp,residence_outUp,residence_outIndia);
	
	
}




function showHideDiv(residenceValue,residence_inUp,residence_outUp,residence_outIndia){
	
	var collapse="collapse";
	var collapse_in="collapse-in";
	
	if( residenceValue==residence_inUp ){
		
		
		addRemoveClass(document.getElementById("groomResidenceInUp_div"), collapse, collapse_in);
		
		addRemoveClass(document.getElementById("groomResidenceOutUp_div"), collapse_in, collapse);
		addRemoveClass(document.getElementById("groomResidenceOutIndia_div"), collapse_in, collapse);		
		
		
		//***alternative*****also use bellow code**//
		//showElementById("groomResidenceInUp_div");			
		//hideElementById("groomResidenceOutUp_div");
		//hideElementById("groomResidenceOutIndia_div");

		
	}		
	else if( residenceValue==residence_outUp ){
		addRemoveClass(document.getElementById("groomResidenceOutUp_div"), collapse, collapse_in);
		
		addRemoveClass(document.getElementById("groomResidenceInUp_div"), collapse_in, collapse);
		addRemoveClass(document.getElementById("groomResidenceOutIndia_div"), collapse_in, collapse);
			
	}
	else if( residenceValue==residence_outIndia ){
		addRemoveClass(document.getElementById("groomResidenceOutIndia_div"), collapse, collapse_in);
		
		addRemoveClass(document.getElementById("groomResidenceInUp_div"), collapse_in, collapse);
		addRemoveClass(document.getElementById("groomResidenceOutUp_div"), collapse_in, collapse);
					
	}
}
	
	//==================11/march/2024=adhaar related method start=============
	function showHideGroomAdhaarDiv(val,yes,no)
	{
	    let isVerified = document.getElementById('isGroomOtpVerified').value;
	    if( val===yes ){
		  
		
		let groomConsent = document.getElementById('groomAdhaarOtpVerify').value;
		
		if(isVerified=='false')
		{
		    $('#groomAdhaarOtpVerify0').prop('checked', false);
		    $('#groomAdhaarOtpVerify1').prop('checked', true);
		   
		    document.getElementById('groomDetailDiv').style.display='none';
		    document.getElementById('groomAdharNOentryForm').style.display='block';
		}
		else if(isVerified=='true')
		{
		    //alert('आधार का ओटीपी द्वारा सफलतापूर्वक सत्यापन किया जा चुका है');
		    $('#groomAdhaarOtpVerify1').prop('checked', true);
		    $('#groomAdhaarOtpVerify0').prop('checked', false);
		    document.getElementById('groomDetailDiv').style.display='block'; 
		}
		
	}
	else{
	 // let isVerified = document.getElementById('isGroomOtpVerified').value;
	  
	  if(isVerified=='true')
	  { 
	     alert('आधार का ओटीपी द्वारा सफलतापूर्वक सत्यापन किया जा चुका है');
	     $('#groomAdhaarOtpVerify1').prop('checked', true);
	     $('#groomAdhaarOtpVerify0').prop('checked', false);
	  }
	  else
	  {
	     $('#groomAdhaarOtpVerify1').prop('checked', false);
	     $('#groomAdhaarOtpVerify0').prop('checked', true);
	     document.getElementById('groomAdharNOentryForm').style.display='none';
	     document.getElementById('groomDetailDiv').style.display='block';
	  }
	  
	  
	
	}
	 
	 //return false;
	}
	
	function calltogeneratAadharOTP_enc(){
			
	var aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
		
	showSpinner();

	$.post('mr_generateOTP',
		{
				
			aadhaarno : aadhaarno,
			
		},
function (responseJson) {        

var checkedResponse = responseJson;

if(checkedResponse == "YES"){

			alert('OTP Sent Successfully');
			document.getElementById('OTPMessage').innerHTML='Check Mobile For OTP';
			document.getElementById('OTPMessage').style.color = "green";
			document.getElementById('OTPdiv').style.display = "block";
			
			document.getElementById('OTPbutton').style.display = "none";
			document.getElementById('OTPbuttonAgain').style.display = "none";
			
			setTimeout(function() {
				
				document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
}
else{
			alert('OTP Sent Failed');
			document.getElementById('OTPdiv').style.display = "none";
			document.getElementById('OTPMessage').innerHTML='Try Generating OTP Again';
			document.getElementById('OTPMessage').style.color = "red";
			
			document.getElementById('OTPbutton').style.display = "none";
			
			setTimeout(function() {
				
		document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
}

$("#spinner").hide();
});

}
	
	
	function calltogeneratAadharOTP(){
			
			var aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
			
		/**
			if(aadhaarno.length<12){
				
				alert("आधार संख्या 12 अंकों से कम नहीं हो सकती।");
				return false;
			
			}
			else if(aadhaarno.length>12){
				alert("आधार संख्या 12 अंकों से अधिक नहीं हो सकती।");
				return false;
			}
			
			else
			{
			   
			   //to remove all pointer(mouse) events
			   document.getElementById('groomAdhaarnoRenter').pointerEvents='none';
			   
			   //aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
			}
         
		*/

	showSpinner();

	$.post('mr_generateOTP',
		{
				
			aadhaarno : aadhaarno,
			
		},
function (responseJson) {        

var checkedResponse = responseJson;

if(checkedResponse == "YES"){

			alert('OTP Sent Successfully');
			document.getElementById('OTPMessage').innerHTML='Check Mobile For OTP';
			document.getElementById('OTPMessage').style.color = "green";
			document.getElementById('OTPdiv').style.display = "block";
			
			document.getElementById('OTPbutton').style.display = "none";
			document.getElementById('OTPbuttonAgain').style.display = "none";
			
			setTimeout(function() {
				
				document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
			
			
			
}

else{

			alert('OTP Sent Failed');
			document.getElementById('OTPdiv').style.display = "none";
			document.getElementById('OTPMessage').innerHTML='Try Generating OTP Again';
			document.getElementById('OTPMessage').style.color = "red";
			
			document.getElementById('OTPbutton').style.display = "none";
			
			setTimeout(function() {
				
				document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
}

$("#spinner").hide();
});

}

function calltogeneratAadharOTPreSend(){
			
			var aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
			
			if(aadhaarno==''){
				alert("कृपया आधार संख्या जाँच ले ");
				return false;
			}
			else
			{
			   //to remove all pointer(mouse) events
			   document.getElementById('groomAdhaarnoRenter').pointerEvents='none';
			   
			   aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
			}

		

	showSpinner();

	$.post('mr_generateOTP',
		{
				
			aadhaarno : aadhaarno,
			
		},
function (responseJson) {        

var checkedResponse = responseJson;

if(checkedResponse == "YES"){

			alert('OTP Sent Successfully');
			document.getElementById('OTPMessage').innerHTML='Check Mobile For OTP';
			document.getElementById('OTPMessage').style.color = "green";
			document.getElementById('OTPdiv').style.display = "block";
			
			document.getElementById('OTPbutton').style.display = "none";
			document.getElementById('OTPbuttonAgain').style.display = "none";
			
			setTimeout(function() {
				
				document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
			
			
			
}

else{

			alert('OTP Sent Failed');
			document.getElementById('OTPdiv').style.display = "none";
			document.getElementById('OTPMessage').innerHTML='Try Generating OTP Again';
			document.getElementById('OTPMessage').style.color = "red";
			
			document.getElementById('OTPbutton').style.display = "none";
			
			setTimeout(function() {
				
				document.getElementById('OTPbuttonAgain').style.display = "block";
					}, 7000);
}

$("#spinner").hide();
});

}


function groomAutheticateE_KYCAadharOTP(){
 			
			var OTP = document.getElementById('OTPrenter').value;
			var aadhaarno = document.getElementById('groomAdhaarnoRenter').value;
			var uniqueIUdAadhaar = document.getElementById('groomUniqueIUdAadhaar').value;
			
			var status ='';
			
			var familyIdResCode='';

	showSpinner();
	
	if(OTP.length<6){
		
		document.getElementById('ValidateMessage').innerHTML='कृपया 6 अंक का ओ.टी.पी. दर्ज करे';
		document.getElementById('ValidateMessage').style.color = "red";
		//$("#spinner").hide();
		hideSpinner();
	}
	else{

	$.post('mr_EKYCDetailsOTP',
		{
				
			OTP : OTP,
			aadhaarno : aadhaarno,
			uniqueIUdAadhaar : uniqueIUdAadhaar,
			authFor : 'groom'
			
		},
	function (responseJson) {        

var checkedResponse = responseJson;

  $.each(checkedResponse, function (key,value) {
      let key_val = key.trim();
      let val = value.trim();
      
      var familyIdGenerated = '';
      
      if(key_val == 'status')
      {
        status = val;
      }
      if(key_val == 'applicantNameEng')
      {
         document.getElementById('groomNameEng').value = val;
      }
     /*
      if(key_val == 'applicantNameHindi')
      {
         document.getElementById('groomNameHindi').value = val;
      }
      
      if(key_val == 'applicantFnameEng')
      {
          //document.getElementById('groomFatherNameEng').value = val;
          console.log('Care of :'+val);
      }
      if(key_val == 'applicantGender')
      {
         console.log('Gender :'+val);
      }
      if(key_val == 'applicantMobileNo')
      {
         console.log('Gender :'+val);
      }
      if(key_val == 'applicantEmail')
      {
         console.log('Gender :'+val);
      }
      if(key_val == 'applicantAddressEng')
      {
         console.log('addressEng :'+val);
      }
      if(key_val == 'applicantAddressHindi')
      {
         console.log('addressHindi :'+val);
      }
      */
      if(key_val == 'familyIDGenerated')
      {
         familyIdGenerated = val;
        
        //document.getElementById('isGroomFamilyIdGenerated').value = true;
      }
        if(key_val == 'familyID')
         {
           //document.getElementById('groomFamilyId').value = val;
           
           document.getElementById('familyIdDiv').style.display='block';
           document.getElementById('familyId').innerHTML = val;
         //  document.getElementById('familyId').style.color='green';
           
         }
         if(key_val == 'memberID')
         {
           //document.getElementById('groomMemberId').value = val;
         }
       if(key_val == 'familyIdResponseCode')
         {
           //document.getElementById('groomMemberId').value = val;
           familyIdResCode = val;
         }
      
      
  });
  
  if(familyIdResCode == '-1')
  {
     status == "UN-VERIFIED";
  }
  
   if(status == "VERIFIED"){
      try{
			alert('Verified Successfully');
			
		    if(familyIdResCode=='0')
			 {
			    //alert('Verified Successfully');
			 }
			if(familyIdResCode=='1')
			 {
			   alert('Your Aadhar not found in family database. Please generate your family ID.');
			   document.getElementById('familyIdDiv').style.display='block';
               document.getElementById('familyId').innerHTML = 'Your Aadhar not found in family database. Please generate your family ID.';
               document.getElementById('familyId').style.color='red';
			 }
			  
			document.getElementById('OTPMessage').innerHTML='';
			
			document.getElementById('ValidateMessage').innerHTML='Aadhar OTP Verified Successfully';
			document.getElementById('ValidateMessage').style.color = "green";
			
			//encryptPartyAadhaarNUM();
			
			document.getElementById('groomAdharNOentryForm').style.display = "none";
			
			//document.getElementById('groomAdharEntryForm').style.display = "block";
			
			//document.getElementById('groomAdharNOentryForm').style.display='block';
			document.getElementById('groomDetailDiv').style.display='block';
			
			//document.getElementById('groomAdhaarOtpVerify1').disabled=true;
			//document.getElementById('groomAdhaarOtpVerify0').disabled=true;
			
			//document.getElementById('nationality_other').disabled=true;
			//document.getElementById('nationality_indian').disabled=true;
			
			document.getElementById('groom_nationality_indian_div').hidden=true;
			document.getElementById('nationalityDiv').hidden=true;
			
			$("#groomNameEng").attr('readonly','true');
			
			hideSpinner();
	  }
	   catch(e)
	   {
	     console.log(e);
	     document.getElementById('OTPMessage').innerHTML='';
			
		 document.getElementById('ValidateMessage').innerHTML='Aadhar OTP Verification Failed! Try Again!';
		 document.getElementById('ValidateMessage').style.color = "red";
			
		 document.getElementById('groomAdharNOentryForm').style.display = "block";
			
	      hideSpinner();
	}
	
			
}

else{

			alert('Aadhar OTP Verification Failed! Try Again!');
			
			document.getElementById('OTPMessage').innerHTML='';
			
			document.getElementById('ValidateMessage').innerHTML='Aadhar OTP Verification Failed! Try Again!';
			document.getElementById('ValidateMessage').style.color = "red";
			
			document.getElementById('groomAdharNOentryForm').style.display = "block";
			
			//document.getElementById('groomAdharEntryForm').style.display = "none";
			
			//document.getElementById('OTPbutton').style.display = 'block';
			
			
//			document.getElementById('AuthenticateButton').classList.remove("diasbleOTPbutton");
//			
//			document.getElementById('partyAadharNum').disabled = false;					
//			document.getElementById('OTPbutton').disabled = false;
//			document.getElementById('AadharOTP').disabled = false;
//			document.getElementById('AuthenticateButton').disabled = false;

             hideSpinner();
}

hideSpinner();
});

	}


}


function resetAadharOTP(){
	
	document.getElementById('groomAdhaarnoRenter').readOnly=false;
   	document.getElementById('groomAdhaarnoRenter').disabled=false;
   	document.getElementById('groomAdhaarnoRenter').style.backgroundColor="white";
	document.getElementById('groomAdhaarnoRenter').pointerEvents='';
	document.getElementById('groomAdhaarnoRenter').value='';
					
	document.getElementById('OTPbutton').disabled='disabled';
	document.getElementById('OTPbutton').style.cursor='pointer';
}



function encryptPartyAadhaarNUM(){
 			
 		 	var dropdown1=document.getElementById('groomAdhaarnoRenter').value;
 			
 		 	
 		 	
 		 	if(dropdown1 =='' || dropdown1.length<12){
 		 		
 		 		alert("कृपया आधार संख्या जाँच लें ।");
 		 		//document.getElementById(element.id).focus();
 		 		//checkBoxName.checked=false;
 		 		
 		 	}else{
 		 		var myPassword = dropdown1;	
 		 		var salt = 'A8A16C024BD1F9F213E46AECD405CF26';	
 		 		           
 		 		window.location.hash="";
 		 		window.location.hash="";//for google chrome
 		 		window.onhashchange=function(){window.location.hash="";}
 		 		//var iv = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
 		 		var four = salt;
 		 		var iterationCount = 1000;
 		 		var keySize = 128;
 		 		var plaintext = myPassword;	
 		 		//alert(plaintext);
 		 		var passphrase = 'abcdef';
 		 		var aesUtil = new AesUtil(keySize, iterationCount);
 		 		var ciphertext = aesUtil.encrypt(salt, four, passphrase, plaintext);
 		 		document.getElementById('groomAdhaarnoRenter').value = ciphertext;
 		 		document.getElementById('groomUniqueIUdAadhaar').value=ciphertext;
 		 		
 			   	//document.getElementById('uniqueIUdAadhaarPre').value=ciphertext;
 			   	
 			   	document.getElementById('groomAdhaarnoRenter').readOnly=true;
 			   	document.getElementById('groomAdhaarnoRenter').disabled=true;
 			   	document.getElementById('groomAdhaarnoRenter').style.backgroundColor="gray";
 			   	
 			   	//to remove all pointer(mouse) events
			   document.getElementById('groomAdhaarnoRenter').pointerEvents='none';
 		 	   document.getElementById('OTPbutton').disabled='';
 		 	   document.getElementById('OTPbutton').style.cursor='pointer';
 		 	} 	
 		}
 		
 		
 function saveGroomAdhaarConsentJson(e,yes,no){
	
	try{
			
	   var groomAdhaarConsent = e.value;
		
	    var xmlHTTP;
	    
		showSpinner();

	    if (window.XMLHttpRequest) {
	        xmlHTTP = new XMLHttpRequest();
	    }
	    else {
	        xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    
	    xmlHTTP.onreadystatechange = function () {
		
	        if (xmlHTTP.status == 200 && xmlHTTP.readyState == 4) {
		
		
				var data=xmlHTTP.responseText;
				var jsonResponse = JSON.parse(data);
				if(jsonResponse==="SUCCESS")
				   showHideGroomAdhaarDiv(groomAdhaarConsent,yes,no);
				if(jsonResponse==="ERROR")
				{
				   showHideGroomAdhaarDiv(groomAdhaarConsent,yes,no);
				   
				}
				console.log(jsonResponse);
				hideSpinner();
	        }
	    }
	    
	    xmlHTTP.open("POST", "mr_saveGroomAadhaarConsentJson.action?groomAdhaarConsent=" + groomAdhaarConsent, true);
	    xmlHTTP.send();
			
			
		}catch (e) {
			hideSpinner();
			alert("Please Try Again");			
		}
	
}
//*************14/may/2024************************
function checkForValidPin(pincode)
{
  if(isValidPinCode(pincode))
  {
      return true;
  }
  else
  {
     alert("Please enter valid pincode.");
     document.getElementById('currentGroomPinCodeMsg').focus();
     document.getElementById('currentGroomPinCode').value="";
     document.getElementById('currentGroomPinCodeOutSideUp').value="";
     return false;
  }
}
//*******************************************
//*************23/sept/2024************
function getDOBByCertificateNumber(event)
{
try{
   var dobCertificateNum= document.getElementById('groomDobCertificateNum').value;
   var dobCertificateIssueDate = event.value;
   
   if(dobCertificateNum=='' || dobCertificateNum == null)
   {
       document.getElementById('groomDobCertificateNumMsg').innerHTML = 'Please Enter groom DOB Certificate number';
       return false;
   }
   else
   {
     document.getElementById('groomDobCertificateNumMsg').innerHTML = '';
   }
    if(dobCertificateIssueDate=='' || dobCertificateIssueDate == null)
   {
       document.getElementById('groomDobCertificateIssueDateMsg').style.display=block;
       return false;
   }
   var xmlHTTP;
   
    if(window.XMLHttpRequest) {
	        xmlHTTP = new XMLHttpRequest();
	  }
	 else {
	        xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	 /** 
	  
	  xmlHTTP.open("GET", "?=" + "", true);
	  xmlHTTP.send();
	  */
   }
   catch(ex)
   {
    
   }
}
//**************************************
  
//===========end==================================================	
	/********* TIMER BEFORE RESEND-OTP BUTTON IS ENABLED********/
/*function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
          //  timer = duration;
           timer = 0;
           document.querySelector('#btn_get_groomOTP').disabled=false;
           document.querySelector('#btn_get_groomOTP').style.cursor = "pointer";
           document.querySelector('#btn_get_groomOTP').title = "";
           document.querySelector('#waiting_div').style.display = "none";
           
           return true;
        }
        
    }, 1000);
}

    function showSpinner(){
    	$("#spinner").show(); 
     	
    }
    
    function hideSpinner(){
     	$("#spinner").hide();
     	
    }


window.onload = function () {
	//if(document.getElementById("timer_stop").value == 0){
    var minute =29,
        display = document.querySelector('#time');
    startTimer(minute, display);
 //   }
};*/

/************TIMER SECTION ENDS*************/

function onlyEmailCharAllowed (event) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
  return regex.test(email);
}	

