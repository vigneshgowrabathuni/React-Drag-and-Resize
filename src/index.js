import React, { Component } from 'react';
import { render } from 'react-dom';
import DragResize from './DragResize';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <DragResize />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
