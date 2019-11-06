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
    let num = nameinfo[i].num
    let data = []
    console.log(name +":"+use)
    let url ="img/medicine/"+num+".PNG";
    console.log(url)
    // url = "img/vaccineBaby.jpg";
    data = {
      medicineName : name,
      medicineUse : use,
      imgUrl: url
    }
    console.log(data)
    result.push(data);
    console.log(medicineName +":"+ medicineUse)
  }

  return result
}
