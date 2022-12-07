import React from "react";
import { useParams } from "react-router";

const SingleMessage = () => {
  const { userName } = useParams();

  return <div>SingleMessage</div>;
};

export default SingleMessage;
