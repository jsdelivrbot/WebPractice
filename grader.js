function avg(arr) {
	var av = 0;
	arr.forEach(num => {av = av+num});

	return Math.round(av/arr.length);
}


console.log(avg([5,8,9,3]));