let matrix = [
	[1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 0, 1]
]

let i_0 = [];
let j_0 = [];
let u, j, k;

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix.length; j++) {
		if (matrix[i][j] == 0) {
			i_0.push(i);
			j_0.push(j);
		}
	}
}

u = 0;
j = 0;
k = i_0[u];

while (k < i_0.length) {
	while (j < matrix.length) {
		matrix[k][j] = 0;
	}
	u++;
	k = i_0[u];
}

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix.length; j++) {
		console.log("новая матрица: ");
		console.log(matrix[i][j]);
	}
}