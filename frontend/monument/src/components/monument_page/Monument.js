import React from 'react'
import {Link} from 'react-router-dom'

const Monument = (props) => {

    function formatImageUrl(url) {
        const width = '400'
        const height = '400'

        return url.replace('{width}', width).replace('{height}', height)
    }

    const {id, title, localisation, category, thumbnail, username, old_pictures, modern_pictures, links, user_id, comments} = props;  
       
  return (
    <div>
      <p className='listFirstLine'>{title}</p>
      <Link to={`/user_posts/${id}`}><span><img src={formatImageUrl(thumbnail)} alt=""></img>'<p className='listFirstLine'>{username}</p></span></Link>
      <p className='listSmallerText'>{localisation}</p> 
      <p className='categories'>{category}</p>
      <fieldset>
        {links.map((link) => (<a href={links}>{links}</a>))}
      </fieldset>
      <div>
        {old_pictures.map((picture) => (<img src={old_pictures} alt=''></img>))}
      </div>
      <div>
        {modern_pictures.map((picture) => (<img src={modern_pictures} alt=''></img>))}
      </div>
    </div>
  )
}

export default Monument