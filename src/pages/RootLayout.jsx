import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export const RootLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Row className="mt-3">
          <Col xs={{ span: 8, offset: 2 }}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RootLayout;
