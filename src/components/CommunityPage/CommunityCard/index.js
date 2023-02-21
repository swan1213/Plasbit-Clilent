import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './style.css';

export const CommunityCard = props => {
    return (
            <div className='community_card'>
                <TwitterTweetEmbed
                tweetId={`${props.data.id}`}
                />
            </div>
    )
}