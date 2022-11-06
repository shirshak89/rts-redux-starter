import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, getUsers, increase } from "../features/test/testSlice";
import { AppDispatch, selectStore } from "../store";

const Home = () => {
  const { test } = useSelector(selectStore);
  const { count, users } = test;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(decrease())}>-</button>
      {count}
      <button onClick={() => dispatch(increase())}>+</button>
    </div>
  );
};

export default Home;
