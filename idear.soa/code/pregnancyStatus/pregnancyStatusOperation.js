module.exports.function = function pregnancyStatusOperation (statusOperand, weekNumOperand, weekOperand, targetOperand) {
  // 자바 스크립트 파일 이름은 무조건 소문자로 시작해야함

  const console = require('console');
  // const momStatusData = require("../data/pregnancyStatus/pregnancyMomStatus.json");
  // const babyStatusData = require("../data/pregnancyStatus/pregnancyBabyStatus.json");
  const momStatusData = require("../data/pregnancyStatus/pregnancyMomStatus.js");
  const babyStatusData = require("../data/pregnancyStatus/pregnancyBabyStatus.js");

  let status = statusOperand;
  console.log("상태: " + status);
  let weekNum = weekNumOperand;
  console.log("숫자: " + weekNum);
  let week = weekOperand; 
  console.log("한글: " + week);
  let target = targetOperand;
  console.log("대상: " + target);

  let result = "1주 ~ 40주 범위에서 선택해주세요.";

  if(status == "임신") {
    if(week == "주" || week == "주차" || week == "주 차") {
      if(target == "나" || target == "내" || target == "나의") {
        
        for(var i=0; i < momStatusData.length; i++) {
          if((weekNum - 1) == i) {
            result = momStatusData[i].content;
            break;
          }
        }

      } else if (target == "아기" || target == "애기" || target == "애") {
        if(week == "주" || week == "주차" || week == "주 차") {
        
          for(var i=0; i < babyStatusData.length; i++) {
            if((weekNum - 1) == i) {
              result = babyStatusData[i].content;
              break;
            }
          }
        }
      }

    }
  }

  // if(status == "임신") { // '임신'이면 시작
  //   if(target == "나" || target == "내") {
  //     if(week == "1주") {
  //       result = momStatusData[0].content;
  //     } else if (week == "2주") {
  //       result = momStatusData[1].content;
  //     }
  //   }
  // }

  // return {
  //   pregnancyStatusResult : result,
  //   weekOperand : week
  // }

  // return{
  //   // 맨앞글자 소문자 고정할 것
  //   pregnancyStatusResult : result
  // }

  return result;
}
