var wrap = $('#wrap');
//调整画布的位置和大小
changeScene();
function changeScene(){
	 ww = window.innerWidth;
	 wh = window.innerHeight;
	$('body').css({
		'width':ww+'px',
		'height':wh+'px'
	});
	if(ww > wh){//如果浏览器的宽度大于高度，说明是横屏的，画布的宽度 == 浏览器的宽度
		console.log('浏览器的宽度大于高度');
		(function(doc, win) {
		    var docEl = doc.documentElement,
		        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		        recalc = function() {
		            var clientWidth = docEl.clientWidth;
		            if (!clientWidth) return;
		            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		        };
		    if (!doc.addEventListener) return;
		    doc.addEventListener('DOMContentLoaded', recalc, false);
		})(document, window);

		wrap.css({
			'width':ww + 'px',
			'height':wh + 'px',
			'transform':'translate3d(-50%,-50%,0)',
			'-webkit-transform':'translate3d(-50%,-50%,0)'
		});
		$('#popBox,#time,#popBox2,#popBox3,#popBox4,#popBox5,#popBox6,#share_page').css({
			'transform':'translate3d(-50%,-50%,0)',
			'-webkit-transform':'translate3d(-50%,-50%,0)'
		});

	}else if(ww <= wh){	//如果浏览器的宽度小于高度，说明是竖的，画布的宽度 == 浏览器的高度
		console.log('浏览器的宽度小于高度');
		(function(doc, win) {
		    var docEl = doc.documentElement,
		        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		        recalc = function() {
		            var clientWidth = docEl.clientHeight;
		            if (!clientWidth) return;
		            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		        };
		    if (!doc.addEventListener) return;
		    doc.addEventListener('DOMContentLoaded', recalc, false);
		})(document, window);

		wrap.css({
			'width':wh + 'px',
			'height':ww + 'px',
			'transform':'translate3d(-50%,-50%,0) rotate(90deg)',
			'-webkit-transform':'translate3d(-50%,-50%,0) rotate(90deg)'
		});
		$('#popBox,#time,#popBox2,#popBox3,#popBox4,#popBox5,#popBox6,#share_page').css({
			'width':wh + 'px',
			'height':ww + 'px',
			'transform':'translate3d(-50%,-50%,0) rotate(90deg)',
			'-webkit-transform':'translate3d(-50%,-50%,0) rotate(90deg)'
		});
	}

}
window.onresize = function(){
	//调整画布的位置和大小
	changeScene();
}