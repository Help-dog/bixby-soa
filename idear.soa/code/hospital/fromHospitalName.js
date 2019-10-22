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

  return {
    phone: phone,
    placeName: place_name,
    url: place_url,
    roadAddressName: road_address_name,
    point: {
      point: {
        latitude: y,
        longitude: x
      }
    }
  }
}
