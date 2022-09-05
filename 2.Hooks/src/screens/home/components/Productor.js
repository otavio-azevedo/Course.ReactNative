import React, { useReducer, useMemo } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Stars from '../../../components/Stars';

const distanceFormated = (distance) => {
    console.log(distance);
    return `${distance}m`;
}

export default function Productor({ name, image, distance, stars }) {

    const [selected, invertSelected] = useReducer(
        (selected) => !selected,
        false
    );
    
    //Retorna um valor memoizado
    //O valor só será recalculado se uma das dependências mudar (distance)
    const textDistance = useMemo(() => distanceFormated(distance), [distance]);

    return <TouchableOpacity
        style={styles.card}
        onPress={invertSelected}
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
            <Text style={styles.distance}>{textDistance}</Text>
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