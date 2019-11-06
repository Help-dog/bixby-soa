module.exports.function = function policyInfo (policyObject, policyBenefit, recommendation) {
  var fail = require('fail')
  const console = require('console');
  const pregnancyPolicy = require("../data/policy/pregnancyPolicy.js"); 
  const babyPolicy = require("../data/policy/babyPolicy.js"); 

  var result = [];
  if(policyObject=="출산" || policyObject=="임신") {
    result = pregnancyPolicy;
  } else if(policyObject == "아기" || policyObject == "애기" || policyObject == "애" || policyObject == "아이" || policyObject == "아가") {
    result = babyPolicy;
  }else{
    throw fail.checkedError('대상이 잘못되었습니다.','NOT_FOUND_POLICYINFODATA', null)
  }

  return result;
}
