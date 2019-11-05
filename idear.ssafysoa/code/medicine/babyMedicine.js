module.exports.function = function babyMedicine (medicine, recommendation) {

  const console = require('console');
  const nameinfo = require("../data/medicine/babyMedicine.js");
  console.log(nameinfo)
  var result = []
  var i
  var medicineName
  var medicineUse
  
  for( i in nameinfo){
    let name = nameinfo[i].name
    let use = nameinfo[i].use
    let data = []
    console.log(name +":"+use)

    data = {
      medicineName : name,
      medicineUse : use
    }
    console.log(data)
    result.push(data);
    console.log(medicineName +":"+ medicineUse)
  }

  return result
}
