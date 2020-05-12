import {
    useUsersOnlineSubscriptionSubscription,
    useCreateChatMutationMutation,
  } from "../../generated/graphql";
  import React, { Component, useState } from "react";
  
  const UserContainer = ( ) => {
    const { data } = useUsersOnlineSubscriptionSubscription();
  
    if (data) {
      console.log('Users', data)
    }
  
    return <div>ciao</div>
  };
  
  export default UserContainer;
  