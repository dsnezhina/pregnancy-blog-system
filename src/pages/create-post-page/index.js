import React, { useState } from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import styles from './index.module.css';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import Blogposts from '../../components/blogposts';
import getCookie from '../../utils/getCookie';


const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [updatedBlogpost, setUpdatedBlogpost] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = getCookie('x-auth-token');

        await fetch('http://localhost:9999/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        setTitle('');
        setContent('');
        setUpdatedBlogpost([...updatedBlogpost, 1]);
    };

    return (
        <PageLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Title title='Create a post...' />
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Title"
                    id="title"
                />
                <textarea id="content" className={styles.textarea} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <SubmitButton title='Post' onClick={handleSubmit} />
            </form>
            <Blogposts length={3} updatedBlogpost={updatedBlogpost} />
        </PageLayout >
    );
};

export default CreatePostPage;

