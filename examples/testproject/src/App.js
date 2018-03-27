import React, { Component } from 'react';
import ReactHighMark from './src/index'
import logo from './logo.svg';
import '../src/index.less';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      code: ''
    }
  }
  handleInput(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <textarea value={this.state.code} onChange={e => this.handleInput('code',e)}></textarea>
        <ReactHighMark source={this.state.code} />
      </div>
    );
  }
}

export default App;
