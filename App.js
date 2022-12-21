import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {
  Button,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
  Linking,
  Platform,
  Alert,
  ActivityIndicator
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const Profile_men = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
const img_1 = 'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-icon.png'
const data = [
  { _id: 1, name: 'pawan', email: 'item1@gmail.com', salary: "5 lpa", phone: 12345, position: 'Mobile dev', picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { _id: 2, name: 'item1', email: 'item2@gmail.com', salary: "6 lpa", phone: 12645, position: 'web dev', picture: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { _id: 3, name: 'item2', email: 'item3@gmail.com', salary: "4 lpa", phone: 14345, position: 'web dev', picture: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" },
  { _id: 4, name: 'item3', email: 'item4@gmail.com', salary: "7 lpa", phone: 19345, position: 'dev ops', picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" },
  { _id: 5, name: 'item4', email: 'item5@gmail.com', salary: "8 lpa", phone: 12545, position: 'student', picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
]


const NotesContext = createContext()

const NoteProvider = ({ children }) => {
  return (
    <NotesContext.Provider value={10}>
      {children}
    </NotesContext.Provider>
  )
}

// Create Employee

const CreateEmployee = ({ navigation }) => {

  const submitData = async () => {
    console.log('button click')
    await fetch('http://localhost:4000/send-data', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        salary,
        phone,
        position
      })
    })
      .then(res => res.json())
      .then((responseJson) => {
        //Success 
        console.log(responseJson);
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [salary, setSalary] = useState('')
  const [position, setPosition] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.inputs}
        placeholder='Enter Name'

      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.inputs}
        placeholder='Enter Email'
      />
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.inputs}
        placeholder='Enter Phone'
      />
      <TextInput
        value={salary}
        onChangeText={(text) => setSalary(text)}
        style={styles.inputs}
        placeholder='Enter Salary'
      />
      <TextInput
        value={position}
        onChangeText={(text) => setPosition(text)}
        style={styles.inputs}
        placeholder='Enter Position'
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.btn}
      >
        <Text style={styles.txt}>Upload Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => submitData()}
        style={styles.btn}
      >
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
      <Modal
        style={{ width: width, height: height }}
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        {/*All views of Modal*/}
        {/*Animation can be slide, slide, none*/}
        <View style={styles.modal}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.modalBtn}>
              <Button
                title="Camera"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <View style={styles.modalBtn}>
              <Button
                title="Gallery"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
          <View style={[styles.modalBtn, { marginTop: 50, alignSelf: 'center' }]}>
            <Button
              title="cancel"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>

      </Modal>
    </SafeAreaView>
  )
}


// PROFILE SCREEN

const ProfileScreen = ({ navigation, route }) => {

  const { _id, name, position, salary, phone, email } = route.params.item
  //console.log('UserDetails =>', props.route.params.item)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', backgroundColor: 'blue', height: 100 }} />
      <View style={{ alignItems: 'center', marginTop: -40 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 10
          }}
          source={{ uri: Profile_men }}
        />
      </View>
      <View style={styles.userName}>
        <Text style={styles.userTxt}>{name}</Text>
      </View>
      <View style={[styles.userName, { marginVertical: 5 }]}>
        <Text style={styles.userTxt}>{position}</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.userDetails}>
          <Text>{email}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.userDetails, { marginVertical: 15 }]}>
          <Text>{phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.userDetails}>
          <Text>{salary}</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 40, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              padding: 15,
              borderRadius: 5,
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ color: 'white', fontSize: 15 }}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              padding: 15,
              borderRadius: 5,
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 15 }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// const renderList = data.map((item) => {
//   return (
//     <View 
//       key={item._id}
//       style={{
//       //width: width,
//       height: 100,
//       backgroundColor: '#b1afb3',
//       paddingHorizontal: 20,
//       paddingVertical: 5,
//       flexDirection: 'row',
//       alignItems: 'center',
//       margin: 10,
//       borderRadius:5
//     }}
//       
//     >
//       <Image style={{
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 10
//       }}
//         source={{ uri: Profile_men }}
//       />
//       <View>
//         <Text style={{
//           fontWeight: '800'
//         }}>{item.name}</Text>
//         <Text style={{
//           fontWeight: '800'
//         }}>{item.position}</Text>
//       </View>
//     </View>
//   )
// }) 



const headerOptions = {
  title: 'My Sweet Home',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'blue'
  }
}


// HOME SCREEEN
function HomeScreen({ navigation }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setLoading(false)
      })
  }, [])

  //const data = useContext(NotesContext)
  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', { item })}
        activeOpacity={1}
        style={{
          //width: width,
          height: 100,
          backgroundColor: '#b1afb3',
          paddingHorizontal: 20,
          paddingVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          borderRadius: 5
        }}
        key={item._id}
      >
        <Image style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          marginRight: 10
        }}
          source={{ uri: item.picture }}
        />
        <View>
          <Text style={{
            fontWeight: '800'
          }}>{item.name}</Text>
          <Text style={{
            fontWeight: '800'
          }}>{item.position}</Text>

        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View >
        {/* {renderList} */}
        {loading ?
          <ActivityIndicator size='large' color='#0000ff' />
          : <FlatList
            data={data}
            renderItem={renderItems}
            keyExtractor={item => item._id}
            bounces={false}
            style={{ margin: 20 }}
            contentContainerStyle={{ paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateEmployee')}
        style={{
          backgroundColor: 'red',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          borderRadius: 20,
          position: 'absolute',
          right: 20,
          bottom: 40
        }}>
        <Image source={{ uri: img_1 }}
          style={{
            height: 20,
            width: 20,
            tintColor: 'white'
          }} />
        {/* <Text>button</Text> */}
      </TouchableOpacity>

    </View>
  );
}

function DetailsScreen({ navigation }) {
  const data = useContext(NotesContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      {/* <Text>{data}</Text> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="CreateEmployee"
            component={CreateEmployee}
            options={{ ...headerOptions, title: 'Create Employee' }} />
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ ...headerOptions, title: 'Profile' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  inputs: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    width: '90%',
    height: 50,
    paddingLeft: 15
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  modal: {
    //flex: 1,
    //alignItems: 'center',
    backgroundColor: 'grey',
    paddingVertical: 40,
    width: '100%',
    //paddingHorizontal: 20,
    //flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  modalBtn: {
    backgroundColor: 'white',
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  userName: {
    alignItems: 'center',
    marginVertical: 10
  },
  userTxt: {
    fontSize: 18,
    fontWeight: '700'
  },
  userDetails: {
    marginHorizontal: 20,
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 15
  }
})
