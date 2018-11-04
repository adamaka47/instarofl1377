$(document).ready(function(){

	var audio = $('#audioTrack')[0];

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control');


	initAudio();

	function initAudio() {
		$playBtn.parent().show();
		$pauseBtn.parent().hide();
		audio.loop = true;
		$audioControl.click(function(){
		if (audio.paused) {
			audio.play();
			$playBtn.parent().hide();
			$pauseBtn.parent().show();

		} else {
			audio.pause();
			$pauseBtn.parent().hide();
			$playBtn.parent().show();
		}
		});
	}


});
