import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Alert} from 'react-native';


// ignore the fact that i used an invisable character for styling 
const SignInScreen = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {
        if (email === 'email@lemon.aid' && password === 'password1234') {
            onSignIn();
        } else if (email === 'email@lemon.aid' && password != 'password1234'){
            Alert.alert('Incorrect Password');
        } else if (email != 'email@lemon.aid'){
            Alert.alert('Incorrect Email');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{marginTop: '40%'}}>Welcome to</Text>
            <Image
            style={styles.logo}
            source={require('../assets/images/LemonAID_Black.png')}/>
            <Text>Please sign-in below</Text>

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

            <Text style={[{marginTop: 60}, {marginBottom: 10}]}>-----  alternative sign in methods  -----</Text>

            <TouchableOpacity style={[styles.app_view, {backgroundColor: '#df4c39'}]} onPress={onSignIn}>
                <Image style={[styles.signin_img, {tintColor: '#fff'}]} source={require('../assets/images/google.png')}/>
                <Text style={[styles.app_text]}>Sign In with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.app_view, {backgroundColor: '#cc2127'}]} onPress={onSignIn}>
                <Image style={[styles.signin_img, {tintColor: '#fff'}]} source={require('../assets/images/pinterest.png')}/>
                <Text style={styles.app_text}>Sign In with Pinterest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.app_view, {backgroundColor: '#ff6600'}]} onPress={() => Alert.alert('What?',
                'who signs in with their Home Depot in 2024 😭😭😭😭☠️☠️', [{ text: 'OK' }]
                )}>
                <Image style={styles.signin_img} source={require('../assets/images/THD.jpg')}/>
                <Text style={styles.app_text}>Sign In with Home Depot</Text>
            </TouchableOpacity>

            <View style={[styles.register_container, {marginTop: 60}]}>
                <Text style={styles.register}>Don't have an account?ㅤ</Text> 
                <TouchableOpacity onPress={() => alert('this was NOT implimented')}><Text style={[styles.register, styles.link]}>Register Now</Text></TouchableOpacity>
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
        marginBottom: 60,
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
        borderColor: '#ffe761',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        width: '80%',
        backgroundColor: '#ffe761',
        justifyContent: 'center',
    },
    app_view: {
        height: 40,
        margin: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        width: '80%',
        backgroundColor: '#ffe761',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    signin_img: {
        marginLeft: 10,
        height: 33,
        width: 33,
    },
    app_text: {
        flex: 1,
        marginLeft: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    signin_text: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#e9b424',
        fontWeight: 'bold',
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