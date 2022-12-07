import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';

const DetailsScreen = () => {

  function markRequestaxios() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        console.log('Data ==>', response.data);
        console.log('status =>', response.status);
        console.log('statusText =>', response.statusText);
        console.log('headers =>', response.headers);
        console.log('config =>', response.config);
      });
  }


  function markRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((data) => {
        console.log('DATA', data)
        console.log('ID:', data[0].id)
        console.log('BODY:', data[0].body)
        console.log('TITLE:', data[0].title)
        data.forEach(element => {
          console.log('ID:', element.id)
          console.log('BODY:', element.body)
          console.log('TITLE:', element.title)
        });
      })

      .catch((e) => {
        console.log(e)
      })
  }

  // Async await
  

  async function markRequestWithAsync(){
    try {
      console.log('Button clicked')
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      if(!res.ok){
        throw Error(res.statusText)
      }
      const data = await res.json();
      console.log(data)
      console.log('DATA',data)
      // console.log('ID:',data.id)
      // console.log('BODY:',data.body)
      // console.log('TITLE:',data.title)
      data.forEach((element) => {
        console.log(element.id)
        console.log(element.body)
        console.log(element.title)
      })
    } catch (error) {
      console.log(error)
    }
  }

  //const userid = data.id
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity
        onPress={markRequestWithAsync}
        style={{ backgroundColor: 'grey', padding: 20, width: '50%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>submit</Text>
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </TouchableOpacity>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})