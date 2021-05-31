import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Incubator from "./Pages/Incubator/Incubator";
import Home from "./Pages/Home/Home";
import LearnPage from "./Pages/LearnPage/LearnPage";
import UserDashboard from './Components/UserDashboard/UserDashboard'
import CourseItems from "./Components/UserDashboard/CourseItems";
import Navbar from './Components/Navbar/Navbar';
import CourseActivities from "./Components/UserDashboard/CourseActivities";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/incubator'>
          <Incubator></Incubator>
        </Route>
        <Route path='/learnPage'>
         <LearnPage></LearnPage>
        </Route>
        <Route path='/userDashboard/:id'>
         <UserDashboard></UserDashboard>
        </Route>
        <Route path='/courseItem/:_id'>
         <CourseItems></CourseItems>
        </Route>
        <Route path='/courseActivities/:__id'>
         <CourseActivities></CourseActivities>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;