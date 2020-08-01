import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import styles from './index.module.css';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input'


class CreatePostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        };
    };


    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {
            title,
            content
        } = this.state;

        //TODO createPost()

        console.log("title", title)
        console.log("content", content)
    }



    render() {

        const {
            title,
            content
        } = this.state;

        return (
            <PageLayout>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <Title title='Create a post...' />
                    <Input
                        value={title}
                        onChange={(e) => this.onChange(e, "title")}
                        label="Title"
                        id="title"
                    />
                    <textarea id="content" className={styles.textarea} defaultValue="" onChange={(e) => this.onChange(e, "content")}></textarea>
                    <SubmitButton title='Post' />
                </form>
            </PageLayout >
        );
    }


};

export default CreatePostPage;