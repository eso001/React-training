import React, {Component} from 'react'
import Header from './Header'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          Text Component
        </div>
        <div className="content">
          Counter Component
        </div>
        <div className="content">
          Timer Component
        </div>
      </div>
    )
  }
}