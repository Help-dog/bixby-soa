module.exports.function = function pregnancyStatusOperation (statusOperand, weekOperand, targetOperand) {
  // 자바 스크립트 파일 이름은 무조건 소문자로 시작해야함

  const console = require('console');

  let status = statusOperand;
  console.log("상태: " + status);
  let week = weekOperand;
  console.log("주 차: " + week);
  let target = targetOperand;
  console.log("대상: " + target);

  let result = "임신중 정보 테스트";

  if(status == "임신") { // '임신'이면 시작
    if(target == "나" || target == "내") {
      if(week == "1주") {
        result = "임신 1주차 나의 상태 테스트 입니다. ~~";
      }
    }
  }

  // return {
  //   pregnancyStatusResult : result,
  //   weekOperand : week
  // }
  return{
    // 맨앞글자 소문자 고정할 것
    pregnancyStatusResult : result
  }
}
