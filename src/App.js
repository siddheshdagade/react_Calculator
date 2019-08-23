import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      history: [],
      inputvalue: "",
    }
  }
  buttonPress1 =(e)=>{
    console.log(e.target.value);
    this.setState({
     inputvalue: this.state.inputvalue + e.target.value
    })
  }


  buttonPressAns =()=>{
    var newArr = [...this.state.history,{value1 : this.state.inputvalue, value2: eval(this.state.inputvalue)}]
    console.log(newArr);
    this.setState({
      inputvalue: eval(this.state.inputvalue),
      history: newArr
    })
  }
  
  buttonPressClear =()=>{
    this.setState({
      inputvalue: ""
    })
  }
  buttonPressC =()=>{
    this.setState({
      inputvalue: this.state.inputvalue.slice(0,this.state.inputvalue.length-1)
    })
  }
  buttonPressHist =()=>{
    this.setState({
      inputvalue: this.state.history.map( value => { return value.value1+"="+ value.value2})
    })
  }
  render(){
  return (
    <div className="App">
      <div className = "input">
         <input type="text" value={this.state.inputvalue}></input> 
      </div>
      <div className= "buttons">
        <div className = "buttonGrp1">
        <button type="button" value = "1" onClick= {this.buttonPress1}>1</button>
        <button type="button" value = "2" onClick= {this.buttonPress1}>2</button>
        <button type="button" value = "3" onClick= {this.buttonPress1}>3</button>
        <button type="button"  onClick= {this.buttonPressAns}>=</button>
        </div>
        <div className = "buttonGrp2">
        <button type="button" value = "4" onClick= {this.buttonPress1}>4</button>
        <button type="button" value = "5" onClick= {this.buttonPress1}>5</button>
        <button type="button" value = "6" onClick= {this.buttonPress1}>6</button>
        <button type="button" value = "+" onClick= {this.buttonPress1}>+</button>
        </div>
        <div className = "buttonGrp3">
        <button type="button" value = "7" onClick= {this.buttonPress1}>7</button>
        <button type="button" value = "8" onClick= {this.buttonPress1}>8</button>
        <button type="button" value = "9" onClick= {this.buttonPress1}>9</button>
        <button type="button" value = "-" onClick= {this.buttonPress1}>-</button>
        </div>
        <div className = "buttonGrp4">
        <button type="button" value = "*" onClick= {this.buttonPress1}>*</button>
        <button type="button" value = "0" onClick= {this.buttonPress1}>0</button>
        <button type="button" value = "/" onClick= {this.buttonPress1}>/</button>
        <button type="button"  onClick= {this.buttonPressC}>C</button>
        </div>
        <div className = "buttonGrp5">
        <button type="button"  onClick= {this.buttonPressClear}>Clear</button>
        <button type="button"  onClick= {this.buttonPressHist}>Hist</button>
        </div>
        
      </div>
    </div>
  );
}
}export default App;