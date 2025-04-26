import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={[{flex: 1, alignItems: 'center'}]}> 
                    <Image style={[{height: 50, width: 200,}]} source={require('../assets/images/LemonAID_Black.png')}/>
                </View>
            </SafeAreaView>

            <Text style={[{paddingBottom: 10, fontWeight: 'bold'}]}>Preview Our Availability</Text>
            <Image
                style={[{width: 350, height: 300, borderRadius: 20}]}
                source={require('../assets/images/calender.png')}
            />
            <Text style={[{paddingTop: 70}]}>Does August 22nd look good to you?</Text>
            <TouchableOpacity style={[styles.app_view, {backgroundColor: 'gold'}]} onPress={() => Alert.alert('Sorry',
                                    "This feature isn't implemented yet", [{ text: 'OK' }]
                                    )}>
                <Text style={[styles.app_text]}>Schedule Now</Text>
            </TouchableOpacity>

            <View style={styles.ghostbar}>
                <Image source={{ 
                width: 30,
                height: 30,
                uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffacd',
    },

    header: {
        top: 0,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#ffe761',
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
    
    app_text: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
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