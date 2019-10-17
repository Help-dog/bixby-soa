module.exports.function = function pregnancyStatusOperation (statusOperand, monthOperand, targetOperand) {

  const console = require('console');

  let status = statusOperand;
  console.log("상태: " + status);
  let month = monthOperand;
  console.log("주 차: " + month);
  let target = targetOperand;
  console.log("대상: " + target);

  let result = "";

  if(status == "임신") { // '임신'이면 시작
    if(target == "나" || target == "내") {
      if(month == "1주") {
        result = "임신 1주차 나의 상태 테스트 입니다. ~~";
      }
    }
  }


  return {
    result
  }
}
