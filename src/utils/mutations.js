import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './firebase';


// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   marked: false,
   category: 0,
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      marked: entry.marked,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });
}

export async function updateEntry(entry) {
   await updateDoc(doc(db, "entries", entry.id), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      marked: entry.marked,
      category: entry.category,
   })
}

export async function deleteEntry(entry) {

      await deleteDoc(doc(db, "entries", entry.id));
   
}