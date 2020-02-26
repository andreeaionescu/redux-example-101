import React from 'react'
import Book from './Book'

class BookList extends React.Component {

    getBookList(){
        if (this.props.books){
            return <div> { this.props.books.map(book => (
                    <Book key={book.id} {...book} onClick={() => this.props.toggleBook(book.id)} /> )
                    )}
                   </div>
        }
    }

    render(){
        return <div>{this.getBookList()}</div>
    }
}

export default BookList