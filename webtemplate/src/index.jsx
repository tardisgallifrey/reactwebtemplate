import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//All the above are needed to make the routes below work to display new pages

import './css/index.css';
import App from './App';
import { home } from './containers/home';   //This is the main page of the app
import { Page } from './components/Page';   //This is the basic page component to render each page
import pageData from './shared/pageData';   //This imports our web site data JSON

export const browserHistory = createBrowserHistory(); //needed for routes to get back home, I think

//This creates a list of Routes based on page ids in the JSON
//The for...in works, array.map() does not.  Still don't know why
//Route needs a key to cut down on Chrome errors
//our cheat is using the current array length to set an index for the key
var routelist = [];
for( const prop in pageData){
   routelist.push(<Route key={routelist.length - 1} path={pageData[prop].linkto} render={() => <Page pageinfo={pageData[prop].pagename} />} />)
}

//This is boiler plate on using Reactjs Router
//The array of routes is inserted after the two fixed Routes
ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Router history={browserHistory}>
        <Route exact path="/" component={App} />
        <Route path="/home" component={home} />
        {routelist}
      </Router>
    </Switch>
  </BrowserRouter>
), document.getElementById('app'))