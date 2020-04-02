import React from 'react';
import VideoItem from './videoItem';

const VideoList= ({ videos, onVideoSelect }) => {
    const renderedVideoList= videos.map((video) => {
        return (
            <div>
                <VideoItem key= {video.id.videoId} onVideoSelect= {onVideoSelect} video= {video}/>
            </div>
        );
    });

    return(
            <div className= 'ui relaxed divided list'>{renderedVideoList}</div>
    );
};

export default VideoList;