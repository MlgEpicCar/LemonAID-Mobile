import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView, Button, Alert, ScrollView } from 'react-native';
 
export default function App() {
  console.log("all good aha~"); // DELETE THIS WHEN DONE


  return (
    <View>
      <ScrollView style={body_styles.container}>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>


        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>


        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>
        <Text> hello</Text>

      </ScrollView>


      
      

      <View style={styles.container}>
        <SafeAreaView style={styles.navbar}>
          <View style={styles.navbar_view}>
            <Text style={styles.navbar_text}>Projects</Text>
          </View>
          <View style={styles.navbar_view}>
            <Text style={styles.navbar_text}>Prices</Text>
          </View>
          <TouchableWithoutFeedback style={styles.navbar_view}>
            <Image source={{ 
              width: 70,
              height: 70,
              uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
          </TouchableWithoutFeedback>
          <View style={styles.navbar_view}>
            <Text style={styles.navbar_text}>Team</Text>
          </View>
          <View style={styles.navbar_view}>
            <Text style={styles.navbar_text}>Account</Text>
          </View>

        </SafeAreaView>
      </View>

      <View style={styles.container}>
        <SafeAreaView style={styles.ghostbar}>
          <View style={styles.ghostbar}>
            
          </View>
          <View style={styles.ghostbar}>
            
          </View>
          <View style={styles.navbar_image}>
            <Image source={{ 
              width: 30,
              height: 30,
              uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
          </View>
          <View style={styles.ghostbar}>
            
          </View>
          <View style={styles.ghostbar}>
            
          </View>

        </SafeAreaView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // flex: 0,
    backgroundColor: '#ffe761',
    height: 50,
    paddingTop: 10,
  },

  navbar: { // Styles for navagation bar
    backgroundColor: '#ffe761',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 40,
    position: 'absolute',
    height: 80,
    width: '100%',
    zIndex: 1,
  },

  navbar_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    zIndex: 1,
  },

  navbar_view: {
    justifyContent: 'center',
    flex: 1,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#ffd761',
    margin: 3,
    borderColor: '#e9b424',
    borderWidth: 1,
    zIndex: 1,
  },

  navbar_image: {
    borderRadius: 10000,
    borderWidth: 50,
    borderColor: '#ffe761',
    borderStyle: 'solid',
    zIndex: 0,
  },

  ghostbar: {
    flex: 1,
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 70,
    position: 'absolute',
    height: 80,
    width: '100%',
    zIndex: 0,
  },
});

const body_styles = StyleSheet.create({
  container: {
    flex: 0, // I have no clue as to why, but if you set the flex to 1 everything with this style WILL disappear
    backgroundColor: '#fffacd',
  },
});
