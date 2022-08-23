$(function(){ 


//호버시 멈추게 하는 기능

	$('#wrap').on({
		mouseover:function(){
			clearInterval(setIntervalId);  //setInterval () 메서드로 설정된 타이머를 해제.
		}, mouseout:function(){
			timer();
		}
	});


    var visual=$('.brandVisual>ul>li'); // 슬라이드 이미지
	var button=$('.buttonList>li');	 // 버튼
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0 // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함
	var p=$('.buttonList>li');

	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current); //슬라이드 이미지 현재순번
			var pn=p.eq(current);
			move(prev, 0, '-100%'); //이전으로 이동
			pn.removeClass('on');
		
			current++;
			
			if(current == visual.size()) current=0;
			
			var next=visual.eq(current);
			var pnn=p.eq(current);
			move(next, '100%',0); //다음으로 이동
			pnn.addClass('on');
		}, 3000);
	};
	
	function move(tg, start, end){
		tg.css('left', start).stop().animate({left:end},{duration:1000, ease:'easeOutCubic'}); //easeOut은 빠른 시작으로 애니메이션에 반응 효과를 주면서도 마지막에 자연스러운 감속 효과를 나타냄.
	}  
	
	
	
	
	rightBtn.click(function(){
			var prev=visual.eq(current);
			var pn=p.eq(current);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current++;

        	if(current == visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=p.eq(current);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	leftBtn.click(function(){
			var prev=visual.eq(current);
			var pn=p.eq(current);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current--;
			

        	if(current == -visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=p.eq(current);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	
		
	


	
	});
	
	
	
	
	
	
