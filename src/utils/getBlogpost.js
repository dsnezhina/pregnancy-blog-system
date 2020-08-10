const getBlogposts = async (id) => {
    const promise = await fetch(`http://localhost:9999/api/blogpost?id=${id}`)
    const blogposts = await promise.json()
    
    return blogposts;
};

export default getBlogposts;