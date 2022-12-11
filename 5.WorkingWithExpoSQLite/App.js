import React, { useEffect, useState } from "react"
import { SafeAreaView, StatusBar, StyleSheet, FlatList, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import NoteEditor from "./src/components/NoteEditor"
import { Note } from "./src/components/Note"
import { createTable, getAllNotes, getNotesByCategory } from "./src/services/Notes"

export default function App() {

  useEffect(() => {
    createTable()
    showNotes()
  }, [])

  const [filterCategory, setFilterCategory] = useState("All")
  const [noteSelected, setNoteSelected] = useState({})
  const [notes, setNotes] = useState([])

  async function showNotes() {
    console.log("show: " + filterCategory)
    setNotes(await getAllNotes())
  }

  async function filterList(filterCategory) {
    setFilterCategory(filterCategory)
    if (filterCategory == "All") {
      setNotes(await getAllNotes())
    } else {
      setNotes(await getNotesByCategory(filterCategory))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={(note) => <Note {...note} setNoteSelected={setNoteSelected} />}
        keyExtractor={note => note.id}
        ListHeaderComponent={() => {
          return (
            <View style={styles.picker}>
              <Picker
                selectedValue={filterCategory}
                onValueChange={(filterCategory) => filterList(filterCategory)}>
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Personal" value="Personal" />
                <Picker.Item label="Work" value="Work" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
          )
        }}
      />
      <NoteEditor showNotes={showNotes} setNoteSelected={setNoteSelected} noteSelected={noteSelected} />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  picker: {
    borderColor: "#54ba32",
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 12,
    margin: 2,
  },
})