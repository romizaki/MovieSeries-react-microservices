import { ApolloClient, InMemoryCache } from '@apollo/client'
import favouritesListVar from './cachelist'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    favouritesList: {
                        read() {
                            return favouritesListVar()
                        }
                    }
                }
            }
        }
    })  
})

export default client