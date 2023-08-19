import React from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import styles from "./AddTodo.style"

export default AddTodo = (props) =>{
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Yapılacak..."
            value={props.value}
            onChangeText={props.onChangeText}
            />

            <TouchableOpacity>
                <Text 
                style={styles.addButton}
                onPress={props.onPress}
                >Ekle</Text>
            </TouchableOpacity>

        </View>
    )
}