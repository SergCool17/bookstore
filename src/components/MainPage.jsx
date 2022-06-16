import React from "react";
import NewBookCard from "./NewBookCard";
import Filter from "../containers/Filter";
import { Card, Pagination, Segment } from "semantic-ui-react";

const PaginationButtons = ({ pagesCount, changeCurrentPage }) => {
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={pagesCount}
      onPageChange={(e) => {
        changeCurrentPage(e.target.innerText);
      }}
    />
  );
};
const MainPage = React.memo(
  ({ isReady, newBooks, pagesCount, changeCurrentPage, setCurrentBook }) => {
    return (
      <>
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : newBooks.map((book, i) => (
                <NewBookCard
                  key={i}
                  book={book}
                  setCurrentBook={setCurrentBook}
                />
              ))}
          {!isReady ? (
            "Загрузка..."
          ) : (
            <Segment>
              <PaginationButtons
                pagesCount={pagesCount}
                changeCurrentPage={changeCurrentPage}
              />
            </Segment>
          )}
        </Card.Group>
      </>
    );
  }
);

export default MainPage;
