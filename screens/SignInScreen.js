import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Alert} from 'react-native';


// ignore the fact that i used an invisable character for styling 
const SignInScreen = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {
        if (email === 'email@lemon.aid' && password === 'password1234') {
            onSignIn();
        } else {
            Alert.alert('wrong fr');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to</Text>
            <Image
            style={styles.logo}
            source={require('../assets/images/LemonAID_Black.png')}/>
            <Text>It's been a while,</Text>
            <Button title="Sign In" onPress={onSignIn} />

            <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity
                style={[styles.password]} 
                onPress={() => Alert.alert('Here you go',
                '\nEmail:\nemail@lemon.aid\n\nPassword:\npassword1234', [{ text: 'Thanks!' }]
                )}><Text style={[styles.register]}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signin} onPress={checkCredentials}>
                <Text style={styles.signin_text}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.register_container}>
                <Text style={styles.register}>Are you new?ㅤ</Text> 
                <TouchableOpacity onPress={() => alert('this was NOT implimented')}><Text style={[styles.register, styles.link]}>Register</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffacd',
    },
    logo: {
        width: 200,
        height: 50,
    },
    input: {
        height: 40,
        margin: 5,
        borderColor: '#e9b424',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        width: '80%',
        backgroundColor: '#fff',
    },
    signin: {
        height: 40,
        margin: 5,
        borderColor: '#e9b424',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        width: '80%',
        backgroundColor: '#ffe761',
        justifyContent: 'center',
    },
    signin_text: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#e9b424'
    },
    link: {
        color: '#0000ff',
    },
    password: {
        alignSelf: 'stretch',
        marginRight: '10%',
        marginBottom: 20
    },
    register_container: {
        flexDirection: 'row',
        top: 0 // adjust this later
    },
    register: {
        textAlign: 'right',
        justifyContent: 'center',
        fontSize: 12
    },
});