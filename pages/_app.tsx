import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import type { AppProps } from "next/app";
import '../globals.css'; 


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
