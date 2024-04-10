import firestore from '@react-native-firebase/firestore';

export const getProducts = async () => {
  try {
    const snapshot = await firestore().collection('products').get();
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = async (product: any) => {
  try {
    await firestore().collection('products').add(product);
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async (product: any) => {
  try {
    await firestore().collection('products').doc(product.id).update(product);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await firestore().collection('products').doc(id).delete();
  } catch (e) {
    console.log(e);
  }
};
