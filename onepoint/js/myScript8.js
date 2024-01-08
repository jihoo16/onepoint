$(function(){
	// 햄버거 메뉴의 동작
	let ham = $(".hamburger");
	let xbtn = $(".close");
	let	hambermenu = $("#hambermenu");
	let mark = $(".marketing");
	let design = $(".design");
	let bluebox = $("#blueborderbox_wrap");
	let hd_bluebox = $("#hd_blueborderbox_wrap");
	let mb_bluebox = $("#mb_blueborderbox_wrap");
	let spl = $(".spbtn1");
	let spr = $(".spbtn2");
	let ani3 = $("#hardani3 .card");
	let ani4 = $("#hardani4 .card");
	let bar1 = $(".bar2 ");
	let bar2 = $(".bar3 ");
	let bar3 = $(".bar4 ");
	let bar4 = $(".bar5 ");
	let bar5 = $(".bar6 ");
	let current = 0;
	let current1 = 0;
	var videoContainer = $('.video-container');
	let forthimg = $(".videoimg");
	let forthvideo = $(".videocon");
	let hidebox = $('#hidebox');
	let timeInterval;
	let five =$(".five");
	let five1 =$(".five1");
	let five2 =$(".five2");
	let five3 =$(".five3");
	let thirdinwrap = $(".thirdinwrap");
	let thirdinwrap1 = $(".thirdinwrapone");
	let thirdinwrap2= $(".thirdinwraptwo");
	let thirdinwrap3 = $(".thirdinwrapthree");
	let pone = $(".pone");
	let ptwo = $(".ptwo");
	let pthird = $(".pthird");
	let startTimestamp = null;

	xbtn.hide();
	ham.click(function(){
		hambermenu.show();
		$("body").addClass('hidden');
		xbtn.show();
		ham.hide();
	});
	xbtn.click(function(){
		ham.show();
		hambermenu.hide();
		xbtn.hide();
		$("body").removeClass('hidden');
	})

	// 섹션 1의 마케팅 디자인 메뉴 호출


	mark.click(function(event) {
		design.removeClass('white');
		mark.addClass('white');
		hd_bluebox.hide();
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			mb_bluebox.show();
		} else {
			bluebox.show();
		}
	});
	design.click(function(event) {
		mark.removeClass('white');
		design.addClass('white');
		bluebox.hide();
		mb_bluebox.hide();
		hd_bluebox.show();
	});
	// 섹션 1의 마케팅 디자인 모바일 화면 더보기
	let more = $("#topPro #mb_blueborderbox_wrap p");
	let hidemenu = $("#topPro #mb_blueborderbox_wrap div.hide");

	more.click(function(event) {
		hidemenu.show();
		more.hide();
	});



	
	spl.click(function(event){
		// alert("test");
		if(current!=0){
			current--;
		}
		
		if(current==0){
			ani3.css("left",0).stop().animate({"left":"20%"},200);
			ani4.css("left",0).stop().animate({"left":"20%"},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.show();
			bar5.hide();
			current=1;
		}

		else if(current==1){
			ani3.css("left",0).stop().animate({"left":"40%"},200);
			ani4.css("left",0).stop().animate({"left":"40%"},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.hide();
			bar5.show();
			current=2;
		}
		else if(current==2){
			ani3.css("left",0).stop().animate({"left":"60%"},200);
			ani4.css("left",0).stop().animate({"left":"60%"},200);
			bar2.show();
			bar3.hide();
			bar4.hide();
			bar1.hide();
			bar5.hide();
			current=3;
		}
		else if(current==3){
			ani3.css("left",0).stop().animate({"left":"80%"},200);
			ani4.css("left",0).stop().animate({"left":"80%"},200);
			bar2.hide();
			bar3.show();
			bar4.hide();
			bar1.hide();
			bar5.hide();
			current=4;
		}
		else if(current==4){
			ani3.css("left",0).stop().animate({"left":"100%"},200);
			ani4.css("left",0).stop().animate({"left":"100%"},200);
			bar2.hide();
			bar3.hide();
			bar4.show();
			bar1.hide();
			bar5.hide();
			current=5;
		}
		else if(current==5){
			ani3.css("left",0).stop().animate({"left":0},200);
			ani4.css("left",0).stop().animate({"left":0},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.show();
			bar5.hide();
			current=0;
		}
	});

	spr.click(function(){
		// alert("test");
		// if(current<6&&current>=0){
		// 	current++;
		// 	ani3.delay(1000);
		// }
		if(current==0){
			ani3.css("left",0).stop().animate({"left":"-20%"},200);
			ani4.css("left",0).stop().animate({"left":"-20%"},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.show();
			bar5.hide();
			current=1;
		}

		else if(current==1){
			ani3.css("left","-20%").stop().animate({"left":"-40%"},200);
			ani4.css("left","-20%").stop().animate({"left":"-40%"},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.hide();
			bar5.show();
			current=2;
		}
		else if(current==2){
			ani3.css("left","-40%").stop().animate({"left":"-60%"},200);
			ani4.css("left","-40%").stop().animate({"left":"-60%"},200);
			bar2.show();
			bar3.hide();
			bar4.hide();
			bar1.hide();
			bar5.hide();
			current=3;
		}
		else if(current==3){
			ani3.css("left","-60%").stop().animate({"left":"-80%"},200);
			ani4.css("left","-60%").stop().animate({"left":"-80%"},200);
			bar2.hide();
			bar3.show();
			bar4.hide();
			bar1.hide();
			bar5.hide();
			current=4;
		}
		else if(current==4){
			ani3.css("left","-80%").stop().animate({"left":"-100%"},200);
			ani4.css("left","-80%").stop().animate({"left":"-100%"},200);
			bar2.hide();
			bar3.hide();
			bar4.show();
			bar1.hide();
			bar5.hide();
			current=5;
		}
		else if(current==5){
			ani3.css("left",0).stop().animate({"left":"0%"},200);
			ani4.css("left",0).stop().animate({"left":"0%"},200);
			bar2.hide();
			bar3.hide();
			bar4.hide();
			bar1.show();
			bar5.hide();
			current=0;
		}
	});
	// setInterval(function(){
	// 	current=0;
	// 	if(current==5) current=0;
	// },1000)

	forthimg.click(function(){
		var videoUrl = $(this).data('video');
		video = $('.videocon');
		

		video.find('source').attr('src', videoUrl);

    // 동영상 재생
		video[0].load();
		video[0].play();
		$


    // 이미지 숨기고 동영상 보이기
		hidebox.show();
		video.show();

	})
	
	hidebox.click(function(event) {
		video[0].pause();
		video.hide();
		hidebox.hide();
		
	});

	function animateValue(obj, start, end, duration,delay) {
		
		if (delay) {
			startTimestamp = performance.now() + delay;
		}
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.textContent  = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	obj = document.getElementById("number");
	obj2 = document.getElementById("number2");
	obj3 = document.getElementById("number3");
	animateValue(obj, 0, 98, 1000);
	animateValue(obj2, 0, 87, 1000);
	animateValue(obj3, 0, 75, 1000);


	let time1, time2, time3;


	five.hide();
	thirdinwrap.hide();
	
	function animateddd() {
		thirdinwrap1.fadeIn(0).delay(3000).fadeOut(0);
		five1.fadeIn(0).delay(3000).fadeOut(0);
		thirdinwrap2.delay(3000).fadeIn(0).delay(3000).fadeOut(0);
		five2.delay(3000).fadeIn(0).delay(3000).fadeOut(0);
		thirdinwrap3.delay(6000).fadeIn(0).delay(3000).fadeOut(0);
		five3.delay(6000).fadeIn(0).delay(3000).fadeOut(0);
		animateValue(obj, 0, 98, 1000,3000);
		animateValue(obj2, 0, 87, 1000,3000);
		animateValue(obj3, 0, 75, 1000,3000);
	}
	
	animateddd();
	let coo = 0;
	function startAnimation() {

		timeInterval = setInterval(function () {
			five.hide().stop();
			five.hide();
			thirdinwrap.hide().stop();
			thirdinwrap.hide();
			thirdinwrap1.fadeIn(0).delay(3000).fadeOut(0);
			five1.fadeIn(0).delay(3000).fadeOut(0);
			thirdinwrap2.delay(3000).show(0).delay(3000).hide(0);
			five2.delay(3000).show(0).delay(3000).hide(0);
			animateValue(obj, 0, 98, 1000,3000);
			animateValue(obj2, 0, 87, 1000,3000);
			animateValue(obj3, 0, 75, 1000,3000);
			thirdinwrap3.delay(6000).show(0).delay(3000).hide(0);
			five3.delay(6000).show(0).delay(3000).hide(0);
		}, 9000);
	}

	startAnimation();

	

	pone.click(function () {
		clearInterval(timeInterval);
		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();

		thirdinwrap1.delay(0).fadeIn(0);
		five1.delay(0).fadeIn(0);
		startAnimation();
	});

	ptwo.click(function () {
		clearInterval(timeInterval);
		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();
		animateValue(obj, 0, 98, 1000,0);
		animateValue(obj2, 0, 87, 1000,0);
		animateValue(obj3, 0, 75, 1000,0);
		thirdinwrap2.stop().show();
		
		five2.stop().show();
		
		startAnimation();
	});

	pthird.click(function () {
		clearInterval(timeInterval);

		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();

		thirdinwrap3.stop().show();
		five3.stop().show();
		


		startAnimation();

	});

});