import BlogList from './BlogList';
import axios from 'axios';
import React, { useEffect ,useState } from 'react'

function Blogs() {
    const [data, setData] = useState([]);
    useEffect(() =>{
     axios 
       .get(`https://62d3e3985112e98e4846dc8d.mockapi.io/blogs`)
       .then((res)=>{
         console.log(res.data)
         setData(res.data)
       })
       .catch((err ) =>{
         console.log(err);
       });
 
    },[]);

    
      
    
    return ( 
        <div className="home">
            <div className="content">
            <BlogList blogs={data} title="All Blogs"/>
        </div>
        </div>
     );
}

export default Blogs;