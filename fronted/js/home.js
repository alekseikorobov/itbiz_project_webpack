
require('./../style/fonts.styl');
require('./../style/style.styl');

require('./../srv.php');

(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=OklPg7RFeu0jgGdPaz5jl*bHxHH0ZWR*XPXflgFakZKcjVFLlFkwE1eLX0uxJnPOam2pwZBR3eS2fiHzMoUIGthIbtn4wn91k7/xfBF3w6Y4sDMw/7wz7FTX9QYLaY0dpmD8or65mv6ih86hiMIAuJJRetFISTZ3CTs6hZ9HRlQ-';

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

	//$('.layer1').plaxmove({ratioH:0.05,ratioV:0.05})
    //$('.layer2').plaxmove({ratioH:0.1,ratioV:0.1})
    //$('.layer3').plaxmove({ratioH:0.15,ratioV:0.15})

	
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
	
	var offset = 400;
	$(".block4").waypoint(function(direction) {
		if (direction === "down" && !isblock4) {			
				rotate(".rot",6,"abs");
				isblock4 = true;
		};
	}, {offset: offset});

	$(".block_infoweb").waypoint(function(direction) {
		if (direction === "down") {			
				rotate(".rot_infoweb",8,"abs1");
		};
	}, {offset: offset});

	$(".block_infoprogramm").waypoint(function(direction) {
		if (direction === "down") {			
				rotate(".rot_inforogramm",8,"abs2");
		};
	}, {offset: offset});

	
	
	$(".portfolio").waypoint(function(direction) {
		if (direction === "down" && !isportfolio) {

			$(".portfolio").addClass("active_portfolio");
			isportfolio = true;
		};
	}, {offset: offset});

	$(".block_techno_1").waypoint(function(direction) {
		if (direction === "down") {
			if(!isClu_glob){
				if(!isClu)
					onClickBar();
				isClu_glob = true;
			}
		};
	}, {offset: offset});


	$('.block_contact').waypoint(function(direction) {
		if (direction === "down") {
				$(".form").addClass("active_form");				
		};
	}, {offset: offset});

	var name  = '',mail = '',message = '';
	$('#contactForm').submit(function(){
		
		if(name !== $('#name').val()
		   || mail !== $('#mail').val()
		   || message !== $('#message').val()){

			name = $('#name').val();
			mail = $('#mail').val();
			message = $('#message').val();

			window.yaCounter39219305.reachGoal('ok');

			
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
rotate = function(cl,maxid,classVizible){
	//return;
	var id = 1;
	count = maxid;
	timerId = setTimeout(function tick() {

		if(id<count){
			//console.log(cl+id);
			$(cl+id).css({'transform':'rotateY(180deg)'});
			
		}
		if(id>count){		  	
			clearInterval(timerId);
			setTimeout(
				function(){
					//console.log(classVizible);
				$("."+classVizible).addClass(classVizible+"_activ");},  //.abs
				1000);
			
			return;
		}
		id++;
		timerId = setTimeout(tick, 50);
	}, 50);
}