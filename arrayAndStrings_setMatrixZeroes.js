/*let fruits = ["Яблочки", "Груши", "Жаботикаба", "Сметанное яблоко"];

for (i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
*/

// Given an m x n matrix. If an element is 0, set its entire row and column to 0

let matrix = [
	[1, 1, 1, 1],
	[1, 0, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1]
];

let rowsWhichSchouldContain0 = [];
let columnsWhichSchouldContain0 = [];

//let newMatrix = [];

let rw, clmn;

//console.log(matrix[1][1]);
//console.log(matrix.length)

//here we are trying to find zeros in the given array
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix.length; j++) {
		//console.log(matrix[i][j]);
		if (matrix[i][j] == 0) {
			rw = i;
			clmn = j;
			rowsWhichSchouldContain0.push(rw);
			columnsWhichSchouldContain0.push(clmn);
		}
	}
	//console.log(matrixWithZeros.length);
}

//replacement 

for (let q = 0; q < matrix.length; q++) {
	for (let h = 0; h < matrix.length; h++) {
		if (h == columnsWhichSchouldContain0[h]) {
			matrix[q][h] = 0;
		}
	}
}

//output mewMatrix; 
for (let k = 0; k < matrix.length; k++) {
	for (let u = 0; u < matrix.length; u++) {
		console.log(matrix[k][u]);
	}
	console.log(" ");
}
