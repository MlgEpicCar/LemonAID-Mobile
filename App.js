import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  console.log("all good aha~"); // DELETE THIS WHEN DONE

  return (
    <SafeAreaView style={styles.container}>

      <Text> What Will You Do?</Text>
      <SafeAreaView style={styles.button_container}>
        <Button 
        title="High Five" 
        onPress={() => Alert.alert("YAY!")}/>

        <Button 
        title="STAB!"
        color="red"
        onPress={() => Alert.alert("you monster...")}/>

      </SafeAreaView>

      <TouchableWithoutFeedback>
        <Image source={{ 
          width: 350,
          height: 550,
          uri: "https://static.wikia.nocookie.net/shipping/images/1/1b/Character_Trailblazer_29_Destruction_Portrait.png/revision/latest?cb=20230716035459"}}/>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // #fffacd
    alignItems: 'center',
    justifyContent: 'center',
  },

  button_container: {
    alignItems: 'center',
  },
});
