const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book
    addAuthor(name: String!): Author
  }
`;

module.exports = typeDefs;
