import React, { Component } from 'react';
import Header from './components/header'
import Control from './components/control';
import FrameContainer from './components/frameContainer';
import Canvas from './components/canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />  
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
