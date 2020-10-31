import { LoginRequestMutationI, LoginResponseMutationI } from '../types/auth';

const loginAuthResolver = (
  _: void,
  { login }: LoginRequestMutationI,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
