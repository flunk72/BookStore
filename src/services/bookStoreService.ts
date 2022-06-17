export default class BookStoreService {
  data = [{
    id: 1,
    name: "Что такое жизнь?",
    author: "Эрвин Шредингер",
    price: 1159,
    picture:
      "https://www.moscowbooks.ru/image/book/611/orig/i611460.jpg?cu=20180101000000",
  },
  {
    id: 2,
    name: "Гарри Поттер и Орден Феникса",
    author: "Дж.К.Роулинг",
    price: 529,
    picture:
      "https://static.insales-cdn.com/images/products/1/3717/50966149/large_%D0%BE%D1%80%D0%B4%D0%B5%D0%BD_%D1%84%D0%B5%D0%BD%D0%B8%D0%BA%D1%81%D0%B0.jpg",
  },
  {
    id: 3,
    name: "Сумерки",
    author: "Стефани Майер",
    price: 125,
    picture:
      "https://img4.labirint.ru/rc/7025d698f6127705ecc7741a5fb8a371/363x561q80/books60/599040/cover.jpg?1617107129",
  },
  {
    id: 4,
    name: "Наслаждение",
    author: "Флориан Зеллер",
    price: 859,
    picture:
      "https://img4.labirint.ru/rc/56b4f8493a9648a3237797810ddd2ffa/363x561q80/books48/479756/cover.jpg?1563813644",
  },
  {
    id: 5,
    name: "Выдох",
    author: "Тед Чан",
    price: 159,
    picture:
      "https://img4.labirint.ru/rc/6d5031f93747cd0cf250054a9bc8f29e/363x561q80/books79/786504/cover.jpg?1611033914",
  },
  {
    id: 6,
    name: "Последний Вздох",
    author: "Осман Нури",
    price: 369,
    picture: "https://cdn1.ozone.ru/multimedia/c1200/1023748861.JPG",
  },
  {
    id: 7,
    name: "Волшебный Новый Год",
    author: "Бет Кемптон",
    price: 149,
    picture:
      "https://cdn.eksmo.ru/v2/ITD000000001108853/COVER/cover1__w600.jpg",
  },
  {
    id: 8,
    name: "Астральные путешествия",
    author: "Брюс Голдберг",
    price: 2159,
    picture:
      "https://img4.labirint.ru/rc/ca10573a47de978f9fefbb5e74ee6ae6/363x561q80/books6/56838/cover.jpg?1280394613",
  },];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 3000);
    })
  }
}