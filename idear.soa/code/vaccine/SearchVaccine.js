module.exports.function = function allVaccine (vaccinationName) {

const vaccineData = require("../data/vaccine/vaccineData.js");
const console = require('console');

console.log("name"+vaccinationName);
var i = 0;
var result = {};
for(i=0; i<vaccineData.length; i++){
  if(vaccinationName == vaccineData[i].name){
    result = {name : vaccinationName, info:vaccineData[i].info};
    break;
  }
}

console.log("result"+result);
  return result;
}
