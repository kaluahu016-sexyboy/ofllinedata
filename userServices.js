
$(document).ready(function(){
	
	
	// Add smooth scrolling to all links in navbar + footer link
	  
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		  
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 900, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  
	  
	});
	
	  
	  
	$(window).scroll(function() {
	    $(".slideanim").each(function(){
	      var pos = $(this).offset().top;

	      var winTop = $(window).scrollTop();
	        if (pos < winTop + 600) {
	          $(this).addClass("slide");
	        }
	    });
	});
	  

	$("#us_cr_btn").click(function(){
	try{
		if(validate_us_rc_login_frm()){
			$("#spinner").show();
			$("#spinnerCir").show();
		//	$("#us_rc_login_frm").attr('action', 'us_validateRegistredDocCertificate');
			$("#us_rc_login_frm").submit();
			return true;
		}else
			return false;
		
	}catch (e) {
		alert("Please Try Again");
		return false;
	}
});


	/****************************************************************************************************
	* 										stampRefund_dashboard.jsp										*
	*****************************************************************************************************/
	
	
	$("#presenter_detail_div").click(function(){
		document.getElementById("presenter_detail_frm").submit();
		//alert(this.id);
	});
	$("#stamp_detail_div").click(function(){
		document.getElementById("stamp_detail_frm").submit();
		//alert(this.id);
	});
	$("#preview_div").click(function(){
		document.getElementById("preview_frm").submit();
		//alert(this.id);
	});
	$("#submit_Appointmentdiv").click(function(){
		document.getElementById("submit_Appointmentfrm").submit();
		//alert(this.id);
	});
	$("#submit_div").click(function(){
		document.getElementById("submit_frm").submit();
		//alert(this.id);
	});
	$("#print_doc_div").click(function(){
		document.getElementById("print_doc_frm").submit();
		//alert(this.id);
	});
	
	$("#application_status_frm_div").click(function(){
		document.getElementById("application_status_frm").submit();
		//alert(this.id);
	});
	
	$("#application_appeal_frm_div").click(function(){
		document.getElementById("application_appeal_frm").submit();
		//alert(this.id);
	});
	
	



	  
	 /****************************************************************************************************
	  * 										hide headder on scroll									 *
	  ****************************************************************************************************/
	  
/*	  
	  var prevScrollpos = window.pageYOffset;
	  window.onscroll = function() {
		  
		  	var currentScrollPos = window.pageYOffset;
	  
		    if (prevScrollpos<50) {
		    	
		    	document.getElementById("prerna4_header_div").style.visibility= 'visible';
		      	document.getElementById("prerna4_header_div").style.opacity= '2';
		    	document.getElementById("prerna4_header_div").style.transition= 'visibility 2s, opacity 2.5s linear';
		    	document.getElementById("prerna4_header_div").style.height='100pt';
		    	//document.getElementById("prerna4_header_div").style.display = "block";
			    
		      
		    } else {
		    	document.getElementById("prerna4_header_div").style.visibility= 'hidden';
		    	document.getElementById("prerna4_header_div").style.opacity= '0';
		    	document.getElementById("prerna4_header_div").style.transition= 'visibility 0s, opacity 0.5s linear';
		    	document.getElementById("prerna4_header_div").style.height='0pt';
		    	//document.getElementById("prerna4_header_div").style.display = "none";
		    }
		    prevScrollpos = currentScrollPos;
	  }
	  
*/	

/*
	$("#login_id").change(function(){
		
		try{
			
			check_userid_availability(this,'login_idMsg');
			
		}catch (e) {
			
		}
	});*/
	$("#login_id").blur(function(){
		
		try{
			//############################### Added ON 28/07/2022 ##############################################
			if(checkUserServicesLoginIdChars(this))
				check_userid_availability(this,'login_idMsg');			
		}catch (e) {
			
		}
	});
	
	$("#mr_login_id").blur(function(){
		
		try{
			//############################### Added ON 28/07/2022 ##############################################
			if(checkUserServicesLoginIdChars(this))
				check_mr_userid_availability(this,'login_idMsg');			
		}catch (e) {
			
		}
	});
	$("#check_userid_availability").click(function(){
		addRemoveClass(document.getElementById("availability_status"), "collapse", "collapse-in");
		
//		addRemoveClass(document.getElementById("check_userid_availability_spinner"), "collapse", "spinner-border spinner-border-sm");
		this.style.pointerEvents = 'none';		
		this.style.pointerEvents = 'auto';
		
	});

	
	$("#send_opt_span").click(function(){
		
		try{
			
			send_user_otp('userMobNo','userMobNoMsg',this);
				
			
		}catch (e) {
			
		}
		
		
		
		
	});
	
	
		
	$("#verify_otp_span").click(function(){
		
			
		try{
			
			verify_user_otp('enter_otp','enter_otpMsg',this);
				
			
		}catch (e) {
			
		}
			
		
	});	
	
	
	//document.querySelector("#password-visibility-toggle").id;
	
	$("#password-visibility-toggle").click(function(){
		
		/**********also Use this one****************/
		
//		if( $("#password").prop('type')=='password' )
//			$("#password").prop('type', 'text');
//		else
//			$("#password").prop('type', 'password');
		
		/**********also Use this one****************/		
		
		
		$("#login_password").prop( 'type' ,($("#login_password").prop('type')=='password') ? 'text' : 'password');
		
//		$(this).text(( $(this).text()=='देखें') ? 'छुपायें' : 'देखें');

//		$(this).text(( $(this).text()=='S ' ) ? ' H ' : ' S' );
		
		if ( document.getElementById("password-toggle").classList.contains('fa-eye') )
			document.getElementById("password-toggle").classList.toggle('fa-eye-slash');
			
		
/*		
		$(document.getElementById("password-toggle")).removeClass("far fa-eye fa-1x").addClass("far fa-eye-slash fa-1x");
		document.getElementById("password-toggle").setAttribute("class", "far fa-eye fa-1x");
		$(document.getElementById("password-toggle")).removeClass("far fa-eye-slash fa-1x").addClass("far fa-eye fa-1x");		
*/		 
	
	});
	
	
//	
//	$("#login_password").blur(function(){
//		try{
//			this.value=hash_sha(this.value,salt);
//		}catch (e) {
//			this.value='';
//			alert("please try after sometime..!");
//		}
//	});
//	
	
	$("#user_login_submit_btn").click(function(){
		
		try{
		
			     var app_id=document.querySelector("#application_id").value;
			     var login_password= document.querySelector("#login_password").value;
			     var captcha= document.querySelector("#enteredCaptcha").value;
			     
			     if(app_id==""){   
			    	 document.getElementById('application_idMsg').innerHTML = "\u092A\u094D\u0930\u092F\u094B\u0915\u094D\u0924\u093E \u0928\u093E\u092E\u200B \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error hidden","form__label--error ellipsis");
			    	 document.querySelector("#application_id").focus();
			         return false;
			         
			     }else if(login_password==""){   
		        	 document.getElementById('login_passwordMsg').innerHTML = "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
		        	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error hidden","form__label--error ellipsis");
		        	 document.querySelector("#login_password").focus();
					 return false;
					  
				 }else if(captcha=="") {         
	                 document.getElementById('enteredCaptchaMsg').innerHTML = "\u0915\u0948\u092A\u094D\u091A\u093E \u091A\u093F\u0924\u094D\u0930\u200B \u0938\u0947 \u0935\u0930\u094D\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
	                 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error hidden","form__label--error ellipsis");
	                 document.querySelector("#enteredCaptcha").focus();
	                 return false;
			     }else{
			    	 
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error ellipsis","form__label--error hidden");
			    	 
			    	 $("#spinner").show();
			    	 
			    	 
			    	 document.querySelector("#login_password").value=hash_sha(document.querySelector("#login_password").value,salt);
			    	 
			    	 $("#igrs_user_login_form").attr('action', 'us_secureIgrsUserLogin');
					 $("#igrs_user_login_form").submit();
					 
					 return true;
			     }
	     
		}catch (e) {			
			return false;
		}
	
		
	});
	
	$("#mr_login_submit_btn").click(function(){
		
		try{
		
			     var app_id=document.querySelector("#application_id").value;
			     var login_password= document.querySelector("#login_password").value;
			     var captcha= document.querySelector("#enteredCaptcha").value;
			     
			     if(app_id==""){   
			    	 document.getElementById('application_idMsg').innerHTML = "\u092A\u094D\u0930\u092F\u094B\u0915\u094D\u0924\u093E \u0928\u093E\u092E\u200B \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error hidden","form__label--error ellipsis");
			    	 document.querySelector("#application_id").focus();
			         return false;
			         
			     }else if(login_password==""){   
		        	 document.getElementById('login_passwordMsg').innerHTML = "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
		        	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error hidden","form__label--error ellipsis");
		        	 document.querySelector("#login_password").focus();
					 return false;
					  
				 }else if(captcha=="") {         
	                 document.getElementById('enteredCaptchaMsg').innerHTML = "\u0915\u0948\u092A\u094D\u091A\u093E \u091A\u093F\u0924\u094D\u0930\u200B \u0938\u0947 \u0935\u0930\u094D\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
	                 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error hidden","form__label--error ellipsis");
	                 document.querySelector("#enteredCaptcha").focus();
	                 return false;
			     }else{
			    	 
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error ellipsis","form__label--error hidden");
			    	 
			    	 $("#spinner").show();
			    	 
			    	 
			    	 document.querySelector("#login_password").value=hash_sha(document.querySelector("#login_password").value,salt);
			    	 
			    	 checkExistingLogin();
			    	 
			    	 
			    	 //$("#mr_user_login_form").attr('action', 'mr_secureIgrsUserLogin');
					 //$("#mr_user_login_form").submit();
					 
					 //return true;
					 
					 return false
			     }
	     
		}catch (e) {			
			alert('Something went wrong. Please Try Again later.');
			return false;
		}
	
		
	});
	
	
	
	/****************************************************************************************************
	* 										userRegistrationHome.jsp											*
	****************************************************************************************************/
	
	
	$("#igrs_new_user_btn").click(function(){
		
		$("#mr_login_frm").attr('action', 'userServicesSignUp');
		
	});
	
	$("#us_user_login_btn").click(function(){
		
		$("#us_login_frm").attr('action', 'userServicesLogin');
		
	});
	
	
	
	
	/****************************************************************************************************
	* 										userRegistrationSignUp.jsp										*
	****************************************************************************************************/
	
	
	
	
	
	
	$("#refreshCaptchBtn").click(function(){
		getCaptchaString('captchaImage');
	});
	
	
	$("#userMobNo").keypress(function(){		
		return numbersOnly(event);	
	});
		
	$("#userMobNo").blur(function(){		
		return isAllSameDigit(this);
	});
	
	
	
	$("#password").blur(function(){		
		return checkPasswordCombination(this);		
	});
		
	$("#rePassword").blur(function(){
		
		if(checkPasswordCombination(this))
			return matchPassword();
		else
			return false;
	});
	
	$("#igrs_user_sign_in_btn").click(function(){
		try{
			
			
			//if(validate_otp('otp_validate')){
				
				addRemoveClass(this, "disabled", "");
			
				if(validateLoginPage(this,2)){
					$("#spinner").show();
					$("#login_frm").attr('action', 'validateSignUpDetail');
					$("#login_frm").submit();
					return true;
				}else
					return false;
					
			//}else{
				
			//	return false;
				
			//}
			
		}catch (e) {
			alert("Plese Try Again");
			return false;
		}
	});
	
	$("#us_igrs_user_sign_in_btn").click(function(){
		try{
			
			
			//if(validate_otp('otp_validate')){
				
				
			
				if(validateLoginPage(this,2)){
					addRemoveClass(this, "disabled", "");
					$("#spinner").show();
					$("#login_frm").attr('action', 'us_validateSignUpDetail');
					$("#login_frm").submit();
					return true;
				}else
					return false;
					
			//}else{
				
			//	return false;
				
			//}
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
	$("#mr_user_sign_in_btn").click(function(){
		try{
			
			
			//if(validate_otp('otp_validate')){
							
				if(mr_validateLoginPage(this,2)){
					addRemoveClass(this, "disabled", "");
					$("#spinner").show();
					$("#login_frm").attr('action', 'mr_validateSignUpDetail');
					$("#login_frm").submit();
					return true;
				}else
					return false;
					
			//}else{
				
			//	return false;
				
			//}
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
	$("#CSC_igrs_user_sign_in_btn").click(function(){
		try{
			if(validateLoginPage(this,3)){
				$("#spinner").show();
				$("#login_frm").attr('action', 'validateSignUpDetailForStampRefundCsc');
				$("#login_frm").submit();
				return true;
			}else
				return false;
		}catch (e) {
			alert("Plese Try Again");
			return false;
		}
	});
	
	$("#NM_igrs_user_sign_in_btn").click(function(){
		try{
			if(validateLoginPage(this,3)){
				$("#spinner").show();
				$("#login_frm").attr('action', 'validateSignUpDetailForStampRefundNiveshMitra');
				$("#login_frm").submit();
				return true;
			}else
				return false;
		}catch (e) {
			alert("Plese Try Again");
			return false;
		}
	});
	
	
	$("#us_eDistrictLogInBtn").click(function(){
	
		try{
				$("#spinner").show();
				$("#eDistrict_login_frm").attr('action', 'redirectToSelectedService');
				$("#eDistrict_login_frm").submit();
				return true;
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
	$("#us_ispLogInBtn").click(function(){
	
		try{
		
				$("#spinnernew").show();
				$("#isp_login_frm").attr('action', 'us_ispUserLogin');
				$("#isp_login_frm").submit();
				return true;
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
	$("#us_ispMarriageLogInBtn").click(function(){
	
		try{
		
				$("#spinnernew").show();
				$("#isp_login_frm").attr('action', 'proceed_ispMarriageAction');
				$("#isp_login_frm").submit();
				return true;
			
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
	
	
	
    $('#us_btn_presenter_detail').click(function() {
    	
    	try {
    		
    		if(document.getElementById("want_to_save_msg").value)
    			if(validatePropertyEvaluation_user(document.getElementById("want_to_save_msg").value))
					document.getElementById("srUserDetailForm").submit();
    		
		} catch (e) {
			alert(error_msg+e);
			return false;
		}
		
        
    });
    
	
	
	
	/**********************USER SERVICES - STAMP REFUND*************************/
	
	
	$("#us_sr_sign_in_btn").click(function(){
		try{
		
			
			
			if(document.getElementById('districtList').value != -1){
				$("#spinner").show();
				$("#login_frm").attr('action', 'us_validateSignUpDetailForStampRefund');
				$("#login_frm").submit();
				return true;
			}else{
				document.getElementById('districtListMsg').innerHTML = 'कृपया जनपद चुने।';
				document.getElementById('districtList').style.border='1px solid red';
				document.getElementById('districtList').focus();
				return false;
			}
		}catch (e) {
			alert("Please Try Again");
			return false;
		}
	});
	
 		
	$("#us_sr_new_user_btn").click(function(){
		
		$("#us_sr_login_frm").attr('action', 'us_stampRefundSignUp');
		
	});
	
	
	
  	/**********************USER SERVICES - STAMP REFUND*************************/
});


	
	function check_mr_userid_availability(user_id,user_id_msg){
		
		try{
			
		    var user_id_value = user_id.value;
//		    var user_id_msg = document.getElementById(user_id_msg);
		    
		    var xmlHTTP;
		    
		    
			$('#spinner').show();
	
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(user_id_msg).innerHTML = "<font color='red'><i class='fas fa-times'></i> अनुप्लब्ध</font>";
							document.getElementById("isUsernameAvailable").value="no";
			   				removeAttribute(user_id);
							errorBorder(user_id);
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(user_id_msg).innerHTML = "<font color='green'><i class='fas fa-check-circle'></i> उपलब्ध</font>";
							document.getElementById("isUsernameAvailable").value="yes";
							
							//addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							//verify_otp_span.style.pointerEvents = 'none';		
							//verify_otp_span.style.pointerEvents = 'auto';
							//document.getElementById('otp_validate').value="true";
							addRemoveClass(document.getElementById('us_igrs_user_sign_in_btn'), "disabled", "");
							user_id.style.border='1px solid green';

							
							
							
						//	user_id.focus();
			        		
						}else{
							
							document.getElementById(user_id_msg).innerHTML = "<font color='red'> आई.डी. अमान्य हैं। कृपया पुनः प्रयास करें।</font>";
			   				errorBorder(user_id);
				
						}
									
						$('#spinner').hide();
				
			        });

					$('#spinner').hide();
	
		        }
		    }
		    
//		    xmlHttp.open("GET", "check_userid_availability.action?login_id=" + user_id_value, true);
//		    xmlHTTP.send();
	xmlHTTP.open("POST", "check_mr_userid_availability.action", true);	    	
	var params = 'login_id='+ user_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);								
	}catch (e) {
		$('#spinner').hide();
		alert("Please Try Again");			
	}
		
	}
	
	
	function send_otp_if_mobile_available(mobile, mobile_msg, element){
		
		if(check_mr_mobile_availability(mobile, mobile_msg, element))
			return true;
		else
			return false;
		
		
	}
	
	function check_mr_mobile_availability(mobileId,mobile_msg, element){
		
		try{
			
			var mobile = document.getElementById(mobileId);
		    var mobile_value = mobile.value;
//		    var mobile_msg = document.getElementById(mobile_msg);
		    
		    var xmlHTTP;
		    
		    
			$('#spinner').show();
	
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(mobile_msg).innerHTML = "<font color='red'><i class='fas fa-times'></i> इस मोबाइल पर पूर्व में पंजीकरण हो चुका है।</font>";
							document.getElementById("isMobileAvailable").value="no";
			   				removeAttribute(mobile);
							errorBorder(mobile);
							$('#spinner').hide();
							
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(mobile_msg).innerHTML = "<font color='green'><i class='fas fa-check-circle'></i> ओ.टी.पी. भेजा गया।</font>";
							document.getElementById("isMobileAvailable").value="yes";
							
							
							mr_send_user_otp('mobile','mobileMsg',element);
							
							
							//addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							//verify_otp_span.style.pointerEvents = 'none';		
							//verify_otp_span.style.pointerEvents = 'auto';
							//document.getElementById('otp_validate').value="true";
							//addRemoveClass(document.getElementById('us_igrs_user_sign_in_btn'), "disabled", "");
							mobile.style.border='1px solid green';

							
							
							
						//	mobile.focus();
			        		
						}else{
							
							document.getElementById(mobile_msg).innerHTML = "<font color='red'> मोबाइल अमान्य हैं। कृपया पुनः प्रयास करें।</font>";
			   				errorBorder(mobile);
							$('#spinner').hide();
				
						}
									
				
			        });

	
		        }
		    }
		    
	xmlHTTP.open("POST", "check_mr_mobile_availability.action", true);	    	
	var params = 'mobile='+ mobile_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);								
	}catch (e) {
		$('#spinner').hide();
		alert("Please Try Again");			
	}
		
	}
	
	
	function check_userid_availability(user_id,user_id_msg){
		
		try{
				
		    var user_id_value = user_id.value;
//		    var user_id_msg = document.getElementById(user_id_msg);
		    
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(user_id_msg).innerHTML = "<font color='red'><i class='fas fa-times'></i> अनुप्लब्ध</font>";
							document.getElementById("isUsernameAvailable").value="no";
			   				removeAttribute(user_id);
							errorBorder(user_id);
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(user_id_msg).innerHTML = "<font color='green'><i class='fas fa-check-circle'></i> उपलब्ध</font>";
							document.getElementById("isUsernameAvailable").value="yes";
							
							//addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							//verify_otp_span.style.pointerEvents = 'none';		
							//verify_otp_span.style.pointerEvents = 'auto';
							//document.getElementById('otp_validate').value="true";
							addRemoveClass(document.getElementById('us_igrs_user_sign_in_btn'), "disabled", "");
							user_id.style.border='1px solid green';

							
							
							
						//	user_id.focus();
			        		
						}else{
							
							document.getElementById(user_id_msg).innerHTML = "<font color='red'> आई.डी. अमान्य हैं। कृपया पुनः प्रयास करें।</font>";
			   				errorBorder(user_id);
				
						}
						
		                hideSpinner();
			            	
			        });

					hideSpinner();
					
		        }
		    }
		    
//		    xmlHttp.open("GET", "check_userid_availability.action?login_id=" + user_id_value, true);
//		    xmlHTTP.send();
	xmlHTTP.open("POST", "us_check_userid_availability.action", true);	    	
	var params = 'login_id='+ user_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);								
			}catch (e) {
				hideSpinner();
				alert("Plese Try Again");			
			}
		
	}
	
	function send_user_otp(user_mobile_id,user_mobile_id_msg,send_opt_span){
		
		try{
				
//		    var user_mobile_id_value = user_mobile_id.value;
		    var user_mobile_id_value = document.getElementById(user_mobile_id).value;
		    
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(user_mobile_id_msg).innerHTML = "<font color='green'>ओ. टी. पी. भेजा गया</font>";
//			   				errorBorder( document.getElementById(user_mobile_id));
			   				document.getElementById(user_mobile_id).focus();
							document.getElementById('otp_sent').value="true";
							addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							send_opt_span.style.pointerEvents = 'none';		
							send_opt_span.style.pointerEvents = 'auto';
				
				
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(user_mobile_id_msg).innerHTML = "<font color='red'>ओ. टी. पी. भेजना असफल रहा।</font>";
//							removeAttribute( document.getElementById(user_mobile_id));
			        		
						}else{
							
							document.getElementById(user_mobile_id_msg).innerHTML = "<font color='red'> "+value+" कृपया पुनः प्रयास करें।</font>";
//			   				errorBorder( document.getElementById(user_mobile_id));
			   				document.getElementById(user_mobile_id).focus();
				
						}
						
		                hideSpinner();
			            	
			        });

					hideSpinner();
					
					
		        }
		    }
		    
//		    xmlHttp.open("GET", "us_send_user_otp.action?user_mobNo=" + user_mobile_id_value, true);
//		    xmlHTTP.send();
	xmlHTTP.open("POST", "us_send_user_otp.action", true);	    	
	var params = 'user_mobNo='+ user_mobile_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);				
			}catch (e) {
				hideSpinner();
				alert("Please Try Again");			
			}
		
	}
		
	function verify_user_otp(enter_otp_id,enter_otp_id_msg,verify_otp_span){
		
		try{
				
//		    var enter_otp_id_value = enter_otp_id.value;
		    var enter_otp_id_value = document.getElementById(enter_otp_id).value;
		    
		    var xmlHTTP;
		    
		    
			
			$("#spinner").show();
	
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(enter_otp_id_msg).innerHTML = "<font color='green'> ओ.टी.पी सत्यापित हुआ</font>";
			   				//removeAttribute(document.getElementById(enter_otp_id));
							
							addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							verify_otp_span.style.pointerEvents = 'none';		
							verify_otp_span.style.pointerEvents = 'auto';
							document.getElementById('otp_validate').value="true";
							
							addRemoveClass(document.getElementById('us_igrs_user_sign_in_btn'), "disabled", "");
							
							
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(enter_otp_id_msg).innerHTML = "<font color='red'> ओ.टी.पी. सही नहीं है</font>";
							//errorBorder(document.getElementById(enter_otp_id));
			   				document.getElementById(enter_otp_id).focus();
			        		
						}else{
							
							document.getElementById(enter_otp_id_msg).innerHTML = "<font color='red'> "+value+" कृपया पुनः प्रयास करें। </font>";
			   				//errorBorder(document.getElementById(enter_otp_id));
			   				document.getElementById(enter_otp_id).focus();
				
						}
						
						$("#spinner").hide();
			            	
			        });
					$("#spinner").hide();
					
		        }
		    }
		    
		    //xmlHttp.open("GET", "verify_user_otp.action?enter_otp=" + enter_otp_id_value, true);
		    //xmlHTTP.send();
	xmlHTTP.open("POST", "us_verify_user_otp.action", true);	    	
	var params = 'enter_otp='+ enter_otp_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);                
		    								
			}catch (e) {
				hideSpinner();
				alert("Please Try Again");			
			}
	}		
		
		
		
		
	
	function mr_send_user_otp(user_mobile_id,user_mobile_id_msg,send_opt_span){
		
		try{
				
//		    var user_mobile_id_value = user_mobile_id.value;
		    var user_mobile_id_value = document.getElementById(user_mobile_id).value;
		    
			$('#spinner').show();
		    if(user_mobile_id_value == '')
		    {
		    	document.getElementById(user_mobile_id_msg).innerHTML = 'कृपया मोबाइल न० भरें।';
				$('#spinner').hide();
		    	return false;
		    }
		    else if(user_mobile_id_value.length != 10)
		    {
		    	document.getElementById(user_mobile_id_msg).innerHTML = 'मोबाइल न० 10 संख्याओं का होना चाहिए।';
				$('#spinner').hide();
		    	return false;
		    }
		    var xmlHTTP;
		    
		    
	
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
						
						if(key=='RESULT' && value=='true'){
							
							document.getElementById(user_mobile_id_msg).innerHTML = "<font color='green'>ओ. टी. पी. भेजा गया</font>";
//			   				errorBorder( document.getElementById(user_mobile_id));
			   				//document.getElementById(user_mobile_id).focus();
							document.getElementById('otp_sent').value="true";
							//addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							
							
							
							document.getElementById('mobilePre').innerHTML = document.getElementById('mobile').value;
							//document.getElementById('OtpErrorMsg').innerHTML = '';
							document.getElementById('mobile_otp').value = '';

							document.getElementById('editMobileIcon').style.display = 'inline-block';
							document.getElementById('mobile_otp').style.border ='1px solid black';
							document.getElementById('mobile_otp').disabled =false;
							

							$('#btn_verifyOTP').show();
							
							$('#otp_verified_msg').hide();
							
							$("#spinner").hide();
							
							toggle_divs('content_before_otp_sent', 'content_after_otp_sent');
							
							
							
							//send_opt_span.style.pointerEvents = 'none';		
							//send_opt_span.style.pointerEvents = 'auto';
				
				
						}else if(key=='RESULT' && value=='false'){
							
							if(key=='OTP_LIMIT_REACHED' && value=='true'){
								document.getElementById(user_mobile_id_msg).innerHTML = "OTP सीमा समाप्त हो चुकी है। कृपया कुछ समय पश्चात पुनः प्रयास करें।";
							}
							else{
								document.getElementById(user_mobile_id_msg).innerHTML = "<font color='red'>ओ. टी. पी. भेजना असफल रहा।</font>";
//								removeAttribute( document.getElementById(user_mobile_id));
			        		}
						}else{
							
							document.getElementById(user_mobile_id_msg).innerHTML = "<font color='red'> "+value+" कृपया पुनः प्रयास करें।</font>";
//			   				errorBorder( document.getElementById(user_mobile_id));
			   				document.getElementById(user_mobile_id).focus();
				
						}
						
		                $("#spinner").hide();
			            	
			        });

					$("#spinner").hide();
					
					
		        }
		    }
		    
//		    xmlHttp.open("GET", "us_send_user_otp.action?user_mobNo=" + user_mobile_id_value, true);
//		    xmlHTTP.send();
	xmlHTTP.open("POST", "us_send_user_otp.action", true);	    	
	var params = 'user_mobNo='+ user_mobile_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);				
			}catch (e) {
				$("#spinner").hide();
				alert("Please Try Again");			
			}
		return false;
	}
		
				
	function mr_verify_user_otp(enter_otp_id,enter_otp_id_msg,verify_otp_span){
		
		try{
				
//		    var enter_otp_id_value = enter_otp_id.value;
		    var enter_otp_id_value = document.getElementById(enter_otp_id).value;
		    
		    
		    
			$('#spinner').show();
	
		    if(enter_otp_id_value == '')
		    {
		    	document.getElementById(enter_otp_id_msg).innerHTML = 'कृपया OTP भरें।';
				$('#spinner').hide();
		    	return false;
		    }
		    
		    var xmlHTTP;
		    
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
						
						if(key=='RESULT' && value=='true'){
							
							//document.getElementById(mobile_otpMsg).innerHTML = "<font color='green'> ओ.टी.पी सत्यापित हुआ</font>";
			   				//removeAttribute(document.getElementById(enter_otp_id));
							
							//addRemoveClass(document.getElementById("enter_otp_div"), "collapse", "collapse-in");
							//verify_otp_span.style.pointerEvents = 'none';		
							//verify_otp_span.style.pointerEvents = 'auto';
							document.getElementById('otp_validate').value="true";
							
							
							document.getElementById('enter_otp').value=enter_otp_id_value;
							
							
							//document.getElementById('commonBtn').disabled=false;

							document.getElementById(enter_otp_id_msg).innerHTML = '';
							document.getElementById('editMobileIcon').style.display = 'none';
							document.getElementById('mobile_otp').style.border ='1px solid green';
							document.getElementById('mobile_otp').disabled =true;
							
							$('#btn_verifyOTP').toggleClass('visible');
							$('#btn_verifyOTP').animate({
								opacity:'toggle',
							},50);
							
							$('#otp_verified_msg').toggleClass('visible');
							$('#otp_verified_msg').animate({
								opacity:'toggle',
							},700);
							
							
							
							addRemoveClass(document.getElementById('mr_user_sign_in_btn'), "disabled", "");
							
							
						}else if(key=='RESULT' && value=='false'){
							
							document.getElementById(enter_otp_id_msg).innerHTML = "<font color='red'> ओ.टी.पी. सही नहीं है</font>";
							//errorBorder(document.getElementById(enter_otp_id));
			   				document.getElementById(enter_otp_id).focus();
			        		
						}else{
							
							document.getElementById(enter_otp_id_msg).innerHTML = "<font color='red'> "+value+" कृपया पुनः प्रयास करें। </font>";
			   				//errorBorder(document.getElementById(mobile_otp));
			   				document.getElementById(enter_otp_id).focus();
				
						}
						
						$("#spinner").hide();
			            	
			        });
					$("#spinner").hide();
					
		        }
		    }
		    
		    //xmlHttp.open("GET", "verify_user_otp.action?enter_otp=" + enter_otp_id_value, true);
		    //xmlHTTP.send();
	xmlHTTP.open("POST", "us_verify_user_otp.action", true);	    	
	var params = 'enter_otp='+ enter_otp_id_value;
	xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   
	xmlHTTP.send(params);                
		    								
			}catch (e) {
				$("#spinner").hide();
				alert("Please Try Again");			
			}
		
	return false;
	}		
		
	
	
	function msgClose(id){
		 document.getElementById(id).style.display = "none";
	}

	function getCaptchaString(captchaImgId) {		
		$('#spinner').show();		
		
		$.post('getCatchaActionJson',{
	    },
	    function (responseJson) {
	        var captchaImage = document.getElementById(captchaImgId);
	        captchaImage.src = responseJson;
	        
	        $('#spinner').hide();
	       
	    });
	}
		
		
	function checkPasswordCombination(element)   
	{   
		//var decimal=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,15}$/;  
		//var decimal=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?=.*^[0-9])(?=.*(@|#|\*|\$))(?!.*\s).{8,15}$/;  
		var decimal=  /^(?!.*(?:012|123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|210))(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[0-9])(?=.*(@|#|\*|\$))(?!.*\s).{8,15}$/;  

		if(element.value ==''){
			
		}else{
			if(element.value.match(decimal)){
				//encryptLoginPassword(element);
				return true;  
			}else{   
				alert('\u0906\u092A\u0915\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0915\u092E \u0938\u0947 \u0915\u092E 8 \u0938\u0947 12 \u0905\u0915\u094D\u0937\u0930 \u0915\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F\u0964 \u0907\u0928\u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u0915\u093E \u0915\u0948\u092A\u091F\u093F\u0932 \u0905\u0915\u094D\u0937\u0930,\u090F\u0915 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u0915\u093E \u0938\u094D\u092E\u093E\u0932 \u0905\u0915\u094D\u0937\u0930, \u090F\u0915 \u0938\u094D\u092A\u0947\u0936\u0932 \u0915\u0948\u0930\u0947\u0915\u094D\u091F\u0930 \u0924\u0925\u093E \u090F\u0915 \u0905\u0902\u0915 \u0915\u093E \u0939\u094B\u0928\u093E \u0905\u0928\u093F\u0935\u093E\u0930\u094D\u092F \u0939\u0948\u0964 \u0938\u094D\u092A\u0947\u0936\u0932 \u0915\u0948\u0930\u0947\u0915\u094D\u091F\u0930 \u0915\u0947 \u0932\u093F\u090F @, #, * \u0905\u0925\u0935\u093E $ \u092E\u0947\u0902 \u0938\u0947 \u0915\u093F\u0938\u0940 \u090F\u0915 \u0915\u094B \u091A\u0941\u0928\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092E\u0947\u0902 \u0932\u0917\u093E\u0924\u093E\u0930(consecutive) 3 \u0905\u0902\u0915 (\u0909\u0926\u093E\u0939\u0930\u0923: 123/234 \u0905\u0925\u0935\u093E 432/321) \u0935\u0930\u094D\u091C\u093F\u0924 \u0939\u0948\u0964')  ;
				element.value="";
				return false;  
			}  
	}
	} 

	function matchPassword()
	{
		if(document.getElementById("password").value!=document.getElementById("rePassword").value){
			alert("\u0926\u093F\u092F\u093E \u0917\u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0914\u0930 \u0909\u092A\u0930\u094B\u0915\u094D\u0924 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0938\u092E\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964");
			document.getElementById("rePassword").value="";
			return false;
		}else{
			//encryptLoginPassword(document.getElementById("password"));		// with salt
			//encryptLoginPassword(document.getElementById("rePassword"));		// with salt
			getHashPassword(document.getElementById("password"));		// without salt
			getHashPassword(document.getElementById("rePassword"));		// without salt
			return true;
		}
	}
	

	function validate_otp(element){
		
		if(document.getElementById(element).value=="true")
			return true;
		else
			return false;
	}
	

	function validateLoginPage(element,val)
	{
		var flag=1;
		/*
		if(document.getElementById("districtList").value== "-1"){
			        document.getElementById("districtListMsg").innerHTML = "<font color='red'>*\u0915\u0943\u092A\u092F\u093E \u091C\u0928\u092A\u0926 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902\u0964</font>";
			        errorBorder(document.getElementById("districtList"));
			        document.getElementById("districtList").focus();
			        flag=0;
		}else{
					removeAttribute(document.getElementById("districtList"));
			        document.getElementById("districtListMsg").innerHTML = "";
		}	
		
		*/
			
		if(val==2 || val==3){
			
			if(document.getElementById("userMobNo").value.trim()== "" || document.getElementById("userMobNo").value.trim().length!=10 || isAllSameDigit(document.getElementById("userMobNo")) > 9){
			
			   	document.getElementById('userMobNoMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0938\u0902\u0916\u094D\u092F\u093E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			   	errorBorder(document.getElementById("userMobNo"));
			   	document.getElementById("userMobNo").focus();
			    flag=0;
			
			}else{
				removeAttribute(document.getElementById("userMobNo"));
				document.getElementById("userMobNoMsg").innerHTML = "";
		    }
		}
		
		if(val==2){
			if(document.getElementById("userName").value== ""){
			    document.getElementById('userNameMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u093E \u0928\u093E\u092E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("userName"));
			    document.getElementById("userName").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("userName"));
		       document.getElementById("userNameMsg").innerHTML = "";

	       }
		
			if(document.getElementById("login_id").value== ""){
			    document.getElementById('login_idMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0906\u0908\u0921\u0940 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("login_id"));
			    document.getElementById("login_id").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("login_id"));
		       document.getElementById("login_idMsg").innerHTML = "";

	       }
		
			
		   if(document.getElementById("password").value== ""){
			    document.getElementById('passwordMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("password"));
			    document.getElementById("password").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("password"));
		       document.getElementById("passwordMsg").innerHTML = "";

	       }
		
	   
		   if(document.getElementById("rePassword").value== ""){
		   		document.getElementById('rePasswordMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
		   		errorBorder(document.getElementById("rePassword"));
		   		document.getElementById("rePassword").focus();
		   		flag=0;	
		   }else{
			   removeAttribute(document.getElementById("rePassword"));
			   document.getElementById("rePasswordMsg").innerHTML = "";	
		   }
		    
		}
		

	   
	   if(document.getElementById("enteredCaptcha").value== ""){	
		   
	   	 	document.getElementById('enteredCaptchaMsg').innerHTML = "<font color='red'> * \u0915\u0943\u092A\u092F\u093E \u0915\u0948\u092A\u094D\u091A\u093E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
	     	document.getElementById("enteredCaptcha").focus();
	     	errorBorder(document.getElementById("enteredCaptcha"));
	     	flag=0;
	   
	   }else{
		   removeAttribute(document.getElementById("enteredCaptcha"));
		   document.getElementById("enteredCaptchaMsg").innerHTML = "";

	   }
	   
	   if(document.getElementById("isUsernameAvailable").value=='no'){
	   		var user_id = document.getElementById("login_id");
	   		var user_id_msg =  document.getElementById("login_idMsg");
	   		
	   		document.getElementById("commonMsg").style.display = "block";
	   		
	   		user_id.focus();
			errorBorder(user_id);
			user_id_msg.innerHTML = "<font color='red'> अनुप्लब्ध</font>";
			removeAttribute(user_id);
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   
	   if(document.getElementById("otp_sent").value == 'false'){
	   		//alert(document.getElementById("otp_sent").value);
	   		alert("कृपया सही मोबाइल नंबर दर्ज करके ओ.टी.पी. भेजें।");
	   		document.getElementById("commonMsg").style.display = "block";
	   		document.getElementById('userMobNoMsg').innerHTML = "<font color='red'> *कृपया सही मोबाइल नंबर दर्ज करके ओ.टी.पी. भेजें। </font>";
	     	document.getElementById("userMobNo").focus();
	   		
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   if(document.getElementById("otp_validate").value == 'false' && document.getElementById("otp_sent").value == 'true'){
	   		//alert(document.getElementById("otp_validate").value);
	   		alert("कृपया मोबाइल नंबर पर प्राप्त ओ.टी.पी. दर्ज करें।");
	   		document.getElementById("commonMsg").style.display = "block";
	   		document.getElementById('enter_otpMsg').innerHTML = "<font color='red'> कृपया मोबाइल नंबर पर प्राप्त ओ.टी.पी. दर्ज करें। </font>";
	     	document.getElementById("enter_otp").focus();
	   		
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   if(flag==1){
			    //encryptLoginPassword(document.getElementById("password"));
	            //encryptLoginPassword(document.getElementById("rePassword"));
				return true;
	   }else {
	        	        	 
	            return false;
		}
	}
	
	
	function mr_validateLoginPage(element,val)
	{
		var flag=1;
		if(val==2 || val==3){
			
			if(document.getElementById("mobile").value.trim()== "" || document.getElementById("mobile").value.trim().length!=10 || isAllSameDigit(document.getElementById("mobile")) > 9){
			
			   	document.getElementById('mobileMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0938\u0902\u0916\u094D\u092F\u093E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			   	errorBorder(document.getElementById("mobile"));
			   	document.getElementById("mobile").focus();
			    flag=0;
			
			}else{
				removeAttribute(document.getElementById("mobile"));
				document.getElementById("mobileMsg").innerHTML = "";
		    }
		}
		
		if(val==2){
			if(document.getElementById("mr_userName").value== ""){
			    document.getElementById('userNameMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u093E \u0928\u093E\u092E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("mr_userName"));
			    document.getElementById("mr_userName").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("mr_userName"));
		       document.getElementById("userNameMsg").innerHTML = "";

	       }
		
			if(document.getElementById("mr_login_id").value== ""){
			    document.getElementById('login_idMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0906\u0908\u0921\u0940 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("mr_login_id"));
			    document.getElementById("mr_login_id").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("mr_login_id"));
		       document.getElementById("login_idMsg").innerHTML = "";

	       }
		
			
		   if(document.getElementById("password").value== ""){
			    document.getElementById('passwordMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
			    errorBorder(document.getElementById("password"));
			    document.getElementById("password").focus();
			    flag=0;
		
		   }else{
			   removeAttribute(document.getElementById("password"));
		       document.getElementById("passwordMsg").innerHTML = "";

	       }
		
	   
		   if(document.getElementById("rePassword").value== ""){
		   		document.getElementById('rePasswordMsg').innerHTML = "<font color='red'> *\u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
		   		errorBorder(document.getElementById("rePassword"));
		   		document.getElementById("rePassword").focus();
		   		flag=0;	
		   }else{
			   removeAttribute(document.getElementById("rePassword"));
			   document.getElementById("rePasswordMsg").innerHTML = "";	
		   }
		    
		}
		

	   
	   if(document.getElementById("enteredCaptcha").value== ""){	
		   
	   	 	document.getElementById('enteredCaptchaMsg').innerHTML = "<font color='red'> * \u0915\u0943\u092A\u092F\u093E \u0915\u0948\u092A\u094D\u091A\u093E \u0905\u0902\u0915\u093F\u0924 \u0915\u0930\u0947\u0902\u0964</font>";
	     	document.getElementById("enteredCaptcha").focus();
	     	errorBorder(document.getElementById("enteredCaptcha"));
	     	flag=0;
	   
	   }else{
		   removeAttribute(document.getElementById("enteredCaptcha"));
		   document.getElementById("enteredCaptchaMsg").innerHTML = "";

	   }
	   
	   if(document.getElementById("isUsernameAvailable").value=='no'){
	   		var user_id = document.getElementById("mr_login_id");
	   		var user_id_msg =  document.getElementById("login_idMsg");
	   		
	   		document.getElementById("commonMsg").style.display = "block";
	   		
	   		user_id.focus();
			errorBorder(user_id);
			user_id_msg.innerHTML = "<font color='red'><i class='fas fa-times'></i> अनुप्लब्ध</font>";
			removeAttribute(user_id);
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   
	   if(document.getElementById("otp_sent").value == 'false'){
	   		//alert(document.getElementById("otp_sent").value);
	   		alert("कृपया सही मोबाइल नंबर दर्ज करके ओ.टी.पी. भेजें।");
	   		document.getElementById("commonMsg").style.display = "block";
	   		document.getElementById('mobileMsg').innerHTML = "<font color='red'> *कृपया सही मोबाइल नंबर दर्ज करके ओ.टी.पी. भेजें। </font>";
	     	document.getElementById("mobile").focus();
	   		
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   if(document.getElementById("otp_validate").value == 'false' && document.getElementById("otp_sent").value == 'true'){
	   		//alert(document.getElementById("otp_validate").value);
	   		alert("कृपया मोबाइल नंबर पर प्राप्त ओ.टी.पी. दर्ज करें।");
	   		document.getElementById("commonMsg").style.display = "block";
	   		document.getElementById('mobile_otpMsg').innerHTML = "<font color='red'> कृपया मोबाइल नंबर पर प्राप्त ओ.टी.पी. दर्ज करें। </font>";
	     	document.getElementById("mobile_otp").focus();
	   		
	   		flag=0;
	   }
	   else{
	   		document.getElementById("commonMsg").style.display ='none';
	   }
	   
	   if(flag==1){
			    //encryptLoginPassword(document.getElementById("password"));
	            //encryptLoginPassword(document.getElementById("rePassword"));
				return true;
	   }else {
	        	document.getElementById("commonMsg").style.display = "block";        	 
	            return false;
		}
	}
	
	
	

	
	
	
	function checkMe(element,element2){
		 
		 var alen=document.getElementById(element).value;
		 if(alen.length<12)
			 {
			 	document.getElementById(element2).innerHTML="\u0906\u0927\u093E\u0930 \u0938\u0902\u0916\u094D\u092F\u093E \u0938\u0939\u0940 \u092D\u0930\u0947\u0902 \u0964";
			 	return false;
			 }
		 else{
				document.getElementById(element2).innerHTML="";
				return true;
		 }
	}
	
	
	
	function isAllSameDigit(number){
		
		 var blen=number.value.trim();
		 var flag = 0;
		
		 checkForDigitsOnly(number);
		 
	  	 for(var i = 0; i < blen.length; i++){	
	  		 
	  	   if(blen.substring(i,i+1)==blen.substring(0,1)){
	  		 flag+=1; 
	       }
	  	   
	     }	 
	  	 
	  	 if(flag>6)
	  		number.value="";	  	 
	  	 return flag;
	         
	}

	function checkAllSameDigitMobile(elementId, msgId){
		
		 var number = document.getElementById(elementId);
		 var blen=number.value.trim();
		 var msg = document.getElementById(msgId);
		 var flag = 0;
		
		 checkForDigitsOnly(number);
		 
	  	 for(var i = 0; i < blen.length; i++){	
	  		 
	  	   if(blen.substring(i,i+1)==blen.substring(0,1)){
	  		 flag+=1; 
	       }
	  	   
	     }	 
	  	 
	  	 if(flag>9){
	  	 	msg.innerHTML='*मोबाइल न० अमान्य है।';
	  		number.value="";	 
	  		return false; 	 
	  	 }
	     return 0;
	}

	   
   
   function submit2(a){
		
	     var y=document.getElementById("userLogin").value;
	     var captcha = document.getElementById('userEnteredCaptcha').value;
	     
	     if(y=="")
	     {   document.getElementById('userNameError').innerHTML = "\u092A\u094D\u0930\u092F\u094B\u0915\u094D\u0924\u093E \u0928\u093E\u092E\u200B \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
	    	 userName.focus();
	         return false;
	     }else if(captcha=="") {         
	                  document.getElementById('captchaError').innerHTML = "\u0915\u0948\u092A\u094D\u091A\u093E \u091A\u093F\u0924\u094D\u0930\u200B \u0938\u0947 \u0935\u0930\u094D\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
	                  captcha.focus();
	      }else{
	    	  var x=document.getElementById("userPaswrd").value;
	          if(x==""){   
	        	  document.getElementById('passwordError').innerHTML = "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
				  password.focus();
				  return false;
			  }else{
				  
	              var b=true;         
	              if(b==true){
	                      var a1=document.getElementById("userPaswrd").value;
	                      /*alert(a1+" --- "+'<%=salt%>'); 
	                      document.getElementById("userPaswrd").value=hash2(a1,'<%=salt%>');
	                      alert(); */
	                      document.getElementById("frm").submit();
	              }else{
	               	return false;
	              }
	          }
	          
	        } 
	}
	
	




function showLoginErrorMsg(){
	
	
	if(document.querySelector("#loginErrorMsg")){
		
		try {
			
			
			if(document.querySelector("#loginErrorMsg").value=='Invalid_Captcha'){
				
				document.getElementById('enteredCaptchaMsg').innerHTML = document.querySelector("#incorrent_captcha").value;
				
				addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error hidden","form__label--error ellipsis");
				addRemoveClass(document.getElementById("invalidCaptchaMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
				
				document.getElementById("enteredCaptcha").focus();
		     	errorBorder(document.getElementById("enteredCaptcha"));
				
			}else if(document.querySelector("#loginErrorMsg").value=='Invalid_Application_ID'){
				
				
				addRemoveClass(document.getElementById("error-for-username"),"form__label--error hidden","form__label--error ellipsis");
		    	addRemoveClass(document.getElementById("invalidApplication_IdMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
		    	
		    	document.querySelector("#application_id").focus();
				
				
			}else if(document.querySelector("#loginErrorMsg").value=='Invalid_Password'){
				
				
				addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error hidden","form__label--error ellipsis");
				addRemoveClass(document.getElementById("invalidPasswordMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
				document.querySelector("#login_password").focus();
				
			}else if(document.querySelector("#loginErrorMsg").value=='Captcha_Not_Match'){
				
				
				addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error hidden","form__label--error ellipsis");
				addRemoveClass(document.getElementById("invalidCaptchaMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
				
				
				document.getElementById("enteredCaptcha").focus();
		     	errorBorder(document.getElementById("enteredCaptcha"));
				
			}else if(document.querySelector("#loginErrorMsg").value=='Application_ID_Not_Match'){
				
				
				addRemoveClass(document.getElementById("error-for-username"),"form__label--error hidden","form__label--error ellipsis");
				addRemoveClass(document.getElementById("invalidApplication_IdMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
				
		    	document.querySelector("#application_id").focus();
				
			}else if(document.querySelector("#loginErrorMsg").value=='Password_Not_Match'){
				
				addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error hidden","form__label--error ellipsis");
				addRemoveClass(document.getElementById("invalidPasswordMsg"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
				
				document.querySelector("#login_password").focus();
				
			}else if(document.querySelector("#loginErrorMsg").value=='Login_Log_Not_Inserted_Successfully'){			
				alert("Please Try After Sometime Or Contact Administrator.");
			}else{				
				alert("Please Try After Sometime Or Contact Administrator.");
			}
				
			
		} catch (e) {
			
			addRemoveClass(document.getElementById("error-for-globle"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
			
		}
		
	}

}



function showSignupErrorMsg(){
	
	
	if(document.querySelector("#signupErrorMsg") && document.querySelector("#msgSignUp")){
		
		try {
			//alert(document.querySelector("#msgSignUp").value);
			
			if(document.querySelector("#msgSignUp").value=='captchaEntryError'){
				
				document.getElementById('enteredCaptchaMsg').innerHTML = document.querySelector("#signupErrorMsg").value;
				
				document.getElementById("enteredCaptcha").focus();
		     	errorBorder(document.getElementById("enteredCaptcha"));
				
			}//############################### Added ON 28/07/2022 ##############################################
			else if(document.querySelector("#msgSignUp").value=='userIdBlankError'){
				
				
				document.getElementById('login_idMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#login_id").focus();
		    	errorBorder(document.getElementById("login_id"));
				
			}else if(document.querySelector("#msgSignUp").value=='userIdInvalidError'){
				
				
				document.getElementById('login_idMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#login_id").focus();
		    	errorBorder(document.getElementById("login_id"));
				
			}else if(document.querySelector("#msgSignUp").value=='userIdExistsError'){
				
				
				document.getElementById('login_idMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#login_id").focus();
		    	errorBorder(document.getElementById("login_id"));
				
			}//############################### Added ON 28/07/2022 ##############################################
			else if(document.querySelector("#msgSignUp").value=='passwordEntryError'){
				
				
				document.getElementById('passwordMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#password").focus();
		    	errorBorder(document.getElementById("password"));
				
			}else if(document.querySelector("#msgSignUp").value=='rePasswordEntryError'){				
				
				document.getElementById('rePasswordMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#rePassword").focus();
		    	errorBorder(document.getElementById("rePassword"));
				
			}else if(document.querySelector("#msgSignUp").value=='passwordNotMatch'){
				
				document.getElementById('rePasswordMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#password").focus();
		    	errorBorder(document.getElementById("password"));
		    	
		    	document.querySelector("#rePassword").focus();
		    	errorBorder(document.getElementById("rePassword"));
				
				
			}else if(document.querySelector("#msgSignUp").value=='mobileEntryError'){				
				
				document.getElementById('userMobNoMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
				
				document.getElementById("userMobNo").focus();
		     	errorBorder(document.getElementById("userMobNo"));
				
			}else if(document.querySelector("#msgSignUp").value=='districtEntryError'){				
				
				document.getElementById('districtListMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#districtList").focus();
		    	errorBorder(document.getElementById("districtList"));
				
				
			}else if(document.querySelector("#msgSignUp").value=='languageEntryError'){				
				
				document.getElementById('formLanguageTypeMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
		    	
				document.querySelector("#formLanguageType").focus();
		    	errorBorder(document.getElementById("formLanguageType"));
				
				
			}
			
			else if(document.querySelector("#msgSignUp").value=='recordNotFound'){				
				
				document.querySelector("#errorModal").style.display="block";
				document.getElementById('recordNotFoundMsg').innerHTML=document.querySelector("#signupErrorMsg").value;
				
			}
			else{				
				alert("Please Try After Sometime Or Contact Administrator.");
			}
				
			
		} catch (e) {
			
			addRemoveClass(document.getElementById("error-for-globle"),"form__label--error hidden","form__label--error ellipsis error-msgSpan");
			
		}
		
	}

}



/****************************************************************************************************
* 										General Validation Script   							   *
****************************************************************************************************/



function errorText(elementId){
	elementId.setAttribute("class", "text-danger");
}

function errorBackground(elementId){
	elementId.setAttribute("class", "bg-warning");
}


function errorBorder(elementId){
	elementId.setAttribute("class", "error-element");
}

function addRemoveClass(element,removedCssClass,addedCssClass){
	
	$(element).removeClass(removedCssClass).addClass(addedCssClass);

	
}

function hideErrorMsg(elementId){
	
	/**************Java Script****************/
//	elementId.removeAttribute("class");
//	elementId.setAttribute("class", "form__label--error hidden");
	/**************Java Script****************/
	
}

function removeAttribute(elementId){
	elementId.removeAttribute("class");
}

function errorMessageSpan(elementId){
	elementId.setAttribute("class", "error-msgSpan");
}



 function numbersOnly(evt){
	 var charCode = (evt.which) ? evt.which : event.keyCode;
	 
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
		 return false;
	 else	
	     return true;
 }
 
 function checkForDigitsOnly(element){
 	
 	var str = element.value;
 	var i = str.length;
 	
 	while (i--) {
 		
 	  var charCode = str[i].charCodeAt(0);
 	  
 	  if ((charCode >= 48 && charCode > 57)){
 		  element.value="";
 		  element.focus();
 		 
 	  }
 	  
 	}
 	
 }
 

 
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

  
function validate_us_rc_login_frm(){
	
	var commonMsg = document.getElementById('commonMsg');
	var c0 = checkSelected('districtCode', 'districtCodeMsg');
	var c1 = checkSelected('sroCode', 'sroCodeMsg');
	var c2 = checkSelected('bookno', 'booknoMsg');
	var c3 = checkSelected('regyear', 'regyearMsg');
	
	var c4 = checkFilled('regno','regnoMsg');
	//var c5 = checkFilled('regdate','regdateMsg');
	var c5=true;
	var c6 = checkFilled('applicant_name','applicantnameMsg');
	var c7 = checkFilled('applicant_name_e','applicantname_eMsg');
	var c8 = checkFilled('mobile_no','userMobNoMsg');
	var c9 = checkFilled('enteredCaptcha','enteredCaptchaMsg');
	
	if(c0 && c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9){
		commonMsg.innerHTML = '';
		return true;
	}
	else{
		commonMsg.innerHTML = 'कृपया अनिवार्य प्रविष्टि भरें';
		return false;
	}
} 
 
function checkHindiCharOnly(element, msgId){
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरें।';
		return false;
	}
 	else if(onlyHindiCharAllow(element.value)){
 		msg.innerHTML='';
 		return true;
 	}
 	else
 	{
 		element.value='';
 		msg.innerHTML='कृपया केवल हिंदी वर्ण भरें।'
 		element.focus();
 		return false;
 	}
 }
 
function hindiCharAllowWithNumberAndSpecialSybmolOnly(element, msgId){
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरें।';
		return false;
	}
 	else if(hindiCharAllowWithNumberAndSpecialSybmol(element.value)){
 		msg.innerHTML='';
 		return true;
 	}
 	else
 	{
 		element.value='';
 		msg.innerHTML='कृपया केवल हिंदी वर्ण भरें।'
 		element.focus();
 		return false;
 	}
 }
 
 function checkHindiCharWithNumberAndSymbols(element, msgId){
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरें।';
		return false;
	}
 	else if(onlyHindiCharAllowedWithNumbersAndSymbols(element.value)){
 		msg.innerHTML='';
 		return true;
 	}
 	else
 	{
 		element.value='';
 		msg.innerHTML='कृपया केवल हिंदी वर्ण भरें।'
 		element.focus();
 		return false;
 	}
 }
 
 
function checkNumberOnly(element, msgId){
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरें।';
		return false;
	}
 	else if(onlyNumberAllow(element.value)){
 		msg.innerHTML='';
 		return true;
 	}
 	else
 	{
 		element.value='';
 		msg.innerHTML='कृपया केवल संख्या भरें।'
 		element.focus();
 		return false;
 	}
 }



function checkSelected(e, msgId)
{
	var element=document.getElementById(e);
	var msg=document.getElementById(msgId);
	if(element.value == '-1')
	{
		msg.innerHTML='कृपया चयन करें।'
		element.style.border = "1px solid red";
		return false;
	}
	else{
		msg.innerHTML='';
		element.style.border = "1px solid black";
		return true;
	}
}
 
function checkFilled(e, msgId){
	
	var element = document.getElementById(e);
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरे।'
		element.style.border = "1px solid red";
		return false;
	}
	else{
		msg.innerHTML='';
		element.style.border = "1px solid black";
		return true;
	}
 }
 
 function checkMobile(e, msgId){
	
	var element = document.getElementById(e);
	var msg=document.getElementById(msgId);
	if(element.value.length != 10)
	{
		msg.innerHTML='मोबाइल न० 10 संख्याओं का होना चाहिए।';
		element.value='';
		element.style.border = "1px solid red";
		return false;
	}
	else{
		msg.innerHTML='';
		element.style.border = "1px solid black";
		checkAllSameDigitMobile(e, msgId);
		
		return true;
	}
 }
 
function hideSpinner(){
	
//	$("#spinnerCir").hide();
//  $("#spinner").hide();

	$("#spinnerCir").modal("hide");

}


function showSpinner(){
	
//	$("#spinnerCir").show(); 
// 	$("#spinner").show();

	$("#spinnerCir").modal({backdrop: "static"});
		

}




function submitForm(){

	if(checkForm('remarkMsg')){
		document.getElementById('rdcRejectForm').action='rejectRegisteredDocCertificateApplication';
		document.getElementById('rdcRejectForm').submit();
	}
	else
		return false;
	
}

function checkForm(MsgId){
	var remark =  document.getElementById('remark');
	var msg=document.getElementById(MsgId);
	
	if(remark.value==''){
		msg.innerHTML='कृपया कारण भरें।';
		remark.style.border='2px solid red';
		remark.focus();
		return false;
	}
	else{
		msg.innerHTML='';
		remark.style.border='1px solid black';
		return true;
	}
}

function goBack(){
	document.getElementById('rdcRejectForm').action='registredDocCertificatelistDetail';
	document.getElementById('rdcRejectForm').submit();
}



function getCodData()
{
	 var regNo=document.getElementById('regNo').value;
	 var regYear=document.getElementById('regYear').value;
	 var sroCodeH=document.getElementById('sroCodeH').value;
	 var bookNo=document.getElementById('bookNo').value;
	 
	 if(regNo != ''){
	 	if(regYear != -1){
	 		if(sroCodeH != -1){
	 			if(bookNo != -1){
	 			
				 	$("#spinner").show();
					 fetchCodDocData();
				}
				else{
				
					document.getElementById('bookNo').focus();
					alert('बुक संख्या चुने।');
				
				}
			}
			else{
				showHideDiv('div2');
				document.getElementById('sroCodeH').focus();
				alert('उपनिबंधक कार्यालय चुने।');
			}
		}			 
		else{
			document.getElementById('regYear').focus();
			alert('पंजीकरण वर्ष भरें।');
			
		}
	 }
	 else{
	 	 document.getElementById('regNo').focus();
		 alert('पंजीकरण संख्या भरें।');
		 
	 }
}
 
 function fetchCodDocData(){
	 var regNo=document.getElementById('regNo').value;
	 var regYear=document.getElementById('regYear').value;
	 var sroCodeH=document.getElementById('sroCodeH').value;
	 var bookNo=document.getElementById('bookNo').value;
	 
	 $.post('fetchCodDocData', 
			 {
				 reg_No:regNo,
				 reg_Year:regYear,
				 sro_code:sroCodeH,
				 book_No:bookNo,
				 
			 },function (response) {   
				//alert(response);
				 var Datavalues = response;
				 if(Datavalues != ""){
					 var startpage = parseInt(response[0]);
					 var page = parseInt(response[1]);
					 var document_type = response[2];
					 var binderno = BigInt(response[3]);
					 var regDate = response[4];
					 var sro_code = response[5];
					 
					 document.getElementById("pageStartNoH").value = startpage;
					 document.getElementById("pageEndNoH").value = page + startpage - 1;
					 document.getElementById("documentTypeName").value = document_type;
					 document.getElementById("registrationDate_h").value = regDate;
					 document.getElementById("bindingNumberH").value = binderno;
					 
					 
					 
					 getTotalPage('pageStartNoH','pageEndNoH');
					 
					 
					 //countRegistrationFee('totalPages','registrationFeeH','registrationFee','amountH','amount');
					 
					 
					 //Disabling Fields to prevent further alteration//
					 fetchPartyIfAllDone(sro_code);
					 document.getElementById('regNo').readOnly=true;
					 document.getElementById('regNo').style.background='#e0e0e0';
					 //refreshPartyDetailDiv();
					 var myTimeout = setTimeout(refreshPartyDetailDiv, 5000);
					// $("#spinner").hide();
					 
				 }
				 else{

					 $("#spinner").hide(); 
					 alert('इस प्रविष्टी पर कोई विवरण नहीं पाया गया। \nउपरोक्त प्रविष्टी की पुनः जांच कर ले अथवा \"संपत्ति खोजें\" के विकल्प का चयन कर सूचना प्राप्त करें या सम्बंधित उपनिबंधक कार्यालय से संपर्क करें। ');
				}
			 });
	 
 }



 function fetchPartyData(sro_code){
	 var regNo=document.getElementById('regNo').value;
	 var regYear=document.getElementById('regYear').value;
//	 var sroCodeH=document.getElementById('sroCodeH').value;
	 var bookNo=document.getElementById('bookNo').value;
	 //$("#spinner").hide();
	 
	 $.post('fetchPartyData', 
			 {
				 reg_No:regNo,
				 reg_Year:regYear,
			//	 sro_code:sroCodeH,
				 sro_code:sro_code,
				 book_No:bookNo,
				 
			 },function (response) {   
				 var Datavalues = response;
				 if(Datavalues != ""){
				 	 refreshPartyDetailDiv();
					 $("#spinner").hide();
				 }
				 else{

					 $("#spinner").hide(); 
				
					 alert('इस प्रविष्टी पर कोई विवरण नहीं पाया गया। \nउपरोक्त प्रविष्टी की पुनः जांच कर ले अथवा \"संपत्ति खोजें\" के विकल्प का चयन कर सूचना प्राप्त करें या सम्बंधित उपनिबंधक कार्यालय से संपर्क करें।');
				}
			 });
	 
 }

function resetPages(){
	document.getElementById('regNo').readOnly=false;
	document.getElementById('regNo').style.background='transparent';
	
	document.getElementById('pageStartNoH').value='';
	document.getElementById('pageEndNoH').value='';
	document.getElementById('totalPages').value='';
	
	//sessionStorage.removeItem('firstPartyDetailsMap');
	
	$("#firstPartyDetailsDiv").load(location.href + " #firstPartyDetailsDiv" );
	$("#secondPartyDetailsDiv").load(location.href + " #secondPartyDetailsDiv" );
					 
	$("#firstPartyDetailsPre").load(location.href + " #firstPartyDetailsPre" );
	$("#secondPartyDetailsPre").load(location.href + " #secondPartyDetailsPre" );
}

 function refreshPartyDetailDiv(){
	try{
		 $("#firstPartyDetailsDiv").load(location.href + " #firstPartyDetailsDiv" );
		 $("#secondPartyDetailsDiv").load(location.href + " #secondPartyDetailsDiv" );
		 
		 $("#firstPartyDetailsPre").load(location.href + " #firstPartyDetailsPre" );
		 $("#secondPartyDetailsPre").load(location.href + " #secondPartyDetailsPre" );
	}catch(e){
		
	}
	$("#spinner").hide();
		 
    }


function fetchPartyIfAllDone(sro_code){
	
	 var regNo=document.getElementById('regNo').value;
	 var regYear=document.getElementById('regYear').value;
	 var sroCodeH=document.getElementById('sroCodeH').value;
	 var bookNo=document.getElementById('bookNo').value;
	 	 
	 if(regNo != '' && regYear != -1 && sroCodeH != -1 && bookNo != -1){
	 	//$("#spinner").show();
	 	fetchPartyData(sro_code);
	 	//$("#spinner").hide();
	 }
}


function checkEngCharOnly(element, msgId){
	var msg=document.getElementById(msgId);
	if(element.value == '')
	{
		msg.innerHTML='कृपया भरें।';
		return false;
	}
 	else if(onlyEngCharAllow(element.value)){
 		msg.innerHTML='';
 		return true;
 	}
 	else
 	{
 		element.value='';
 		msg.innerHTML='कृपया केवल अंग्रेज़ी वर्ण भरें।';
 		element.focus();
 		return false;
 	}
 }




function makeUppercase(element) {
	element.value = element.value.toUpperCase();
	}


//############################### Added ON 28/07/2022 ##############################################
function checkUserServicesLoginIdChars(element){
	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 		
	 		var value=element.value.trim();
	 		
	 		if(value!='' && value.length>0 ){
		 		if(	value.length>=4 && value.length<= 14)
		 		{
		 			if(isEnglishValue(value.charCodeAt(0))){
		 			
			 			while(i<value.length){
			 				
			 				if ( !checkCharAllowForUserId(value.charCodeAt(i)) ){
			 					isAllow=false;
			 					document.getElementById('login_idMsg').innerHTML='उपयोगकर्ता आई. डी. अमान्य है।';
			 					break;
			 				}else
			 					isAllow=true;
			 			
			 				i++;
			 				  
			 			}
		 			}
		 			else{
		 				document.getElementById('login_idMsg').innerHTML='प्रथम वर्ण अंग्रेज़ी का वर्ण होना अनिवार्य है।';
		 				isAllow=false;
		 			}
		 		}
		 		else{
		 			document.getElementById('login_idMsg').innerHTML='आई. डी. न्यूनतम 4 एवं अधिकतम 14 वर्ण की होनी चाहिए।';
		 			isAllow=false;
		 		}
	 		}else{
		 		document.getElementById('login_idMsg').innerHTML='उपयोगकर्ता आई. डी. भरना अनिवार्य है।';
	 			isAllow=false;
	 		}
	 		
	 		if(!isAllow){
		 		element.style.border='1px solid red';
		 		element.value='';
		 	}
		 	
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 }
}
//############################### Added ON 28/07/2022 ##############################################
 


function showSpinnerNew(){
	var sp =document.getElementById('spinnernew');
	sp.style.display="block";
}
function hideSpinnerNew(){
	var sp =document.getElementById('spinnernew');
	sp.style.display="none";
}


function toggle_divs(div1_id, div2_id){

	$('#'+div1_id).toggleClass('visible');
	$('#'+div1_id).animate({
		height: 'toggle',
		opacity:'toggle',
	},500);
	
	$('#'+div2_id).toggleClass('visible');
	$('#'+div2_id).animate({
		height: 'toggle',
		opacity:'toggle',
	},500);
}

function editMobile(){
	toggle_divs('content_after_otp_sent', 'content_before_otp_sent');
	document.getElementById('otp_sent').value=false; 
	
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
 ////session login check   ---26-06-2025
 	
		function checkExistingLogin() {	
			try{
				var user_id=document.querySelector("#application_id").value;
				
				
				
				var xmlHTTP;
			        
			        //$("#spinner").show();
			
			        if (window.XMLHttpRequest) {
			            xmlHTTP = new XMLHttpRequest();
			        } else {
			            xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
			        }
			
			        xmlHTTP.onreadystatechange = function () {
			            if (xmlHTTP.readyState == 4) {
			            
			                if (xmlHTTP.status === 200) {
			                    var data = xmlHTTP.responseText;
			                    var jsonResponse = JSON.parse(data);
			
			                    if (jsonResponse.RESULT === 'true') {
			                    	if(confirm('आपने अन्य किसी ब्राउज़र पर लॉगिन किया हुआ है। यहाँ पर लॉगिन करने के उपरान्त अन्य सभी लॉगिन बंद कर दिए जायेंगे। क्या आप लॉगिन करना चाहतें हैं?')){
								                    		
								    	 $("#mr_user_login_form").attr('action', 'mr_secureIgrsUserLogin');
										 $("#mr_user_login_form").submit();
										 
			                    	}else{
			               	 			$("#spinner").hide();
			                    		return false;
			                    	}
			                        
			                    } else {
						    	 	$("#mr_user_login_form").attr('action', 'mr_secureIgrsUserLogin');	//If user isn't already logged in, then proceed to login.
								 	$("#mr_user_login_form").submit();
								 
			                        return false;
			                    }
			                } else {
			                    alert("Error: " + xmlHTTP.status);
			                }
			            }
			        };
			
			        xmlHTTP.open("POST", "checkActiveLogin.action", true);
			        var params = 'user_id=' + user_id;
			        xmlHTTP.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			        xmlHTTP.send(params);
			
			}catch(e){
				
			}
			return false;
		}
		
		
		 function proceed_toLogin() {	
		
			try{
		
			     var app_id=document.querySelector("#application_id").value;
			     var login_password= document.querySelector("#login_password").value;
			     var captcha= document.querySelector("#enteredCaptcha").value;
			     var district_code= document.querySelector("#districtCode").value;
			     
			     if(app_id==""){   
			    	 document.getElementById('application_idMsg').innerHTML = "\u092A\u094D\u0930\u092F\u094B\u0915\u094D\u0924\u093E \u0928\u093E\u092E\u200B \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error hidden","form__label--error ellipsis");
			    	 document.querySelector("#application_id").focus();
			         return false;
			         
			     }else if(login_password==""){   
		        	 document.getElementById('login_passwordMsg').innerHTML = "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
		        	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error hidden","form__label--error ellipsis");
		        	 document.querySelector("#login_password").focus();
					 return false;
					  
				 }else if(district_code=="" || district_code=="-1") {         
	                 document.getElementById('districtCodeMsg').innerHTML = "\u091C\u0928\u092A\u0926 \u091A\u092F\u0928 \u0915\u0930\u0947\u0902";
	                 addRemoveClass(document.getElementById("error-for-districtCode"),"form__label--error hidden","form__label--error ellipsis");
	                 document.querySelector("#districtCode").focus();
	                 return false;
			     }else if(captcha=="") {         
	                 document.getElementById('enteredCaptchaMsg').innerHTML = "\u0915\u0948\u092A\u094D\u091A\u093E \u091A\u093F\u0924\u094D\u0930\u200B \u0938\u0947 \u0935\u0930\u094D\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
	                 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error hidden","form__label--error ellipsis");
	                 document.querySelector("#enteredCaptcha").focus();
	                 return false;
				 }else{
			    	 
			    	 addRemoveClass(document.getElementById("error-for-username"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-login_password"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-districtCode"),"form__label--error ellipsis","form__label--error hidden");
			    	 addRemoveClass(document.getElementById("error-for-captcha"),"form__label--error ellipsis","form__label--error hidden");
			    	 
			    	 
			    	 $("#spinner").show();
			    	 
			    	 
			    	 document.querySelector("#login_password").value=hash_sha(document.querySelector("#login_password").value,salt);
			    	 
			    	 $("#user_login_form").attr('action', 'securePropertyUserLogin');
					 $("#user_login_form").submit();
			     }
	     
		     }catch (e) {			
			return false;
		    }
	     }
	
	


	
/**********/////////////////////////////////////////////////////////////***********/
	
