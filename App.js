import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import InicioSesionScreen from "./screens/InicioSesionScreen";
import InformacionScreen from "./screens/InformacionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="InicioSesionScreen"
          component={InicioSesionScreen}
          options={{
            title: "Inicio Sesion",
            headerStyle: { backgroundColor: "#ff5400" },
            headerTitleStyle: { color: "#fff" },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Entregas",
            headerStyle: { backgroundColor: "#ff5400" },
            headerTitleStyle: { color: "#fff" },
            headerTintColor: "#ffffff",
          }}
        />
         <Stack.Screen
          name="InformacionScreen"
          component={InformacionScreen}
          options={{
            title: "Datos de entrega",
            headerStyle: { backgroundColor: "#ff5400" },
            headerTitleStyle: { color: "#fff" },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
