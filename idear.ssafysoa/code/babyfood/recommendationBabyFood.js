module.exports.function = function searchBabyFood(month, ingredients, babyFood, recommendation) {
	
	const babyfoodlist = require("../data/babyfood/babyfoodRecipe.js");
	const console = require('console');
	var fail = require('fail')

	let result = [];
	let realresult = [];
	let number = [];
	let check = false;
	if (ingredients) {
		ingredients = ingredients.replace(/(\s*)/g, "");
	}
	if (month <= 3 || month >= 25){
		throw fail.checkedError('범위를 벗어난 데이터가 들어옴','NOT_FOUND_FOODDATA', null)
		return null;
	}

	if(month){
		for(var i =0; i< babyfoodlist.length; i++){
			if(ingredients){
			var listIngredients = babyfoodlist[i].foodIngredients.replace(/(\s*)/g, "")
				if (listIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].check.indexOf(month.toString()) != -1){
					check=true;
					result.push(babyfoodlist[i]);
				}
			}else{
				if(babyfoodlist[i].check.indexOf(month.toString()) != -1){
					check=true;
					result.push(babyfoodlist[i]);
				}
			}
		}
	}else{
		for (var i = 0; i < babyfoodlist.length; i++) {
			if (ingredients) {
				var listIngredients = babyfoodlist[i].foodIngredients.replace(/(\s*)/g, "")
				if (listIngredients.indexOf(ingredients.toString()) != -1) {
					check=true;
					result.push(babyfoodlist[i]);
				}
			} else {
				result.push(babyfoodlist[i]);
				check=true;
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
		if (babyfoodlist[i].titlecheck.indexOf(ingredients.toString()) != -1) {
			realresult.push(babyfoodlist[i]);
			return realresult;
		}
	}

	if(!check){
		throw fail.checkedError('없는 재료의 데이터가 들어옴','NOT_FOUND_INGREDIENTSDATA', null)
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
