Canvas
===
```html
默认宽300px，高150px，在 style 里写没效果，也可以在 JS 中指定。
<canvas id="canvas" width="1024" height="768" style="border:1px solid #aaa; display:block; margin:50px auto"></canvas>
```
画线和填充

```JavaScript
window.onload = function() {
	var canvas = document.getElementById("canvas");
	canvas.width = 1024;
	canvas.height = 768;
	var context = canvas.getContext("2d");
	if (context) {
		context.beginPath(); // 分开处理
		context.moveTo(100, 100);
		context.lineTo(700, 700);
		context.lineTo(100, 700);
		context.lineTo(100, 100); // 首位相接形成多边形
		context.closePath();
		context.lineWidth = 5;
		context.strokeStyle = "red"
		context.stroke(); // 画线

		// context.fillStyle = "rgb(2, 100, 30)";
		// context.fill(); // 填充

		context.beginPath();
		context.moveTo(200, 100);
		context.lineTo(700, 600);
		context.closePath(); // 如果当前路径不是封闭的，会自动连线使之封闭
		context.strokeStyle = "black";
		context.stroke();	 // 再画一根
	
 		context.arc(300, 300, 200, 0, 1.5 * Math.PI, true); // 画弧
		context.lineWidth = 5;
		context.stokeStyle = "#005588";
		context.stroke(); 
		
	 	context.beginPath(); 
		context.arc(400, 400, 200, 0, 1.5 * Math.PI, true); // 弧，填充
		context.fillStyle = "red";
		context.fill();
	} else {
		alert("当前浏览器不支持 Canvas, 请更换浏览器后再试"); // 直接写到 canvas 标签中也行
	}
}
```

七巧板

``` html
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="utf-8">
	<title></title>
</head>
<body>
 	<canvas id="canvas" style="border:1px solid #aaa; display:block; margin:50px auto">
 		当前浏览器不支持 Canvas，请更换浏览器后再试
 	</canvas>	
 	<script type="text/javascript">
 		var tangram = [
 			{
 			p:[{x:0, y:0}, {x:400, y:0}, {x:200, y:200}], 
 			color:"#caff67"
 			},
 			{
 			p:[{x:0, y:0}, {x:200, y:200}, {x:0, y:400}],
 			color:"#67becf"
 			},
 			{
 			p:[{x:400, y:0}, {x:400, y:200}, {x:300, y:300}, {x:300, y:100}],
 			color:"#ef3d61"
 			},
 			{
 			p:[{x:300, y:100}, {x:300, y:300}, {x:200, y:200}],
 			color:"#f9f51a"
 			},
 			{
			p:[{x:200, y:200}, {x:300, y:300}, {x:200, y:400}, {x:100, y:300}],
 			color:"#a594c0"
 			},
 			{
 			p:[{x:100, y:300}, {x:200, y:400}, {x:0, y:400}],
 			color:"#fa8ecc"
 			},
 			{
 			p:[{x:400, y:200}, {x:400, y:400}, {x:200, y:400}],
 			color:"#f6ca29"
 			}
 		];

 		window.onload = function() {
 			var canvas = document.getElementById("canvas");
 			canvas.width = 400;
 			canvas.height = 400;
 			var context = canvas.getContext("2d");
 			for (var i = 0; i < tangram.length; i++) {
 				draw(tangram[i], context);
 			}
		}

		function draw(piece, ctx) {
			ctx.beginPath();
			ctx.moveTo(piece.p[0].x, piece.p[0].y);
			for (var i = 1; i < piece.p.length; i++) {
				ctx.lineTo(piece.p[i].x, piece.p[i].y);
			}
			ctx.closePath();
			ctx.fillStyle = piece.color;
			ctx.fill();

			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			ctx.stroke();
		}
	</script>
</body>
</html>
```
	
![image](https://i.niupic.com/images/2016/05/24/nhhfV5.png)


