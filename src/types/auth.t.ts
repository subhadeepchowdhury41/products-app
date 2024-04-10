import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface AuthState {
  splash: boolean;
  user: any;
  userId: string | null;
  error: FirebaseAuthTypes.NativeFirebaseAuthError | null;
}
