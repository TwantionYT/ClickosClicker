let Button = document.getElementById("button");
let Score = document.getElementById("score");
let Shop = document.getElementById("shop");
let ShopPanel = document.getElementById("menu-shop");
let Updateperclick = document.getElementById("shopbuy1");
let num = 0;
let perclick = 5;
let shopcounter = 0;
start();
Shop.addEventListener("click", update);
Button.addEventListener("click", score);
Updateperclick.addEventListener("click", Update1);
function score() {
	num += perclick;
	Score.innerHTML = num;
	console.log(num);
	Number(localStorage.setItem("score", num));
}
function start() {
	num = Number(localStorage.getItem('score'));
	perclick = Number(localStorage.getItem('perclick'));
	Score.innerHTML = num;
	shopstop();
}
function shopstart() {
	Shop.style.transition = "0.5s";
	Shop.style.filter = "brightness(0.7)";
	Shop.style.top = "calc(50% - 75px)";
	shopcounter = 1;
	ShopPanel.style.display = "block"
}
function shopstop() {
	Shop.style.transition = "0.5s";
	Shop.style.filter = "brightness(1.0)";
	Shop.style.top = "calc(50% - 25px)";
	shopcounter = 0
	ShopPanel.style.display = "none"
}
function update() {
	if (shopcounter == 0) {
		shopstart();
	}
	else if (shopcounter == 1) {
		shopstop();
	}
}
function Update1() {
	if (num > 99) {
		perclick += 5;
		Number(localStorage.setItem("perclick", perclick));
		num -= 100;
		Score.innerHTML = num;
	}
}