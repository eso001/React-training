import React, {Component} from 'react'
import Header from './Header'
import Text from './Text'
import Counter from './Counter'
import Timer from './Timer'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Text message="Whats up world" miniMessage="this is a mini message"/>
        </div>
        <div className="content">
          <Counter />
        </div>
        <div className="content">
          <Timer time={3}/>
        </div>
      </div>
    )
  }
}