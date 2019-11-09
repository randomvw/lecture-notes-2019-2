let a = 7;

function foo () {
	b = 8;

	function bar () {
		console.log(a + b);
	}

	bar();
}

foo();
console.log(b);