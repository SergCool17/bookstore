import axios from "axios";
import XMLData from "../../public/top500.xml";
let xml2js = require("xml2js");

export const setNewBooks = (newBooks) => ({
  type: "SET_NEW_BOOKS",
  payload: newBooks
});
export const setIsReady = (isReady) => ({
  type: "SET_IS_READY",
  payload: isReady
});
export const setCurrentBook = (book) => ({
  type: "SET_CURRENT_BOOK",
  payload: book
});
export const setCurrentBooks = () => ({
  type: "SET_CURRENT_BOOKS"
});

export const setBooksCount = () => ({
  type: "SET_BOOKS_COUNT"
});

export const setIndex = () => ({
  type: "SET_INDEX"
});

export const setCategories = () => ({
  type: "SET_CATEGORIES"
});

export const setCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: page
});
export const changeCurrentPage = (page) => async (dispatch) => {
  await dispatch(setCurrentPage(page));
  dispatch(setCurrentBooks());
};

export const findCurrentBook = (url) => ({
  type: "FIND_CURRENT_BOOK",
  payload: url
});

export const getALLBooks = () => async (dispatch) => {
  console.log("renew");
  await axios.get(XMLData).then(({ data }) => {
    xml2js
      .parseStringPromise(data)
      .then((data) => {
        dispatch(setNewBooks(data.yml_catalog.shop[0].offers[0].offer));
      })
      .then(() => {
        dispatch(setBooksCount());
      })
      .then(() => {
        dispatch(setIndex());
      })
      .then(() => {
        dispatch(setCategories());
      })
      .then(() => {
        dispatch(setCurrentBooks());
      })
      .then(() => {
        dispatch(setIsReady(true));
      });
  });
};

export const findCurrentBookByUrl = (url) => async (dispatch) => {
  await axios.get(XMLData).then(({ data }) => {
    xml2js
      .parseStringPromise(data)
      .then((data) => {
        dispatch(setNewBooks(data.yml_catalog.shop[0].offers[0].offer));
      })
      .then(() => {
        dispatch(setBooksCount());
      })
      .then(() => {
        dispatch(setIndex());
      })
      .then(() => {
        dispatch(setCategories());
      })
      .then(() => {
        dispatch(setCurrentBooks());
      })
      .then(() => {
        dispatch(setIsReady(true));
      })

      .then(() => {
        dispatch(findCurrentBook(url));
      });
  });
};
