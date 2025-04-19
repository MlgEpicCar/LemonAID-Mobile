import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/TabManager";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;