import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as booksActions from "../actions/newBooks";
import App from "../components/App";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "price_high":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    (o) =>
      o.name[0].toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author[0].toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ newBooks, filter }) => ({
  newBooks:
    newBooks.currentBooks &&
    searchBooks(newBooks.currentBooks, filter.filterBy, filter.searchQuery),
  isReady: newBooks.isReady,
  pagesCount: newBooks.pagesCount
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
