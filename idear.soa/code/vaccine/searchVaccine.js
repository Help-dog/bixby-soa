module.exports.function = function searchVaccine (vaccinationName) {
const console = require('console');
console.log("name"+vaccinationName);

const vaccineData = require("../data/vaccine/vaccineData.js");

var imgUrl = "img/vaccineBaby2.jpg";
var result = {};

console.log(vaccineData[0])
for(let i=0; i<vaccineData.length; i++){
  if(vaccineData[i].name.indexOf(vaccinationName.toString())>=0){
    result = {vaccinationName: vaccinationName, 
              vaccinationDesc: vaccineData[i].info,
              imgUrl: imgUrl
              };
    break;
  }
}
  return result;
  
}
