import { useMessageSentSubscriptionSubscription, useCreateChatMutationMutation } from "../../generated/graphql";
import React, { Component, useState } from 'react';

const InputMessage = () => {
    const [content, setContent] = useState("");
    const [from, setFrom] = useState("Matteo");

    const [addMessage] = useCreateChatMutationMutation()


    const _createChat = async e => {
      if (e.key === 'Enter') {
        console.log('settingContent')
         await addMessage({
           variables: { content }
         });
         setContent( '' );
       }
     }; 
    // setMessages([...messages, data.messageSent])
    // if(data){
    //   let something = messages
    //   something.initialMessages.push(data.messageSent)
    //   console.log(something)

    // }
    return (
      <input
      value={content}
      onChange={e => setContent(e.target.value)}
      type="text"
      placeholder="Start typing"
      onKeyPress={_createChat}
    />
    )
  }

export default InputMessage