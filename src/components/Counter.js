import React, {Component} from 'react'

export default class Counter extends Component {

  
    constructor(props){
      super(props)
      this.state = {
        counter: 0
      }
    }
    handleIncrement = () => {
      this.setState({counter: this.state.counter + 1})
    }
    handleDecrement = () => {
      if(this.state.counter > 0) {
        this.setState({ counter: this.state.counter - 1})
      }
    }
  render() {
    return (
      <div>
        <button onClick={() => {this.handleDecrement()}}>  
          Decrement
        </button>
        <button onClick={() => {this.handleIncrement()}}>
          Increment
        </button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}