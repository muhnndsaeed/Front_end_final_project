import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    
                        <h2>{blog.title}</h2>
                        
                        <img src={blog.img}/>
                         <p>{blog.body}</p>
                        <p>Written by {blog.author}</p>
                    
                    
                </div>
            ))}
            <button> <Link className='btnlink' to="/create">Add Blog</Link></button>
        </div>
     );
}
 
export default BlogList;