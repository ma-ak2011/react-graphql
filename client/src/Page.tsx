import React, { FC } from 'react';
import { useBooksQuery } from './types/graphql/graphql';

const Page: FC = () => {
  const { loading, error, data } = useBooksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

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
