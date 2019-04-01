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
    
    render(){

        return(
            <React.Fragment>
              <span style={ this.style } className={this.getBadgeClasses()}>{this.formatCount()}</span>  {/* apply class-name and style with an object */}
              <button style={ { fontSize: 30} } className="btn btn-secundary btn-sm">Increment</button>  {/* apply class-name and style inline */}
              <img src={this.state.imageUrl} alt=""/>
              <ul>
                { this.state.tags.map( tag => <li>{tag}</li>) }
              </ul>
            </React.Fragment>
        );
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