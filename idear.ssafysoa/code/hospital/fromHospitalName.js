module.exports.function = function fromHospitalName (hospitalName, self, point, recommendation) {
  var http = require('http')
  const console = require('console');

  var rec = recommendation;
  var response = http.getUrl('https://dapi.kakao.com/v2/local/search/keyword.json?y='+point.point.latitude+'&x='+point.point.longitude+'&radius=4000', {
    format: 'json',
    query: {
      query: hospitalName
    },
    headers: {
      Authorization: "KakaoAK c65e06eafb52d7e6c8724c0991599af8"
    }
  })

  hospitalName = hospitalName.replace(/(\s*)/g, "");

  for(var i=0; i<response.documents.length; i++) {
    if(response.documents[i].place_name.indexOf(hospitalName)==-1 || response.documents[i] === undefined || response.documents[i].category_name.indexOf("병원") == -1){
      continue;
    } else {
        return{
          phone: response.documents[i].phone,
          placeName: response.documents[i].place_name,
          url: response.documents[i].place_url,
          roadAddressName: response.documents[i].road_address_name,
          point: {
            point: {
              latitude: response.documents[i].y,
              longitude: response.documents[i].x
            }
          }
        }
      }
  }
}
