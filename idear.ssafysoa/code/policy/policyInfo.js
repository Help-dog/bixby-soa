module.exports.function = function policyInfo (policyObject, policyBenefit, recommendation) {
  const console = require('console');
  const pregnancyPolicy = require("../data/policy/pregnancyPolicy.js"); 
  const babyPolicy = require("../data/policy/babyPolicy.js"); 

//출산, 임신 / 아기
//name, content, target, benefit, tel, site
  var result = [];
  if(policyObject=="출산" || policyObject=="임신") {
    result = pregnancyPolicy;
  } else if(policyObject == "아기" || policyObject == "애기" || policyObject == "애" || policyObject == "아이" || policyObject == "아가") {
    result = babyPolicy;
  }
  console.log(result);
  return result;
}
