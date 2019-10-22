module.exports.function = function fromHospitalName (hospitalName, self, point) {
  var http = require('http')
  const console = require('console');

  var response = http.getUrl('https://dapi.kakao.com/v2/local/search/keyword.json?y='+point.point.latitude+'&x='+point.point.longitude+'&radius=2000', {
  format: 'json',
  query: {
    query: hospitalName
  },
  headers: {
    Authorization: "KakaoAK c65e06eafb52d7e6c8724c0991599af8"
  }
})

  if(response.documents[0] === undefined || response.documents[0].category_name.indexOf("병원") == -1) {
    return null;
  } else {
    return {
      phone: response.documents[0].phone,
      placeName: response.documents[0].place_name,
      url: response.documents[0].place_url,
      roadAddressName: response.documents[0].road_address_name,
      point: {
        point: {
          latitude: response.documents[0].y,
          longitude: response.documents[0].x
        }
      }
    } 
  }
}
