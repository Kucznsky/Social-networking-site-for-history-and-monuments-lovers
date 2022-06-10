import React from 'react'
import {Link} from 'react-router-dom';


const Post = (props) => {

  function formatImageUrl(url) {
    const width = '400'
    const height = '400'

    return url.replace('{width}', width).replace('{height}', height)
 }

  const {id, title, localisation, category, thumbnail, likes, number_of_comments} = props;
  return (
    <div className='book'>
      <Link to={`/monument_page/${id}`}>
          <div style={{padding:'1rem'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%', gap:'2rem'}}>
              <p className='listFirstLine'>{title}</p>
              <p className='listSmallerText'>{localisation}</p> 
            </div>
            <p className='categories'>{category}</p>
          </div>
          <img src={formatImageUrl(thumbnail)} alt=""/>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%', background: '#61DBFB', gap:'0.8rem',paddingBottom:'0.4rem'}}>
            <span className='center'><button className='likes'>{likes} likes</button></span>
            <span className='center'><Link className='comments' to='/comment'>{number_of_comments} comments</Link></span>
          </div>
      </Link>
    </div>
  );
}

export default Post