import { Component } from "react";
import "./index.css";

class EvenOddApp extends Component{
        state={count:0}
        onIncrement=()=>{
            const randomnumber=Math.ceil(Math.random()*100)
            this.setState(preVal=>({
                count:preVal.count+randomnumber
            }))
        }
        render(){
            const {count}=this.state;
            const isEven=count%2===0

            return(
                <div className="app-container">
                    <div className="card-container">
                        <h1 className="count-heading"> Count {count}</h1>
                        <p className="count-type">
                            Count is {isEven?'Even':'Odd'}
                        </p>
                        <button className="button" type="button" onClick={this.onIncrement}>Increment</button>
                        <p className="description">*Increase By Random Number Between 0 to 100</p>
                    </div>
                </div>
            )
        }

}

export default EvenOddApp