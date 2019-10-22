module.exports = [
  // {
  //   name: "병명",
  //   info:"병 정보",
  //   taget:"접종대상",
  //   timing:"접종시기",
  //   caution:"주의점",
  //   danger:"경고 위험한경우",  //스플릿시 . 으로 스플릿
  // },
  {
    name: "결핵(BCG피내용)",
    info:"결핵은 공기를 통한 결핵균의 감염에 의해 발생하는 질환으로 주로 폐에 발생하지만 인체 모든 장기에도 발병 가능함",
    taget:"영아/유아",
    timing:"생후 4주이내 1회",
    caution:"미숙아나 입원이 필요한 질환이 있는경우 주의",
    danger:"1-선천성면역결핍증,인간면역결핍바이러스 감염, 백혈병, 림프종 등 면역 결핍 상태에 있는 경우. 2-스테로이드 치료, 항암제 치료, 방사선 치료 등으로 면역억제 상태에 있는 경우. 3-접종 할 부위에 화상, 피부감염이 있는 경우",
  },
  {
    name: "B형간염(HepB)",
    info:"B형 간염은 B형간염 바이러스에 의해 급성 또는 만성으로 간에 염증이 발생하는 질환입니다. 감염시 식욕부진,피곤,설사와 구토, 황달과 같은 급성 간염의 증상이 나타납니다.",
    taget:"신생아/영아",
    timing:"1차-출생직후. 2차-생후 1개월. 3차-생후 6개월",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 B형간염 백신접종 후 아나필락시스(심한 알레르기) 반응이 있었던 경우. 2-B형간염 백신성분에 아나필락시스(심한 알레르기) 반응을 보인 경우",
  },
  {
    name: "디프테리아/파상풍/백일해(DTaP)",
    info:"디프테리아균은 인두와 편도에 염증을 일으켜 호흡장애를 일으키며, 심한경우에는 기도폐색,심근염이 발생하고, 심지어 사망에 이를 수 있습니다. 파상풍균은 신경 독성 물질을 분비하여 근육을 마비시키고, 연하 곤란(삼킴장애),호흡마비,전신마비 등을 일으켜 사망에 이를 수 있습니다. 백일해균은 호흡기 염증을 일으켜 심한 기침발작을 유발하며, 이러한 증상은 수 주간 지속될 수 있습니다.",
    taget:"영아/유아",
    timing:"1차-생후 2개월. 2차-생후 4개월. 3차-생후 6개월. 4차-생후 15~18개월. 5차-만 4~6세",
    caution:"1-이전 접종 후 48시간 이내에 40도 이상의 높은 열이 난 경우. 2-이전 접종 후 48시간 이내에 허탈 상태,쇼크유사상태의 증상을 보인 경우. 3-이전 접종 후 48시간 이내에 3시간 이상 심하게 보챘을 경우. 4- 이전 접종 후 3일 이내에 열성 또는 비열성 경련이 발생하였을 때",
    danger:"1-이전 DTaP 백신접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-DTaP 백신성분에 아나필락시스(심한 알레르기)반응을 보인 경우. 3-이전 접종 7일 내에 원인을 알 수 없는 급성 뇌증을 보인 경우",
  },
  {
    name: "디프테리아/파상풍/백일해(DTaP/Td)",
    info:"디프테리아균은 인두와 편도에 염증을 일으켜 호흡장애를 일으키며, 심한경우에는 기도폐색,심근염이 발생하고, 심지어 사망에 이를 수 있습니다. 파상풍균은 신경 독성 물질을 분비하여 근육을 마비시키고, 연하 곤란(삼킴장애),호흡마비,전신마비 등을 일으켜 사망에 이를 수 있습니다. 백일해균은 호흡기 염증을 일으켜 심한 기침발작을 유발하며, 이러한 증상은 수 주간 지속될 수 있습니다.",
    taget:"소아",
    timing:"만 11~12세에 Tdap 백신으로 1회 접종",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 Tdap/Td백신 접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-Tdap/Td 백신성분에 아나필락시스(심한 알레르기)반응이 있었던 경우. 3-이전 접종 7일 내에 원인을 알 수 없는 급성 뇌증을 보인 경우",
  },
  {
    name: "폴리오",
    info:"소아마비로 알려진 질환으로 대부분은 감연되어도 증상이 나타나지 않지만, 일부에서 회색질 척수염 또는 수막염이 발생하고 드물게 마비성 회색질 척수염이 발생하기도 합니다.",
    taget:"영아/유아",
    timing:"1차-생후 2개월. 2차-생후 4개월. 3차-생후 6개월. 4차-만 4~6세",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 IPV 백신접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-IPV 백신성분(예: 네오마이신, 스트렙토마이신,폴리믹신 B 등)에 아나필락시스(심한 알레르기)반응이 있었던 경우.",
  },
  {
    name: "b형헤모필루스인플루엔자(Hib)",
    info:"b형헤모필루스인플루엔자는 뇌수막염, 후두개염, 폐렴, 관절염, 봉와직염등 침습성 감염 질환의 원인이 되며, 5세 미만 소아에서 주로 발생합니다.",
    taget:"영아/유아",
    timing:"1차-생후 2개월. 2차-생후 4개월. 3차-생후 6개월. 4차-생후 12~15개월",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 Hib 백신접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-Hib 백신성분에 아나필락시스(심한 알레르기)반응이 있었던 경우.",
  },
  {
    name: "폐렴구균(PCV)",
    info:"페렴구균은 급성 중이염, 폐렴 및 균혈증, 수막염등 침습성 감염을 일으키는 주요 원인균 중의 하나이며, 현재까지 약90여 가지 혈청형으로 구분됩니다",
    taget:"영아/유아",
    timing:"(PCV10/PCV13)1차-생후 2개월. 2차-생후 4개월. 3차-생후 6개월. 4차-생후 12~15개월",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 폐렴구균 백신접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-폐렴구균 백신성분에 아나필락시스(심한 알레르기)반응이 있었던 경우.",
  },
  {
    name: "홍역/유행성이하선염/풍진(MMR)",
    info:"처음엔 감기처럼 콧물, 기침 같은 증상과 결막염 등이 나타나다가 고열과 함께 온몸에 발진이 나타나는 감염성이 높은 바이러스 질환입니다.",
    taget:"영아/유아",
    timing:"1차-생후 12~15개월. 2차-만 4세~6세",
    caution:"1-중등도 또는 심한 급성기 질환. 2-면역글로불린, 수혈 등 항체 함유 혈액제제 투여 후 일정기간 이내인 경우",
    danger:"1-이전 MMR 백신접종 후 아나필락시스(심한 알레르기)반응이 있었던 경우. 2-MMR 백신성분에 아나필락시스(심한 알레르기)반응이 있었던 경우.",
  },
  {
    name: "수두",
    info:"수두는 소아기에 흔한 발진성 질환 중의 하나로, 가려움증을 동반하는 수포성 발진이 머리,얼굴,몸통 및 사지에 퍼지는 양상으로 나타나고 간혹 발열과 피로 등의 증상이 동반됩니다.",
    taget:"영아/유아",
    timing:"생후 12~15개월에 1회 접종",
    caution:"1-중등도 또는 심한 급성기 질환. 2-면역글로불린, 수혈 등 항체 함유 혈액제제 투여 후 일정기간 이내인 경우. 3-아스피린을 복용하고 있는 경우",
    danger:"1-이전 접종 후 아나필락시스(심한 알레르기) 반응이 있었던 경우. 2-수두 백신성분(예:젤라틴, 네오마이신 등)에 아나필락시스(심한 알레르기) 반응을 보인 경우. 3-임신,면역저하 및 면역결핍",
  },
  {
    name: "일본뇌염 불활성화(IJEV)/약독화(LJEV) 백신",
    info:"일본뇌염은 바이러스를 지닌 모기에 의해 감염되는 질환이며, 급성 뇌염, 무균성 수막염 또는 비특이적인 열성 질환 같은 경증 질환도 나타날 수 있습니다.",
    taget:"영아/유아",
    timing:"(불활성화백신)1차-생후 12~23개월. 2차-생후 24~35개월. 3차-만 6세. 4차-만 12세. (약독화 생백신)1차-생후 12~23개월. 2차-생후 24~35개월",
    caution:"불활성화백신 -중등도 또는 심한 급성기 질환. 약독화생백신 1-중등도 또는 심한 급성기 질환. 2-면역글로불린, 수혈 등 항체 함유 혈액제제 투여 후 일정기간 이내",
    danger:"불활성화 백신 1-이전 접종 후 아나필락시스(심한 알레르기) 반응이 있었던 경우. 2-일본뇌염 백신성분에 아나필락시스(심한 알레르기) 반응을 보인 경우. 약독화 생백신 1-이전 접종 후 심한 알레르기 반응이 있었던 경우. 2-일본뇌염 성분에 아나필락시스(심한 알레르기) 반응을 보인 경우. 3-임신,면역저하 및 면역결핍",
  },
  {
    name: "A형간염",
    info:"A형간염에 감염되었을 경우 고열, 권태감, 식욕부진, 메스꺼움, 복통, 황달 등의 증상이 나타나고 2~6개월간 지속되거나 재발 할 수 있으며 전격성 간부전이 될 수 있습니다. 증상발현은 6세미만의 소아의 70%는 증상이 보이지 않고, 청소년이나 성인은 증상이 나타납니다.",
    taget:"생후 12~23개월의 모든 소아",
    timing:"생후 12~23개월 2회(1차접종후 6~12개월 간격)",
    caution:"감기와 같은 가벼운 질환은 접종 가능하지만, 중증도나 중증의 질환이 있다면 몸 상태가 회복될 때까지 접종을 미루는것이 좋으니 담당의사와 상의가 필요",
    danger:"1-이전 접종 후 생명을 위협하는 아나필락시스(심한 알레르기) 반응이 있었던 경우. 2-A형간염 백신성분에 아나필락시스(심한 알레르기) 반응을 보인 경우",
  },
  {
    name: "사람유두종바이러스 감염증(HPV)",
    info:"감염성이 높은 병원체로 성 접촉을 통해 전파되며, 피부나 생식기 점막 등을 감염시켜 남녀 모두에게 생식기 사마귀, 관련암과 그 전암병변 같은 질환을 유발 할 수 있습니다. 대부분 무증상이고 1~2년내에 자연소멸 되지만 지속 감염이 일어날 수 있고 지속 감염은 암발생의 위험 요인이 됩니다.",
    taget:"해당 연도에 만 12세이거나 만 12세에 달하게 되는 여아",
    timing:"6개월 간격으로 2회접종(만14~15세 이상에서 1차 접종시 3회 접종 필요). 접종 대상 백신: HPV4(가다실),HPV2(서바릭스),HPV9(가다실9). *예방접종 시 동일한 백신으로 접종을 완료하도록 합니다.(국가 지원 대상 백신:HPV4(가다실),HPV2(서바릭스))",
    caution:"중등도 또는 심한 급성기 질환",
    danger:"1-이전 접종 후 생명을 위협하는 아나필락시스(심한 알레르기) 반응이 있었던 경우. 2-사람유두종바이러스 감염증 백신성분에 아나필락시스(심한 알레르기) 반응을 보인 경우",
  },

]
