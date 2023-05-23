import React from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
export const PostList = ({ data, loading, err }) => {

  
  const records = data.map((el, index) => (
    <tr key={el.id}>
      <td>#{++index}</td>
      <td>{el.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3}>loading please wait...</td>
            </tr>
          ) : err ? (
            <tr>
              <td colSpan={3}>{err}</td>
            </tr>
          ) : (
            records
          )}
        </tbody>
      </Table>
    </>
  );
};
export default PostList;
