import { ApolloServer, gql } from 'apollo-server';
import { Resolvers, QueryResolvers, Book, MutationResolvers } from './types/graphql/graphql';
import fse from 'fs-extra';
import { v4 } from 'uuid';

let books: Book[] = [
  {
    id: "1",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    id: "2",
    title: "Jurassic Park",
    author: "Michael Crishton"
  }
];

const Query: QueryResolvers = {
  book: (id) => {
    const book = books.find((b) => b.id === id);
    return book === undefined ? null : book;
  },
  books: () => books
};

const Mutation: MutationResolvers = {
  addBook: async (parent, args, context) => {
    const book = { id: v4(), title: args.title, author: args.author };
    await books.push(book);
    return { success: true, book, messages: []};
  },
  deleteBook: async (parent, args, context) => {
    const deletedBook = books.find((b) => b.id === args.id);
    if (deletedBook === undefined) return { success: false, id: args.id, messages: ['server error'] };
    books = books.filter((b) => b.id !== args.id);
    return { success: true, id: args.id, messages: [] };
  },
  updateBook: async (parent, args, context) => {
    const book = books.find((b) => b.id === args.id);
    if (book === undefined)
      return { success: false, book: { id: args.id, author: '', title: '' }, messages: ['server error'] };
    books = books.map((b) => {
      if (b.id === args.id) return { ...b, title: args.title, author: args.author };
      return b;
    });
    return { success: true, book, messages: [] };
  }
};

const resolvers: Resolvers = {
  Query,
  Mutation,
};

const typeDefs = fse
  .readFileSync('../graphql/schema.graphql')
  .toString();

const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

