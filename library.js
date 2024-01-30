var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// функция для добавления книги
function addBook(books, title, author, year) {
    var id = books.length + 1;
    var newBook = { id: id, title: title, author: author, year: year };
    return __spreadArray(__spreadArray([], books, true), [newBook], false);
}
// функция для удаления книги
function removeBook(books, id) {
    return books.filter(function (book) { return book.id !== id; });
}
// функция для поиска книги по заглавию
function findBookByTitle(books, title) {
    return books.filter(function (book) { return book.title.toLowerCase().includes(title.toLowerCase()); });
}
// функция для поиска книги по автору
function findBookByAuthor(books, author) {
    return books.filter(function (book) { return book.author.toLowerCase().includes(author.toLowerCase()); });
}
// функция для вывода списка всех книг
function getAllBooks(books) {
    return books;
}
var books = [];
books = addBook(books, 'Война и мир', 'Лев Толстой', 1869);
books = addBook(books, 'Преступление и наказание', 'Фёдор Достоевский', 1866);
console.log('Вывести все книги');
console.log(getAllBooks(books));
console.log('______________________________________________');
console.log('Поиск книги по автору');
console.log(findBookByAuthor(books, 'Достоевский'));
console.log('______________________________________________');
console.log('Поиск книги по названию');
console.log(findBookByTitle(books, 'Война'));
console.log('______________________________________________');
console.log('Удаление книги под 1 id');
books = removeBook(books, 1);
console.log('______________________________________________');
console.log('Вывести все книги');
console.log(getAllBooks(books));
