import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import Blogpost from '../blogpost';
import getBlogposts from '../../utils/getBlogposts';


const Blogposts = (props) => {

    const [blogposts, setBlogposts] = useState([]);

    const getAllBlogposts = useCallback(async () => {

        const blogposts = await getBlogposts(props.length, props.category);

        setBlogposts(blogposts);

    }, [props.length, props.category]);

    const renderBlogposts = () => {
        return blogposts.map((blogpost) => {
            return (
                <Blogpost key={blogpost._id} {...blogpost} />
            );
        });
    };

    useEffect(() => {
        getAllBlogposts();
    }, [props.updatedBlogpost, getAllBlogposts]);

    return (
        (blogposts.length > 0)
            ? (<div className={styles['blogposts-wrapper']}>
                {renderBlogposts()}
            </div>)
            : ((<div className={styles['blogposts-wrapper']}>
                <p className={styles.paragraph}>There is no blog posts yet...</p>
            </div>))
    );
};

export default Blogposts;
