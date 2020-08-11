import React from 'react';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const Blogpost = ({ _id, title, image, content, category, author }) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/publication/${_id}`)
    }

    return (
        <div className={styles.container}>
            {/* <img className={styles.image} src={image} alt=""></img> */}
            <p className={styles.title}>
                <b>{title}</b> by <b>{author.username}</b>
                <br />Category: <b>{category}</b>
            </p>
            <p className={styles.content}>
                {content.slice(0, 1000).concat('...')}
            </p>
            <div>
                <span className={styles.user}>
                    {/* <a className="btn" href={`/publication/${_id}`}>Details</a> */}
                    <button className={styles.button} onClick={handleClick}>Details</button>
                </span>
            </div>
        </div>
    );
}

export default Blogpost;


