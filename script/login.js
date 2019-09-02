	function proces(){
	  var pass=document.getElementById('pass').value;
	  
	if(pass!=window.localStorage['password']){
		alert('WRONG PASSWORD');
		
	}
		else {	
			window.location="level.html";
	
		}
		
	 }