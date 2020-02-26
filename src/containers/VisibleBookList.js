import { connect } from 'react-redux'
import { toggleBook } from '../actions'
import BookList from '../components/BookList'
import { VisibilityFilters } from '../actions'

const getVisibleBooks = (books, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return books
    case VisibilityFilters.SHOW_COMPLETED:
      return books.filter(b => b.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return books.filter(b => !b.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = state => ({
  books: getVisibleBooks(state.books, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleBook: id => dispatch(toggleBook(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)