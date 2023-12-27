$(function(){
	// 햄버거 메뉴의 동작
	let open = $(".open");
	let close = $(".close");
	let	closeOpen = $(".closeOpen");

	
	closeOpen.hide();
	open.click(function(){
		closeOpen.show();
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

});