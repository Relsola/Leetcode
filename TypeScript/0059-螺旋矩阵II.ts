function generateMatrix(n: number): number[][] {
	const result: number[][] = Array.from({ length: n }, _ => new Array(n));
	let loopNum: number = n >> 1;
	let chunkNum: number = n - 1;
	let startX: number = 0;
	let startY: number = 0;
	let value: number = 1;
	let x: number, y: number;

	while (loopNum--) {
		x = startX;
		y = startY;
		while (x < startX + chunkNum) {
			result[y][x++] = value++;
		}
		while (y < startY + chunkNum) {
			result[y++][x] = value++;
		}
		while (x > startX) {
			result[y][x--] = value++;
		}
		while (y > startY) {
			result[y--][x] = value++;
		}
		startX++;
		startY++;
		chunkNum -= 2;
	}
	if (n & 1) result[startX][startY] = value;
	return result;
}
