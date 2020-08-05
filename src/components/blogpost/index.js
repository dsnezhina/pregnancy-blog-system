import React from 'react';
import styles from './index.module.css';


const Blogpost = ({ title, content, author }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {title}
            </p>
            <p className={styles.content}>
                {content}
            </p>
            <div>
                <span className={styles.user}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </div>

        </div>
    );
}

export default Blogpost;