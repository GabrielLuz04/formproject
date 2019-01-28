import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text } from 'react-native';

export default class Imgemail extends Component {
    render() {
        return (
            <View>
                <Image style={{ width: 10, height: 10}} 
                    source={require('./img_189000.png')}/>
            </View>
        )
    }
}

