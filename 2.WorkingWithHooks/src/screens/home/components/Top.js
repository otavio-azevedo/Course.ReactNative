import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

import { loadTop } from "../../../services/loadData";
import logo from '../../../assets/logo.png';

//class component
class Top extends React.Component {

    state = {
        top: {
            title: '',
            subtitle: '',
        }
    };

    refreshTop() {
        const ret = loadTop();
        this.setState({ top: ret });
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount() {
        this.refreshTop()
    }

    render() {
        return <View style={styles.view}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.title}>{this.state.top.title}</Text>
            <Text style={styles.subtitletle}>{this.state.top.subtitle}</Text>
        </View >;
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    title: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color:'#464646',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    },
});

export default Top;