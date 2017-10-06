

mangrong=[0,0,0,0,0];
mangrong2=[0,0,0,0];
var tempso1;
var tempso2="a";
var tempso3="a";
var tempmath;
var tempketqua="";

var ham = "";
function press (str)
{
	x=[];
	ham = ham + str;
	document.getElementById("display").innerText = ham;
}

function pressmath(str)
{	if (ham != "") {mangrong.unshift(ham.valueOf());}
	mangrong.unshift(str);
	ham = [];
			tempmath=mangrong[2].toString();
			if (tempmath=="+")
			{	tempketqua = Number(mangrong[3]) + Number(mangrong[1]);
				document.getElementById("display").innerText = tempketqua.toString().slice(0,8);
				mangrong.unshift(tempketqua);
				tempso1=mangrong[1];
				mangrong[1]=mangrong[0];
				mangrong[0]=tempso1;
			}
			else if (tempmath=="-")
			{	tempketqua = Number(mangrong[3]) - Number(mangrong[1]);
				document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
				mangrong.unshift(tempketqua);
				tempso1=mangrong[1];
				mangrong[1]=mangrong[0];
				mangrong[0]=tempso1;
			}
				else if (tempmath=="*")
			{	tempketqua = Number(mangrong[3]) * Number(mangrong[1]);
				document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
				mangrong.unshift(tempketqua);
				tempso1=mangrong[1];
				mangrong[1]=mangrong[0];
				mangrong[0]=tempso1;
			}
				else if (tempmath=="÷")
			{	tempketqua = Number(mangrong[3]) / Number(mangrong[1]);
				document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
				mangrong.unshift(tempketqua);
				tempso1=mangrong[1];
				mangrong[1]=mangrong[0];
				mangrong[0]=tempso1;
			}
	
}


function pressketqua(str)
{	if (ham != "") {mangrong.unshift(ham.valueOf());}
	mangrong.unshift(str.valueOf());
	ham = "";
	tempmath=mangrong[2].toString();
	if (tempmath=="+")
	{	tempketqua = Number(mangrong[3]) + Number(mangrong[1]);
		document.getElementById("display").innerText = tempketqua.toString().slice(0,8);
		mangrong.unshift(tempketqua);
	}
	else if (tempmath=="-")
	{	tempketqua = Number(mangrong[3]) - Number(mangrong[1]);
		document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
		mangrong.unshift(tempketqua);


	}
		else if (tempmath=="*")
	{	tempketqua = Number(mangrong[3]) * Number(mangrong[1]);
		document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
		mangrong.unshift(tempketqua);

	}
		else if (tempmath=="÷")
	{	tempketqua = Number(mangrong[3]) / Number(mangrong[1]);
		document.getElementById("display").innerText = tempketqua.toString().slice(0,8); 
		mangrong.unshift(tempketqua);

	}
}

function presstest()
{
alert (mangrong +" "+ tempketqua.toString().slice(0,3));
}

function pressc()
{
	ham="";
mangrong=[0,0,0,0,0];
document.getElementById("display").innerText = "";
}

function pressbinhphuong()
{if (ham=="")
		{	
				tempso3 = Math.pow(mangrong[0],2);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
		}
if (ham!= "")
		{		mangrong.unshift(ham.valueOf());
				tempso3 = Math.pow(mangrong[0],2);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
		}



}
function presscan()
{if (ham=="")
		{	
				tempso3 = Math.sqrt(mangrong[0]);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
		}
if (ham!= "")
		{		mangrong.unshift(ham.valueOf());
				tempso3 = Math.sqrt(mangrong[0]);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
				ham = "";
		}



}
function pressphantram()
{if (ham=="")
		{	
				tempso3 = (mangrong[0] / 100);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
		}
if (ham!= "")
		{		mangrong.unshift(ham.valueOf());
				tempso3 = (mangrong[0] / 100);
				mangrong.unshift(tempso3);
				document.getElementById("display").innerText = tempso3.toString().slice(0,8);
				ham = "";
		}



}


function xab(n){
 var i=1;
 while(i<=n)
 {
   while(i%2==0){
     document.write("<p style='color:red;display:block'>"+i+"</p>");
     i++;
   }
   while(i%2 != 0){
     document.write("<p style='color:green;display:block'>"+i+"</p>");
     i++;  
   }
 }
}