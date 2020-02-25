let nextBookId = 0

export const addBook = text => ({
  type: 'ADD_BOOK',
  id: nextBookId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleBook = id => ({
  type: 'TOGGLE_BOOK',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_IN_PROGREES: 'SHOW_IN_PROGREES'
}