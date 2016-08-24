
require('./../style/fonts.styl');
require('./../style/style.styl');

require('./../srv.php');



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
var isblock4 = false;
var isportfolio = false;

$(document).ready(function(){
	
	$("a").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: (destination-90) }, 500 );
		return false;
	});
	
	$window = $(window);

	issizemin = $window.width() < 768;

	if(issizemin){
		$(".menu").unstick();
	}
	else{
		$(".menu").sticky({ topSpacing: 0 });
	}
	$window.resize(function() {
		if($(window).width() < 768){
			if(!issizemin){
				$(".menu").unstick();
				issizemin =true;
			}
		}
		else{
			if(issizemin){
				$(".menu").sticky({ topSpacing: 0 });
				issizemin = false;
			}
		}
	});

	//плавное появление
	$('.logo').addClass('logo__vis');

	$('.block_video__info h1,.block_video__info h2').addClass('logo__vis');
	$('.arrow_down').addClass('logo__vis');

	
	$('.block_click').click(function(){
		console.log(0);
		onClickBar();
	});
	
	$(".block4").waypoint(function(direction) {
		if (direction === "down" && !isblock4) {			
				rotate();
				isblock4 = true;
		};
	}, {offset: 300});
	
	$(".portfolio").waypoint(function(direction) {
		if (direction === "down" && !isportfolio) {

			$(".portfolio").addClass("active_portfolio");
			isportfolio = true;
		};
	}, {offset: 400});

	$(".block_techno_1").waypoint(function(direction) {
		if (direction === "down") {
			if(!isClu_glob){
				if(!isClu)
					onClickBar();
				isClu_glob = true;
			}
		};
	}, {offset: 400});


	$('.block_contact').waypoint(function(direction) {
		if (direction === "down") {
			if(!isblock_contact){
				$(".form").addClass("active_form");
				isblock_contact = true;
			}
		};
	}, {offset: 700});

	var name  = '',mail = '',message = '';
	$('#contactForm').submit(function(){
		
		if(name !== $('#name').val()
		   || mail !== $('#mail').val()
		   || message !== $('#message').val()){

			name = $('#name').val();
			mail = $('#mail').val();
			message = $('#message').val();

			
			$.ajax({
				url: "srv.php",
				type: 'POST',
				data: "name="+name
					  +"&mail="+mail
					  +"&message="+message
				,
				success: function (data, textStatus, jqXHR) {
					console.log(data); 
					$('#successMessage').removeClass('hidden');
				}
			});
		}
		return false;
    });

 });
onClickBar = function(){
	
	if(!isClu){
		$('.block_techno').addClass('block_techno_im2');
		$('.block_techno').removeClass('block_techno_im1');
		isClu = true;
		$('.block_techno_1').addClass('techno_activ');
		$('.tit_techno').css({'color':'white'});
	}
	else{
		$('.block_techno').addClass('block_techno_im1');
		$('.block_techno').removeClass('block_techno_im2');
		isClu = false;
		$('.block_techno_1').removeClass('techno_activ');
		$('.tit_techno').css({'color':'#2d2c2c'});
	}
},
rotate = function(){
	//return;
	var id = 1;
	count = 6;
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
		id++;
		timerId = setTimeout(tick, 50);
	}, 50);
}