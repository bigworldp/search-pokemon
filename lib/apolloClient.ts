import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon: {
          // Make sure the pokemon query is cached by its name
          keyArgs: ["name"],
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache,
});

export default client;
