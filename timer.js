var countdowndate=new Date("Dec24, 2022 20:36:00").getTime();

var x=setInterval(function(){

	var now = New Date().getTime();

	var Distance=countdowndate-now;

	var days=Math.floor(Distance/(1000*60*60*24));
	var hours=Math.floor((Distance%(1000*60*60*24))/(1000*60*60));
	var minutes=Math.floor((Distance%(1000*60*60))/(1000*60));
	var seconds=Math.floor((Distance%(1000*60))/1000);

	document.getElementById("demo").innerHTML=days+"d"+hours+"h"+minutes+"min"+seconds+"sec";

	if(Distance<0)
	{
		clearInterval(x);
		document.getElementById("demo").innerHTML="EXPIRED";
	}
}, 1000);
