import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from './pages/home-page/';
import PublicationsPage from './pages/publications';
import CreatePostPage from './pages/create-post-page';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/publications" component={PublicationsPage} />
                <Route path="/post" component={CreatePostPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;