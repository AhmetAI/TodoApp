import React from "react";
import { View, Text } from "react-native";
import styles from "./header.style"

export default Header = (props) => {
    return(

        <View style={styles.header_container}>
            <Text style={styles.todosText}>Yapılacaklar</Text>
            <Text style={styles.todos}>{props.count}</Text>
        </View>

    )
}