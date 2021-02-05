import React,{Component} from 'react';
import {LineSeries, XYPlot,HorizontalGridLines,VerticalGridLines, XAxis, YAxis} from "react-vis";
import './Chart.css';

class Chart extends Component {
    render(){
        const dummyDate = [
            {x:this.props.day1,y:this.props.data1},
            {x:this.props.day2,y:this.props.data2},
            {x:this.props.day3,y:this.props.data3},
            {x:this.props.day4,y:this.props.data4},
            {x:this.props.day5,y:this.props.data5},
            {x:this.props.day6,y:this.props.data6},
            {x:this.props.day7,y:this.props.data7}
        ];

        return(
            <div className = "Chart">
                확진자 수 그래프
                <XYPlot
                    xType={"ordinal"}
                    width={850}
                    height={500}>
                    <LineSeries
                        data={dummyDate}
                        strokeStyle={"solid"}
                        stroke={"red"}
                        />
                    <HorizontalGridLines/>
                    <VerticalGridLines/>
                    <XAxis/>
                    <YAxis/>
                </XYPlot>

            </div>
        )
    }
}


export default Chart;