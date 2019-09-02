function check_user(){
		if(window.localStorage['password']!=undefined & window.localStorage['password']!="delete")
		{
			//alert(window.localStorage['password']);
			window.location="login.html";
		}
		
	}
	function proces(){
	  var pass=document.getElementById('pass').value;
	  var cpass=document.getElementById('cpass').value;
	if(pass!=cpass){
		alert('PASSWORD NOT MATCH');
		
	}
		else {
		var password=window.localStorage['password']=pass;
		window.localStorage['pass_state']="set";
			window.location="level.html";
			
		}
	 } 

	 function help(){
alert('CREATE A UNIQUE PASSWORD TO PROTECT YOUR DATA FROM UNAUTHORIZED ACCESS(GRADES AND CGPA) . THE PASSWORD CANNOT BE MORE THAN 4 CHARACTERS, IF YOU DONT WANT TO USE A PASSWORD LEAVE IT BLANK AND CLICK ON CONTINUE EACH TIME YOU GET TO THIS STAGE')


	 }