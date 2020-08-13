import React from 'react';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';
import Button from '../button/button'

const Blogpost = ({ _id, title, image, content, category, author }) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/publication/${_id}`)
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <b>{title}</b> by <b>{author.username}</b>
                <br />Category: <b>{category}</b>
            </p>
            <p className={styles.content}>
                {content.slice(0, 1000).concat('...')}
            </p>
            <div>
                <span className={styles.user}>
                    <Button title='Details' handleClick={handleClick}/>
                </span>
            </div>
        </div>
    );
};

export default Blogpost;


