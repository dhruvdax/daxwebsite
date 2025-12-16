'use server';
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { firebaseConfig } from './config';

function getFirebaseAdmin() {
  if (getApps().length > 0) {
    const app = getApp();
    return {
      firebaseApp: app,
      firestore: getFirestore(app),
      storage: getStorage(app),
    };
  }

  const app = initializeApp({
    credential: undefined, // Let auto-discovery handle credentials
    storageBucket: `${firebaseConfig.projectId}.appspot.com`,
  });

  return {
    firebaseApp: app,
    firestore: getFirestore(app),
    storage: getStorage(app),
  };
}

export { getFirebaseAdmin };
