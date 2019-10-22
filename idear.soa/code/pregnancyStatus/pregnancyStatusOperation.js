module.exports.function = function pregnancyStatusOperation (statusOperand, weekNumOperand, weekOperand, targetOperand) {
  // 자바 스크립트 파일 이름은 무조건 소문자로 시작해야함

  const console = require('console');
  const momStatusData = require("../data/pregnancyStatus/pregnancyMomStatus.js");
  const babyStatusData = require("../data/pregnancyStatus/pregnancyBabyStatus.js");

  let status = statusOperand;
  // console.log("상태: " + status);
  let weekNum = weekNumOperand;
  // console.log("숫자: " + weekNum);
  let week = weekOperand; 
  // console.log("한글: " + week);
  let target = targetOperand;
  // console.log("대상: " + target);
  let imgUrl = "";

  let result = "ex)죄송해요. '임신 x주차 (아기) 또는 (내) 상태 알려줘'라고 다시 말해보세요. (1 ~ 40주)";

  if(status == "임신") {
    if(week == "주" || week == "주차" || week == "주 차") {
      if(target == "나" || target == "내") {
        target = "산모";
        imgUrl = "img/mom_picto.png"
        for(var i=0; i < momStatusData.length; i++) {
          if((weekNum - 1) == i) {
            result = momStatusData[i].content;
            break;
          }
        }

      } else if (target == "아기" || target == "애기" || target == "애") {
        target = "아기";
        imgUrl = "img/baby_picto.png"
        for(var i=0; i < babyStatusData.length; i++) {
          if((weekNum - 1) == i) {
             result = babyStatusData[i].content;
             break;
          }
        }
      }

    }
  }

  return{
    // 맨앞글자 소문자 고정할 것
    pregnancyStatusResult : result,
    weekNumOperand : weekNum,
    targetOperand : target,
    imgUrl : imgUrl
  }

  // return result; // 변수 한개만 return할 때
}
