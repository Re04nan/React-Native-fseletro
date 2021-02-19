import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Produtos from './src/pages/Produtos';

const Stack = createStackNavigator()

function App() {
  const [fonte] = useFonts({
    'Asap Condensed': require('./assets/fonts/AsapCondensed-Bold.ttf')
  });
  if (!fonte) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer initialRouteName='Home'>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Produtos" component={Produtos} options={{ title: 'Produtos' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
  export default App;

