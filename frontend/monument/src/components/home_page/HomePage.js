import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import Axios from "axios";
import Post from './Post'

const HomePage = () => {

  const[post,setPost] = useState([]);

  useEffect(() => {
    Axios.get("EndPoint")
      .then(res => setPost(res.data));
  },[]);

  return (
    <div>
      <div>
        {post.map((movie) => {
          return(<Post key={post.id} {...post}></Post>);
        })}
      </div>
    </div>
  )
}

export default HomePage