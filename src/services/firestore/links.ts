import { Link } from '@/src/utils/links';
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

export async function createLink(data: {
  title: string;
  description: string;
  url: string;
  categoryId: string;
}) {
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(collection(db, "links"), {
    ...data,
    userId: user.uid,
    createdAt: serverTimestamp()
  });
}

export async function getLinks(): Promise<Link[]> {
  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "links"),
    where("userId", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<Link, "id">
  }));
}

export async function deleteLink(id: string) {
  await deleteDoc(doc(db, "links", id));
}