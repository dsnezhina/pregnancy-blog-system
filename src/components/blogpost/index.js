import React from 'react';
import styles from './index.module.css';

const Blogpost = ({ _id, title, image, content, author }) => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.image} src={image} alt=""></img> */}
            <p className={styles.title}>
                <b>{title}</b> by <b>{author.username}</b>
            </p>
            <p className={styles.content}>
                {content}
            </p>
            <div>
                <span className={styles.user}>
                    <a className="btn" href={`/publication/${_id}`}>Details</a>
                </span>
            </div>
        </div>
    );
}

export default Blogpost;


