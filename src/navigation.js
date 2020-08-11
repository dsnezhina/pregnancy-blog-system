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
import ErrorPage from './pages/error';
import PublicationPage from './pages/publication';
import EditPublicationPage from './pages/edit';
import ProfilePage from './pages/profile'


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
                <Route path="/publication/:blogpostid" component={PublicationPage} />
                <Route path="/edit/:blogpostid" component={EditPublicationPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;