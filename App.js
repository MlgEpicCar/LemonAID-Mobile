import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  console.log("all good aha~"); // DELETE THIS WHEN DONE

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.navbar}>
        <Text style={styles.navbar_text}>Examples</Text>
        <Text style={styles.navbar_text}>Prices</Text>
        <TouchableWithoutFeedback>
          <Image source={{ 
            width: 50,
            height: 50,
            uri: "https://github.com/MlgEpicCar/LemonAID/blob/main/images/LemonLogo.png?raw=true"}}/>
        </TouchableWithoutFeedback>
        <Text style={styles.navbar_text}>Team</Text>
        <Text style={styles.navbar_text}>Account</Text>

      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fffacd',
  },

  navbar: { // Styles for navagation bar
    backgroundColor: '#fffacd',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },

  navbar_text: {
    margin: (10, 10, 10, 10),
  },

  body: {
    backgroundColor: 'ffffff'
  }
});
