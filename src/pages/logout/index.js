import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';

const LogoutPage = () => {

    const context = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        context.logOut();
        history.push('/');
    });

    return null;
};

export default LogoutPage;