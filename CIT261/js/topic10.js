
// target the first canvas tag
var canvasOne = document.getElementById('graphic1');

// set the context fro canvas #1
var cst = canvasOne.getContext('2d');

// draw a square
cst.fillStyle = "#edeee9";
cst.fillRect(137.5, 62.5, 25, 25);

// add a border to the square
cst.beginPath();
cst.moveTo(175,50);
cst.lineTo(125,50);
cst.lineTo(125,100);
cst.lineTo(175,100);
cst.lineTo(175,50);
cst.strokeStyle = '#d2691e';
cst.stroke();

// draw some circles
cst.beginPath();
cst.arc(95,75,40,0, Math.PI * 2,false);
cst.strokeStyle = "#628395";
cst.stroke();

cst.beginPath();
cst.arc(205,75,40,0, Math.PI * 2,false);
cst.strokeStyle = "#628395";
cst.stroke();

cst.beginPath();
cst.arc(150,75,40,0, Math.PI * 2,false);
cst.strokeStyle = "#628395";
cst.stroke();


// target the second canvas
var canvasTwo = document.getElementById('graphic2');

// set the context for canvas #2
var cnd = canvasTwo.getContext('2d');
cnd.font = "45px Fredoka One";
cnd.strokeText("Andrea",85,80);