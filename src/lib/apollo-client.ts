import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const token = import.meta.env.VITE_TOKEN_GITHUB

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
