import { useMessageSentSubscriptionSubscription, useCreateChatMutationMutation } from "../../generated/graphql";
import React, { Component, useState } from 'react';
import { TextField, makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Store } from "../../context/context";

const InputMessage = () => {
    const [content, setContent] = useState("");
    const globalState = React.useContext(Store) as any;
    const {user} = globalState.state

    const [addMessage] = useCreateChatMutationMutation()

    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          // backgroundColor: "#ffe5d9",
          // padding: theme.spacing(1),
          margin: theme.spacing(2)
        },
      }),
    );
    const _createChat = async e => {
      if (e.key === 'Enter') {
        console.log('settingContent', user)
         await addMessage({
           variables: { from: user.user, content }
         });
         setContent( '' );
       }
     }; 
     const classes = useStyles();

    return (
      <TextField
      className={classes.root}
          id="writeMessage"
          label="write a message"
          variant="outlined"
          value={content}
          color="secondary"
          onChange={e => setContent(e.target.value)}
          onKeyPress={_createChat}
          >
          <IconButton aria-label="login" color="primary" onClick={_createChat}>
          <ArrowForwardIcon />
        </IconButton>
        </TextField>
    )
  }

export default InputMessage