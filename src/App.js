import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';
import ArticlePart1 from './ArticlePart1';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <ArticlePart1 />
      </div>
    );
  }
}

export default App;
