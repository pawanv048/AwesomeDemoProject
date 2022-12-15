import { StyleSheet, Text, Button, View } from 'react-native';
import React from 'react';


// const ListScreen = () =>{
//   return(
//     <View>
//       <Text>List screen</Text>
//     </View>
//   )
// }




const DetailsScreen = ({navigation}) => {
  return (
    <View>
      
      <Button
        title="Go to ListScreen"
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})