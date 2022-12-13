import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { PrimaryButton } from "../styled-components/Buttons";

const SingleMessage = () => {
  const { conversationId } = useParams();
  const conversation = useSelector((store) =>
    store.conversations.list.find((item) => item._id === conversationId)
  );
  const userId = useSelector((store) => store.user.userId);

  console.log(conversation);

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Message to Name</h2>
      <div className="single-message__container">
        <div className="single-message__chat-container">
          {conversation.messages.map((message) => (
            <div
              className={
                userId === message.author
                  ? "single-message__interlocutorA-message"
                  : "single-message__interlocutorB-message"
              }
            >
              {message.message}
            </div>
          ))}
        </div>
      </div>
      <form className="sign-container__form single-message__form">
        <Input type="text"></Input>
        <PrimaryButton type="submit">
          <SendIcon />
        </PrimaryButton>
      </form>
    </div>
  );
};

export default SingleMessage;
