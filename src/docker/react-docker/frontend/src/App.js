import React from 'react';
import axios from 'axios';
import Landing from './pages/Landing/Landing';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Game from './pages/GamePlay/GamePlay';
import PlayGame from './pages/GamePlay/PlayGame';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import GameMenu from './pages/GameMenu/GameMenu';
import SignUp from './pages/SignUp/SignUp';
import UserEdit from './pages/UserEdit/UserEdit';
// import SelectGame from './pages/SelectGame/GameMenu';
import './App.css';

// https://www.techiediaries.com/django-react-forms-csrf-axios/
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// ToDo Item #7, we need it everywhere I think? or maybe just at the toplevel? not sure how it works (¯\_(ツ)_/¯)
// Item #11 on the ToDo list probably needs to specify a url variable here or something (¯\_(ツ)_/¯)
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Route exact path='/' component={Landing} />
          <Route path='/Dashboard' component={UserDashboard} />
          <Route path='/Game' component={Game} />
          <Route path='/playgame/:id' component={PlayGame} />
          <Route path='/Profile' component={UserPage} />
          <Route path='/UserEdit' component={UserEdit} />
          <Route path='/gameselection' component={GameMenu} />
          <Route path='/signup' component={SignUp} />
        </div>
      </Router>
    );
  }
}
