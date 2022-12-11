import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import greenStar from '../assets/green-star.png';
import greyStar from '../assets/grey-star.png';


export default function Stars({
    onPress,
    disabled = true,
    starFilled,
    bigStar = false
}) {

    const styles = stylesFunction(bigStar);

    const getImage = (starFilled) => {
        if (starFilled) {
            return greenStar;
        } else {
            return greyStar;
        }
    }

    return <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
    >
        <Image
            source={getImage(starFilled)}
            style={styles.greenStar}
        />
    </TouchableOpacity >
}

const stylesFunction = (bigStar) => StyleSheet.create({
    greenStar: {
        width: bigStar ? 36 : 12,
        height: bigStar ? 36 : 12,
        marginRight: 2
    }
})