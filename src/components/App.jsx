import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookPage from "./BookPage";
import Header from "../containers/Header";
import MainPage from "./MainPage";

const App = React.memo(
  ({
    newBooks,
    isReady,
    setNewBooks,
    setAllCurrentBooks,
    pagesCount,
    changeCurrentPage,
    setCurrentBook,
    getALLBooks,

    ...props
  }) => {
    useEffect(() => {
      getALLBooks();
    }, []);

    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage
                isReady={isReady}
                newBooks={newBooks}
                pagesCount={pagesCount}
                changeCurrentPage={changeCurrentPage}
                setCurrentBook={setCurrentBook}
              />
            </Route>
            <Route path="/:url*">
              <BookPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
);
export default App;
