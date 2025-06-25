const { books, authors } = require("./data");
let bookIdCounter = 3;
let authorIdCounter = 3;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
    authors: () => authors,
  },
  Mutation: {
    addBook: (_, { title, authorId }) => {
      const newBook = { id: String(bookIdCounter++), title, authorId };
      books.push(newBook);
      return newBook;
    },
    addAuthor: (_, { name }) => {
      const newAuthor = { id: String(authorIdCounter++), name };
      authors.push(newAuthor);
      return newAuthor;
    },
  },
  Book: {
    author: (book) => authors.find((author) => author.id === book.authorId),
  },

  Author: {
    books: (author) => books.filter((book) => book.authorId === author.id),
  },
};

module.exports = resolvers;
