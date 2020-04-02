import React from 'react';
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div onClick= {() => onVideoSelect(video)} className = 'video-item item'>
            <img alt= {video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='headers'>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;