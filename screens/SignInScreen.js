import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

const SignInScreen = ({ onSignIn }) => {
    return (
        <View style={styles.container}>
            <Text>SignIn Screen aha~</Text>
            <Button title="Log In" onPress={onSignIn} />
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
});