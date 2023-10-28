//canvasの設定（せってい）
var canvas = document.getElementById('canvas');
canvas.width = 900;		//canvasの横幅（よこはば）
canvas.height = 230;	//canvasの縦幅（たてはば）

//コンテキストを取得（しゅとく）
var ctx = canvas.getContext('2d');


//画像（がぞう）のオブジェクトを作成
var Logo = new Object();
Logo.img = new Image();
Logo.img.src = 'img/Logo.png';


var Home = new Object();
Home.img = new Image();
Home.img.src = 'img/circle-5.png';
Home.pos_num = 1;
Home.pos = 150;
Home.ex_pos = 0;
Home.img.width = 100;

var Introduction = new Object();
Introduction.img = new Image();
Introduction.img.src = 'img/circle-6.png';
Introduction.pos_num = 2;
Introduction.pos = 190;
Introduction.ex_pos = 0;

var Desigh = new Object();
Desigh.img = new Image();
Desigh.img.src = 'img/circle-7.png';
Desigh.pos_num = 3;
Desigh.pos = 230;
Desigh.ex_pos = 0;

var Experiments = new Object();
Experiments.img = new Image();
Experiments.img.src = 'img/circle-1.png';
Experiments.pos_num = 4;
Experiments.pos = 270;
Experiments.ex_pos = 0;

var Conclusion = new Object();
Conclusion.img = new Image();
Conclusion.img.src = 'img/circle-2.png';
Conclusion.pos_num = 5;
Conclusion.pos = 310;
Conclusion.ex_pos = 0;

var Future = new Object();
Future.img = new Image();
Future.img.src = 'img/circle-3.png';
Future.pos_num = 6;
Future.pos = 350;
Future.ex_pos = 0;

var Team = new Object();
Team.img = new Image();
Team.img.src = 'img/circle-4.png';
Team.pos_num = 7;
Team.pos = 390;
Team.ex_pos = 0;

//場所のオブジェクトを作成

var t = 0;
var move = 0;
var first = document.getElementById('prev-3');
var second = document.getElementById('prev-2');
var third = document.getElementById('prev-1');
var fourth = document.getElementById('current');
var fifth = document.getElementById('next-1');
var sixth = document.getElementById('next-2');
var seventh = document.getElementById('next-3');

//メインループ
function main() {

	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, 900, 230)

	if ((Home.pos + t) % 360 == 30) {
		Home.pos = 150 - t % 120;
	}
	ctx.drawImage(Logo.img, 300, 0, 300, 150);

	ctx.drawImage(Home.img, 450 - (150 - 80 * Math.sin(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Home.pos + t + Home.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Introduction.img, 450 - (150 - 80 * Math.sin(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Introduction.pos + t + Introduction.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Desigh.img, 450 - (150 - 80 * Math.sin(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Desigh.pos + t + Desigh.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Experiments.img, 450 - (150 - 80 * Math.sin(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Experiments.pos + t + Experiments.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Conclusion.img, 450 - (150 - 80 * Math.sin(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Conclusion.pos + t + Conclusion.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Future.img, 450 - (150 - 80 * Math.sin(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Future.pos + t + Future.ex_pos) % 360) * Math.PI / 180));

	ctx.drawImage(Team.img, 450 - (150 - 80 * Math.sin(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180)) / 2 + 300 * Math.cos(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180), 75 - (75 - 40 * Math.sin(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180)) / 2 - 70 * Math.sin(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180), 150 - 80 * Math.sin(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180), 75 - 40 * Math.sin(((Team.pos + t + Team.ex_pos) % 360) * Math.PI / 180));

	first.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = 120;
		}
	});
	second.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = 80;
		}
	});
	third.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = 40;
		}
	});
	fourth.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = 0;
		}
	});
	fifth.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = -40;
		}
	});
	sixth.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = -80;
		}
	});
	seventh.addEventListener('click', () => {
		if (move == 0) {
			window.scrollTo(0, 0);
			move = -120;
		}
	});

	if ((Home.pos + t + Home.ex_pos) % 360 > 30 && (Home.pos + t + Home.ex_pos) % 360 < 150) {
		if (move > 0) {
			Home.ex_pos += 8;
		} else if (move < 0) {
			Home.ex_pos += 352;
		}

		if ((Home.pos + t + Home.ex_pos) % 360 == 38) {
			Home.ex_pos += 352;
		} else if ((Home.pos + t + Home.ex_pos) % 360 == 142) {
			Home.ex_pos += 8;
		}
	}
	if ((Introduction.pos + t + Introduction.ex_pos) % 360 > 30 && (Introduction.pos + t + Introduction.ex_pos) % 360 < 150) {
		if (move > 0) {
			Introduction.ex_pos += 8;
		} else if (move < 0) {
			Introduction.ex_pos += 352;
		}

		if ((Introduction.pos + t + Introduction.ex_pos) % 360 == 38) {
			Introduction.ex_pos += 352;
		} else if ((Introduction.pos + t + Introduction.ex_pos) % 360 == 142) {
			Introduction.ex_pos += 8;
		}
	}
	if ((Desigh.pos + t + Desigh.ex_pos) % 360 > 30 && (Desigh.pos + t + Desigh.ex_pos) % 360 < 150) {
		if (move > 0) {
			Desigh.ex_pos += 8;
		} else if (move < 0) {
			Desigh.ex_pos += 352;
		}

		if ((Desigh.pos + t + Desigh.ex_pos) % 360 == 38) {
			Desigh.ex_pos += 352;
		} else if ((Desigh.pos + t + Desigh.ex_pos) % 360 == 142) {
			Desigh.ex_pos += 8;
		}
	}
	if ((Experiments.pos + t + Experiments.ex_pos) % 360 > 30 && (Experiments.pos + t + Experiments.ex_pos) % 360 < 150) {
		if (move > 0) {
			Experiments.ex_pos += 8;
		} else if (move < 0) {
			Experiments.ex_pos += 352;
		}

		if ((Experiments.pos + t + Experiments.ex_pos) % 360 == 38) {
			Experiments.ex_pos += 352;
		} else if ((Experiments.pos + t + Experiments.ex_pos) % 360 == 142) {
			Experiments.ex_pos += 8;
		}
	}
	if ((Conclusion.pos + t + Conclusion.ex_pos) % 360 > 30 && (Conclusion.pos + t + Conclusion.ex_pos) % 360 < 150) {
		if (move > 0) {
			Conclusion.ex_pos += 8;
		} else if (move < 0) {
			Conclusion.ex_pos += 352;
		}

		if ((Conclusion.pos + t + Conclusion.ex_pos) % 360 == 38) {
			Conclusion.ex_pos += 352;
		} else if ((Conclusion.pos + t + Conclusion.ex_pos) % 360 == 142) {
			Conclusion.ex_pos += 8;
		}
	}
	if ((Future.pos + t + Future.ex_pos) % 360 > 30 && (Future.pos + t + Future.ex_pos) % 360 < 150) {
		if (move > 0) {
			Future.ex_pos += 8;
		} else if (move < 0) {
			Future.ex_pos += 352;
		}

		if ((Future.pos + t + Future.ex_pos) % 360 == 38) {
			Future.ex_pos += 352;
		} else if ((Future.pos + t + Future.ex_pos) % 360 == 142) {
			Future.ex_pos += 8;
		}
	}
	if ((Team.pos + t + Team.ex_pos) % 360 > 30 && (Team.pos + t + Team.ex_pos) % 360 < 150) {
		if (move > 0) {
			Team.ex_pos += 8;
		} else if (move < 0) {
			Team.ex_pos += 352;
		}

		if ((Team.pos + t + Team.ex_pos) % 360 == 38) {
			Team.ex_pos += 352;
		} else if ((Team.pos + t + Team.ex_pos) % 360 == 142) {
			Team.ex_pos += 8;
		}
	}

	if (move > 0) {
		move -= 4;
		t += 4;
	} else if (move < 0) {
		move += 4;
		t -= 4;
		// console.log(t);
	}

	requestAnimationFrame(main);
}
//ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

$(function () {
	let carUl = $('.carousel > ul');
	$('span').on('click', function () {
		if ($(this).hasClass('next-3')) {
			if (move == -120) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('next-2')) {
			if (move == -80) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('next-1')) {
			if (move == -40) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('prev-1')) {
			if (move == 40) {
				$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
				$('.carousel > ul').css('margin-left', '-100%');
				$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
			}
		} else if ($(this).hasClass('prev-2')) {
			if (move == 80) {
				$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
				$('.carousel > ul').css('margin-left', '-100%');
				$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
				setTimeout(function () {
					$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
					$('.carousel > ul').css('margin-left', '-100%');
					$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
				}, 225);
			}

		} else if ($(this).hasClass('prev-3')) {
			if (move == 120) {
				$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
				$('.carousel > ul').css('margin-left', '-100%');
				$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
				setTimeout(function () {
					$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
					$('.carousel > ul').css('margin-left', '-100%');
					$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
				}, 225);
				setTimeout(function () {
					$('.carousel > ul').prepend($('.carousel > ul > li:last-child'));
					$('.carousel > ul').css('margin-left', '-100%');
					$('.carousel > ul').animate({ 'margin-left': '0' }, 200);
				}, 450);
			}
		} else {
			console.log($(this));
		}
	});

});


$(function () {
	let carUl = $('.carousel_side > ul');
	$('span').on('click', function () {
		if ($(this).hasClass('next-3')) {
			if (move == -120) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('next-2')) {
			if (move == -80) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('next-1')) {
			if (move == -40) {
				carUl.animate({ 'margin-left': '-100%' }, 200, function () {
					carUl.css('margin-left', '0');
					carUl.append($('.carousel_side > ul > li:first-child'));
				});
			}
		} else if ($(this).hasClass('prev-1')) {
			if (move == 40) {
				$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
				$('.carousel_side > ul').css('margin-left', '-100%');
				$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
			}
		} else if ($(this).hasClass('prev-2')) {
			if (move == 80) {
				$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
				$('.carousel_side > ul').css('margin-left', '-100%');
				$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
				setTimeout(function () {
					$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
					$('.carousel_side > ul').css('margin-left', '-100%');
					$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
				}, 225);
			}

		} else if ($(this).hasClass('prev-3')) {
			if (move == 120) {
				$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
				$('.carousel_side > ul').css('margin-left', '-100%');
				$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
				setTimeout(function () {
					$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
					$('.carousel_side > ul').css('margin-left', '-100%');
					$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
				}, 225);
				setTimeout(function () {
					$('.carousel_side > ul').prepend($('.carousel_side > ul > li:last-child'));
					$('.carousel_side > ul').css('margin-left', '-100%');
					$('.carousel_side > ul').animate({ 'margin-left': '0' }, 200);
				}, 450);
			}
		} else {
			console.log($(this));
		}
	});

});


