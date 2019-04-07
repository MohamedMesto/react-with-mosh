import React, { Component } from 'react';
import NavBar from './components/navBar'
import Counters from './components/counters'
import GF from './game/game'
import './App.css';

class App extends Component {
  state = {
    game: new GF(),
      counters: [
              { id: 1, value: 3 },
              { id: 2, value: 0 },
              { id: 3, value: 1 },
              { id: 4, value: 0 },
          ]
  };
  
  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
  }
  
  handleDelete = (counterId) => {
      console.log("Event handler called", counterId);
      const counters = this.state.counters.filter( count => count.id !== counterId);
      this.setState({ counters });
  };
  
  handleReset = () => {
      console.log("handleReset");
      const counters = this.state.counters.map(counter => {
         counter.value = 0;
         return counter;
      });
      this.setState({ counters });
  };
  
  handleStart = () => {
    this.state.game.start();
  };
  
  handleStop = () => {
    this.state.game.stop();
  };
  
  render() {
    return (
      <React.Fragment>
        <NavBar 
          onStart={this.handleStart} 
          onStop={this.handleStop}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete} 
          onReset={this.handleReset} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
