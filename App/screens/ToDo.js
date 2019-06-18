import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { Container, ToDoContainer } from "../components/Container";
import { connectAlert } from "../components/Alert";

//import { loadTodos } from "../actions/todos";

class ToDo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "100",
        fontSize: 16
      }
    };
  };

  render() {
    return (
      <Container>
        <ToDoContainer>
          <Text>ToDo Editor</Text>
        </ToDoContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {};
};

export default connect(mapStateToProps)(connectAlert(ToDo));
