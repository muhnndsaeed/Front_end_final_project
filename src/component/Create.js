import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {
   const navigate = useNavigate(); 
   const [title , setTitle] = useState("");
   const [body , setBody] = useState("");
   const [img , setImg] = useState("");
   const [author,setAuthor] = useState ("");
   const postData =()=> {
    axios.post('https://62d3e3985112e98e4846dc8d.mockapi.io/blogs', {
        title,
        img,
        body,
        author
        
    })
    .then(res=>{
        console.log(res);
        navigate('/Blogs')
        
    })
    .catch(err=>{console.log(err)})

}

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            
                <label>Blog Title</label>
                <input type="text" onChange={(e)=> {setTitle(e.target.value);}}></input> 
                <label>Image URL</label>
                <input type="text" onChange={(e)=> {setImg(e.target.value);}}></input> 
                <label>Blog Body:</label>
                <textarea onChange={(e)=> {setBody(e.target.value);}}></textarea> 
                <label>Blog author:</label>
                <input type="text" onChange={(e) => {setAuthor(e.target.value);}} ></input>
                
                
                <button onClick={postData}>Add Blog</button>
                 
            
        </div>
     );
}
 
export default Create;