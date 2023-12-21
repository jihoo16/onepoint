$(function(){
	let ham = $(".hamburger");
	let xbtn = $(".close");
	let	hambermenu = $("#hambermenu");

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
	let mark = $(".marketing");
	let design = $(".design");
	let bluebox = $("#blueborderbox_wrap");
	let hd_bluebox = $("#hd_blueborderbox_wrap");
	let mb_bluebox = $("#mb_blueborderbox_wrap");

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
});