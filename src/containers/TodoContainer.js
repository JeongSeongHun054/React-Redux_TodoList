import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({ input, todos, change, insert, toggle, remove }) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={change}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  change: (input) => dispatch(changeInput(input)),
  insert: (text) => dispatch(insert(text)),
  toggle: (id) => dispatch(toggle(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

// export default connect(
//   (todos) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);
