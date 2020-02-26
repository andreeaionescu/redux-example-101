import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

class AddBook extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return <div>
                    <form onSubmit={event => this.props.handleAddBook(event.target.value)}>
                        <label>Name 
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        
                        <button type="submit">Add Book</button>
                    </form>
                </div>
    }
}

const mapDispatchToProps = dispatch => ({
    handleAddBook: value => dispatch(addBook(value))
})

export default connect(mapDispatchToProps)(AddBook)