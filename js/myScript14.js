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

	//햄버거 메뉴 스크립트
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

	// 섹션 1의 마케팅 버튼들과 디자인 버튼들 메뉴 호출
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

	//네번째 섹션에 동영상 스크립트
	forthimg.click(function(){
		var videoUrl = $(this).data('video');
		video = $('.videocon');
		

		video.find('source').attr('src', videoUrl);

    // 동영상 재생
		video[0].load();
		video[0].play();
		


    // 이미지 숨기고 동영상 보이기
		hidebox.show();
		video.show();

	})
	


	//다섯 번째 섹션에 숫자 카운트 되는 스크립트
	function animateValue(obj, start, end, duration,delay) {
		
		if (delay) {
			startTimestamp = performance.now() + delay;
		}
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			 progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.textContent  = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	//다섯 번째 섹션에 숫자 카운트 되는 스크립트2 2번 메뉴 클릭시 오류가 생겨서 수정하여 따로 사용
	function animateValue2(obj, start, end, duration,delay) {
		
		if (delay) {
			startTimestamp = performance.now() + delay;
		}
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			 progress = Math.min((timestamp - startTimestamp+1000) / duration, 1);
			obj.textContent  = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	obj = document.getElementById("number");
	obj4 = document.getElementById("number");
	obj2 = document.getElementById("number2");
	obj5 = document.getElementById("number2");
	obj3 = document.getElementById("number3");
	obj6 = document.getElementById("number3");
	animateValue(obj, 0, 98, 1000);
	animateValue(obj2, 0, 87, 1000);
	animateValue(obj3, 0, 75, 1000);
	let time1, time2, time3;


	five.hide();
	thirdinwrap.hide();

	//다섯번째 섹션 애니메이션 스크립트
	function animateddd() {
		
		thirdinwrap1.stop().show(0).delay(4990).hide(0);
		five1.stop().show(0).delay(4990).hide(0);
		thirdinwrap2.stop().delay(5000).show(0).delay(4990).hide(0);
		five2.stop().delay(5000).show(0).delay(4990).hide(0);
		thirdinwrap3.stop().delay(10000).show(0).delay(5000).hide(0);
		five3.stop().delay(10000).show(0).delay(5000).hide(0);


		animateValue(obj, 0, 98, 1000,5000);
		animateValue(obj2, 0, 87, 1000,5000);
		animateValue(obj3, 0, 75, 1000,5000);
		

		
	}
	
	animateddd();
	//다섯번째 섹션 setInterval 사용한 애니메이션 스크립트 지정 시간마다 반복되도록
	function startAnimation() {

		timeInterval = setInterval(function () {
			five.hide().stop();
			five.hide();
			thirdinwrap.hide().stop();
			thirdinwrap.hide();
			thirdinwrap1.stop().show(0).delay(4990).hide(0);
			five1.stop().show(0).delay(4990).hide(0);
			thirdinwrap2.stop().delay(5000).show(0).delay(4990).hide(0);
			five2.stop().delay(5000).show(0).delay(4990).hide(0);
			animateValue(obj, 0, 98, 1000,5000);
			animateValue(obj2, 0, 87, 1000,5000);
			animateValue(obj3, 0, 75, 1000,5000);
			thirdinwrap3.stop().delay(10000).show(0).delay(4999).hide(0);
			five3.stop().delay(10000).show(0).delay(4999).hide(0);
		}, 15000);
	}

	startAnimation();

	
	//다섯번째 섹션 버튼 클릭시 보여지고 애니메이션 실행되는 스크립트
	pone.click(function () {
		clearInterval(timeInterval);
		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();

		thirdinwrap1.stop().delay(0).show(0).delay(4900).hide(0);
		five1.stop().delay(0).show(0).delay(4900).hide(0);
		five2.stop().delay(5000).show(0).delay(4990).hide(0);
		animateValue(obj, 0, 98, 1000,5000);
		animateValue(obj2, 0, 87, 1000,5000);
		animateValue(obj3, 0, 75, 1000,5000);
		thirdinwrap2.stop().delay(5000).show(0).delay(4990).hide(0);
		thirdinwrap3.stop().delay(10000).show(0).delay(5000).hide(0);
		five3.stop().delay(10000).show(0).delay(5000).hide(0);
		startAnimation();
	});

	ptwo.click(function () {
		clearInterval(timeInterval);
		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();
		
		animateValue2(obj4, 0, 98, 1000,1000);
		animateValue2(obj5, 0, 87, 1000,1000);
		animateValue2(obj6, 0, 75, 1000,1000);
		thirdinwrap2.stop().delay(0).show(0).delay(6990).hide(0);
		five2.stop().delay(0).show(0).delay(6990).hide(0);
		five3.stop().delay(7000).show(0).delay(8000).hide(0);

		thirdinwrap3.stop().delay(7000).show(0).delay(8000).hide(0);
		startAnimation();
	});

	pthird.click(function () {
		clearInterval(timeInterval);

		five.hide().stop();
		five.hide();
		thirdinwrap.hide().stop();
		thirdinwrap.hide();

		thirdinwrap3.stop().delay(0).show(0).delay(4990).hide(0);
		five3.stop().delay(0).show(0).delay(4990).hide(0);
		five1.stop().delay(5000).show(0).delay(4990).hide(0);
		animateValue(obj, 0, 98, 1000,10000);
		animateValue(obj2, 0, 87, 1000,10000);
		animateValue(obj3, 0, 75, 1000,10000);
		thirdinwrap1.stop().delay(5000).show(0).delay(4990).hide(0);
		thirdinwrap2.stop().delay(10000).show(0).delay(4990).hide(0);
		five2.stop().delay(10000).show(0).delay(4990).hide(0);


		startAnimation();

	});

	//fadeIn 되는 플러그인 스크립트
	AOS.init();
	
	
	//FAQ 질문 나타나고 사라지는 스크립트
	let palqnawrap = $(".palqnawrap");
	let palQ = $(".palqnawrap .palQ");

	let palqna = $(".palqna ");
	let palQimgboximg = $(".palQimgbox img");
	let palcopen = $("img.unrotate");
	let palclose = $("img.rotate");
	for (let i = 1; i <= 11; i += 2) {
		if (i % 2 !== 0) {
			palqnawrap.eq(i).hide();
		}
	}
	for (let i = 0; i < palqnawrap.length; i++) {
		let currentIndex = i * 2;
		let palQ = palqnawrap.eq(i).find('.palQ');

		palQ.click(function () {
			palqnawrap.eq(i+1).slideToggle();
			palQimgboximg.eq(i + 1).toggle();
			palQimgboximg.eq(i).toggle();
		});

		palclose.eq(i).click(function () {
			palqnawrap.eq(currentIndex + 1).slideUp();
			palQimgboximg.eq(currentIndex).hide();
			palQimgboximg.eq(currentIndex + 1).show();
		});
		palcopen.eq(i).click(function(){
			palqnawrap.eq(currentIndex + 1).slideDown();
			palQimgboximg.eq(currentIndex).show();
			palQimgboximg.eq(currentIndex + 1).hide();
		})
	}

	//12/28일 추가된 내용 헤더의 네브바가 스크롤 위로 올릴시 나타나고 내림면 사라지는 스크립트
	var header = $('#headerdiv');
	var isFixed = false;

      // Change position based on wheel direction
	$(window).on("wheel", function (event) {
		if (event.originalEvent.deltaY > 0 && !isFixed) {
			header.css('position', 'relative');
			isFixed = true;
		} else if (event.originalEvent.deltaY < 0 && isFixed) {
			header.css('position', 'fixed');
			isFixed = false;
		}
	});

	//12/31일 추가된 내용 소개 영상 버튼 스크립트
	let vp = $("#video-player");
	vp.hide();
	$(".videobtn").click(function(){
		vp.toggle();
		var videoUrl = $(this).data('video');
		vp.find('source').attr('src', videoUrl);
		vp[0].load();
		vp[0].play();
		hidebox.toggle();
		
	})
	hidebox.click(function(event) {
		vp.hide();
		hidebox.hide();
		video[0].pause();
		vp[0].pause();
		video.hide();
		
	});
		$(window).scroll(function(){
        // 스크롤이 페이지 하단에 도달하면
		if ($(this).scrollTop() > 2000) {
			$(".videobtn").fadeOut();
		} else {
			$(".videobtn").fadeIn();
		}
	});


});