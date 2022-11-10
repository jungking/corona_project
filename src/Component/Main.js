import React from 'react';
import moment from 'moment';
import Chart from './Chart';

//var m = moment(); // m 포멧
var m1 = moment().format('YYYYMMDD');  var m11 = moment().format('YYYY-MM-DD');//12시 지나면 당연히 에러나지.. 값이 없는데
var m2 = moment().subtract(1,'d').format('YYYYMMDD');   var m22 = moment().subtract(1,'d').format('YYYY-MM-DD'); 
var m3 = moment().subtract(2,'d').format('YYYYMMDD');   var m33 = moment().subtract(2,'d').format('YYYY-MM-DD'); 
var m4 = moment().subtract(3,'d').format('YYYYMMDD');   var m44 = moment().subtract(3,'d').format('YYYY-MM-DD'); 
var m5 = moment().subtract(4,'d').format('YYYYMMDD');   var m55 = moment().subtract(4,'d').format('YYYY-MM-DD'); 
var m6 = moment().subtract(5,'d').format('YYYYMMDD');   var m66 = moment().subtract(5,'d').format('YYYY-MM-DD'); 
var m7 = moment().subtract(6,'d').format('YYYYMMDD');   var m77 = moment().subtract(6,'d').format('YYYY-MM-DD'); 

//var m1 = '20210203'
var momen = moment().format('YYYY-MM-DD');
/* import './main.css'; */


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day1:m1,    //날짜 받는 state값day 에 오늘날짜 m 입력
            day2:m2,
            day3:m3,
            day4:m4,
            day5:m5,
            day6:m6,
            day7:m7,
            city : "지역 명",
            data1:'-',data2:'-',data3:'-',data4:'-',data5:'-',data6:'-',data7:'-',
           /*  info : 'null '*/
        };
    }

     onChange = (e) =>{ //최초 실행시 클릭 함수
        this.setState({
            [e.target.name]: e.target.value ,   //  input창 입력값을 바로바로 state값 초기화
        })
        //console.log(this.state.calldb);  // 타이핑 마다 console.log
    } 

    onclick = (e) => { //지역 명 넣고 클릭 함수
        e.preventDefault();
        const body = {
            city : this.state.city,
        }
        fetch('https://jungking.herokuapp.com/calldb',{
            method: "post", //통신방법 post
             headers : {
                "content-type" : "application/json",
                "Accept" : 'application/json'
            }, 
            body:JSON.stringify(body),
        })
        .then((res)=> res.json())
        .then((json) => {
            //console.log("선택한 지역의 확진자 수 : ",json[1].incdec);   //incdec 출력
            this.setState({
              day : json[0].date,
              data1: json[0].incdec,
              data2: json[1].incdec,
              data3: json[2].incdec,
              data4: json[3].incdec,
              data5: json[4].incdec,
              data6: json[5].incdec,
              data7: json[6].incdec
            });
        })
    }   

    search=(e)=>{       //최초실행시 클릭 함수 클릭 시 실행되는 함수 , 추후에 클릭 없이 search만 실행 할 것.
        e.preventDefault();

         const body = {
            day1: this.state.day1,		// 현재 날짜을 body에 넣는다.
            day2: this.state.day2,
            day3: this.state.day3,
            day4: this.state.day4,
            day5: this.state.day5,
            day6: this.state.day6,
            day7: this.state.day7,
         }
        fetch('https://jungking.herokuapp.com/location',{ // localhost 서버 5000번 포트의 location에게 보낸다.
        //http://jungking.herokuapp.com
            method:"post",
            headers: { "Content-Type":  "application/json" },
            //mode : 'no-cors',
            body: JSON.stringify(body),	// json화 해버리기
        })
        .then(res => res.json())    // 서버로부터 받음
        .then(json => {
            console.log("DB에 저장된 API 데이터 : ",json.response.body.items);      
        });
    }
    
    render() {
        return (
            <div className="main">
                <h1 className = "title">CORONA PROJECT</h1>
                <form>
                    <button className = "btn-1" onClick = {this.search}> 최초 실행 시 클릭하여 DB에 정보 저장</button>
                    <h1>저장된 정보의 최신 날짜는 ({momen})</h1><br/>
                    <h1>지역 : </h1>
                    <h4>제주, 경남, 경북, 전남, 전북, 충남, 충북, 강원 ,경기 <br/> 세종, 울산, 대전 광주, 인천, 대구, 부산, 서울, 전국</h4><br/>
                    <input className="textbox" placeholder={this.state.city} name='city' onChange={this.onChange} />  
                    <button className = "btn-2" onClick={this.onclick}>Search</button> 
                    <h2>{this.state.city}의 {m11} 확진자 수 는 : {this.state.data1}명</h2>
                    <h2>{this.state.city}의 {m22} 확진자 수 는 : {this.state.data2}명</h2>
                    <h2>{this.state.city}의 {m33} 확진자 수 는 : {this.state.data3}명</h2>
                    <h2>{this.state.city}의 {m44} 확진자 수 는 : {this.state.data4}명</h2>
                    <h2>{this.state.city}의 {m55} 확진자 수 는 : {this.state.data5}명</h2>
                    <h2>{this.state.city}의 {m66} 확진자 수 는 : {this.state.data6}명</h2>
                    <h2>{this.state.city}의 {m77} 확진자 수 는 : {this.state.data7}명</h2>     
                    {/* <h2>{this.state.city}의 사회적 거리두기 단계 : {this.state.info}명</h2> */}
                    <Chart day1 = {this.state.day1} data1 = {this.state.data1}
                           day2 = {this.state.day2} data2 = {this.state.data2}
                           day3 = {this.state.day3} data3 = {this.state.data3} 
                           day4 = {this.state.day4} data4 = {this.state.data4} 
                           day5 = {this.state.day5} data5 = {this.state.data5} 
                           day6 = {this.state.day6} data6 = {this.state.data6} 
                           day7 = {this.state.day7} data7 = {this.state.data7} 
                        >
                    </Chart>
                    
                </form>



                    
            
            </div>
            
        );
    }
}


export default Main;