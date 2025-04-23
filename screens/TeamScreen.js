import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, TouchableWithoutFeedback, Linking} from 'react-native';

const TeamScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={[{flex: 1, alignItems: 'center'}]}> 
                    <Image style={[{height: 50, width: 200,}]} source={require('../assets/images/LemonAID_Black.png')}/>
                </View>
            </SafeAreaView>

            <Text>Our Dedicated Team</Text>
            <View style={styles.teamContainer}>
                <View style={styles.teamContainerItem}>
                <Text style={[{fontSize: 11}]}>CEO</Text>
                    <Image style={styles.employee} source={require('../assets/images/team/CEO.jpg')}/>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>MlgEpicCar</Text>
                    <Text style={[{fontSize: 12}, {width: 100}, {height: 110}]}>
                        ㅤOur CEO also doubles as our lead programmer. He has created most of the projects on our projects page.
                    </Text>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://github.com/MlgEpicCar')}>
                        <Image style={[{width: 40}, {height: 40}, {tintColor: '#fffacd'}]} source={{uri: "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256"}}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.teamContainerItem}>
                <Text style={[{fontSize: 11}]}>CFO</Text>
                    <Image style={styles.employee} source={require('../assets/images/team/CFO.png')}/>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>Tangmar</Text>
                    <Text style={[{fontSize: 12}, {width: 100}, {height: 110}]}>
                        ㅤOur CFO steals all of our money from time to time.
                    </Text>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://github.com/Tangmar1')}>
                        <Image style={[{width: 40}, {height: 40}, {tintColor: '#fffacd'}]} source={{uri: "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256"}}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.teamContainerItem}>
                <Text style={[{fontSize: 11}]}>COO</Text>
                    <Image style={styles.employee} source={require('../assets/images/team/COO.jpg')}/>
                    <Text style={[{fontSize: 10}, {marginBottom: 7}]}>Tacoman</Text>
                    <Text style={[{fontSize: 12}, {width: 100}, {height: 110}]}>
                        ㅤOur COO does not do anything at all. He sits around while our CEO and CFO do everything else.
                    </Text>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://github.com/Tacoman777')}>
                        <Image style={[{width: 40}, {height: 40}, {tintColor: '#fffacd'}]} source={{uri: "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256"}}/>
                    </TouchableWithoutFeedback>
                </View>
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

export default TeamScreen;

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
});