const bodyParser = require('body-parser');
const { query } = require('express');
const express = require('express');
const airdata = require('./airdata'); //여기서 만들어논 함수를 사용할거다
const router = express.Router();
const mysql = require('mysql');
const axios = require("axios");
const cheerio = require("cheerio");


const getHtml = async () => {
    try {
        return await axios.get("http://ncov.mohw.go.kr/regSocdisBoardView.do");
    } catch (error){
        console.error(error);
    }
}

const fs = require('fs');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.use('/', (req, res) => {
    res.send('...');
});

const conn = mysql.createConnection({     // mysql db 커넥션 생성
    host : 'us-cdbr-east-03.cleardb.com',
    port : 3306,
    user : 'b62069265faf14',
    password : '6147a003',
    database : 'heroku_b72dbf49fddd7db'
});

conn.connect()  //db 연결

router.post('/location',function (req,res){ ///프론트에서 fetch로 요청한 location 친구
   
    console.log("COMPLETE : server connect")    //확인용
    airdata(req.body.day1,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }{
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Dea1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = ?, incdec=(?) Where id = 1",[req.body.day1,Dea1]) // db에 넣기
    
        var Dea2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea2]) 
    
        var Dea3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea3]) 
    
        var Dea4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea4]) 
    
        var Dea5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea5]) 
    
        var Dea6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea6]) 
    
        var Dea7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?), incdec=(?) Where id = 1", [req.body.day1, Dea7]) 
    
        var Dea8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea8]) 
    
        var Dea9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea9]) 
    
        var Dea10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea10]) 
        
        var Dea11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea11]) 
    
        var Dea12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea12]) 
    
        var Dea13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea13]) 
    
        var Dea14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea14]) 
    
        var Dea15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea15]) 
    
        var Dea16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea16]) 
    
        var Dea17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea17]) 
    
        var Dea18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 1", [req.body.day1,Dea18])  
    }
            return res.send(air); //return 프론트로 가던 것

    })
    
    airdata(req.body.day2,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }{
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Deb1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?) ,incdec=(?) Where id = 2", [req.body.day2,Deb1]) // db에 넣기
    
        var Deb2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?) ,incdec=(?) Where id = 2", [req.body.day2,Deb2]) 
    
        var Deb3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?) ,incdec=(?) Where id = 2", [req.body.day2,Deb3]) 
    
        var Deb4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb4]) 
    
        var Deb5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb5]) 
    
        var Deb6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb6]) 
    
        var Deb7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb7]) 
    
        var Deb8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb8]) 
    
        var Deb9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb9]) 
    
        var Deb10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb10]) 
        
        var Deb11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb11]) 
    
        var Deb12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb12]) 
    
        var Deb13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb13]) 
    
        var Deb14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb14]) 
    
        var Deb15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb15]) 
    
        var Deb16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb16]) 
    
        var Deb17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb17]) 
    
        var Deb18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 2", [req.body.day2,Deb18])  
    }
            return ; //return 프론트로 가던 것
    })
    
    airdata(req.body.day3,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }   {
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Dec1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec1]) // db에 넣기
    
        var Dec2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?) , incdec=(?) Where id = 3", [req.body.day3,Dec2]) 
    
        var Dec3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec3]) 
    
        var Dec4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec4]) 
    
        var Dec5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec5]) 
    
        var Dec6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec6]) 
    
        var Dec7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec7]) 
    
        var Dec8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec8]) 
    
        var Dec9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec9]) 
    
        var Dec10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec10]) 
        
        var Dec11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec11]) 
    
        var Dec12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec12]) 
    
        var Dec13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec13]) 
    
        var Dec14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec14]) 
    
        var Dec15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec15]) 
    
        var Dec16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec16]) 
    
        var Dec17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec17]) 
    
        var Dec18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 3", [req.body.day3,Dec18])  
    }
            return ; //return 프론트로 가던 것

    })
    
    airdata(req.body.day4,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }    {
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Ded1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded1]) // db에 넣기
    
        var Ded2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded2]) 
    
        var Ded3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded3]) 
    
        var Ded4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?) ,incdec=(?) Where id = 4", [req.body.day4,Ded4]) 
    
        var Ded5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?) ,incdec=(?) Where id = 4", [req.body.day4,Ded5]) 
    
        var Ded6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?) ,incdec=(?) Where id = 4", [req.body.day4,Ded6]) 
    
        var Ded7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?) ,incdec=(?) Where id = 4", [req.body.day4,Ded7]) 
    
        var Ded8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?) ,incdec=(?) Where id = 4", [req.body.day4,Ded8]) 
    
        var Ded9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded9]) 
    
        var Ded10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded10]) 
        
        var Ded11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded11]) 
    
        var Ded12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?),incdec=(?) Where id = 4", [req.body.day4,Ded12]) 
    
        var Ded13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded13]) 
    
        var Ded14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded14]) 
    
        var Ded15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded15]) 
    
        var Ded16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?),  incdec=(?) Where id = 4", [req.body.day4,Ded16]) 
    
        var Ded17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded17]) 
    
        var Ded18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 4", [req.body.day4,Ded18])  
    }
            return ; //return 프론트로 가던 것

    })

    airdata(req.body.day5,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }{
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Dee1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee1]) // db에 넣기
    
        var Dee2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee2]) 
    
        var Dee3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee3]) 
    
        var Dee4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?) ,incdec=(?) Where id = 5", [req.body.day5,Dee4]) 
    
        var Dee5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?) ,incdec=(?) Where id = 5", [req.body.day5,Dee5]) 
    
        var Dee6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?) ,incdec=(?) Where id = 5", [req.body.day5,Dee6]) 
    
        var Dee7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?) ,incdec=(?) Where id = 5", [req.body.day5,Dee7]) 
    
        var Dee8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?) ,incdec=(?) Where id = 5", [req.body.day5,Dee8]) 
    
        var Dee9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee9]) 
    
        var Dee10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee10]) 
        
        var Dee11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee11]) 
    
        var Dee12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?),incdec=(?) Where id = 5", [req.body.day5,Dee12]) 
    
        var Dee13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee13]) 
    
        var Dee14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee14]) 
    
        var Dee15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee15]) 
    
        var Dee16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?),  incdec=(?) Where id = 5", [req.body.day5,Dee16]) 
    
        var Dee17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee17]) 
    
        var Dee18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 5", [req.body.day5,Dee18]) 
     }
            return ; //return 프론트로 가던 것

    })
    
    airdata(req.body.day6,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }{
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
    
        let parseData = JSON.parse(airjson)  //json파일 파싱
        
        var Def1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def1]) // db에 넣기
    
        var Def2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def2]) 
    
        var Def3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def3]) 
    
        var Def4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?) ,incdec=(?) Where id = 6", [req.body.day6,Def4]) 
    
        var Def5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?) ,incdec=(?) Where id = 6", [req.body.day6,Def5]) 
    
        var Def6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?) ,incdec=(?) Where id = 6", [req.body.day6,Def6]) 
    
        var Def7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?) ,incdec=(?) Where id = 6", [req.body.day6,Def7]) 
    
        var Def8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?) ,incdec=(?) Where id = 6", [req.body.day6,Def8]) 
    
        var Def9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def9]) 
    
        var Def10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def10]) 
        
        var Def11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def11]) 
    
        var Def12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?),incdec=(?) Where id = 6", [req.body.day6,Def12]) 
    
        var Def13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def13]) 
    
        var Def14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def14]) 
    
        var Def15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def15]) 
    
        var Def16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?),  incdec=(?) Where id = 6", [req.body.day6,Def16]) 
    
        var Def17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def17]) 
    
        var Def18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 6", [req.body.day6,Def18])  
    }
            return ; //return 프론트로 가던 것

    })
    
    airdata(req.body.day7,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }{
            const airbuffer = fs.readFileSync('airdata-json.json')  //저장된 json파일 불러오기 (buffer)
        const airjson = airbuffer.toString()    // json파일의 buffer를 string 형식으로 변경
        
        let parseData = JSON.parse(airjson)  //json파일 파싱
    
        var Deg1 = parseData.response.body.items.item[1].incDec._text  // 제주 확진자 수
        conn.query("UPDATE 제주 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg1]) // db에 넣기
    
        var Deg2 = parseData.response.body.items.item[2].incDec._text  // 경남 확진자 수
        conn.query("UPDATE 경남 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg2]) 
    
        var Deg3 = parseData.response.body.items.item[3].incDec._text  // 경북 확진자 수
        conn.query("UPDATE 경북 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg3]) 
    
        var Deg4 = parseData.response.body.items.item[4].incDec._text  // 전남 확진자 수
        conn.query("UPDATE 전남 set date = (?) ,incdec=(?) Where id = 7", [req.body.day7,Deg4]) 
    
        var Deg5 = parseData.response.body.items.item[5].incDec._text  // 전북 확진자 수
        conn.query("UPDATE 전북 set date = (?) ,incdec=(?) Where id = 7", [req.body.day7,Deg5]) 
    
        var Deg6 = parseData.response.body.items.item[6].incDec._text  // 충남 확진자 수
        conn.query("UPDATE 충남 set date = (?) ,incdec=(?) Where id = 7", [req.body.day7,Deg6]) 
    
        var Deg7 = parseData.response.body.items.item[7].incDec._text  // 충북 확진자 수
        conn.query("UPDATE 충북 set date = (?) ,incdec=(?) Where id = 7", [req.body.day7,Deg7]) 
    
        var Deg8 = parseData.response.body.items.item[8].incDec._text  // 강원 확진자 수
        conn.query("UPDATE 강원 set date = (?) ,incdec=(?) Where id = 7", [req.body.day7,Deg8]) 
    
        var Deg9 = parseData.response.body.items.item[9].incDec._text  // 경기 확진자 수
        conn.query("UPDATE 경기 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg9]) 
    
        var Deg10 = parseData.response.body.items.item[10].incDec._text  // 세종 확진자 수
        conn.query("UPDATE 세종 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg10]) 
        
        var Deg11 = parseData.response.body.items.item[11].incDec._text  // 울산 확진자 수
        conn.query("UPDATE 울산 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg11]) 
    
        var Deg12 = parseData.response.body.items.item[12].incDec._text  // 대전 확진자 수
        conn.query("UPDATE 대전 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg12]) 
    
        var Deg13 = parseData.response.body.items.item[13].incDec._text  // 광주 확진자 수
        conn.query("UPDATE 광주 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg13]) 
    
        var Deg14 = parseData.response.body.items.item[14].incDec._text  // 인천 확진자 수
        conn.query("UPDATE 인천 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg14]) 
    
        var Deg15 = parseData.response.body.items.item[15].incDec._text  // 대구 확진자 수
        conn.query("UPDATE 대구 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg15]) 
    
        var Deg16 = parseData.response.body.items.item[16].incDec._text  // 부산 확진자 수
        conn.query("UPDATE 부산 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg16]) 
    
        var Deg17 = parseData.response.body.items.item[17].incDec._text  // 서울 확진자 수
        conn.query("UPDATE 서울 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg17]) 
    
        var Deg18 = parseData.response.body.items.item[18].incDec._text  // 전국 확진자 수
        conn.query("UPDATE 전국 set date = (?), incdec=(?) Where id = 7", [req.body.day7,Deg18]) 
     }
            return ; //return 프론트로 가던 것

    })
    
 console.log("COMPLETE : air data connect!")
})

router.post("/calldb", function(req,res){ // db에서 저장된 data 가져오기
    const cityname = req.body.city;
    conn.query("SELECT * FROM "+cityname, function(err,rows,fields){
        if(err){
            console.log("DB접속 실패");
            console.log(err);
        }else{
            console.log("DB접속 성공, 가져온 지역 : ", cityname);
            console.log(rows);
            res.send(rows)
        };
});

/* router.post("/crolling", function(req,res){ // db에서 저장된 data 가져오기
    getHtml()
        .then(html => {
            let ulList = '0';
            const $ = cheerio.load(html.data);
            var $bodyList = '0'
            if(cityname =="서울"){
                $bodyList = $("div.rss_detail>div").children("div#step_map_city1");}
            else if(cityname =="부산"){
                $bodyList = $("div").children("div#step_map_city2");}
            else if(cityname =="대구"){
                $bodyList = $("div").children("div#step_map_city3");}
            else if(cityname =="인천"){
                $bodyList = $("div").children("div#step_map_city4");}
            else if(cityname =="광주"){
                $bodyList = $("div").children("div#step_map_city5");}
            else if(cityname =="대전"){
                $bodyList = $("div").children("div#step_map_city6");}
            else if(cityname =="울산"){
                $bodyList = $("div").children("div#step_map_city7");}
            else if(cityname =="세종"){
                $bodyList = $("div").children("div#step_map_city8");}
            else if(cityname =="경기"){
                $bodyList = $("div").children("div#step_map_city9");}
            else if(cityname =="강원"){
                $bodyList = $("div").children("div#step_map_city10");}
            else if(cityname =="충북"){
                $bodyList = $("div").children("div#step_map_city11");}
            else if(cityname =="충남"){
                $bodyList = $("div").children("div#step_map_city12");}
            else if(cityname =="전북"){
                $bodyList = $("div").children("div#step_map_city13");}
            else if(cityname =="전남"){
                $bodyList = $("div").children("div#step_map_city14");}
            else if(cityname =="경북"){
                $bodyList = $("div").children("div#step_map_city15");}
            else if(cityname =="경남"){
                $bodyList = $("div").children("div#step_map_city16");}
            else if(cityname =="제주"){
                $bodyList = $("div").children("div#step_map_city17");}

            $bodyList.each(function(i, elem) {
                ulList = {
                    title: $(this).find('h3.rssd_title_1').text(),
                    status:$(this).find('h4.rssd_title_2').text(), 
                    info:$(this).find('p.rssd_descript').text() 
                }
            });
            console.log(ulList)
            return
        })

    }); */
    
});
module.exports = router;
export default router;