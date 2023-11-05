/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
	let five = 0,
		ten = 0;
	for (const bill of bills) {
		switch (bill) {
			case 5:
				five++;
				break;
			case 10:
				if (five < 1) {
					return false;
				}
				five--;
				ten++;
				break;
			case 20:
				if (ten > 0 && five > 0) {
					five--;
					ten--;
				} else if (five >= 3) {
					five -= 3;
				} else {
					return false;
				}
				break;
			default:
				break;
		}
	}
	return true;
}
