<h1 align = center>코로나 웹사이트 프로젝트 </h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/46296688/111747575-d00db100-88d2-11eb-94ec-690d2c5a06fe.PNG" width : "60%" height : "100%"></img>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
</p>

<h2 align = center> 프로젝트 설명 </h2>


  코로나 바이러스 확진자 현황을 전국, 시, 도 별로 보기 쉽게 표현
  - 리액트를 이용한 Front 구현, [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) 라이브러리로 차트 시각화

  - Node.js 의 express 라이브러리를 이용한 Server 구현
  - mysql에 clearDB 구현


<p align="center">
  <img  src="https://user-images.githubusercontent.com/46296688/111752945-a1df9f80-88d9-11eb-9917-241c5f417cd8.gif" width : "60" height : "60"/>
</p>



`최초 실행 시 클릭하여 DB에 저장` 버튼 클릭 시 공공 데이터 포털의 [보건복지부_코로나19 시·도발생_현황](https://www.data.go.kr/data/15043378/openapi.do)의 각 지역별 확진자 값을 데이터베이스에 저장
DB에는 17개 시,도 테이블과 1개의 전국테이블로 총 18개의 테이블이 존재하고, 각 테이블의 column은 id(번호), date(날짜), incdec(확진자 수)

<p align="center">
  <img  src="https://user-images.githubusercontent.com/46296688/111753001-b2901580-88d9-11eb-8fd7-06e5ca7e23b9.jpg" width : "60%" height : "60%"/>
</p>
<p align="center"> <api 호출로 불러온 > </p>



-----------------------

<p align="center">
  <img  src="https://user-images.githubusercontent.com/46296688/111754656-97bea080-88db-11eb-9671-456240fce350.gif" width : "60%" height : "60%"/>
</p>

-----------------------

<p align="center">
  <img  src="https://user-images.githubusercontent.com/46296688/111755000-f71cb080-88db-11eb-95a5-35ebd4975861.gif" width : "60%" height : "60%"/>
</p>
