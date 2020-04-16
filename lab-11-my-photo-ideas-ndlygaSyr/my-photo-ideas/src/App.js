import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import MyPhotos from './pages/MyPhotos';
import PhotoUpload from './pages/PhotoUpload';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false,
      ready: false
    }
  }
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged In");
        this.setState({user: user, ready: true})
      } else {
        console.log("Not Logged In");
        this.setState({user: false, ready: true})
      }
    });
  }
  logout = (evt) => {
    this.props.firebase.auth().signOut().then(() => {
      this.setState({user: false});
    }).catch((err) => {
      alert(err.message);
    })
  }
  render() {
    if (this.state.ready) {
      return (
        <div id="myIdeas">
           {this.state.user &&
              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                  <img src="/favicon-32x32.png" width="30" height="30" className="d-inline-block align-top mx-3" alt="Logo" />
                  My Photo Ideas
                </a>
                <ul className="nav nav-pills">
                <li className="nav-item">
                <span className="nav-link">
                  { this.state.user.email }
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={this.logout}>Logout</button>
                </li>
                </ul>
              </nav>
          }
          <Router>
            <Switch>
                <Route path="/login">
                  {this.state.user ? <Redirect to="/my-photos" /> : <LoginPage firebase={this.props.firebase} /> }
                </Route>
                <Route path="/my-photos">
                  {this.state.user ? <MyPhotos firebase={this.props.firebase} user={this.state.user} /> : <Redirect to="/login" /> }
                </Route>
                <Route path="/upload">
                  {this.state.user ? <PhotoUpload firebase={this.props.firebase} user={this.state.user} /> : <Redirect to="/login" /> }
                </Route>
                <Router exact path="/">
                  {this.state.user ?  <Redirect to="/login" /> : <Redirect to="/my-photos" /> }
                </Router>
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <p>Loading ...</p>
      )
    }
  }
};

export default App;
