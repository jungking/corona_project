import React,{Component} from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

var m1 = moment().format('MM월DD일'); 
var m2 = moment().subtract(1,'d').format('MM월DD일'); 
var m3 = moment().subtract(2,'d').format('MM월DD일'); 
var m4 = moment().subtract(3,'d').format('MM월D일'); 
var m5 = moment().subtract(4,'d').format('MM월DD일'); 
var m6 = moment().subtract(5,'d').format('MM월DD일'); 
var m7 = moment().subtract(6,'d').format('MM월DD일'); 

const options = {
    legend:{
        display:true,  //label 숨기기
    },
    scalse:{
        yAxes:[{
            ticks: {
                beginAtzero:true
                
            }
        }]
    },
    
    maintainAspectRatio: true // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    
}

class Chart extends Component {
    render(){
        const Data = {
            labels : [m1,m2,m3,m4,m5,m6,m7],
            datasets : [
                {
                    label:'확진자 수',
                    backgroundColor: 'rgba(255,99,132,1.0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.5)',
                    hoverBorderColor: 'rgba(255,99,132,0.5)',
                    data: [this.props.data1,this.props.data2,this.props.data3,this.props.data4,this.props.data5,this.props.data6,this.props.data7]
                }
            ]
        }
        return(
            <Bar
            data={Data}
            width={300}
            height={200}
            options={options}
            />
        );
    }
}
export default Chart;
