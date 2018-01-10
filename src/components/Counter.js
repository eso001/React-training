import React, {Component} from 'react'

export default class Counter extends Component {
    constructor(props){
      super(props)
      //you can initialize state here
    }
  render() {
    return (
      <div>
        {/*Create an event listener and attach it to this button's onClick function}*/}
        <button onClick={}>
          Increment
        </button>
        {/*display the counter in this paragraph tag}*/}
        <p></p>
      </div>
    )
  }
}