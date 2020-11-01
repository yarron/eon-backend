import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import { importSchema } from 'graphql-import';
import path from 'path';
import resolvers from './resolvers';
// import dataSources from './datasource';

require('dotenv-flow').config();

const app: Application = express();

app.use(cookieParser());

const typeDefs = importSchema(path.resolve(__dirname, 'schema/main.graphql'));
const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // dataSources: dataSources as any,
});

apolloServer.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: process.env.CORS_ORIGIN || '*',
  },
  path: process.env.GRAPHQL_PATH,
});

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || '127.0.0.1';
app.listen(PORT as number, HOST as string, () => console.log(`Server is running in http://${HOST}:${PORT}${process.env.GRAPHQL_PATH}`));

export default app;
