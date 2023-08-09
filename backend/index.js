import {ApolloServer} from '@apollo/server'
import cors from 'cors'
import {createServer} from 'http'
import bodyParser from 'body-parser'
import express from 'express'
import {makeExecutableSchema} from '@graphql-tools/schema'
import {expressMiddleware} from '@apollo/server/express4'
import {PORT} from './src/config'
import {typeDefs,resolvers} from './src/graphql/index.js'

const myFunc = async () => {
    const app = express();
    const httpServer = createServer(app)
    const schema = makeExecutableSchema({typeDefs,resolvers})
    const server = new ApolloServer({schema})
    await server.start()
    app.use("/graphq",cors(),bodyParser.json(),expressMiddleware(server))
    httpServer.listen(PORT,function(){
        console.log(`Connected to http://localhost:${PORT}/graphql`)
    })
}

myFunc();