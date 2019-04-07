import React, {Component} from 'react';

class Counter extends Component{
    // state = {
    //     value: this.props.counter.value,
    //     //imageUrl: 'https://picsum.photos/200',
    //     tags: ['one','two','three'],
    // };
    
    style = {
        fontSize: 20
    }
    
    // constructor(){
    //     super();
    //     this.handlerIncrement = this.handlerIncrement.bind(this);
    // }
    
    // handlerIncrement = (id) => {  // Changing the function to a arrow function, 'this' is inherited
    //     console.log("Increment !!!", id);
    //     this.setState({ value: this.state.value + 1});

    // }
    
    render(){
        console.log(this.props);
        return(
            <div>
              {this.props.children}
              <span style={ this.style } className={this.getBadgeClasses()}>{this.formatCount()}</span>  {/* apply class-name and style with an object */}
              <button onClick={ () => this.props.onIncrement(this.props.counter) } style={ { fontSize: 30} } className="btn btn-secundary btn-sm">Increment</button>  {/* apply class-name and style inline */}
              <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">delete</button>

            </div>
        );
    }
    
    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>
    //     return this.state.tags.map( tag => <li key={tag}>{tag}</li>)
    // }
    
    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    
    formatCount(){
        const { value } = this.props.counter;  // object destructuring
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;