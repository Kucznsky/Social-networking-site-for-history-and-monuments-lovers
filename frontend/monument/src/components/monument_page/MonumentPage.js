import {useParams} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Axios from "axios";
import data from '../home_page/data.json'
import Post from '../home_page/Post'
import Monument from "./Monument";

const MonumentPage = () => {
  const {id} = useParams();
    const[monument,setMonument] = useState([])
    const[user,setUser] = useState([])
  useEffect(() => {
    /*Axios.get("`Placeholder_Endpoint/${id}`")
      .then(res => setMonument(res.data));
      */
      setMonument(data.posts)
  },[]);
  useEffect(() => {
    /*Axios.get("`Placeholder_Endpoint/${id}`")
      .then(res => setMonument(res.data));
      */
      setUser(data.user)
  },[]);

  function merge_data (monument, user) {
    let arr = monument.concat(user)
    return arr
  }

  return (
    <div>
      <span className="center"><p>{id}</p></span>
      <Monument {...merge_data(monument,user)}></Monument>
    </div>
  )
}

export default MonumentPage