import React, {useEffect, useState} from 'react';
import { Api } from '../utils/_index'
import { Post } from './Post'
import { Loading } from '../UI/_index'
const API = new Api();


export const PostsList = () => {

    const [posts, setPosts] = useState([]);

    const [loadingPosts, setLoadingPosts] = useState(false)

    useEffect(() => {
        setLoadingPosts(true)
        fetchPosts ();
        setTimeout(() => setLoadingPosts(false), 2000)
    }, [])

    async function fetchPosts () {
        const response = await API.getData('posts');
        console.log(response);
        setPosts(response);
    }

    return (
        <div>
            {!posts.length
                ? <p>Fetch error!</p>
                : <p>Everything OK</p>
           }
            {loadingPosts
                ? <Loading />
                : posts.map((item) => <Post key={item.id} item={item} />)
            }
        </div>
    );
};