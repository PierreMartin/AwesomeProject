/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Text,
  View
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<any>();

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Button title="Tap here" onPress={() => { navigation.navigate('Screen2') }} />
    </View>
  );
};

const Screen2 = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Title screen",
      headerBackTitle: "Go Back custom text", // <===== Don't work here
    });
  }, [navigation]);

  return (
    <View>
      <Text>View...</Text>
    </View>
  );
};

function App({ }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
