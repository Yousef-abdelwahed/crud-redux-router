import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../state/postSlice";
import Loading from "./Loading";
import PostList from "./PostList";
import PostListItem from "./PostListItem";
const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  //Delet
  const deleteRecords = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );
  console.log(deleteRecords);
  return (
    <Loading loading={loading} error={error}>
      <PostList>
        <PostListItem data={records} deleteRecords={deleteRecords} />
      </PostList>
      ;
    </Loading>
  );
};

export default Index;
