const bodyParser = require('body-parser');
const { query } = require('express');
const express = require('express');
const airdata = require('./airdata'); //여기서 만들어논 함수를 사용할거다
const router = express.Router();
const mysql = require('mysql');

const fs = require('fs');



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

const conn = mysql.createConnection({     // mysql db 커넥션 생성
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'kh12241224',
    database : 'city'
});

conn.connect()  //db 연결

router.post('/location',function (req,res){ ///프론트에서 fetch로 요청한 location 친구
    
    console.log("COMPLETE : server connect")    //확인용
    airdata(req.body.day,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }
            return res.send(air); //return 프론트로 가던 것

    })
    const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
    const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경


    let parseData = JSON.parse(airjson)  //json파일 파싱
    
    var Dec1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
    conn.query("UPDATE 제주 set incdec=(?) Where id = 1", [Dec1]) // db에 넣기

    var Dec2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
    conn.query("UPDATE 경남 set incdec=(?) Where id = 1", [Dec2]) 

    var Dec3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
    conn.query("UPDATE 경북 set incdec=(?) Where id = 1", [Dec3]) 

    var Dec4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
    conn.query("UPDATE 전남 set incdec=(?) Where id = 1", [Dec4]) 

    var Dec5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
    conn.query("UPDATE 전북 set incdec=(?) Where id = 1", [Dec5]) 

    var Dec6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
    conn.query("UPDATE 충남 set incdec=(?) Where id = 1", [Dec6]) 

    var Dec7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
    conn.query("UPDATE 충북 set incdec=(?) Where id = 1", [Dec7]) 

    var Dec8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
    conn.query("UPDATE 강원 set incdec=(?) Where id = 1", [Dec8]) 

    var Dec9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
    conn.query("UPDATE 경기 set incdec=(?) Where id = 1", [Dec9]) 

    var Dec10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
    conn.query("UPDATE 세종 set incdec=(?) Where id = 1", [Dec10]) 
    
    var Dec11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
    conn.query("UPDATE 울산 set incdec=(?) Where id = 1", [Dec11]) 

    var Dec12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
    conn.query("UPDATE 대전 set incdec=(?) Where id = 1", [Dec12]) 

    var Dec13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
    conn.query("UPDATE 광주 set incdec=(?) Where id = 1", [Dec13]) 

    var Dec14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
    conn.query("UPDATE 인천 set incdec=(?) Where id = 1", [Dec14]) 

    var Dec15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
    conn.query("UPDATE 대구 set incdec=(?) Where id = 1", [Dec15]) 

    var Dec16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
    conn.query("UPDATE 부산 set incdec=(?) Where id = 1", [Dec16]) 

    var Dec17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
    conn.query("UPDATE 서울 set incdec=(?) Where id = 1", [Dec17]) 

    var Dec18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
    conn.query("UPDATE 전국 set incdec=(?) Where id = 1", [Dec18])  
})

router.post("/calldb", function(req,res){
    const cityname = req.body.city;
    conn.query("SELECT * FROM "+cityname, function(err,rows,fields){
        if(err){
            console.log("DB접속 실패");
            console.log(err);
        }else{
            console.log("DB접속 성공, 가져온 지역 : ", cityname);
            // console.log(rows);
            res.send(rows[0])
        };
    });
});

module.exports = router;