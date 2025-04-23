import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const ProjectsScreen = ({ navigation }) => {
  const video = useRef(null);
  const scrollViewRef = useRef(null);
  const scrollOffset = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollViewRef.current && scrollOffset.current > 0) {
        scrollViewRef.current.scrollTo({ y: scrollOffset.current, animated: false });
      }
    }, 100); // delay to ensure ScrollView is fully rendered
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <View style={styles.container}>

        <SafeAreaView style={styles.header}>
                        <View style={[{flex: 1, alignItems: 'center'}]}> 
                            <Image style={[{height: 50, width: 200,}]} source={require('../assets/images/LemonAID_Black.png')}/>
                        </View>
                    </SafeAreaView>
    <View pointerEvents='none'>
        <Video
            ref={video}
            source={require('../assets/videos/burger.mp4')}
            style={[styles.video]}
            resizeMode="cover"
            pointerEvents='none'
            useNativeControls
            isLooping
            shouldPlay
            isMuted
        />
    </View>
        
      <View style={styles.overlay}>
        <Text style={[styles.title, {fontSize: 20}]}>Our Portfolio</Text>
        </View>
        <View style={styles.overlay2}>
        </View>

    <ScrollView ref={scrollViewRef}
      onScroll={event => {
        scrollOffset.current = event.nativeEvent.contentOffset.y;
      }}
      scrollEventThrottle={16} 
      style={styles.contentOverlay}>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/LemonAID.png' }}/>
            <Text style={styles.scrollText}>LemonAID Website</Text>
        </View>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/SandCraft.png' }}/>
            <Text style={styles.scrollText}>Modern SandCraft Website</Text>
        </View>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/MTV.png' }}/>
            <Text style={styles.scrollText}>MTV Remake</Text>
        </View>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/Photo.png' }}/>
            <Text style={styles.scrollText}>Photo Gallery</Text>
        </View>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/Utah.png' }}/>
            <Text style={styles.scrollText}>Utah Website</Text>
        </View>
        <View style={styles.content}>
            <Image style={{ width: 222, height: 125 }}  source={{ uri: 'https://mlgepiccar.github.io/LemonAID/images/websites/SandCraft_Old.png' }}/>
            <Text style={styles.scrollText}>SandCraft Website</Text>
        </View>
        <View style={{paddingBottom: 140}}>

        </View>
    </ScrollView>

      <View style={styles.ghostbar}>
        <Image
          source={{
            width: 30,
            height: 30,
            uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"
          }}
        />
      </View>
    </View>
  );
};


export default ProjectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fffacd',
    },


    contentOverlay: {
        position: 'absolute',
        top: '50%',
        height: '50%',
        zIndex: 5,
        flexDirection: 'column',
        paddingHorizontal: 10,
    },

    scrollText: {
        marginTop: 2,
        marginBottom: 18,
    },

    header: {
        top: 0,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#ffe761',
        zIndex: 1
    },
    video: {
        marginTop: 90,
        width: 400,
        height: 420,
    },
    overlay: {
        alignItems: 'center',
        position: 'absolute',
        top: '45%',
        backgroundColor: 'gold',
        borderRadius: 25,
        width: '80%',
        height: 1000,
        paddingTop: 10,
        zIndex: 2,
    },
    overlay2: {
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        backgroundColor: '#ffe791',
        borderRadius: 40,
        width: '100%',
        height: 1000,
        paddingTop: 10,
        zIndex: 1,
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
        zIndex: 7
    },
});
