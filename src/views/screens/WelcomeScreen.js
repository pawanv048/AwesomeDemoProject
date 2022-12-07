import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const WelcomeScreen = () => {
  const [isActive , setisActive] = useState(false)

  function renderWelcomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <Icon name='star' size={140} color='rgb(63,75,162)'/>
          <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Welcome to {'\n'} Margaret</Text>
        </View>
        
      </View>
    )
  }
  return (
    <View style={{ flex: 0.9 }}>
      {renderWelcomeScreen()}
      <View>
          <TouchableOpacity style={styles.getStarted}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.already}>
            <Text style={{ color: 'rgb(63,75,162)' }}>Already have an account</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  getStarted: {
    backgroundColor: 'rgb(63,75,162)',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  already: {
    alignSelf: 'center',
    marginTop: 15,
  }
})