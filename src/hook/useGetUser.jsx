import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/userSlice";

const useGetUser = () => {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const userInfo = { user, loading };
  return userInfo;
};

export default useGetUser;
