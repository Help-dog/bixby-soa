module.exports.function = function searchVaccine (vaccinationName) {
const console = require('console');
console.log("name"+vaccinationName);

const vaccineData = require("../data/vaccine/vaccineData2.js");


var result = {};
console.log(vaccineData[0])
for(let i=0; i<vaccineData.length; i++){
  if(vaccineData[i].name.indexOf(vaccinationName.toString())>=0){
    result = {vaccinationName: vaccinationName, 
              vaccinationDesc: vaccineData[i].info
              };

    console.log("들어왔다 이말이야"+vaccineData[i])
    break;
  }
}
  return result;
  
}
