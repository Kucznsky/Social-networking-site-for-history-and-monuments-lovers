import React from 'react'

const Monument = (props) => {

    function formatImageUrl(url) {
        const width = '400'
        const height = '400'

        return url.replace('{width}', width).replace('{height}', height)
    }

    const {id, title, localisation, category, thumbnail, username, old_pictures, modern_pictures, links, user_id} = props;  
       
  return (
    <Link to={`/user_posts/${id}`}><p className='listFirstLine'>{username}</p></Link>
  )
}

export default Monument