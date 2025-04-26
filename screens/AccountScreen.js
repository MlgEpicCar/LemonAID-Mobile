import React from 'react';
import * as Updates from 'expo-updates';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';

const AccountScreen = ({ navigation }) => {
    const handleSignOut = () => {
        Updates.reloadAsync();
    };
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={[{flex: 1, alignItems: 'center'}]}> 
                    <Image style={[{height: 50, width: 200,}]} source={require('../assets/images/LemonAID_Black.png')}/>
                </View>
            </SafeAreaView>

            <View style={styles.viewContainer}>
                <View style={styles.user}>
                    <Image
                    style={[{height: 100, width: 100, borderRadius: 50,}]}
                    source={require('../assets/images/pratt.jpg')}
                    />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{marginLeft: 10, color: 'gold', fontWeight: 'bold'}}>
                            Christopher Prattuth
                        </Text>
                        <Text style={{marginLeft: 10, fontSize: 11, color: '#fffacd', fontWeight: 'bold'}}>
                            email@lemon.aid
                        </Text>
                        <TouchableOpacity style={[{backgroundColor: 'blue', borderRadius: 100, alignItems: 'center', marginLeft: 10, marginTop: 20, }]} onPress={handleSignOut}>
                            <Text style={[{color: 'white', fontWeight: 'bold'}]}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.basic}>
                    <Text>Change Password</Text>
                    <Text style={{marginLeft: 10,}}>************</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicOther}>
                    <Text>Install Malware</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic}>
                    <Text>Function Three</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicOther}>
                    <Text>Change Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic}>
                    <Text>Edit Timezone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicOther}>
                    <Text>Manage Websites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic}>
                    <Text>Star in Movie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicOther}>
                    <Text>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic}>
                    <Text>Account Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basicOther}>
                    <Text>Bonus Settings</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.ghostbar}>
                <Image source={{ 
                width: 30,
                height: 30,
                uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
            </View>
        </View>
    )
}

export default AccountScreen;

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

    viewContainer: {
        width: '100%',
        backgroundColor: 'grey',
    },

    user: {
        backgroundColor: 'darkgrey',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    basic: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
    },

    basicOther: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
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