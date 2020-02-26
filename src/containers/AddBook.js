import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

class AddBook extends React.Component{

    constructor(props) {
        super(props);
        this.state = {title: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({title: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title !== ''){
            this.props.handleAddBook(this.state.title)
            // reset input box
            this.setState({title: ''})
        }
    }

    render(){
        return <div>
                    <form onSubmit={this.handleSubmit}>
                        <input  placeholder='Type a book title...'
                                value={this.state.title}
                                onChange={this.handleChange}
                        />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddBook: value => dispatch(addBook(value))
})

export default connect(null, mapDispatchToProps)(AddBook)