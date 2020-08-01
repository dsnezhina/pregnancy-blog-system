import React, { Component } from 'react';
import UserContext from '../../Context';

class LogoutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            posts: null

        };
    };

    static contextType = UserContext;

    componentDidMount() {
        this.context.logOut();
        this.props.history.push('/')
    };

    render() {
        return null;
    };
};

export default LogoutPage;