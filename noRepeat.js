
function permAlone(str) {
	//split all parameters and put them into array placeholder
	var placeHolder = str.split('');
	//count every time appropriate combination is available
	var count = 0;

	//swap items in array to go through all combinations
	function swap(a,b){
		var switcher = placeHolder[a];
		placeHolder[a] = placeHolder[b];
		placeHolder[b] = switcher;
	}
	//idea is based on Heap's algorithm to go trhough all possible combinations 
	function permute(z){
		var target = /([a-z])\1+/;

		if(z === 1 && !target.test(placeHolder.join(''))){
			count++;
		}
		else {
			for (var i = 0; i != z; i++) {
				permute(z-1);
				swap(z % 2 ? 0: i, z-1);
			}
		}
	}
	//recursive function
	permute(placeHolder.length);
  return count;
}

permAlone('aab');
