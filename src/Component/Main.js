import React from 'react';
/* import './main.css'; */


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidoName:'',    //시,도의 이름을 받는 state값
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

        /* const body = {
            sidoName: this.state.sidoName		// 현재 시,도이름을 body에 넣는다.
        } */

        
        fetch('http://localhost:5000/location',{ // localhost 서버 5000번 포트의 location에게 보낸다.
            method:"post",
            headers: { 'Content-Type':  "application/json"},
            //body: JSON.stringify(body),	// json화 해버리기
        })
        .then(res => res.json())    // 서버로부터 받음
        .then(json => {
            console.log(json);      
/*          /*console.log(json.list[0].DEF_CNT);     //DEF_CNT 확진자 수
            console.log(json.list[0].ISOL_ING_CNT);    //ISOL_ING_CNT 격리중 환자 수
            console.log(json.list[0].OVER_FLOW_CNT);    //OVER_FLOW_CNT 해외유입 수
            console.log(json.list[0].LOCAL_OCC_CNT);    //LOCAL_OCC_CNT 지역발생 수 */
        });
    }

    render() {
        return (
            <div className="main">
                <h1>지역</h1>
                <form>
                    <input placeholder="측정장소" name="sidoName" onChange={this.onChange}/>
                    <button onClick={this.search}>Search</button>
                </form>
            </div>
        );
    }
}


export default Main;