import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions, Alert } from 'react-native';
import Color from '../config/color.json';

const screenwidth = Dimensions.get('window').width;

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    goToNextPage() {
        this.props.navigation.navigate("Hello");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5, backgroundColor: "#333344", width: screenwidth }}>
                    <Text style={{ color: "white" }}> Hi, qeiya </Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: Color.qieyamaroon, width: screenwidth }}>
                    <Text> Welcome </Text>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../images/video.png')}
                    />
                    <Button
                        //onPress={() => this.goToNextPage()}                       //cara ni boleh pakai (ni call function goToNextPage())
                        onPress={() => this.props.navigation.navigate('Hello')}     //cara ni pon boleh pakai
                        title="Bawaku ke page lain"
                        color="#841584"
                    />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})