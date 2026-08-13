

/*================ASCII Code Of Keyboard For Reference=================================*/
/*
32 = space ( Space )
33 = ! ( Exclamation mark )
34 = " ( Double quotes ; Quotation mark ; speech marks )
35 = # ( Number sign )
36 = $ ( Dollar sign )
37 = % ( Percent sign )
38 = & ( Ampersand )
39 = ' ( Single quote or Apostrophe )
40 = ( ( round brackets or parentheses, opening round bracket )
41 = ) ( parentheses or round brackets, closing parentheses )
42 = * ( Asterisk )
43 = + ( Plus sign )
44 = , ( Comma )
45 = - ( Hyphen , minus sign )
46 = . ( Dot, full stop )
47 = / ( Slash , forward slash , fraction bar , division slash )

48 =0 ( number zero )  ....... 57 =9 ( number nine )

58 = : ( Colon )
59 = ; ( Semicolon )
60 = < ( Less-than sign )
61 = = ( Equals sign )
62 = > ( Greater-than sign ; Inequality )
63 = ? ( Question mark )
64 = @ ( At sign )

65 = A ( Capital letter A )  ........ 90 = Z ( Capital letter Z )

91 = [ ( square brackets or box brackets, opening bracket )
92 = \ ( Backslash , reverse slash )
93 = ] ( box brackets or square brackets, closing bracket )
94 = ^ ( Circumflex accent or Caret )
95 = _ ( underscore , understrike , underbar or low line )
96 = ` ( Grave accent )

97 =a ( Lowercase letter a , minuscule a )  ........ 122 =  z ( Lowercase letter z , minuscule z )

123 = { ( braces or curly brackets, opening braces )
124 = | ( vertical-bar, vbar, vertical line or vertical slash )
125 = } ( curly brackets or braces, closing curly brackets )
126 = ~ ( Tilde ; swung dash )

*/
 
 
/*========================================================*/
 

function onlyEnglishCharAllow(evt) {
			
    var charCode = (evt.which) ? evt.which : event.keyCode;
    
         if (
        		 (
        				 (charCode >= 65 && charCode <= 90) || 
		        		 (charCode >= 97 && charCode <= 122)|| 
		        		 (charCode == 08)
        		 ) 
        		 
        		 ||
        		 
        		 (charCode == 32) || 
        		 (charCode == 44) || 
        		 (charCode == 45) || 
        		 (charCode == 47) ||        		 
        		 (charCode >= 48 && charCode < 58)
         )
            return true;
            
            return false;
}

/*ASCII Code 48 =0 ( number zero )  ....... 57 =9 ( number nine )*/
function isNumericEvent(event){
		
	 if( event>=48 && event<=57 )		 
		 return true;
	 else
		 return false;
}
/*ASCII Code 48 =0 ( number zero )  ....... 57 =9 ( number nine )*/
function isNumericValue(charcode){	 
		
	 if( charcode>=48 && charcode<=57 )		 
		 return true;
	 else
		 return false;
}
 
/*
 * ASCII Code 65 = A ( Capital letter A )  ........ ASCII Code 90  = Z ( Capital letter Z )
 * ASCII Code 97 = a ( LowerCase letter a) ........ ASCII Code 122 = z ( LowerCase letter z)
 * 
 * */
function isEnglishEvent(event){	 
		
	 if(
		(event>=65 && event<=90 )
				   ||
		(event>=97 && event<=122 ) 
	 )
		 return true;
	 else
		 return false;
}

/*
 * ASCII Code 65 = A ( Capital letter A )  ........ ASCII Code 90  = Z ( Capital letter Z )
 * ASCII Code 97 = a ( LowerCase letter a) ........ ASCII Code 122 = z ( LowerCase letter z)
 * 
 * */
function isEnglishValue(charcode){ 
		
	 if(
		(charcode>=65 && charcode<=90 )
					  ||
		(charcode>=97 && charcode<=122 ) 
	 )
		 return true;
	 else
		 return false;
}




/*
 * 	
 *  ASCII Code 33 To 44 =Special Symbol ; * 
 *  
 *  ASCII Code 58 = : ( Colon )
 *  ASCII Code 59 = ; ( Semicolon )
 *  ASCII Code 60 = < ( Less-than sign )
 *  ASCII Code 61 = = ( Equals sign )
 *  ASCII Code 62 = > ( Greater-than sign ; Inequality )
 *  ASCII Code 63 = ? ( Question mark )
 *  ASCII Code 64 = @ ( At sign )
 *
 *  ASCII Code 91 = [ ( square brackets or box brackets, opening bracket )
 *  ASCII Code 92 = \ ( Backslash , reverse slash )
 *  ASCII Code 93 = ] ( box brackets or square brackets, closing bracket )
 *  ASCII Code 94 = ^ ( Circumflex accent or Caret )
 *  ASCII Code 95 = _ ( underscore , understrike , underbar or low line )
 *  ASCII Code 96 = ` ( Grave accent )
 * 
 * ***bellow symbol are not included**** 
 * ASCII Code 32 = (Space);
 * ASCII Code 45 = - ( Hyphen , minus sign );
 * ASCII Code 46 = . ( Dot, full stop );
 * ASCII Code 47 = / ( Slash , forward slash , fraction bar , division slash );

 *  
 * */
function isSpecialSymbolsEvent(event){
		
	 if(
		(event>=33 && event<=44 )
			||
		(event>=58 && event<=64 )
			||
		(event>=91 && event<=95 )
	 )
		 return true;
	 else
		 return false;
}

/* ***bellow symbol are not included**** 
* ASCII Code 32 = (Space);
* ASCII Code 45 = - ( Hyphen , minus sign );
* ASCII Code 46 = . ( Dot, full stop );
* ASCII Code 47 = / ( Slash , forward slash , fraction bar , division slash );
*/
function isSpecialSymbolsValue(charcode){
		
	 if( (charcode>=33 && charcode<=44 ) 
			||
		 (charcode>=58 && charcode<=64 )
			||
		 (charcode>=91 && charcode<=95 )
	 ) 
		 return true;
	 else
		 return false;
}

/* ***bellow symbol are not included**** 
* ASCII Code 32 = (Space);* 
*/
function isSymbolsEvent(event){
	
	 if(
		(event>=33 && event<=44 )
			||
		(event>=58 && event<=64 )
			||
		(event>=91 && event<=95 )
			||
		(event==45 || event==46 || event==47)	
	 )
		 return true;
	 else
		 return false;
}

/* ***bellow symbol are not included**** 
* ASCII Code 32 = (Space);* 
*/
 function isSymbolsValue(charcode){
		
	 if( (charcode>=33 && charcode<=44 ) 
			||
		 (charcode>=58 && charcode<=64 )
			||
		 (charcode>=91 && charcode<=95 )
		 	||
		 (charcode==45 || charcode==46 || charcode==47)	
	 ) 
		 return true;
	 else
		 return false;
 }

 
 /*
 * ASCII Code 32 = (Space);* 
 */
 function isSpaceEvent(event){
		
	 if(event==32)	
		return true;
	 else
		return false;
 
	 
 }
 /* 
 * ASCII Code 32 = (Space);* 
 */
 function isSpace(charcode){
		
	 if(charcode==32)	
		return true;
	 else
		return false;
 
	 
 } 
 


 /*==========================Event================================*/
 
//############################### Added ON 28/07/2022 ##############################################
function charAllowForUserId(evt) {		//Characters allowed are: 'A-Z', 'a-z', '0-9', '.', '_' and backspace (08)
			
    var charCode = (evt.which) ? evt.which : event.keyCode;
    
         if (

        				 (charCode >= 65 && charCode <= 90) || 		//A-Z
		        		 (charCode >= 97 && charCode <= 122)|| 		//a-z	
		        		 (charCode == 08)					||		//Backspace
		        		 (charCode >= 48 && charCode < 58)	||		//0-9
		        		 (charCode == 46)					||		//decimal(.)
		        		 (charCode == 95)							//underscore(_)
		    )
            return true;
            
            return false;
}


	function checkCharAllowForUserId(charCode) {		//Characters allowed are: 'A-Z', 'a-z', '0-9', '.', '_' and backspace (08)
				
	         if (
	
	        				 (charCode >= 65 && charCode <= 90) || 		//A-Z
			        		 (charCode >= 97 && charCode <= 122)|| 		//a-z	
			        		 (charCode == 08)					||		//Backspace
			        		 (charCode >= 48 && charCode < 58)	||		//0-9
			        		 (charCode == 46)					||		//decimal(.)
			        		 (charCode == 95)							//underscore(_)
			    )
	            return true;
	            
	            return false;
	}
 //############################### Added ON 28/07/2022 ##############################################
 
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
 function hindiCharAllowWithNumberEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isSymbolsValue(event.which) )
					return false;
		
				else
					return true;

	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 function hindiCharAllowWithSpecialSybmolEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isNumericValue(event.which) || isSpecialSymbolsValue(event.which) )
					return false;
		
				else
					return true;
		
	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 function hindiCharAllowWithNumberAndSpecialSybmolEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isSpecialSymbolsValue(event.which) )
					return false;
		
				else
					return true;
		 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}


 
 function onlyEngCharAllowEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isSpaceEvent(event.which) )
					return true;
		
				else
					return false;
				 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 function engCharAllowWithNumberEvent(event){
	 
	 	try {
	 	
				if ( (isEnglishValue(event.which) || isNumericValue(event.which) ) )
					return true;
		
				else
					return false;
				
	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 function engCharAllowWithSpecialSybmolEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) && !isSpecialSymbolsValue(event.which) )
					return true;
				else
					return false;
				
	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 function engCharAllowWithNumberAndSpecialSybmolEvent(event){
	 
	 	try {
	 	
				if ( isEnglishValue(event.which) || isNumericValue(event.which) || isSpecialSymbolsValue(event.which) )
					return true;		
				else
					return false;
				
	 			 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 
 function onlyNumberAllowEvent(event){
	 
	 	try {
	 	
				if ( isNumericValue(event.which) )
					return true;
				else
					return false;
				 
	 	}catch (e) {
	 		return false;
	 	}
	 
}
 
 /*==========================================================*/
 


 function onlyHindiCharAllow(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i)) || isNumericValue(value.charCodeAt(i)) || isSymbolsValue(value.charCodeAt(i)) ){
	 					isAllow=false;
	 					break;
	 				}else
	 					isAllow=true;
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function hindiCharAllowWithNumber(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i)) || isSymbolsValue(value.charCodeAt(i)) ){
	 					isAllow=false;
	 					break;
	 				}else
	 					isAllow=true;
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function hindiCharAllowWithSpecialSybmol(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i)) || isNumericValue(value.charCodeAt(i)) || isSpecialSymbolsValue(value.charCodeAt(i)) ){
	 					isAllow=false;
	 					break;
	 				}else
	 					isAllow=true;
	 			
	 				i++;
	 				  
	 			}

	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function hindiCharAllowWithNumberAndSpecialSybmol(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i)) || isSpecialSymbolsValue(value.charCodeAt(i)) ){
	 					isAllow=false;
	 					break;
	 				}else
	 					isAllow=true;
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 

 function onlyHindiCharAllowedWithNumbersAndSymbols(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i))){
	 					isAllow=false;
	 					break;
	 				}else
	 					isAllow=true;
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function onlyEngCharAllow(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i)) || isSpace(value.charCodeAt(i)) ) 
	 					isAllow=true;	 				
	 				else{
	 					isAllow=false;
						break;
	 				}
	 			
	 				i++;
	 				  
	 			}

	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function engCharAllowWithNumber(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if(isEnglishValue(value.charCodeAt(i))  || isNumericValue(value.charCodeAt(i)) )
	 					isAllow=true;
	 				else{
	 					isAllow=false;
						break;
	 				}
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function engCharAllowWithSpecialSybmol(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i))  || isSymbolsValue(value.charCodeAt(i)) )
	 					isAllow=true;
	 				else{
	 					isAllow=false;
						break;
	 				}
	 			
	 				i++;
	 				  
	 			}

	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 function engCharAllowWithNumberAndSpecialSybmol(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isEnglishValue(value.charCodeAt(i))  || isNumericValue(value.charCodeAt(i)) || isSymbolsValue(value.charCodeAt(i)) )
	 					isAllow=true;
	 				else{
	 					isAllow=false;
						break;
	 				}
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 
 function onlyNumberAllow(element){
	 	
	 	var i=0;
	 	var isAllow =true;
	 	
	 	try {
	 	
	 		var value=element.trim();
	 		
	 		if(value!='' && value.length>0 ){
	 		
	 			while(i<value.length){
	 				
	 				if ( isNumericValue(value.charCodeAt(i)) ) 
	 					isAllow=true;	 				
	 				else{
	 					isAllow=false;
						break;
	 				}
	 			
	 				i++;
	 				  
	 			}
	 			
	 		}else
	 			isAllow=false;
	 		
	 		return isAllow;
	             
	 	}catch (e) {
	 		return false;
	 	}
	 }
 
 
 
 /*================================================================*/
 function checkContentOnBlur(appID,spanMsg){

 	var appNames=document.getElementById(appID).value;
 	
 	if(appNames.trim()==''){
 		
 		errorBorder(document.getElementById(appID));
 	    document.getElementById(appID).focus();
 	    document.getElementById(spanMsg).innerHTML='* \u0915\u0943\u092A\u092F\u093E \u0909\u091A\u093F\u0924 \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u0940 \u0915\u0930\u0947\u0902\u0964';
 		return false;
 		
 	}
 	else{
 		
 		successBorder(document.getElementById(appID));
     	document.getElementById(spanMsg).innerHTML='';
 		
 		removeSpace(appID);
 		return true;
 	}
 }
 
 function checkContentOnChange(appID,spanMsg){

 	var appValue=document.getElementById(appID).value;
 	
 	if(appValue== "-1"){
 		
 		errorBorder(document.getElementById(appID));
 	    document.getElementById(appID).focus();
 	    document.getElementById(spanMsg).innerHTML='* \u0915\u0943\u092A\u092F\u093E \u0909\u091A\u093F\u0924 \u0935\u093F\u0915\u0932\u094D\u092A \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902\u0964';
 		return false;
 		
 	}
 	else{
 		
 		successBorder(document.getElementById(appID));
     	document.getElementById(spanMsg).innerHTML='';
 		
 		return true;
 	}
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
 		msg.innerHTML='कृपया केवल संख्या भरें।';
 		element.focus();
 		return false;
 	}
 }

 
 
 
 
 
 
 
 
 
