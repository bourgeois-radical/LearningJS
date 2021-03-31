/*function numberOfCarries(a, b) {
	let copyOf_a, copyOf_b;
	let modulus10_a, modulus10_b;
	let divisor = 10;
	let counter = 0;
	const divisor10 = 10;
	let substractorOf_a, substractorOf_b, elseSubstractorOf_a, elseSubstractorOf_b;

	copyOf_a = a;
	copyOf_b = b;

	while ((a % divisor !== a) || (b % divisor !== b)) {

		modulus10_a = copyOf_a % divisor10;
		modulus10_b = copyOf_b % divisor10;
		debugger;
		//console.log("a =", a, "; ", "b =", b, "; ", copyOf_a = ", copyOf_a, " ",
		// copyOf_b = ", copyOf_b, "; ", "modulus10_a = ", modulus10_a, "; ", modulus10_b = ", modulus10_b, "; ", "devisor = ", divisor, "; ",
		//"a%divisor =", a % divisor, "; ", "b%divisor =", b % divisor);

		if (modulus10_a + modulus10_b > 9) {
			counter++;

			modulus100_a = 

			substractorOf_a = (a % divisor) / divisor;
			copyOf_a = copyOf_a / divisor - substractorOf_a;
			console.log("substractorOf_a=", substractorOf_a, " ", "copyOf_a = ", " ", copyOf_a);

			substractorOf_b = (b % divisor) / divisor;
			copyOf_b = copyOf_b / divisor - substractorOf_b;
			console.log("substractorOf_b=", substractorOf_b, " ", "copyOf_b = ", " ", copyOf_b);


		} else {
			elseSubstractorOf_a = (copyOf_a % divisor10) / divisor10;
			copyOf_a = copyOf_a / divisor10 - elseSubstractorOf_a;
			console.log("elseSubstractorOf_a=", elseSubstractorOf_a, " ", "copyOf_a = ", " ", copyOf_a);

			elseSubstractorOf_b = (copyOf_b % divisor10) / divisor10;
			copyOf_b = copyOf_b / divisor10 - elseSubstractorOf_b;
			console.log("elseSubstractorOf_b=", elseSubstractorOf_b, " ", "copyOf_b = ", " ", copyOf_b);
		}
	}

	console.log(counter);

	divisor *= 10;
	return counter;
}

numberOfCarries(9999, 1);
*/

/*

1. проверить %10
2. если сумма больше 9 то
3. counter ++ и одной из %100 добавить единицу
4. удалить %10

следующий %10 should be %100
etc.
*/


function numberOfCarriesDebugVersion(a, b) {

	let copyOf_a, copyOf_b;
	let modulus_a, modulus_b, modulus100_a, modulus100_b;
	let divisor = 10;
	let counter = 0;

	copyOf_a = a;
	copyOf_b = b;

	while ((a % divisor !== modulus_a) || (b % divisor !== modulus_b)) {

		modulus_a = copyOf_a % divisor;
		modulus_b = copyOf_b % divisor;

		if (modulus_a + modulus_b >= divisor) {
			counter++;
		}
		divisor *= 10;

	}
	return counter;
}

numberOfCarriesDebugVersion(9999, 1);

