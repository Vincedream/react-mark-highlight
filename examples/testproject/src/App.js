import React, { Component } from 'react';
// import ReactHighMark from './mark'
import ReactHighMark from 'react-mark-highlight'
import './index.less';
import text from './text'
class App extends Component {
  render() {
    return (
      <div >
      <ReactHighMark source={text} style="diablo" />
      </div>
    );
  }
}

export default App;
