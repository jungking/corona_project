import React,{Component} from 'react';
import {XYPlot} from "react-vis";

class Chart extends Component {
    render(){
        return(
            <div className = "Chart">
                <XYPlot
                    width={500}
                    height={350}> 
                </XYPlot>

            </div>
        )
    }
}


export default Chart;