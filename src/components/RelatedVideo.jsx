import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function RelatedVideo({id}) {
    const { youtube } = useYoutubeApi();
    const navigate = useNavigate();

    const {isLoading, error, data: videos } = useQuery({
        queryKey: ['related', id],
        queryFn: (e) => {
            return youtube.relatedVideo(id);
        }
    });
    
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            {videos && (
                <>
                    <ul className='overflow-y-auto flex flex-col gap-4 h-[50vh] md:h-auto'>
                        {videos.map(video => (
                            <li key={video.id} className='flex items-start w-full cursor-pointer pr-4 gap-2 md:gap-4' onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
                                <div className='min-w-150px w-[calc(30%-0.5rem)]'>
                                    <div className="video_area rounded-md md:rounded-lg">
                                        <img src={`${video.snippet.thumbnails.high.url}`} alt={video.snippet.title} className='w-full' />
                                    </div>
                                </div>
                                <div className='w-[calc(70%-0.5rem)] text-base md:text-sm font-light break-words'>
                                    <strong className='overflow-hidden overflow-ellipsis line-clamp-1 md:line-clamp-2 text-base md:text-sm font-medium text-opacity-100 leading-tight'>{video.snippet.title}</strong>
                                    <p className='mt-1 text-xs'>{video.snippet.channelTitle}</p>
                                    <span className='mt-1 text-xs'>{formatAgo(video.snippet.publishedAt)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

