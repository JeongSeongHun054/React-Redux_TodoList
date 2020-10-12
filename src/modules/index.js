import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//이곳에서의 이름이 mapStateToProps에서 쓸 이름으로 지어진다. 이름확인 꼭 필요!
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
