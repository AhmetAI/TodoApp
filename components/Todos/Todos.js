import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Todos.style"

export default Todos = (props) => {
    return (
        <TouchableOpacity onPress={props.todoDelete} onLongPress={props.TodoDone}>
                <Text style={props.isDone ? styles.todoDone : styles.todo }>{props.todo}</Text>
        </TouchableOpacity>
    )
}