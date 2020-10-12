import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//createAction은 매번 객체를 만들필요 없이 간단하게 액션 생성 함수를 선언
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

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

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// };

export default counter;
