import React, { FC, useState } from 'react';
import {
  useBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} from './types/graphql/graphql';

const Page: FC = () => {
  const booksQueryResult = useBooksQuery();
  const [addBookMutation, addBookResult] = useAddBookMutation();
  const [deleteBookMutation, deleteBookResult] = useDeleteBookMutation();
  const [updateBookMutation, updateBookResult] = useUpdateBookMutation();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  if (booksQueryResult.loading) return <p>Loading...</p>;
  if (booksQueryResult.error) {
    console.log(booksQueryResult.error);
    return <p>Error :(</p>;
  }

  return (
    <div>
      {booksQueryResult.data?.books?.map((b) => (
        <React.Fragment key={b?.title}>
          <div>
            <input
              type="button"
              value="削除"
              onClick={async () => {
                await deleteBookMutation({ variables: { id: b.id } });
                await booksQueryResult.refetch();
              }}
            />{' '}
            id：{b?.id} タイトル：
            <input type="text" value={b?.title} /> 著者：{b?.author}
          </div>
        </React.Fragment>
      ))}
      <div>
        タイトル：
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        著者：
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />
        <input
          type="button"
          onClick={async () => {
            await addBookMutation({ variables: { title, author } });
            await booksQueryResult.refetch();
          }}
          value="追加"
        />
      </div>
    </div>
  );
};

export default Page;
