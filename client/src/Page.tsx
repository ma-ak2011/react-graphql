import React, { FC, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import { BooksQuery } from './types/generated/graphql';

const Page: FC = () => {
  const booksQuery = useMemo(
    () => gql`
      {
        books {
          title
          author
        }
      }
    `,
    []
  );
  const { loading, error, data } = useQuery<BooksQuery>(booksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.books?.map((b) => (
        <React.Fragment key={b?.title}>
          <div>{b?.title}</div>
          <div>{b?.author}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
