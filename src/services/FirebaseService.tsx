// @ts-ignore
import firestore from '@react-native-firebase/firestore';


const usersCollection = firestore().collection('users');

// 🔹 Nutzer zu Firestore hinzufügen
export const addUser = async (name: string) => {
  await usersCollection.add({
    name,
    focusTime: 0, // Standardwert
  });
};

// 🔹 Nutzer-Fokuszeit aktualisieren
export const updateUserFocusTime = async (userId: string, focusTime: number) => {
  await usersCollection.doc(userId).update({ focusTime });
};

// 🔹 Alle Nutzer aus Firestore abrufen (Leaderboard)
export const getUsers = async () => {
  const snapshot = await usersCollection.orderBy('focusTime', 'desc').get();
  return snapshot.docs.map((doc: { id: any; data: () => any; }) => ({ id: doc.id, ...doc.data() }));
};
