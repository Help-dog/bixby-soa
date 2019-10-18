

module.exports.function = function getbabyFoodInfo (month, ingredients, babyFood, recipe, recommendation) {
  var console = require('console');
  var fail = require('fail');

  const data = require("../data/babyfood/babyfoodRecipe.js");
  let temp= [];
  let result = [];

  for(var i=0; i<data.length; i++){
    if(1<= month <=12){
      if(data.category === "이유식"){
        temp= data;
      }

    }else if(12<= month <=24){
      if(data.category === "이유식"){
        temp= data;
    }else{

    }
  }

  return {}
}