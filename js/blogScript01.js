$(function(){
	// 햄버거 메뉴의 동작
	let open = $(".open");
	let close = $(".close");
	let	closeOpen = $(".closeOpen");
	let opacitybox = $(".opacitybox");

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

      // Show the button when scrolling down 500px
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#scrollButton').fadeIn();
		} else {
			$('#scrollButton').fadeOut();
		}
	});

      // Scroll to the top when the button is clicked
	$('#scrollButton').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});

});