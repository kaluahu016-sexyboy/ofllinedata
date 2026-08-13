function numbersonly(evt){
//var unicode=e.charCode? e.charCode : e.keyCode
//if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
//if (unicode<48||unicode>57) //if not a number
//return false //disable key press
//}
var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}

function checkForDigitsOnly(element)
{
	var str = element.value;
	var i = str.length;
	while (i--) {
	  var charCode = str[i].charCodeAt(0);
	  if ((charCode >= 48 && charCode > 57))
		  {
		  element.value="";
		  element.focus();
		 
		  }
	  
	}
	
	}


function numbersOnlyWithDecimal(evt){
//var unicode=e.charCode? e.charCode : e.keyCode
//if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
//if (unicode<48||unicode>57) //if not a number
//return false //disable key press
//}
var charCode = (evt.which) ? evt.which : event.keyCode
		 if (charCode != 46 && charCode > 31  && (charCode < 48 || charCode > 57))	 
            return false;

         return true;
}
function numbersOnlyWithMinus(evt){
	//alert(charCode)	;
	var charCode = (evt.which) ? evt.which : event.keyCode


	 if (charCode > 31 && (charCode < 45 || charCode > 57 ||charCode == 46 ||charCode==47))
	 return false; 
	 
	 return true; 

	        
}
//function charAndSpacesOnly(objEvent) {
//alert(objEvent.which);
//    if((objEvent.which>=97 && objEvent.which<=122) || (objEvent.which>=65 && objEvent.which<=90) || (objEvent.which==32) || (objEvent.which==45)) {      
//        return false;
//    } else {
//        return true;
//    }
//       
//}

function charactersAllowedAdd(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)|| (charCode == 8)) || (charCode == 32) ||   (charCode >= 33 && charCode <= 64))
            return true;
            
            return false;
}


function charactersAllowed(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode
    
         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 32) ||  (charCode == 8)) &&  !(charCode >= 33 && charCode <= 64))
            return true;
            
            return false;
}

function charactersAllowedMarriage(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if (charCode> 126 || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 0 && charCode <= 31))
            return false;
            
            return true;
}


function charactersDigitNotAllowed(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
          if ((charCode >= 48 && charCode <= 57) || (charCode >= 33 && charCode <= 47) || (charCode >= 91 && charCode <= 96)
        		  || (charCode >= 58 && charCode <= 64) || (charCode >= 123 && charCode <= 126) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
            return false;      
            
            return true;
}


function charactersDigitNotAllowedForHouseNo(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
          if ((charCode >= 91 && charCode <= 96) ||  (charCode >= 65 && charCode <= 90) ||  (charCode >= 97 && charCode <= 122))
            return false;      
            
            return true;
}


function symbolNotAllowedEnglish(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
          if ((charCode >= 48 && charCode <= 57) || (charCode >= 33 && charCode <= 47) || (charCode >= 91 && charCode <= 96)
         || (charCode >= 58 && charCode <= 64) || (charCode >= 123 && charCode <= 126))
            return false;      
            
            return true;
}


function characterForEmail(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if (charCode> 126 || (charCode >= 33 && charCode <= 45) || (charCode >= 91 && charCode <= 96)
         || (charCode >= 58 && charCode <= 63) || (charCode >= 123 && charCode <= 126))
            return false;
            
            return true;
}

function digitNotAllowed(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if ((charCode >= 48 && charCode <= 57) || (charCode >= 33 && charCode <= 47) || (charCode >= 91 && charCode <= 96)
         || (charCode >= 58 && charCode <= 64) || (charCode >= 123 && charCode <= 126))
            return false;
            
            return true;
}


function charactersNotAllowedWithNumberAndSpecialSymbol(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode

         if ((charCode < 91 && charCode > 64) || (charCode < 123 && charCode > 96)  || (charCode >= 91 && charCode <= 96)
         || (charCode >= 58 && charCode <= 64) || (charCode >= 123 && charCode <= 126))
            return false;
            
            return true;
}

function charactersNotAllowed(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if ((charCode < 91 && charCode > 64) || (charCode < 123 && charCode > 96) || (charCode >= 48 && charCode <= 57) || (charCode >= 33 && charCode <= 47) || (charCode >= 91 && charCode <= 96)
         || (charCode >= 58 && charCode <= 64) || (charCode >= 123 && charCode <= 126))
            return false;
            
            return true;
}

function specialCharacterAllowed(evt) {

  var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if ((charCode < 91 && charCode > 64) || (charCode < 123 && charCode > 96))
            return false;
            
            return true;
}



function makeUppercase(element) {
	element.value = element.value.toUpperCase();
	}




function charactersAllowedForEngAddress(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)|| (charCode == 8)) || (charCode == 32) || (charCode == 44) || (charCode == 45)|| (charCode == 47) ||   (charCode >= 48 && charCode < 58))
            return true;
            
            return false;
}
function charactersAllowedForIdProof(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    //alert(charCode);
         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)|| (charCode == 8)) || (charCode == 32)  || (charCode == 45)|| (charCode == 47) ||   (charCode >= 48 && charCode < 58))
            return true;
            
            return false;
}

//==============19/0ct/2023=======================
function onlyAlphaNumericAllowed(evt)
{
     var charCode = (evt.which)?evt.which : event.keyCode;
     if((charCode >=48 && charCode<=57) || (charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122) || (charCode==8))
     {
        return true;
     }
     return false;
}
//*********************************************************************
//***********************added 02/nov/2023  ****************************
function checkEmailOnBlur(appEmail,spanMsg){
    	var appEmails=document.getElementById(appEmail).value;
    	 var filter =/^([A-Za-z0-9_\-\.]+)\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(appEmails.trim()==''){
        	document.getElementById(spanMsg).innerHTML='';
    		return true;
    	}
    	else if(!filter.test(appEmails)){
        		document.getElementById(spanMsg).innerHTML='कृपया ईमेल आई.डी. सही भरें';
        		return false;
        	}
    	else{
        	document.getElementById(spanMsg).innerHTML='';
    		return true;
    	}
    }
//********************************************************************
//************************added on 14/may/2024***************************
/*The valid pin code of India must satisfy the following conditions. 
    It can be only six digits.
    It should not start with zero.
    First digit of the pin code must be from 1 to 9.
    Next five digits of the pin code may range from 0 to 9.
    It should allow only one white space, but after three digits, although this is optional.

*/
function isValidPinCode(str) {
    // Regex to check valid
    // Pincode of India
    let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
 
   // if str is empty return false
 
    if (str == null) {
        return false;
    }
 
 // Return true if the str matched the ReGex
    var firstLet = str.substring(0,1);
    var valueToCheck = firstLet+firstLet+firstLet+firstLet+firstLet+firstLet;
    if(str == valueToCheck)
    {
       return false;
    }
    else if (regex.test(str) == true) {
        return true;
    }
    else{
        return false;
    }
}
//***********************************************************************
function charactersAllowedForHindiAddress(evt) {

	  var charCode = (evt.which) ? evt.which : event.keyCode
	    //alert(charCode);
	         if ((charCode <= 126 && charCode >= 64) || (charCode <= 43 && charCode >= 33) || (charCode <= 64 && charCode >= 57) || (charCode == 46))
	            return false;
	            
	            return true;
	}

var impoundStatus = "0";
function checkDocumentStatus()
{
	
	var list = $('input#partyCode');
	var partyCode;
	var deedCode =  document.getElementById("deedCode").value;
	var chk = true;
	$(list).each(
	      function() {
	    	  partyCode = $(this).val();
	    	  if(partyCode.startsWith("03"))
	    		  {
	    		  var ds = "documentStatus" + partyCode;
	    		  var documentStatus = document.getElementById(ds).value;
	    		  if(documentStatus == 'false')
	    			  chk = false; 
	    		  }
	    	  else{
	    	  var s36 = "sec36"+partyCode;
	    	  var s88 = "sec88"+partyCode;
	    	  var ds = "documentStatus" + partyCode;
	    	  var pi = "partyImpound"+ partyCode;
	    	  var sec36 = document.getElementById(s36).value;
	    	  var sec88 = document.getElementById(s88).value;
	    	  var documentStatus = document.getElementById(ds).value;
	    	  var partyImpound = document.getElementById(pi).value;
	    	  
	    	  if(partyImpound=="1" || sec88 == 'true')
	    		  {
	    		  impoundStatus = "1";
	    		  }
	    	  
	    	  if(sec36 == 'false' && sec88 == 'false' && partyImpound == '0')
	    		  {
	    		  if(documentStatus == 'false')
	    			  chk = false; 
	    		  }
	    	  
	    	  }
	    	  
	    	     	           
	       }
	);
	if(chk==true)
		{
		return checkSelectionStatus()
		}
	else{
		if(deedCode ==28 || deedCode == 4 || deedCode == 8)
		{
			return true;
		}
		else
		{
			alert("\u0915\u0943\u092A\u092F\u093E \u0938\u092D\u0940 \u092A\u0915\u094D\u0937\u0915\u093E\u0930\u094B\u0902 \u0915\u0947 \u091B\u093E\u092F\u093E\u091A\u093F\u0924\u094D\u0930 \u090F\u0935\u0902 \u0905\u0902\u0917\u0941\u0937\u094D\u0920\u091A\u093F\u0928\u094D\u0939 \u0932\u0947\u0928\u093E \u0905\u0928\u093F\u0935\u093E\u0930\u094D\u092F \u0939\u0948\u0964");
			return false;
		}
	}
	
}



function checkSelectionStatus()
{

// Grabs all inputs - radio, checkbox, text, buttons and lists -sticks them in an array
allInputs = document.getElementsByTagName("input");
var last = "NameUnlikelyToBeUsedAsAnElementName";
/*
for (i = 0; i< allInputs.length; i++)
{
	
	var input = allInputs[i];
	if (input.name == last) continue; // if this object name is the same as the last checked radio, go to next iteration


	// checks to see if any  one of  similarly named radiobuttons is checked 
	else if (input.type == "radio" )
	{
	//	alert("Inside method: 3");
	    last = input.name;	
	    var radios = document.getElementsByName(input.name);
	    var radioSelected=false;

         //iterate over question options
        for (j=0; j < radios.length; j++)
	    {
            
		    if(!radios[j].checked)
		    {
		       radioSelected=true;
		       break; // Found it, proceed to next question	
		    }
	    }
	    if (radioSelected) // no option selected
	    {       // warn user, focus question
	  
                    if(input.id.substring(0,input.id.length-1)==='checkList') {
						document.getElementById("checkListMsg").innerHTML="<font color='red'>* \u0915\u0943\u092A\u092F\u093E \u091A\u0947\u0915\u0932\u093F\u0938\u094D\u091F \u0915\u0947 \u0938\u092D\u0940 \u0935\u093F\u0915\u0932\u094D\u092A\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902\u0964</font>";
						input.focus();
        		    return false;
                    }
	    }
	    	
	    	
	}

}*/
if(document.getElementById("allImgUploadStatus"))
{
alert(document.getElementById("allImgUploadStatus").value);
if(document.getElementById("allImgUploadStatus").value=='no')
	{
	document.getElementById("allImgUploadStatusMsg").innerHTML="<font color='red'>* \u0915\u0943\u092A\u092F\u093E \u0938\u092D\u0940 \u092A\u0915\u094D\u0937\u094B\u0902 \u0915\u093E \u091B\u093E\u092F\u093E\u091A\u093F\u0924\u094D\u0930 \u090F\u0935\u0902 \u0905\u0902\u0917\u0941\u0937\u094D\u0920 \u091A\u093F\u0928\u094D\u0939 \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902\u0964</font>";
	return false;
	}
}
if(confermationOnSubmit())
	{
	//document.getElementById("applicationViewDetailFormId").submit();
	//alert("Inside method: 5");
	return checkWitness();
	}
else
	{
	return false;
	}
}
function checkWitness()
{
	
	//alert("Inside method: 4");
var stampImpound=document.getElementById("stampImpoundStatus").value;
var witnessStatus = document.getElementById("witnessMappingStatus").value;
var wc = document.getElementById("witnessCount").value;
var deedCode =  document.getElementById("deedCode").value;
var mwcount = (parseInt(mc)*2) + 2;
if(stampImpound =="1" && impoundStatus =="0")
{
	return true;
}
if(deedCode==28 || deedCode==4  || deedCode==8)
{
return true;
}
else
{
if(witnessStatus == "true")
{
return true;
}
else 
{
alert("\u0915\u0943\u092A\u092F\u093E \u0917\u0935\u093E\u0939\u094B\u0902 \u0915\u0940 \u092A\u094D\u0930\u0935\u093F\u0938\u094D\u091F\u0940 \u092A\u0942\u0930\u094D\u0923 \u0915\u0930\u0947\u0902\u0964");
return false;
}
}
}

function doubleFileExtension(element)
{
var input = document.getElementById("uploadFile").value;

var splitArray = input.split(".");
var ln = splitArray.length;
if(ln >2){
document.getElementById("uploadFile").value = "";
alert("\u0915\u0943\u092A\u092F\u093E \u0909\u091A\u093F\u0924 \u092A\u094D\u0930\u092E\u093E\u0923 \u092A\u0924\u094D\u0930  \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902\u0964");    
return false;
}
else{
readURLOtherDocs(element);
return true;

}
}
function readURLOtherDocs(element) {

    var input = document.getElementById("uploadFile");
      if (input.files && input.files[0]) {
    	  
          var fileExtension = ['pdf'];
          if ($.inArray($(input).val().split('.').pop().toLowerCase(), fileExtension) ==  - 1) {
              alert("\u0915\u0947\u0935\u0932 \u092A\u0940.\u0921\u0940.\u090F\u095E\u200B \u092A\u094D\u0930\u093E\u0930\u0942\u092A \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902\u0964");
              element.value='';
              throw new Error('This is not an error. This is just to abort javascript');
              return false;
          }
          if (input.files && input.files[0]) {
        	  var f=input.files[0];
//    	   alert(f.size||f.fileSize);
        	  if((f.size||f.fileSize) > 1572864)
        	   {
        	   element.value='';
                    alert("\u0905\u0927\u093F\u0915\u0924\u092E \u095E\u093E\u0908\u0932 \u0938\u093E\u0908\u091C 1.5 \u090F\u092E.\u092C\u0940. \u0924\u0915\u200B \u092E\u093E\u0928\u094D\u092F \u0939\u0948\u0964");
                   throw new Error('This is not an error. This is just to abort javascript');
                   return false;
        	   }
          }
          
          
        

       }
  }         

function checkUploadDoc()
{
var input = document.getElementById("uploadFile").value;
if(input == "")
{
document.getElementById("uploadFile").value = "";
alert("\u0915\u0943\u092A\u092F\u093E \u0938\u094D\u0915\u0948\u0928 \u092A\u094D\u0930\u0932\u0947\u0916 \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902\u0964");     
return false;
}
else 
return true;
}



function encryptPartyAadhaarNO(checkBoxName,element){
	
 	var dropdown1 =document.getElementById(element).value;
 	
 	//alert(checkBoxName.id);
 	
 	if($(checkBoxName).is(":checked")){
 	
 	if(dropdown1 =='' || dropdown1.length<12){
 		
 		alert("कृपया आधार संख्या जाँच लें ।");
 		document.getElementById(element).focus();
 		checkBoxName.checked=false;
 		
 	}else{
 		
 		//alert( dropdown1);
 		
 		
 		$("#aadharSpinner").show();
 		
 	
	     $.post('encriptPartyUniqueNo', 
	               {
	    	 			uniqueNo : dropdown1
	               },
	      function (responseJson) {
	            	   
	            	   if(responseJson!=''){	            		   
	             	   		document.getElementById(checkBoxName.id+'UniqueId').value  =responseJson;
	             	   		document.getElementById(element).readOnly=true;
	             	   	    document.getElementById(element).style.backgroundColor="gray";
	             	   		$("#aadharSpinner").hide();
	               	   }else{
	               		    $("#aadharSpinner").hide();
	               		    alert("कृपया आधार संख्या जाँच लें ।");		               		   
	               	   }
	                
	      });
	     
 	}
 	
 	
 	}else{
 		 document.getElementById(checkBoxName.id+'UniqueId').value  ="";
 		 document.getElementById(element).style.backgroundColor="white";
	   	 document.getElementById(element).readOnly=false;
 	}
	    
	 
}

function checkUniqueId(uniqueId,checkBoxName)
{
	//alert(document.getElementById(uniqueId).value+"---"+document.getElementById(checkBoxName)+"--"+checkBoxName);
	if(document.getElementById(uniqueId)){
				
		if(document.getElementById(uniqueId).value!="")
         {             			 
		 	var dropdown1 =document.getElementById(uniqueId).value;		 
		 	
		 	if($(document.getElementById(checkBoxName)).is(":checked")){
		 		
		 	
			 	if(dropdown1 =='' || dropdown1.length<12){
			 		
			 		alert("कृपया आधार संख्या जाँच लें ।");
			 		document.getElementById(uniqueId).focus();
			 		throw new Error('This is not an error. This is just to abort javascript');
			 		return false;
			 		
			 	}else
			 		return true;
			 	
             
         	}else{
         			alert("कृपया आधार अधिनियम 2016 के अनुसार चेकबॉक्स का चयन करें ।");
         			throw new Error('This is not an error. This is just to abort javascript');
         			return false;         	
         	}
			
		
		}else
			return true;

	}	
}

function isAllSameDigit(number){
	//alert(number.value);
	// var blen=document.getElementById(number).value.trim();
	var blen=number.value.trim(); 
	 var flag = true;
	 var flag123=checkForDigitsOnly(number);
   for(var i = 0; i < blen.length; i++){

   	   if(blen.substring(i,i+1)==blen.substring(0,1))
              {
               
             // alert(); 
              }
              else
                   flag = false; 
      }	 
   	   if(flag)
   		  number.value="";
          
}
function necChallanDetails(){
		
		showElementById("nec_regfee_div");
		showTempSpinner("nec_regfee_div_spinner");
		getnecChallanFeeDetail();
	}
	
	function showElementById(elementId){
		$("#"+elementId).show(500);
	}
	
	function hideElementById(elementId){
		$("#"+elementId).hide(500);
	}
	 
    function  removeSpace(field){
    	
  	  var appField=document.getElementById(field).value;
  	  appField=appField.trim();
    }	
    
    
    function errorBorder(elementId){
    	elementId.style.border="1px solid #ff0000";
    }
    function successBorder(elementId){
    	elementId.style.border="1px solid #cccccc";
    }
    
    
    function hideTempSpinner(tempSpinnerID){
     	$("#"+tempSpinnerID).hide();
     	
    }


    function showTempSpinner(tempSpinnerID){
    	$("#"+tempSpinnerID).show(); 
     	
    }
    
    function showSpinner(){
    	$("#spinner").show(); 
     	
    }
    
    function hideSpinner(){
     	$("#spinner").hide();
     	
    }
    
    function addRemoveClass(elementId,removedCssClass,addedCssClass){
    	
    	$(elementId).removeClass(removedCssClass).addClass(addedCssClass);

    	
    }
	function getnecChallanFeeDetail(){
		
		var statusToReturn=false;
		
		var iCnt = 0; 
    	var initial_id="nec_fee_challan_detail";
		
    	
   	 	var responseCode;
   	 	var responseDesc;
   	 	var challanNo;
    	var challanIssuedDate;
    	var paymentStatus;
    	var regFeeAmountRs;
    	var transaction_used;
    	var errorMsg="No Challan Generated.";
    	
		
		try {
			
			        
			$.post('onlineNECPaymentVarify',
					
		            function (responseJson) {
		
			            $.each(responseJson, function (key,value) {
			            	

			            	
			            	if(key!='' && key!='ERROR' && key!='null'){
			            		iCnt=parseInt(document.getElementById("necFeeCountId").value);
			            		
			            		challanNo = value.challan_no;
			            		challanIssuedDate = value.used_date;
			            		paymentStatus = value.payment_status;
					            regFeeAmountRs = value.amount;
					            transaction_used = value.transaction_used;					            
					            
					            if(insertNecChallanValueInTable(iCnt,initial_id,challanNo,challanIssuedDate,regFeeAmountRs,paymentStatus,transaction_used))
					            	errorMsg=(iCnt+1)+" Record Found Successfully.";
					        	else
					        		errorMsg="Please Try After Sometime";
					            
					         
				            }else if(key=='' && key=='ERROR' && key=='null'){
				            	errorMsg=value;
				            }else{
				            	
				            }
			            	
			            	
			            	
			            });
			            
			            hideTempSpinner("nec_regfee_div_spinner");
			            alert(errorMsg);
			            
		            
				});
		
		
		
		} catch (e) {			
			alert("Some Error Occur. Please Try After Sometime Or Contact To Your Administrator");
		}
			
		
	}
	  function insertNecChallanValueInTable(iCnt,initial_id,td2_value,td3_value,td4_value,td5_value,transaction_used){
    	
    	var statusToReturn=false;
    	var rowStaticId=initial_id+"_";
    	var removeBtnId="btNECRegFeeRemove";
    	var updateBtnId="btNECRegFeeUpdate";
    	var printBtnId="btNECRegFeePrint";
    	var del_icon="del_icon";
    	var countID="necFeeCountId";
    	
    	
    	try{
    	
    		if(iCnt==0)
    			$("#"+initial_id).after('<tr id='+rowStaticId + iCnt + '></tr>');
			else
				$("#"+rowStaticId+(iCnt-1)).after('<tr id='+rowStaticId + iCnt + '></tr>');
		
    		
			                
	        $("#"+rowStaticId+ iCnt).append('<td id=td_1_' + iCnt + '><font class="small">' + (iCnt+1) + '</font></td>');
	        
	        $("#"+rowStaticId+ iCnt).append('<td id=td_2_' + iCnt + '><font class="small">' + td2_value + '</font></td>');
	        $("#"+rowStaticId+ iCnt).append('<td id=td_3_' + iCnt + '><font class="small">' + td3_value + '</font></td>');
	        $("#"+rowStaticId+ iCnt).append('<td id=td_4_' + iCnt + '><font class="small">' + td4_value + '</font></td>');
	        $("#"+rowStaticId+ iCnt).append('<td id=td_5_' + iCnt + '><font class="small">' + td5_value + '</font></td>');
	        
	        $("#"+rowStaticId+ iCnt).append('<td id=td_6_' + iCnt + '>'
	        		
	        		+' <button id=' + updateBtnId + iCnt + ' class="btn btn-outline-primary btn-xs" type="button" title="Check Payment Status" '
					+' value="'+ iCnt + '" '
					+' onclick="checkNECRegFeeChallanStatus('+ updateBtnId + iCnt +')" > '
					+' <span class="glyphicon glyphicon-refresh"></span>'		
					+' </button>'

					
				+'</td>');
	        
	        
	  
	        		/*      $("#"+rowStaticId+ iCnt).append('<td id=td_7_' + iCnt + '>'
	        		
	        		
	        		
	        		+' <button id=' + removeBtnId + iCnt + ' class="btn btn-outline-danger btn-xs" type="button" title="Remove Unsuccessful Challan" '
					+' value="'+ iCnt + '" '
					+' onclick="removeNECRegFeeChallanDetail('+ removeBtnId + iCnt +','+ countID +','+del_icon + iCnt+',)" > '
					+' <span id='+ del_icon + iCnt +' class="glyphicon glyphicon-trash"></span>'		
					+' </button>'

					+' &nbsp;&nbsp;'
					
					+' <button id=' + printBtnId + iCnt + ' class="btn btn-outline-success btn-xs " type="button" title="Print Receipt" '
					+' value="'+ iCnt + '" '
					+' onclick="printRegfeeDivDetail('+td2_value+')" > '
					+' <span class="glyphicon glyphicon-print"></span>'		
					+' </button>'
					
					
				+'</td>');*/
	        
	        
	        
	        
	        document.getElementById(countID).value = iCnt + 1;
	        
			//=====disable previous button=======//	        
			//	        if(iCnt>=0)
			//	        	$('#'+updateBtnId + (iCnt-1)).attr('disabled', 'disabled');
			//=====disable previous button=======//
	        
	        
	        //disable enable button depend upon different case 	        
	        
	        if(td5_value=='Success' ){		// if payment status success
	        	
	        	/*addRemoveClass(document.getElementById(del_icon+ iCnt), "glyphicon-trash", "glyphicon-check");
	        	document.getElementById(removeBtnId+ iCnt).title="You Can't Delete Successful Challan Detail.";
	        	$('#'+removeBtnId + (iCnt)).attr('disabled', 'disabled');	  */      	
	        	
	        }/*else if (!transaction_used) {	// if transaction is marked unused
	        	
	        	addRemoveClass(document.getElementById(del_icon+ iCnt), "glyphicon-trash", "glyphicon-ban-circle");
	        	
	        	document.getElementById(removeBtnId+ iCnt).title="This challan mark as a Un-used.";
	        	$('#'+removeBtnId + (iCnt)).attr('disabled', 'disabled');
	        
			}*/

	        statusToReturn=true;
        
        
    	}catch (e) {
    		statusToReturn=false;
		}
    	
    	
    	return statusToReturn;
        
    	
    }
		function checkNECRegFeeChallanStatus(btn_id) {
		
		var btnDynamicId="btUpdate";
    	var btn_value=btn_id.value;
    	var confirmation_msg="क्या आप भुगतान का सत्यापन करना चाहते हैं ?";
    	var select_last_row_msg="Please Select Last Row ?";
    	var error_msg="Somthing Went Wrong.Please Contact Administrator";
		
		var spanMsg="commomShareMsg";
		var challan_no,challan_date,payment_status;
		var isRequestForUpdate=btn_value;
		 
		
		challan_no=$("#td_2_"+btn_value).text().toUpperCase();
		payment_status=$("#td_5_"+btn_value).text().toUpperCase();
		
		if(payment_status=='SUCCESS'){
			alert("Payment Already Done And Varified.");
		}else{
		
			if(challan_no!=''){
				
				if(confirm(confirmation_msg)){
					checkJsonNecFeeChallanStatus(btn_value,challan_no);		
					return true;
				}else
					return false;
				
			}else
				alert(error_msg);
		}
			
			
}
function checkJsonNecFeeChallanStatus(btn_id,challanNo){

		
		var statusToReturn=false;
    	
   	 	var responseCode;
   	 	var responseDesc;
    	var errorMsg="Challan No Is Mandatory.";
    	
    	
		
		try {
			
			showTempSpinner('nec_regfee_div_spinner');			
			$.post('getNecFeePaymentStatus',
					{
						challanNoForNecFee : challanNo
					},
		            function (responseJson) {
						
		
			            $.each(responseJson, function (key,value) {
			            	
			            	if(key==challanNo){
			            		
			            		
			            		if(updateNecFeeChallanStatusInTable(btn_id,value))
				            		errorMsg="Record Updated Successfully.";
				            	else
				            		errorMsg="Please Try After Sometime";
			            		
			            		errorMsg=value;
			            	 
				            }else{
				            	errorMsg=value;
				            }
			            	
			            });
			            
			            
			            hideTempSpinner('nec_regfee_div_spinner');
			            
			            if(errorMsg=='Failure'){
			            	
			            	if(confirm("आपके द्वारा चालान सं० "+challanNo+" पर  शुल्क के भुगतान की प्रकिया पूर्ण नहीं की गई हैं? कृपया भुगतान की प्रकिया पूर्ण करें।")){
			            		
			            		$( "#btn_epayRegFee" ).click();
			            		
			            	}else{
			            		
			            	}
			            	
			            }else
			            	alert(errorMsg);
			            
		            
				});
		
		
		
		} catch (e) {			
			alert("Some Error Occur. Please Try After Sometime Or Contact To Your Administrator");
		}
			
			

	}
    
	 function updateNecFeeChallanStatusInTable(row_id,paymentStatus){
    	
    	var statusToReturn=false;
    	var td_5="td_5_"+row_id;
    	
    	
    	try{
    		
    		if(td_5){
    			document.querySelector("#"+td_5).innerHTML='<font class="small text-danger">'+paymentStatus+'</font>';
    			statusToReturn=true;
    		}
    		
    		
    	
    	
    		
    	}catch (e) {
    		statusToReturn=false;
		}
    	
    	
    	return statusToReturn;
    }
    //************12/sep/2024******
   function checkForHindiWithDigitCharacters(element)
	{
		var str = element.value;
		var i = str.length;
		while (i--) {
		  var charCode = str[i].charCodeAt(0);
		  if ((charCode >= 33 && charCode <=43) ||(charCode >= 48 && (charCode > 57 && charCode<=127))  || (charCode >= 58 && charCode <= 122) || charCode==128 ||charCode==154 || charCode==169 || charCode==174 || charCode == 189 || charCode == 165 || charCode==8482 || charCode==163 || charCode == 8377 || charCode==8361 || charCode==8721 || charCode==8364 || charCode==8352 || charCode==8365 || charCode==215 || charCode==247)
		
			  {
			  element.value="";
			  element.focus();
			 
			  }
		  
		}
	}
	//***07/april/2025**check for hindi characters in address field*****

function checkHindiAddressCharacters(currId)
{
  var val = document.getElementById(currId).value;
  
  if(val == null || val == '')
  {
     return true;
  }
  else
  {
     var str = val;
	 var i = str.length;
	 while (i--) {
	 var charCode = str[i].charCodeAt(0);
	 if ((charCode >= 33 && charCode <=43) ||(charCode >= 48 && (charCode > 57 && charCode<=127))  || (charCode >= 58 && charCode <= 122) || charCode==128 ||charCode==154 || charCode==169 || charCode==174 || charCode == 189 || charCode == 165 ||charCode==8482 || charCode==163 || charCode == 8377 || charCode==8361 || charCode==8721 || charCode==8364 || charCode==8352 || charCode==8365 || charCode==215 || charCode==247)
	   {
		 document.getElementById(currId).value="";
		 document.getElementById(currId).focus();
		 return false;
		}
	  
	}
	return true;
  }
}
	
	function checkForEngWithDigitCharacters(element)
	{
		var str = element.value;
		var i = str.length;
		while (i--) {
		  var charCode = str[i].charCodeAt(0);	  
		  if ((charCode >= 33 && charCode <=43) ||(charCode >= 48 && (charCode > 57 && charCode < 58) )  || (charCode >= 58 && charCode <= 64) || (charCode <= 65 && (charCode >= 90 && charCode <= 91)) 
				  ||(charCode >= 91 && charCode <= 96) || (charCode >= 97 && charCode >= 123)  ||  (charCode >= 123)
				  )
			  {
			  element.value="";
			  element.focus();
			  }
		 
		}
	} 
	
	function onlyHindiCharAllowEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isNumericValue(event.which) || isSymbolsValue(event.which) )
					return false;
		
				else
					return true;

	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
function languageBasedInput(event, lang){
 	if(lang == 'HI')
 	{
 		if(onlyHindiCharAllowEvent(event))
 			return true;
 		else
 			return false;
 	}
 	else
 		if(onlyEngCharAllowEvent(event))
 			return true;
 		else
 			return false;
 }
 
 function languageBasedInputAddress(event, lang){
 	if(lang == 'HI')
 	{
 		if(onlyHindiCharAllowEvent(event) || isNumericValue(event.which) || isSymbolsEvent(event.which) || isSpaceEvent(event.which))
 			return true;
 		else
 			return false;
 	}
 	else
 		if(onlyEngCharAllowEvent(event) || isNumericValue(event.which) || isSymbolsEvent(event.which) || isSpaceEvent(event.which))
 			return true;
 		else
 			return false;
 }
   ///***************************************************
   
   
   ///////////////ADDED_ON_06-04-2026/////////////////// 
     
     function filterInput(el, type) {
         	    let regexMap = {
         	        english: /[^a-zA-Z\s]/g,
         	        hindi: /[^\u0900-\u097F\s]/g,
         	        numbers: /[^0-9]/g,
		   			addrEnglish: /[^a-zA-Z0-9\s&.()\/\-\,']/g,
		   			addrHindi: /[^\u0900-\u097F0-9\s&.()\/\-\,']/g,
		   			email: /[^a-zA-Z0-9@._\-]/g
         	    };

         	    el.value = el.value.replace(regexMap[type], '');
         	}
   	
   	
    ///////////////ADDED_ON_06-04-2026/////////////////// 
	
	
   