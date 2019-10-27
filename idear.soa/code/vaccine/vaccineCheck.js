
module.exports.function = function vaccineCheck (whatMonth,choiseVaccine,vaccinInfo2,recommendation,url) {
  
const console = require('console');
console.log("개월"+ whatMonth);  //2개월
console.log(choiseVaccine)
const nameinfo = require("../data/vaccine/vaccineData.js");
const datainfo = require("../data/vaccine/vaccineData2.js");

var check = recommendation;
var result = [];
var depdata = ""
var http = require('http');
var site = "https://nip.cdc.go.kr/irgd/index.html"
var imgUrl = "img/vaccineBaby.jpg";




console.log(datainfo[0])  
for(let i=0; i<datainfo.length; i++){
  if(datainfo[i].month.indexOf(whatMonth.toString())>=0){

    var S= datainfo[i].info.split(',') 
    console.log("스플릿확인"+S)
    // var info = [];

    var data = [];
    for(var s in S){
      var vaccinInfo2
      var dataN = S[s].slice(0,4)
      for(var d in nameinfo){
        console.log("이름 확인 : "+ dataN +":"+ nameinfo[d].name)
        console.log("결과확인 :"+nameinfo[d].name.indexOf(dataN))
        if((nameinfo[d].name.indexOf(dataN))>=0){
          depdata = nameinfo[d].info
          console.log("재확인:"+depdata)
          break;
        }
      }
      data = {
        vaccinDate: whatMonth+"에"+" "+"접종해야 할 백신 정보입니다.",
        vaccinInfo: S[s],
        vaccinInfo2: depdata,
        url: site,
        imgUrl: imgUrl
      };
      result.push(data);
    }
    break;
  }
}

console.log(result)
return result;
}

