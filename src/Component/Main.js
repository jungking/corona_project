import React from 'react';
import moment from 'moment';


//var m = moment(); // m 포멧
//var m1 = moment().format('YYYYMMDD');  //12시 지나면 당연히 에러나지.. 값이 없는데
var m1 = '20210203'
var m2 = moment().format('YYYY-MM-DD');
/* import './main.css'; */


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day:m1,    //날짜 받는 state값day 에 오늘날짜 m 입력
            city : "지역 명",
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
        fetch('http://localhost:5000/calldb',{
            method: "post", //통신방법 post
             headers : {
                "content-type" : "application/json",
                "Accept" : 'application/json'
            }, 
            body:JSON.stringify(body),
            
        })
        .then((res)=> res.json())
        .then((json) => {
            console.log("선택한 지역의 확진자 수 : ",json.incdec);   //incdec 출력
            this.setState({
              data: json.incdec
        
            });
        });
    }   

    search=(e)=>{       //최초실행시 클릭 함수 클릭 시 실행되는 함수 , 추후에 클릭 없이 search만 실행 할 것.
        e.preventDefault();

         const body = {
            day: this.state.day,		// 현재 날짜을 body에 넣는다.
         }

        
        fetch('http://localhost:5000/location',{ // localhost 서버 5000번 포트의 location에게 보낸다.
            method:"post",
            headers: { "Content-Type":  "application/json" },
            //mode : 'no-cors',
            body: JSON.stringify(body),	// json화 해버리기
            
            
        })
        .then(res => res.json())    // 서버로부터 받음
        .then(json => {
            console.log("DB에 저장된 API 데이터(추후 삭제 예정) : ",json);      
        });
    }
    
    render() {
        return (
            <div className="main">
                <h1>CORONA PROJECT</h1>
                
                <form>
                    <br/>
                    <button className = "btn-1" onClick = {this.search}> 최초 실행 시 클릭하여 DB에 정보 저장</button>
                    <br/>
                    <h1>저장된 정보의 날짜는 ({m2})</h1>
                    <br/>

                    <h1>지역 : </h1>
                    <h4>제주, 경남, 경북, 전남, 전북, 충남, 충북, 강원 ,경기 <br/> 세종, 울산, 대전 광주, 인천, 대구, 부산, 서울, 전국</h4>
                    
                    <input placeholder={this.state.city} name='city'  onChange={this.onChange} />  
                    <button className = "btn-2" onClick={this.onclick}>Search</button>  <br/>
                    <h1>{this.state.city}의 {m2} 확진자 수 는 : {this.state.data}</h1>                 </form>
            </div>
            
        );
    }
}


export default Main;