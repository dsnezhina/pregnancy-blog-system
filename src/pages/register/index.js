import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';
import Alert from '../../components/alert'


const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState(null);
    const context = useContext(UserContext);
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formValidation()) {
            return;
        }

        await authenticate('http://localhost:9999/api/user/register',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => { setError(e.message) });
    };

    const formValidation = () => {
        if (username === '') {
            setError('Name cannot be blank!');
            return true;
        } else if (password === '' || rePassword === "") {
            setError('Password / Re-password cannot be blank!');
            return true;
        } else if (password !== rePassword) {
            setError('Password and Re-password should match!');
            return true;
        } else {
            setError(null);
            return false;
        };
    };

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Register' />
                    {error ? <Alert message={error} /> : null}
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
            </div>
        </PageLayout >
    );
};

export default RegisterPage;
