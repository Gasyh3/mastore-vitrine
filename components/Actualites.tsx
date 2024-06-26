import React, { useEffect, useState } from 'react';
import { BackgroundGradientCard } from '@/components/Card';
import axios from 'axios';
import { PUBLIC_API_ROUTES } from '@/utils';

export function ActualiteBigCards() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(PUBLIC_API_ROUTES.GET_POSTS)
            .then(response => {
                const latestPosts = response.data.slice(-3);
                setPosts(latestPosts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div className='w-[95vw] flex flex-wrap items-center justify-center p-3 gap-4'>
            {posts.map((post: any) => (
                <BackgroundGradientCard 
                    key={post.id}
                    name={post.title}
                    img={post.imgUrls[0]} // Assuming the first image URL is used as the card image
                    description={post.content}

                />
            ))}
        </div>
    );
}
