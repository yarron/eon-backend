import { IResolvers } from 'apollo-server-express';
import countriesResolver from './countries';
import loginAuthResolver from './auth';

const resolvers: IResolvers = {
  Query: {
    countries: countriesResolver,
  },
  Mutation: {
    loginAuth: loginAuthResolver,
  },
  MutationResponse: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveType() {
      return null;
    },
  },
};

export default resolvers;
