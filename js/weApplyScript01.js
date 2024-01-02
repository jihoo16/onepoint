$(function(){
	// 햄버거 메뉴의 동작
	let open = $(".open");
	let close = $(".close");
	let	closeOpen = $(".closeOpen");

	
	closeOpen.hide();
	open.click(function(){
		closeOpen.slideDown(1000);
		$("body").addClass('hidden');
		close.show();
		open.hide();
	});
	close.click(function(){
		open.show();
		closeOpen.hide();
		close.hide();
		$("body").removeClass('hidden');
	})
	AOS.init();
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	// alert(scrollBottom);
	$(window).scroll(function(){
        // 스크롤이 페이지 하단에 도달하면
		if ($(this).scrollTop() > 3513) {
			$('.upup').fadeIn();
		} else {
			$('.upup').fadeOut();
		}
	});

      // 맨 위로 스크롤 이동
	$('.upup').click(function(){
		$('html, body').animate({scrollTop : 0}, 0);
		return false;
	});
	let allj = $(".allj");
	let alljob = $(".alljob");
	let allp = $(".allp");
	let allposition = $(".allposition");
	let backend = $(".Backend");
	let marketer = $(".Marketer");
	let growth = $(".growth");
	let full = $(".full");
	let all = $(".all");
	let back = $(".back");
	let business = $(".business");
	let product =$(".product");
	let allapply = $(".allapply");
	let alla = $(".alla");
	let fulltime = $(".fulltime");
	let contrat = $(".contrat");
	let intern = $(".intern");

	backend.click(function(){
		growth.hide();
		full.show();
		alljob.text('Backend Developer');
	})
	marketer.click(function(){
		full.hide();
		growth.show();
		alljob.text('Marketer');
	})
	allj.click(function(){
		alljob.text('전체 직군');
		full.show();
		growth.show();
		
	})

	intern.click(function(){
		growth.hide();
		full.show();
		allapply.text('인턴');
	})
	fulltime.click(function(){
		full.hide();
		growth.show();
		allapply.text('정규직');
	})
	contrat.click(function(){
		allapply.text('계약직');
		full.show();
		growth.show();
	})
	alla.click(function(){
		allapply.text('전체 고용 형태');
		full.show();
		growth.show();
		
	})

	product.click(function(){
		growth.hide();
		full.show();
		allposition.text('프로덕트');
	})
	business.click(function(){
		full.hide();
		growth.show();
		allposition.text('Business');
	})
	allp.click(function(){
		allposition.text('전체 소속');
		full.show();
		growth.show();
		
	})
	all.click(function(){
		full.show();
		growth.show();
		back.removeClass('btn-dark');
		all.addClass('btn-dark');
	})
	back.click(function(){
		all.removeClass('btn-dark');
		all.add('btn-light');
		back.addClass('btn-dark');
	})
});