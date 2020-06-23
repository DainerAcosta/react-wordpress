import React, {useEffect, Fragment} from 'react';
import Post from './post.components';

const PostsComponent = () => {

    useEffect(() => {

    }, []);

    return (
        <Fragment>
            <h1>Hola desde posts component</h1>
            <Post/>
        </Fragment>
     );
}
 
export default PostsComponent;