import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text, CheckBox, Alert } from 'react-native';

export default class MyLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passw: ''
        }
    }

    LoginFunction = () => {
        const {email, passw} = this.state;

        if (email == '') {
            alert('Please, fill the Email box')
        }
        else if (passw == '') {
            alert('Please, fill the Password box')
        }
        else if (email.length < 15) {
            alert('Your email is incompleted.');
        }
        else if (passw.length < 7) {
            alert('Your password must be 7 characters or more.');
        } else{
            alert('Login done successfully');
        }
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={email => this.setState({email})} type="login" style={style.InputBox} placeholder="email adress" placeholderTextColor="#d9d9d9" />
                <TextInput onChangeText={passw => this.setState({passw})} type="password" style={style.InputBox} placeholder="password" placeholderTextColor="#d9d9d9" />

                <CheckBox title='Remember me'/>

                <TouchableOpacity>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.LoginButton}>
                    <Text style={style.LoginText} onPress={this.LoginFunction}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Don't have an account? Sign up</Text> 
                </TouchableOpacity>
            </View>
        );
    }
} 

const style = StyleSheet.create({
    InputBox: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        margin: 3,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#e6e6e6',
        borderRadius: 1.6,
        marginLeft: 15
    },
    LoginButton: {
        width: 250,
        height: 40,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#558000',
        borderRadius: 1.6,
        backgroundColor: '#669900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    LoginText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
    }
})
