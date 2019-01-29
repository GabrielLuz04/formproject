import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text, CheckBox, Alert } from 'react-native';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passw: ''
        }
    }

    LoginAlert = () => {
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
            
                <View style={{flexDirection: 'row'}}>
                    <CheckBox style={{paddingLeft: 20}}/>
                    <Text style={{paddingTop: 5}}>Remember Me</Text>

                    <TouchableOpacity>
                        <Text style={style.ForgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                 </View>

                <TouchableOpacity style={style.LoginButton}>
                    <Text style={style.LoginText} onPress={this.LoginAlert}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={style.SignUpText}>Don't have an account? 
                        <Text style={{color: '#669900'}}> Sign up ></Text>
                    </Text> 
                </TouchableOpacity>
            </View>
        );
    }
} 

const style = StyleSheet.create({
    InputBox: {
        width: 280,
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
    
    ForgotText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4.7,
        paddingLeft: 68,
        color: '#669900'
    },
    
    LoginButton: {
        width: 280,
        height: 40,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#558000',
        borderRadius: 1.6,
        backgroundColor: '#669900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        marginLeft: 14.5
    },
    
    LoginText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    SignUpText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        marginLeft: 38  
    },
})
