import React, { FC, useMemo } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { Grommet } from 'grommet';
import Page from './Page';

const App: FC = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: 'http://localhost:4000',
        cache: new InMemoryCache(),
        connectToDevTools: true,
      }),
    []
  );

  return (
    <ApolloProvider client={client}>
      <Grommet plain>
        <Page />
      </Grommet>
    </ApolloProvider>
  );
};

export default App;
