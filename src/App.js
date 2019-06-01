import React, { Component } from 'react';
import Control from './components/control';
import FrameContainer from './components/frameContainer';
import Canvas from './components/canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Code-Jam Piskel-clone</h2>
          </header>
        <main>
          <section>
            <Control />
          </section>
          <section>
            <FrameContainer />
          </section>
          <section>
            <Canvas />
          </section>
          <section>4</section>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
