// 리덕스 스토어와 연동된 컴포넌트를 컨테이터 컴포넌트라고 한다.
import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  //const 결과 = useSelector(상태 선택 함수)
  // 상태 선택 함수 = mapStateToProps와 형태가 똑같음
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  //숫자가 바뀔 때마다 리렌더랑 되는 것을 방지
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      /* createAction으로 만든 action을 dispatch 안에 넣어준다 */
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );

  // return (
  //   <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  // );
};

export default CounterContainer;

//스토어에서 받아와서 컴포넌트로 데이터를 전달하는 곳
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);
