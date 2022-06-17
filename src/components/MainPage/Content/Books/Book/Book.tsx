import React from "react";

interface Props {
  id: number;
  books: any;
}
const Book = ({ id, books }: Props) => {
  return (
    <>
      {books.map((item: any) => {
        if (item.id === id)
          return (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
          );
        return null;
      })}
    </>
  );
};

export default Book;
