import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      history: [],
      inputvalue: "",
      inputvalue1: "1",
      inputvalue2: "2",
      inputvalue3: "3",
      inputvalue4: "4",
      inputvalue5: "5",
      inputvalue6: "6",
      inputvalue7: "7",
      inputvalue8: "8",
      inputvalue9: "9",
      inputvalue0: "0",
      inputvaluePlus: "+",
      inputvalueMinus: "-",
      inputvalueMulti: "*",
      inputvalueDiv: "/"
      
    }
    
    this.buttonPress1 = this.buttonPress1.bind(this);
    this.buttonPress2 = this.buttonPress2.bind(this);
    this.buttonPress3 = this.buttonPress3.bind(this);
    this.buttonPress4 = this.buttonPress4.bind(this);
    this.buttonPress5 = this.buttonPress5.bind(this);
    this.buttonPress6 = this.buttonPress6.bind(this);
    this.buttonPress7 = this.buttonPress7.bind(this);
    this.buttonPress8 = this.buttonPress8.bind(this);
    this.buttonPress9 = this.buttonPress9.bind(this);
    this.buttonPress10 = this.buttonPress10.bind(this);
    this.buttonPressplus = this.buttonPressplus.bind(this);
    this.buttonPressAns = this.buttonPressAns.bind(this);
    this.buttonPressminus = this.buttonPressminus.bind(this);
    this.buttonPressmulti = this.buttonPressmulti.bind(this);
    this.buttonPressdiv = this.buttonPressdiv.bind(this);
    this.buttonPressClear = this.buttonPressClear.bind(this);
    this.buttonPressC = this.buttonPressC.bind(this);
    this.buttonPressHist = this.buttonPressHist.bind(this);
  }
  buttonPress1(){
    console.log(this.state.value);
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue1
    })
  }
  buttonPress2(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue2
    })
  }
  buttonPress3(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue3
    })
  }
  buttonPress4(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue4
    })
  }
  buttonPress5(){
    console.log(this.state.value);
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue5
    })
  }
  buttonPress6(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue6
    })
  }
  buttonPress7(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue7
    })
  }
  buttonPress8(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue8
    })
  }
  buttonPress9(){
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue9
    })
  }
  buttonPress10(){
   
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvalue0
    })
  }
  buttonPressplus(){
   
    this.setState({
    
      inputvalue: this.state.inputvalue +this.state.inputvaluePlus
    })
  }


  buttonPressAns(){
    var newArr = [...this.state.history,{value1 : this.state.inputvalue, value2: eval(this.state.inputvalue)}]
    console.log(newArr);
    this.setState({
      inputvalue: eval(this.state.inputvalue),
      history: newArr
    })
  }
  buttonPressminus(){
    this.setState({
      inputvalue: this.state.inputvalue + this.state.inputvalueMinus
    })
  }
  buttonPressmulti(){
    this.setState({
      inputvalue: this.state.inputvalue + this.state.inputvalueMulti
    })
  }
  buttonPressdiv(){
    this.setState({
      inputvalue: this.state.inputvalue + this.state.inputvalueDiv
    })
  }
  buttonPressClear(){
    this.setState({
      inputvalue: ""
    })
  }
  buttonPressC(){
    this.setState({
      inputvalue: this.state.inputvalue.slice(0,this.state.inputvalue.length-1)
    })
  }
  buttonPressHist(){
    this.setState({
      inputvalue: this.state.history.map( value => { return value.value1+"="+ value.value2})
    })
  }
  render(){
  return (
    <div className="App">
      <div className = "input">
         <input type="text" value={this.state.inputvalue}></input> 
        {/* <p>{this.state.inputvalue}</p> */}
      </div>
      <div className= "buttons">
        <div className = "buttonGrp1">
        <button type="button" value={this.state.inputvalue1} onClick= {this.buttonPress1}>1</button>
        <button type="button" value={this.state.inputvalue2} onClick= {this.buttonPress2}>2</button>
        <button type="button" value={this.state.inputvalue3} onClick= {this.buttonPress3}>3</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressAns}>=</button>
        </div>
        <div className = "buttonGrp2">
        <button type="button" value={this.state.inputvalue4} onClick= {this.buttonPress4}>4</button>
        <button type="button" value={this.state.inputvalue5} onClick= {this.buttonPress5}>5</button>
        <button type="button" value={this.state.inputvalue6} onClick= {this.buttonPress6}>6</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressplus}>+</button>
        </div>
        <div className = "buttonGrp3">
        <button type="button" value={this.state.inputvalue7} onClick= {this.buttonPress7}>7</button>
        <button type="button" value={this.state.inputvalue8} onClick= {this.buttonPress8}>8</button>
        <button type="button" value={this.state.inputvalue9} onClick= {this.buttonPress9}>9</button>
        <button type="button" value={this.state.inputvalue8} onClick= {this.buttonPressminus}>-</button>
        </div>
        <div className = "buttonGrp4">
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressmulti}>*</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPress10}>0</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressdiv}>/</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressC}>C</button>
        </div>
        <div className = "buttonGrp5">
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressClear}>Clear</button>
        <button type="button" value={this.state.inputvalue0} onClick= {this.buttonPressHist}>Hist</button>
        </div>
        
        
      </div>
    </div>
  );
}
}

export default App;