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
          <Image style = {styles.homePageTopStrawberryRight} source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
          <Image style = {styles.homePageTopStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
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
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>


      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click Here for Products"
            onPress = {() => navigation.navigate('Products')}>
        </Button>
    </View>
  );

}

const productsScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
          <Image style = {styles.homePageTopStrawberryRight} source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
          <Image style = {styles.homePageTopStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.searchPageTitle}>Please select from our </Text>
          <Text style={styles.searchPageSubTitle}>Fresh amazing products! </Text>
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.searchPageList}>Products   Description   Sample</Text>
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.searchPageOrders}>Previous Orders</Text>
        </View>
    </View>

    <View style = {styles.homePageBottomView}>
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click here to place Order!"
            onPress = {() => navigation.navigate('Order')}>
        </Button>
    </View>
  );

}

const orderScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
          <Image style = {styles.homePageTopStrawberryRight} source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
          <Image style = {styles.homePageTopStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.orderPageTitle}>The products selected to order</Text>
          <Text style={styles.orderPageSubTitle}>Please Review before checking out </Text>
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.orderPageList}>Order Review</Text>
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.orderPageOrders}>Order Total</Text>
        </View>
    </View>

    <View style = {styles.homePageBottomView}>
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Place Your Order!"
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
      <Stack.Screen name="Products" component={productsScreen} />
      <Stack.Screen name="Order" component={orderScreen} />
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
    flex: .5,
    display: "flex",
    flexDirection: "row",
  },
  homePageWords : {
    flex: 1,
  },
  homePageEmojiView :{
    flex: 3
  },
  homePageBottomView : {
    flex: 1,
    flexDirection: "row"
  },
  homePageTopStrawberryLeft :{
      marginLeft: 250
  },
  homePageTopStrawberryRight :{
    
  },
  homePageBottomStrawberryLeft :{
    marginRight: 250,
    marginTop : 50
  },
  homePageBottomStrawberryRight :{
    marginTop : 50
  },
  homePageEmoji : {
    marginRight: 100,
  },
  homePageButton : {
    paddingBottom: 10
  },
  searchPageTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  searchPageSubTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  searchPageList: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 20,
    padding: 5
  },
  searchPageOrders: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingRight: 150,
    paddingTop: 25
  },
  orderPageTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 28,
  },
  orderPageSubTitle: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 24,
  },
  orderPageList: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 20,
    padding: 5
  },
  orderPageOrders: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 25
  },
});
