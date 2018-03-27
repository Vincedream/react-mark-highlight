import React, { Component } from 'react';
// import ReactHighMark from './mark'
import ReactHighMark from 'react-mark-highlight'
// import './index.less';

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
      <div >
      TEST
      <textarea value={this.state.code} onChange={e => this.handleInput('code',e)}></textarea>
      <ReactHighMark source={this.state.code}  />
        {/* <ReactHighMark source={this.state.code} /> */}
      </div>
    );
  }
}

export default App;
