import React from 'react'
import {Link} from 'react-router-dom';

const Post = (props) => {
  const {id, title, Localisation, Category, thumbnail, likes, comments} = props;
  return (
    <div className='book'>
      <Link to={`/userposts/${id}`}>
        <p className='listFirstLine'>{title}</p>
        <p className='listSmallerText'>{Localisation}</p> 
        <p className='listSmallerText'>{Category}</p>
        <p className='listSmallerText'>{thumbnail}</p>
        <p className='listSmallerText'>{likes}</p>
        <p className='listSmallerText'>{comments}</p>
      </Link>
    </div>
  );
}

export default Post