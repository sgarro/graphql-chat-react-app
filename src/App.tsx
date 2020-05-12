import React, { useEffect } from "react";

// App component styles
import "./App.css";
import { LoginForm } from "./components/loginForm/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { USER_LOGIN } from "./context/action";
import { Store } from "./context/context";
import MainContainer from "./components/MainContainer";






const App = () => {
  const globalState = React.useContext(Store) as any;
  const {user} = globalState.state
  const {userDispatch} = globalState.dispatch
  const history = useHistory();
  const login = async(username: string) => {
    userDispatch({type:USER_LOGIN, user:username})
  }

  useEffect(()=>{
    if(user.isAuthenticated){
      history.push('/main')
    }
    else{
      history.push('/login')
    }
  }, [userDispatch, user, history])
  

  return (
    <div className="container">
      <h2>Chats</h2>
      <Switch>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/main">
          <MainContainer />
        </Route>
        
      </Switch>
      
    </div>
  );
};

export default App;
