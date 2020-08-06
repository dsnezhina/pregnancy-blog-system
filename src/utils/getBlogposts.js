const getBlogposts = async (length) => {
    const promise = await fetch(`http://localhost:9999/api/blogpost?length=${length}`)
    const blogposts = await promise.json()
    
    return blogposts;
};

export default getBlogposts;