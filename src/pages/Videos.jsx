import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();

    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['video', keyword],
        queryFn: async () => {
            // delaying 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
            return youtube.search(keyword);
        }
    });

    return (
        <main className='py-20 md:py-14'>
            <div className='inner'>
                {isLoading && <Loading />}
                {error && <ErrorMessage/> }
                {videos && 
                    <ul className='grid grid-cols-1 gap-y-12 md:gap-y-8 md:gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                        {videos.map(video => 
                            <VideoCard key={video.id} video={video} />
                        )}
                    </ul>
                }
            </div>
        </main>
    )
}

