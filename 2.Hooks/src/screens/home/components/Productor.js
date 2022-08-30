import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Stars from '../../../components/Stars';

export default function Productor({ name, image, distance, stars }) {

    const [selected, setSelected] = React.useState(false);

    return <TouchableOpacity
        style={styles.card}
        onPress={() => setSelected(!selected)}
    >
        <Image source={image} accessibilityLabel={name} style={styles.image} />
        <View style={styles.view}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Stars
                    quantity={stars}
                    editable={selected}
                    bigStar={selected}
                />
            </View>
            <Text style={styles.distance}>{distance}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        //android
        elevation: 4,

        //ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
});