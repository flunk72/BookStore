import React from "react";
import { BookStoreServiceConsumer } from "../components/BookStoreServiceContext";

const withBookStoreService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <BookStoreServiceConsumer>
        {(bookStoreService) => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookStoreService;
