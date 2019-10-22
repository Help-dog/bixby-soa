// 참조 (https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)
function getDistance(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

module.exports.function = function getHospitalInfo (near, point, self) {
  const console = require('console');
  var http = require('http');
  
  var response = http.getUrl('https://dapi.kakao.com/v2/local/search/category.json?category_group_code=HP8&y='+point.point.latitude+'&x='+point.point.longitude+'&radius=10000', {
  format: 'json',
  headers: {
    Authorization: "KakaoAK c65e06eafb52d7e6c8724c0991599af8"
  }
})

  let datas = [];

  for(let i=0; i<response.documents.length; i++) {
    var data = {
      name: response.documents[i].place_name,
      location: response.documents[i].road_address_name,
      url: response.documents[i].place_url,
      flag: false,
      point: {
        point: {
          latitude: response.documents[i].y,
          longitude: response.documents[i].x
        }
      }
    };
    datas.push(data);
  }

  const dummyData = datas;
  let result = [];
  
  if(near != undefined){
    let distance = 0;
    
    for(let i = 0; i < dummyData.length; i++){
      distance = getDistance(point.point.latitude, point.point.longitude,
                             dummyData[i].point.point.latitude, dummyData[i].point.point.longitude);      
      
      if(distance < 2){
        if(self.nameInfo != undefined){
          if(self.nameInfo.nickName){
            dummyData[i].username = self.nameInfo.nickName;
          }else{
            dummyData[i].username = self.nameInfo.structuredName;
          }  
        }else{
          dummyData[i].username = '사용자';
        }
              
        dummyData[i].flag = true;
        result.push(dummyData[i]);
      }   
    }
   
  }else{    
    for(let i = 0; i < dummyData.length; i++){
      result.push(dummyData[i]);
    }
  }

  return result;
}
