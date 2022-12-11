import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { insertNote, updateNote, deleteNote } from "../services/Notes"

export default function NoteEditor({ showNotes, setNoteSelected, noteSelected }) {

  useEffect(() => {
    if (noteSelected.id) {
      setNoteToUpdate(true)
      fillModal()
      setModalVisible(true)
      return
    }
    setNoteToUpdate(false)
  }, [noteSelected])

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Personal")
  const [content, setContent] = useState("")
  const [modalVisibile, setModalVisible] = useState(false)
  const [noteToUpdate, setNoteToUpdate] = useState(false)

  async function saveNote() {
    const note = {
      title: title,
      category: category,
      content: content
    }

    await insertNote(note)
    clearModal()
    showNotes()
  }

  async function updateSelectedNote() {
    const note = {
      id: noteSelected.id,
      title: title,
      category: category,
      content: content
    }

    await updateNote(note)
    clearModal()
    showNotes()
  }

  async function deleteSelectedNote() {
    console.log(noteSelected)
    await deleteNote(noteSelected)
    clearModal()
    showNotes()
  }

  function fillModal() {
    setTitle(noteSelected.title)
    setCategory(noteSelected.category)
    setContent(noteSelected.content)
  }

  function clearModal() {
    setTitle("")
    setCategory("Personal")
    setContent("")
    setNoteSelected({})
    setModalVisible(false)
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibile}
        onRequestClose={() => { setModalVisible(false) }}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Create note</Text>
              <Text style={estilos.modalSubTitulo}>Title</Text>
              <TextInput
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={newTitle => setTitle(newTitle)}
                placeholder="Type your title here..."
                value={title} />
              
              <Text style={estilos.modalSubTitulo}>Category</Text>
              <View style={estilos.modalPicker}>
                <Picker
                  selectedValue={category}
                  onValueChange={newCategory => setCategory(newCategory)}>
                  <Picker.Item label="Personal" value="Personal" />
                  <Picker.Item label="Work" value="Work" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>

              <Text style={estilos.modalSubTitulo}>Content</Text>
              <TextInput
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={newContent => setContent(newContent)}
                placeholder="Type your content here..."
                value={content} />

              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => noteToUpdate ? updateSelectedNote() : saveNote()}>
                  <Text style={estilos.modalBotaoTexto}>Save</Text>
                </TouchableOpacity>
                {noteToUpdate ?
                  <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => { deleteSelectedNote() }}>
                    <Text style={estilos.modalBotaoTexto}>Delete</Text>
                  </TouchableOpacity> :
                  <></>}
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { clearModal() }}>
                  <Text style={estilos.modalBotaoTexto}>Cancel</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => { setModalVisible(true) }} style={estilos.addItem}>
        <Text style={estilos.addItemText}>+</Text>
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9A94",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitulo: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#2ea805",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#d62a18",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#057fa8",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  addItem: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  addItemText: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  }
})