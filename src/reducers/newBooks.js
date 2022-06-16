const SET_NEW_BOOKS = "SET_NEW_BOOKS";
const SET_IS_READY = "SET_IS_READY";
const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";
const SET_BOOKS_COUNT = "SET_BOOKS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CURRENT_BOOKS = "SET_CURRENT_BOOKS";
const SET_INDEX = "SET_INDEX";
const FIND_CURRENT_BOOK = "FIND_CURRENT_BOOK";
const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
  isReady: false,
  newBooks: null,
  currentBooks: null,
  booksCount: 1,
  booksPerPage: 48,
  currentPage: 1,
  lastBooksIndex: null,
  firstBooksIndex: null,
  pagesCount: null,
  currentBook: null,
  categories: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload
      };
    case SET_NEW_BOOKS:
      return {
        ...state,
        newBooks: action.payload
      };
    case SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.payload
      };
    case FIND_CURRENT_BOOK:
      //state.newBooks.find((book) => book.url[0] === action.payload)
      return {
        ...state,
        currentBook: state.newBooks.find(
          (book) => book.url[0] === action.payload
        )
      };
    case SET_BOOKS_COUNT:
      return {
        ...state,
        booksCount: state.newBooks.length
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: Number(action.payload)
      };

    case SET_INDEX:
      return {
        ...state,
        lastBooksIndex: Number(state.currentPage) * Number(state.booksPerPage),
        firstBooksIndex:
          state.currentPage * state.booksPerPage - state.booksPerPage,
        pagesCount: Math.ceil(state.booksCount / state.booksPerPage)
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: [
          ...new Set(state.newBooks.map((book) => book.categoryId[0]))
        ]
      };

    case SET_CURRENT_BOOKS:
      return {
        ...state,
        currentBooks: state.newBooks.slice(
          state.currentPage * state.booksPerPage - state.booksPerPage,
          state.currentPage * state.booksPerPage
        )
      };

    default:
      return state;
  }
};
