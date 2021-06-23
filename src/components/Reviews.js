import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Rate, Typography } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const Reviews = ({
    author = "Han Solo",
    title = `We supply a series of design principles`,
    summary = "",
    rating = 4.5
}) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
    ];

    return (
        <Comment
            actions={actions}
            author={author}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={`${author}`} />
            }
            content={
                <>
                    <Typography.Text strong> {title} </Typography.Text> <br />
                    <Typography.Text > {summary} </Typography.Text> <br />
                    <Rate allowHalf disabled value={rating} />
                </>
            }
        />
    );
};

export default Reviews;