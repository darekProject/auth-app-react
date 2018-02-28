import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Route, BrowserRouter} from 'react-router-dom';

import App from './App';
import reducers from './reducers';
import SignIn from "./components/SignIn/SignIn";
import SignOut from "./components/SignOut/SignOut";
import SignUp from "./components/SignUp/SignUp";
import Orders from "./containers/Orders/Orders";
import RequireAuth from './components/AuthHoC/AuthHoC'
import {AUTH_USER} from "./actions/type";

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signout" component={SignOut}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/orders" component={RequireAuth(Orders)}/>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
