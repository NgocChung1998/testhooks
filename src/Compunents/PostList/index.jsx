import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    post:PropTypes.array,
};
PostList.defaultProps={
    post:[]
}
function PostList(props) {
    const {posts}=props
    return (
        <ul className='post-link'>
            {posts.map(post=>(
                <li className='' key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;