import React, {Component} from 'react'

export default class Text extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.message}</h3>
        <p>{this.props.miniMessage && this.props.miniMessage}</p>
      </div>
    )
  }
}