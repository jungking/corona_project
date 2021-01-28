import React from 'react';
import moment from 'moment';

var m = moment().format('YYYYMMDD'); //오늘 날짜

/* import './main.css'; */


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day:m,    //날짜 받는 state값day 에 오늘날짜 m 입력
            city : '지역 명'
        };
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value ,   //  input창 입력값을 바로바로 state값 초기화
        })
        console.log(this.state.location);
    }

    search=(e)=>{       //input창에 지역 쓰고 버튼 누르면 발동되는 함수
        e.preventDefault();

         const body = {
            day: this.state.day,		// 현재 시,도이름을 body에 넣는다.
            city : this.state.city
         }

        
        fetch('http://localhost:5000/location',{ // localhost 서버 5000번 포트의 location에게 보낸다.
            method:"post",
            headers: { "Content-Type":  "application/json" },
           // mode : 'no-cors',
            body: JSON.stringify(body),	// json화 해버리기
            
        })
        .then(res => res.json())    // 서버로부터 받음
        .then(json => {
            console.log(json);      
            
            console.log('금일 확진자 수 : ', json.response.body.items.item[18].incDec._text);     //금일 확진자 수
            const incdec = json.response.body.items.item[18].incDec._text
            console.log(incdec);
            
            //console.log(json.list[0].ISOL_ING_CNT);    //현재 확진자 환자 수
            //console.log(json.list[0].OVER_FLOW_CNT);    //OVER_FLOW_CNT 해외유입 수
            //console.log(json.list[0].LOCAL_OCC_CNT);    //LOCAL_OCC_CNT 지역발생 수 
        });
    }
    
    render() {
        return (
            <div className="main">
                <h1>CORONA PROJECTG</h1>
                
                <form>
                    
                    <button onClick={this.search}>최초 실행 시 클릭하여 정보 저장하기</button>
                    <h1>저장된 정보의 날짜는 ({m})</h1>

                    <h1>지역</h1>
                    <h4>제주, 경남, 경북, 전남, 전북, 충남, 충북, 강원 ,경기</h4><h4> 세종, 울산, 대전 광주, 인천, 대구, 부산, 서울, 전국</h4>
                

                    <input placeholder={this.state.city} name="city" onChange={this.onChange}/>  
                    <button onClick={this.search}>Search</button>
                     
                </form>
            </div>
            
        );
    }
}


export default Main;