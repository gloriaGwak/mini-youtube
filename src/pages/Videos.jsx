import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    
    const {isLoading, error, data: videos } = useQuery({
        queryKey: ['video', keyword],
        queryFn: () =>{
            return youtube.search(keyword);
        },
        staleTime: 5000
        }
    );

    return (
        <div className='py-14 px-4'>
            비디오들 결과 :
            {keyword ? ` ${keyword}` : ' 핫트렌드🔥'}
            {/* {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong!</p>} */}
            {videos && 
                <ul>
                    {videos.map(video => 
                        <VideoCard key={video.id} video={video} />
                        // <>
                        //     {keyword ? (
                        //         <>
                        //         {/* {keyword} */}
                        //             <VideoCard key={video.id.videoId} video={video} />
                        //         </>
                        //     ) : (
                        //         <>
                        //         {/* {keyword} */}
                        //             <VideoCard key={video.id} video={video} />
                        //         </>
                        //     )}
                        // </>
                    )}
                </ul>
            }
        </div>
    )
}

