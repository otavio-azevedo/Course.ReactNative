import React from "react";
import { View, Image, StyleSheet } from "react-native";

import TextCustom from "../../../components/TextCustom";

export default function Item({ item: { name, image } }) {

    return <View key={name} style={styles.item}>
        <Image source={image} style={styles.image} />
        <TextCustom style={styles.name}>{name}</TextCustom>
    </View>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginTop: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    }
});