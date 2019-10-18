module.exports.function = function searchVaccine (vaccinationName) {

const vaccineData = require("../data/vaccine/vaccineData.js");
const console = require('console');

console.log("name"+vaccinationName);
var result = {};
console.log(vaccineData.length);
console.log(vaccineData[0])
for(let i=0; i<vaccineData.length; i++){
  if(vaccinationName == vaccineData[i].name){
    result = {vaccinationName: vaccinationName, vaccinationDesc: vaccineData[i].info};

    console.log("들어왔다 이말이야"+vaccineData[i])
    break;
  }
}

console.log("result"+result);
  return result;
}
