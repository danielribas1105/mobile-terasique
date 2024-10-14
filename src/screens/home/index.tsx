import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./home"
import TabsScreen from "../tabs"

export default function App() {

   const Stack = createStackNavigator();

   return (
      <NavigationContainer>
         <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
               headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tabs" component={TabsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
