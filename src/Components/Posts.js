import React, {useEffect, useState} from 'react';
import { Api } from '../utils/_index'
import { Post } from './Post'
const API = new Api();


export const PostsList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts ()
    }, [])

    async function fetchPosts () {
        const response = await API.getData('posts');
        console.log(response);
        setPosts(response);
    }

    return (
        <div>
            {posts.map((item) => {
                return <Post key={item.id} item={item}/>
            })}
        </div>
    );
};