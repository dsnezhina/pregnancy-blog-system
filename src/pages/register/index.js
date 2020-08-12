import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';


const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const context = useContext(UserContext);
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        await authenticate('http://localhost:9999/api/user/register',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => { console.log('Error', e) });
    };

    return (
        <PageLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Title title='Register' />
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label='Username'
                    id='username'
                />
                <Input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    id='password'
                />
                <Input
                    type='password'
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    label='Re-password'
                    id='re-password'
                />
                <SubmitButton title='Register' />
            </form>
        </PageLayout >
    );
};

export default RegisterPage;
