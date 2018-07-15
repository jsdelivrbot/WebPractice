function Stopwatch() {

	let startTime, endTime, duration = 0;
	let running = false;


	this.start = function() {

		if(running) { throw new Error("already running");};

		running = true;

		startTime = new Date();
	}


	this.end = function() {

		if(!running) {throw new Error("not started");};

		running = false;

		endTime = new Date();

		duration = (endTime-startTime)/1000;
	}

	this.reset = function() {
		startTime = null;
		endTime=null;
		duration = 0;
		running=false;
	}

	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		}

	});

}  