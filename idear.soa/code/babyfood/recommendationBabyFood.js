module.exports.function = function searchBabyFood (month, ingredients, babyFood, recommendation) {

    var console = require('console');
    const babyfoodlist = require("../data/babyfood/babyfoodRecipe.js");

    let result = [];
    let realresult= [];
    let number=[];
    ingredients= ingredients.replace(/(\s*)/g, "");

    if( 4<= month && month <= 6){
      for(var i=0; i<babyfoodlist.length; i++){
        if(ingredients){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "4~6개월 이유식")
          result.push(babyfoodlist[i]);
        }else{
          if(babyfoodlist[i].category === "4~6개월 이유식"){
          result.push(babyfoodlist[i]);
          }
        } 
      }
    }//Month: 4~6개월
    else if( 7 <= month && month <= 9){
      for(var i=0; i<babyfoodlist.length; i++){
        if(ingredients){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "7~9개월 이유식")
          result.push(babyfoodlist[i]);
        }else{
          if(babyfoodlist[i].category === "7~9개월 이유식"){
          result.push(babyfoodlist[i]);
          }
        } 
      }
    }//Month: 7~9개월
    else if( 10 <= month && month <= 12){
      for(var i=0; i<babyfoodlist.length; i++){
        if(ingredients){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "10~12개월 이유식")
          result.push(babyfoodlist[i]);
        }else{
          if(babyfoodlist[i].category === "10~12개월 이유식"){
          result.push(babyfoodlist[i]);
          }
        } 
      }
    }//Month: 10~12개월
    else if( 13 <= month && month <= 24){
      for(var i=0; i<babyfoodlist.length; i++){
        if(ingredients){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1
          && babyfoodlist[i].category === "13~24개월 이유식" || babyfoodlist[i].category === "유아식")
          result.push(babyfoodlist[i]);
        }else{
          if(babyfoodlist[i].category === "13~24개월 이유식" || babyfoodlist[i].category === "유아식"){
          result.push(babyfoodlist[i]);
          }
        } 
      }
    }//Month: 13~24개월 
  
    if(!month){
     for(var i=0; i<babyfoodlist.length; i++){
      if(ingredients){
       if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1){
         result.push(babyfoodlist[i]);
        }
      }else{
         result.push(babyfoodlist[i]);
        }
      }
    }//Month가 입력 없을 때
    
    if(result.length > 6){
      number=randomNum (result.length);
      for(var i=0; i<6; i++){
        realresult.push(result[number[i]]);
        // realresult.push(result[number[i]]));
      }
      return realresult;
    }//모든 이유식 추천

    if(result.length !=0){
      return result;
    }
    
    for(var i=0; i<babyfoodlist.length; i++){
      if(babyfoodlist[i].title.indexOf(ingredients.toString()) != -1){
        realresult.push(babyfoodlist[i]);
        return realresult;
      }
    }
}

	function randomNum (num) {
    var console = require('console');
		let randomNumber = [];
		let i = 0;
		while (i < 6) {
			let n = Math.floor(Math.random() * num);
			if (! sameNum(n)) {
        console.log("number: "+n);
				randomNumber.push(n);
				i++;
			}
		}
		function sameNum (n) {
			for (var i = 0; i < randomNumber.length; i++) {
				if (n === randomNumber[i]) {
					return true;
				}
			}
			return false;
		}
		return randomNumber;
	}//중북 숫자 제거
