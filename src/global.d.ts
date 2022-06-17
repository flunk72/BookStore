declare namespace Models {
  type Books = {
    books: Book;
    loading: boolean;
  }

  type Book = {
    id: number;
    name: string;
    picture: string;
    author:string;
    price: number;
  }[]
}