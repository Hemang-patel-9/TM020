// auth.service.ts

import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  // Sign in with Google
  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return this.authLogin(provider);
  }

  // Authenticate with the specified provider
  private authLogin(provider:any) {
    return signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log('Successfully logged in!', result.user);
        // You can access user information from result.user
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  }
}
