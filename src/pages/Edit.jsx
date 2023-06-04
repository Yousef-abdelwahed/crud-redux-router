import React, { useEffect, useState } from "react";
import { editPost } from "../state/postSlice";
import Loading from "../components/Loading";
import usePostDetails from "../hook/use-post-details";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { record, loading, error } = usePostDetails();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  useEffect(() => {
    if (record) {
      setTitle(record?.title);
      setDescription(record?.description);
    }
  }, [record]);
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(editPost({ id: record.id, title, description }))
      .unwrap()
      .then(() => navigate("/"));
  };
  return (
    <Loading loading={loading} error={error}>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            // placeholder=""
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        {/* <Loading> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* </Loading> */}
      </Form>
    </Loading>
  );
};
export default Edit;
