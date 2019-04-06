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
    
    handleDelete = (counterId) => {
        console.log("Event handler called", counterId);
        const counters = this.state.counters.filter( count => count.id !== counterId);
        this.setState({ counters });
    };
    
    render() {
        return(
            <div>
                {this.state.counters.map( counter => 
                    <Counter 
                      key={counter.id} 
                      id={counter.id}
                      counter={counter}
                      onDelete={this.handleDelete}>
                        <h4>Counter #{counter.id}, initial value: {counter.value}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;