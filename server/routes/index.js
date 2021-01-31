const bodyParser = require('body-parser');
const { query } = require('express');
const express = require('express');
const airdata = require('./airdata'); //여기서 만들어논 함수를 사용할거다
const router = express.Router();
const mysql = require('mysql');

router.use(bodyParser.urlencoded({extended: true}))

const conn = mysql.createConnection({     // mysql db 커넥션 생성
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'kh12241224',
    database : 'city'
});

conn.connect()  //db 연결
var ai = 0

router.post('/location',function (req,res){ ///프론트에서 fetch로 요청한 location 친구

    console.log("COMPLETE : server connect")    //확인용
    airdata(req.body.day,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }
            //res.send(air)
            //return res.send(air);   // airdata에서 받은 객체를 프론틀앤드로 보내준다. 
            JSON.stringify(air)
            //ai = air  //전역변수 ai에 air 낚아채기
            
            //console.log("ai =", ai)
            return ai = air //return 프론트로 가던 것

    })
    
    console.log("ai =", ai)
    //json.response.body.items.item[18].incDec._text     //금일 확진자 수
    
    //const Dec = ai.response.body.items.item[1]._text //body.items.item[18].incDec._text
    //console.log(Dec)
    //conn.query("UPDATE jeju set incDec=(?) Where number = 1", [Dec]) // db에 넣기

     
})




module.exports = router;