import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import promise from "redux-promise"

import reducers from './reducers';
import PostIndex from "./components/PostIndex"
import PostNew from "./components/Post_New"
import PostShow from "./components/PostShow"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

  		<BrowserRouter>
  			<div>
  				<Switch>
  				<Route path="/" exact component={PostIndex}/>
  				<Route path="/posts/new"  component={PostNew}/>
  				<Route path="/posts/:id"  component={PostShow}/>

  				</Switch>
  			</div>
  		</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

