import React from "react";

import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { PrimaryButton } from "../styled-components/Buttons";

const SingleMessage = () => {
  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Message to Name</h2>
      <div className="single-message__chat-container">
        <div className="single-message__interlocutorB-message">
          they are doing a feed thing event at the zoo..
        </div>
        <div className="single-message__interlocutorA-message">
          see the lions or sea lions? also, is mac there with u??
        </div>
      </div>
      <Input>
        <PrimaryButton>
          <SendIcon />
        </PrimaryButton>
      </Input>
    </div>
  );
};

export default SingleMessage;
