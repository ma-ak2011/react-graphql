import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Book>;
};

export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Book;
  deleteBook?: Maybe<Book>;
  updateBook?: Maybe<Book>;
};

export type MutationAddBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
};

export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
};

export type AddBookMutationVariables = Exact<{
  title: Scalars['String'];
  author: Scalars['String'];
}>;

export type AddBookMutation = { __typename?: 'Mutation' } & {
  addBook: { __typename?: 'Book' } & Pick<Book, 'id' | 'title' | 'author'>;
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteBookMutation = { __typename?: 'Mutation' } & {
  deleteBook?: Maybe<{ __typename?: 'Book' } & Pick<Book, 'id'>>;
};

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
}>;

export type UpdateBookMutation = { __typename?: 'Mutation' } & {
  updateBook?: Maybe<{ __typename?: 'Book' } & Pick<Book, 'id'>>;
};

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type BookQuery = { __typename?: 'Query' } & {
  book?: Maybe<{ __typename?: 'Book' } & Pick<Book, 'id' | 'title'>>;
};

export type BooksQueryVariables = Exact<{ [key: string]: never }>;

export type BooksQuery = { __typename?: 'Query' } & {
  books: Array<{ __typename?: 'Book' } & Pick<Book, 'id' | 'title' | 'author'>>;
};

export const AddBookDocument = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
export type AddBookMutationFn = Apollo.MutationFunction<
  AddBookMutation,
  AddBookMutationVariables
>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useAddBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBookMutation,
    AddBookMutationVariables
  >
) {
  return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(
    AddBookDocument,
    baseOptions
  );
}
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<
  AddBookMutation,
  AddBookMutationVariables
>;
export const DeleteBookDocument = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookMutation,
    DeleteBookMutationVariables
  >
) {
  return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(
    DeleteBookDocument,
    baseOptions
  );
}
export type DeleteBookMutationHookResult = ReturnType<
  typeof useDeleteBookMutation
>;
export type DeleteBookMutationResult = Apollo.MutationResult<
  DeleteBookMutation
>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;
export const UpdateBookDocument = gql`
  mutation UpdateBook($id: ID!, $title: String!, $author: String!) {
    updateBook(id: $id, title: $title, author: $author) {
      id
    }
  }
`;
export type UpdateBookMutationFn = Apollo.MutationFunction<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useUpdateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBookMutation,
    UpdateBookMutationVariables
  >
) {
  return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(
    UpdateBookDocument,
    baseOptions
  );
}
export type UpdateBookMutationHookResult = ReturnType<
  typeof useUpdateBookMutation
>;
export type UpdateBookMutationResult = Apollo.MutationResult<
  UpdateBookMutation
>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;
export const BookDocument = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      title
    }
  }
`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(
  baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>
) {
  return Apollo.useQuery<BookQuery, BookQueryVariables>(
    BookDocument,
    baseOptions
  );
}
export function useBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>
) {
  return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(
    BookDocument,
    baseOptions
  );
}
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
  query books {
    books {
      id
      title
      author
    }
  }
`;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    baseOptions
  );
}
export function useBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    baseOptions
  );
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<
  BooksQuery,
  BooksQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
