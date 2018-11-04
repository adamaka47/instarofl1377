$(document).ready(function(){ 

	var userFeed = new Instafeed({
	        get: 'user',
	        userId: '8780719327',
	        accessToken: '8780719327.1677ed0.5722ad64c59e45e88a3626d90ec7ddc7',
	        resolution: 'standard_resolution',
	        limit: 60

	    });
	    userFeed.run();

	    setTimeout(function(){
	    	$('.instafeed').addClass('shadowed');
	    }, 1000);




});