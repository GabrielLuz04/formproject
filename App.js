import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text, CheckBox } from 'react-native';


import Login from './Login';

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5fafa',
    justifyContent: 'center',
    alignItems: 'center'
  }
})