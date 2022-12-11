import { db } from "./SQLite"
export function createTable() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
      "Notes " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, category TEXT, content TEXT);")
  })
}
export async function insertNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notes (title, category, content) VALUES (?, ?, ?);", [note.title, note.category, note.content], () => {
        resolve("Note created successfully!")
      })
    })
  })
}
export async function updateNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE Notes SET title = ?, category = ?, content = ? WHERE id = ?;", [note.title, note.category, note.content, note.id], () => {
        resolve("Note updated successfully!")
      })
    })
  })
}
export async function deleteNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM Notes WHERE id = ?;", [note.id], () => {
        resolve("Note deleted successfully!")
      })
    })
  })
}
export async function getAllNotes() {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notes;", [], (transaction, result) => {
        resolve(result.rows._array)
      })
    })
  })
}
export async function getNotesByCategory(category) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notes WHERE category = ?;", [category], (transaction, result) => {
        resolve(result.rows._array)
      })
    })
  })
}