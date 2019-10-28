module.exports.function = function pregnancyStatusOperation (weekNumOperand, weekOperand, targetOperand, statusOperand) {

  const console = require('console');
  const momStatusData = require("../data/pregnancyStatus/pregnancyMomStatus.js");
  const babyStatusData = require("../data/pregnancyStatus/pregnancyBabyStatus.js");

  let status = statusOperand;
  let weekNum = weekNumOperand;
  let week = weekOperand; 
  let target = targetOperand;
  let imgUrl = "";

  let noBabyImg = [3, 4, 5, 13, 29, 30, 31, 32, 35, 36, 38];
  let momImg = [1, 2, 3, 4, 5, 11, 15, 18, 27, 31, 33, 40];

  let result = null;

  if(target == "나" || target == "내" || target == "나의" || target == "산모" || target == "임산부" || target == "모체") {
    if(weekNum == null || week == null) {
      return null;
    } else if (weekNum < 1 || weekNum > 40) {
      return null;
    } else {
      target = "산모";

      if(checkImg(weekNum, momImg)) {
        imgUrl = "img/pregnancy/momSet/mom_week" + weekNum.toString() + ".jpg";
      } else {
        imgUrl = "img/pregnancy/pregnancyMom.jpg";
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

      if(checkImg(weekNum, noBabyImg)) {
        imgUrl = "img/pregnancy/pregnancyBaby.jpg";
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
    pregnancyStatusResult : result,
    weekNumOperand : weekNum,
    targetOperand : target,
    imgUrl : imgUrl
  }

}

function checkImg(week, imgList) {
  let flag = false;
  for(let i=0; i < imgList.length; i++) {
    if(imgList[i] == week) {
      flag = true;
      break;
    }
  }
  return flag;
}
