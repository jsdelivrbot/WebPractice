function StopWatch() {
	
	let startTime, endTime, duration = 0;
	let running = false;

	this.start = function() {

		if(running) { throw Error("Already running");};

		running = true;

		startTime = new Date();
	};


	this.end = function() {

		if(!running) {throw Error("Not started");};

		endTime = new Date();
		running = false;
		duration = (endTime-startTime)/1000;
	};


	this.reset = function() {

		startTime = null;
		endTime = null;
		duration = 0;
		reset = false;

	};

	Object.defineProperty(this,'duration', {
		get: function(){
		return duration;
		}	

	});

}