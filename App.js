import * as React from 'react';
import MainContainer from './navagation/MainContainer';

<<<<<<< HEAD
function App() {
  return(
    <MainContainer/>
  )
}

export default App;
=======
export default function App() {
  console.log("all good aha~"); // DELETE THIS WHEN DONE

  return (
    <View>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>


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

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffe761',
  },

  navbar: { // Styles for navagation bar
    backgroundColor: '#ffe761',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: (0, 6),
  },

  navbar_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
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
  },
});

const body_styles = StyleSheet.create({
  container: {
    flex: 0, // I have no clue as to why, but if you set the flex to 1 everything with this style WILL disappear
    backgroundColor: '#fffacd',
  },
});
>>>>>>> parent of a1fde58 (V0.3.1 (scratch nav bar))
