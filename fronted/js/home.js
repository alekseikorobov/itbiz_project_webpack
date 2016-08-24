
require('./../style/fonts.styl');
require('./../style/style.styl');

// <!-- Yandex.Metrika counter -->
// <script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter39219305 = new Ya.Metrika({
                    id:39219305,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
// </script>
// <noscript><div><img src="https://mc.yandex.ru/watch/39219305" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
// <!-- /Yandex.Metrika counter -->

var isClu = false;
var isClu_glob = false;
var isblock_contact = false;
$(document).ready(function(){
	
	$(".menu").sticky({ topSpacing: 0 });

	$("a").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: (destination-90) }, 500 );
		// if($window.width() < 768){
		// 	$('html,body').animate( { scrollTop: (destination) }, 500 );
		// }
		// else{
		// 	$('html,body').animate( { scrollTop: (destination-80) }, 500 );	
		// }
		return false;
	});

	mousemove_block('.block_setka','.mouse1');
	
	$window = $(window);

	//generate_bl($window.width());

	//плавное появление
	$('.logo').addClass('logo__vis');

	$('.block_video__info h1,.block_video__info h2').addClass('logo__vis');
	//$('.block_video__info h2').addClass('logo__vis');
	$('.arrow_down').addClass('logo__vis');

	
	$('.block_click').click(function(){
		console.log(0);
		onClickBar();
	});
	
	// $bgobj = $('.block1');
	// var h_hght = $('.block_video').height()-90; // высота шапки
	// var h_mrg = 0;    // отступ когда шапка уже не видна

	// var elem = $('.menu');
 //    var top = $(this).scrollTop();
 //    elem.css('top', (h_hght-top));
 //    if(top > h_hght){
 //        elem.css('top', h_mrg);
 //    } 

	//$(window).scroll(function(){
		// top = $(this).scrollTop();
         
  //       if (top+h_mrg < h_hght) {
  //           elem.css('top', (h_hght-top));
  //       } else {
  //           elem.css('top', h_mrg);
  //       }

		// var y  = $window.scrollTop();
		
		// var h = 
		// console.log(y,' ',h);
		// //$('.block_video').offset()
		// if(y > h){
		// 	//console.log(1);
		// 	$('.menu').css({'position':'fixed'});
		// }
		// else{	
		// 	//console.log(2);
		// 	$('.menu').css({'position': 'inherit'});
		// }

		// $(".block_inform").waypoint(function(direction) {
		// 	if (direction === "down") {
		// 		$(".block_inform").addClass("active");
		// 	//} else if (direction === "up") {
		// 	//	$(".block_inform").removeClass("active");
		// 	};
		// }, {offset: 300});
		var isblock4 = false;
		$(".block4").waypoint(function(direction) {
			if (direction === "down" && !isblock4) {
				//$(".block_inform").addClass("active");
				
					rotate();
					isblock4 = true;
			//} else if (direction === "up") {
			//	$(".block_inform").removeClass("active");
			};
		}, {offset: 300});
		var isportfolio = false;
		$(".portfolio").waypoint(function(direction) {
			if (direction === "down" && !isportfolio) {

				$(".portfolio").addClass("active_portfolio");
				isportfolio = true;
			//} else if (direction === "up") {
			//	$(".block_inform").removeClass("active");
			};
		}, {offset: 400});

		$(".block_techno_1").waypoint(function(direction) {
			if (direction === "down") {
				if(!isClu_glob){
					onClickBar();
					isClu_glob = true;
				}

			//} else if (direction === "up") {
			//	$(".block_inform").removeClass("active");
			};
		}, {offset: 400});


		$('.block_contact').waypoint(function(direction) {
			if (direction === "down") {
				if(!isblock_contact){
					$(".form").addClass("active_form");
					isblock_contact = true;
				}

			//} else if (direction === "up") {
			//	$(".block_inform").removeClass("active");
			};
		}, {offset: 300});

		// if($window.width() < 768){
		// 	if(y>50){
		// 		//$('.tel').css({'right':'-156px'});
		// 		if(!isAnim){
		// 			$('.tel').animate( { 'right':'-156px' }, 500 );
		// 			isAnim = true;
		// 		}
		// 	}
		// 	else{
		// 		if(isAnim){
		// 			$('.tel').animate( { 'right':'0px' }, 500 );
		// 			isAnim = false;
		// 		}
		// 	}
		// }
		// var yPos = -(y / 20);
		// var coords = '50% '+ yPos + 'px';
		// $bgobj.css({ backgroundPosition: coords });
	//});

 });
onClickBar = function(){
	console.log(3);
	if(!isClu){
		console.log(1);
		$('.block_techno').addClass('block_techno_im2');
		$('.block_techno').removeClass('block_techno_im1');
		isClu = true;
		$('.block_techno_1').addClass('techno_activ');
		$('.tit_techno').css({'color':'white'});
		//#2d2c2c
	}
	else{
		console.log(2);
		$('.block_techno').addClass('block_techno_im1');
		$('.block_techno').removeClass('block_techno_im2');
		isClu = false;
		$('.block_techno_1').removeClass('techno_activ');
		$('.tit_techno').css({'color':'#2d2c2c'});
	}
},
 mousemove_block = function(class_block,class_move){
 	//example - <div class="mouse1"></div><div class='.block_setka'></div>
 // 	$(class_block).css({
 // 		"width":"100%",
	// 	"height":"500px",
	// 	"z-index":"1000",
	// 	"position":"relative",
	// 	"padding":"34px",
	// 	"background":"url('image.png')"
 // 	});
 // 	$(class_move).css({
	//  	"width":"200px",
	// 	"height":"200px",
	// 	"background-color":"blue",
	// 	"border-radius":"50%",
	// 	"z-index":"1",
	// 	"position":"absolute",
	// 	"top":"-500px"
	// });

 	$(class_block).mousemove(function(ev){
 		var w = $(class_move).width();
 		var h = $(class_move).height();
 		$(class_move).offset({ top: ev.pageY-(h/2), left: ev.pageX-(w/2) });

 		//$(class_move).
 	});
};
// function adddiv(id){
// 		$('section.block4.container-fluid').append('<div class="position c"><div class="m rot'+id+'" style="transform: rotateY(0deg);">\
// 	<div class="front"></div><div class="back"></div></div></div>');
// }

// generate_bl = function(width){
// 	var line = Math.floor(width/100);
// 	var rows = 5;
// 	var count = line + (rows-1);

// 	var lost = 0;
// 	for (var y = 0; y < rows; y++) {
// 		var temp_x = (y+1);
// 		for (var x = 0; x < line; x++) {
// 			var id_local = temp_x + x;
// 			adddiv(id_local);
// 		}
// 	}
// }
// ,
rotate = function(){
	//return;
	var id = 1;
	count = 6;
	//setTimeout(function tick1() { },2000);


	timerId = setTimeout(function tick() {

		if(id<count){
			$('.rot'+id).css({'transform':'rotateY(180deg)'});
			
		}
		if(id>count){		  	
			clearInterval(timerId);
			setTimeout(
				function(){$(".abs").addClass("abs_activ");}, 
				1000);
			
			return;
		}
		// if(id==count){
		// 	$(".abs").addClass("abs_activ");
		// }
		id++;
		timerId = setTimeout(tick, 50);
	}, 50);
}