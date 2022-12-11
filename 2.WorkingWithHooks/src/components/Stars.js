import React from 'react';
import { View, StyleSheet } from 'react-native';
import Star from './Star';

export default function Stars({
    quantity: oldQuantity,
    editable = true,
    bigStar = false
}) {
    const [quantity, setQuantity] = React.useState(oldQuantity);

    const RenderStars = () => {

        const starsList = [];

        //random stars loop
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    starFilled={i < quantity}
                    bigStar={bigStar}
                />
            )
        }

        return starsList;
    }

    return <View style={styles.starsView}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    starsView: {
        flexDirection: 'row',
    },
})