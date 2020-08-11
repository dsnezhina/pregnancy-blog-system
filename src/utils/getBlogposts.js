const getBlogposts = async (length, category) => {

    const promise = await fetch(`http://localhost:9999/api/blogpost?length=${length}`);
    const blogposts = await promise.json();

    if (category) {
        return blogposts.filter(blogpost => {
            return blogpost.category.toLowerCase().replace(' ', '') === category;
        })
    };

    return blogposts;
};

export default getBlogposts;