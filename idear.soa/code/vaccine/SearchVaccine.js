module.exports.function = function searchVaccine (vaccinationName) {

const vaccineData = require("../data/vaccine/vaccineData.js");
const console = require('console');

var result = {};

for(let i=0; i<vaccineData.length; i++){
  if(vaccinationName == vaccineData[i].name){
    result = {vaccinationName: vaccinationName, vaccinationDesc: vaccineData[i].info};
    break;
  }
}
  return result;
  
}
