$(function(){

	$('img').load(sizing);
	$(window).resize(sizing);

	//gnb
	$('.btn_gnb').click(function(){
		$('.gnb').show(0,function(){
			$('.gnb .inner, .gnb .depth01 .util dl').delay(100).animate({right:'0'},400);
		});
	});
	$('.gnb .inner').swiperight(gnb_close);
	$('.gnb .home a').click(gnb_close);
	$('.gnb .depth01 > dd > a[class!="nobg"],.gnb .depth01 .collec .depth02 > dd > a').click(function(){
		if($(this).next().is(':hidden')){
			$(this).parent().siblings('dd[class!="util"]').children('dl').slideUp();
			$(this).parent().siblings('dd').children('a[class!="nobg"]').css({
				background:'url(../img/bg_plus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
			$(this).next('dl').slideDown();
			$(this).css({
				background:'url(../img/bg_minus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
		}else{
			$(this).next('dl').slideUp();
			$(this).css({
				background:'url(../img/bg_plus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
		}
	});

	//contact us, news letter
	$('.depth01 .util a').click(function(){
		var id = $(this).attr('id');
		$('.util_popup,.util_popup > .'+id).show();
	});
	$('.util_popup > .close').click(function(){
		$('.util_popup,.util_popup > div').hide();
	});

	//슬라이드메뉴
	$('.horizon .on img').each(function(){
		$(this).attr('src',$(this).attr('src').replace('.gif','_on.gif'));
	});

	$('li[class^="sl_btn"] > a').click(function(){
		$(this).children().each(function(){
			if(!$(this).attr('src').match('_on.gif')){
				$(this).attr('src',$(this).attr('src').replace('.gif','_on.gif'));
			}
		});
		$(this).parent().siblings().children('a').children('img').each(function(){
			if($(this).attr('src').match('_on.gif')){
				$(this).attr('src',$(this).attr('src').replace('_on.gif','.gif'));
			}
		});
		$(this).parent().addClass('on').siblings().removeClass('on').children('ul').hide();
		if($(this).next().is(':hidden')){
			$(this).next().slideDown();
		}else{
			$(this).next().slideUp();
		}
	});
	$('li[class^="sl_btn"] .depth02 a.plus').click(function(){
		if($(this).next().is(':hidden')){
			$(this).next().slideDown();
			$(this).parent().siblings().children('ul').slideUp();
			$(this).parent().siblings().children('a.plus').css({
				background:'url(../img/bg_plus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
			$(this).css({
				background:'url(../img/bg_minus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
		}else{
			$(this).next().slideUp();
			$(this).css({
				background:'url(../img/bg_plus.png) no-repeat right center',
				backgroundSize:'28px 13px'
			});
		}
	});


});

function sizing(){
	var b_width = $(window).width(),
		b_height = $(window).height(),
		wrap_height = $('.wrap').height(),
		sl_item_h = $('.sl_ul').children().children().height();

	$('.main .container,.sl_ul').css('height',sl_item_h);
	$('.gnb').css('height',b_height);

	//goods_popup
	$('.goods_popup .inner img,.h_popup').each(function(){
		var height = $(this).height();
		$(this).css('margin-top',-(height/2));
	});

	//slide_munu
	$('li[class^="sl_btn"] .depth02').css('height',wrap_height-55);

}

function gnb_close(){
	$('.gnb .inner,.gnb .depth01 .util dl').animate({right:'-85%'},function(){			
		$('.gnb').hide(0);
	});
}


//스크롤시up버튼효과 
    $(".return-top").hide(); // 탑 버튼 숨김
    $(function () {
                 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
                $('.return-top').fadeIn();
            } else {
                $('.return-top').fadeOut();
            }
        });
                
        $('.return-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);  // 탑 이동 스크롤 속도
            return false;
        });
    });
 
 ////////////////////////////메인페이지////////////////////////

 //포트폴리오탭메뉴
 						function serviceInfo_fold(arg, tot)
						{
							for(var i=1;i<=tot;i++){
								document.getElementById("ko" + i).style.display = "none";
								document.getElementById("ko_tab" + i).className = "";
							}
							document.getElementById("ko" + arg).style.display = "block";
							document.getElementById("ko_tab" + arg).className = "on";
						}