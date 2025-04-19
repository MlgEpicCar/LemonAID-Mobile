import { NavigationContainer } from "@react-navigation/native";
import TabManager from "./navigation/TabManager";

const App = () => {
  return (
    <NavigationContainer>
      <TabManager />
    </NavigationContainer>
  );
}

export default App;