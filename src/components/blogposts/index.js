import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import Blogpost from '../blogpost';
import getBlogposts from '../../utils/getBlogposts'


const Blogposts = (props) => {

    const [blogposts, setBlogposts] = useState([]);

    const getAllBlogposts = useCallback(async () => {

        const blogposts = await getBlogposts(props.length);
        setBlogposts(blogposts);

    }, [props.length]);

    const renderBlogposts = () => {
        return blogposts.map((blogpost, index) => {
            return (
                <Blogpost key={blogpost._id} index={index} {...blogpost} />
            )
        })
    };

    useEffect(() => {
        getAllBlogposts();
    }, [props.updatedBlogpost, getAllBlogposts]);

    return (
        <div className={styles["blogposts-wrapper"]}>
            {renderBlogposts()}
        </div>
    );
};

export default Blogposts;
