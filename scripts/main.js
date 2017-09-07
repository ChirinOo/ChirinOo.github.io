var myImg = document.querySelector('img');

myImg.onclick = function() {
	
	var mySrc = myImg.getAttribute('src');
	if(mySrc==='images/luna.jpg'){
		myImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5UjspY1GV7_EmwVIyo18OpDifjcKlGCZin0vkoipqB3n3UQtYL8t4XvY');
		
		}
		else {
			myImg.setAttribute('src', 'images/luna.jpg');
		}
}

var myMessage = document.querySelector('textarea');
myMessage.innerHTML = "Vad vill du säga mig?";