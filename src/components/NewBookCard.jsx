import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { setCurrentBook } from "../actions/newBooks";
import { useDispatch } from "react-redux";

const NewBookCard = ({ book }) => {
  /*const { name, author, price, picture, url, series } = book;  */

  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBook(book));
    history.push(`/${book.url[0].slice(22)}`);
  };

  return (
    <Card onClick={handleClick} className="card">
      <Image
        className="card__image"
        src={book.picture[0]}
        as={NavLink}
        exact
        to={`/` + book.url.slice(22)}
      />
      <Card.Content
        className="card__content"
        as={NavLink}
        exact
        to={`/` + book.url.slice(22)}
      >
        <Card.Header as={NavLink} exact to={`/` + book.url.slice(22)}>
          {book.price[0].substr(-8, book.price[0].indexOf("."))} р.
        </Card.Header>
        <Card.Header className="card__content__header">
          {(book.name[0].length > 62)?`${book.name[0].slice(0,61)}...`:book.name[0]}
        </Card.Header>
        <Card.Meta className="card__content_author">
          <span>{book.author[0]}</span>
        </Card.Meta>
      </Card.Content>

      <Button size="big" primary>
        <a
          href={`${book.url[0]}?lfrom=1005476320`}
          target="_blank"
          rel="noreferrer"
        >
          В корзину
        </a>
      </Button>
    </Card>
  );
};

export default NewBookCard;
