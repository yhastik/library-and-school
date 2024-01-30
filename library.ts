type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
};
  
  // функция для добавления книги
function addBook(books: Book[], title: string, author: string, year: number): Book[] {
    const id = books.length + 1;
    const newBook: Book = { id, title, author, year };
    return [...books, newBook];
}
  
  // функция для удаления книги
function removeBook(books: Book[], id: number): Book[] {
    return books.filter(book => book.id !== id);
}
  
  // функция для поиска книги по заглавию
function findBookByTitle(books: Book[], title: string): Book[] {
    return books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}
  
  // функция для поиска книги по автору
function findBookByAuthor(books: Book[], author: string): Book[] {
    return books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

  // функция для вывода списка всех книг
function getAllBooks(books: Book[]): Book[] {
    return books;
}
  

let books: Book[] = [];
books = addBook(books, 'Война и мир', 'Лев Толстой', 1869);
books = addBook(books, 'Преступление и наказание', 'Фёдор Достоевский', 1866);
  

console.log('Вывести все книги')
console.log(getAllBooks(books));
console.log('______________________________________________')
console.log('Поиск книги по автору')
console.log(findBookByAuthor(books, 'Достоевский'));
console.log('______________________________________________')
console.log('Поиск книги по названию')
console.log(findBookByTitle(books, 'Война'));
console.log('______________________________________________')
console.log('Удаление книги под 1 id')
books = removeBook(books, 1);
console.log('______________________________________________')
console.log('Вывести все книги')
console.log(getAllBooks(books));