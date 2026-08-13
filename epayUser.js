/**
 * 
 */



function checkCaptcha(element){
var captchaValue = document.getElementById('captcha').value;
    var captcha = document.getElementById('captchaImage').textContent;
    if(captcha == captchaValue) {
        document.getElementById('captchaError').innerHTML = "";
    }
    else{
        document.getElementById('captcha').value="";
        document.getElementById('captchaError').innerHTML = "\u0938\u0939\u0940 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902";
        return false;        
    }
}





function loadingImage()
{

    var loading = $("#loading");
    $(document).ajaxStart(function () {
        loading.show();
    });

    $(document).ajaxStop(function () {
        loading.hide();
    });
}





function encryptLoginPassword(element)
{
	element.value=hash_sha(element.value,salt);
}

	
function getHashPassword(element){
   	if(element.value == "" || element.value==null)
   		element.value="";
    else
    	element.value = hex_sha512(element.value);
}




     
function CheckPassword(element){
	   
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;  
    if(element.value ==''){
     	
     }else{
     	if(element.value.match(decimal))   
     	{
     		return true;  
     	}else{
	
	 		alert('\u0906\u092A\u0915\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0915\u092E \u0938\u0947 \u0915\u092E 8 \u0938\u0947 12 \u0905\u0915\u094D\u0937\u0930 \u0915\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F\u0964 \u0907\u0928\u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u0915\u093E \u0915\u0948\u092A\u091F\u093F\u0932 \u0905\u0915\u094D\u0937\u0930,\u090F\u0915 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u0915\u093E \u0938\u094D\u092E\u093E\u0932 \u0905\u0915\u094D\u0937\u0930, \u090F\u0915 \u0938\u094D\u092A\u0947\u0936\u0932 \u0915\u0948\u0930\u0947\u0915\u094D\u091F\u0930 \u0924\u0925\u093E \u090F\u0915 \u0905\u0902\u0915 \u0915\u093E \u0939\u094B\u0928\u093E \u0905\u0928\u093F\u0935\u093E\u0930\u094D\u092F \u0939\u0948\u0964 \u0938\u094D\u092A\u0947\u0936\u0932 \u0915\u0948\u0930\u0947\u0915\u094D\u091F\u0930 \u0915\u0947 \u0932\u093F\u090F @, #, * \u0905\u0925\u0935\u093E $ \u092E\u0947\u0902 \u0938\u0947 \u0915\u093F\u0938\u0940 \u090F\u0915 \u0915\u094B \u091A\u0941\u0928\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964')  ;
     		element.value="";
     		return false;  
     	}  
     }
} 
     
/*     
function getHashPassword(element)
{
 	if(element.value == "" || element.value==null)
 		{
 		element.value="";
 		}
 	else
 	element.value = hash1(element.value);
}
*/     
