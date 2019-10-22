module.exports.function = function vaccineCheck (whatMonth) {
  
const console = require('console');
console.log("개월"+ whatMonth);  //2개월

const vaccineInfo = require("../data/vaccine/vaccineData3.js");


var result = {};
console.log(vaccineInfo[0])
for(let i=0; i<vaccineInfo.length; i++){
  if(vaccineInfo[i].month.indexOf(whatMonth.toString())>=0){
    result = {vaccinDate: whatMonth, 
              vaccinInfo: vaccineInfo[i].info
              };

    console.log("데이터 확인"+vaccineInfo[i])
    break;
  }
}

console.log("결과"+result);
  return result;
}

