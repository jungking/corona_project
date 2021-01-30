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



router.post('/location',function (req,res){ ///프론트에서 fetch로 요청한 location 친구

    console.log("COMPLETE : server connect")    //확인용
    airdata(req.body.day,(error, {air}={})=>{  //airdata함수에 fetch해준 req->body->day를 보내준다
        if(error){      //에러 발생시
            console.log("ERROR : server, index.js error");
            return res.send({error})
        }
        return res.send(air);   // airdata에서 받은 객체를 프론틀앤드로 보내준다. 
    })
    
    const Dec = res.;
    conn.query("UPDATE jeju set incDec=(?) Where number = 1", [Dec])
})

module.exports = router;