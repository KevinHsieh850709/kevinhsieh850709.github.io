var img_1 = new Image();
img_1.src = 'canvas_5.png';
var img_2 = new Image();
img_2.src = 'canvas_5.png';
var img_3 = new Image();
img_3.src = 'canvas_5.png';

window.onload = 
	function() {
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		
		ctx.drawImage(img_1, 0, 0);
		ctx.drawImage(img_2, 154, 0);
		ctx.drawImage(img_3, 308, 0);
	};

function game() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	var a = Math.floor(Math.random() * 6) + 1;
	var b = Math.floor(Math.random() * 6) + 1;
	var c = Math.floor(Math.random() * 6) + 1;
	
	img_1.src = 'canvas_' + a + '.png';
	img_2.src = 'canvas_' + b + '.png';
	img_3.src = 'canvas_' + c + '.png';

	ctx.drawImage(img_1, 0, 0);
	ctx.drawImage(img_2, 154, 0);
	ctx.drawImage(img_3, 308, 0);
}