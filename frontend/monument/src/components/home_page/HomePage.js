import React, {useState,useEffect} from "react";
//import {Link} from 'react-router-dom';
import Axios from "axios";
import Post from './Post'
import data from './data.json'


const HomePage = () => {

  const[post,setPost] = useState([]);

  useEffect(() => {
    /*Axios.get("EndPoint")
      .then(res => setPost(res.data));*/
      setPost(data.posts)
    
  },[]);

  return (
    <div className="center">
      <div className="booklist">
        {post.map((post) => {
          return(<Post key={post.id} {...post}></Post>);
        })}
      </div>
    </div>
  )
}

export default HomePage