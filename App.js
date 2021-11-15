import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, TextInput, TouchableHighlight, 
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, useEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './fireBase.js';
import { onSnapshot } from '@firebase/firestore';
import db from "./fireBase.js";

const Stack = createNativeStackNavigator();

const homeScreen =  ({navigation}) => {
  
  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
         
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.homePageTitle}></Text>
          <Text style={styles.homePageSubTitle}></Text>
        </View>
    </View>

    <View style = {styles.homePageEmojiView}>
      <View style = {styles.homePageLogo}>
         <Image source = {require('./assets/BerryPics/freshAsNyActualLogo.png')}/>
         <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click Here to Enter Information for Order"
            onPress = {() => navigation.navigate('Account')}
            color='#ff0000'>
        </Button>
      </View>
    </View>
      
    </View>
  );

}

const accountScreen =  ({navigation}) => {

  //users to be stored
  const[email, setEmail] = React.useState("Email");
  const[password, setPassword] = React.useState("Password");

  // Do not need a database, only store the users info and order
  // metehod for saving user email into authentication
  
  const placeOrder = () => {
    auth.signInWithEmailAndPassword(email.trim(), password) 
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>

    <View style = {styles.homePageStrawberry}>
   
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.homePageTitle}>Fresh As Ny 
          <Image style = {styles.accountlogo} source = {require('./assets/BerryPics/freshAsNyActualLogo.png')}/></Text>
          <Text style={styles.homePageSubTitle}>Enter email and password to order below ! </Text>
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
      </View><View style={styles.textSpace}>
    <TextInput styles =  {styles.textInput}
                placeholder = "Password: "
                onChangeText = {setPassword}
                value = {password}
                backgroundColor = "white"
                color = "gray"
                secureTextEntry
                >
      </TextInput>
      </View>
  
      <View>
            
              <View style = {styles.accountButtonView}>
                  <Button style={styles.rightButtonSpacing}
                  title = "Enter Email and Password"
                  onPress={placeOrder}
                  color='#ff0000'>
                  </Button>
              </View>
             

              
        </View>
        <Image style = {styles.accountBerry} source = {require('./assets/BerryPics/theStrawberry.png')}/>


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
          
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.searchPageTitle}>Please explore from our </Text>
          <Text style={styles.searchPageSubTitle}>Fresh amazing products! </Text>
        </View>
    </View>
</View>

<View style = {styles.prodcutsMiddleView}>
    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <View style={styles.searchPageListView}>
            <Text style={styles.searchPageList}>Products                            Sample</Text>
          </View>
          <View style = {styles.productsPageScrollView}>
              <ScrollView style = {styles.prodcutPageScrollView}>
                    <ScrollView horizontal={true}>
                        <Text> 
                          Heart Shapped Berry with Name
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic1.png')}/>
                          </Text>
                      </ScrollView>
                      <ScrollView horizontal={true}>

                        <Text> 
                          Halloween Berry Basket
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic2.png')}/>
                        </Text>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                    
                        <Text> 
                          Berries with Wine and Roses
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic3.png')}/>
                        </Text>
                       
                    </ScrollView>
                    <ScrollView horizontal={true}>
                   
                        <Text> 
                          Berries with Chocolate Heart
                          <Image style = {styles.productPageBerryPics} source = {require('./assets/BerryPics/BerryPic4.png')}/>
                          </Text>
                         
                      </ScrollView>
                      <ScrollView horizontal={true}>
                     
                        <Text> 
                          Berries with Wine
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

  // setting up request to be stored in firebase
  // call database to pull collecation of colors
  /*
  userEffect(() => {
      onSnapshot(,)
  })
  */


  //request to be stored
  const[product, setProduct] = React.useState("Please enter product");
  const[theme, setTheme] = React.useState("Please enter theme");
  const[color, setColor] = React.useState("Please enter color");
  const[date, setDate] = React.useState("Please enter date");
  const[message, setMessage] = React.useState("Please enter message");
  const[transportation, setTransportation] = React.useState("Please choose delivery or pick up");

  return (
    <View style={styles.container}>

<View style = {styles.prodcutsTopView}>
    <View style = {styles.homePageStrawberry}>
          
    </View>

    <View style = {styles.homePageWords}>
        <View style = {styles.homePageTitleView}>
          <Text style={styles.searchPageSubTitle}>Please choose a Berry Pakage</Text>
          <Text style={styles.searchPageSubTitle}>Fill out the custom message</Text>

        </View>
    </View>
</View>

<View style = {styles.prodcutsMiddleView}>
    <View style = {styles.homePageWords}>
    <Text style={styles.searchPageList}>Please enter product to be ordered</Text>
        <View style = {styles.homePageTitleView}>
          <View style={styles.textOrderSpace}>

              <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Email: "
                            onChangeText = {setProduct}
                            value = {product}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
            <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Email: "
                            onChangeText = {setTheme}
                            value = {theme}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
            <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Email: "
                            onChangeText = {setColor}
                            value = {color}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
            
            <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Password: "
                            onChangeText = {setDate}
                            value = {date}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
            <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Password: "
                            onChangeText = {setMessage}
                            value = {message}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
            
            <View style={styles.textSpace}>
                <TextInput styles =  {styles.textInput}
                            placeholder = "Password: "
                            onChangeText = {setTransportation}
                            value = {transportation}
                            backgroundColor = "white"
                            color = "gray"
                            >
                  </TextInput>
            </View>
          </View>
        </View>
    </View>
</View>

<View style = {styles.prodcutsBottomView}>
    <View style = {styles.prodcutsPageBottomView}>
       
    </View>

      <StatusBar style="auto" />
        <Button style = {styles.homePageButton}
            title = "Click here to place Order!"
            onPress = {() => navigation.navigate('Home')}
            color='#ff0000'>
        </Button>
  </View>

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
    backgroundColor: '#ffd3d4'
  },
  homePageTitleView : {
    paddingBottom: 50,
  },
  homePageTitle: {
    color: '#e03c31',
    fontFamily: 'Cookie',
    fontSize: 48,
  },
  productsScrollView: {
    //paddingBottom: 50,
    backgroundColor: '#FF6461'
  },
  homePageSubTitle: {
    color: '#e03c31',
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  homePageStrawberry : {
    flex: .5,
    display: "flex",
    flexDirection: "row",
  },
  homePageWords : {
    
  },
  homePageEmojiView :{
    
  },
  homePageBottomView : {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    //position: "absolute"
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
  homePageLogo : {
    marginBottom: 150
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
    width: 250,
  },
  textOrderSpace :{
    width: 280,
    position: "absolute",
    paddingTop: 30,
    paddingLeft: 50,
    marginBottom: 20
  },
  accountButtonView : {
    flexDirection: 'row',
    padding: 10,

  },
  accountBerry :{
    flex: 4,
    height: 200,
    width: 200
  },
  accountlogo :{
    height: 100,
    width: 100,
    paddingRight: 100,
  },
  searchPageTitle: {
    color: '#e03c31',
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  searchPageSubTitle: {
    color: '#e03c31',
    fontFamily: 'Roboto',
    fontSize: 32,
  },
  searchPageList: {
    color: '#e03c31',
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
      height: 290
  },
  productPageBerryPics :{
    height: 270,
    width: 190
},
productScrollView :{
    marginBottom: 100,
    paddingBottom: 100,
},
prodcutsTopView : {
  flex: 2,
  marginBottom: 40
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
prodcutsPageBottomViewText : {
  flex: 1,
  flexDirection: "row",
  paddingTop: 0,
  marginTop: 100
},
orderPageWords : {
  flex: 1,
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
    color: '#e03c31',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  orderPageOrders: {
    color: '#FF6461',
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingRight: 10,
  },
  orderPageScrollView : {
    paddingBottom: 100,
    height: 290,
    position: "absolute"
},
});
