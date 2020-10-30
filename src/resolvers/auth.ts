import { LoginRequestMutationI, LoginResponseMutationI } from '../types/auth';

const loginAuthResolver = (
  _: void,
  { login }: LoginRequestMutationI,
  { dataSources }: any,
): LoginResponseMutationI => {
  console.log('loginAuthResolver', login, dataSources);
  return {
    user: {
      email: '',
    },
    code: 200,
    success: true,
    message: 'Auth success',
  };
};

export default loginAuthResolver;
