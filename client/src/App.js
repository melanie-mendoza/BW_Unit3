import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import PlantsList from './components/PlantsList';
import UpdatePlant from './components/UpdatePlant';
import AddNewPlant from './components/AddNewPlant';

import './App.css';
import Logout from './components/Logout';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/addNewPlant' component={AddNewPlant}>
          <AddNewPlant />
        </Route>
        <ProtectedRoute path='/plantsList/:id' component={UpdatePlant}>
          <UpdatePlant />
        </ProtectedRoute>
        <ProtectedRoute path='/plantsList' component={PlantsList}>
          <PlantsList />
        </ProtectedRoute>
        <Route path='/updateProfile' component={UpdateProfile}>
          <UpdateProfile />
        </Route>
        <ProtectedRoute exact path='/profile' component={Profile}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute exact path='/logout' component={Logout}>
          <Logout />
        </ProtectedRoute>
        <Route path='/login' component={Login}>
          <Login />
        </Route>
        <Route path='/signup' component={AddNewPlant}>
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
