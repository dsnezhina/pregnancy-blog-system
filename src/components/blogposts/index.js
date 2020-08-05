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

// class Blogposts extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             blogposts: []
//         }
//     }

//     getBlogposts = async () => {
//         const promise = await fetch('http://localhost:9999/api/blogpost')
//         const blogposts = await promise.json()
//         this.setState({
//             blogposts
//         })
//     }

//     renderBlogposts() {
//         const { blogposts } = this.state

//         return blogposts.map(blogpost => {
//             return (
//                 <Blogpost key={blogpost._id} {...blogpost} />
//             )
//         })
//     }

//     componentDidMount() {
//         this.getBlogposts()
//     }

//     render() {
//         return (
//             <div className={styles.container}>
//                 <div className={styles["blogposts-wrapper"]}>
//                     {this.renderBlogposts()}
//                 </div>
//             </div>
//         )
//     }
// }

