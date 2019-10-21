module.exports.function = function searchBabyFood (month, ingredients, babyFood, recipe, recommendation) {

    var console = require('console');
    const babyfoodlist = require("../data/babyfood/babyfoodRecipe.js");

    let result = [];
    typeof(ingred)

    if( 4<= month && month <= 12){
      for(var i=0; i<babyfoodlist.length; i++){
        if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "초기"){
          result.push(babyfoodlist[i]);
        }
      }
    }//Month: 1~12개월
      else if( 7 <= month && month <= 9){
        for(var i=0; i<babyfoodlist.length; i++){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "중기"){
            result.push(babyfoodlist[i]);
            }
          }
      }//Month: 13~24개월
       else if( 10<= month && month <= 12){
        for(var i=0; i<babyfoodlist.length; i++){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "후기"){
            result.push(babyfoodlist[i]);
            }
          }
      }
       else if(13<= month){
        for(var i=0; i<babyfoodlist.length; i++){
          if(babyfoodlist[i].foodIngredients.indexOf(ingredients.toString()) != -1 && babyfoodlist[i].category === "이유식"){
            result.push(babyfoodlist[i]);
            }
          }
      }                                                                                                                                      
      else{
      }
  return result;
}