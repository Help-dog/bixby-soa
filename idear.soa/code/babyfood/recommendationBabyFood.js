module.exports.function = function searchBabyFood (month, ingredients, babyFood, recipe, recommendation) {

    var console = require('console');
    const babyfoodlist = require("../data/babyfood/babyfoodRecipe.js");

    let result = [];
    let realresult= [];
    let number=[];

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
    }//if문 제외한 모든 예들
 
    if(result.length > 6){
      number=randomNum (0, result.length);
      for(var i=0; i<6; i++){
        realresult.push(result[number[i]]);
        // realresult.push(result[number[i]]));
      }
      return realresult;
    }
    return result;
}

function randomNum (lower, upper) {
  var randomNumber = [];
  var console = require('console');
  for(var i=0; i<6; i++) {
    let myRandom = Math.floor(Math.random() * (upper - lower)) + lower;
    randomNumber.push(myRandom);
    }
    return randomNumber;
}


