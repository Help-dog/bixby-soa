# 소중한아기



<img width="300px" src="./idear.soa/assets/img/bixby_launcher.png"/>





## 목차

1. [Bixby Capsule란?](#Bixby-Capsule란?)
2. [캡슐구조](#캡슐구조)
3. [캡슐설정](#캡슐설정)
4. [모델링_Actions&Conecepts](#모델링-Actions&Conecepts)
5. [비니지스로직_JS.Code](#비지니스로직-JS.Code)
6. [트레이닝_Test&Debug](#트레이닝-Test&Debug)
7. [UI/UX](#UI/UX)
8. [외부 어플리케이션 실행](#외부-어플리케이션-실행)
9. [부록](#부록)  



## Bixby Capsule란?

 빅스비는 삼성전자가 2017년 3월 30일에 공개한 음성인식 기반 개인 비서 애플리케이션이며, 빅스비 캡슐이란 빅스비 사용에 필요한 기능과 서비스가 통합돼 동작하는 넷플릭스나 스포티파이, 우버와 같은 가상의 어플리케이션이다. 



## 캡슐구조

   캡슐의 구조는 모델링, 비즈니스 로직, UI/UX, 트레이닝으로 구성되어 있음

### models

- Actions: 캡슐이 사용자가 원하는 작업을 이해하도록 수행할 동작
- Concepts: 발화 인식 및 발화 결과를 리턴할 때 필요한 값

> 디렉토리 상세

- actions : /base, /exercise, /guide, /process, /recipe
- concepts : /api, /base, /commit, /exercise, /guide, /ingredient, /process, /recipe

> 설명

`actions` 폴더에는 각 기능에 필요한 액션들과  `concepts` 폴더에는 액션에서 사용될 모델 타입들로 구성되어 있습니다. `base` 폴더에는 범용성이 높거나 독립적인 파일들이 있고 나머지 폴더들은 이름에 연관성이 있는 파일들을 포함해 만들었습니다. 

![](C:/Users/multicampus/Desktop/img/exercise.jpg)

concepts 같은 경우에는 structure라는 다수의 model을 포함하는 타입이 존재합니다. 요리보고에서는 primitive type과 structure를 구분하기 위해 위와 같이 structure 라는 폴더를 만들어서 해당 폴더 안에 생성하여 관리를 용이하게 하였습니다.



### resources

> 디렉토리 상세

- base : endpoints.bxb
- ko-KR : training, /dialogs, /layouts, /transactions, /views, /voca, Yoribogo.hints.bxb, capsule-info.bxb, capsule.properties

> 설명

`ko-KR` 폴더는 한국어와 관련된 resources를 모아놓은 폴더입니다. 마켓 플레이스에서 해당 캡슐의 간단한 사용 방법을 알려주는 `.hints.bxb` 와 발화를 학습하는 `training` 파일,  특정 발화에 대한 결과 화면을 구성하는 파일들을 모아 놓은 `layouts` , `views` 폴더, 동의어 처리나 특정 단어를 빅스비에게 학습시키기 위한 단어파일을 모아놓은 `voca` 폴더 등으로 구성을 하였습니다.

`capsule.properties` 은 HTTP 요청에 필요한 서버의 주소, API 키값이나 권한 범위 등 캡슐을 구성할 때 필요한 값들을 저장할 수 있습니다. 이외의 파일들에 대해서는 [캡슐설정](#캡슐설정) 부분에서 다시 언급하도록 하겠습니다.