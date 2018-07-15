function House() {
	
	let height = 5;

	Object.defineProperty(this,'height',{
		get: function(){
			return height;
		},
		set: function(val){
			height = val;
		}
		});

}