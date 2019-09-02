
	function proces(){
		var opass=document.getElementById('opass').value;
	  var pass=document.getElementById('pass').value;
	  var cpass=document.getElementById('cpass').value;
		if(opass!==window.localStorage['password']){
			alert('OLD PASSWORD NOT CORRECT');
		}
		else{
	if(pass!==cpass){
		alert('NEW PASSWORD NOT MATCH');
		
	}
		else {
		var password=window.localStorage['password']=pass;
			alert('PIN CHANGED SUCCESSFULLY');
			window.location="level.html";
			
		}
			}
	 } 