import React from 'react';
import Hero from '../Hero/Hero';
import Tag from '../tag/Tag';
import Post from '../post/Post';
import Subs from '../Subs/Subs';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Tag></Tag>
            <Post></Post>
            <Subs/>
        </>
    );
};

export default Home;