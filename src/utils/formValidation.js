const formValidation = (title, image, category, content, setError) => {
    if (title === '') {
        setError('Please add title!');
        return true;
    } else if (image === '') {
        setError('Please upload image!');
        return true;
    } else if (category === '') {
        setError('Please choose category!');
        return true;
    } else if (content === '') {
        setError('Please add content!');
        return true;
    } else {
        setError(null);
        return false;
    };
};

export default formValidation;