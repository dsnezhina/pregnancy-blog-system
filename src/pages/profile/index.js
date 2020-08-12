import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import Blogpost from '../../components/blogpost';


const ProfilePage = () => {
    const [username, setUsername] = useState(null);
    const [blogposts, setBlogposts] = useState(null);
    const history = useHistory();
    const params = useParams();

    const getData = useCallback(async () => {
        const id = params.userid;
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        };

        const user = await response.json();

        setUsername(user.username);
        setBlogposts(user.blogpostHistory);
    }, [params.userid, history]);

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderBlogposts = () => {

        return blogposts.map((blogpost, index) => {
            const data = { ...blogpost };
            data.author = { username };
            return (
                <Blogpost key={blogpost._id} index={index} {...data} />
            );
        });
    };

    if (!username || !blogposts) {
        return (
            <PageLayout>
                <div>Loading...</div>
            </PageLayout>
        );
    };

    return (
        <PageLayout>
            <div>
                <Title title='Profile' />
                <p className={styles.paragraph}><b>User: {username}</b></p>
                <p className={styles.paragraph}><b>Posts: {blogposts.length}</b></p>
            </div>
            <div className={styles['blogposts-wrapper']}>
                {renderBlogposts()}
            </div>
        </PageLayout>
    );
};

export default ProfilePage;