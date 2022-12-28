import React, { createContext, useContext, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';



const Stack = createNativeStackNavigator();
const NotesContext = createContext();


const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState)
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  )
}

const initialState = [

]

//action is like a function in reducer when state change function execute
const NotesReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      // return [...state, { id: Math.random(), title: `title: ${state.length + 1}` }]
      return [
        ...state, {
          id: Math.random(),
          title: payload.title,
          content: payload.content
        }
      ]
    case "REMOVE":
      return state.filter((note) => payload !== note.id)
    default:
      return state
  }
}


const ListNoteScreen = ({ navigation }) => {

  const {state,dispatch} = useContext(NotesContext)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        //style={{backgroundColor: 'red'}}
        renderItem={({ item }) => {
          return (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 100,
              alignItems: 'center',
              marginVertical: 10,
              display: 'flex',
              alignSelf: 'auto',
              
            }}>

              <Text
                style={{
                  fontSize: 20,
                  marginRight: 40,
                  marginLeft: 18,
                  color: 'black'
                }}>
                {item.title}
              </Text>
              {/* <Text style={{ fontSize: 10}}>{item.id}</Text> */}

              <TouchableOpacity
                onPress={() => dispatch({ type: "REMOVE", payload: item.id })}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10
                }}
              >
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>-</Text>
              </TouchableOpacity>
            </View>

          )
        }}
      />

      <TouchableOpacity
        //onPress={() => dispatch({ type: 'ADD' })}
        onPress={() => navigation.navigate('create')}
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'blue',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 80,
          right: 20
        }}
      >
        <Text style={{ fontSize: 30, color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const ShowNotes = ({route}) => {
  
  const {id} = route.params
  return(
    <View>
      <Text>{id}</Text>
    </View>
  )
}

const CreateNoteScreen = ({navigation}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { state, dispatch } = useContext(NotesContext)
  return (
    <View>
      <Text style={styles.text}>Enter Title</Text>
      <TextInput
        style={styles.input}
        // value={title}
        setTitle={(text) => setTitle(text)}
      />
      <Text style={styles.text}>Enter Content</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        // value={content}
        setTitle={(text) => setContent(text)}
        numberOfLines={3}
        multiline={true}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch({type:"ADD",payload:{title,content}})
          navigation.goBack()
        }}
        style={{
          height: 50,
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          borderRadius: 10
        }}
      >
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ListNoteScreen' component={ListNoteScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'All Notes'
            }}
          />
          <Stack.Screen name='create' component={CreateNoteScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'Create Notes'
            }}
          />
           <Stack.Screen name='show' component={ShowNotes}
            options={{
              headerTitleAlign: 'center',
              title: 'Show Notes'
            }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  )
}

export default App

const styles = StyleSheet.create({
  input: {
    //width: '100%',
    fontSize:14,
    height: 50,
    margin: 20,
    paddingLeft: 10,
    borderColor: 'blue',
    borderWidth: 1
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600'
  }
})