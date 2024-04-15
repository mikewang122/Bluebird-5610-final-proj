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
import Posts from './components/posts/Posts';
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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path = '/dashboard' component = {Dashboard}/>
              <PrivateRoute exact path = '/create-profile' component = {CreateProfile}/>
              <PrivateRoute exact path = '/edit-profile' component = {EditProfile}/>
              <PrivateRoute exact path = '/add-experience' component = {AddExperience}/>
              <PrivateRoute exact path = '/add-education' component = {AddEducation}/>
              <PrivateRoute exact path = '/posts' component = {Posts}/>
        </Switch>
        </section>
    </Fragment>
     </Router>
</Provider>

)};
export default App;
