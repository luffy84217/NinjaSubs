
import React from "react";
// MUI components
import { Avatar, CardHeader, Card } from '@material-ui/core';

import PostBody from './PostBody';
import PostFooter from './PostFooter';

export default ({ post }) => {
    return (
        <Card className='w-100 mt-2 shadow-lg'>
            <CardHeader
                className='text-dark'
                avatar={<Avatar src={post.image} alt='avatar' />}
                title={post.name}
                action={post.type}
                subheader={post.location} />
            <PostBody post={post} />
            <PostFooter post={post} />
        </Card >
    )
}
