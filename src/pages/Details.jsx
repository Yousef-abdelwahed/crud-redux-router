import React from "react";
import Loading from "../components/Loading";
import usePostDetails from "../hook/use-post-details";
import { Table } from "react-bootstrap";
export const Details = () => {
  const { loading, error, record } = usePostDetails();
  return (
    <>
      <Loading loading={loading} error={error}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>{record?.title}</td>
              <td style={{ width: "40%" }}>{record?.description}</td>
            </tr>
          </tbody>
        </Table>
      </Loading>
    </>
  );
};
export default Details;
