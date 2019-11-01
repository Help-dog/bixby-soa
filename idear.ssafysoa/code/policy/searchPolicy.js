

function findPolicy(policy, policyName) {
    for(var i=0; i<policy.length; i++) {
    var name = policy[i].name.replace(/(\s*)/g, "");
    if(name.indexOf(policyName)==-1) {
      continue;
    } else {
      return policy[i];
    }
  }
  return null;
}
module.exports.function = function searchPolicy (policyName, policyBenefit, recommendation) {
  const console = require('console');
  const pregnancyPolicy = require("../data/policy/pregnancyPolicy.js"); 
  const babyPolicy = require("../data/policy/babyPolicy.js");

  var fail = require('fail')
  var result = [];
  policyName = policyName.replace(/(\s*)/g, "");
  var policy = findPolicy(pregnancyPolicy, policyName);

  if(policy == null) {
    policy = findPolicy(babyPolicy, policyName);
  } else {
    return policy;
  }

  result = policy;

  if(result==null){
    //찾는 정책이 없다
    throw fail.checkedError('찾는 정책이 없습니다.','NOT_FOUND_SEARCHPOLICYDATA', null)
  }

  return result;
}
