import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Item, Table, Image } from "semantic-ui-react";
import { findCurrentBookByUrl } from "../actions/newBooks";

const BookPage = () => {
  let book = useSelector((state) => state.newBooks.currentBook);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!book) {
      dispatch(findCurrentBookByUrl(`https://www.litres.ru/${params.url}/`));
      console.log("let's find");
    }
  }, []);

  //https://www.litres.ru/${params.url}/

  book = useSelector((state) => state.newBooks.currentBook);

  return (
    book && (
      <>
        <Item>
          <Item.Header as="h1">{book.author}: {book.name}</Item.Header>
          <Item.Meta className="book__header__meta" verticalAlign="middle">
            Здесь есть возможность читать онлайн «{book.author}: {book.name}» —
            ознакомительный отрывок электронной книги, а после прочтения отрывка
            купить полную версию. В некоторых случаях присутствует краткое
            содержание. Год выпуска: {book.year}, ISBN: {book.ISBN},
            издательство:
            {book.publisher}, серия книг {book.series} на русском языке. Описание
            произведения, (предисловие) а так же отзывы посетителей доступны на
            портале. Библиотека «БуБукс» — bobooks.ru создана для любителей
            полистать хорошую книжку и предлагает широкий выбор жанров
          </Item.Meta>
        </Item>
        <Grid columns={2}>
          <Grid.Row >
            <Grid.Column >
              <Image className="book__main__image" src={book.picture} size='large' />
           </Grid.Column>   
            <Grid.Column >
              <Item.Content>
              <Item.Header as='h2'>Описание</Item.Header>
              <Item.Description className="book__main__description">
                <p>{book.description} </p>
              </Item.Description>
            </Item.Content>
            <Item.Content>
              <Item.Header as='h2'>Характеристики</Item.Header>
              <Item.Description className="book__main__cha">
                <p>{book.description} </p>
              </Item.Description>
            </Item.Content>
          </Grid.Column>










            <Grid.Column>
              <Table className="book__main__table" striped collapsing>
                <Table.Body>
                  {book.name.[0] && (
                    <Table.Row>
                      <Table.Cell>Название: </Table.Cell>
                      
                      <Table.Cell>{book.name}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.author.[0] && (
                    <Table.Row>
                      <Table.Cell>Автор:</Table.Cell>
                      <Table.Cell>{book.author}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.series.[0] && (
                    <Table.Row>
                      <Table.Cell>Серия книг:</Table.Cell>
                      <Table.Cell>{book.series}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.publisher.[0] && (
                    <Table.Row>
                      <Table.Cell>Издательство:</Table.Cell>
                      <Table.Cell>{book.publisher}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.year.[0] && (
                    <Table.Row>
                      <Table.Cell>Год:</Table.Cell>
                      <Table.Cell>{book.year}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.lang.[0] && (
                    <Table.Row>
                      <Table.Cell>Язык:</Table.Cell>
                      <Table.Cell>{book.lang}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.ISBN.[0] && (
                    <Table.Row>
                      <Table.Cell>ISBN:</Table.Cell>
                      <Table.Cell>{book.ISBN}</Table.Cell>
                    </Table.Row>
                  )}
                  {book.age.[0] && (
                    <Table.Row>
                      <Table.Cell>Возраст:</Table.Cell>
                      <Table.Cell>{book.age}+</Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
      </>
    )
  );
};
export default BookPage;
