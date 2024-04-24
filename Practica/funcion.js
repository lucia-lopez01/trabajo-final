window.addEventListener("load", function() {
	document.getElementById('COLORES').addEventListener("click", function() {
	alert("Hola Mundo");
		})
    })

var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if (counter > 7 ){
		counter = 1;
	}
},5000);
