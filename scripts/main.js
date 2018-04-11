let slide = 0;

setTimeout(function(){
	addEventListener('wheel', function(event) {
		if(event.deltaY > 0 && slide === 0){
			goToSecond();
		} else if(event.deltaY < 0 && slide === 1){
			goToFirst();
		}
	});
}, 0);

function goToSecond() {
	slide = 1;
	document.getElementsByClassName("sb-footer")[0].classList.add("x-fixed");
	document.getElementsByClassName("sb-section--2")[0].classList.add("x-active");
}

function goToFirst() {
	slide = 0;
	document.getElementsByClassName("sb-footer")[0].classList.remove("x-fixed");
	document.getElementsByClassName("sb-section--2")[0].classList.remove("x-active");
}
