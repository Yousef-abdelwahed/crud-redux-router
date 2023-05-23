import React, { memo } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export const PostListItem = ({ data, deleteRecords }) => {
  const records = data.map((el, idx) => (
    <tr key={el.id}>
      <td>#{++idx}</td>
      <td>{el.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={(id) => deleteRecords(el.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default memo(PostListItem);
