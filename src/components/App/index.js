import React, { Component } from 'react';
import Wrapper from './Wrapper'
import Board from '../Board'

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Board />
      </Wrapper>
    );
  }
}

export default App;
