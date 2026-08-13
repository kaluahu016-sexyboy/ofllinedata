 
function getSessionTimeOut() {
      	  $.post('getMaxSessionTimeOut', 
                {
            	
                },
                function (responseJson) {
                	 
                  	 if(responseJson =='yes')
                  		 {
                  		 	isMyLoginStillActive();
                  			setTimeout('getSessionTimeOut();','600000');		// 10 min	//	1 sec =1000
                  		 }
                  	 else if(responseJson =='no')
                  		 {
                  		
                  		if(confirm("\u0906\u092A\u0915\u093E \u0938\u0924\u094D\u0930 \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B \u0930\u0939\u093E \u0939\u0948\u0964 \u0915\u094D\u092F\u093E \u0906\u092A \u0938\u0924\u094D\u0930 \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?\n\u0939\u093E\u0901 \u0915\u0940 \u0926\u0936\u093E \u092E\u0947\u0902 \u0915\u0943\u092A\u092F\u093E OK \u0935\u093F\u0915\u0932\u094D\u092A \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902 \u0905\u0925\u0935\u093E Cancel \u0915\u0930\u0947\u0902 \u0964"))
                  			{
                  			 $.post('setMaxSessionTime', 
                  	                {
                  	            	
                  	                },
                  	                function (responseJson) {                  	                	
                  	                	setTimeout('getSessionTimeOut();','600000');	// 10 min	// 1 sec =1000
                  			});
                  	                }
                  		else{
                  			$.post('destroySession', 
                  	                {
                  	            	
                  	                },
                  	                function (responseJson) {
                  	                window.open("defaultAction", "_self")
                  			});
                  		}
                  			}
            });
          
    }
    
 
function isMyLoginStillActive() {
	$.post('isMyLoginStillActive',
			{
           	
            },
	function (responseJson) {
		
               	 
       	if(responseJson =='YES'){
       		
       	}else{
			alert('अन्य किसी ब्राउज़र पे लॉगिन करने के कारण आपका सत्र समाप्त हो गया है। कृपया पुनः लॉगिन करें।');
			$.post('destroySession',
				{
       	            	
       	        },
       	        function (responseJson) {
       	        	window.open("defaultAction", "_self")
			});
		}
 	});
         
} 
    
    
    
    
    
    