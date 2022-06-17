import React, { useEffect, useState } from "react";
import Book from "./Book/Book";
import {
  BooksWrapper,
  SearchBlock,
  Input,
  ButtonSeacrh,
  Select,
  BooksCard,
  Name,
  Author,
  Price,
  PictureBlock,
  Picture,
  ButtonBlock,
  Button,
} from "./Books.styled";
import { connect } from "react-redux";
import withBookStoreService from "../../../../hoc/withBookStoreService";
import { booksLoaded } from "../../../../actions";
import Spinner from "../../../Spinner";

const Books = ({ books, bookStoreService, loading, booksLoaded }: any) => {
  const [currentIdBook, setCurrentIdBook] = useState(0);
  // const [searchField, setSearchField] = useState("");
  // const [currentSort, setCurrentSort] = useState("rating");
  // const [filteredBooks, setFilteredBooks] = useState<Models.Book>([]);
  // const [loadingBooks, setLoadingBooks] = useState(loading);

  useEffect(() => {
    bookStoreService.getBooks().then((data: Models.Book) => {
      booksLoaded(data);
    });
  }, [bookStoreService, booksLoaded]);

  // console.log(filteredBooks);

  const currentBook = (e: number) => {
    setCurrentIdBook(e);
  };

  if (currentIdBook) return <Book id={currentIdBook} books={books} />;

  // const onSearch = (e: any) => {
  //   if (e.target.value === "") setFilteredBooks(books);
  //   setSearchField(e.target.value);
  // };

  // const onSort = (e: any) => {
  //   if (e.target.value === "priceDown") {
  //     const resultDown = books.sort((a: any, b: any) => {
  //       return b.price - a.price;
  //     });
  //     setFilteredBooks(resultDown);
  //   }
  //   if (e.target.value === "priceUp") {
  //     const resultUp = filteredBooks.sort((a: any, b: any) => {
  //       return a.price - b.price;
  //     });
  //     setFilteredBooks(resultUp);
  //   }
  //   if (e.target.value === "rating") {
  //     console.log("Сортировка по рейтингу");
  //   }
  //   setCurrentSort(e.target.value);
  // };

  // const searchItem = () => {
  //   const results = filteredBooks.filter((item: any) => {
  //     return (
  //       item.author.toLowerCase().includes(searchField.toLowerCase()) ||
  //       item.name.toLowerCase().includes(searchField.toLowerCase())
  //     );
  //   });
  //   setFilteredBooks(results);
  // };
  return (
    <>
      <BooksWrapper>
        <SearchBlock>
          <Input
            type="search"
            placeholder="Поиск по названию, автору"
            // onChange={(e) => onSearch(e)}
            // value={searchField}
          />
          <ButtonSeacrh
            type="button"
            // onClick={searchItem}
          >
            Искать
          </ButtonSeacrh>
          <Select
            placeholder="Сортировать по"
            // onChange={(e) => onSort(e)}
            name="sorting"
            // value={currentSort}
          >
            <option value="rating">По рейтингу</option>
            <option value="priceDown">По убыванию цены</option>
            <option value="priceUp">По возростанию цены</option>
          </Select>
        </SearchBlock>

        {loading ? (
          <Spinner />
        ) : (
          books?.map((book: any) => {
            return (
              <BooksCard key={book.id}>
                <PictureBlock onClick={() => currentBook(book.id)}>
                  <Picture src={book.picture} />
                </PictureBlock>

                <Price>{`${book.price}₽`}</Price>
                <Author>{book.author}</Author>
                <Name>{book.name}</Name>
                <ButtonBlock>
                  <Button>В избранное</Button>
                  <Button>В корзину</Button>
                </ButtonBlock>
              </BooksCard>
            );
          })
        )}
      </BooksWrapper>
    </>
  );
};

const mapStateToProps = ({ books, loading }: Models.Books) => {
  return {
    books,
    loading,
  };
};
const mapDispatchToProps = { booksLoaded };

export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(Books)
);
