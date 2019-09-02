 
var acc233,acc201,fin201,acc205,ecn201,ecn203,gns211,pos111,
gns111,bus103,eng,maths,econs,com,acc,calc,result,unit2;

var acc233p,acc201p,fin201p,acc205p,ecn201p,ecn203p,gns211p,pos111p,
gns111p,bus103p,engp,mathsp,econsp,comp,accp,newg;

var acc233c,acc201c,fin201c,acc205c,ecn201c,ecn203c,gns211c,pos111c,
gns111c,bus103c,engc,mathsc,econsc,comc,accc;

var acc233cs,acc201cs,fin201cs,acc205cs,ecn201cs,ecn203cs,gns211cs,pos111cs,
gns111cs,bus103cs,engcs,mathscs,econscs,comcs,acccs;

var gp1,gp2,calculate,sresult,yresult;
function gpcalc()
{
acc233= Number(document.getElementById("acc233").value);
fin201= Number(document.getElementById("fin201").value);
acc201= Number(document.getElementById("acc201").value);
acc205= Number(document.getElementById("acc205").value);
ecn201= Number(document.getElementById("ecn201").value);
ecn203= Number(document.getElementById("ecn203").value);
gns211= Number(document.getElementById("gns211").value);
gns111= Number(document.getElementById("gns111").value);
bus103= Number(document.getElementById("bus103").value);
pos111= Number(document.getElementById("pos111").value);
eng= Number(document.getElementById("eng").value);
maths= Number(document.getElementById("maths").value);
econs= Number(document.getElementById("econs").value);
com= Number(document.getElementById("com").value);
acc= Number(document.getElementById("acc").value);

	acc233p= Number(document.getElementById("acc233p").value);
fin201p= Number(document.getElementById("fin201p").value);
acc201p= Number(document.getElementById("acc201p").value);
	acc205p= Number(document.getElementById("acc205p").value);
	ecn201p= Number(document.getElementById("ecn201p").value);
	ecn203p= Number(document.getElementById("ecn203p").value);
gns211p= Number(document.getElementById("gns211p").value);
gns111p= Number(document.getElementById("gns111p").value);
bus103p= Number(document.getElementById("bus103p").value);
	pos111p= Number(document.getElementById("pos111p").value);
	engp= Number(document.getElementById("engp").value);
	mathsp= Number(document.getElementById("mathsp").value);
	econsp= Number(document.getElementById("econsp").value);
	comp= Number(document.getElementById("comp").value);
	accp= Number(document.getElementById("accp").value);
	 
    if(acc233==-1){ acc233p=0;}
	if(fin201==-1){ fin201p=0;}
	if(acc201==-1){ acc201p=0;}
	if(acc205==-1){ acc205p=0;}
	if(ecn201==-1){ ecn201p=0;}
	if(ecn203==-1){ ecn203p=0;}
	if(gns211==-1){ gns211p=0;}
	if(gns111==-1){ gns111p=0;}
	if(bus103==-1){ bus103p=0;}
	if(pos111==-1){ pos111p=0;}
	if(eng==-1){ engpp=0;}
	if(maths==-1){mathsp=0;}
	if(econs==-1){ econsp=0;}
	if(com==-1){ comp=0;}
	if(acc==-1){ accp=0;}
	
	////////////////////////////////////////////////////////
	
	acc233c= document.getElementById("acc233c").value;
fin201c= document.getElementById("fin201c").value;
acc201c= document.getElementById("acc201c").value;
acc205c= document.getElementById("acc205c").value;
ecn201c= document.getElementById("ecn201c").value;
ecn203c= document.getElementById("ecn203c").value;
gns211c= document.getElementById("gns211c").value;
gns111c= document.getElementById("gns111c").value;
bus103c= document.getElementById("bus103c").value;
pos111c= document.getElementById("pos111c").value;
engc= document.getElementById("engc").value;
mathsc= document.getElementById("mathsc").value;
econsc= document.getElementById("econsc").value;
comc= document.getElementById("comc").value;
accc= document.getElementById("accc").value;

	
acc233cs=	window.localStorage['acc233c6']=acc233c;
fin201cs=	window.localStorage['fin201c6']=fin201c;
acc201cs=	window.localStorage['acc201c6']=acc201c;
acc205cs=	window.localStorage['acc205c6']=acc205c;
ecn201cs=	window.localStorage['ecn201c6']=ecn201c;
ecn203cs=	window.localStorage['ecn203c6']=ecn203c;
gns211cs=	window.localStorage['gns211c6']=gns211c;
gns111cs=	window.localStorage['gns111c6']=gns111c;
bus103cs=	window.localStorage['bus103c6']=bus103c;
pos111cs=	window.localStorage['pos111c6']=pos111c;
engcs=	window.localStorage['engc6']=engc;
mathscs=	window.localStorage['mathsc6']=mathsc;
econscs=	window.localStorage['econsc6']=econsc;
comcs=	window.localStorage['comc6']=comc;
acccs=	window.localStorage['accc6']=accc;

acc233ps=	window.localStorage['acc233p6']=acc233p;
fin201ps=	window.localStorage['fin201p6']=fin201p;
acc201ps=	window.localStorage['acc201p6']=acc201p;
acc205ps=	window.localStorage['acc205p6']=acc205p;
ecn201ps=	window.localStorage['ecn201p6']=ecn201p;
ecn203ps=	window.localStorage['ecn203p6']=ecn203p;
gns211ps=	window.localStorage['gns211p6']=gns211p;
gns111ps=	window.localStorage['gns111p6']=gns111p;
bus103ps=	window.localStorage['bus103p6']=bus103p;
pos111ps=	window.localStorage['pos111p6']=pos111p;
engps=	window.localStorage['engp6']=engp;
mathsps=	window.localStorage['mathsp6']=mathsp;
econsps=	window.localStorage['econsp6']=econsp;
comps=	window.localStorage['comp6']=comp;
accps=	window.localStorage['accp6']=accp;


acc233s=	window.localStorage['acc2336']=acc233;
fin201s=	window.localStorage['fin2016']=fin201;
acc201s=	window.localStorage['acc2016']=acc201;
acc205s=	window.localStorage['acc2056']=acc205;
ecn201s=	window.localStorage['ecn2016']=ecn201;
ecn203s=	window.localStorage['ecn2036']=ecn203;
gns211s=	window.localStorage['gns2116']=gns211;
gns111s=	window.localStorage['gns1116']=gns111;
bus103s=	window.localStorage['bus1036']=bus103;
pos111s=	window.localStorage['pos1116']=pos111;
engs=	window.localStorage['eng6']=eng;
mathss=	window.localStorage['maths6']=maths;
econss=	window.localStorage['econs6']=econs;
coms=	window.localStorage['com6']=com;
accs=	window.localStorage['acc6']=acc;

	
	//////////////////////////////////////////////////////////////

	
unit2= (acc233p)+(acc201p)+(fin201p)+(acc205p)+(ecn201p)+(ecn203p)+(gns211p)+(gns111p)+(bus103p)+(pos111p)+(engp)+(mathsp)+(econsp)+(comp)+(accp);
var tp=((acc233*acc233p)+(fin201*fin201p)+(acc201*acc201p)+(acc205*acc205p)+(ecn201*ecn201p)+(ecn203*ecn203p)+(gns211*gns211p)+(gns111*gns111p)+(bus103*bus103p)+(pos111*pos111p)+(eng*engp)+(maths*mathsp) +(econs*econsp)+(com*comp)+(acc*accp));
var grade_sys=window.localStorage['grade'];	
/////MULTIPLE GRADING SYSTEM CALCULATION
if(window.localStorage['spreadsheet']=="spreadsheet4_all.html"){
var	cal= (tp/unit2)*(grade_sys/4);
}
else{
var	cal= (tp/unit2)*(grade_sys/5);
}
//////////////////////////////////////////////////////////////////////////////
calc=cal;
calc2=calc.toPrecision(3);
	
	
	if(calc2=="NaN"){
	window.localStorage['tp6']=0;
	window.localStorage['tu6']=0;	
	}
	else{
	window.localStorage['tp6']=tp;
	window.localStorage['tu6']=unit2;
		}

var grade;
var calc_p=calc/window.localStorage['grade']

if(calc<0){result2= "Please input your data";}
if(calc_p>=0.9){grade= "IS FIRST CLASS UPPER/DISTINCTION";}
if(calc_p>=0.7 & calc<0.9){grade= "IS SECOND CLASS UPPER/UPPER CREDIT";}
if(calc_p>=0.5 & calc<0.7){grade= "IS SECOND CLASS LOWER/LOWER CREDIT";}
if(calc_p>=0.3 & calc<0.5){grade= "IS THIRD CLASS LOWER/PASS CREDIT";}
if(calc_p<0.3){grade= "WILL LEAD TO EXPULSION FOR 100L AND 300L STUDENTS WHILE IT WILL LEAD TO PROBATION FOR 200L STUDENTS";}
	result2 = "YOUR GRADE POINT AVERAGE(CURRENT SEMESTER) IS " + calc2 + "  GRADE POINT(CHECK DOCUMENTATION FOR GRADE CATEGORY) ";
	result= calc2 + " GP(CURRENT SEMESTER)";
	if(calc2=="NaN") {alert("Please Insert your Details appropriately(NOTE THAT F DOES NOT ATTRACT ANY GRADE POINT)");}
	else{
	window.localStorage['result6']=result;
	document.getElementById("result").value=result ;
	document.getElementById("show").value=result ;
	alert(result2);
		window.location="log/level.html";
}

}



function course()
{
	if(window.localStorage['result6']=='NAN GRADE POINT'||window.localStorage['result6']==''){}
	else{
		

document.getElementById("acc233c").value=window.localStorage['acc233c6'];
document.getElementById("acc201c").value=window.localStorage['acc201c6'];
document.getElementById("fin201c").value=window.localStorage['fin201c6'];	
document.getElementById("acc205c").value=window.localStorage['acc205c6'];
document.getElementById("ecn201c").value=window.localStorage['ecn201c6'];
document.getElementById("ecn203c").value=window.localStorage['ecn203c6'];
document.getElementById("gns211c").value=window.localStorage['gns211c6'];
document.getElementById("gns111c").value=window.localStorage['gns111c6'];
document.getElementById("pos111c").value=window.localStorage['pos111c6'];
document.getElementById("engc").value=window.localStorage['engc6'];
document.getElementById("mathsc").value=window.localStorage['mathsc6'];
document.getElementById("econsc").value=window.localStorage['econsc6'];	
document.getElementById("comc").value=window.localStorage['comc6'];
document.getElementById("accc").value=window.localStorage['accc6'];
document.getElementById("bus103c").value=window.localStorage['bus103c6'];
///////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("acc233p").value=window.localStorage['acc233p6'];
document.getElementById("acc201p").value=window.localStorage['acc201p6'];
document.getElementById("fin201p").value=window.localStorage['fin201p6'];	
document.getElementById("acc205p").value=window.localStorage['acc205p6'];
document.getElementById("ecn201p").value=window.localStorage['ecn201p6'];
document.getElementById("ecn203p").value=window.localStorage['ecn203p6'];
document.getElementById("gns211p").value=window.localStorage['gns211p6'];
document.getElementById("gns111p").value=window.localStorage['gns111p6'];
document.getElementById("pos111p").value=window.localStorage['pos111p6'];
document.getElementById("engp").value=window.localStorage['engp6'];
document.getElementById("mathsp").value=window.localStorage['mathsp6'];
document.getElementById("econsp").value=window.localStorage['econsp6'];	
document.getElementById("comp").value=window.localStorage['comp6'];
document.getElementById("accp").value=window.localStorage['accp6'];
document.getElementById("bus103p").value=window.localStorage['bus103p6'];
////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("acc233").value=window.localStorage['acc2336'];
document.getElementById("acc201").value=window.localStorage['acc2016'];
document.getElementById("fin201").value=window.localStorage['fin2016'];	
document.getElementById("acc205").value=window.localStorage['acc2056'];
document.getElementById("ecn201").value=window.localStorage['ecn2016'];
document.getElementById("ecn203").value=window.localStorage['ecn2036'];
document.getElementById("gns211").value=window.localStorage['gns2116'];
document.getElementById("gns111").value=window.localStorage['gns1116'];
document.getElementById("pos111").value=window.localStorage['pos1116'];
document.getElementById("eng").value=window.localStorage['eng6'];
document.getElementById("maths").value=window.localStorage['maths6'];
document.getElementById("econs").value=window.localStorage['econs6'];	
document.getElementById("com").value=window.localStorage['com6'];
document.getElementById("acc").value=window.localStorage['acc6'];
document.getElementById("bus103").value=window.localStorage['bus1036'];

document.getElementById("result").value=window.localStorage['result6'];
document.getElementById("show").value=window.localStorage['result6'];
/////////////////////////////////////////////////////////////////////////////////////////////
		}
}



function about(){
	alert('This app was Designed by MR WACCAFF TECH WORLD you can contact us 08062070963 or EMAIL:mrwaccafftech@gmail.com');
}
	
function clr(){
	if(window.localStorage['result6']=='NAN GRADE POINT'||window.localStorage['result6']==''){ alert('NO DATA FOUND, CALCULATE YOUR GPA AND THE DATA WILL BE AUTOMATICALLY SAVED');}
	else{
	alert('YOUR GRADE POINT DATA FOR CURRENT SEMESTER HAS BEEN PERMANENTLY DELETED,ANY OTHER CALCULATED GPA DATA WILL BE AUTOMATICALLY SAVED.');}
	
	
acc233cs=	window.localStorage['acc233c6']="";
fin201cs=	window.localStorage['fin201c6']="";
acc201cs=	window.localStorage['acc201c6']="";
acc205cs=	window.localStorage['acc205c6']="";
ecn201cs=	window.localStorage['ecn201c6']="";
ecn203cs=	window.localStorage['ecn203c6']="";
gns211cs=	window.localStorage['gns211c6']="";
gns111cs=	window.localStorage['gns111c6']="";
bus103cs=	window.localStorage['bus103c6']="";
pos111cs=	window.localStorage['pos111c6']="";
engcs=	window.localStorage['engc6']="";
mathscs=	window.localStorage['mathsc6']="";
econscs=	window.localStorage['econsc6']="";
comcs=	window.localStorage['comc6']="";
acccs=	window.localStorage['accc6']="";

acc233ps=	window.localStorage['acc233p6']=0;
fin201ps=	window.localStorage['fin201p6']=0;
acc201ps=	window.localStorage['acc201p6']=0;
acc205ps=	window.localStorage['acc205p6']=0;
ecn201ps=	window.localStorage['ecn201p6']=0;
ecn203ps=	window.localStorage['ecn203p6']=0;
gns211ps=	window.localStorage['gns211p6']=0;
gns111ps=	window.localStorage['gns111p6']=0;
bus103ps=	window.localStorage['bus103p6']=0;
pos111ps=	window.localStorage['pos111p6']=0;
engps=	window.localStorage['engp6']=0;
mathsps=	window.localStorage['mathsp6']=0;
econsps=	window.localStorage['econsp6']=0;
comps=	window.localStorage['comp6']=0;
accps=	window.localStorage['accp6']=0;


acc233s=	window.localStorage['acc2336']=0;
fin201s=	window.localStorage['fin2016']=0;
acc201s=	window.localStorage['acc2016']=0;
acc205s=	window.localStorage['acc2056']=0;
ecn201s=	window.localStorage['ecn2016']=0;
ecn203s=	window.localStorage['ecn2036']=0;
gns211s=	window.localStorage['gns2116']=0;
gns111s=	window.localStorage['gns1116']=0;
bus103s=	window.localStorage['bus1036']=0;
pos111s=	window.localStorage['pos1116']=0;
engs=	window.localStorage['eng6']=0;
mathss=	window.localStorage['maths6']=0;
econss=	window.localStorage['econs6']=0;
coms=	window.localStorage['com6']=0;
accs=	window.localStorage['acc6']=0;
window.localStorage['result6']="";
/////////////////////////////////////////////////////////
	var cgpa1= window.localStorage['cgpa16']="";
	var cgpa2= window.localStorage['cgpa26']="";
	var cgpa3= window.localStorage['cgpar6']="";

	window.location='l_six.html';

}
/////////////////////////////////////////////////////////////

function exited(){
	buttonIndex=1;
confirmed = function(buttonIndex) { if(buttonIndex == 1) {
console.log("navigator.app.exitApp"); navigator.app.exitApp(); } }
onTouch = function() { navigator.notification.confirm('', confirmed,
'Exit?'); }
}
function onLoad() {
/*document.addEventListener("deviceready", onDeviceReady);*/
}
// device APIs are available
//
function onDeviceReady() {
// Register the event listener
document.addEventListener("backbutton", onBackKeyDown);
}
// Handle the back button
//
function onBackKeyDown() {
navigator.notification.confirm(
'Are you sure you want to exit?!', // message
onConfirm, // callback to invoke with index of button pressed
'Confirm exit', // title
['Yes','No'] // buttonLabels
);
function onConfirm(buttonIndex) {
if (buttonIndex == 1) {
navigator.app.exitApp();
}
}
}
