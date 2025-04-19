import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

const PricesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Prices Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('bro clicked the button')}
            />

            <View style={styles.ghostbar}>
                <Image source={{ 
                width: 30,
                height: 30,
                uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
            </View>
        </View>
    )
}

export default PricesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffacd',
    },

    ghostbar: {
        bottom: 0,
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 10000,
        borderWidth: 65,
        borderColor: '#ffe761',
        borderStyle: 'solid',
    },
});