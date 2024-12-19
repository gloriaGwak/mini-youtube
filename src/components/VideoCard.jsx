import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideoCard({ video }) {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const navigate = useNavigate();
    return (
        <li className='w-full cursor-pointer' onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
            <div className="thumnail rounded-2xl md:rounded-lg">
                {video.kind === 'youtube#video' ? (
                    <img src={`${thumbnails.standard.url}`} alt={title} className='w-full' />
                ) : (
                    <img src={`${thumbnails.high.url}`} alt={title} className='w-full' />
                ) }
            </div>
            <div className='mt-4 text-base md:text-sm font-light text-opacity-80 break-words'>
                <h2 className='text-base md:text-lg font-medium text-opacity-100 leading-tight'>{title}</h2>
                <p className='mt-1'>{channelTitle}</p>
                <span>{formatAgo(publishedAt)}</span>
            </div>
        </li>
    );
}