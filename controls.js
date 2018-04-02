var color = document.getElementById("mycolor");
var preview = document.getElementById("preview");
var mynumber = document.getElementById("mynumber");
var myrange = document.getElementById("myrange");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
var slider4 = document.getElementById("slider4");
var hair = document.getElementById("hair");
var eyes= document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var display = document.getElementById("display");
var add = document.getElementById("add");
color.addEventListener("change", function(){
	preview.style.backgroundColor = color.value;
});


var str = "number range";
var split = str.split(" ");





function changeType(type) {
	slider1.type = type;
	slider2.type = type;
	slider3.type = type;
	slider4.type = type;

}


mynumber.addEventListener("click", function(){
changeType("number");
});
myrange.addEventListener("click", function(){
changeType("range");
});



slider1.addEventListener("change", function(){
	hair.style.width = slider1.value +"%" ;	
});

slider2.addEventListener("change", function(){
	eyes.style.width = slider2.value +"%";
});
slider3.addEventListener("change", function(){
   nose.style.width = slider3.value +"%";	
});
slider4.addEventListener("change", function(){
	mouth.style.width = slider4.value +"%";	
});

var numhair = 1;
hair.addEventListener("click", function(){

	if (numhair >= 3){
		numhair = 0 ;
		hair.src = "img/hair1.png"
	}

	else {numhair += 1;
	hair.src = "img/hair"+numhair+".png"
}

});
	
	
var numeyes = 1;
eyes.addEventListener("click", function(){

	if (numeyes >= 3){
		numeyes = 0 ;
		eyes.src = "img/eyes1.png"
	}

	else {numeyes += 1;
	eyes.src = "img/eyes"+numeyes+".png"
}

});


var numnose = 1;
nose.addEventListener("click", function(){

	if (numnose >= 3){
		numnose= 0 ;
		nose.src = "img/nose1.png"
	}

	else {numnose += 1;
	nose.src = "img/nose"+numnose+".png"
}

});


var nummouth = 1;
mouth.addEventListener("click", function(){

	if (nummouth >= 3){
		nummouth = 0 ;
		mouth.src = "img/mouth1.png"
	}

	else {nummouth += 1;
	mouth.src = "img/mouth"+nummouth+".png"
}

});









var x = 0;
function createface(){
	x += 1;
	var newdiv = document.createElement("div");
	var newhair = document.createElement("img");
	var neweyes = document.createElement("img");
	var newnose = document.createElement("img");
	var newmouth = document.createElement("img");
	newdiv.className = "image";
	newdiv.id = "div" +x;
	
	newhair.id = "nhair"+ x;
	neweyes.id = "neyes"+ x;
	newnose.id = "nnose"+ x;
	newmouth.id = "nmouth"+ x;
	newhair.className= "items";
	neweyes.className = "items";
	newnose.className= "items";
	newmouth.className = "items";
	display.appendChild(newdiv);
	document.getElementById("div" +x).appendChild(newhair);
	document.getElementById("div" +x).appendChild(neweyes);
	document.getElementById("div" +x).appendChild(newnose);
	document.getElementById("div" +x).appendChild(newmouth);
	document.getElementById("nhair"+x).src = hair.src;
	document.getElementById("neyes"+x).src = eyes.src;
	document.getElementById("nnose"+x).src = nose.src;
	document.getElementById("nmouth"+x).src = mouth.src;

	document.getElementById("nhair"+x).style.width = slider1.value + "%";
	document.getElementById("neyes"+x).style.width = slider2.value + "%";
	document.getElementById("nnose"+x).style.width = slider3.value + "%";
	document.getElementById("nmouth"+x).style.width = slider4.value + "%";
	newhair.style.top = hair.style.top;
	neweyes.style.top = eyes.style.top;
	newnose.style.top = nose.style.top;
	newmouth.style.top = mouth.style.top;
	newdiv.style.cssText = preview.style.cssText;

	//BONUS
	newdiv.addEventListener("click", function(){
	newdiv.style.display = "none";
	})


};


function randomface(){
	console.log();
	var rdhair = Math.round(Math.random()*2)+1;
	var rdeyes = Math.round(Math.random()*2)+1;
	var rdnose = Math.round(Math.random()*2)+1;
	var rdmouth = Math.round(Math.random()*2)+1;
	var rdred =  Math.round(Math.random()*255);
	var rdgreen =  Math.round(Math.random()*255);
	var rdblue =  Math.round(Math.random()*255);
	slider1.value = Math.round(Math.random()*69)+1;
	slider2.value = Math.round(Math.random()*39)+1;
	slider3.value = Math.round(Math.random()*29)+1;
	slider4.value = Math.round(Math.random()*34)+1;

	hair.src = "img/hair"+rdhair+".png";
	eyes.src = "img/eyes"+rdeyes+".png";
	nose.src = "img/nose"+rdnose+".png";
	mouth.src = "img/mouth"+rdmouth+".png";
	preview.style.backgroundColor = "rgb("+rdred+","+rdgreen+","+rdblue+")"
}

var timer = null;

function rdcreate(){
randomface();
createface();	
}
function autorandom(){

timer = setInterval(rdcreate, 500);
}


function stoprandom(){	
	clearInterval(timer);
	
}






