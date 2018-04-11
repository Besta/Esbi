var slide = 0;

setTimeout(function(){
	addEventListener('wheel', function(event) {
		if(event.deltaY > 0 && slide === 0){
			slide++;
			document.getElementsByClassName("sb-footer")[0].classList.add("x-fixed");
			document.getElementsByClassName("sb-section--2")[0].classList.add("x-active");
		} else if(event.deltaY < 0 && slide === 1){
			slide--;
			document.getElementsByClassName("sb-footer")[0].classList.remove("x-fixed");
			document.getElementsByClassName("sb-section--2")[0].classList.remove("x-active");
		}
	});
}, 6500)
