import React, { FC, useEffect, useState } from 'react';
import { Button, FormField, Layer, Text, TextInput } from 'grommet';
import produce from 'immer';
import {
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  Book,
  useBooksLazyQuery,
  BooksDocument,
  BooksQuery,
  BooksQueryVariables,
} from './types/graphql/graphql';
import LoadingOverlay from './LoadingOverlay';

const Page: FC = () => {
  const [getBooks, booksQueryResult] = useBooksLazyQuery();
  const [addBookMutation, addBookResult] = useAddBookMutation({
    update: (cache, mutationResult) => {
      if (mutationResult.data === null || mutationResult.data === undefined)
        return;
      const newBook = mutationResult.data.addBook.book;
      if (newBook === undefined) return;

      const booksInCache = cache.readQuery<BooksQuery, BooksQueryVariables>({
        query: BooksDocument,
      });
      if (booksInCache === null) return;

      cache.writeQuery({
        query: BooksDocument,
        data: produce(booksInCache, (draft) => {
          draft.books.push(newBook);
        }),
      });
    },
  });
  const [deleteBookMutation, deleteBookResult] = useDeleteBookMutation({
    update: (cache, mutationResult) => {
      if (!mutationResult.data || !mutationResult.data.deleteBook) return;
      const { id } = mutationResult.data.deleteBook;
      if (id === undefined) return;

      const booksInCache = cache.readQuery<BooksQuery, BooksQueryVariables>({
        query: BooksDocument,
      });
      if (booksInCache === null) return;

      cache.writeQuery({
        query: BooksDocument,
        data: produce(booksInCache, (draft) => {
          draft.books = draft.books.filter((b) => b.id !== id);
        }),
      });
    },
  });
  const [updateBookMutation, updateBookResult] = useUpdateBookMutation({
    update: (cache, mutationResult) => {
      if (!mutationResult.data || !mutationResult.data.updateBook) return;
      const { book } = mutationResult.data.updateBook;
      if (book === undefined) return;

      const booksInCache = cache.readQuery<BooksQuery, BooksQueryVariables>({
        query: BooksDocument,
      });
      if (booksInCache === null) return;

      cache.writeQuery({
        query: BooksDocument,
        data: produce(booksInCache, (draft) => {
          draft.books = draft.books.map((b) => (b.id === book.id ? book : b));
        }),
      });
    },
  });
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [bookUnderEditing, setBookUnderEditing] = useState<Book | null>(null);

  useEffect(() => {
    getBooks();
  }, []);

  if (booksQueryResult.error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      {booksQueryResult.networkStatus}
      {(booksQueryResult.loading ||
        addBookResult.loading ||
        deleteBookResult.loading ||
        updateBookResult.loading) && <LoadingOverlay />}
      {booksQueryResult.data?.books.map((b) => (
        <React.Fragment key={b?.id}>
          <div>
            <Button
              label="削除"
              onClick={async () => {
                await deleteBookMutation({ variables: { id: b.id } });
              }}
            />{' '}
            <Button
              label="編集"
              onClick={() => {
                setBookUnderEditing(b);
                setOpenModal(true);
              }}
            />{' '}
            id：{b?.id} タイトル：
            <Text>{b?.title}</Text>
            著者：
            <Text>{b?.author}</Text>
            {openModal && bookUnderEditing !== null && (
              <Layer
                onEsc={() => {
                  setBookUnderEditing(null);
                  setOpenModal(false);
                }}
                onClickOutside={() => {
                  setBookUnderEditing(null);
                  setOpenModal(false);
                }}
              >
                id：{bookUnderEditing.id} タイトル：
                <TextInput
                  value={bookUnderEditing.title}
                  onChange={(e) =>
                    setBookUnderEditing(
                      produce(bookUnderEditing, (draftState) => {
                        draftState.title = e.currentTarget.value;
                      })
                    )
                  }
                />
                著者：
                <TextInput
                  value={bookUnderEditing.author}
                  onChange={(e) =>
                    setBookUnderEditing(
                      produce(bookUnderEditing, (draftState) => {
                        draftState.author = e.currentTarget.value;
                      })
                    )
                  }
                />
                <Button
                  label="キャンセル"
                  onClick={() => {
                    setBookUnderEditing(null);
                    setOpenModal(false);
                  }}
                />
                <Button
                  label="OK"
                  onClick={async () => {
                    await updateBookMutation({ variables: bookUnderEditing });
                    setBookUnderEditing(null);
                    setOpenModal(false);
                  }}
                />
              </Layer>
            )}
          </div>
        </React.Fragment>
      ))}
      <div>
        <FormField label="タイトル：">
          <TextInput
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </FormField>
        <FormField label="著者：">
          <TextInput
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
        </FormField>
        <Button
          onClick={() => addBookMutation({ variables: { title, author } })}
          label="追加"
          disabled={addBookResult.loading}
        />
      </div>
    </div>
  );
};

export default Page;
