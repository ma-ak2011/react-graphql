import { ApolloServer, gql } from 'apollo-server';
import { Resolvers, QueryResolvers, Book, } from './types/graphql/graphql';
import fse from 'fs-extra';

const books: Book[] = [
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

const resolvers: Resolvers = {
  Query,
};

const typeDefs = fse
  .readFileSync('../graphql/schema.graphql')
  .toString();

const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

