import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = () => {
  //useSelector는 mapStateToProps와 유사하다. counter와 todos의 객체를 모두 가지고 있다
  //그래서 state 대신에 비구조 할당으로 todos를 썼고
  //todos안에 input과 todos를 비구조할당했다.
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;

// const mapStateToProps = ({ todos }) => ({
//   input: todos.input,
//   todos: todos.todos,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   change: (input) => dispatch(changeInput(input)),
//   insert: (text) => dispatch(insert(text)),
//   toggle: (id) => dispatch(toggle(id)),
//   remove: (id) => dispatch(remove(id)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

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
