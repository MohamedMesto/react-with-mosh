import React, {Component} from 'react';
import Counter from './counter'

class Counters extends Component{
    state = {
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
    }
    
    render() {
        return(
            <div>
                <button 
                  onClick={ () => this.handleReset() }
                  className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map( counter => 
                    <Counter 
                      key={counter.id} 
                      id={counter.id}
                      counter={counter}
                      onIncrement={this.handleIncrement}
                      onDelete={this.handleDelete}>
                        <h4>Counter #{counter.id}, initial value: {counter.value}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;