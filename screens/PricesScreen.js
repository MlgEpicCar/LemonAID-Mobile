import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';

const PricesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={[{flex: 1, alignItems: 'center'}]}> 
                    <Image style={[{height: 50, width: 200,}]} source={require('../assets/images/LemonAID_Black.png')}/>
                </View>
            </SafeAreaView>

            <Text>Here are our prices</Text>
            <View style={styles.teamContainer}>
                <View style={styles.teamContainerItem}>
                <Text style={[{fontSize: 12}]}>Basic</Text>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>$149.99</Text>
                    <Text style={[{fontSize: 11}, {width: 100}, {height: 110}]}>
                        4 Page Website {'\n'} {'\n'}
                        High Quality {'\n'} {'\n'}
                    </Text>
                    <TouchableOpacity style={[styles.app_view]} onPress={() => Alert.alert('Sorry',
                        "This feature isn't implemented yet", [{ text: 'OK' }]
                        )}>
                        <Text style={styles.app_text}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.teamContainerItem, {backgroundColor: '#ffe761'}]}>
                <Text style={[{fontSize: 12}]}>Premium</Text>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>$249.99</Text>
                    <Text style={[{fontSize: 11}, {width: 100}, {height: 110}]}>
                        6 Page Website {'\n'} {'\n'}
                        3 Page Mobile App {'\n'} {'\n'}
                        Higher Quality {'\n'} {'\n'}
                        $75 Maintainence {'\n'} {'\n'}
                    </Text>
                    <TouchableOpacity style={[styles.app_view]} onPress={() => Alert.alert('Sorry',
                        "This feature isn't implemented yet", [{ text: 'OK' }]
                        )}>
                        <Text style={styles.app_text}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.teamContainerItem, {backgroundColor: 'gold'}]}>
                <Text style={[{fontSize: 12}]}>Gold</Text>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>$349.99</Text>
                    <Text style={[{fontSize: 11}, {width: 100}, {height: 110}]}>
                        12 Page Website {'\n'} {'\n'}
                        6 Page Mobile App {'\n'} {'\n'}
                        Highest Quality {'\n'} {'\n'}
                        $50 Maintainence {'\n'} {'\n'}
                    </Text>
                    <TouchableOpacity style={[styles.app_view]} onPress={() => Alert.alert('Sorry',
                        "This feature isn't implemented yet", [{ text: 'OK' }]
                        )}>
                        <Text style={styles.app_text}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[{fontSize: 12, padding: 5, margin: 5,}]}>For examples of what this purchase can get you, please check out our projects page!</Text>

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

    header: {
        top: 0,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#ffe761',
    },

    teamContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    employee: {
        height: 100,
        width: 100,
    },

    teamContainerItem: {
        alignItems: 'center',
        backgroundColor: '#ffe791',
        paddingTop: 10,
        marginTop: 0,
        padding: 5,
        margin: 5,
        paddingBottom: 5,
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

    app_view: {
        height: 30,
        margin: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#eb593b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    app_text: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
});