'use server';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

function getFirebaseAdmin() {
  if (getApps().length > 0) {
    const app = getApp();
    return {
      firebaseApp: app,
      firestore: getFirestore(app),
      storage: getStorage(app),
    };
  }

  // Initialize without arguments to use Application Default Credentials
  const app = initializeApp();

  return {
    firebaseApp: app,
    firestore: getFirestore(app),
    storage: getStorage(app),
  };
}

export { getFirebaseAdmin };
