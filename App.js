import React, {useReducer, useState} from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList, Alert, InputAccessoryView, PixelRatio} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";

const App = ()  => {
  
  const [text, setText] = useState('');

  const [tasks, setTasks] = useState(["Çöpleri At", "Kitap Oku", "Odanı Temizle"]);

  const handleAddTodo = () => {
    if(text == "") {
      Alert.alert("Boş Todo Ekleyemezsin!")
      }
    else {
      setTasks([...tasks, text])
      setText('')
      }
  } 

  const handleTodoDelete = (index) => {
    Alert.alert("Silme İşlemi", "Bu todo sonsuza kadar kaybolsun mu...?", [
      {"text":"Hayır ona ihtiyacım var"},
      {"text": "Artık onu istemiyorum", 
      onPress: () => {    
        const newTasks=[...tasks]
        newTasks.splice(index, 1);
        setTasks(newTasks)
      }
    }

    ])
  }

  const [isDone, setDone] = useState(false);
  
  const handleTodoDone = (index) => {

  }
  


  return(
    <SafeAreaView style={styles.container}>
      <Header
      count={tasks.length}
      />

      <FlatList
      data={tasks}

      renderItem={({item, index}) =>
      <Todos
      todo={item}
      todoDone={() => handleTodoDone(index)}
      todoDelete={() => handleTodoDelete(index)}
      /> }
      keyExtractor={item => item + Date.now() + Math.random()}
      />

      <AddTodo
      value={text}
      onChangeText={setText}
      onPress={handleAddTodo}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: "#102027"
},


})



export default App;