import {
  useMessageSentSubscriptionSubscription,
  useCreateChatMutationMutation,
  useAllChatsQueryQuery,
} from "../../generated/graphql";
import React, { Component, useState } from "react";
import Chatbox from "./Chatbox";

const ChatContainer = (): any => {
    let { data, error, loading } = useAllChatsQueryQuery();
    const initialMessages = (data)? data.chats : []
    const resp = useMessageSentSubscriptionSubscription();
    if (resp.data) {
      initialMessages.push(resp.data.messageSent);
    }
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error || !data) {
      return <div>ERROR</div>;
    }
 

  return initialMessages.map((chat) => {
    return <Chatbox key={chat.id} message={chat} />
  });
};

export default ChatContainer;
