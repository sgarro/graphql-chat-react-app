import {
    useUsersOnlineSubscriptionSubscription,
    useCreateChatMutationMutation,
    useAllUsersQueryQuery,
  } from "../../generated/graphql";
  import React, { Component, useState } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import classes from "*.module.css";
import ImageIcon from '@material-ui/icons/Image';

  const UserContainer = ( ) => {
    let { data, error, loading } = useAllUsersQueryQuery();
    let usersOnline = data ? data.usersOnline : []
    const resp  = useUsersOnlineSubscriptionSubscription();
    if (resp.data) {
        console.log("RESP", resp)
        usersOnline = resp.data.usersOnline;
      }
    if (data) {
      console.log('Users', data)
    }
  
    return (
    <List>
        {
            usersOnline.map(user => {
                return (
                    <ListItem key={user.id}>
                        <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.username} secondary={user.isOnline? 'online' : 'offline'} />
                    </ListItem>
                )
            })
        }
     </List>
    )
  };
  
  export default UserContainer;
  