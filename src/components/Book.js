import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Book extends React.Component{

    render(){
        return <ListItem onClick={this.props.onClick} 
                         style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                    <ListItemText primary={this.props.title} />
                </ListItem>
          
    }
}

export default Book