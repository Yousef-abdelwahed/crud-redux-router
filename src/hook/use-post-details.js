import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetal } from "../state/postSlice";

const usePostDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { loading, error, record } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getDetal(id));
  }, [dispatch, id]);
  return { loading, error, record };
};

export default usePostDetails;