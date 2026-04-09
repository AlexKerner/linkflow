import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';

GoogleSignin.configure({
  webClientId: '66609899203-541g2a6h4dmc6k2viv28oq5ekh4125hp.apps.googleusercontent.com',
});

const auth = getAuth(app);

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    const idToken = userInfo.data?.idToken;

    if (!idToken) {
      throw new Error('ID Token não veio');
    }

    const credential = GoogleAuthProvider.credential(idToken);

    const userCredential = await signInWithCredential(auth, credential);

    console.log('Usuário logado:', userCredential.user);

    return userCredential.user;

  } catch (error) {
    console.log('Erro no login:', error);
    throw error;
  }
}