import React from "react";
import { View} from "react-native";
import styles from "./styles";

const ToDoContainer = ({ children}) => {
  return <View style={styles.toDoContainer}>{children}</View>;
};

export default ToDoContainer;