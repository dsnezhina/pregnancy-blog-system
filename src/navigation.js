import React, { useContext } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
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
import ProfilePage from './pages/profile';
import UserContext from './Context'

const Navigation = () => {

    const context = useContext(UserContext);
    const loggedIn = context.user.loggedIn;


    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/publications/:category'>
                    {loggedIn ? (<PublicationsPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/publications'>
                    {loggedIn ? (<PublicationsPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/post'>
                    {loggedIn ? (<CreatePostPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/register'>
                    {loggedIn ? (<Redirect to='/' />) : (<RegisterPage />)}
                </Route>
                <Route path='/login'>
                    {loggedIn ? (<Redirect to='/' />) : (<LoginPage />)}
                </Route>
                <Route path='/logout' component={LogoutPage} />
                <Route path='/publication/:blogpostid' >
                    {loggedIn ? (<PublicationPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/edit/:blogpostid' >
                    {loggedIn ? (<EditPublicationPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/profile/:userid' >
                    {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;