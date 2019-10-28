module.exports.function = function searchBabyFood(month, ingredients, babyFood, recommendation) {

	const babyfoodlist = require("../data/babyfood/babyfoodRecipe.js");

	let result = [];
	let realresult = [];
	let number = [];

	if (ingredients) {
		ingredients = ingredients.replace(/(\s*)/g, "");
	}

	if (4 <= month && month <= 6) {
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				if (babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "4~6개월 이유식")
					result.push(babyfoodlist[i]);
			} else {
				if (babyfoodlist[i].category === "4~6개월 이유식") {
					result.push(babyfoodlist[i]);
				}
			}
		}
	}
	else if (7 <= month && month <= 9) {
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				if (babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "7~9개월 이유식")
					result.push(babyfoodlist[i]);
			} else {
				if (babyfoodlist[i].category === "7~9개월 이유식") {
					result.push(babyfoodlist[i]);
				}
			}
		}
	}
	else if (10 <= month && month <= 12) {
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				if (babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "10~12개월 이유식")
					result.push(babyfoodlist[i]);
			} else {
				if (babyfoodlist[i].category === "10~12개월 이유식") {
					result.push(babyfoodlist[i]);
				}
			}
		}
	}
	else if (13 <= month && month <= 24) {
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				if (babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1
					&& babyfoodlist[i].category === "13~24개월 이유식" || babyfoodlist[i].category === "유아식")
					result.push(babyfoodlist[i]);
			} else {
				if (babyfoodlist[i].category === "13~24개월 이유식" || babyfoodlist[i].category === "유아식") {
					result.push(babyfoodlist[i]);
				}
			}
		}
	}
	else if (month <= 3 || month >= 25){
		return null;
	}

	if (!month) {
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				if (babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1) {
					result.push(babyfoodlist[i]);
				}
			} else {
				result.push(babyfoodlist[i]);
			}
		}
	}

	if (result.length > 6) {
		number = randomNum(result.length);
		for (var i = 0; i < 6; i++) {
			realresult.push(result[number[i]]);
		}
		return realresult;
	}
	if (result.length != 0) {
		return result;
	}
	for (var i = 0; i < babyfoodlist.length; i++) {
		if (babyfoodlist[i].title.indexOf(ingredients.toString()) != -1) {
			realresult.push(babyfoodlist[i]);
			return realresult;
		}
	}
}
function randomNum(num) {
	let randomNumber = [];
	let i = 0;
	while (i < 6) {
		let n = Math.floor(Math.random() * num);
		if (!sameNum(n)) {
			randomNumber.push(n);
			i++;
		}
	}
	function sameNum(n) {
		for (var i = 0; i < randomNumber.length; i++) {
			if (n === randomNumber[i]) {
				return true;
			}
		}
		return false;
	}
	return randomNumber;
}
