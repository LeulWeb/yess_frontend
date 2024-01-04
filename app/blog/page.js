import React from 'react';
import Help from '../components/blog/Help';
import News from '../components/blog/News';
import Suggestion from '../components/blog/Suggestion';
import Events from '../components/blog/Events';


const Blog =()=>{
    return(
        <div className='story overflow-x-hidden'>
            <Help />
            <News />
            <Suggestion />
            <Events />
        </div>
    )
}


export default Blog;