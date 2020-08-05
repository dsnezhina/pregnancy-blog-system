const getBlogposts = async () => {
    const promise = await fetch('http://localhost:9999/api/blogpost')
    const blogposts = await promise.json()
    
    return blogposts;
};

export default getBlogposts;