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

const productCollectionRef = collection(db, "products");
class ProductDataService {
  addBooks = (newBook) => {
    return addDoc(productCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "products", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "products", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(productCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "products", id);
    return getDoc(bookDoc);
  };

  filtercategory = (id) => {
     const bookDoc = doc(db, "products", id);
    return getDoc(bookDoc);
  }
}

export default new ProductDataService();
