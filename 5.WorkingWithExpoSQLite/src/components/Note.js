import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Note({ item, setNoteSelected }) {
  console.log(item)

  const categories = { Personal: "#FF924F", Other: "#00911F", Work: "#2F71EB" }
  const style = styleFunction(categories[item.category])

  return (
    <TouchableOpacity style={style.card} onPress={() => setNoteSelected(item)}>
      <Text style={style.title} >{item.title}</Text>
      <Text style={style.category}>{item.category}</Text>
      <Text style={style.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styleFunction = (cor) => StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: cor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  category: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
  text: {
    lineHeight: 28,
  }
})
