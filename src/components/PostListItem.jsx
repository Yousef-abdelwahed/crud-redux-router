import React, { memo } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const PostListItem = ({ data, deleteRecords }) => {
  const navigate = useNavigate();
  //popup when hover
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Simple tooltip
  //   </Tooltip>
  // );
  // nav
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to leave?")) {
      deleteRecords(id);
    }
  };
  if (data.length > 0) {
    const records = data.map((el, idx) => (
      <tr key={el.id}>
        <td>#{++idx}</td>
        <td>
          <Link to={`post/${el.id}`} className="title">
            {el.title}
          </Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={(e) => navigate(`post/${el.id}/edit`)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(el.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    ));
    return <>{records}</>;
  }
};

export default memo(PostListItem);
