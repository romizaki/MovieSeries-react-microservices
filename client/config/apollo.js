import { ApolloClient, inMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: inMemoryCache()
})

export default client