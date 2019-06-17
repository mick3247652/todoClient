import { LOAD_TODOS, TODOS_RESULT, TODOS_ERROR } from "../actions/todos";

const InitialState = {
  todos: [],
  error: null,
  isLoaded: false
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
        console.log("запросил данные")
      return {
        ...state,
        isLoaded: true
      };
    case TODOS_RESULT:
        console.log("получил данные")
        console.log(action.result)
      //console.log(action.result)
      return {
        todos: [...action.result],
        error: null,
        isLoaded: false
      };
    case TODOS_ERROR:
        console.log("получил ошибку")
        console.log(action.error)
      return {
        ...state,
        error: action.error,
        isLoaded: false
      };

    default:
      return state;
  }
};

export default reducer;
