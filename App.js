import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  
} from 'react-native';

const {width, height} =  Dimensions.get('window');

const Stack = createNativeStackNavigator();

const data = [
  { id: 1, imge: 'https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_960_720.jpg' },
  { id: 2, imge: 'https://cdn.pixabay.com/photo/2016/08/10/15/50/football-1583642_960_720.jpg' },
  { id: 3, imge: 'https://cdn.pixabay.com/photo/2022/11/29/08/54/race-car-7624025_960_720.jpg' },
  { id: 4, imge: 'https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_960_720.jpg' },
  { id: 5, imge: 'https://cdn.pixabay.com/photo/2016/11/22/23/40/hands-1851218_960_720.jpg' },
  { id: 6, imge: 'https://cdn.pixabay.com/photo/2018/03/30/17/34/perfume-3275960_960_720.jpg' },
  { id: 7, imge: 'https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164_960_720.jpg' },
  { id: 8, imge: 'https://cdn.pixabay.com/photo/2014/07/31/21/37/bar-406884_960_720.jpg' }
]

const images = {
  img_1: 'https://www.freeiconspng.com/uploads/blue-letter-m-icon-png-12.png',

}
const String = {
  title_1: `Welcome to ${'\n'} Margaret`,

}

const walkthrough = [
  {
    id: 0,
    title: "Genuine product",
    sub_title: "Diversified items of products in life, genuine product, safe",
  },
  {
    id: 1,
    title: "Convenient ordering",
    sub_title: "Order multiple items from multiple brands at the same time",
  },
  {
    id: 2,
    title: "Easy search",
    sub_title: "Find products easy with Scanning camera, pay with just one camera scan",
  },
  {
    id: 3,
    title: "Super fast delivery",
    sub_title: "Delivery within the next day including Saturday and Sunday",
  },
]

//Walkthrough

const WalkthroughScreen = () => {

  function renderHeader() {
    return (
      <View style={{ marginVertical: '40%' }}>
        <FlatList data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 5 }}>
                <Image source={{ uri: item.imge }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 5
                  }}
                />
              </View>
            )
          }}
        />
        <FlatList data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 5, marginTop: 15 }}>
                <Image source={{ uri: item.imge }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 5
                  }}
                />
              </View>
            )
          }}
        />


      </View>
    )
  };

  // const renderDescription = () => {
  //   return (
  //     <View style={{ alignItems: 'center' }}>
  //       <Text
  //         style={{
  //           marginBottom: 20,
  //           fontSize: 25,
  //           fontWeight: 'bold'
  //         }}>{String.title_2}</Text>
  //       <Text style={{
  //         textAlign: 'center',
  //         fontSize: 12,
  //         fontWeight: '300'
  //       }}>{String.desc_1}</Text>
  //     </View>
  //   )
  // }

  const scrollx = React.useRef(new Animated.Value(0)).current;

  function renderFooter() {
    return (
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: 'center',
                width: width ,
                justifyContent: 'center'
              }}>
              <Text style={{
                fontSize: 25,
                fontWeight: '700',
                marginBottom: 10
              }}>{item.title}</Text>
              <Text style={{
                textAlign: 'center'
              }}
               >{item.sub_title}</Text>
            </View>
          )
        }}
      />
    )
  };





  return (
    <View>
      {renderHeader()}
      {/* {renderDescription()} */}
      {renderFooter()}
    </View>
  )
}

// WELCOME
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <Image source={{ uri: images.img_1 }}
          style={{
            width: 200,
            height: 200,
            //backgroundColor: 'red',
            //tintColor: 'blue'
          }}
        />
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>{String.title_1}</Text>
      </View>
    )
  };

  const renderFooter = () => {
    return (
      <View style={{ paddingTop: 0 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('walkthrough')}
          style={{
            backgroundColor: 'rgb(63,75,183)',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 40,
            borderRadius: 10,
            marginTop: 40,
            padding: 15
          }}
        >
          <Text style={{
            color: 'rgb(142,213,239)',
            fontWeight: 'bold'
          }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            textAlign: 'center',
            marginVertical: 20,
            color: 'rgb(72,83,167)',
            lineHeight: 30,
            fontSize: 12,
            fontWeight: '700'
          }}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    )
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {renderHeader()}
      {renderFooter()}
    </View>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='walkthrough' component={WalkthroughScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})