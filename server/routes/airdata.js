const request = require('request');
const convert = require('xml-js');
const fs = require('fs');

//var newDate = new Date();
//var time  = newDate.toFormat('YYYYMMDD');

const serviceKey = '8pi%2BdKWKiqEdnVIk%2FGQHka7Wc7cwcZjpP18pKjlYcrtVhSPtbvfBCeg2pbVlDuRZDU2gqaMSqnCx2Eh8tslKTg%3D%3D'//공공데이터 포털에서 받은 내 서비스키 

//var parse = require('json-parse');
const airdata = (day,callback) => {       // index.js에서 보내준 시/도 이름을 여기서 받았다.
    
    
    const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?';
    //api사용하기 위한 url이다. 끝에 '?'물음표를 붙여야된다.
        var queryParams = encodeURIComponent('serviceKey') + '=' + serviceKey   //서비스키
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); //페이지 번호
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');   //한 페이지 경과 수
        queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent(day);    //데이터 생성일 시작범위
        queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent(day);  //20210126데이터 생성일 종료범위
        queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json')   //josn으로 받기
        
    
    request(
        {
        url: url + queryParams, // url과 queryParams합쳐놓은거 
        method: 'GET'
        }, function (error, response, body) 
        {
        //console.log(url+queryParams);
        //console.log('Status', response.statusCode);
        //console.log('Headers', JSON.stringify(response.headers));
        //console.log('Reponse received', body);
        //console.log(time)
        body = convert.xml2json(body, {compact:true, spacese:4});
        //body = JSON.parse(body)
        //console.log(`xml to json => ${xmlToJson}`)
        
        //body = JSON.stringify(body)
        fs.writeFileSync('airdata-json.json',body)
        
        callback(undefined,{    //body를 air이름으로 만들어서 index.js에 보내준다
            air:body //api json 파일
        })
    });
}

module.exports = airdata;