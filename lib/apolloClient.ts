// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://graphql-pokemon2.vercel.app/', // Pokémon GraphQL API
//   }),
//   cache: new InMemoryCache(), // Apollo cache setup
// });

// export default client;

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app/', // Pokémon GraphQL API
  }),
  cache: new InMemoryCache(), // Apollo cache setup
});

export default client;
