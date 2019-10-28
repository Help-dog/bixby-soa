module.exports.function = function pregnancyStatusOperation (weekNumOperand, weekOperand, targetOperand, statusOperand) {
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

  let noBabyImg = [3, 4, 5, 13, 29, 30, 31, 32, 35, 36, 38]; // 없는 이미지
  let momImg = [1, 2, 3, 4, 5, 11, 15, 18, 27, 31, 33, 40]; // 있는 이미지

  // let result = "죄송해요. '(1 ~ 40)주차 아기 또는 내 상태 알려줘'라고 다시 말해보세요.";
  let result = null;

  if(target == "나" || target == "내" || target == "나의" || target == "산모" || target == "임산부" || target == "모체") {
    if(weekNum == null || week == null) {
      return null;
    } else if (weekNum < 1 || weekNum > 40) {
      return null;
    } else {
      target = "산모";

      if(checkNoImg(weekNum, momImg)) {
        imgUrl = "img/pregnancy/momSet/mom_week" + weekNum.toString() + ".jpg";
      } else {
        imgUrl = "img/pregnancy/pregnancyMom.jpg"; // 이미지 없음
      }

      for(var i=0; i < momStatusData.length; i++) {
        if((weekNum - 1) == i) {
          result = momStatusData[i].content;
          break;
        }
      }
    }

  } else if (target == "아기" || target == "애기" || target == "애" || target == "아이" || target == "아가") {
    if(weekNum == null || week == null) {
      return null;
    } else if(weekNum < 1 || weekNum > 40) {
      return null;
    } else {
      target = "아기";

      if(checkNoImg(weekNum, noBabyImg)) {
        imgUrl = "img/pregnancy/pregnancyBaby.jpg"; // 이미지 없음
      } else {
        imgUrl = "img/pregnancy/babySet/baby_week" + weekNum.toString() + ".jpg";
      }

      for(var i=0; i < babyStatusData.length; i++) {
        if((weekNum - 1) == i) {
            result = babyStatusData[i].content;
            break;
        }
      }
    }
    
  }

  return {
    // 맨앞글자 소문자 고정할 것
    pregnancyStatusResult : result,
    weekNumOperand : weekNum,
    targetOperand : target,
    imgUrl : imgUrl
  }

}

function checkNoImg(week, imgList) { // 산모, 아기는 반대로 작동함 true/false
  let flag = false;
  for(let i=0; i < imgList.length; i++) {
    if(imgList[i] == week) {
      flag = true;
      break;
    }
  }
  return flag;
}
