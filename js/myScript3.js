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
	var videoContainer = $('.video-container');
	let forthimg = $(".interview-movie-thumb");
	let forthvideo = $(".videocon");
let hidebox = $('#hidebox');

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
	
});