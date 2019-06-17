import React, { Component } from "react";
import { View, Text, FlatList, Button, RefreshControl } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";

import { loadTodos } from "../actions/todos";

import {Separator, ToDoListItem} from "../components/List"
import {primaryColor} from '../config/colors'

class Home extends Component {
  componentDidMount() {
    this.handleLoadTodos()
  }

  handleLoadTodos = () => {
    if (!this.props.todos.isLoaded) this.props.dispatch(loadTodos());
  };

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.todos.todos}
            renderItem={({ item }) => (
              <ToDoListItem {...item}/>
            )}
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
