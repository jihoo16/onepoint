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
});