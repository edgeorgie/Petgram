import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { App } from './App'
import Context from './Context'
import { setContext } from '@apollo/client/link/context'

// eslint-disable-next-line new-cap
const httpLink = new createHttpLink({
  uri: 'https://petgram-server-edgeorgie-edgeorgie.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
  // onError: (error) => {
  //   const { networkError } = error
  //   if (networkError && networkError.result.code === "invalid_token") {
  //     window.sessionStorage.removeItem("token")
  //     window.location.href = "/login"
  //   }
  // }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
