function getOffset( el ) 
			{
			var _x = 0;
			var _y = 0;
			while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
				_x += el.offsetLeft - el.scrollLeft;
				_y += el.offsetTop - el.scrollTop;
				el = el.offsetParent;
			}
			return { top: _y, left: _x };
			}
var btn_id = 'btn_id0';
document.onclick=check;
var currentID; 
function check(e){ 
var target = (e && e.target) || (event && event.srcElement); 
//alert(currentID);
var obj = document.getElementById('mykb'); 
var obj2 = document.getElementById(currentID); 
//var obj2 = document.getElementById('reasonKB'); 
if(obj!=null)
checkParent(target)?obj.style.display='none':null; 
target==obj2?obj.style.display='block':null; 
} 
function checkParent(t){ 
while(t.parentNode){ 
if(t==document.getElementById('mykb')){ 
return false 
} 
t=t.parentNode 
} 
return true 
} 			
			
 			function toggleKeyBoard(element,mykb,myinputbox)
			{
				currentID=element;						
				var iDiv = document.createElement('div');
				iDiv.id = mykb;
				//iDiv.id = 'mykb';
				document.getElementsByTagName('body')[0].appendChild(iDiv);
				//alert('toggleKeyBoard');
 				var mykb=mykb;
				var myinputbox=myinputbox;
				var x = getOffset( document.getElementById(element) ).left+document.getElementById(element).offsetWidth;
				var y = getOffset( document.getElementById(element) ).top+document.getElementById(element).offsetHeight;
				document.getElementById(element).style.fontFamily = "DejaVu Sans";
				var myDiv = document.getElementById(mykb);
						   if (myDiv.style.display =='block'){
							   myDiv.style.display = 'none';
							   return;
						   }
						   myDiv.style.display ='block';
						   myDiv.style.visibility ='visible';
				var d = document.getElementById(mykb);
				d.style.position = "absolute";
				d.style.left = x+'px';
				d.style.top = y+'px';
				d.style.width='223px';
				
				getKeyBoard(mykb,myinputbox );
				}
				
				function typehindiwords_Call(name,value,myinputbox)
				 {
				 	 myinputbox.value =myinputbox.value +value;
				 	 var div = document.getElementById('mykb');
					var mySubDiv = document.getElementById('suggestedchar');
					div.style.visibility = 'visible';
					mySubDiv.style.visibility = 'hidden';
					mySubDiv.style.height = '0px';
				 	 //New Update ==============================
				 	  var btn_sym_new = document.getElementById('btn_sym1');
				 	// alert(btn_sym_new);
				 	 if(btn_sym_new == null){
					var btn_id_new = document.getElementById('btn_id0');
					if(btn_id_new == null)
						{btn_id_new = document.getElementById('btn_id1');}
					if(btn_id_new == null)
						{btn_id_new = document.getElementById('btn_id2');}
					//alert(btn_id_new);
					btn_id_new.id = 'btn_id1';
					btn_id_new.name = 'btn_id1';
					}
					KBSwap(btn_id_new.id)
				 }
				 
				 function typehindiwords_Main(name,value,myinputbox)
				 {
				 	 myinputbox.value = myinputbox.value +value;
				 	 var div = document.getElementById('mykb');
					var mySubDiv = document.getElementById('suggestedchar');
					div.style.visibility = 'visible';
					mySubDiv.style.visibility = 'hidden';
					mySubDiv.style.height = '0px';
				 	 //New Update ==============================
				 	 var btn_sym_new = document.getElementById('btn_sym1');
				 	// alert(btn_sym_new);
				 	 if(btn_sym_new == null){
					var btn_id_new = document.getElementById('btn_id0');
					if(btn_id_new == null)
						{btn_id_new = document.getElementById('btn_id1');}
					if(btn_id_new == null)
						{btn_id_new = document.getElementById('btn_id2');}					
					btn_id_new.id = 'btn_id2';
					btn_id_new.name = 'btn_id2';
					}
					KBSwap(btn_id_new.id)
				 }
				
				function typehindiwords(name,value,myinputbox)
				 {
				//alert("name="+name+"value="+value+"myinputbox="+myinputbox.id);
				
					 if(name=='btn_backspace')
					 {
						myinputbox.value=myinputbox.value.slice(0,-1) ;
					 }
					 else if(name=='btn_sapce')
					 {
						myinputbox.value =myinputbox.value +" "; 
					 }
					 else if(name=='btn_del')
					 {
						 myinputbox.value =""; 
					 }
					
					 else
					 { 
						 if(value=='पीछे'){
							 myinputbox.value =myinputbox.value;
						 }else {
							myinputbox.value =myinputbox.value +value;
						 }
					 }
				
				myinputbox.focus();
				 
				// var n=myinputbox.getAttribute('name');
				//alert(n);
				var div = document.getElementById('mykb');
				var mySubDiv = document.getElementById('suggestedchar');
				div.style.visibility = 'visible';
				mySubDiv.style.visibility = 'hidden';
				mySubDiv.style.height = '0px';
				
				
				
			/*	 $(mykb).focusout(function()
			    		 {
			    		     timeKeeper = setTimeout(function() {$(mykb).hide()}, 150);
			    		 });*/
				
				
				
			 }
			
			function getKeyBoard(mykb,myinputbox){    
			//alert('getKeyBoard');
			var myDiv=document.getElementById(mykb);
			
			var mykb=mykb;
			var key=1;
			myDiv.style.display='block';
			myDiv.innerHTML="" +
					"<!DOCTYPE html>" +
					"<html>" +
					"<head>" +
					"<meta charset='UTF-8'>" +
					"<style type='text/css'>" +
					"  .btncolour_space" +
					"{" +
						"border-style: groove;" +
						"width:46px;" +
						"height:22px;" +
						"border:none;" +
						"border-radius:3px;" +
						"text-align:center;" +
						"margin-left:2px;" +
						"margin-top:2px;" +
						"cursor:pointer;" +
						"background-color: #cfd8dc;" +
						"border-top:0px solid transparent;" +
					"} " +
					"  .btncolour_del" +
					"{" +
						"border-style: groove;" +
						"width:70px;" +
						"height:22px;" +
						"border:none;" +
						"border-radius:3px;" +
						"text-align:center;" +
						"margin-left:2px;" +
						"margin-top:2px;" +
						"cursor:pointer;" +
						"background-color: #cfd8dc;" +
						"border-top:0px solid transparent;" +
					"}" +
					"  .btncolour_clear" +
					"{" +
						"border-style: groove;" +
						"width:115px;" +
						"height:22px;" +
						"border:none;" +
						"border-radius:3px;" +
						"text-align:center;" +
						"margin-left:2px;" +
						"margin-top:2px;" +
						"cursor:pointer;" +
						"background-color: #cfd8dc;" +
						"border-top:0px solid transparent;" +
					"}" +
					" .btncolour" +
					"{" +
						"border-style:groove;" +
						"width:20px;" +
						"height:22px;" +
						"border:none;" +
						"text-align:center;" +
						"border-radius:3px;" +
						"margin-left:2px;" +
						"margin-top:2px;" +
						"cursor:pointer;" +
						"background-color: #cfd8dc;" +
						"border-top:0px solid transparent;" +
					"}" +
				
				" .btncolourSym" +
					"{" +
						"border-style:groove;" +
						"width:40px;" +
						"height:22px;" +
						"border:none;" +
						"text-align:center;" +
						"border-radius:3px;" +
						"margin-left:2px;" +
						"margin-top:2px;" +
						"cursor:pointer;" +
						"background-color: #cfd8dc;" +
						"border-top:0px solid transparent;" +
					"}" +
				
					"  .spinner" +
					"{" +
						"position:fixed;" +
						"text-align:center;" +
						"z-index:-1001;" +
						"width: 100%;" +
						" /* width of the spinner gif */    height: 100%; /*hight of the spinner gif +2px to fix IE8 issue */	" +
						"display:none;" +
						"margin:auto;" +
						"width:225px;height:130px;" +
					"}" +
					"input[type='submit'].btncolour " +
					"{   " +
						"color: black;font-size: 12px; cursor: pointer;border: 0px solid #C76E06;" +
						"border-radius: 3px 3px 3px 3px;   background: -moz-linear-gradient(top, #224a73 0%, #2200c6 100%);" +
						"background: -webkit-gradient(left top, left bottom, color-stop(0%, #cfd8dc), color-stop(100%, #cfd8dc));" +
						"background: -webkit-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);background: -o-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%)background: -ms-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);" +
						"background: linear-gradient(to bottom, #cfd8dc 0%, #cfd8dc 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#cfd8dc', GradientType=0 );" +
						
					"}" +					
					"input[type='submit'].btncolour_space " +
					"{   " +
						"color: black;font-size: 12px; cursor: pointer;border: 0px solid #C76E06;" +
						"border-radius: 3px 3px 3px 3px;   background: -moz-linear-gradient(top, #224a73 0%, #2200c6 100%);" +
						"background: -webkit-gradient(left top, left bottom, color-stop(0%, #cfd8dc), color-stop(100%, #cfd8dc));" +
						"background: -webkit-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);background: -o-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%)background: -ms-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);" +
						"background: linear-gradient(to bottom, #cfd8dc 0%, #cfd8dc 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#cfd8dc', GradientType=0 );" +
						
					"}" +
					"input[type='submit'].btncolour_clear " +
					"{   " +
						"color: black;font-size: 12px; cursor: pointer;border: 0px solid #C76E06;" +
						"border-radius: 3px 3px 3px 3px;   background: -moz-linear-gradient(top, #224a73 0%, #2200c6 100%);" +
						"background: -webkit-gradient(left top, left bottom, color-stop(0%, #cfd8dc), color-stop(100%, #cfd8dc));" +
						"background: -webkit-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);background: -o-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%)background: -ms-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);" +
						"background: linear-gradient(to bottom, #cfd8dc 0%, #cfd8dc 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#cfd8dc', GradientType=0 );" +
						
					"}" +
					"input[type='submit'].btncolourSym " +
					"{   " +
						"color: black;font-size: 12px; cursor: pointer;border: 0px solid #C76E06;" +
						"border-radius: 3px 3px 3px 3px;   background: -moz-linear-gradient(top, #224a73 0%, #2200c6 100%);" +
						"background: -webkit-gradient(left top, left bottom, color-stop(0%, #cfd8dc), color-stop(100%, #cfd8dc));" +
						"background: -webkit-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);background: -o-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%)background: -ms-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);" +
						"background: linear-gradient(to bottom, #cfd8dc 0%, #cfd8dc 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#cfd8dc', GradientType=0 );" +
						
					"}" +
					"input[type='submit'].btncolour_del " +
					"{   " +
						"color: black;font-size: 12px; cursor: pointer;border: 0px solid #C76E06;" +
						"border-radius: 3px 3px 3px 3px;   background: -moz-linear-gradient(top, #224a73 0%, #2200c6 100%);" +
						"background: -webkit-gradient(left top, left bottom, color-stop(0%, #cfd8dc), color-stop(100%, #cfd8dc));" +
						"background: -webkit-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);background: -o-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%)background: -ms-linear-gradient(top, #cfd8dc 0%, #cfd8dc 100%);" +
						"background: linear-gradient(to bottom, #cfd8dc 0%, #cfd8dc 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#cfd8dc', GradientType=0 );" +
						
					"}" +					
					"</style>" +
					"</head>";          			
			myDiv.innerHTML=myDiv.innerHTML+"<div id='suggestedchar' > </div><table id='mainkb' style='background-color: white;border-spacing: 0; border-width: 0; padding: 0; border-width: 0;' cellpadding='0' cellspacing='0'>" +
			"<tr><td colspan=10 class='btncolour' style='font-weight: bold;'>हिंदी कुंजीपटल</td></tr>" +
			"<tr>" +
			"<td><input name='btn_id0' value='-|' onclick='KBSwap(this.id)' id='btn_id0' class='btncolour' type='submit'><input name='btn_one' value='1' onclick='typehindiwords(name,value,"+myinputbox+")' id='btn_one' class='btncolour' type='submit' style='display:none'></td>" +
			"<td><input name='btn_a' value='अ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_a' class='btncolour' type='submit'></td>" +
			"<td><input name='btn_aa' value='आ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_aa'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_e' value='इ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_e'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ee' value='ई' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_ee'  class='btncolour' type='submit'></td>" +	
			"<td><input name='btn_ka' value='क' onclick='typehindiwords_Call(name,value,"+myinputbox+")' id='btn_ka'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_kha' value='ख'  onclick='typehindiwords_Call(name,value,"+myinputbox+")' id='btn_kha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ga' value='ग' onclick='typehindiwords_Call(name,value,"+myinputbox+")' id='btn_ga'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_gha' value='घ' onclick='typehindiwords_Call(name,value,"+myinputbox+")' id='btn_gha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_nga' value='ङ'  onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_nga'  class='btncolour' type='submit'></td>" +				
			"</tr><tr>"+
			"<td><input name='btn_u' value='उ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_u'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_uu' value='ऊ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_uu'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ai' value='ए' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_ai'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_aii' value='ऐ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_aii'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_o' value='ओ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_o'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ch' value='च' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ch'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_chh' value='छ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_chh'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ja' value='ज' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ja'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_jha' value='झ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_jha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ena' value='ञ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ena'  class='btncolour' type='submit'></td>" +
			"</tr><tr>"+
			"<td><input name='btn_oo' value='औ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_oo'  class='btncolour' type='submit'></td>"+
			"<td><input name='btn_ang' value='अं' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_ang'  class='btncolour' type='submit'></td>"+
			"<td><input name='btn_ah' value='अ:' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_ah'  class='btncolour' type='submit'></td>"+
			"<td><input name='btn_re' value='ॠ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_re'  class='btncolour' type='submit'></td>"+
			"<td><input name='btn_Ao' value='ऑ' onclick='typehindiwords_Main(name,value,"+myinputbox+")' id='btn_Ao'  class='btncolour' type='submit'></td>"+
			"<td><input name='btn_ta' value='ट' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ta'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_thh' value='ठ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_thh'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_d' value='ड' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_d'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_dhha' value='ढ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_dhha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ana' value='ण' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ana'  class='btncolour' type='submit'></td>" +
			"</tr><tr>"+
			"<td><input name='btn_t' value='त' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_t'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_tha' value='थ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_tha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_da' value='द' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_da'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_dha' value='ध' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_dha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_na' value='न' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_na'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_pa' value='प' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_pa'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_pha' value='फ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_pha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ba' value='ब' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ba'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_bha' value='भ' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_bha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ma' value='म' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ma'  class='btncolour' type='submit'></td>" +
			"</tr><tr>"+
			"<td><input name='btn_ya' value='य' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ya'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ra' value='र' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ra'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_la' value='ल' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_la'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_va' value='व' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_va'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_sha' value='श' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_sha'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_shh' value='ष'  onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_shh'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_sa' value='स' onclick='typehindiwords_Call(name,value,"+myinputbox+")'   id='btn_sa'  class='btncolour' type='submit'></td>" +
			"<td><input name='btn_ha' value='ह' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_ha'  class='btncolour' type='submit'></td>" +
		//	"<td><input name='btn_chha' value='क्ष' onclick='typehindiwords_Call(name,value,"+myinputbox+")'  id='btn_chha'  class='btncolour' type='submit'></td>" +
			"<td colspan='2'><input name='btn_backspace' value='X' onclick='typehindiwords(name,value,"+myinputbox+")' id='btn_backspace' class='btncolourSym' type='submit'></td>" +
			"</tr><tr>" +
			"<td colspan='2'><input name='btn_sym' value='Sym' onclick='KBSwapSym(this.id)' id='btn_sym' class='btncolourSym' type='submit'></td>" +
			"<td><input name='btn_sett' value='' onclick='' id='btn_sett' class='btncolour' type='submit'></td>" +
			"<td colspan='5'><input name='btn_sapce' value='_____________' onclick='typehindiwords(name,value,"+myinputbox+")' id='btn_space' class='btncolour_clear'type='submit'></td>" +
			"<td colspan='2'><input name='btn_del' value='Clear' onclick='typehindiwords(name,value,"+myinputbox+")' id='btn_del' class='btncolourSym' type='submit'></td>" +
			"</tr></table>";
			}
			
			function KBSwap(swapID)
			 {
				if(swapID == 'btn_id0')
				{
					//swapID = 'btn_id1';
					var btn_id_new = document.getElementById('btn_id0');
					btn_id_new.id = 'btn_id1';
					btn_id_new.name = 'btn_id1';
					btn_id = btn_id_new.id;
				 	var btn_a_new = document.getElementById('btn_a');
				 	btn_a_new.value='क्ष';
				 	var btn_aa_new = document.getElementById('btn_aa');
				 	btn_aa_new.value='त्र';
				 	var btn_e_new = document.getElementById('btn_e');
				 	btn_e_new.value='ज्ञ';
				 	var btn_ee_new = document.getElementById('btn_ee');
				 	btn_ee_new.value='श्र';
				 	var btn_u_new = document.getElementById('btn_u');
				 	btn_u_new.value='ळ';
				 	var btn_uu_new = document.getElementById('btn_uu');
				 	btn_uu.value='र्';
				 	var btn_ai_new = document.getElementById('btn_ai');
				 	btn_ai_new.value='ँ';
				 	var btn_aii_new = document.getElementById('btn_aii');
				 	btn_aii_new.value='़';
				 	var btn_o_new = document.getElementById('btn_o');
				 	btn_o_new.value='्र';
				 	//--------------------------------
				 	var btn_oo_new = document.getElementById('btn_oo');
				 	btn_oo_new.value='े';
				 	var btn_ang_new = document.getElementById('btn_ang');
				 	btn_ang_new.value='ं';
				 	var btn_ah_new = document.getElementById('btn_ah');
				 	btn_ah_new.value='ॅ';
				 	var btn_re_new = document.getElementById('btn_re');
				 	btn_re_new.value='||';
				 	var btn_Ao_new = document.getElementById('btn_Ao');
				 	btn_Ao_new.value='S';				 	
				}
				else if(swapID == 'btn_id1')
				{
					//swapID = 'btn_id1';
					var btn_id_new = document.getElementById('btn_id1');
					btn_id_new.id = 'btn_id2';
					btn_id_new.name = 'btn_id2';
					btn_id = btn_id_new.id;
				 	var btn_a_new = document.getElementById('btn_a');
				 	btn_a_new.value='्';
				 	var btn_aa_new = document.getElementById('btn_aa');
				 	btn_aa_new.value='ा';
				 	var btn_e_new = document.getElementById('btn_e');
				 	btn_e_new.value='ि';
				 	var btn_ee_new = document.getElementById('btn_ee');
				 	btn_ee_new.value='ी';
				 	var btn_u_new = document.getElementById('btn_u');
				 	btn_u_new.value='ु';
				 	var btn_uu_new = document.getElementById('btn_uu');
				 	btn_uu.value='ू';
				 	var btn_ai_new = document.getElementById('btn_ai');
				 	btn_ai_new.value='े';
				 	var btn_aii_new = document.getElementById('btn_aii');
				 	btn_aii_new.value='ै';
				 	var btn_o_new = document.getElementById('btn_o');
				 	btn_o_new.value='ो';
				 	var btn_oo_new = document.getElementById('btn_oo');
				 	btn_oo_new.value='ौ';
				 	var btn_ang_new = document.getElementById('btn_ang');
				 	btn_ang_new.value='ं';
				 	var btn_ah_new = document.getElementById('btn_ah');
				 	btn_ah_new.value='ः';
				 	var btn_re_new = document.getElementById('btn_re');
				 	btn_re_new.value='ृ';
				 	var btn_Ao_new = document.getElementById('btn_Ao');
				 	btn_Ao_new.value='ॅ';				 	
				}
				else
				{
					//swapID = 'btn_id0';
					var btn_id_new = document.getElementById('btn_id2');
					btn_id_new.id = 'btn_id0';
					btn_id_new.name = 'btn_id0';
					btn_id = btn_id_new.id;
				 	var btn_a_new = document.getElementById('btn_a');
				 	btn_a_new.value='अ';
				 	var btn_aa_new = document.getElementById('btn_aa');
				 	btn_aa_new.value='आ';
				 	var btn_e_new = document.getElementById('btn_e');
				 	btn_e_new.value='इ';
				 	var btn_ee_new = document.getElementById('btn_ee');
				 	btn_ee_new.value='ई';
				 	var btn_u_new = document.getElementById('btn_u');
				 	btn_u_new.value='उ';
				 	var btn_uu_new = document.getElementById('btn_uu');
				 	btn_uu.value='ऊ';				 	
					var btn_ai_new = document.getElementById('btn_ai');
				 	btn_ai_new.value='ए';
				 	var btn_aii_new = document.getElementById('btn_aii');
				 	btn_aii_new.value='ऐ';
				 	var btn_o_new = document.getElementById('btn_o');
				 	btn_o_new.value='ओ';
				 	//--------------------------------
				 	var btn_oo_new = document.getElementById('btn_oo');
				 	btn_oo_new.value='औ';
				 	var btn_ang_new = document.getElementById('btn_ang');
				 	btn_ang_new.value='अं';
				 	var btn_ah_new = document.getElementById('btn_ah');
				 	btn_ah_new.value='अ:';
				 	var btn_re_new = document.getElementById('btn_re');
				 	btn_re_new.value='ॠ';
				 	var btn_Ao_new = document.getElementById('btn_Ao');
				 	btn_Ao_new.value='ऑ';
				}  
			}
			
			function KBSwapSym(swapSymID)
			 {			 	
				if(swapSymID == 'btn_sym')
				{	
					var btn_sym_new = document.getElementById('btn_sym');					
					btn_sym_new.id = 'btn_sym1';
					btn_sym_new.name = 'btn_sym1';					
					var btn_id0_new = document.getElementById(btn_id);
					btn_id0_new.style.display = 'none';					
					var btn_one_new = document.getElementById('btn_one');
					btn_one_new.style.display = 'block';									 	
				 	var btn_a_new = document.getElementById('btn_a');
				 	btn_a_new.value='2';
				 	var btn_aa_new = document.getElementById('btn_aa');
				 	btn_aa_new.value='3';
				 	var btn_e_new = document.getElementById('btn_e');
				 	btn_e_new.value='4';
				 	var btn_ee_new = document.getElementById('btn_ee');
				 	btn_ee_new.value='5';
				 	var btn_ka_new = document.getElementById('btn_ka');
				 	btn_ka_new.value='6';
				 	var btn_kha_new = document.getElementById('btn_kha');
				 	btn_kha_new.value='7';
				 	var btn_ga_new = document.getElementById('btn_ga');
				 	btn_ga_new.value='8';
				 	var btn_gha_new = document.getElementById('btn_gha');
				 	btn_gha_new.value='9';
				 	var btn_nga_new = document.getElementById('btn_nga');
				 	btn_nga_new.value='0';
				 	var btn_u_new = document.getElementById('btn_u');
				 	btn_u_new.value='+';
					var btn_uu_new = document.getElementById('btn_uu');
				 	btn_uu_new.value='\u00D7';				 	
				 	var btn_ai_new = document.getElementById('btn_ai');
				 	btn_ai_new.value='\u00F7';
					var btn_aii_new = document.getElementById('btn_aii');
				 	btn_aii_new.value='=';
				 	var btn_o_new = document.getElementById('btn_o');
				 	btn_o_new.value='%';
					var btn_ch_new = document.getElementById('btn_ch');
				 	btn_ch_new.value='-';
				 	var btn_chh_new = document.getElementById('btn_chh');
				 	btn_chh_new.value = '\u20AC';
					var btn_ja_new = document.getElementById('btn_ja');
				 	btn_ja_new.value='\u00A3';
				 	var btn_jha_new = document.getElementById('btn_jha');
				 	btn_jha_new.style.fontFamily = "DejaVu Sans";
				 	btn_jha_new.value='\u20B9';	
					var btn_ena_new = document.getElementById('btn_ena');
				 	btn_ena_new.value='\u20A9';
				 	var btn_oo_new = document.getElementById('btn_oo');
				 	btn_oo_new.value='!';
					var btn_ang_new = document.getElementById('btn_ang');
				 	btn_ang_new.value='@';
				 	var btn_ah_new = document.getElementById('btn_ah');
				 	btn_ah_new.value='#';
					var btn_re_new = document.getElementById('btn_re');
				 	btn_re_new.value='$';
				 	var btn_Ao_new = document.getElementById('btn_Ao');
				 	btn_Ao_new.value='/';
					var btn_ta_new = document.getElementById('btn_ta');
				 	btn_ta_new.value='^';
				 	var btn_thh_new = document.getElementById('btn_thh');
				 	btn_thh_new.value='&';
					var btn_d_new = document.getElementById('btn_d');
				 	btn_d_new.value='*';
				 	var btn_dhha_new = document.getElementById('btn_dhha');
				 	btn_dhha_new.value='(';
					var btn_ana_new = document.getElementById('btn_ana');
				 	btn_ana_new.value=')';
				 	var btn_t_new = document.getElementById('btn_t');
				 	btn_t_new.value='\u00A5';
					var btn_tha_new = document.getElementById('btn_tha');
				 	btn_tha_new.value='-';
				 	var btn_da_new = document.getElementById('btn_da');
				 	btn_da_new.value='|';
					var btn_dha_new = document.getElementById('btn_dha');
				 	btn_dha_new.value='\'';
				 	var btn_na_new = document.getElementById('btn_na');
				 	btn_na_new.value='\"';
					var btn_pa_new = document.getElementById('btn_pa');
				 	btn_pa_new.value=':';
				 	var btn_pha_new = document.getElementById('btn_pha');
				 	btn_pha_new.value=';';
					var btn_ba_new = document.getElementById('btn_ba');
				 	btn_ba_new.value=',';
				 	var btn_bha_new = document.getElementById('btn_bha');
				 	btn_bha_new.value='?';
					var btn_ma_new = document.getElementById('btn_ma');
				 	btn_ma_new.value='\u00A9';	
				 	var btn_ya_new = document.getElementById('btn_ya');
				 	btn_ya_new.value='1/2';
					var btn_ra_new = document.getElementById('btn_ra');
				 	btn_ra_new.value='\u00AE';
					var btn_la_new = document.getElementById('btn_la');
				 	btn_la_new.value='\u2211';
					var btn_va_new = document.getElementById('btn_va');
				 	btn_va_new.value='\u2122';
					var btn_sha_new = document.getElementById('btn_sha');
				 	btn_sha_new.value='\u20A0';
					var btn_shh_new = document.getElementById('btn_shh');
				 	btn_shh_new.value='\u20AD';
					var btn_sa_new = document.getElementById('btn_sa');
				 	btn_sa_new.value='{';
					var btn_ha_new = document.getElementById('btn_ha');
				 	btn_ha_new.value='.';
					var btn_chha_new = document.getElementById('btn_chha');
				 	btn_chha_new.value='}';
					//var btn_backspace_new = document.getElementById('btn_backspace');
				 	//btn_backspace_new.value='';				 	
					var btn_sym1_new = document.getElementById('btn_sym1');
				 	btn_sym1_new.value='ABC';			 	
				}				
				else
				{
					var btn_sym_new = document.getElementById('btn_sym1');
					btn_sym_new.id = 'btn_sym';
					btn_sym_new.name = 'btn_sym';
					var btn_id0_new = document.getElementById(btn_id);
					btn_id0_new.id = 'btn_id0';
					btn_id0_new.style.display = 'block';					
					var btn_one_new = document.getElementById('btn_one');
					btn_one_new.style.display = 'none';
				 	var btn_a_new = document.getElementById('btn_a');
				 	btn_a_new.value='अ';
				 	var btn_aa_new = document.getElementById('btn_aa');
				 	btn_aa_new.value='आ';
				 	var btn_e_new = document.getElementById('btn_e');
				 	btn_e_new.value='इ';
				 	var btn_ee_new = document.getElementById('btn_ee');
				 	btn_ee_new.value='ई';
				 	var btn_ka_new = document.getElementById('btn_ka');
				 	btn_ka_new.value='क';
				 	var btn_kha_new = document.getElementById('btn_kha');
				 	btn_kha_new.value='ख';
				 	var btn_ga_new = document.getElementById('btn_ga');
				 	btn_ga_new.value='ग';
				 	var btn_gha_new = document.getElementById('btn_gha');
				 	btn_gha_new.value='घ';
				 	var btn_nga_new = document.getElementById('btn_nga');
				 	btn_nga_new.value='ङ';
				 	var btn_u_new = document.getElementById('btn_u');
				 	btn_u_new.value='उ';
					var btn_uu_new = document.getElementById('btn_uu');
				 	btn_uu_new.value='ऊ';				 	
				 	var btn_ai_new = document.getElementById('btn_ai');
				 	btn_ai_new.value='ए';
					var btn_aii_new = document.getElementById('btn_aii');
				 	btn_aii_new.value='ऐ';
				 	var btn_o_new = document.getElementById('btn_o');
				 	btn_o_new.value='ओ';
					var btn_ch_new = document.getElementById('btn_ch');
				 	btn_ch_new.value='च';
				 	var btn_chh_new = document.getElementById('btn_chh');
				 	btn_chh_new.value='छ';
					var btn_ja_new = document.getElementById('btn_ja');
				 	btn_ja_new.value='ज';
				 	var btn_jha_new = document.getElementById('btn_jha');
				 	btn_jha_new.value='झ';
					var btn_ena_new = document.getElementById('btn_ena');
				 	btn_ena_new.value='ञ';
				 	var btn_oo_new = document.getElementById('btn_oo');
				 	btn_oo_new.value='औ';
					var btn_ang_new = document.getElementById('btn_ang');
				 	btn_ang_new.value='अं';
				 	var btn_ah_new = document.getElementById('btn_ah');
				 	btn_ah_new.value='अ:';
					var btn_re_new = document.getElementById('btn_re');
				 	btn_re_new.value='ॠ';
				 	var btn_Ao_new = document.getElementById('btn_Ao');
				 	btn_Ao_new.value='ऑ';
					var btn_ta_new = document.getElementById('btn_ta');
				 	btn_ta_new.value='ट';
				 	var btn_thh_new = document.getElementById('btn_thh');
				 	btn_thh_new.value='ठ';
					var btn_d_new = document.getElementById('btn_d');
				 	btn_d_new.value='ड';
				 	var btn_dhha_new = document.getElementById('btn_dhha');
				 	btn_dhha_new.value='ढ';
					var btn_ana_new = document.getElementById('btn_ana');
				 	btn_ana_new.value='ण';
				 	var btn_t_new = document.getElementById('btn_t');
				 	btn_t_new.value='त';
					var btn_tha_new = document.getElementById('btn_tha');
				 	btn_tha_new.value='थ';
				 	var btn_da_new = document.getElementById('btn_da');
				 	btn_da_new.value='द';
					var btn_dha_new = document.getElementById('btn_dha');
				 	btn_dha_new.value='ध';
				 	var btn_na_new = document.getElementById('btn_na');
				 	btn_na_new.value='न';
					var btn_pa_new = document.getElementById('btn_pa');
				 	btn_pa_new.value='प';
				 	var btn_pha_new = document.getElementById('btn_pha');
				 	btn_pha_new.value='फ';
					var btn_ba_new = document.getElementById('btn_ba');
				 	btn_ba_new.value='ब';
				 	var btn_bha_new = document.getElementById('btn_bha');
				 	btn_bha_new.value='भ';
					var btn_ma_new = document.getElementById('btn_ma');
				 	btn_ma_new.value='म';
				 	var btn_ya_new = document.getElementById('btn_ya');
				 	btn_ya_new.value='य';
					var btn_ra_new = document.getElementById('btn_ra');
				 	btn_ra_new.value='र';
					var btn_la_new = document.getElementById('btn_la');
				 	btn_la_new.value='ल';
					var btn_va_new = document.getElementById('btn_va');
				 	btn_va_new.value='व';
					var btn_sha_new = document.getElementById('btn_sha');
				 	btn_sha_new.value='श';
					var btn_shh_new = document.getElementById('btn_shh');
				 	btn_shh_new.value='ष';
					var btn_sa_new = document.getElementById('btn_sa');
				 	btn_sa_new.value='स';
					var btn_ha_new = document.getElementById('btn_ha');
				 	btn_ha_new.value='ह';
					var btn_chha_new = document.getElementById('btn_chha');
				 	btn_chha_new.value='क्ष';
					var btn_sym1_new = document.getElementById('btn_sym');
				 	btn_sym1_new.value='Sym';
				}	 				  
			}
			
