
import { Category } from '@/src/utils/categories';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

export async function createCategory(name: string, icon: string) {
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(collection(db, "categories"), {
    name,
    icon,
    userId: user.uid
  });
}

export async function getCategories(): Promise<Category[]> {
  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "categories"),
    where("userId", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<Category, "id">
  }));
}

export async function categoryHasLinks(categoryId: string) {
  const q = query(
    collection(db, "links"),
    where("categoryId", "==", categoryId)
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}

export async function deleteCategories(id: string) {
  await deleteDoc(doc(db, "categories", id));
}