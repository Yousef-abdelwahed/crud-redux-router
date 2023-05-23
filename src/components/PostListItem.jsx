import React, { memo } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export const PostListItem = ({ data, deleteRecords }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to leave?")) {
      deleteRecords(id);
    }
  };
  const records = data.map((el, idx) => (
    <tr key={el.id}>
      <td>#{++idx}</td>
      <td>{el.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={(id) => handleDelete(el.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default memo(PostListItem);
