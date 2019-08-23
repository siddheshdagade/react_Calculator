import React, {Component} from "react";
import './App.css';

const numbers = Array(9).fill(0).map( (e,i) => {return i+1 } )
const actions = ['/', '*', '-', '+']
const final = [ {value: "=" , event: "{this.buttonPressAns}"},{value:"Clear", event: "{this.buttonPressClear}"},{value: "C",event:"{this.buttonPressC}"}  ]

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
          {
             numbers.map( (item) => {
               return <button value = {item} onClick={this.buttonPress1}>{item}</button>
             } )
          }
        
      </div>
      <div className="buttonsAction">
            {
              actions.map( (act)=> {
                return <button value = {act} onClick = {this.buttonPress1}>{act}</button>
              } )
            }
      </div>
      <div className = "buttonAns"> 
        <button type="button"  onClick= {this.buttonPressClear}>Clear</button>
        <button type="button"  onClick= {this.buttonPressHist}>Hist</button>
        <button type="button"  onClick= {this.buttonPressAns}>=</button>
      </div>
    </div>
  );
}
}export default App;