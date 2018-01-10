import React, {Component} from 'react'

let timer
export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 10,
      running: false,
      url: ''
    }
  }
  decrement = () => {
    if(this.state.timer === 0) {
      fetch('https://picsum.photos/800/500/?random')
      .then(function(response) {
        let reader = response.body.getReader()
      return new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                  controller.close();
                  return;
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        }  
      })
    })
    .then(stream => new Response(stream))
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => this.setState({url: url}))
      return
    }
    this.setState({
      timer: this.state.timer - 1
    })
  }
  handlePlay = () => {
    if(this.state.running) {
      clearInterval(timer)  
    } else {
      timer = setInterval(this.decrement, 1000)      
    }
    this.setState({
      running: !this.state.running
    })
  }
  componentDidMount() {
    if(this.props.time && this.props.time !== this.state.timer) {
      this.setState({timer: this.props.time})
    }
    timer = setInterval(this.decrement, 1000)
    this.setState({running: true})
    
  }
  componentWillUnmount(){
    clearInterval(timer)
  }

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <button onClick={()=>{this.handlePlay()}} >{this.state.running ? "Pause" : "Play"}</button>
        <p>{this.state.timer}</p>
        {this.state.url ? <img src={this.state.url} /> : null }
      </div>
    )
  }
}