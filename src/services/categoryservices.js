import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "category");
class CatDataService {
  addCat = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updatecat = (id, updatedBook) => {
    const bookDoc = doc(db, "category", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "category", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "category", id);
    return getDoc(bookDoc);
  };

  filtercategory = (id) => {
     const bookDoc = doc(db, "category", id);
    return getDoc(bookDoc);
  }
}

export default new CatDataService();
