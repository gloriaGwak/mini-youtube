import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

import { useNavigate, useLocation } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function RelatedVideo({id}) {
    const { youtube } = useYoutubeApi();
    const navigate = useNavigate();
    const {state: {video}} = useLocation();

    const {isLoading, error, data: videos } = useQuery({
        queryKey: ['playlists', id],
        queryFn: (e) => {
            return youtube.relatedVideo(id);
        }
    });
    
    console.log(video)
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            {videos && (
                <>
                    <h3 className='mb-4 md:mb-6 font-bold text-xl lg:text-3xl'>Related Videos</h3>
                    <ul className='overflow-y-auto flex flex-col gap-4 h-screen'>
                        {videos.map(vdo => (
                            <li key={vdo.id} className='flex items-start w-full cursor-pointer gap-2 md:gap-4' onClick={() => navigate(`/videos/watch/${vdo.id}`, {state: {video}})}>
                                <div className='min-w-150px basis-[calc(30%-0.5rem)] lg:basis-[calc(50%-0.5rem)]'>
                                    <div className="video_area rounded-md md:rounded-lg">
                                        <img src={`${vdo.snippet.thumbnails.high.url}`} alt={vdo.snippet.title} className='w-full' />
                                    </div>
                                </div>
                                <div className='basis-[calc(70%-0.5rem)] lg:basis-[calc(50%-0.5rem)] text-base md:text-sm font-light break-words'>
                                    <strong className='overflow-hidden overflow-ellipsis line-clamp-1 md:line-clamp-2 text-base md:text-sm font-medium text-opacity-100 leading-tight'>{vdo.snippet.title}</strong>
                                    <p className='mt-1 text-xs'>{vdo.snippet.channelTitle}</p>
                                    <span className='mt-1 text-xs'>{formatAgo(vdo.snippet.publishedAt)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

