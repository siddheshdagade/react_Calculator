import React, {Component} from "react";
import { numbers, actions } from './data/calcData';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      // history: [],
      input: "",
      currentAction: ''
    }
    this.evaluate = this.evaluate.bind(this)
  }

  numberHandler(number) {
    this.setState({ input: this.state.input + number })
  }

  actionHandler(action) {
    let input = this.state.input,
        lastChar = input ? input.charAt(input.length - 1) : null;
    // input should exist and previously entered value should not be an action
    if(input && !actions.includes(lastChar)) {
      this.setState({ currentAction: action, 
                      input: `${input}${action}`
                    })
    }
  }
  
  evaluate() {
    try {
      // console.log('this.state.input', this.state.input)
      this.setState({ input: eval(this.state.input).toString() })
    }
    catch (err) {
      // console.log('there was an err', err)
    }
  }

  render(){
    console.log('this.state', this.state);

    return (
      <div className="App"> 
        <input type="text" value={this.state.input} readOnly></input> 
        {
          numbers.map(val => <button key={val} onClick={() => this.numberHandler(val)}>{val}</button>)
        }
        {
          actions.map(action => <button key={action} onClick={() => this.actionHandler(action)}>{action}</button>)
        }
        <button onClick={this.evaluate}>=</button>
      </div>
    );
  }
}

export default App;