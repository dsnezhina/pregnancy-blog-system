import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from './pages/home-page/'
import PublicationsPage from './pages/publications'
import CreatePostPage from './pages/create-post-page'


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/publications" component={PublicationsPage} />
                <Route path="/post" component={CreatePostPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;