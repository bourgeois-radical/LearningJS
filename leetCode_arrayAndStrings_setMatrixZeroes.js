/*Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?*/


let matrix = [
	[1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 0, 1]
]

let i_0 = [];
let j_0 = [];
let u, j, k;

const matrix_height = matrix.length;
const matrix_length = matrix[0].length;

for (let i = 0; i < matrix_height; i++) {
	for (let j = 0; j < matrix_length; j++) {
		if (matrix[i][j] == 0) {
			i_0.push(i);
			j_0.push(j);
		}
	}
}


u = 0;
j = 0;
k = i_0[u];

while (u < i_0.length) {
	while (j < matrix_length) {
		matrix[k][j] = 0;
		j++;
	}
	j = 0;
	u++;
	k = i_0[u];
}

u = 0;
j = 0;
k = j_0[u];

while (u < j_0.length) {
	while (j < matrix_height) {
		matrix[j][k] = 0;
		j++;
	}
	j = 0;
	u++;
	k = j_0[u];
}