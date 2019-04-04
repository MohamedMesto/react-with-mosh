import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['one','two','three'],
    };
    
    style = {
        fontSize: 20
    }
    
    // constructor(){
    //     super();
    //     this.handlerIncrement = this.handlerIncrement.bind(this);
    // }
    
    handlerIncrement = (id) => {  // Changing the function to a arrow function, 'this' is inherited
        console.log("Increment !!!", id);
        this.setState({ count: this.state.count + 1});

    }
    
    render(){

        return(
            <div>
              <span style={ this.style } className={this.getBadgeClasses()}>{this.formatCount()}</span>  {/* apply class-name and style with an object */}
              <button onClick={ () => this.handlerIncrement({ id: 2 }) } style={ { fontSize: 30} } className="btn btn-secundary btn-sm">Increment</button>  {/* apply class-name and style inline */}
              <img src={this.state.imageUrl} alt=""/>
              <div>{ this.state.tags.length === 0 && 'Please create a tag' }</div>
              <ul>
                { this.renderTags() }
              </ul>
            </div>
        );
    }
    
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>
        return this.state.tags.map( tag => <li key={tag}>{tag}</li>)
    }
    
    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    
    formatCount(){
        const { count } = this.state;  // object destructuring
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;