function race(x) {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var y = Math.floor(Math.random() * 3);
	var img_1 = new Image();
	var img_2 = new Image();
	var img_3 = new Image();

	img_1.src = y + '_l.jpg';
	img_2.src = 'rsp.jpg';
	img_3.src = x + '_r.jpg';

	ctx.drawImage(img_1, 0, 0);
	ctx.drawImage(img_2, 465, 0);
	ctx.drawImage(img_3, 865, 0);
}