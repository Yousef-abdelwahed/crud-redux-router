import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <Button
            varaiant="pills"
            className="m-auto"
            onClick={() => navigate("/", { replace: true })}
          >
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ErrorPage;
