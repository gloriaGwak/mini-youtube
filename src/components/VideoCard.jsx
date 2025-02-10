import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from "dompurify";
import { formatAgo } from '../util/date';
import ChannerInfo from './ChannerInfo';


export default function VideoCard({ video, type }) {
    const { title, thumbnails, channelTitle, channelId, publishedAt } = video.snippet;
    const navigate = useNavigate();
    const isList = type === 'list';
    
    return (
        <>
            {isList ? (
                // video card in related list
                <li key={video.id} onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
                    <Link className='flex items-start w-full cursor-pointer pr-4 gap-2 md:gap-4'>
                        <div className='min-w-[130px] md:min-w-[180px] w-[calc(30%-0.5rem)]'>
                            <div className="video_area rounded-md md:rounded-lg">
                                <img src={`${video.snippet.thumbnails.high.url}`} alt={video.snippet.title} className='w-full' />
                            </div>
                        </div>
                        <div className='w-[calc(70%-0.5rem)] text-base md:text-sm font-light break-words'>
                            <strong 
                                className='overflow-hidden overflow-ellipsis line-clamp-1 md:line-clamp-2 text-base md:text-sm font-medium text-opacity-100 leading-tight'
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(video.snippet.title),
                                }}
                            />
                            <ChannerInfo id={video.snippet.channelId} name={video.snippet.channelTitle} type='list' />
                            <span className='mt-1 text-xs'>{formatAgo(video.snippet.publishedAt)}</span>
                        </div>
                    </Link>
                </li>
            ) : (
                // video card in video list
                <li className='w-full cursor-pointer' onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
                    <Link>
                        <div className="video_area rounded-2xl md:rounded-lg">
                            {video.kind === 'youtube#video' ? (
                                <img src={`${thumbnails.standard.url}`} alt={title} className='w-full' />
                            ) : (
                                <img src={`${thumbnails.high.url}`} alt={title} className='w-full' />
                            ) }
                        </div>
                        <div className='mt-4 text-base md:text-sm font-light text-opacity-80 break-words'>
                            <h2 
                                className='text-base md:text-lg font-medium text-opacity-100 leading-tight line-clamp-auto md:line-clamp-2'
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(title),
                                }}
                            />
                            <ChannerInfo id={channelId} name={channelTitle} />
                            {/* <p className='mt-1'>{channelTitle}</p> */}
                            <span>{formatAgo(publishedAt)}</span>
                        </div>
                    </Link>
                </li>
            )}
        </>
    );
}