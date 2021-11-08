import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const homeScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Image source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
        <Image source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
      </View>
      <Text style={styles.homePageTitle}>Fresh As Ny </Text>
      <Text style={styles.homePageSubTitle}>Welcome to Fresh As Ny ! </Text>
      <Image source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
      <StatusBar style="auto" />
      <Button
      title = "Search Screen"
      onPress = {() => navigation.navigate('Search')}>
      </Button>
    </View>
  );

}

const searchScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is a searchScreen</Text>
      <StatusBar style="auto" />
      <Button
      title = "Home Screen"
      onPress = {() => navigation.navigate('Home')}>
      </Button>
    </View>
  );

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Search" component={searchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFB6C1',
    backgroundColor: '#FFB6C1'
  },

  homePageTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 48,
  },
  homePageSubTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 18,
  }
});
