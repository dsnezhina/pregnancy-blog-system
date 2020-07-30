import React, { Component } from 'react'
import styles from './index.module.css'
import Blogpost from '../blogpost';

class Blogposts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogposts: []
        }
    }

    getBlogposts = async () => {
        const promise = await fetch('http://localhost:9999/api/blogpost')
        const blogposts = await promise.json()
        this.setState({
            blogposts
        })
    }

    renderBlogposts() {
        const { blogposts } = this.state

        return blogposts.map(blogpost => {
            return (
                <Blogpost key={blogpost._id} {...blogpost} />
            )
        })
    }

    componentDidMount() {
        this.getBlogposts()
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Publications</h1>
                <div className={styles["blogposts-wrapper"]}>
                    {this.renderBlogposts()}
                </div>
            </div>
        )
    }
}

export default Blogposts