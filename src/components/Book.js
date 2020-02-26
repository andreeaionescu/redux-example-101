import React from 'react'

class Book extends React.Component{

    render(){
        return <li  onClick={this.props.onClick} 
                    style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                    {this.props.title}
                </li>
          
    }
}

export default Book