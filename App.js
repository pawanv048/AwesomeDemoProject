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
import { color } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

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
  img_1: "https://raw.githubusercontent.com/byprogrammers/LCRN18-margaret-ecommerce-app-starter/master/assets/images/logo.png"
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

const COLORS = {
  // Error
  error: 'rgba(246, 86, 93, 1)',
  error80: 'rgba(246, 86, 93, 0.8)',
  error60: 'rgba(246, 86, 93, 0.6)',
  error20: 'rgba(246, 86, 93, 0.2)',
  error08: 'rgba(246, 86, 93, 0.08)',

  // Primary
  primary: 'rgba(78, 85, 175, 1)',
  primary80: 'rgba(78, 85, 175, 0.8)',
  primary60: 'rgba(78, 85, 175, 0.6)',
  primary20: 'rgba(78, 85, 175, 0.2)',
  primary08: 'rgba(78, 85, 175, 0.08)',

  // Secondary
  secondary: 'rgba(161, 219, 245, 1)',
  secondary80: 'rgba(161, 219, 245, 0.8)',
  secondary60: 'rgba(161, 219, 245, 0.6)',
  secondary20: 'rgba(161, 219, 245, 0.2)',
  secondary08: 'rgba(161, 219, 245, 0.08)',

  // Success
  success: 'rgba(253, 212, 70, 1)',
  success80: 'rgba(253, 212, 70, 0.8)',
  success60: 'rgba(253, 212, 70, 0.6)',
  success20: 'rgba(253, 212, 70, 0.2)',
  success08: 'rgba(253, 212, 70, 0.08)',

  // Dark
  dark: 'rgba(13, 15, 35, 1)',
  dark80: 'rgba(13, 15, 35, 0.8)',
  dark60: 'rgba(13, 15, 35, 0.6)',
  dark20: 'rgba(13, 15, 35, 0.2)',
  dark08: 'rgba(13, 15, 35, 0.08)',

  // Grey
  grey: 'rgba(160, 161, 180, 1)',
  grey80: 'rgba(160, 161, 180, 0.8)',
  grey60: 'rgba(160, 161, 180, 0.6)',
  grey20: 'rgba(160, 161, 180, 0.2)',
  grey08: 'rgba(160, 161, 180, 0.08)',

  // Light Grey
  lightGrey: 'rgba(247, 247, 247, 1)',
  lightGrey80: 'rgba(247, 247, 247, 0.8)',
  lightGrey60: 'rgba(247, 247, 247, 0.6)',
  lightGrey20: 'rgba(247, 247, 247, 0.2)',
  lightGrey08: 'rgba(247, 247, 247, 0.08)',

  // Light
  light: 'rgba(255, 255, 255, 1)',
  light80: 'rgba(255, 255, 255, 0.8)',
  light60: 'rgba(255, 255, 255, 0.6)',
  light20: 'rgba(255, 255, 255, 0.2)',
  light08: 'rgba(255, 255, 255, 0.08)',

  // Support 1
  support1: 'rgba(110, 162, 255, 1)',
  support1_08: 'rgba(110, 162, 255, 0.08)',

  // Support 2
  support2: 'rgba(249, 161, 218, 1)',
  support2_08: 'rgba(249, 161, 218, 0.08)',

  // Support 3
  support3: 'rgba(0, 210, 224, 1)',
  support3_08: 'rgba(0, 210, 224, 0.08)',

  // Support 4
  support4: 'rgba(255, 132, 13, 1)',
  support4_08: 'rgba(255, 132, 13, 0.08)',

  // Support 5
  support5: 'rgba(123, 96, 238, 1)',
  support5_08: 'rgba(123, 96, 238, 0.08)',

  // Shadow
  shadow: 'rgba(138, 149, 158, 1)',
  shadow08: 'rgba(138, 149, 158, 0.08)',
}

//Walkthrough

const TextButton = ({
  label,
  onPress,
  contentContainerStyle,
  labelStyle,
  disabled,
  props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        paddingHorizontal: 60,
        ...contentContainerStyle
      }}
      
    >
      <Text
        {...props}
        style={{
          fontSize: 13,
          fontWeight: '600',
          ...labelStyle
        }}>{label}</Text>
    </TouchableOpacity>
  )
}

// const TextButton = ({
//   contentContainerStyle,
//   disabled,
//   label,
//   labelStyle,
//   onPress
// }) => {
//   return (
//       <TouchableOpacity
//           style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: COLORS.primary,
//               ...contentContainerStyle
//           }}
//           disabled={disabled}
//           onPress={onPress}
//       >
//           <Text style={{ color: COLORS.secondary, ...FONTS.h3, ...labelStyle }}>
//               {label}
//           </Text>
//       </TouchableOpacity>
//   )
// }


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



  const scrollX = React.useRef(new Animated.Value(0)).current // defined initial values of x direction

  const Dots = () => {
    const dotPostion = Animated.divide(scrollX, width)
    console.log(dotPostion);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {
          walkthrough.map((item, index) => {
            const dotColor = dotPostion.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
              extrapolate: 'clamp'
            })

            return (
              <Animated.View
                key={`dot-${index}`}
                style={{
                  borderRadius: 5,
                  marginHorizontal: 6,
                  width: 10,
                  height: 10,
                  backgroundColor: dotColor
                }}

              />
            )
          })
        }
      </View>
    )
  }

  function renderFooterdes() {
    return (

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: height * 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
          paddingVertical: height > 700 ? 23 : 5,

        }}>
        <Dots />
        {/* Buttons */}
        <View style={{
          //backgroundColor: 'red',
          width: width,
          height: 48,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 10
        }}>
      
          <TextButton  
            label='Join Now'
            contentContainerStyle={{
              backgroundColor: COLORS.primary08,
            }}    
            labelStyle={{color: COLORS.primary }}
          />
          <TextButton 
            label='Log In' 
            labelStyle={{color: COLORS.light60 }}
            contentContainerStyle={{
              backgroundColor: COLORS.primary,
            }} 
          />
        </View>
      </View>
    )
  }


  function renderFooter() {
    return (
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        snapToInterval={width}
        decelerationRate='fast' // 0 to 1 
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false
          }
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: height * 0.35,
                alignItems: 'center',
                width: width,
                justifyContent: 'flex-start',
                paddingHorizontal: 70
              }}>
              <Text style={{
                fontSize: 25,
                fontWeight: '700',

              }}>{item.title}</Text>
              <Text style={{
                textAlign: 'center',
                marginTop: 20,
                color: 'grey'
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
      {renderFooterdes()}
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
          flex: 0.97,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <Image source={{ uri: images.img_1 }}
          style={{
            width: 150,
            height: 150,
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