import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import getBlogposts from '../../utils/getBlogposts';
import UserContext from '../../Context';
import Button from '../../components/button/button';
import getCookie from '../../utils/getCookie';

const PublicationPage = () => {

    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(null);
    const [content, setContent] = useState(null);
    const history = useHistory();
    const params = useParams();

    const id = params.blogpostid;
    const context = useContext(UserContext);
    const { user } = context;

    const deletePost = async () => {

        const token = getCookie('x-auth-token');

        fetch(`http://localhost:9999/api/blogpost/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(res => {
                history.push('/publications');
            })
            .catch(e => {
                history.push('/error')
            });
    };

    const editPost = () => {
        history.push(`/edit/${id}`)
    };

    const getBlogpostDetails = useCallback(async () => {

        const blogpost = await getBlogposts(1, undefined, id);

        setTitle(blogpost.title);
        setAuthor(blogpost.author.username);
        setImage(blogpost.image);
        setCategory(blogpost.category);
        setContent(blogpost.content);

    }, [id]);


    useEffect(() => {

        getBlogpostDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageLayout>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt=""></img>
                <p className={styles.title}>
                    <b>{title}</b>
                </p>
                <p className={styles.paragraph}>
                    Author: <b>{author}</b>
                </p>
                <p className={styles.paragraph}>
                    Gategory: <b>{category}</b>
                </p>
                <p className={styles.content}>{content}</p>
                {(author === user.username) ? (<div className={styles['button-container']}>
                    <Button title='Edit' handleClick={editPost} />
                    <Button title='Delete' handleClick={deletePost} />
                </div>) : null}
            </div>
        </PageLayout>
    );
};

export default PublicationPage;