/**
 * Firebase web app config (registered in console 2026-07-28).
 *
 * NOT currently used: Firebase Hosting serves this site as static files and
 * needs no SDK. Install the `firebase` package and call `initializeApp` with
 * this config only when a client SDK feature (Firestore, Analytics, Auth) is
 * actually added — keeping the SDK out saves ~30 KB+ of bundle.
 *
 * These values are public identifiers by design, safe to commit.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyC1EAfl_CfOLKkDezDx-sG_5CMCgwWCnUM",
  authDomain: "manuel-pacheco-portfolio.firebaseapp.com",
  projectId: "manuel-pacheco-portfolio",
  storageBucket: "manuel-pacheco-portfolio.firebasestorage.app",
  messagingSenderId: "325393416800",
  appId: "1:325393416800:web:924c5516c27b3aa594b905",
} as const;
