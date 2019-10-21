module.exports.function = function dataCheck (dataOperand, dataIn) {
  // dataOperand,dataIn 모델에서 가져온 collet -  input 데이터
  const console = require("console"); // 콘솔찍으려면 설정해줘야함
  // const dummyData = require("./data/hospital/hospital.js");
  let data = [];
  let text =dataIn + dataOperand;

  //여기서 데이터를 가져와야함!!
  // url = "https://www.google.com/maps/place/광주OK병원/@35.1904336,126.8123347,17z/data=!3m1!4b1!4m5!3m4!1s0x35718f24d20dc26f:0x2bef01f2474a520e!8m2!3d35.1904336!4d126.8145234"

  data.push("잘되낭",text)
  console.log("name"+ data);
  console.log("아 왜안돼!!");

  return { 
    resultInData: data , //데이터 리턴시 맞춰서 보내면 바로 확인가능
    operatorName: text
  }
  // return data  //전체적으로 통째로 보낼 수 도 있다. 그러면 뷰에서 하나씩 꺼내서 보여줘야함 안그럼 오브젝트값으로 넘어감
}
