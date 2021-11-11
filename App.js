import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { auth } from './fireBase.js';

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
            title = "Click Here to create an Account"
            onPress = {() => navigation.navigate('Account')}
            color='#ff0000'>
        </Button>
    </View>
  );

}

const accountScreen =  ({navigation}) => {

  //users to be stored
  const[email, setEmail] = React.useState("Email");

  // Do not need a database, only store the users info and order
  // metehod for saving user email into authentication
  
  const placeOrder = () => {
    auth.createUserWithEmail(email)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
          <Image style = {styles.homePageTopStrawberryRight} source = {require('./assets/strawberry/chocolateStrawBerry.png')}/>
          <Image style = {styles.homePageTopStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64.png')}/> 
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.homePageTitle}>Fresh As Ny </Text>
          <Text style={styles.homePageSubTitle}>Enter email to order below ! </Text>
        </View>
    </View>

      <View style={styles.textSpace}>
    <TextInput styles =  {styles.textInput}
                placeholder = "Email: "
                onChangeText = {setEmail}
                value = {email}
                backgroundColor = "white"
                color = "gray"
                >
      </TextInput>
      </View>
  
      <View>
            <View style = {styles.accountButtonView}>
              <View style = {styles.accountButtonView}>
                  <Button style={styles.rightButtonSpacing}
                  title = "Enter Email"
                  onPress={placeOrder}
                  color='#ff0000'>
                  </Button>
              </View>
              </View>
        </View>
    

    <View style = {styles.homePageBottomView}>
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>


      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click Here for Products"
            onPress = {() => navigation.navigate('Products')}
            color='#ff0000'>
        </Button>
    </View>
  );

}

const productsScreen =  ({navigation}) => {
  return (
    <View style={styles.container}>

<View style = {styles.prodcutsTopView}>
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
</View>

<View style = {styles.prodcutsMiddleView}>
    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <View style={styles.searchPageListView}>
            <Text style={styles.searchPageList}>Products        Description        Sample</Text>
          </View>
          <View style = {styles.productsPageScrollView}>
              <ScrollView style = {styles.prodcutPageScrollView}>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Berry One This is a normal berry arangement
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic1.png')}/>
                          </Text>
                      </ScrollView>
                      <ScrollView horizontal={true}>
                        <Text> 
                          Berry Two This is a halloween berry basket
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic2.png')}/>
                        </Text>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Berry Three This is a white chocolate berry with roses
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic3.png')}/>
                        </Text>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Berry Four This berry is a chocolate berry
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic4.png')}/>
                          </Text>
                      </ScrollView>
                      <ScrollView horizontal={true}>
                        <Text> 
                          Berry Five This berry is a chocolate berry
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic5.png')}/>
                        </Text>
                    </ScrollView>
              </ScrollView>
          </View>
        </View>
    </View>
</View>

<View style = {styles.prodcutsBottomView}>
    <View style = {styles.homePageWords}>
       
    </View>

    <View style = {styles.prodcutsPageBottomView}>
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click here to place Order!"
            onPress = {() => navigation.navigate('Order')}
            color='#ff0000'>
        </Button>
  </View>

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
          <View style = {styles.productsPageScrollView}>
              <ScrollView style = {styles.prodcutPageScrollView}>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Jasmines Order
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic1.png')}/>
                          </Text>
                      </ScrollView>
                      <ScrollView horizontal={true}>
                        <Text> 
                          Berry One
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic2.png')}/>
                        </Text>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Berry Two
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic3.png')}/>
                        </Text>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Berry Three
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic4.png')}/>
                          </Text>
                      </ScrollView>
                      <ScrollView horizontal={true}>
                        <Text> 
                          Berry Four
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic5.png')}/>
                        </Text>
                    </ScrollView>
              </ScrollView>
          </View>
        </View>
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          
        </View>
    </View>

    <View style = {styles.homePageBottomView}>
        <Image style = {styles.homePageBottomStrawberryLeft} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
        <Image style = {styles.homePageBottomStrawberryRight} source = {require('./assets/strawberry/icons8-strawberry-64(1).png')}/>
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Place Your Order!"
            onPress = {() => navigation.navigate('Home')}
            color='#ff0000'>
        </Button>
    </View>
  );

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Account" component={accountScreen} />
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
  productsScrollView: {
    paddingBottom: 50,
    backgroundColor: '#FF6461'
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
  textInput :{
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    marginBottom: 10,
  },
  textSpace :{
    paddingBottom: 10,
    paddingTop: 10,
    width: 200,
  },
  accountButtonView : {
    flexDirection: 'row',
    padding: 10,

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
    padding: 5,
  },
  searchPageListView: {

  },
  searchPageOrders: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#FF6461',
    paddingRight: 150,
    paddingTop: 25,
    marginTop: 50
  },
  prodcutPageScrollView : {
      paddingBottom: 100,
      height: 275
  },
  productPageBerryPics :{
    height: 250,
    width: 175
},
productScrollView :{
    marginBottom: 100,
    paddingBottom: 100,
},
prodcutsTopView : {
  flex: 2
},
prodcutsMiddleView : {
  flex: 1
},
prodcutsBottomView : {
  flex: 3
},
prodcutsPageBottomView : {
  flex: 1,
  flexDirection: "row",
  paddingTop: 45
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
    paddingTop: 45
  },
});
