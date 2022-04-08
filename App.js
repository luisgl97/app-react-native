import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MentoriaFormScreen from "./screens/MentoriaFormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Mentoria",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("MentoriaFormScreen")}
              >
                <Text style={{ color: "#ffffff", fontSize: 15 }}>New</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="MentoriaFormScreen"
          component={MentoriaFormScreen}
          options={{
            title: "Registrar nuevo aprendiz",
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
