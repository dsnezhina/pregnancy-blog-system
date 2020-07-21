import React from 'react';
import styles from './index.module.css';
import image from '../../images/pregnancy-stock-photography-logo.png'

const Blogpost = ({ description, author }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt=""/>
            <p className={styles.description}>
                {description}
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