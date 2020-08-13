import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input'
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';
import Alert from '../../components/alert';


const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formValidation()) {
            return;
        };

        await authenticate(
            'http://localhost:9999/api/user/login',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => { setError('Invalid username or password!') }
        );
    };

    const formValidation = () => {
        if (username === '') {
            setError('Name cannot be blank!');
            return true;
        } else if (password === '') {
            setError('Password cannot be blank!');
            return true;
        } else {
            setError(null);
            return false;
        };
    };

    return (
        <PageLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Title title='Login' />
                {error ? <Alert message={error} /> : null}
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label='Username'
                    id='username'
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    id='password'
                    type='password'
                />
                <SubmitButton title='Login' />
            </form>
        </PageLayout >
    );
};

export default LoginPage;
