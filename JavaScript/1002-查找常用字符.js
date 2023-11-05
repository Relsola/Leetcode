/*
 * _______________#########_______________________
 * ______________############_____________________
 * ______________#############____________________
 * _____________##__###########___________________
 * ____________###__######_#####__________________
 * ____________###_#######___####_________________
 * ___________###__##########_####________________
 * __________####__###########_####_______________
 * ________#####___###########__#####_____________
 * _______######___###_########___#####___________
 * _______#####___###___########___######_________
 * ______######___###__###########___######_______
 * _____######___####_##############__######______
 * ____#######__#####################_#######_____
 * ____#######__##############################____
 * ___#######__######_#################_#######___
 * ___#######__######_######_#########___######___
 * ___#######____##__######___######_____######___
 * ___#######________######____#####_____#####____
 * ____######________#####_____#####_____####_____
 * _____#####________####______#####_____###______
 * ______#####______;###________###______#________
 * ________##_______####________####______________
 */

// 数组结构
function commonChars(words) {
	const result = [];
	const helperHash = new Array(26).fill(0);
	const base = "a".charCodeAt();
	const length = words.length;

	const firstWord = words[0];
	for (const item of firstWord)
		helperHash[item.charCodeAt() - base]++;

	const otherHash = new Array(26).fill(0);
	for (let i = 1; i < length; i++) {
		for (const item of words[i])
			otherHash[item.charCodeAt() - base]++;

		// 获取使用相同的字母
		for (let k = 0; k < 26; k++)
			helperHash[k] = Math.min(helperHash[k], otherHash[k]);
		// 循环比较
		otherHash.fill(0);
	}

	for (let i = 0; i < 26; i++)
		while (helperHash[i]-- > 0)
			result.push(String.fromCharCode(i + base));

	return result;
}

// Map结构
function commonChars(words) {
	const result = [];
	const min_count = new Map();
	const length = words.length;

	for (const char of words[0])
		min_count.set(char, (min_count.get(char) ?? 0) + 1);

	for (let i = 1; i < length; i++) {
		const char_count = new Map();
		for (const char of words[i])
			char_count.set(char, (char_count.get(char) ?? 0) + 1);

		for (const item of min_count) {
			const value = item[0];
			min_count.set(
				value,
				Math.min(
					min_count.get(value) ?? 0,
					char_count.get(value) ?? 0
				)
			);
		}
	}

	min_count.forEach((value, key) => {
		if (value) while (value--) result.push(key);
	});

	return result;
}
