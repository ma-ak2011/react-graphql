import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type AddBookResult = {
  __typename?: 'AddBookResult';
  success: Scalars['Boolean'];
  book: Book;
  messages: Array<Scalars['String']>;
};

export type DeleteBookResult = {
  __typename?: 'DeleteBookResult';
  success: Scalars['Boolean'];
  id: Scalars['ID'];
  messages: Array<Scalars['String']>;
};

export type UpdateBookResult = {
  __typename?: 'UpdateBookResult';
  success: Scalars['Boolean'];
  book: Book;
  messages: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: AddBookResult;
  deleteBook: DeleteBookResult;
  updateBook: UpdateBookResult;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  AddBookResult: ResolverTypeWrapper<AddBookResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeleteBookResult: ResolverTypeWrapper<DeleteBookResult>;
  UpdateBookResult: ResolverTypeWrapper<UpdateBookResult>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Query: {};
  AddBookResult: AddBookResult;
  Boolean: Scalars['Boolean'];
  DeleteBookResult: DeleteBookResult;
  UpdateBookResult: UpdateBookResult;
  Mutation: {};
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
};

export type AddBookResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBookResult'] = ResolversParentTypes['AddBookResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteBookResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteBookResult'] = ResolversParentTypes['DeleteBookResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookResult'] = ResolversParentTypes['UpdateBookResult']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBook?: Resolver<ResolversTypes['AddBookResult'], ParentType, ContextType, RequireFields<MutationAddBookArgs, 'title' | 'author'>>;
  deleteBook?: Resolver<ResolversTypes['DeleteBookResult'], ParentType, ContextType, RequireFields<MutationDeleteBookArgs, 'id'>>;
  updateBook?: Resolver<ResolversTypes['UpdateBookResult'], ParentType, ContextType, RequireFields<MutationUpdateBookArgs, 'id' | 'title' | 'author'>>;
};

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  AddBookResult?: AddBookResultResolvers<ContextType>;
  DeleteBookResult?: DeleteBookResultResolvers<ContextType>;
  UpdateBookResult?: UpdateBookResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
