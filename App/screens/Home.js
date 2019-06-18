import React, { Component } from "react";
import { View, Text, FlatList, Button, RefreshControl } from "react-native";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";

import { loadTodos } from "../actions/todos";

import { Separator, ToDoListItem } from "../components/List";
import { primaryColor } from "../config/colors";

class Home extends Component {
  componentDidMount() {
    this.handleLoadTodos();
  }

  handleLoadTodos = () => {
    if (!this.props.todos.isLoaded) this.props.dispatch(loadTodos());
  };

  handleCreateToDo = () => {
    console.log('navigate to ToDo')
    this.props.navigation.navigate("ToDo", {
      title: "Create ToDo",
      type: "create"
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.todos.todos}
            renderItem={({ item }) => <ToDoListItem {...item} />}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={Separator}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                progressBackgroundColor={primaryColor}
                refreshing={this.props.todos.isLoaded}
                onRefresh={this.handleLoadTodos}
              />
            }
          />
        </View>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.handleCreateToDo}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
