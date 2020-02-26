import React from 'react'
import Book from './Book'

class BookList extends React.Component {
    render(){
        return <ul> { this.props.books ? this.props.books.map(book => (
                        <Book key={book.id} {...book} onClick={() => this.props.toggleBook(book.id)} /> )
                        ) : ''}
                </ul>
    }
}

export default BookList