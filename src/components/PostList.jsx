import React from "react";
import PostListItem from "./PostListItem";
import { Table } from "react-bootstrap";

const PostList = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem data={data} />
      </tbody>
    </Table>
  );
};

export default PostList;
