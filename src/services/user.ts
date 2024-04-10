import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const createUser = async (id: string, name: string, email: string) => {
  try {
    return await firestore().collection('users').doc(id).set({
      name,
      email,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (uid: string): Promise<any> => {
  try {
    const snapshot: FirebaseFirestoreTypes.DocumentSnapshot = await firestore()
      .collection('users')
      .doc(uid)
      .get();
    return {id: snapshot.id, ...snapshot.data()};
  } catch (e) {
    console.log(e);
  }
};
