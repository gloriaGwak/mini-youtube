import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';


export default function RelatedVideo({id}) {
    const { youtube } = useYoutubeApi();

    const {isLoading, error, data: videos } = useQuery({
        queryKey: ['related', id],
        queryFn: (e) => {
            return youtube.relatedVideo(id);
        },
        staleTime: 1000 * 60 *5
    });
    
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            {videos && (
                <>
                    <ul className='overflow-y-auto flex flex-col items-stretch gap-4 h-[50vh] lg:h-auto'>
                        {videos.map(video => (
                            <VideoCard key={video.id} video={video} type='list' />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}