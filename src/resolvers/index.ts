import { IResolvers } from 'apollo-server-express';
import {
  getPhonebookResolver, editPhonebookResolver, addPhonebookResolver, deletePhonebookResolver,
} from './phonebook';

const resolvers: IResolvers = {
  Query: {
    phonebook: getPhonebookResolver,
  },
  Mutation: {
    addPhonebook: addPhonebookResolver,
    editPhonebook: editPhonebookResolver,
    deletePhonebook: deletePhonebookResolver,
  },
  MutationResponse: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveType() {
      return null;
    },
  },
};

export default resolvers;
