import {useParams} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Axios from "axios";
import data from '../home_page/data.json'
import Post from '../home_page/Post'

const MonumentPage = () => {
  const {id} = useParams();
    const[monument,setMonument] = useState([]);

  useEffect(() => {
    /*Axios.get("`Placeholder_Endpoint/${id}`")
      .then(res => setMonument(res.data));
      */
      setMonument(data.posts)
  },[]);

  return (
    <span className="center"><p>{id}</p></span>
  )
}

export default MonumentPage