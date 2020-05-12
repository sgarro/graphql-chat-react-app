
import React from 'react';
    const Chatbox = ({message}) => (
      <div className="chat-box">
        <div className="chat-message">
          <h5>{message.from.username}</h5>
          <p>
            {message.content}
          </p>
        </div>
      </div>
    );
    export default Chatbox;