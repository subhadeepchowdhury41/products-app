import {signIn, signOut, signUp} from './auth';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from './products';
import {createUser, getUser} from './user';

export const ApiService = {
  product: {
    get: getProducts,
    add: addProduct,
    update: updateProduct,
    delete: deleteProduct,
  },
  user: {
    get: getUser,
    add: createUser,
  },
  auth: {
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
  },
};
