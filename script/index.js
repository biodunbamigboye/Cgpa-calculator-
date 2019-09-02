
function redirect(){
	if(window.localStorage['user']!='exist'){
			window.location="clear_new_user.html";
	
}else{window.location="option.html";}
	 }
setTimeout('redirect()',5000);

	