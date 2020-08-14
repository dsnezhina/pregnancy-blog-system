import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import styles from './index.module.css';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import getCookie from '../../utils/getCookie';
import Alert from '../../components/alert';
import Select from '../../components/select';
import ImageInput from '../../components/image-input';
import Textarea from '../../components/input/textarea';
import formValidation from '../../utils/formValidation';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formValidation(title, image, category, content, setError)) {
            return;
        };

        const token = getCookie('x-auth-token');

        fetch('http://localhost:9999/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({
                title,
                image,
                category,
                content
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(res => {
            history.push('/publications');
        })
            .catch(e => {
                history.push('/error')
            });
    };

    const openWidget = () => {

        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'dd6thfux1',
            uploadPreset: 'Softuni'
        }, (error, result) => {

            if (result.event === 'success') {
                setImage(result.info.url);
            };

            if (error) {
                setError('Image error! Please try again.');
            };
        });

        widget.open();
    };


    return (
        <PageLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Title title='Create a post...' />
                {error ? <Alert message={error} /> : null}
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label='Title'
                    id='title'
                />
                <ImageInput onClick={openWidget} />
                <Select onChange={(e) => { setCategory(e.target.value) }} />
                <Textarea content={content} onChange={(e) => setContent(e.target.value)} />
                <SubmitButton title='Post' onClick={handleSubmit} />
            </form>
        </PageLayout >
    );
};

export default CreatePostPage;

