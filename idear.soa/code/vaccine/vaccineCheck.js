
module.exports.function = function vaccineCheck (whatMonth,choiseVaccine,recommendation) {
  
const console = require('console');
console.log("개월"+ whatMonth);  //2개월
console.log(choiseVaccine)
const datainfo = require("../data/vaccine/vaccineData3.js");

var check = recommendation;

var result = [];
console.log(datainfo[0])
for(let i=0; i<datainfo.length; i++){
  if(datainfo[i].month.indexOf(whatMonth.toString())>=0){

    var S= datainfo[i].info.split(',')
    console.log("스플릿확인"+S)
    // var info = [];

    var data = [];
    for(var s in S){
      console.log(S[s]);
      data = {
        vaccinDate: whatMonth+"에"+" "+"접종해야 할 백신 정보입니다.",
        vaccinInfo: S[s]
      };
      result.push(data);
    }
    break;
  }
}

console.log(result)
return result;
}

