import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// import ProtectedRoute from './components/ProtectedRoute';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Users';
import UpdateUser from './components/UpdateUser';
import PlantsList from './components/PlantsList';
import UpdatePlant from './components/UpdatePlant';
import AddNewPlant from './components/AddNewPlant';

import './App.css';
import Logout from './components/Logout';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/addNewPlant' component={AddNewPlant}>
          <AddNewPlant />
        </Route>
        <Route exact path='/plants/:id' component={UpdatePlant}>
          <UpdatePlant />
        </Route>
        <Route exact path='/plants' component={PlantsList}>
          <PlantsList />
        </Route>
        <Route exact path='/users/:id' component={UpdateUser}>
          <UpdateUser />
        </Route>
        <Route exact path='/users' component={Profile}>
          <Profile />
        </Route>
        <Route exact path='/logout' component={Logout}>
          <Logout />
        </Route>
        <Route path='/login' component={Login}>
          <Login />
        </Route>
        <Route exact path='/signup' component={AddNewPlant}>
          <SignUp />
        </Route>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
