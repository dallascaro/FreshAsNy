import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const homeScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
        <View style = {styles.homePageTopStrawberryRight}>
          <Image source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
        </View>

        <View style = {styles.homePageTopStrawberryLeft}>
          <Image source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.homePageTitle}>Fresh As Ny </Text>
          <Text style={styles.homePageSubTitle}>Welcome to Fresh As Ny ! </Text>
        </View>
    </View>

    <View style = {styles.homePageEmojiView}>
      <View style = {styles.homePageEmoji}>
      <Image source = {require('./assets/babesEmoji.png')}/>
      </View>
    </View>

    <View style = {styles.homePageBottomView}>
      <View style = {styles.homePageBottomStrawberryLeft}>
        <Image source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
      </View>
     
      <View style = {styles.homePageBottomStrawberryRight}>
      <Image source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
      </View>
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
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
  homePageTitleView : {
    paddingBottom: 50,
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
  },
  homePageStrawberry : {
    flex: 1
  },
  homePageWords : {
    flex: 1,
  },
  homePageEmojiView :{
    flex: 2
  },
  homePageBottomView : {
    flex: 4,
  },
  homePageTopStrawberryLeft :{
    marginLeft: 270,
    marginBottom: 10
  },
  homePageTopStrawberryRight :{
    marginRight: 270,
  },
  homePageBottomStrawberryLeft :{
    paddingRight: 10,
    marginRight: 250,
    marginTop: 175,
    paddingTop: 50
  },
  homePageBottomStrawberryRight :{
    marginLeft: 250,
    paddingBottom: 20

  },
  homePageEmoji : {
    marginRight: 100
  },
  homePageButton : {
    paddingBottom: 10
  }
});
