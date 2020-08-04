import React, { useContext } from 'react';
import Link from "../link";
import styles from './index.module.css';
import UserContext from '../../Context'


const Header = () => {
    const context = useContext(UserContext);
    const { user, loggedIn } = context;

    const navigation = {
        guest: [{
            title: "❤ Home",
            link: "/"
        },
        {
            title: "❤ Register",
            link: "/register"
        },
        {
            title: "❤ Login",
            link: "/login"
        }],
        logged: [{
            title: "❤ Home",
            link: "/"
        },
        {
            title: "❤ Contributers",
            link: "/contributers"
        },
        {
            title: "❤ Publications",
            link: "/publications"
        },
        {
            title: "❤ Post!",
            link: "/post"
        },
        {
            title: "❤ Profile",
            link: `/profile/${user && user.id}`
        },
        {
            title: "❤ Logout",
            link: "/logout"
        }]
    };

    console.log("user", user)
    //console.log("logged", user.loggedIn)

    const links = loggedIn ? navigation.logged : navigation.guest;

    return (
        <header className={styles.navigation}>
            {
                links.map(navElement => {
                    return (
                        <Link
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type="header"
                        />)
                })
            }
        </header>
    );
};


export default Header;
