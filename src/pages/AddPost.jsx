import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { insertPost } from "../state/postSlice";
import { useDispatch } from "react-redux";
//useNavigate
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  //states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //disption
  const dispatch = useDispatch();
  //navigate when submt

  //Handle Forms
  const handleForm = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 500);
    dispatch(insertPost({ id, title, description }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Form onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          // placeholder=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPost;
