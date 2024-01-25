$(function(){
	// 햄버거 메뉴의 동작
	let open = $(".open");
	let close = $(".close");
	let	closeOpen = $(".closeOpen");
	let opacitybox = $(".opacitybox");

	let insights = $(".insights");
	let news = $(".news");
	let bestpractices = $(".bestpractices");
	let bestpracticesbtn = $(".bestpracticesbtn");
	let insightsbtn = $(".insightsbtn");
	let newsbtn = $(".newsbtn");
	let homebtn = $(".homebtn");

	opacitybox.hide();
	closeOpen.hide();
	open.click(function(){
		closeOpen.show();
		$("body").addClass('hidden');
		opacitybox.show();
		close.show();
		open.hide();
	});
	close.click(function(){
		open.show();
		closeOpen.hide();
		close.hide();
		opacitybox.hide();
		$("body").removeClass('hidden');
	})
	$('#scrollButton').hide();

     
    /* 스크롤 버튼 스크립트*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#scrollButton').fadeIn();
		} else {
			$('#scrollButton').fadeOut();
		}
	});

    
	$('#scrollButton').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});

	 /* 카드들 호버시 마우스 위치에 따라 흔들리는 스크립트*/
	var blogCards = document.querySelectorAll('.blogCard');

	blogCards.forEach(function(blogCard) {
		blogCard.addEventListener('mousemove', function(e) {
			var x = e.offsetX;
			var y = e.offsetY;
			console.log(x, y);
			var rotateY = (1 / -9 * x + 20)/2;
			var rotateX = (1 / -9 * y + 20)/2;
			blogCard.style.transform = `perspective(750px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		});

		blogCard.addEventListener('mouseout', function() {
			blogCard.style.transform = 'perspective(750px) rotateY(0deg) rotateX(0deg)';
		});
	});

	 /* 네비게이션 버튼 클릭시 해당 카드만 보이는 스크립트*/
	bestpracticesbtn.click(function(){
		insights.hide();
		news.hide();
		bestpractices.show();
		bestpracticesbtn.addClass('colorg');
		insightsbtn.removeClass('colorg');
		newsbtn.removeClass('colorg');
		homebtn.removeClass('colorg');

	})
	insightsbtn.click(function(){
		bestpractices.hide();
		news.hide();
		insights.show();
		insightsbtn.addClass('colorg');
		bestpracticesbtn.removeClass('colorg');
		newsbtn.removeClass('colorg');
		homebtn.removeClass('colorg');
	})
	newsbtn.click(function(){
		bestpractices.hide();
		insights.hide();
		news.show();
		newsbtn.addClass('colorg');
		bestpracticesbtn.removeClass('colorg');
		insightsbtn.removeClass('colorg');
		homebtn.removeClass('colorg');
	})

	 /* fade in plugin*/
	AOS.init();

});