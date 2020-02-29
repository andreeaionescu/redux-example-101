import React from 'react'
import Book from './Book'
import List from '@material-ui/core/List'
import { withTheme } from '@material-ui/core/styles';


class BookList extends React.Component {
    getBookList(){
        if (this.props.books){
            return <div> <List component="nav"> { this.props.books.map(book => (
                    <Book key={book.id} {...book} onClick={() => this.props.toggleBook(book.id)} /> )
                    )}
                   </List> 
                   </div>
        }
    }

    render(){
        return <div style={{ width: '100%',
        maxWidth: 360,
        backgroundColor: this.props.theme.palette.background.paper}}>{this.getBookList()}</div>
    }
}

export default withTheme(BookList)