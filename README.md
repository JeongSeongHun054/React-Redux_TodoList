# React-Redux를 이용한 ToDoList

## Learned
- [x] redux-actions를 사용했을 때 코드 비교
- [x] useSelector 과 useDispatch의 사용
- [x] useCallback을 사용한 컴포넌트 최적화
- [x] mapStateToProps, mapDispatchToProps 와 useSelector, useDispatch를 사용했을 때의 차이

## redux-actions 적용 전후 비교

- redux-actions 적용 전

```javascript
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
```

- redux-actions 적용 후

```javascript
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
```
