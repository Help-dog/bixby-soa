module.exports.function = function vaccineCheck (whatMonth,choiseVaccine,recommendation,month) {

  const console = require('console');
  const nameinfo = require("../data/vaccine/vaccineData.js");
  const datainfo = require("../data/vaccine/vaccineData2.js");
  
  var fail = require('fail')
  var check = recommendation;
  var result = [];
  var depdata = ""
  var http = require('http');
  var site = "https://nip.cdc.go.kr/irgd/index.html"
  var imgUrl = "img/vaccineBaby.jpg";
  var ex = ["1","3", "5", "7", "8", "9", "10", "11", "13", "14", "17" ]

  if(whatMonth == undefined && month == undefined){
    throw fail.checkedError('범위를 벗어난 데이터가 들어옴','NOT_FOUND_VACCINEDATA', null)
    return  result;
  }
  for(var i = 0; i<ex.length; i++){
    if(month == ex[i] || whatMonth == "ex"){
      throw fail.checkedError('범위를 벗어난 데이터가 들어옴','NOT_FOUND_VACCINEDATA', null)
      return result;
    }
  }
  for(let i=0; i<datainfo.length; i++){
    if(whatMonth != undefined && datainfo[i].month.indexOf(whatMonth.toString())>=0){
      var S= datainfo[i].info.split(',') 
      var data = [];
      for(var s in S){
        var vaccinInfo2
        var dataN = S[s].slice(0,4)
        for(var d in nameinfo){
          if((nameinfo[d].name.indexOf(dataN))>=0){
            depdata = nameinfo[d].info
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
    else if(month != undefined && datainfo[i].check.indexOf(month.toString())>=0){
      var S= datainfo[i].info.split(',') 
      var data = [];
      for(var s in S){
        var vaccinInfo2
        var dataN = S[s].slice(0,4)
        for(var d in nameinfo){
          if((nameinfo[d].name.indexOf(dataN))>=0){
            depdata = nameinfo[d].info
            break;
          }
        }
        data = {
          vaccinDate: datainfo[i].month+"에"+" "+"접종해야 할 백신 정보입니다.",
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
  return result;
}

