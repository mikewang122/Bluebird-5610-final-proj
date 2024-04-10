import React, {Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';  // import Navbar component
import Landing from './components/layout/Landing';  // import Landing component
import Login from './components/auth/Login';  // import Login component
import Register from './components/auth/Register';  // import Register component
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import './App.css';
import EditProfile from './components/profile-forms/EditProfile';

import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';

//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.dispatch(loadUser());
    setLoading(false);
  }
  , []);

  if(loading){
    return <h1>Loading...</h1>
  }


  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/profile/:id" component={Profile} />
              <PrivateRoute path = '/dashboard' component = {Dashboard}/>
              <PrivateRoute path = '/create-profile' component = {CreateProfile}/>
              <PrivateRoute path = '/edit-profile' component = {EditProfile}/>
              <PrivateRoute path = '/add-experience' component = {AddExperience}/>
              <PrivateRoute path = '/add-education' component = {AddEducation}/>
        </Switch>
        </section>
    </Fragment>
     </Router>
</Provider>

)};
export default App;