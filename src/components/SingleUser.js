import React from "react";
import { useParams } from "react-router";

const SingleUser = () => {
  const { userName } = useParams();

  return <div>SingleUser</div>;
};

export default SingleUser;
