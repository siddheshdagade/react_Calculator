import React, {Component, useState} from "react";
import { numbers, actions } from './data/calcData';
import './App.css';
import moment from "moment";
import { CSSTransition, TransitionGroup } from "react-transition-group";




class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      history: [],
      input: "",
      currentAction: '',
      inputValue : "",
      display: true
    }
    this.evaluate = this.evaluate.bind(this)
    this.history = this.history.bind(this)
    this.Clear = this.Clear.bind(this)
    this.Move = this.Move.bind(this)
  }

  numberHandler(number) {
    this.setState({ input: this.state.input + number })
  }

  actionHandler(action) {
    let input = this.state.input,
        lastChar = input ? input.charAt(input.length - 1) : null;
    // input should exist and previously entered value should not be an action
    if(input && !actions.includes(lastChar) || lastChar == '0') {
      this.setState({ currentAction: action, 
                      input: `${input}${action}`
                    })
    }
  }
  
  evaluate() {
    let input = this.state.input,
    lastchar = input ? input.charAt(input.length - 1): null;
    if(!actions.includes(lastchar) || lastchar=='0'){
    var a = new Date();
    // var date = a.getFullYear()+"/"+a.getMonth()+"/"+a.getDate();
    var date = moment().format("MMM Do YY"); //use moment.js library for date multiple formats
    console.log(date)
    var newArr = [...this.state.history, {value1 : this.state.input, value2: eval(this.state.input),date: date }]
    console.log(newArr)
    try {
      // console.log('this.state.input', this.state.input)
        this.setState({ input: eval(this.state.input).toString(),
        history: newArr
       })
      
    }
    catch (err) {
      // console.log('there was an err', err)
    }
  }
  }
  history(){
    // console.log(this.state.history)
    //   this.setState({
    //     inputValue : this.state.history.map( value => {
    //     return value.value1+"="+value.value2+"("+value.date+")"
    //     })
    //  })
    let arr = this.state.display 
    console.log(arr)
    arr = !arr
    this.setState({display: arr})
    //this all statements in history function are use to change css for display history
  }
  Clear(){
    this.setState({
      input: ""
    })
  }
  Move(value1,i){
    console.log(value1,i);
    let a = value1;
    console.log(a);
    this.setState({
      input:a
    })
  }


  render(){
    console.log('this.state', this.state);

    return (
    <div className="App"> 
      
      <div className ="buttonGrp">
        <input type="text" value={this.state.input} readOnly></input>
        {
          numbers.map(val => <button key={val} onClick={() => this.numberHandler(val)}>{val}</button>)
        }
        {
          actions.map(action => <button key={action} onClick={() => this.actionHandler(action)}>{action}</button>)
        }
        <button onClick={this.evaluate}>=</button>
        <button onClick= {this.history}>Hist</button>
        <button onClick={this.Clear}>Clear</button>
      </div>
      <div>
        <TransitionGroup>
      {
        
        this.state.history.map( (hist,index) => { return <CSSTransition  
        key={index}
        in={true} 
        timeout={2500} 
        classNames="alert">
        <p className={this.state.display? "hisP":"hisN"} onClick ={() => this.Move(hist.value1,index)} key={hist.value2}>{hist.value1}={hist.value2} ({hist.date})</p></CSSTransition>} )
        //in above code flipmove(transition styling) is not working.
      }
        </TransitionGroup>
      </div>
      
    </div>
    );
  }
}

export default App;