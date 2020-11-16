import React, { FC, useMemo } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import Page from './Page';

const App: FC = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: 'http://localhost:4000',
        cache: new InMemoryCache(),
      }),
    []
  );

  return (
    <ApolloProvider client={client}>
      <Page />
    </ApolloProvider>
  );
};

export default App;
